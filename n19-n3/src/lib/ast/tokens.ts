import {NodeType} from '@lezer/common';

export enum GroovyTokenId {
	COMPILATION_UNIT = 0,
	// primitive types
	BOOLEAN,
	CHAR,
	BYTE,
	SHORT,
	INT,
	LONG,
	FLOAT,
	DOUBLE,
	// groovy keywords
	AS,
	DEF,
	IN,
	TRAIT,
	THREADSAFE,
	// java keywords
	ABSTRACT,
	ASSERT,
	BREAK,
	CASE,
	CATCH,
	CLASS,
	CONST,
	CONTINUE,
	DEFAULT,
	DO,
	ELSE,
	ENUM,
	EXTENDS,
	FINAL,
	FINALLY,
	FOR,
	IF,
	GOTO,
	IMPLEMENTS,
	IMPORT,
	INSTANCEOF,
	INTERFACE,
	NATIVE,
	NEW,
	NON_SEALED,  // non-sealed
	NULL,
	PACKAGE,
	PERMITS,
	PRIVATE,
	PROTECTED,
	PUBLIC,
	RECORD,
	RETURN,
	SEALED,
	STATIC,
	STRICTFP,
	SUPER,
	SWITCH,
	SYNCHRONIZED,
	THIS,
	THROW,
	THROWS,
	TRANSIENT,
	TRY,
	VAR, // the reserved type name of Java10
	VOID,
	VOLATILE,
	WHILE,
	YIELD,
	// boolean
	BooleanLiteral, // true or false
	// numeric
	NumericSignPart, // + or -
	NumericBasePart, // numbers
	NumericUnderscorePart, // _ between numbers, could be multiple times
	NumericSuffixPart, // gG: BigInteger/BigDecimal, lL: Long, iI: Integer, dD: double, fF: float
	BinaryHead, // 0b of [+-]0b...
	BinaryLiteral, // [+-]0b..., "..." means numbers
	OctalHead, // 0 of [+-]0...
	OctalLiteral, // [+-]0..., "..." means numbers
	HexadecimalHead, // 0x of [+-]0x...
	HexadecimalLiteral, // [+-]0x..., "..." means numbers
	IntegralLiteral, // [+-]..., "..." means numbers
	DecimalExponentSymbol, // E or e
	DecimalExponentPart, // [+-]..., "..." means numbers. exponent part of decimal literal, after symbol
	DecimalLiteral, // [+-]..., "..." means float, double or exponent number
	// char
	GChar, // a single char in '', and declared as char with 3 different ways: "char x = 'x'", "def x = 'x' as char", "def x = (char)'x'"
	// string and gstring
	StringQuotationMark, // '
	StringQuotationMarkML, // '''
	StringMLFirstNewLineEraser, // \ after multiple line mark, and no character after it, for all kinds of multiple string and gstring
	StringBackspaceEscape, // \b
	StringFormFeedEscape, // \f
	StringNewLineEscape, // \n
	StringCarriageReturnEscape, // \r
	StringSingleSpaceEscape, // \s
	StringTabulationEscape, // \t
	StringBackslashEscape, // \\
	StringSingleQuoteEscape, // \', in string, or optional in multiple string, gstring and multiple line gstring
	StringDoubleQuoteEscape, // \" in gstring, or optional in multiple string and multiple line gstring
	StringDollarEscape, // \$, not for slashy gstring or dollar slashy gstring
	StringUnicodeEscape, // \u followed by 4 hexadecimal digits
	StringUnicodeEscapeMark, // \u
	StringUnicodeEscapeContent, // 4 hexadecimal digits follows \u
	String,
	GStringQuotationMark, // "
	GStringQuotationMarkML, // """
	SlashyGStringQuotationMark, // /
	DollarSlashyGStringQuotationMarkBegin, // $/
	DollarSlashyGStringQuotationMarkEnd, // /$
	SlashyGStringBackslashEscape, // \/
	DollarSlashyGStringDollarEscape, // $$
	DollarSlashyGStringSlashEscape, // $/
	GStringContent, // string part in gstring
	GStringInterpolationSymbol, // $ of ${...} or $...
	GStringInterpolationContent, // ${...}, $..., the "..." part, any groovy expression is good for it
	GStringInterpolation, // ${...}, $..., "..." means interpolation, any groovy expression is good for it
	GString,
	SlashyGString,
	DollarSlashyGString,
	// Groovy Operators
	RangeInclusive, // ..
	RangeExclusiveLeft, // <..
	RangeExclusiveRight, // ..<
	RangeExclusiveFull, // <..<
	SpreadDot, // *.
	SafeDot, // ?.
	SafeIndex, // ?[
	SafeIndexClose, // ]
	SafeChainDot, // ??.
	Elvis, // ?:
	MethodPointer, // .&
	MethodReference, // ::
	RegexFind, // =~
	RegexMatch, // ==~
	Power, // **
	PowerAssign, // **=
	Spaceship, // <=>
	Identical, // ===
	NotIdentical, // !==
	Arrow, // ->
	NotInstanceOf, // !instanceof
	NotIn, // !in
	// separators
	LBrace, // {
	RBrace, // }
	LParen, // (
	RParen, // )
	LBrack, // [
	RBrack, // ]
	Semi, // ;
	Comma, // ,
	Dot, // .
	// operators
	Assign, // =
	GreaterThan, // >
	LessThan, // <
	Not, // !
	Bitnot, // ~
	Question, // ?
	Colon, // :
	Equal, // ==
	LessThanOrEqual, // <=
	GreaterThanOrEqual, // >=
	NotEqual, // !=
	And, // &&
	Or, // ||
	Increase, // ++
	Dec, // --
	Add, // +
	Subtract, // -
	Multiple, // *
	Divide, // /
	Bitand, // &
	Bitor, // |
	Xor, // ^
	Mod, // %
	AddAssign, // +=
	SubAssign, // -=
	MulAssign, // *=
	DivAssign, // /=
	AndAssign, // &=
	OrAssign, // |=
	XorAssign, // ^=
	ModAssign, // %=
	LshiftAssign, // <<=
	RshiftAssign, // >>=
	UrshiftAssign, // >>>=
	ElvisAssign, // ?=
	At, // @
	Ellipsis, // ...
	Whitespaces,
	NewLine, // \n or \r\n
	SingleLineComment,
	MultipleLinesComment,
	ScriptCommandHead, // #!
	ScriptCommand, // first line starts with "#!"
	Identity,
	UnexpectedChars,
	// statements
	Annotation,
	PackageDeclaration,
	ImportDeclaration,
}

