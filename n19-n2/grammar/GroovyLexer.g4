/*
 * This file is adapted from the Antlr4 Java grammar which has the following license
 *
 *  Copyright (c) 2013 Terence Parr, Sam Harwell
 *  All rights reserved.
 *  [The "BSD licence"]
 *
 *    http://www.opensource.org/licenses/bsd-license.php
 *
 * Subsequent modifications by the Groovy community have been done under the Apache License v2:
 *
 *  Licensed to the Apache Software Foundation (ASF) under one
 *  or more contributor license agreements.  See the NOTICE file
 *  distributed with this work for additional information
 *  regarding copyright ownership.  The ASF licenses this file
 *  to you under the Apache License, Version 2.0 (the
 *  "License"); you may not use this file except in compliance
 *  with the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

/**
 * The Groovy grammar is based on the official grammar for Java:
 * https://github.com/antlr/grammars-v4/blob/master/java/Java.g4
 */
lexer grammar GroovyLexer;

options {
    superClass = AbstractLexer;
}

@header {
    import {AbstractLexer} from './AbstractLexer';
    import {GroovySyntaxSource} from './GroovySyntaxSource';
    import {SemanticPredicates} from './SemanticPredicates';

    class Paren {
        private readonly _text: string;
        private readonly _lastTokenType: number;
        private readonly _line: number;
        private readonly _column: number;
    
        constructor(text: string, lastTokenType: number, line: number, column: number) {
            this._text = text;
            this._lastTokenType = lastTokenType;
            this._line = line;
            this._column = column;
        }
    
        get text(): string {
            return this._text;
        }
    
        get lastTokenType(): number {
            return this._lastTokenType;
        }
    
        // @SuppressWarnings("unused")
        get line(): number {
            return this._line;
        }
    
        // @SuppressWarnings("unused")
        get column(): number {
            return this._column;
        }
    
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        equals(obj: any): boolean {
            if (obj === this) {
                return true;
            }
            if (obj == null || !(obj instanceof Paren)) {
                return false;
            }
    
            return this.text === obj.text && this.line === obj.line && this.column === obj.column;
        }
    }
}