interface GroovyToken {
	id: GroovyTokenId;
	name: string;
	top?: boolean;
}

export const GroovyTokens: { [key in keyof typeof GroovyTokenId]: GroovyToken } = {
	COMPILATION_UNIT: {id: GroovyTokenId.COMPILATION_UNIT, name: 'CompilationUnit', top: true},
	// primitive types
	BOOLEAN: {id: GroovyTokenId.BOOLEAN, name: 'Boolean'},
	CHAR: {id: GroovyTokenId.CHAR, name: 'Char'},
	BYTE: {id: GroovyTokenId.BYTE, name: 'Byte'},
	SHORT: {id: GroovyTokenId.SHORT, name: 'Short'},
	INT: {id: GroovyTokenId.INT, name: 'Int'},
	LONG: {id: GroovyTokenId.LONG, name: 'Long'},
	FLOAT: {id: GroovyTokenId.FLOAT, name: 'Float'},
	DOUBLE: {id: GroovyTokenId.DOUBLE, name: 'Double'},
	// groovy keywords
	AS: {id: GroovyTokenId.AS, name: 'As'},
	DEF: {id: GroovyTokenId.DEF, name: 'Def'},
	IN: {id: GroovyTokenId.IN, name: 'In'},
	TRAIT: {id: GroovyTokenId.TRAIT, name: 'Trait'},
	THREADSAFE: {id: GroovyTokenId.THREADSAFE, name: 'Threadsafe'},
	// java keywords
	ABSTRACT: {id: GroovyTokenId.ABSTRACT, name: 'Abstract'},
	ASSERT: {id: GroovyTokenId.ASSERT, name: 'Assert'},
	BREAK: {id: GroovyTokenId.BREAK, name: 'Break'},
	CASE: {id: GroovyTokenId.CASE, name: 'Case'},
	CATCH: {id: GroovyTokenId.CATCH, name: 'Catch'},
	CLASS: {id: GroovyTokenId.CLASS, name: 'Class'},
	CONST: {id: GroovyTokenId.CONST, name: 'Const'},
	CONTINUE: {id: GroovyTokenId.CONTINUE, name: 'Continue'},
	DEFAULT: {id: GroovyTokenId.DEFAULT, name: 'Default'},
	DO: {id: GroovyTokenId.DO, name: 'Do'},
	ELSE: {id: GroovyTokenId.ELSE, name: 'Else'},
	ENUM: {id: GroovyTokenId.ENUM, name: 'Enum'},
	EXTENDS: {id: GroovyTokenId.EXTENDS, name: 'Extends'},
	FINAL: {id: GroovyTokenId.FINAL, name: 'Final'},
	FINALLY: {id: GroovyTokenId.FINALLY, name: 'Finally'},
	FOR: {id: GroovyTokenId.FOR, name: 'For'},
	IF: {id: GroovyTokenId.IF, name: 'If'},
	GOTO: {id: GroovyTokenId.GOTO, name: 'Goto'},
	IMPLEMENTS: {id: GroovyTokenId.IMPLEMENTS, name: 'Implements'},
	IMPORT: {id: GroovyTokenId.IMPORT, name: 'Import'},
	INSTANCEOF: {id: GroovyTokenId.INSTANCEOF, name: 'Instanceof'},
	INTERFACE: {id: GroovyTokenId.INTERFACE, name: 'Interface'},
	NATIVE: {id: GroovyTokenId.NATIVE, name: 'Native'},
	NEW: {id: GroovyTokenId.NEW, name: 'New'},
	NON_SEALED: {id: GroovyTokenId.NON_SEALED, name: 'NonSealed'},
	NULL: {id: GroovyTokenId.NULL, name: 'Null'},
	PACKAGE: {id: GroovyTokenId.PACKAGE, name: 'Package'},
	PERMITS: {id: GroovyTokenId.PERMITS, name: 'Permits'},
	PRIVATE: {id: GroovyTokenId.PRIVATE, name: 'Private'},
	PROTECTED: {id: GroovyTokenId.PROTECTED, name: 'Protected'},
	PUBLIC: {id: GroovyTokenId.PUBLIC, name: 'Public'},
	RECORD: {id: GroovyTokenId.RECORD, name: 'Record'},
	RETURN: {id: GroovyTokenId.RETURN, name: 'Return'},
	SEALED: {id: GroovyTokenId.SEALED, name: 'Sealed'},
	STATIC: {id: GroovyTokenId.STATIC, name: 'Static'},
	STRICTFP: {id: GroovyTokenId.STRICTFP, name: 'Strictfp'},
	SUPER: {id: GroovyTokenId.SUPER, name: 'Super'},
	SWITCH: {id: GroovyTokenId.SWITCH, name: 'Switch'},
	SYNCHRONIZED: {id: GroovyTokenId.SYNCHRONIZED, name: 'Synchronized'},
	THIS: {id: GroovyTokenId.THIS, name: 'This'},
	THROW: {id: GroovyTokenId.THROW, name: 'Throw'},
	THROWS: {id: GroovyTokenId.THROWS, name: 'Throws'},
	TRANSIENT: {id: GroovyTokenId.TRANSIENT, name: 'Transient'},
	TRY: {id: GroovyTokenId.TRY, name: 'Try'},
	VAR: {id: GroovyTokenId.VAR, name: 'Var'},
	VOID: {id: GroovyTokenId.VOID, name: 'Void'},
	VOLATILE: {id: GroovyTokenId.VOLATILE, name: 'Volatile'},
	WHILE: {id: GroovyTokenId.WHILE, name: 'While'},
	YIELD: {id: GroovyTokenId.YIELD, name: 'Yield'},
	// boolean
	BooleanLiteral: {id: GroovyTokenId.BooleanLiteral, name: 'BooleanLiteral'},
	// numeric
	NumericSignPart: {id: GroovyTokenId.NumericSignPart, name: 'NumericSignPart'},
	NumericBasePart: {id: GroovyTokenId.NumericBasePart, name: 'NumericBasePart'},
	NumericUnderscorePart: {id: GroovyTokenId.NumericUnderscorePart, name: 'NumericUnderscorePart'},
	NumericSuffixPart: {id: GroovyTokenId.NumericSuffixPart, name: 'NumericSuffixPart'},
	BinaryHead: {id: GroovyTokenId.BinaryHead, name: 'BinaryHead'},
	BinaryLiteral: {id: GroovyTokenId.BinaryLiteral, name: 'BinaryLiteral'},
	OctalHead: {id: GroovyTokenId.OctalHead, name: 'OctalHead'},
	OctalLiteral: {id: GroovyTokenId.OctalLiteral, name: 'OctalLiteral'},
	HexadecimalHead: {id: GroovyTokenId.HexadecimalHead, name: 'HexadecimalHead'},
	HexadecimalLiteral: {id: GroovyTokenId.HexadecimalLiteral, name: 'HexadecimalLiteral'},
	IntegralLiteral: {id: GroovyTokenId.IntegralLiteral, name: 'IntegralLiteral'},
	DecimalExponentSymbol: {id: GroovyTokenId.DecimalExponentSymbol, name: 'DecimalExponentSymbol'},
	DecimalExponentPart: {id: GroovyTokenId.DecimalExponentPart, name: 'DecimalExponentPart'},
	DecimalLiteral: {id: GroovyTokenId.DecimalLiteral, name: 'DecimalLiteral'},
	// char
	GChar: {id: GroovyTokenId.GChar, name: 'GChar'},
	// string and gstring
	StringQuotationMark: {id: GroovyTokenId.StringQuotationMark, name: 'StringQuotationMark'},
	StringQuotationMarkML: {id: GroovyTokenId.StringQuotationMarkML, name: 'StringQuotationMarkML'},
	StringMLFirstNewLineEraser: {id: GroovyTokenId.StringMLFirstNewLineEraser, name: 'StringMLFirstNewLineEraser'},
	StringBackspaceEscape: {id: GroovyTokenId.StringBackspaceEscape, name: 'StringBackspaceEscape'},
	StringFormFeedEscape: {id: GroovyTokenId.StringFormFeedEscape, name: 'StringFormFeedEscape'},
	StringNewLineEscape: {id: GroovyTokenId.StringNewLineEscape, name: 'StringNewLineEscape'},
	StringCarriageReturnEscape: {id: GroovyTokenId.StringCarriageReturnEscape, name: 'StringCarriageReturnEscape'},
	StringSingleSpaceEscape: {id: GroovyTokenId.StringSingleSpaceEscape, name: 'StringSingleSpaceEscape'},
	StringTabulationEscape: {id: GroovyTokenId.StringTabulationEscape, name: 'StringTabulationEscape'},
	StringBackslashEscape: {id: GroovyTokenId.StringBackslashEscape, name: 'StringBackslashEscape'},
	StringSingleQuoteEscape: {id: GroovyTokenId.StringSingleQuoteEscape, name: 'StringSingleQuoteEscape'},
	StringDoubleQuoteEscape: {id: GroovyTokenId.StringDoubleQuoteEscape, name: 'StringDoubleQuoteEscape'},
	StringDollarEscape: {id: GroovyTokenId.StringDollarEscape, name: 'StringDollarEscape'},
	StringUnicodeEscape: {id: GroovyTokenId.StringUnicodeEscape, name: 'StringUnicodeEscape'},
	StringUnicodeEscapeMark: {id: GroovyTokenId.StringUnicodeEscapeMark, name: 'StringUnicodeEscapeMark'},
	StringUnicodeEscapeContent: {id: GroovyTokenId.StringUnicodeEscapeContent, name: 'StringUnicodeEscapeContent'},
	String: {id: GroovyTokenId.String, name: 'String'},
	GStringQuotationMark: {id: GroovyTokenId.GStringQuotationMark, name: 'GStringQuotationMark'},
	GStringQuotationMarkML: {id: GroovyTokenId.GStringQuotationMarkML, name: 'GStringQuotationMarkML'},
	SlashyGStringQuotationMark: {id: GroovyTokenId.SlashyGStringQuotationMark, name: 'SlashyGStringQuotationMark'},
	DollarSlashyGStringQuotationMarkBegin: {
		id: GroovyTokenId.DollarSlashyGStringQuotationMarkBegin, name: 'DollarSlashyGStringQuotationMarkBegin'
	},
	DollarSlashyGStringQuotationMarkEnd: {
		id: GroovyTokenId.DollarSlashyGStringQuotationMarkEnd, name: 'DollarSlashyGStringQuotationMarkEnd'
	},
	SlashyGStringBackslashEscape: {
		id: GroovyTokenId.SlashyGStringBackslashEscape, name: 'SlashyGStringBackslashEscape'
	},
	DollarSlashyGStringDollarEscape: {
		id: GroovyTokenId.DollarSlashyGStringDollarEscape, name: 'DollarSlashyGStringDollarEscape'
	},
	DollarSlashyGStringSlashEscape: {
		id: GroovyTokenId.DollarSlashyGStringSlashEscape, name: 'DollarSlashyGStringSlashEscape'
	},
	GStringContent: {id: GroovyTokenId.GStringContent, name: 'GStringContent'},
	GStringInterpolationSymbol: {id: GroovyTokenId.GStringInterpolationSymbol, name: 'GStringInterpolationSymbol'},
	GStringInterpolationContent: {id: GroovyTokenId.GStringInterpolationContent, name: 'GStringInterpolationContent'},
	GStringInterpolation: {id: GroovyTokenId.GStringInterpolation, name: 'GStringInterpolation'},
	GString: {id: GroovyTokenId.GString, name: 'GString'},
	SlashyGString: {id: GroovyTokenId.SlashyGString, name: 'SlashyGString'},
	DollarSlashyGString: {id: GroovyTokenId.DollarSlashyGString, name: 'DollarSlashyGString'},
	// Groovy Operators
	RangeInclusive: {id: GroovyTokenId.RangeInclusive, name: 'RangeInclusive'},
	RangeExclusiveLeft: {id: GroovyTokenId.RangeExclusiveLeft, name: 'RangeExclusiveLeft'},
	RangeExclusiveRight: {id: GroovyTokenId.RangeExclusiveRight, name: 'RangeExclusiveRight'},
	RangeExclusiveFull: {id: GroovyTokenId.RangeExclusiveFull, name: 'RangeExclusiveFull'},
	SpreadDot: {id: GroovyTokenId.SpreadDot, name: 'SpreadDot'},
	SafeDot: {id: GroovyTokenId.SafeDot, name: 'SafeDot'},
	SafeIndex: {id: GroovyTokenId.SafeIndex, name: 'SafeIndex'},
	SafeIndexClose: {id: GroovyTokenId.SafeIndexClose, name: 'SafeIndexClose'},
	SafeChainDot: {id: GroovyTokenId.SafeChainDot, name: 'SafeChainDot'},
	Elvis: {id: GroovyTokenId.Elvis, name: 'Elvis'},
	MethodPointer: {id: GroovyTokenId.MethodPointer, name: 'MethodPointer'},
	MethodReference: {id: GroovyTokenId.MethodReference, name: 'MethodReference'},
	RegexFind: {id: GroovyTokenId.RegexFind, name: 'RegexFind'},
	RegexMatch: {id: GroovyTokenId.RegexMatch, name: 'RegexMatch'},
	Power: {id: GroovyTokenId.Power, name: 'Power'},
	PowerAssign: {id: GroovyTokenId.PowerAssign, name: 'PowerAssign'},
	Spaceship: {id: GroovyTokenId.Spaceship, name: 'Spaceship'},
	Identical: {id: GroovyTokenId.Identical, name: 'Identical'},
	NotIdentical: {id: GroovyTokenId.NotIdentical, name: 'NotIdentical'},
	Arrow: {id: GroovyTokenId.Arrow, name: 'Arrow'},
	NotInstanceOf: {id: GroovyTokenId.NotInstanceOf, name: 'NotInstanceOf'},
	NotIn: {id: GroovyTokenId.NotIn, name: 'NotIn'},
	// separators
	LBrace: {id: GroovyTokenId.LBrace, name: 'LBrace'},
	RBrace: {id: GroovyTokenId.RBrace, name: 'RBrace'},
	LParen: {id: GroovyTokenId.LParen, name: 'LParen'},
	RParen: {id: GroovyTokenId.RParen, name: 'RParen'},
	LBrack: {id: GroovyTokenId.LBrack, name: 'LBrack'},
	RBrack: {id: GroovyTokenId.RBrack, name: 'RBrack'},
	Semi: {id: GroovyTokenId.Semi, name: 'Semi'},
	Comma: {id: GroovyTokenId.Comma, name: 'Comma'},
	Dot: {id: GroovyTokenId.Dot, name: 'Dot'},
	// operators
	Assign: {id: GroovyTokenId.Assign, name: 'Assign'},
	GreaterThan: {id: GroovyTokenId.GreaterThan, name: 'GreaterThan'},
	LessThan: {id: GroovyTokenId.LessThan, name: 'LessThan'},
	Not: {id: GroovyTokenId.Not, name: 'Not'},
	Bitnot: {id: GroovyTokenId.Bitnot, name: 'Bitnot'},
	Question: {id: GroovyTokenId.Question, name: 'Question'},
	Colon: {id: GroovyTokenId.Colon, name: 'Colon'},
	Equal: {id: GroovyTokenId.Equal, name: 'Equal'},
	LessThanOrEqual: {id: GroovyTokenId.LessThanOrEqual, name: 'LessThanOrEqual'},
	GreaterThanOrEqual: {id: GroovyTokenId.GreaterThanOrEqual, name: 'GreaterThanOrEqual'},
	NotEqual: {id: GroovyTokenId.NotEqual, name: 'NotEqual'},
	And: {id: GroovyTokenId.And, name: 'And'},
	Or: {id: GroovyTokenId.Or, name: 'Or'},
	Increase: {id: GroovyTokenId.Increase, name: 'Increase'},
	Dec: {id: GroovyTokenId.Dec, name: 'Dec'},
	Add: {id: GroovyTokenId.Add, name: 'Add'},
	Subtract: {id: GroovyTokenId.Subtract, name: 'Subtract'},
	Multiple: {id: GroovyTokenId.Multiple, name: 'Multiple'},
	Divide: {id: GroovyTokenId.Divide, name: 'Divide'},
	Bitand: {id: GroovyTokenId.Bitand, name: 'Bitand'},
	Bitor: {id: GroovyTokenId.Bitor, name: 'Bitor'},
	Xor: {id: GroovyTokenId.Xor, name: 'Xor'},
	Mod: {id: GroovyTokenId.Mod, name: 'Mod'},
	AddAssign: {id: GroovyTokenId.AddAssign, name: 'AddAssign'},
	SubAssign: {id: GroovyTokenId.SubAssign, name: 'SubAssign'},
	MulAssign: {id: GroovyTokenId.MulAssign, name: 'MulAssign'},
	DivAssign: {id: GroovyTokenId.DivAssign, name: 'DivAssign'},
	AndAssign: {id: GroovyTokenId.AndAssign, name: 'AndAssign'},
	OrAssign: {id: GroovyTokenId.OrAssign, name: 'OrAssign'},
	XorAssign: {id: GroovyTokenId.XorAssign, name: 'XorAssign'},
	ModAssign: {id: GroovyTokenId.ModAssign, name: 'ModAssign'},
	LshiftAssign: {id: GroovyTokenId.LshiftAssign, name: 'LshiftAssign'},
	RshiftAssign: {id: GroovyTokenId.RshiftAssign, name: 'RshiftAssign'},
	UrshiftAssign: {id: GroovyTokenId.UrshiftAssign, name: 'UrshiftAssign'},
	ElvisAssign: {id: GroovyTokenId.ElvisAssign, name: 'ElvisAssign'},
	At: {id: GroovyTokenId.At, name: 'At'},
	Ellipsis: {id: GroovyTokenId.Ellipsis, name: 'Ellipsis'},
	Whitespaces: {id: GroovyTokenId.Whitespaces, name: 'Whitespaces'},
	NewLine: {id: GroovyTokenId.NewLine, name: 'NewLine'},
	SingleLineComment: {id: GroovyTokenId.SingleLineComment, name: 'SingleLineComment'},
	MultipleLinesComment: {id: GroovyTokenId.MultipleLinesComment, name: 'MultipleLinesComment'},
	ScriptCommandHead: {id: GroovyTokenId.ScriptCommandHead, name: 'ScriptCommandHead'},
	ScriptCommand: {id: GroovyTokenId.ScriptCommand, name: 'ScriptCommand'},
	Identity: {id: GroovyTokenId.Identity, name: 'Identity'},
	UnexpectedChars: {id: GroovyTokenId.UnexpectedChars, name: 'UnexpectedChars'},
	// statements
	Annotation: {id: GroovyTokenId.Annotation, name: 'Annotation'},
	PackageDeclaration: {id: GroovyTokenId.PackageDeclaration, name: 'PackageDeclaration'},
	ImportDeclaration: {id: GroovyTokenId.ImportDeclaration, name: 'ImportDeclaration'}
};

export const TokenToNodeType: { [key in keyof typeof GroovyTokenId]: NodeType } =
	Object.keys(GroovyTokens).reduce((map, key) => {
		map[key] = NodeType.define(GroovyTokens[key]);
		return map;
	}, {} as { [key in keyof typeof GroovyTokenId]: NodeType });