@members {
    private _errorIgnored: boolean;
    private _tokenIndex: number;
    private _lastTokenType: number;
    private _invalidDigitCount: number;

    /**
     * Record the index and token type of the current token while emitting tokens.
     */
    emitToken(token: Token): void {
        this._tokenIndex++;

        const tokenType = token.type;
        if (Token.DEFAULT_CHANNEL == token.channel) {
            this._lastTokenType = tokenType;
        }

        if (GroovyLexer.RollBackOne == tokenType) {
            this.rollbackOneChar();
        }

        super.emitToken(token);
    }

    private static readonly REGEX_CHECK_ARRAY = [
        GroovyLexer.DEC,
        GroovyLexer.INC,
        GroovyLexer.THIS,
        GroovyLexer.RBRACE,
        GroovyLexer.RBRACK,
        GroovyLexer.RPAREN,
        GroovyLexer.GStringEnd,
        GroovyLexer.NullLiteral,
        GroovyLexer.StringLiteral,
        GroovyLexer.BooleanLiteral,
        GroovyLexer.IntegerLiteral,
        GroovyLexer.FloatingPointLiteral,
        GroovyLexer.Identifier,
        GroovyLexer.CapitalizedIdentifier
    ].sort();

    private isRegexAllowed(): boolean {
        return !GroovyLexer.REGEX_CHECK_ARRAY.includes(this._lastTokenType);
    }

    /**
     * just a hook, which will be overridden by GroovyLangLexer
     */
    protected rollbackOneChar(): void {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected enterParenCallback(_text: string): void {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected exitParenCallback(_text: string): void {
    }

    private readonly _parenStack: Array<Paren> = [];

    private enterParen(): void {
        const text = this.text;
        this.enterParenCallback(text);

        this._parenStack.push(new Paren(text, this._lastTokenType, this.line, this.column));
    }

    private exitParen(): void {
        const text = this.text;
        this.exitParenCallback(text);

        const paren = this._parenStack[0];
        if (null == paren) {
            return;
        }
        this._parenStack.shift();
    }

    private isInsideParens(): boolean {
        const paren = this._parenStack[0];

        // We just care about "(", "[" and "?[", inside which the new lines will be ignored.
        // Notice: the new lines between "{" and "}" can not be ignored.
        if (null == paren) {
            return false;
        }

        const text = paren.text;

        return ('(' === text && GroovyLexer.TRY != paren.lastTokenType) // we don't treat try-paren(i.e. try (....)) as parenthesis
            || '[' === text || '?[' === text;
    }

    private ignoreTokenInsideParens(): void {
        if (!this.isInsideParens()) {
            return;
        }

        this._channel = Token.HIDDEN_CHANNEL;
    }
    
    private ignoreMultiLineCommentConditionally(): void {
        if (!this.isInsideParens() && SemanticPredicates.isFollowedByWhiteSpaces(this._input)) {
            return;
        }

        this._channel = Token.HIDDEN_CHANNEL;
    }

    get syntaxErrorSource(): number {
        return GroovySyntaxSource.LEXER;
    }

    get errorLine(): number {
        return this.line;
    }

    get errorColumn(): number {
        return this.column + 1;
    }

    popMode(): number {
        try {
            return super.popMode();
        } catch (e /* EmptyStackException */) { // raised when parens are unmatched: too many ), ], or }
            if (e instanceof Error && e.message === 'EmptyStackException') {
                // Ignore
            } else {
                throw (e);
            }
        }

        return Number.MIN_VALUE;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private addComment(_type: number): void {
        // TODO: for what?
        // const text =
        this._input.getText(this._tokenStartCharIndex, this._input.index - 1);
    }

    private static isJavaIdentifierStartAndNotIdentifierIgnorable(codePoint: number): boolean {
        return SemanticPredicates.isJavaIdentifierStart(codePoint) && !SemanticPredicates.isIdentifierIgnorable(codePoint);
    }

    private static isJavaIdentifierPartAndNotIdentifierIgnorable(codePoint: number): boolean {
        return SemanticPredicates.isJavaIdentifierPart(codePoint) && !SemanticPredicates.isIdentifierIgnorable(codePoint);
    }

    isErrorIgnored(): boolean {
        return this._errorIgnored;
    }

    setErrorIgnored(errorIgnored: boolean): void {
        this._errorIgnored = errorIgnored;
    }
}


// §3.10.5 String Literals
StringLiteral
    :   GStringQuotationMark  DqStringCharacter*  GStringQuotationMark
    |   SqStringQuotationMark  SqStringCharacter*  SqStringQuotationMark
    |   Slash { this.isRegexAllowed() && this._input.LA(1) !== SemanticPredicates.ASTERISK_CHAR }?  SlashyStringCharacter+  Slash

    |   TdqStringQuotationMark  TdqStringCharacter*  TdqStringQuotationMark
    |   TsqStringQuotationMark  TsqStringCharacter*  TsqStringQuotationMark
    |   DollarSlashyGStringQuotationMarkBegin  DollarSlashyStringCharacter+  DollarSlashyGStringQuotationMarkEnd
    ;

GStringBegin
    :   GStringQuotationMark DqStringCharacter* Dollar -> pushMode(DQ_GSTRING_MODE), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
TdqGStringBegin
    :   TdqStringQuotationMark   TdqStringCharacter* Dollar -> type(GStringBegin), pushMode(TDQ_GSTRING_MODE), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
SlashyGStringBegin
    :   Slash { this.isRegexAllowed() && this._input.LA(1) !== SemanticPredicates.ASTERISK_CHAR }? SlashyStringCharacter* Dollar { SemanticPredicates.isFollowedByJavaLetterInGString(this._input) }? -> type(GStringBegin), pushMode(SLASHY_GSTRING_MODE), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
DollarSlashyGStringBegin
    :   DollarSlashyGStringQuotationMarkBegin DollarSlashyStringCharacter* Dollar { SemanticPredicates.isFollowedByJavaLetterInGString(this._input) }? -> type(GStringBegin), pushMode(DOLLAR_SLASHY_GSTRING_MODE), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;

mode DQ_GSTRING_MODE;
GStringEnd
    :   GStringQuotationMark     -> popMode
    ;
GStringPart
    :   Dollar  -> pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
GStringCharacter
    :   DqStringCharacter -> more
    ;

mode TDQ_GSTRING_MODE;
TdqGStringEnd
    :   TdqStringQuotationMark    -> type(GStringEnd), popMode
    ;
TdqGStringPart
    :   Dollar   -> type(GStringPart), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
TdqGStringCharacter
    :   TdqStringCharacter -> more
    ;

mode SLASHY_GSTRING_MODE;
SlashyGStringEnd
    :   Dollar? Slash  -> type(GStringEnd), popMode
    ;
SlashyGStringPart
    :   Dollar { SemanticPredicates.isFollowedByJavaLetterInGString(this._input) }?   -> type(GStringPart), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
SlashyGStringCharacter
    :   SlashyStringCharacter -> more
    ;

mode DOLLAR_SLASHY_GSTRING_MODE;
DollarSlashyGStringEnd
    :   DollarSlashyGStringQuotationMarkEnd      -> type(GStringEnd), popMode
    ;
DollarSlashyGStringPart
    :   Dollar { SemanticPredicates.isFollowedByJavaLetterInGString(this._input) }?   -> type(GStringPart), pushMode(GSTRING_TYPE_SELECTOR_MODE)
    ;
DollarSlashyGStringCharacter
    :   DollarSlashyStringCharacter -> more
    ;

mode GSTRING_TYPE_SELECTOR_MODE;
GStringLBrace
    :   '{' { this.enterParen();  } -> type(LBRACE), popMode, pushMode(DEFAULT_MODE)
    ;
GStringIdentifier
    :   IdentifierInGString -> type(Identifier), popMode, pushMode(GSTRING_PATH_MODE)
    ;


mode GSTRING_PATH_MODE;
GStringPathPart
    :   Dot IdentifierInGString
    ;
RollBackOne
    :   . {
            // a trick to handle GStrings followed by EOF properly
            const readChar: number = this._input.LA(-1);
            if (Token.EOF === this._input.LA(1) && ('"'.charCodeAt(0) === readChar || '/'.charCodeAt(0) === readChar)) {
                this._type = GroovyLexer.GStringEnd;
            } else {
                this._channel = Token.HIDDEN_CHANNEL;
            }
          } -> popMode
    ;


mode DEFAULT_MODE;
// character in the double quotation string. e.g. "a"
fragment
DqStringCharacter
    :   ~["\r\n\\$]
    |   EscapeSequence
    ;

// character in the single quotation string. e.g. 'a'
fragment
SqStringCharacter
    :   ~['\r\n\\]
    |   EscapeSequence
    ;

// character in the triple double quotation string. e.g. """a"""
fragment TdqStringCharacter
    :   ~["\\$]
    |   GStringQuotationMark { this._input.LA(1) !== SemanticPredicates.DOUBLE_QUOTE_CHAR || this._input.LA(2) !== SemanticPredicates.DOUBLE_QUOTE_CHAR || this._input.LA(3) === SemanticPredicates.DOUBLE_QUOTE_CHAR && (this._input.LA(4) !== SemanticPredicates.DOUBLE_QUOTE_CHAR || this._input.LA(5) !== SemanticPredicates.DOUBLE_QUOTE_CHAR) }?
    |   EscapeSequence
    ;

// character in the triple single quotation string. e.g. '''a'''
fragment TsqStringCharacter
    :   ~['\\]
    |   SqStringQuotationMark { this._input.LA(1) !== SemanticPredicates.SINGLE_QUOTE_CHAR || this._input.LA(2) !== SemanticPredicates.SINGLE_QUOTE_CHAR || this._input.LA(3) === SemanticPredicates.SINGLE_QUOTE_CHAR && (this._input.LA(4) !== SemanticPredicates.SINGLE_QUOTE_CHAR || this._input.LA(5) !== SemanticPredicates.SINGLE_QUOTE_CHAR) }?
    |   EscapeSequence
    ;

// character in the slashy string. e.g. /a/
fragment SlashyStringCharacter
    :   SlashEscape
    |   Dollar { !SemanticPredicates.isFollowedByJavaLetterInGString(this._input) }?
    |   ~[/$\u0000]
    ;

// character in the dollar slashy string. e.g. $/a/$
fragment DollarSlashyStringCharacter
    :   DollarDollarEscape
    |   DollarSlashDollarEscape { this._input.LA(-4) !== SemanticPredicates.DOLLAR_CHAR }?
    |   DollarSlashEscape { this._input.LA(1) !== SemanticPredicates.DOLLAR_CHAR }?
    |   Slash { this._input.LA(1) !== SemanticPredicates.DOLLAR_CHAR }?
    |   Dollar { !SemanticPredicates.isFollowedByJavaLetterInGString(this._input) }?
    |   ~[/$\u0000]
    ;

// Groovy keywords
AS              : 'as';
DEF             : 'def';
IN              : 'in';
TRAIT           : 'trait';
THREADSAFE      : 'threadsafe'; // reserved keyword

// the reserved type name of Java10
VAR             : 'var';

// §3.9 Keywords
BuiltInPrimitiveType
    :   BOOLEAN
    |   CHAR
    |   BYTE
    |   SHORT
    |   INT
    |   LONG
    |   FLOAT
    |   DOUBLE
    ;

ABSTRACT      : 'abstract';
ASSERT        : 'assert';

fragment
BOOLEAN       : 'boolean';

BREAK         : 'break';
YIELD         : 'yield';

fragment
BYTE          : 'byte';

CASE          : 'case';
CATCH         : 'catch';

fragment
CHAR          : 'char';

CLASS         : 'class';
CONST         : 'const';
CONTINUE      : 'continue';
DEFAULT       : 'default';
DO            : 'do';

fragment
DOUBLE        : 'double';

ELSE          : 'else';
ENUM          : 'enum';
EXTENDS       : 'extends';
FINAL         : 'final';
FINALLY       : 'finally';

fragment
FLOAT         : 'float';


FOR           : 'for';
IF            : 'if';
GOTO          : 'goto';
IMPLEMENTS    : 'implements';
IMPORT        : 'import';
INSTANCEOF    : 'instanceof';

fragment
INT           : 'int';

INTERFACE     : 'interface';

fragment
LONG          : 'long';

NATIVE        : 'native';
NEW           : 'new';
NON_SEALED    : 'non-sealed';

PACKAGE       : 'package';
PERMITS       : 'permits';
PRIVATE       : 'private';
PROTECTED     : 'protected';
PUBLIC        : 'public';

RECORD        : 'record';
RETURN        : 'return';

SEALED        : 'sealed';

fragment
SHORT         : 'short';


STATIC        : 'static';
STRICTFP      : 'strictfp';
SUPER         : 'super';
SWITCH        : 'switch';
SYNCHRONIZED  : 'synchronized';
THIS          : 'this';
THROW         : 'throw';
THROWS        : 'throws';
TRANSIENT     : 'transient';
TRY           : 'try';
VOID          : 'void';
VOLATILE      : 'volatile';
WHILE         : 'while';


// §3.10.1 Integer Literals

IntegerLiteral
    :   (   DecimalIntegerLiteral
        |   HexIntegerLiteral
        |   OctalIntegerLiteral
        |   BinaryIntegerLiteral
        ) (Underscore { this.require(this._errorIgnored, "Number ending with underscores is invalid", -1, true); })?

    // !!! Error Alternative !!!
    |   Zero ([0-9] { this._invalidDigitCount++; })+ { this.require(this._errorIgnored, "Invalid octal number", -(this._invalidDigitCount + 1), true); } IntegerTypeSuffix?
    ;

fragment
Zero
    :   '0'
    ;

fragment
DecimalIntegerLiteral
    :   DecimalNumeral IntegerTypeSuffix?
    ;

fragment
HexIntegerLiteral
    :   HexNumeral IntegerTypeSuffix?
    ;

fragment
OctalIntegerLiteral
    :   OctalNumeral IntegerTypeSuffix?
    ;

fragment
BinaryIntegerLiteral
    :   BinaryNumeral IntegerTypeSuffix?
    ;

fragment
IntegerTypeSuffix
    :   [lLiIgG]
    ;

fragment
DecimalNumeral
    :   Zero
    |   NonZeroDigit (Digits? | Underscores Digits)
    ;

fragment
Digits
    :   Digit (DigitOrUnderscore* Digit)?
    ;

fragment
Digit
    :   Zero
    |   NonZeroDigit
    ;

fragment
NonZeroDigit
    :   [1-9]
    ;

fragment
DigitOrUnderscore
    :   Digit
    |   Underscore
    ;

fragment
Underscores
    :   Underscore+
    ;

fragment
Underscore
    :   '_'
    ;

fragment
HexNumeral
    :   Zero [xX] HexDigits
    ;

fragment
HexDigits
    :   HexDigit (HexDigitOrUnderscore* HexDigit)?
    ;

fragment
HexDigit
    :   [0-9a-fA-F]
    ;

fragment
HexDigitOrUnderscore
    :   HexDigit
    |   Underscore
    ;

fragment
OctalNumeral
    :   Zero Underscores? OctalDigits
    ;

fragment
OctalDigits
    :   OctalDigit (OctalDigitOrUnderscore* OctalDigit)?
    ;

fragment
OctalDigit
    :   [0-7]
    ;

fragment
OctalDigitOrUnderscore
    :   OctalDigit
    |   Underscore
    ;

fragment
BinaryNumeral
    :   Zero [bB] BinaryDigits
    ;

fragment
BinaryDigits
    :   BinaryDigit (BinaryDigitOrUnderscore* BinaryDigit)?
    ;

fragment
BinaryDigit
    :   [01]
    ;

fragment
BinaryDigitOrUnderscore
    :   BinaryDigit
    |   Underscore
    ;

// §3.10.2 Floating-Point Literals

FloatingPointLiteral
    :   (   DecimalFloatingPointLiteral
        |   HexadecimalFloatingPointLiteral
        ) (Underscore { this.require(this._errorIgnored, "Number ending with underscores is invalid", -1, true); })?
    ;

fragment
DecimalFloatingPointLiteral
    :   Digits? Dot Digits ExponentPart? FloatTypeSuffix?
    |   Digits ExponentPart FloatTypeSuffix?
    |   Digits FloatTypeSuffix
    ;

fragment
ExponentPart
    :   ExponentIndicator SignedInteger
    ;

fragment
ExponentIndicator
    :   [eE]
    ;

fragment
SignedInteger
    :   Sign? Digits
    ;

fragment
Sign
    :   [+\-]
    ;

fragment
FloatTypeSuffix
    :   [fFdDgG]
    ;

fragment
HexadecimalFloatingPointLiteral
    :   HexSignificand BinaryExponent FloatTypeSuffix?
    ;

fragment
HexSignificand
    :   HexNumeral Dot?
    |   Zero [xX] HexDigits? Dot HexDigits
    ;

fragment
BinaryExponent
    :   BinaryExponentIndicator SignedInteger
    ;

fragment
BinaryExponentIndicator
    :   [pP]
    ;

fragment
Dot :   '.'
    ;

// §3.10.3 Boolean Literals

BooleanLiteral
    :   'true'
    |   'false'
    ;


// §3.10.6 Escape Sequences for Character and String Literals

fragment
EscapeSequence
    :   Backslash [btnfrs"'\\]
    |   OctalEscape
    |   UnicodeEscape
    |   DollarEscape
    |   LineEscape
    ;


fragment
OctalEscape
    :   Backslash OctalDigit
    |   Backslash OctalDigit OctalDigit
    |   Backslash ZeroToThree OctalDigit OctalDigit
    ;

// Groovy allows 1 or more u's after the backslash
fragment
UnicodeEscape
    :   Backslash 'u' HexDigit HexDigit HexDigit HexDigit
    ;

fragment
ZeroToThree
    :   [0-3]
    ;

// Groovy Escape Sequences

fragment
DollarEscape
    :   Backslash Dollar
    ;

fragment
LineEscape
    :   Backslash LineTerminator
    ;

fragment
LineTerminator
    :   '\r'? '\n' | '\r'
    ;

fragment
SlashEscape
    :   Backslash Slash
    ;

fragment
Backslash
    :   '\\'
    ;

fragment
Slash
    :   '/'
    ;

fragment
Dollar
    :   '$'
    ;

fragment
GStringQuotationMark
    :   '"'
    ;

fragment
SqStringQuotationMark
    :   '\''
    ;

fragment
TdqStringQuotationMark
    :   '"""'
    ;

fragment
TsqStringQuotationMark
    :   '\'\'\''
    ;

fragment
DollarSlashyGStringQuotationMarkBegin
    :   '$/'
    ;

fragment
DollarSlashyGStringQuotationMarkEnd
    :   '/$'
    ;

// escaped forward slash
fragment
DollarSlashEscape
    :   '$/'
    ;

// escaped dollar sign
fragment
DollarDollarEscape
    :   '$$'
    ;

// escaped dollar slashy string delimiter
fragment
DollarSlashDollarEscape
    :   '$/$'
    ;

// §3.10.7 The Null Literal
NullLiteral
    :   'null'
    ;

// Groovy Operators

RANGE_INCLUSIVE         : '..';
RANGE_EXCLUSIVE_LEFT    : '<..';
RANGE_EXCLUSIVE_RIGHT   : '..<';
RANGE_EXCLUSIVE_FULL    : '<..<';
SPREAD_DOT              : '*.';
SAFE_DOT                : '?.';
SAFE_INDEX              : '?[' { this.enterParen();     } -> pushMode(DEFAULT_MODE);
SAFE_CHAIN_DOT          : '??.';
ELVIS                   : '?:';
METHOD_POINTER          : '.&';
METHOD_REFERENCE        : '::';
REGEX_FIND              : '=~';
REGEX_MATCH             : '==~';
POWER                   : '**';
POWER_ASSIGN            : '**=';
SPACESHIP               : '<=>';
IDENTICAL               : '===';
NOT_IDENTICAL           : '!==';
ARROW                   : '->';

// !internalPromise will be parsed as !in ternalPromise, so semantic predicates are necessary
NOT_INSTANCEOF      : '!instanceof' { SemanticPredicates.isFollowedBy(this._input, ' ', '\t', '\r', '\n') }?;
NOT_IN              : '!in'         { SemanticPredicates.isFollowedBy(this._input, ' ', '\t', '\r', '\n', '[', '(', '{') }?;


// §3.11 Separators

LPAREN          : '('  { this.enterParen();     } -> pushMode(DEFAULT_MODE);
RPAREN          : ')'  { this.exitParen();      } -> popMode;

LBRACE          : '{'  { this.enterParen();     } -> pushMode(DEFAULT_MODE);
RBRACE          : '}'  { this.exitParen();      } -> popMode;

LBRACK          : '['  { this.enterParen();     } -> pushMode(DEFAULT_MODE);
RBRACK          : ']'  { this.exitParen();      } -> popMode;

SEMI            : ';';
COMMA           : ',';
DOT             : Dot;

// §3.12 Operators

ASSIGN          : '=';
GT              : '>';
LT              : '<';
NOT             : '!';
BITNOT          : '~';
QUESTION        : '?';
COLON           : ':';
EQUAL           : '==';
LE              : '<=';
GE              : '>=';
NOTEQUAL        : '!=';
AND             : '&&';
OR              : '||';
INC             : '++';
DEC             : '--';
ADD             : '+';
SUB             : '-';
MUL             : '*';
DIV             : Slash;
BITAND          : '&';
BITOR           : '|';
XOR             : '^';
MOD             : '%';


ADD_ASSIGN      : '+=';
SUB_ASSIGN      : '-=';
MUL_ASSIGN      : '*=';
DIV_ASSIGN      : '/=';
AND_ASSIGN      : '&=';
OR_ASSIGN       : '|=';
XOR_ASSIGN      : '^=';
MOD_ASSIGN      : '%=';
LSHIFT_ASSIGN   : '<<=';
RSHIFT_ASSIGN   : '>>=';
URSHIFT_ASSIGN  : '>>>=';
ELVIS_ASSIGN    : '?=';


// §3.8 Identifiers (must appear after all keywords in the grammar)
CapitalizedIdentifier
    :   JavaLetter {SemanticPredicates.isUpperCase(this._input.LA(-1))}? JavaLetterOrDigit*
    ;

Identifier
    :   JavaLetter JavaLetterOrDigit*
    ;

fragment
IdentifierInGString
    :   JavaLetterInGString JavaLetterOrDigitInGString*
    ;

fragment
JavaLetter
    :   [a-zA-Z$_] // these are the "java letters" below 0x7F
    |   // covers all characters above 0x7F which are not a surrogate
        ~[\u0000-\u007F\uD800-\uDBFF]
        { GroovyLexer.isJavaIdentifierStartAndNotIdentifierIgnorable(this._input.LA(-1)) }?
    |   // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
        [\uD800-\uDBFF] [\uDC00-\uDFFF]
        { SemanticPredicates.isJavaIdentifierStart([this._input.LA(-2), this._input.LA(-1)]) }?
    ;

fragment
JavaLetterInGString
    :   JavaLetter { this._input.LA(-1) !== SemanticPredicates.DOLLAR_CHAR }?
    ;

fragment
JavaLetterOrDigit
    :   [a-zA-Z0-9$_] // these are the "java letters or digits" below 0x7F
    |   // covers all characters above 0x7F which are not a surrogate
        ~[\u0000-\u007F\uD800-\uDBFF]
        { GroovyLexer.isJavaIdentifierPartAndNotIdentifierIgnorable(this._input.LA(-1)) }?
    |   // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
        [\uD800-\uDBFF] [\uDC00-\uDFFF]
        { SemanticPredicates.isJavaIdentifierPart(this._input.LA(-2), this._input.LA(-1)) }?
    ;

fragment
JavaLetterOrDigitInGString
    :   JavaLetterOrDigit  { this._input.LA(-1) !== SemanticPredicates.DOLLAR_CHAR }?
    ;

fragment
ShCommand
    :   ~[\r\n\uFFFF]*
    ;

//
// Additional symbols not defined in the lexical specification
//

AT : '@';
ELLIPSIS : '...';

//
// Whitespace, line escape and comments
//
WS  : ([ \t]+ | LineEscape+) -> skip
    ;

// Inside (...) and [...] but not {...}, ignore newlines.
NL  : LineTerminator   { this.ignoreTokenInsideParens(); }
    ;

// Multiple-line comments (including groovydoc comments)
ML_COMMENT
    :   '/*' .*? '*/'       { this.addComment(0); this.ignoreMultiLineCommentConditionally(); } -> type(NL)
    ;

// Single-line comments
SL_COMMENT
    :   '//' ~[\r\n\uFFFF]* { this.addComment(1); this.ignoreTokenInsideParens(); }             -> type(NL)
    ;

// Script-header comments.
// The very first characters of the file may be "#!".  If so, ignore the first line.
SH_COMMENT
    :   '#!' { this.require(this._errorIgnored || 0 == this._tokenIndex, "Shebang comment should appear at the first line", -2, true); } ShCommand (LineTerminator '#!' ShCommand)* -> skip
    ;

// Unexpected characters will be handled by groovy parser later.
UNEXPECTED_CHAR
    :   . { this.require(this._errorIgnored, "Unexpected character: '" + this.text.replace(new RegExp("'", "g"), "\\\'") + "'", -1, false); }
    ;
