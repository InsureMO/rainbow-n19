// Generated from grammar/GroovyLexer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState,
	DFA,
	LexerATNSimulator,
	PredictionContextCache,
	RuleContext,
	Token
} from 'antlr4';

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

export class GroovyLexer extends AbstractLexer {
	public static readonly StringLiteral = 1;
	public static readonly GStringBegin = 2;
	public static readonly GStringEnd = 3;
	public static readonly GStringPart = 4;
	public static readonly GStringPathPart = 5;
	public static readonly RollBackOne = 6;
	public static readonly AS = 7;
	public static readonly DEF = 8;
	public static readonly IN = 9;
	public static readonly TRAIT = 10;
	public static readonly THREADSAFE = 11;
	public static readonly VAR = 12;
	public static readonly BuiltInPrimitiveType = 13;
	public static readonly ABSTRACT = 14;
	public static readonly ASSERT = 15;
	public static readonly BREAK = 16;
	public static readonly YIELD = 17;
	public static readonly CASE = 18;
	public static readonly CATCH = 19;
	public static readonly CLASS = 20;
	public static readonly CONST = 21;
	public static readonly CONTINUE = 22;
	public static readonly DEFAULT = 23;
	public static readonly DO = 24;
	public static readonly ELSE = 25;
	public static readonly ENUM = 26;
	public static readonly EXTENDS = 27;
	public static readonly FINAL = 28;
	public static readonly FINALLY = 29;
	public static readonly FOR = 30;
	public static readonly IF = 31;
	public static readonly GOTO = 32;
	public static readonly IMPLEMENTS = 33;
	public static readonly IMPORT = 34;
	public static readonly INSTANCEOF = 35;
	public static readonly INTERFACE = 36;
	public static readonly NATIVE = 37;
	public static readonly NEW = 38;
	public static readonly NON_SEALED = 39;
	public static readonly PACKAGE = 40;
	public static readonly PERMITS = 41;
	public static readonly PRIVATE = 42;
	public static readonly PROTECTED = 43;
	public static readonly PUBLIC = 44;
	public static readonly RECORD = 45;
	public static readonly RETURN = 46;
	public static readonly SEALED = 47;
	public static readonly STATIC = 48;
	public static readonly STRICTFP = 49;
	public static readonly SUPER = 50;
	public static readonly SWITCH = 51;
	public static readonly SYNCHRONIZED = 52;
	public static readonly THIS = 53;
	public static readonly THROW = 54;
	public static readonly THROWS = 55;
	public static readonly TRANSIENT = 56;
	public static readonly TRY = 57;
	public static readonly VOID = 58;
	public static readonly VOLATILE = 59;
	public static readonly WHILE = 60;
	public static readonly IntegerLiteral = 61;
	public static readonly FloatingPointLiteral = 62;
	public static readonly BooleanLiteral = 63;
	public static readonly NullLiteral = 64;
	public static readonly RANGE_INCLUSIVE = 65;
	public static readonly RANGE_EXCLUSIVE_LEFT = 66;
	public static readonly RANGE_EXCLUSIVE_RIGHT = 67;
	public static readonly RANGE_EXCLUSIVE_FULL = 68;
	public static readonly SPREAD_DOT = 69;
	public static readonly SAFE_DOT = 70;
	public static readonly SAFE_INDEX = 71;
	public static readonly SAFE_CHAIN_DOT = 72;
	public static readonly ELVIS = 73;
	public static readonly METHOD_POINTER = 74;
	public static readonly METHOD_REFERENCE = 75;
	public static readonly REGEX_FIND = 76;
	public static readonly REGEX_MATCH = 77;
	public static readonly POWER = 78;
	public static readonly POWER_ASSIGN = 79;
	public static readonly SPACESHIP = 80;
	public static readonly IDENTICAL = 81;
	public static readonly NOT_IDENTICAL = 82;
	public static readonly ARROW = 83;
	public static readonly NOT_INSTANCEOF = 84;
	public static readonly NOT_IN = 85;
	public static readonly LPAREN = 86;
	public static readonly RPAREN = 87;
	public static readonly LBRACE = 88;
	public static readonly RBRACE = 89;
	public static readonly LBRACK = 90;
	public static readonly RBRACK = 91;
	public static readonly SEMI = 92;
	public static readonly COMMA = 93;
	public static readonly DOT = 94;
	public static readonly ASSIGN = 95;
	public static readonly GT = 96;
	public static readonly LT = 97;
	public static readonly NOT = 98;
	public static readonly BITNOT = 99;
	public static readonly QUESTION = 100;
	public static readonly COLON = 101;
	public static readonly EQUAL = 102;
	public static readonly LE = 103;
	public static readonly GE = 104;
	public static readonly NOTEQUAL = 105;
	public static readonly AND = 106;
	public static readonly OR = 107;
	public static readonly INC = 108;
	public static readonly DEC = 109;
	public static readonly ADD = 110;
	public static readonly SUB = 111;
	public static readonly MUL = 112;
	public static readonly DIV = 113;
	public static readonly BITAND = 114;
	public static readonly BITOR = 115;
	public static readonly XOR = 116;
	public static readonly MOD = 117;
	public static readonly ADD_ASSIGN = 118;
	public static readonly SUB_ASSIGN = 119;
	public static readonly MUL_ASSIGN = 120;
	public static readonly DIV_ASSIGN = 121;
	public static readonly AND_ASSIGN = 122;
	public static readonly OR_ASSIGN = 123;
	public static readonly XOR_ASSIGN = 124;
	public static readonly MOD_ASSIGN = 125;
	public static readonly LSHIFT_ASSIGN = 126;
	public static readonly RSHIFT_ASSIGN = 127;
	public static readonly URSHIFT_ASSIGN = 128;
	public static readonly ELVIS_ASSIGN = 129;
	public static readonly CapitalizedIdentifier = 130;
	public static readonly Identifier = 131;
	public static readonly AT = 132;
	public static readonly ELLIPSIS = 133;
	public static readonly WS = 134;
	public static readonly NL = 135;
	public static readonly SH_COMMENT = 136;
	public static readonly UNEXPECTED_CHAR = 137;
	public static readonly EOF = Token.EOF;
	public static readonly DQ_GSTRING_MODE = 1;
	public static readonly TDQ_GSTRING_MODE = 2;
	public static readonly SLASHY_GSTRING_MODE = 3;
	public static readonly DOLLAR_SLASHY_GSTRING_MODE = 4;
	public static readonly GSTRING_TYPE_SELECTOR_MODE = 5;
	public static readonly GSTRING_PATH_MODE = 6;

	public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];
	public static readonly literalNames: (string | null)[] = [null, null,
		null, null,
		null, null,
		null, '\'as\'',
		'\'def\'', '\'in\'',
		'\'trait\'', '\'threadsafe\'',
		'\'var\'', null,
		'\'abstract\'',
		'\'assert\'',
		'\'break\'', '\'yield\'',
		'\'case\'', '\'catch\'',
		'\'class\'', '\'const\'',
		'\'continue\'',
		'\'default\'',
		'\'do\'', '\'else\'',
		'\'enum\'', '\'extends\'',
		'\'final\'', '\'finally\'',
		'\'for\'', '\'if\'',
		'\'goto\'', '\'implements\'',
		'\'import\'',
		'\'instanceof\'',
		'\'interface\'',
		'\'native\'',
		'\'new\'', '\'non-sealed\'',
		'\'package\'',
		'\'permits\'',
		'\'private\'',
		'\'protected\'',
		'\'public\'',
		'\'record\'',
		'\'return\'',
		'\'sealed\'',
		'\'static\'',
		'\'strictfp\'',
		'\'super\'', '\'switch\'',
		'\'synchronized\'',
		'\'this\'', '\'throw\'',
		'\'throws\'',
		'\'transient\'',
		'\'try\'', '\'void\'',
		'\'volatile\'',
		'\'while\'', null,
		null, null,
		'\'null\'', '\'..\'',
		'\'<..\'', '\'..<\'',
		'\'<..<\'', '\'*.\'',
		'\'?.\'', null,
		'\'??.\'', '\'?:\'',
		'\'.&\'', '\'::\'',
		'\'=~\'', '\'==~\'',
		'\'**\'', '\'**=\'',
		'\'<=>\'', '\'===\'',
		'\'!==\'', '\'->\'',
		'\'!instanceof\'',
		'\'!in\'', null,
		null, null,
		null, null,
		null, '\';\'',
		'\',\'', null,
		'\'=\'', '\'>\'',
		'\'<\'', '\'!\'',
		'\'~\'', '\'?\'',
		'\':\'', '\'==\'',
		'\'<=\'', '\'>=\'',
		'\'!=\'', '\'&&\'',
		'\'||\'', '\'++\'',
		'\'--\'', '\'+\'',
		'\'-\'', '\'*\'',
		null, '\'&\'',
		'\'|\'', '\'^\'',
		'\'%\'', '\'+=\'',
		'\'-=\'', '\'*=\'',
		'\'/=\'', '\'&=\'',
		'\'|=\'', '\'^=\'',
		'\'%=\'', '\'<<=\'',
		'\'>>=\'', '\'>>>=\'',
		'\'?=\'', null,
		null, '\'@\'',
		'\'...\''];
	public static readonly symbolicNames: (string | null)[] = [null, 'StringLiteral',
		'GStringBegin',
		'GStringEnd',
		'GStringPart',
		'GStringPathPart',
		'RollBackOne',
		'AS', 'DEF',
		'IN', 'TRAIT',
		'THREADSAFE',
		'VAR', 'BuiltInPrimitiveType',
		'ABSTRACT',
		'ASSERT', 'BREAK',
		'YIELD', 'CASE',
		'CATCH', 'CLASS',
		'CONST', 'CONTINUE',
		'DEFAULT',
		'DO', 'ELSE',
		'ENUM', 'EXTENDS',
		'FINAL', 'FINALLY',
		'FOR', 'IF',
		'GOTO', 'IMPLEMENTS',
		'IMPORT', 'INSTANCEOF',
		'INTERFACE',
		'NATIVE', 'NEW',
		'NON_SEALED',
		'PACKAGE',
		'PERMITS',
		'PRIVATE',
		'PROTECTED',
		'PUBLIC', 'RECORD',
		'RETURN', 'SEALED',
		'STATIC', 'STRICTFP',
		'SUPER', 'SWITCH',
		'SYNCHRONIZED',
		'THIS', 'THROW',
		'THROWS', 'TRANSIENT',
		'TRY', 'VOID',
		'VOLATILE',
		'WHILE', 'IntegerLiteral',
		'FloatingPointLiteral',
		'BooleanLiteral',
		'NullLiteral',
		'RANGE_INCLUSIVE',
		'RANGE_EXCLUSIVE_LEFT',
		'RANGE_EXCLUSIVE_RIGHT',
		'RANGE_EXCLUSIVE_FULL',
		'SPREAD_DOT',
		'SAFE_DOT',
		'SAFE_INDEX',
		'SAFE_CHAIN_DOT',
		'ELVIS', 'METHOD_POINTER',
		'METHOD_REFERENCE',
		'REGEX_FIND',
		'REGEX_MATCH',
		'POWER', 'POWER_ASSIGN',
		'SPACESHIP',
		'IDENTICAL',
		'NOT_IDENTICAL',
		'ARROW', 'NOT_INSTANCEOF',
		'NOT_IN', 'LPAREN',
		'RPAREN', 'LBRACE',
		'RBRACE', 'LBRACK',
		'RBRACK', 'SEMI',
		'COMMA', 'DOT',
		'ASSIGN', 'GT',
		'LT', 'NOT',
		'BITNOT', 'QUESTION',
		'COLON', 'EQUAL',
		'LE', 'GE',
		'NOTEQUAL',
		'AND', 'OR',
		'INC', 'DEC',
		'ADD', 'SUB',
		'MUL', 'DIV',
		'BITAND', 'BITOR',
		'XOR', 'MOD',
		'ADD_ASSIGN',
		'SUB_ASSIGN',
		'MUL_ASSIGN',
		'DIV_ASSIGN',
		'AND_ASSIGN',
		'OR_ASSIGN',
		'XOR_ASSIGN',
		'MOD_ASSIGN',
		'LSHIFT_ASSIGN',
		'RSHIFT_ASSIGN',
		'URSHIFT_ASSIGN',
		'ELVIS_ASSIGN',
		'CapitalizedIdentifier',
		'Identifier',
		'AT', 'ELLIPSIS',
		'WS', 'NL',
		'SH_COMMENT',
		'UNEXPECTED_CHAR'];
	public static readonly modeNames: string[] = ['DEFAULT_MODE', 'DQ_GSTRING_MODE',
		'TDQ_GSTRING_MODE', 'SLASHY_GSTRING_MODE',
		'DOLLAR_SLASHY_GSTRING_MODE',
		'GSTRING_TYPE_SELECTOR_MODE',
		'GSTRING_PATH_MODE'];

	public static readonly ruleNames: string[] = [
		'StringLiteral', 'GStringBegin', 'TdqGStringBegin', 'SlashyGStringBegin',
		'DollarSlashyGStringBegin', 'GStringEnd', 'GStringPart', 'GStringCharacter',
		'TdqGStringEnd', 'TdqGStringPart', 'TdqGStringCharacter', 'SlashyGStringEnd',
		'SlashyGStringPart', 'SlashyGStringCharacter', 'DollarSlashyGStringEnd',
		'DollarSlashyGStringPart', 'DollarSlashyGStringCharacter', 'GStringLBrace',
		'GStringIdentifier', 'GStringPathPart', 'RollBackOne', 'DqStringCharacter',
		'SqStringCharacter', 'TdqStringCharacter', 'TsqStringCharacter', 'SlashyStringCharacter',
		'DollarSlashyStringCharacter', 'AS', 'DEF', 'IN', 'TRAIT', 'THREADSAFE',
		'VAR', 'BuiltInPrimitiveType', 'ABSTRACT', 'ASSERT', 'BOOLEAN', 'BREAK',
		'YIELD', 'BYTE', 'CASE', 'CATCH', 'CHAR', 'CLASS', 'CONST', 'CONTINUE',
		'DEFAULT', 'DO', 'DOUBLE', 'ELSE', 'ENUM', 'EXTENDS', 'FINAL', 'FINALLY',
		'FLOAT', 'FOR', 'IF', 'GOTO', 'IMPLEMENTS', 'IMPORT', 'INSTANCEOF', 'INT',
		'INTERFACE', 'LONG', 'NATIVE', 'NEW', 'NON_SEALED', 'PACKAGE', 'PERMITS',
		'PRIVATE', 'PROTECTED', 'PUBLIC', 'RECORD', 'RETURN', 'SEALED', 'SHORT',
		'STATIC', 'STRICTFP', 'SUPER', 'SWITCH', 'SYNCHRONIZED', 'THIS', 'THROW',
		'THROWS', 'TRANSIENT', 'TRY', 'VOID', 'VOLATILE', 'WHILE', 'IntegerLiteral',
		'Zero', 'DecimalIntegerLiteral', 'HexIntegerLiteral', 'OctalIntegerLiteral',
		'BinaryIntegerLiteral', 'IntegerTypeSuffix', 'DecimalNumeral', 'Digits',
		'Digit', 'NonZeroDigit', 'DigitOrUnderscore', 'Underscores', 'Underscore',
		'HexNumeral', 'HexDigits', 'HexDigit', 'HexDigitOrUnderscore', 'OctalNumeral',
		'OctalDigits', 'OctalDigit', 'OctalDigitOrUnderscore', 'BinaryNumeral',
		'BinaryDigits', 'BinaryDigit', 'BinaryDigitOrUnderscore', 'FloatingPointLiteral',
		'DecimalFloatingPointLiteral', 'ExponentPart', 'ExponentIndicator', 'SignedInteger',
		'Sign', 'FloatTypeSuffix', 'HexadecimalFloatingPointLiteral', 'HexSignificand',
		'BinaryExponent', 'BinaryExponentIndicator', 'Dot', 'BooleanLiteral',
		'EscapeSequence', 'OctalEscape', 'UnicodeEscape', 'ZeroToThree', 'DollarEscape',
		'LineEscape', 'LineTerminator', 'SlashEscape', 'Backslash', 'Slash', 'Dollar',
		'GStringQuotationMark', 'SqStringQuotationMark', 'TdqStringQuotationMark',
		'TsqStringQuotationMark', 'DollarSlashyGStringQuotationMarkBegin', 'DollarSlashyGStringQuotationMarkEnd',
		'DollarSlashEscape', 'DollarDollarEscape', 'DollarSlashDollarEscape',
		'NullLiteral', 'RANGE_INCLUSIVE', 'RANGE_EXCLUSIVE_LEFT', 'RANGE_EXCLUSIVE_RIGHT',
		'RANGE_EXCLUSIVE_FULL', 'SPREAD_DOT', 'SAFE_DOT', 'SAFE_INDEX', 'SAFE_CHAIN_DOT',
		'ELVIS', 'METHOD_POINTER', 'METHOD_REFERENCE', 'REGEX_FIND', 'REGEX_MATCH',
		'POWER', 'POWER_ASSIGN', 'SPACESHIP', 'IDENTICAL', 'NOT_IDENTICAL', 'ARROW',
		'NOT_INSTANCEOF', 'NOT_IN', 'LPAREN', 'RPAREN', 'LBRACE', 'RBRACE', 'LBRACK',
		'RBRACK', 'SEMI', 'COMMA', 'DOT', 'ASSIGN', 'GT', 'LT', 'NOT', 'BITNOT',
		'QUESTION', 'COLON', 'EQUAL', 'LE', 'GE', 'NOTEQUAL', 'AND', 'OR', 'INC',
		'DEC', 'ADD', 'SUB', 'MUL', 'DIV', 'BITAND', 'BITOR', 'XOR', 'MOD', 'ADD_ASSIGN',
		'SUB_ASSIGN', 'MUL_ASSIGN', 'DIV_ASSIGN', 'AND_ASSIGN', 'OR_ASSIGN', 'XOR_ASSIGN',
		'MOD_ASSIGN', 'LSHIFT_ASSIGN', 'RSHIFT_ASSIGN', 'URSHIFT_ASSIGN', 'ELVIS_ASSIGN',
		'CapitalizedIdentifier', 'Identifier', 'IdentifierInGString', 'JavaLetter',
		'JavaLetterInGString', 'JavaLetterOrDigit', 'JavaLetterOrDigitInGString',
		'ShCommand', 'AT', 'ELLIPSIS', 'WS', 'NL', 'ML_COMMENT', 'SL_COMMENT',
		'SH_COMMENT', 'UNEXPECTED_CHAR'
	];

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

		// this._channel = Token.HIDDEN_CHANNEL;
	}

	private ignoreMultiLineCommentConditionally(): void {
		if (!this.isInsideParens() && SemanticPredicates.isFollowedByWhiteSpaces(this._input)) {
			return;
		}

		// this._channel = Token.HIDDEN_CHANNEL;
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

	// noinspection JSUnusedGlobalSymbols
	isErrorIgnored(): boolean {
		return this._errorIgnored;
	}

	// noinspection JSUnusedGlobalSymbols
	setErrorIgnored(errorIgnored: boolean): void {
		this._errorIgnored = errorIgnored;
	}

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, GroovyLexer._ATN, GroovyLexer.DecisionsToDFA, new PredictionContextCache());
	}

	// noinspection JSUnusedGlobalSymbols
	public get grammarFileName(): string {
		return 'GroovyLexer.g4';
	}

	// noinspection JSUnusedGlobalSymbols
	public get literalNames(): (string | null)[] {
		return GroovyLexer.literalNames;
	}

	// noinspection JSUnusedGlobalSymbols
	public get symbolicNames(): (string | null)[] {
		return GroovyLexer.symbolicNames;
	}

	// noinspection JSUnusedGlobalSymbols
	public get ruleNames(): string[] {
		return GroovyLexer.ruleNames;
	}

	// noinspection JSUnusedGlobalSymbols
	public get serializedATN(): number[] {
		return GroovyLexer._serializedATN;
	}

	// noinspection JSUnusedGlobalSymbols
	public get channelNames(): string[] {
		return GroovyLexer.channelNames;
	}

	// noinspection JSUnusedGlobalSymbols
	public get modeNames(): string[] {
		return GroovyLexer.modeNames;
	}

	// @Override
	// noinspection JSUnusedGlobalSymbols
	public action(localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
			case 17:
				this.GStringLBrace_action(localctx, actionIndex);
				break;
			case 20:
				this.RollBackOne_action(localctx, actionIndex);
				break;
			case 89:
				this.IntegerLiteral_action(localctx, actionIndex);
				break;
			case 115:
				this.FloatingPointLiteral_action(localctx, actionIndex);
				break;
			case 155:
				this.SAFE_INDEX_action(localctx, actionIndex);
				break;
			case 170:
				this.LPAREN_action(localctx, actionIndex);
				break;
			case 171:
				this.RPAREN_action(localctx, actionIndex);
				break;
			case 172:
				this.LBRACE_action(localctx, actionIndex);
				break;
			case 173:
				this.RBRACE_action(localctx, actionIndex);
				break;
			case 174:
				this.LBRACK_action(localctx, actionIndex);
				break;
			case 175:
				this.RBRACK_action(localctx, actionIndex);
				break;
			case 225:
				this.NL_action(localctx, actionIndex);
				break;
			case 226:
				this.ML_COMMENT_action(localctx, actionIndex);
				break;
			case 227:
				this.SL_COMMENT_action(localctx, actionIndex);
				break;
			case 228:
				this.SH_COMMENT_action(localctx, actionIndex);
				break;
			case 229:
				this.UNEXPECTED_CHAR_action(localctx, actionIndex);
				break;
		}
	}

	private GStringLBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 0:
				this.enterParen();
				break;
		}
	}

	private RollBackOne_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 1:

				// a trick to handle GStrings followed by EOF properly
				// eslint-disable-next-line no-case-declarations
				const readChar: number = this._input.LA(-1);
				if (Token.EOF === this._input.LA(1) && ('"'.charCodeAt(0) === readChar || '/'.charCodeAt(0) === readChar)) {
					this._type = GroovyLexer.GStringEnd;
				} else {
					this._channel = Token.HIDDEN_CHANNEL;
				}

				break;
		}
	}

	private IntegerLiteral_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 2:
				this.require(this._errorIgnored, 'Number ending with underscores is invalid', -1, true);
				break;
			case 3:
				this._invalidDigitCount++;
				break;
			case 4:
				this.require(this._errorIgnored, 'Invalid octal number', -(this._invalidDigitCount + 1), true);
				break;
		}
	}

	private FloatingPointLiteral_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 5:
				this.require(this._errorIgnored, 'Number ending with underscores is invalid', -1, true);
				break;
		}
	}

	private SAFE_INDEX_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 6:
				this.enterParen();
				break;
		}
	}

	private LPAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 7:
				this.enterParen();
				break;
		}
	}

	private RPAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 8:
				this.exitParen();
				break;
		}
	}

	private LBRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 9:
				this.enterParen();
				break;
		}
	}

	private RBRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 10:
				this.exitParen();
				break;
		}
	}

	private LBRACK_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 11:
				this.enterParen();
				break;
		}
	}

	private RBRACK_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 12:
				this.exitParen();
				break;
		}
	}

	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 13:
				this.ignoreTokenInsideParens();
				break;
		}
	}

	private ML_COMMENT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 14:
				this.addComment(0);
				this.ignoreMultiLineCommentConditionally();
				break;
		}
	}

	private SL_COMMENT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 15:
				this.addComment(1);
				this.ignoreTokenInsideParens();
				break;
		}
	}

	private SH_COMMENT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 16:
				this.require(this._errorIgnored || 0 == this._tokenIndex, 'Shebang comment should appear at the first line', -2, true);
				break;
		}
	}

	private UNEXPECTED_CHAR_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 17:
				this.require(this._errorIgnored, 'Unexpected character: \'' + this.text.replace(new RegExp('\'', 'g'), '\\\'') + '\'', -1, false);
				break;
		}
	}

	// @Override
	// noinspection JSUnusedGlobalSymbols
	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 0:
				return this.StringLiteral_sempred(localctx, predIndex);
			case 3:
				return this.SlashyGStringBegin_sempred(localctx, predIndex);
			case 4:
				return this.DollarSlashyGStringBegin_sempred(localctx, predIndex);
			case 12:
				return this.SlashyGStringPart_sempred(localctx, predIndex);
			case 15:
				return this.DollarSlashyGStringPart_sempred(localctx, predIndex);
			case 23:
				return this.TdqStringCharacter_sempred(localctx, predIndex);
			case 24:
				return this.TsqStringCharacter_sempred(localctx, predIndex);
			case 25:
				return this.SlashyStringCharacter_sempred(localctx, predIndex);
			case 26:
				return this.DollarSlashyStringCharacter_sempred(localctx, predIndex);
			case 168:
				return this.NOT_INSTANCEOF_sempred(localctx, predIndex);
			case 169:
				return this.NOT_IN_sempred(localctx, predIndex);
			case 214:
				return this.CapitalizedIdentifier_sempred(localctx, predIndex);
			case 217:
				return this.JavaLetter_sempred(localctx, predIndex);
			case 218:
				return this.JavaLetterInGString_sempred(localctx, predIndex);
			case 219:
				return this.JavaLetterOrDigit_sempred(localctx, predIndex);
			case 220:
				return this.JavaLetterOrDigitInGString_sempred(localctx, predIndex);
		}
		return true;
	}

	private StringLiteral_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.isRegexAllowed() && this._input.LA(1) !== SemanticPredicates.ASTERISK_CHAR;
		}
		return true;
	}

	private SlashyGStringBegin_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 1:
				return this.isRegexAllowed() && this._input.LA(1) !== SemanticPredicates.ASTERISK_CHAR;
			case 2:
				return SemanticPredicates.isFollowedByJavaLetterInGString(this._input);
		}
		return true;
	}

	private DollarSlashyGStringBegin_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 3:
				return SemanticPredicates.isFollowedByJavaLetterInGString(this._input);
		}
		return true;
	}

	private SlashyGStringPart_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 4:
				return SemanticPredicates.isFollowedByJavaLetterInGString(this._input);
		}
		return true;
	}

	private DollarSlashyGStringPart_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 5:
				return SemanticPredicates.isFollowedByJavaLetterInGString(this._input);
		}
		return true;
	}

	private TdqStringCharacter_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 6:
				return this._input.LA(1) !== SemanticPredicates.DOUBLE_QUOTE_CHAR || this._input.LA(2) !== SemanticPredicates.DOUBLE_QUOTE_CHAR || this._input.LA(3) === SemanticPredicates.DOUBLE_QUOTE_CHAR && (this._input.LA(4) !== SemanticPredicates.DOUBLE_QUOTE_CHAR || this._input.LA(5) !== SemanticPredicates.DOUBLE_QUOTE_CHAR);
		}
		return true;
	}

	private TsqStringCharacter_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 7:
				return this._input.LA(1) !== SemanticPredicates.SINGLE_QUOTE_CHAR || this._input.LA(2) !== SemanticPredicates.SINGLE_QUOTE_CHAR || this._input.LA(3) === SemanticPredicates.SINGLE_QUOTE_CHAR && (this._input.LA(4) !== SemanticPredicates.SINGLE_QUOTE_CHAR || this._input.LA(5) !== SemanticPredicates.SINGLE_QUOTE_CHAR);
		}
		return true;
	}

	private SlashyStringCharacter_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 8:
				return !SemanticPredicates.isFollowedByJavaLetterInGString(this._input);
		}
		return true;
	}

	private DollarSlashyStringCharacter_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 9:
				return this._input.LA(-4) !== SemanticPredicates.DOLLAR_CHAR;
			case 10:
				return this._input.LA(1) !== SemanticPredicates.DOLLAR_CHAR;
			case 11:
				return this._input.LA(1) !== SemanticPredicates.DOLLAR_CHAR;
			case 12:
				return !SemanticPredicates.isFollowedByJavaLetterInGString(this._input);
		}
		return true;
	}

	private NOT_INSTANCEOF_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 13:
				return SemanticPredicates.isFollowedBy(this._input, ' ', '\t', '\r', '\n');
		}
		return true;
	}

	private NOT_IN_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 14:
				return SemanticPredicates.isFollowedBy(this._input, ' ', '\t', '\r', '\n', '[', '(', '{');
		}
		return true;
	}

	private CapitalizedIdentifier_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 15:
				return SemanticPredicates.isUpperCase(this._input.LA(-1));
		}
		return true;
	}

	private JavaLetter_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 16:
				return GroovyLexer.isJavaIdentifierStartAndNotIdentifierIgnorable(this._input.LA(-1));
			case 17:
				return SemanticPredicates.isJavaIdentifierStart([this._input.LA(-2), this._input.LA(-1)]);
		}
		return true;
	}

	private JavaLetterInGString_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 18:
				return this._input.LA(-1) !== SemanticPredicates.DOLLAR_CHAR;
		}
		return true;
	}

	private JavaLetterOrDigit_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 19:
				return GroovyLexer.isJavaIdentifierPartAndNotIdentifierIgnorable(this._input.LA(-1));
			case 20:
				return SemanticPredicates.isJavaIdentifierPart(this._input.LA(-2), this._input.LA(-1));
		}
		return true;
	}

	private JavaLetterOrDigitInGString_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 21:
				return this._input.LA(-1) !== SemanticPredicates.DOLLAR_CHAR;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4, 0, 137, 1777, 6, -1, 6,
		-1, 6, -1, 6, -1, 6, -1, 6, -1, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5,
		7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13,
		7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7,
		20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27,
		2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2,
		35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42,
		7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7,
		49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56,
		2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2,
		64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71,
		7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7,
		78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85,
		2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2,
		93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100,
		7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106,
		7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109, 7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112,
		7, 112, 2, 113, 7, 113, 2, 114, 7, 114, 2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118,
		7, 118, 2, 119, 7, 119, 2, 120, 7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124,
		7, 124, 2, 125, 7, 125, 2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130,
		7, 130, 2, 131, 7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136,
		7, 136, 2, 137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142,
		7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145, 7, 145, 2, 146, 7, 146, 2, 147, 7, 147, 2, 148,
		7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151, 7, 151, 2, 152, 7, 152, 2, 153, 7, 153, 2, 154,
		7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157, 7, 157, 2, 158, 7, 158, 2, 159, 7, 159, 2, 160,
		7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163, 7, 163, 2, 164, 7, 164, 2, 165, 7, 165, 2, 166,
		7, 166, 2, 167, 7, 167, 2, 168, 7, 168, 2, 169, 7, 169, 2, 170, 7, 170, 2, 171, 7, 171, 2, 172,
		7, 172, 2, 173, 7, 173, 2, 174, 7, 174, 2, 175, 7, 175, 2, 176, 7, 176, 2, 177, 7, 177, 2, 178,
		7, 178, 2, 179, 7, 179, 2, 180, 7, 180, 2, 181, 7, 181, 2, 182, 7, 182, 2, 183, 7, 183, 2, 184,
		7, 184, 2, 185, 7, 185, 2, 186, 7, 186, 2, 187, 7, 187, 2, 188, 7, 188, 2, 189, 7, 189, 2, 190,
		7, 190, 2, 191, 7, 191, 2, 192, 7, 192, 2, 193, 7, 193, 2, 194, 7, 194, 2, 195, 7, 195, 2, 196,
		7, 196, 2, 197, 7, 197, 2, 198, 7, 198, 2, 199, 7, 199, 2, 200, 7, 200, 2, 201, 7, 201, 2, 202,
		7, 202, 2, 203, 7, 203, 2, 204, 7, 204, 2, 205, 7, 205, 2, 206, 7, 206, 2, 207, 7, 207, 2, 208,
		7, 208, 2, 209, 7, 209, 2, 210, 7, 210, 2, 211, 7, 211, 2, 212, 7, 212, 2, 213, 7, 213, 2, 214,
		7, 214, 2, 215, 7, 215, 2, 216, 7, 216, 2, 217, 7, 217, 2, 218, 7, 218, 2, 219, 7, 219, 2, 220,
		7, 220, 2, 221, 7, 221, 2, 222, 7, 222, 2, 223, 7, 223, 2, 224, 7, 224, 2, 225, 7, 225, 2, 226,
		7, 226, 2, 227, 7, 227, 2, 228, 7, 228, 2, 229, 7, 229, 1, 0, 1, 0, 5, 0, 470, 8, 0, 10, 0, 12, 0,
		473, 9, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 479, 8, 0, 10, 0, 12, 0, 482, 9, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
		0, 4, 0, 489, 8, 0, 11, 0, 12, 0, 490, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 497, 8, 0, 10, 0, 12, 0, 500, 9,
		0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 506, 8, 0, 10, 0, 12, 0, 509, 9, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 0, 515,
		8, 0, 11, 0, 12, 0, 516, 1, 0, 1, 0, 3, 0, 521, 8, 0, 1, 1, 1, 1, 5, 1, 525, 8, 1, 10, 1, 12, 1, 528,
		9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 5, 2, 537, 8, 2, 10, 2, 12, 2, 540, 9, 2, 1, 2, 1, 2, 1,
		2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 5, 3, 551, 8, 3, 10, 3, 12, 3, 554, 9, 3, 1, 3, 1, 3, 1, 3, 1, 3,
		1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 5, 4, 565, 8, 4, 10, 4, 12, 4, 568, 9, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
		4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1,
		8, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 3, 11, 604, 8, 11, 1, 11, 1, 11,
		1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 14, 1,
		14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17,
		1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1,
		19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 3, 21, 659, 8, 21, 1, 22, 1, 22, 3, 22, 663,
		8, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 670, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3,
		24, 677, 8, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 684, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26,
		1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 700, 8, 26, 1, 27, 1,
		27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30,
		1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1,
		32, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 3, 33, 741, 8, 33, 1, 34, 1, 34, 1, 34,
		1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 36, 1,
		36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 38, 1, 38,
		1, 38, 1, 38, 1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1,
		41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43, 1, 43,
		1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1,
		45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1, 47, 1, 48,
		1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1,
		50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52,
		1, 52, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1,
		54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 57, 1, 57, 1, 57, 1, 57, 1, 57, 1, 58, 1, 58,
		1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1,
		59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61,
		1, 61, 1, 61, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1,
		63, 1, 63, 1, 63, 1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 66,
		1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 67, 1, 67, 1, 67, 1, 67, 1,
		67, 1, 67, 1, 67, 1, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 69,
		1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1,
		70, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72,
		1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1,
		75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 77, 1, 77,
		1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 79, 1,
		79, 1, 79, 1, 79, 1, 79, 1, 79, 1, 79, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80,
		1, 80, 1, 80, 1, 80, 1, 80, 1, 81, 1, 81, 1, 81, 1, 81, 1, 81, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1,
		82, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84,
		1, 84, 1, 84, 1, 84, 1, 85, 1, 85, 1, 85, 1, 85, 1, 86, 1, 86, 1, 86, 1, 86, 1, 86, 1, 87, 1, 87, 1,
		87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 88, 1, 88, 1, 88, 1, 88, 1, 88, 1, 88, 1, 89, 1, 89,
		1, 89, 1, 89, 3, 89, 1125, 8, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1130, 8, 89, 1, 89, 1, 89, 1, 89, 4,
		89, 1135, 8, 89, 11, 89, 12, 89, 1136, 1, 89, 1, 89, 3, 89, 1141, 8, 89, 3, 89, 1143, 8, 89, 1,
		90, 1, 90, 1, 91, 1, 91, 3, 91, 1149, 8, 91, 1, 92, 1, 92, 3, 92, 1153, 8, 92, 1, 93, 1, 93, 3, 93,
		1157, 8, 93, 1, 94, 1, 94, 3, 94, 1161, 8, 94, 1, 95, 1, 95, 1, 96, 1, 96, 1, 96, 3, 96, 1168, 8,
		96, 1, 96, 1, 96, 1, 96, 3, 96, 1173, 8, 96, 3, 96, 1175, 8, 96, 1, 97, 1, 97, 5, 97, 1179, 8, 97,
		10, 97, 12, 97, 1182, 9, 97, 1, 97, 3, 97, 1185, 8, 97, 1, 98, 1, 98, 3, 98, 1189, 8, 98, 1, 99,
		1, 99, 1, 100, 1, 100, 3, 100, 1195, 8, 100, 1, 101, 4, 101, 1198, 8, 101, 11, 101, 12, 101,
		1199, 1, 102, 1, 102, 1, 103, 1, 103, 1, 103, 1, 103, 1, 104, 1, 104, 5, 104, 1210, 8, 104, 10,
		104, 12, 104, 1213, 9, 104, 1, 104, 3, 104, 1216, 8, 104, 1, 105, 1, 105, 1, 106, 1, 106, 3,
		106, 1222, 8, 106, 1, 107, 1, 107, 3, 107, 1226, 8, 107, 1, 107, 1, 107, 1, 108, 1, 108, 5, 108,
		1232, 8, 108, 10, 108, 12, 108, 1235, 9, 108, 1, 108, 3, 108, 1238, 8, 108, 1, 109, 1, 109,
		1, 110, 1, 110, 3, 110, 1244, 8, 110, 1, 111, 1, 111, 1, 111, 1, 111, 1, 112, 1, 112, 5, 112,
		1252, 8, 112, 10, 112, 12, 112, 1255, 9, 112, 1, 112, 3, 112, 1258, 8, 112, 1, 113, 1, 113,
		1, 114, 1, 114, 3, 114, 1264, 8, 114, 1, 115, 1, 115, 3, 115, 1268, 8, 115, 1, 115, 1, 115, 1,
		115, 3, 115, 1273, 8, 115, 1, 116, 3, 116, 1276, 8, 116, 1, 116, 1, 116, 1, 116, 3, 116, 1281,
		8, 116, 1, 116, 3, 116, 1284, 8, 116, 1, 116, 1, 116, 1, 116, 3, 116, 1289, 8, 116, 1, 116, 1,
		116, 1, 116, 3, 116, 1294, 8, 116, 1, 117, 1, 117, 1, 117, 1, 118, 1, 118, 1, 119, 3, 119, 1302,
		8, 119, 1, 119, 1, 119, 1, 120, 1, 120, 1, 121, 1, 121, 1, 122, 1, 122, 1, 122, 3, 122, 1313,
		8, 122, 1, 123, 1, 123, 3, 123, 1317, 8, 123, 1, 123, 1, 123, 1, 123, 3, 123, 1322, 8, 123, 1,
		123, 1, 123, 1, 123, 3, 123, 1327, 8, 123, 1, 124, 1, 124, 1, 124, 1, 125, 1, 125, 1, 126, 1,
		126, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 3, 127, 1345, 8,
		127, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 3, 128, 1354, 8, 128, 1, 129, 1,
		129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 3, 129, 1368,
		8, 129, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 131, 1, 131, 1, 132, 1, 132,
		1, 132, 1, 133, 1, 133, 1, 133, 1, 134, 3, 134, 1386, 8, 134, 1, 134, 1, 134, 3, 134, 1390, 8,
		134, 1, 135, 1, 135, 1, 135, 1, 136, 1, 136, 1, 137, 1, 137, 1, 138, 1, 138, 1, 139, 1, 139, 1,
		140, 1, 140, 1, 141, 1, 141, 1, 141, 1, 141, 1, 142, 1, 142, 1, 142, 1, 142, 1, 143, 1, 143, 1,
		143, 1, 144, 1, 144, 1, 144, 1, 145, 1, 145, 1, 145, 1, 146, 1, 146, 1, 146, 1, 147, 1, 147, 1,
		147, 1, 147, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 149, 1, 149, 1, 149, 1, 150, 1, 150, 1,
		150, 1, 150, 1, 151, 1, 151, 1, 151, 1, 151, 1, 152, 1, 152, 1, 152, 1, 152, 1, 152, 1, 153, 1,
		153, 1, 153, 1, 154, 1, 154, 1, 154, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1,
		156, 1, 156, 1, 156, 1, 156, 1, 157, 1, 157, 1, 157, 1, 158, 1, 158, 1, 158, 1, 159, 1, 159, 1,
		159, 1, 160, 1, 160, 1, 160, 1, 161, 1, 161, 1, 161, 1, 161, 1, 162, 1, 162, 1, 162, 1, 163, 1,
		163, 1, 163, 1, 163, 1, 164, 1, 164, 1, 164, 1, 164, 1, 165, 1, 165, 1, 165, 1, 165, 1, 166, 1,
		166, 1, 166, 1, 166, 1, 167, 1, 167, 1, 167, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1,
		168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 169, 1, 169, 1, 169, 1, 169, 1,
		169, 1, 169, 1, 170, 1, 170, 1, 170, 1, 170, 1, 170, 1, 171, 1, 171, 1, 171, 1, 171, 1, 171, 1,
		172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 174, 1, 174, 1,
		174, 1, 174, 1, 174, 1, 175, 1, 175, 1, 175, 1, 175, 1, 175, 1, 176, 1, 176, 1, 177, 1, 177, 1,
		178, 1, 178, 1, 179, 1, 179, 1, 180, 1, 180, 1, 181, 1, 181, 1, 182, 1, 182, 1, 183, 1, 183, 1,
		184, 1, 184, 1, 185, 1, 185, 1, 186, 1, 186, 1, 186, 1, 187, 1, 187, 1, 187, 1, 188, 1, 188, 1,
		188, 1, 189, 1, 189, 1, 189, 1, 190, 1, 190, 1, 190, 1, 191, 1, 191, 1, 191, 1, 192, 1, 192, 1,
		192, 1, 193, 1, 193, 1, 193, 1, 194, 1, 194, 1, 195, 1, 195, 1, 196, 1, 196, 1, 197, 1, 197, 1,
		198, 1, 198, 1, 199, 1, 199, 1, 200, 1, 200, 1, 201, 1, 201, 1, 202, 1, 202, 1, 202, 1, 203, 1,
		203, 1, 203, 1, 204, 1, 204, 1, 204, 1, 205, 1, 205, 1, 205, 1, 206, 1, 206, 1, 206, 1, 207, 1,
		207, 1, 207, 1, 208, 1, 208, 1, 208, 1, 209, 1, 209, 1, 209, 1, 210, 1, 210, 1, 210, 1, 210, 1,
		211, 1, 211, 1, 211, 1, 211, 1, 212, 1, 212, 1, 212, 1, 212, 1, 212, 1, 213, 1, 213, 1, 213, 1,
		214, 1, 214, 1, 214, 5, 214, 1658, 8, 214, 10, 214, 12, 214, 1661, 9, 214, 1, 215, 1, 215, 5,
		215, 1665, 8, 215, 10, 215, 12, 215, 1668, 9, 215, 1, 216, 1, 216, 5, 216, 1672, 8, 216, 10,
		216, 12, 216, 1675, 9, 216, 1, 217, 1, 217, 1, 217, 1, 217, 1, 217, 1, 217, 3, 217, 1683, 8,
		217, 1, 218, 1, 218, 1, 218, 1, 219, 1, 219, 1, 219, 1, 219, 1, 219, 1, 219, 3, 219, 1694, 8,
		219, 1, 220, 1, 220, 1, 220, 1, 221, 5, 221, 1700, 8, 221, 10, 221, 12, 221, 1703, 9, 221, 1,
		222, 1, 222, 1, 223, 1, 223, 1, 223, 1, 223, 1, 224, 4, 224, 1712, 8, 224, 11, 224, 12, 224,
		1713, 1, 224, 4, 224, 1717, 8, 224, 11, 224, 12, 224, 1718, 3, 224, 1721, 8, 224, 1, 224, 1,
		224, 1, 225, 1, 225, 1, 225, 1, 226, 1, 226, 1, 226, 1, 226, 5, 226, 1732, 8, 226, 10, 226, 12,
		226, 1735, 9, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 227, 1, 227, 1,
		227, 1, 227, 5, 227, 1748, 8, 227, 10, 227, 12, 227, 1751, 9, 227, 1, 227, 1, 227, 1, 227, 1,
		227, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 1, 228, 5,
		228, 1768, 8, 228, 10, 228, 12, 228, 1771, 9, 228, 1, 228, 1, 228, 1, 229, 1, 229, 1, 229, 1,
		1733, 0, 230, 7, 1, 9, 2, 11, 0, 13, 0, 15, 0, 17, 3, 19, 4, 21, 0, 23, 0, 25, 0, 27, 0, 29, 0, 31,
		0, 33, 0, 35, 0, 37, 0, 39, 0, 41, 0, 43, 0, 45, 5, 47, 6, 49, 0, 51, 0, 53, 0, 55, 0, 57, 0, 59, 0,
		61, 7, 63, 8, 65, 9, 67, 10, 69, 11, 71, 12, 73, 13, 75, 14, 77, 15, 79, 0, 81, 16, 83, 17, 85,
		0, 87, 18, 89, 19, 91, 0, 93, 20, 95, 21, 97, 22, 99, 23, 101, 24, 103, 0, 105, 25, 107, 26, 109,
		27, 111, 28, 113, 29, 115, 0, 117, 30, 119, 31, 121, 32, 123, 33, 125, 34, 127, 35, 129, 0,
		131, 36, 133, 0, 135, 37, 137, 38, 139, 39, 141, 40, 143, 41, 145, 42, 147, 43, 149, 44, 151,
		45, 153, 46, 155, 47, 157, 0, 159, 48, 161, 49, 163, 50, 165, 51, 167, 52, 169, 53, 171, 54,
		173, 55, 175, 56, 177, 57, 179, 58, 181, 59, 183, 60, 185, 61, 187, 0, 189, 0, 191, 0, 193,
		0, 195, 0, 197, 0, 199, 0, 201, 0, 203, 0, 205, 0, 207, 0, 209, 0, 211, 0, 213, 0, 215, 0, 217,
		0, 219, 0, 221, 0, 223, 0, 225, 0, 227, 0, 229, 0, 231, 0, 233, 0, 235, 0, 237, 62, 239, 0, 241,
		0, 243, 0, 245, 0, 247, 0, 249, 0, 251, 0, 253, 0, 255, 0, 257, 0, 259, 0, 261, 63, 263, 0, 265,
		0, 267, 0, 269, 0, 271, 0, 273, 0, 275, 0, 277, 0, 279, 0, 281, 0, 283, 0, 285, 0, 287, 0, 289,
		0, 291, 0, 293, 0, 295, 0, 297, 0, 299, 0, 301, 0, 303, 64, 305, 65, 307, 66, 309, 67, 311, 68,
		313, 69, 315, 70, 317, 71, 319, 72, 321, 73, 323, 74, 325, 75, 327, 76, 329, 77, 331, 78, 333,
		79, 335, 80, 337, 81, 339, 82, 341, 83, 343, 84, 345, 85, 347, 86, 349, 87, 351, 88, 353, 89,
		355, 90, 357, 91, 359, 92, 361, 93, 363, 94, 365, 95, 367, 96, 369, 97, 371, 98, 373, 99, 375,
		100, 377, 101, 379, 102, 381, 103, 383, 104, 385, 105, 387, 106, 389, 107, 391, 108, 393,
		109, 395, 110, 397, 111, 399, 112, 401, 113, 403, 114, 405, 115, 407, 116, 409, 117, 411,
		118, 413, 119, 415, 120, 417, 121, 419, 122, 421, 123, 423, 124, 425, 125, 427, 126, 429,
		127, 431, 128, 433, 129, 435, 130, 437, 131, 439, 0, 441, 0, 443, 0, 445, 0, 447, 0, 449, 0,
		451, 132, 453, 133, 455, 134, 457, 135, 459, 0, 461, 0, 463, 136, 465, 137, 7, 0, 1, 2, 3, 4,
		5, 6, 26, 5, 0, 10, 10, 13, 13, 34, 34, 36, 36, 92, 92, 4, 0, 10, 10, 13, 13, 39, 39, 92, 92, 3,
		0, 34, 34, 36, 36, 92, 92, 2, 0, 39, 39, 92, 92, 3, 0, 0, 0, 36, 36, 47, 47, 1, 0, 48, 57, 6, 0, 71,
		71, 73, 73, 76, 76, 103, 103, 105, 105, 108, 108, 1, 0, 49, 57, 2, 0, 88, 88, 120, 120, 3, 0,
		48, 57, 65, 70, 97, 102, 1, 0, 48, 55, 2, 0, 66, 66, 98, 98, 1, 0, 48, 49, 2, 0, 69, 69, 101, 101,
		2, 0, 43, 43, 45, 45, 4, 0, 68, 68, 70, 71, 100, 100, 102, 103, 2, 0, 80, 80, 112, 112, 7, 0, 34,
		34, 39, 39, 92, 92, 98, 98, 102, 102, 110, 110, 114, 116, 1, 0, 48, 51, 4, 0, 36, 36, 65, 90,
		95, 95, 97, 122, 2, 0, 0, 127, 55296, 56319, 1, 0, 55296, 56319, 1, 0, 56320, 57343, 5, 0,
		36, 36, 48, 57, 65, 90, 95, 95, 97, 122, 3, 0, 10, 10, 13, 13, 65535, 65535, 2, 0, 9, 9, 32, 32,
		1795, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 61,
		1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0, 0, 0, 67, 1, 0, 0, 0, 0, 69, 1, 0, 0, 0, 0, 71, 1, 0, 0,
		0, 0, 73, 1, 0, 0, 0, 0, 75, 1, 0, 0, 0, 0, 77, 1, 0, 0, 0, 0, 81, 1, 0, 0, 0, 0, 83, 1, 0, 0, 0, 0, 87,
		1, 0, 0, 0, 0, 89, 1, 0, 0, 0, 0, 93, 1, 0, 0, 0, 0, 95, 1, 0, 0, 0, 0, 97, 1, 0, 0, 0, 0, 99, 1, 0, 0,
		0, 0, 101, 1, 0, 0, 0, 0, 105, 1, 0, 0, 0, 0, 107, 1, 0, 0, 0, 0, 109, 1, 0, 0, 0, 0, 111, 1, 0, 0, 0,
		0, 113, 1, 0, 0, 0, 0, 117, 1, 0, 0, 0, 0, 119, 1, 0, 0, 0, 0, 121, 1, 0, 0, 0, 0, 123, 1, 0, 0, 0, 0,
		125, 1, 0, 0, 0, 0, 127, 1, 0, 0, 0, 0, 131, 1, 0, 0, 0, 0, 135, 1, 0, 0, 0, 0, 137, 1, 0, 0, 0, 0, 139,
		1, 0, 0, 0, 0, 141, 1, 0, 0, 0, 0, 143, 1, 0, 0, 0, 0, 145, 1, 0, 0, 0, 0, 147, 1, 0, 0, 0, 0, 149, 1,
		0, 0, 0, 0, 151, 1, 0, 0, 0, 0, 153, 1, 0, 0, 0, 0, 155, 1, 0, 0, 0, 0, 159, 1, 0, 0, 0, 0, 161, 1, 0,
		0, 0, 0, 163, 1, 0, 0, 0, 0, 165, 1, 0, 0, 0, 0, 167, 1, 0, 0, 0, 0, 169, 1, 0, 0, 0, 0, 171, 1, 0, 0,
		0, 0, 173, 1, 0, 0, 0, 0, 175, 1, 0, 0, 0, 0, 177, 1, 0, 0, 0, 0, 179, 1, 0, 0, 0, 0, 181, 1, 0, 0, 0,
		0, 183, 1, 0, 0, 0, 0, 185, 1, 0, 0, 0, 0, 237, 1, 0, 0, 0, 0, 261, 1, 0, 0, 0, 0, 303, 1, 0, 0, 0, 0,
		305, 1, 0, 0, 0, 0, 307, 1, 0, 0, 0, 0, 309, 1, 0, 0, 0, 0, 311, 1, 0, 0, 0, 0, 313, 1, 0, 0, 0, 0, 315,
		1, 0, 0, 0, 0, 317, 1, 0, 0, 0, 0, 319, 1, 0, 0, 0, 0, 321, 1, 0, 0, 0, 0, 323, 1, 0, 0, 0, 0, 325, 1,
		0, 0, 0, 0, 327, 1, 0, 0, 0, 0, 329, 1, 0, 0, 0, 0, 331, 1, 0, 0, 0, 0, 333, 1, 0, 0, 0, 0, 335, 1, 0,
		0, 0, 0, 337, 1, 0, 0, 0, 0, 339, 1, 0, 0, 0, 0, 341, 1, 0, 0, 0, 0, 343, 1, 0, 0, 0, 0, 345, 1, 0, 0,
		0, 0, 347, 1, 0, 0, 0, 0, 349, 1, 0, 0, 0, 0, 351, 1, 0, 0, 0, 0, 353, 1, 0, 0, 0, 0, 355, 1, 0, 0, 0,
		0, 357, 1, 0, 0, 0, 0, 359, 1, 0, 0, 0, 0, 361, 1, 0, 0, 0, 0, 363, 1, 0, 0, 0, 0, 365, 1, 0, 0, 0, 0,
		367, 1, 0, 0, 0, 0, 369, 1, 0, 0, 0, 0, 371, 1, 0, 0, 0, 0, 373, 1, 0, 0, 0, 0, 375, 1, 0, 0, 0, 0, 377,
		1, 0, 0, 0, 0, 379, 1, 0, 0, 0, 0, 381, 1, 0, 0, 0, 0, 383, 1, 0, 0, 0, 0, 385, 1, 0, 0, 0, 0, 387, 1,
		0, 0, 0, 0, 389, 1, 0, 0, 0, 0, 391, 1, 0, 0, 0, 0, 393, 1, 0, 0, 0, 0, 395, 1, 0, 0, 0, 0, 397, 1, 0,
		0, 0, 0, 399, 1, 0, 0, 0, 0, 401, 1, 0, 0, 0, 0, 403, 1, 0, 0, 0, 0, 405, 1, 0, 0, 0, 0, 407, 1, 0, 0,
		0, 0, 409, 1, 0, 0, 0, 0, 411, 1, 0, 0, 0, 0, 413, 1, 0, 0, 0, 0, 415, 1, 0, 0, 0, 0, 417, 1, 0, 0, 0,
		0, 419, 1, 0, 0, 0, 0, 421, 1, 0, 0, 0, 0, 423, 1, 0, 0, 0, 0, 425, 1, 0, 0, 0, 0, 427, 1, 0, 0, 0, 0,
		429, 1, 0, 0, 0, 0, 431, 1, 0, 0, 0, 0, 433, 1, 0, 0, 0, 0, 435, 1, 0, 0, 0, 0, 437, 1, 0, 0, 0, 0, 451,
		1, 0, 0, 0, 0, 453, 1, 0, 0, 0, 0, 455, 1, 0, 0, 0, 0, 457, 1, 0, 0, 0, 0, 459, 1, 0, 0, 0, 0, 461, 1,
		0, 0, 0, 0, 463, 1, 0, 0, 0, 0, 465, 1, 0, 0, 0, 1, 17, 1, 0, 0, 0, 1, 19, 1, 0, 0, 0, 1, 21, 1, 0, 0,
		0, 2, 23, 1, 0, 0, 0, 2, 25, 1, 0, 0, 0, 2, 27, 1, 0, 0, 0, 3, 29, 1, 0, 0, 0, 3, 31, 1, 0, 0, 0, 3, 33,
		1, 0, 0, 0, 4, 35, 1, 0, 0, 0, 4, 37, 1, 0, 0, 0, 4, 39, 1, 0, 0, 0, 5, 41, 1, 0, 0, 0, 5, 43, 1, 0, 0,
		0, 6, 45, 1, 0, 0, 0, 6, 47, 1, 0, 0, 0, 7, 520, 1, 0, 0, 0, 9, 522, 1, 0, 0, 0, 11, 534, 1, 0, 0, 0,
		13, 547, 1, 0, 0, 0, 15, 562, 1, 0, 0, 0, 17, 576, 1, 0, 0, 0, 19, 580, 1, 0, 0, 0, 21, 584, 1, 0,
		0, 0, 23, 588, 1, 0, 0, 0, 25, 593, 1, 0, 0, 0, 27, 598, 1, 0, 0, 0, 29, 603, 1, 0, 0, 0, 31, 610,
		1, 0, 0, 0, 33, 616, 1, 0, 0, 0, 35, 620, 1, 0, 0, 0, 37, 625, 1, 0, 0, 0, 39, 631, 1, 0, 0, 0, 41,
		635, 1, 0, 0, 0, 43, 642, 1, 0, 0, 0, 45, 648, 1, 0, 0, 0, 47, 651, 1, 0, 0, 0, 49, 658, 1, 0, 0, 0,
		51, 662, 1, 0, 0, 0, 53, 669, 1, 0, 0, 0, 55, 676, 1, 0, 0, 0, 57, 683, 1, 0, 0, 0, 59, 699, 1, 0,
		0, 0, 61, 701, 1, 0, 0, 0, 63, 704, 1, 0, 0, 0, 65, 708, 1, 0, 0, 0, 67, 711, 1, 0, 0, 0, 69, 717,
		1, 0, 0, 0, 71, 728, 1, 0, 0, 0, 73, 740, 1, 0, 0, 0, 75, 742, 1, 0, 0, 0, 77, 751, 1, 0, 0, 0, 79,
		758, 1, 0, 0, 0, 81, 766, 1, 0, 0, 0, 83, 772, 1, 0, 0, 0, 85, 778, 1, 0, 0, 0, 87, 783, 1, 0, 0, 0,
		89, 788, 1, 0, 0, 0, 91, 794, 1, 0, 0, 0, 93, 799, 1, 0, 0, 0, 95, 805, 1, 0, 0, 0, 97, 811, 1, 0,
		0, 0, 99, 820, 1, 0, 0, 0, 101, 828, 1, 0, 0, 0, 103, 831, 1, 0, 0, 0, 105, 838, 1, 0, 0, 0, 107,
		843, 1, 0, 0, 0, 109, 848, 1, 0, 0, 0, 111, 856, 1, 0, 0, 0, 113, 862, 1, 0, 0, 0, 115, 870, 1, 0,
		0, 0, 117, 876, 1, 0, 0, 0, 119, 880, 1, 0, 0, 0, 121, 883, 1, 0, 0, 0, 123, 888, 1, 0, 0, 0, 125,
		899, 1, 0, 0, 0, 127, 906, 1, 0, 0, 0, 129, 917, 1, 0, 0, 0, 131, 921, 1, 0, 0, 0, 133, 931, 1, 0,
		0, 0, 135, 936, 1, 0, 0, 0, 137, 943, 1, 0, 0, 0, 139, 947, 1, 0, 0, 0, 141, 958, 1, 0, 0, 0, 143,
		966, 1, 0, 0, 0, 145, 974, 1, 0, 0, 0, 147, 982, 1, 0, 0, 0, 149, 992, 1, 0, 0, 0, 151, 999, 1, 0,
		0, 0, 153, 1006, 1, 0, 0, 0, 155, 1013, 1, 0, 0, 0, 157, 1020, 1, 0, 0, 0, 159, 1026, 1, 0, 0, 0,
		161, 1033, 1, 0, 0, 0, 163, 1042, 1, 0, 0, 0, 165, 1048, 1, 0, 0, 0, 167, 1055, 1, 0, 0, 0, 169,
		1068, 1, 0, 0, 0, 171, 1073, 1, 0, 0, 0, 173, 1079, 1, 0, 0, 0, 175, 1086, 1, 0, 0, 0, 177, 1096,
		1, 0, 0, 0, 179, 1100, 1, 0, 0, 0, 181, 1105, 1, 0, 0, 0, 183, 1114, 1, 0, 0, 0, 185, 1142, 1, 0,
		0, 0, 187, 1144, 1, 0, 0, 0, 189, 1146, 1, 0, 0, 0, 191, 1150, 1, 0, 0, 0, 193, 1154, 1, 0, 0, 0,
		195, 1158, 1, 0, 0, 0, 197, 1162, 1, 0, 0, 0, 199, 1174, 1, 0, 0, 0, 201, 1176, 1, 0, 0, 0, 203,
		1188, 1, 0, 0, 0, 205, 1190, 1, 0, 0, 0, 207, 1194, 1, 0, 0, 0, 209, 1197, 1, 0, 0, 0, 211, 1201,
		1, 0, 0, 0, 213, 1203, 1, 0, 0, 0, 215, 1207, 1, 0, 0, 0, 217, 1217, 1, 0, 0, 0, 219, 1221, 1, 0,
		0, 0, 221, 1223, 1, 0, 0, 0, 223, 1229, 1, 0, 0, 0, 225, 1239, 1, 0, 0, 0, 227, 1243, 1, 0, 0, 0,
		229, 1245, 1, 0, 0, 0, 231, 1249, 1, 0, 0, 0, 233, 1259, 1, 0, 0, 0, 235, 1263, 1, 0, 0, 0, 237,
		1267, 1, 0, 0, 0, 239, 1293, 1, 0, 0, 0, 241, 1295, 1, 0, 0, 0, 243, 1298, 1, 0, 0, 0, 245, 1301,
		1, 0, 0, 0, 247, 1305, 1, 0, 0, 0, 249, 1307, 1, 0, 0, 0, 251, 1309, 1, 0, 0, 0, 253, 1326, 1, 0,
		0, 0, 255, 1328, 1, 0, 0, 0, 257, 1331, 1, 0, 0, 0, 259, 1333, 1, 0, 0, 0, 261, 1344, 1, 0, 0, 0,
		263, 1353, 1, 0, 0, 0, 265, 1367, 1, 0, 0, 0, 267, 1369, 1, 0, 0, 0, 269, 1376, 1, 0, 0, 0, 271,
		1378, 1, 0, 0, 0, 273, 1381, 1, 0, 0, 0, 275, 1389, 1, 0, 0, 0, 277, 1391, 1, 0, 0, 0, 279, 1394,
		1, 0, 0, 0, 281, 1396, 1, 0, 0, 0, 283, 1398, 1, 0, 0, 0, 285, 1400, 1, 0, 0, 0, 287, 1402, 1, 0,
		0, 0, 289, 1404, 1, 0, 0, 0, 291, 1408, 1, 0, 0, 0, 293, 1412, 1, 0, 0, 0, 295, 1415, 1, 0, 0, 0,
		297, 1418, 1, 0, 0, 0, 299, 1421, 1, 0, 0, 0, 301, 1424, 1, 0, 0, 0, 303, 1428, 1, 0, 0, 0, 305,
		1433, 1, 0, 0, 0, 307, 1436, 1, 0, 0, 0, 309, 1440, 1, 0, 0, 0, 311, 1444, 1, 0, 0, 0, 313, 1449,
		1, 0, 0, 0, 315, 1452, 1, 0, 0, 0, 317, 1455, 1, 0, 0, 0, 319, 1462, 1, 0, 0, 0, 321, 1466, 1, 0,
		0, 0, 323, 1469, 1, 0, 0, 0, 325, 1472, 1, 0, 0, 0, 327, 1475, 1, 0, 0, 0, 329, 1478, 1, 0, 0, 0,
		331, 1482, 1, 0, 0, 0, 333, 1485, 1, 0, 0, 0, 335, 1489, 1, 0, 0, 0, 337, 1493, 1, 0, 0, 0, 339,
		1497, 1, 0, 0, 0, 341, 1501, 1, 0, 0, 0, 343, 1504, 1, 0, 0, 0, 345, 1518, 1, 0, 0, 0, 347, 1524,
		1, 0, 0, 0, 349, 1529, 1, 0, 0, 0, 351, 1534, 1, 0, 0, 0, 353, 1539, 1, 0, 0, 0, 355, 1544, 1, 0,
		0, 0, 357, 1549, 1, 0, 0, 0, 359, 1554, 1, 0, 0, 0, 361, 1556, 1, 0, 0, 0, 363, 1558, 1, 0, 0, 0,
		365, 1560, 1, 0, 0, 0, 367, 1562, 1, 0, 0, 0, 369, 1564, 1, 0, 0, 0, 371, 1566, 1, 0, 0, 0, 373,
		1568, 1, 0, 0, 0, 375, 1570, 1, 0, 0, 0, 377, 1572, 1, 0, 0, 0, 379, 1574, 1, 0, 0, 0, 381, 1577,
		1, 0, 0, 0, 383, 1580, 1, 0, 0, 0, 385, 1583, 1, 0, 0, 0, 387, 1586, 1, 0, 0, 0, 389, 1589, 1, 0,
		0, 0, 391, 1592, 1, 0, 0, 0, 393, 1595, 1, 0, 0, 0, 395, 1598, 1, 0, 0, 0, 397, 1600, 1, 0, 0, 0,
		399, 1602, 1, 0, 0, 0, 401, 1604, 1, 0, 0, 0, 403, 1606, 1, 0, 0, 0, 405, 1608, 1, 0, 0, 0, 407,
		1610, 1, 0, 0, 0, 409, 1612, 1, 0, 0, 0, 411, 1614, 1, 0, 0, 0, 413, 1617, 1, 0, 0, 0, 415, 1620,
		1, 0, 0, 0, 417, 1623, 1, 0, 0, 0, 419, 1626, 1, 0, 0, 0, 421, 1629, 1, 0, 0, 0, 423, 1632, 1, 0,
		0, 0, 425, 1635, 1, 0, 0, 0, 427, 1638, 1, 0, 0, 0, 429, 1642, 1, 0, 0, 0, 431, 1646, 1, 0, 0, 0,
		433, 1651, 1, 0, 0, 0, 435, 1654, 1, 0, 0, 0, 437, 1662, 1, 0, 0, 0, 439, 1669, 1, 0, 0, 0, 441,
		1682, 1, 0, 0, 0, 443, 1684, 1, 0, 0, 0, 445, 1693, 1, 0, 0, 0, 447, 1695, 1, 0, 0, 0, 449, 1701,
		1, 0, 0, 0, 451, 1704, 1, 0, 0, 0, 453, 1706, 1, 0, 0, 0, 455, 1720, 1, 0, 0, 0, 457, 1724, 1, 0,
		0, 0, 459, 1727, 1, 0, 0, 0, 461, 1743, 1, 0, 0, 0, 463, 1756, 1, 0, 0, 0, 465, 1774, 1, 0, 0, 0,
		467, 471, 3, 285, 139, 0, 468, 470, 3, 49, 21, 0, 469, 468, 1, 0, 0, 0, 470, 473, 1, 0, 0, 0, 471,
		469, 1, 0, 0, 0, 471, 472, 1, 0, 0, 0, 472, 474, 1, 0, 0, 0, 473, 471, 1, 0, 0, 0, 474, 475, 3, 285,
		139, 0, 475, 521, 1, 0, 0, 0, 476, 480, 3, 287, 140, 0, 477, 479, 3, 51, 22, 0, 478, 477, 1, 0,
		0, 0, 479, 482, 1, 0, 0, 0, 480, 478, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481, 483, 1, 0, 0, 0, 482,
		480, 1, 0, 0, 0, 483, 484, 3, 287, 140, 0, 484, 521, 1, 0, 0, 0, 485, 486, 3, 281, 137, 0, 486,
		488, 4, 0, 0, 0, 487, 489, 3, 57, 25, 0, 488, 487, 1, 0, 0, 0, 489, 490, 1, 0, 0, 0, 490, 488, 1,
		0, 0, 0, 490, 491, 1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492, 493, 3, 281, 137, 0, 493, 521, 1, 0, 0,
		0, 494, 498, 3, 289, 141, 0, 495, 497, 3, 53, 23, 0, 496, 495, 1, 0, 0, 0, 497, 500, 1, 0, 0, 0,
		498, 496, 1, 0, 0, 0, 498, 499, 1, 0, 0, 0, 499, 501, 1, 0, 0, 0, 500, 498, 1, 0, 0, 0, 501, 502,
		3, 289, 141, 0, 502, 521, 1, 0, 0, 0, 503, 507, 3, 291, 142, 0, 504, 506, 3, 55, 24, 0, 505, 504,
		1, 0, 0, 0, 506, 509, 1, 0, 0, 0, 507, 505, 1, 0, 0, 0, 507, 508, 1, 0, 0, 0, 508, 510, 1, 0, 0, 0,
		509, 507, 1, 0, 0, 0, 510, 511, 3, 291, 142, 0, 511, 521, 1, 0, 0, 0, 512, 514, 3, 293, 143, 0,
		513, 515, 3, 59, 26, 0, 514, 513, 1, 0, 0, 0, 515, 516, 1, 0, 0, 0, 516, 514, 1, 0, 0, 0, 516, 517,
		1, 0, 0, 0, 517, 518, 1, 0, 0, 0, 518, 519, 3, 295, 144, 0, 519, 521, 1, 0, 0, 0, 520, 467, 1, 0,
		0, 0, 520, 476, 1, 0, 0, 0, 520, 485, 1, 0, 0, 0, 520, 494, 1, 0, 0, 0, 520, 503, 1, 0, 0, 0, 520,
		512, 1, 0, 0, 0, 521, 8, 1, 0, 0, 0, 522, 526, 3, 285, 139, 0, 523, 525, 3, 49, 21, 0, 524, 523,
		1, 0, 0, 0, 525, 528, 1, 0, 0, 0, 526, 524, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 529, 1, 0, 0, 0,
		528, 526, 1, 0, 0, 0, 529, 530, 3, 283, 138, 0, 530, 531, 1, 0, 0, 0, 531, 532, 6, 1, 0, 0, 532,
		533, 6, 1, 1, 0, 533, 10, 1, 0, 0, 0, 534, 538, 3, 289, 141, 0, 535, 537, 3, 53, 23, 0, 536, 535,
		1, 0, 0, 0, 537, 540, 1, 0, 0, 0, 538, 536, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 541, 1, 0, 0, 0,
		540, 538, 1, 0, 0, 0, 541, 542, 3, 283, 138, 0, 542, 543, 1, 0, 0, 0, 543, 544, 6, 2, 2, 0, 544,
		545, 6, 2, 3, 0, 545, 546, 6, 2, 1, 0, 546, 12, 1, 0, 0, 0, 547, 548, 3, 281, 137, 0, 548, 552,
		4, 3, 1, 0, 549, 551, 3, 57, 25, 0, 550, 549, 1, 0, 0, 0, 551, 554, 1, 0, 0, 0, 552, 550, 1, 0, 0,
		0, 552, 553, 1, 0, 0, 0, 553, 555, 1, 0, 0, 0, 554, 552, 1, 0, 0, 0, 555, 556, 3, 283, 138, 0, 556,
		557, 4, 3, 2, 0, 557, 558, 1, 0, 0, 0, 558, 559, 6, 3, 2, 0, 559, 560, 6, 3, 4, 0, 560, 561, 6, 3,
		1, 0, 561, 14, 1, 0, 0, 0, 562, 566, 3, 293, 143, 0, 563, 565, 3, 59, 26, 0, 564, 563, 1, 0, 0,
		0, 565, 568, 1, 0, 0, 0, 566, 564, 1, 0, 0, 0, 566, 567, 1, 0, 0, 0, 567, 569, 1, 0, 0, 0, 568, 566,
		1, 0, 0, 0, 569, 570, 3, 283, 138, 0, 570, 571, 4, 4, 3, 0, 571, 572, 1, 0, 0, 0, 572, 573, 6, 4,
		2, 0, 573, 574, 6, 4, 5, 0, 574, 575, 6, 4, 1, 0, 575, 16, 1, 0, 0, 0, 576, 577, 3, 285, 139, 0,
		577, 578, 1, 0, 0, 0, 578, 579, 6, 5, 6, 0, 579, 18, 1, 0, 0, 0, 580, 581, 3, 283, 138, 0, 581,
		582, 1, 0, 0, 0, 582, 583, 6, 6, 1, 0, 583, 20, 1, 0, 0, 0, 584, 585, 3, 49, 21, 0, 585, 586, 1,
		0, 0, 0, 586, 587, 6, 7, 7, 0, 587, 22, 1, 0, 0, 0, 588, 589, 3, 289, 141, 0, 589, 590, 1, 0, 0,
		0, 590, 591, 6, 8, 8, 0, 591, 592, 6, 8, 6, 0, 592, 24, 1, 0, 0, 0, 593, 594, 3, 283, 138, 0, 594,
		595, 1, 0, 0, 0, 595, 596, 6, 9, 9, 0, 596, 597, 6, 9, 1, 0, 597, 26, 1, 0, 0, 0, 598, 599, 3, 53,
		23, 0, 599, 600, 1, 0, 0, 0, 600, 601, 6, 10, 7, 0, 601, 28, 1, 0, 0, 0, 602, 604, 3, 283, 138,
		0, 603, 602, 1, 0, 0, 0, 603, 604, 1, 0, 0, 0, 604, 605, 1, 0, 0, 0, 605, 606, 3, 281, 137, 0, 606,
		607, 1, 0, 0, 0, 607, 608, 6, 11, 8, 0, 608, 609, 6, 11, 6, 0, 609, 30, 1, 0, 0, 0, 610, 611, 3,
		283, 138, 0, 611, 612, 4, 12, 4, 0, 612, 613, 1, 0, 0, 0, 613, 614, 6, 12, 9, 0, 614, 615, 6, 12,
		1, 0, 615, 32, 1, 0, 0, 0, 616, 617, 3, 57, 25, 0, 617, 618, 1, 0, 0, 0, 618, 619, 6, 13, 7, 0, 619,
		34, 1, 0, 0, 0, 620, 621, 3, 295, 144, 0, 621, 622, 1, 0, 0, 0, 622, 623, 6, 14, 8, 0, 623, 624,
		6, 14, 6, 0, 624, 36, 1, 0, 0, 0, 625, 626, 3, 283, 138, 0, 626, 627, 4, 15, 5, 0, 627, 628, 1,
		0, 0, 0, 628, 629, 6, 15, 9, 0, 629, 630, 6, 15, 1, 0, 630, 38, 1, 0, 0, 0, 631, 632, 3, 59, 26,
		0, 632, 633, 1, 0, 0, 0, 633, 634, 6, 16, 7, 0, 634, 40, 1, 0, 0, 0, 635, 636, 5, 123, 0, 0, 636,
		637, 6, 17, 10, 0, 637, 638, 1, 0, 0, 0, 638, 639, 6, 17, 11, 0, 639, 640, 6, 17, 6, 0, 640, 641,
		6, 17, 12, 0, 641, 42, 1, 0, 0, 0, 642, 643, 3, 439, 216, 0, 643, 644, 1, 0, 0, 0, 644, 645, 6,
		18, 13, 0, 645, 646, 6, 18, 6, 0, 646, 647, 6, 18, 14, 0, 647, 44, 1, 0, 0, 0, 648, 649, 3, 259,
		126, 0, 649, 650, 3, 439, 216, 0, 650, 46, 1, 0, 0, 0, 651, 652, 9, 0, 0, 0, 652, 653, 6, 20, 15,
		0, 653, 654, 1, 0, 0, 0, 654, 655, 6, 20, 6, 0, 655, 48, 1, 0, 0, 0, 656, 659, 8, 0, 0, 0, 657, 659,
		3, 263, 128, 0, 658, 656, 1, 0, 0, 0, 658, 657, 1, 0, 0, 0, 659, 50, 1, 0, 0, 0, 660, 663, 8, 1,
		0, 0, 661, 663, 3, 263, 128, 0, 662, 660, 1, 0, 0, 0, 662, 661, 1, 0, 0, 0, 663, 52, 1, 0, 0, 0,
		664, 670, 8, 2, 0, 0, 665, 666, 3, 285, 139, 0, 666, 667, 4, 23, 6, 0, 667, 670, 1, 0, 0, 0, 668,
		670, 3, 263, 128, 0, 669, 664, 1, 0, 0, 0, 669, 665, 1, 0, 0, 0, 669, 668, 1, 0, 0, 0, 670, 54,
		1, 0, 0, 0, 671, 677, 8, 3, 0, 0, 672, 673, 3, 287, 140, 0, 673, 674, 4, 24, 7, 0, 674, 677, 1,
		0, 0, 0, 675, 677, 3, 263, 128, 0, 676, 671, 1, 0, 0, 0, 676, 672, 1, 0, 0, 0, 676, 675, 1, 0, 0,
		0, 677, 56, 1, 0, 0, 0, 678, 684, 3, 277, 135, 0, 679, 680, 3, 283, 138, 0, 680, 681, 4, 25, 8,
		0, 681, 684, 1, 0, 0, 0, 682, 684, 8, 4, 0, 0, 683, 678, 1, 0, 0, 0, 683, 679, 1, 0, 0, 0, 683, 682,
		1, 0, 0, 0, 684, 58, 1, 0, 0, 0, 685, 700, 3, 299, 146, 0, 686, 687, 3, 301, 147, 0, 687, 688,
		4, 26, 9, 0, 688, 700, 1, 0, 0, 0, 689, 690, 3, 297, 145, 0, 690, 691, 4, 26, 10, 0, 691, 700,
		1, 0, 0, 0, 692, 693, 3, 281, 137, 0, 693, 694, 4, 26, 11, 0, 694, 700, 1, 0, 0, 0, 695, 696, 3,
		283, 138, 0, 696, 697, 4, 26, 12, 0, 697, 700, 1, 0, 0, 0, 698, 700, 8, 4, 0, 0, 699, 685, 1, 0,
		0, 0, 699, 686, 1, 0, 0, 0, 699, 689, 1, 0, 0, 0, 699, 692, 1, 0, 0, 0, 699, 695, 1, 0, 0, 0, 699,
		698, 1, 0, 0, 0, 700, 60, 1, 0, 0, 0, 701, 702, 5, 97, 0, 0, 702, 703, 5, 115, 0, 0, 703, 62, 1,
		0, 0, 0, 704, 705, 5, 100, 0, 0, 705, 706, 5, 101, 0, 0, 706, 707, 5, 102, 0, 0, 707, 64, 1, 0,
		0, 0, 708, 709, 5, 105, 0, 0, 709, 710, 5, 110, 0, 0, 710, 66, 1, 0, 0, 0, 711, 712, 5, 116, 0,
		0, 712, 713, 5, 114, 0, 0, 713, 714, 5, 97, 0, 0, 714, 715, 5, 105, 0, 0, 715, 716, 5, 116, 0,
		0, 716, 68, 1, 0, 0, 0, 717, 718, 5, 116, 0, 0, 718, 719, 5, 104, 0, 0, 719, 720, 5, 114, 0, 0,
		720, 721, 5, 101, 0, 0, 721, 722, 5, 97, 0, 0, 722, 723, 5, 100, 0, 0, 723, 724, 5, 115, 0, 0,
		724, 725, 5, 97, 0, 0, 725, 726, 5, 102, 0, 0, 726, 727, 5, 101, 0, 0, 727, 70, 1, 0, 0, 0, 728,
		729, 5, 118, 0, 0, 729, 730, 5, 97, 0, 0, 730, 731, 5, 114, 0, 0, 731, 72, 1, 0, 0, 0, 732, 741,
		3, 79, 36, 0, 733, 741, 3, 91, 42, 0, 734, 741, 3, 85, 39, 0, 735, 741, 3, 157, 75, 0, 736, 741,
		3, 129, 61, 0, 737, 741, 3, 133, 63, 0, 738, 741, 3, 115, 54, 0, 739, 741, 3, 103, 48, 0, 740,
		732, 1, 0, 0, 0, 740, 733, 1, 0, 0, 0, 740, 734, 1, 0, 0, 0, 740, 735, 1, 0, 0, 0, 740, 736, 1, 0,
		0, 0, 740, 737, 1, 0, 0, 0, 740, 738, 1, 0, 0, 0, 740, 739, 1, 0, 0, 0, 741, 74, 1, 0, 0, 0, 742,
		743, 5, 97, 0, 0, 743, 744, 5, 98, 0, 0, 744, 745, 5, 115, 0, 0, 745, 746, 5, 116, 0, 0, 746, 747,
		5, 114, 0, 0, 747, 748, 5, 97, 0, 0, 748, 749, 5, 99, 0, 0, 749, 750, 5, 116, 0, 0, 750, 76, 1,
		0, 0, 0, 751, 752, 5, 97, 0, 0, 752, 753, 5, 115, 0, 0, 753, 754, 5, 115, 0, 0, 754, 755, 5, 101,
		0, 0, 755, 756, 5, 114, 0, 0, 756, 757, 5, 116, 0, 0, 757, 78, 1, 0, 0, 0, 758, 759, 5, 98, 0, 0,
		759, 760, 5, 111, 0, 0, 760, 761, 5, 111, 0, 0, 761, 762, 5, 108, 0, 0, 762, 763, 5, 101, 0, 0,
		763, 764, 5, 97, 0, 0, 764, 765, 5, 110, 0, 0, 765, 80, 1, 0, 0, 0, 766, 767, 5, 98, 0, 0, 767,
		768, 5, 114, 0, 0, 768, 769, 5, 101, 0, 0, 769, 770, 5, 97, 0, 0, 770, 771, 5, 107, 0, 0, 771,
		82, 1, 0, 0, 0, 772, 773, 5, 121, 0, 0, 773, 774, 5, 105, 0, 0, 774, 775, 5, 101, 0, 0, 775, 776,
		5, 108, 0, 0, 776, 777, 5, 100, 0, 0, 777, 84, 1, 0, 0, 0, 778, 779, 5, 98, 0, 0, 779, 780, 5, 121,
		0, 0, 780, 781, 5, 116, 0, 0, 781, 782, 5, 101, 0, 0, 782, 86, 1, 0, 0, 0, 783, 784, 5, 99, 0, 0,
		784, 785, 5, 97, 0, 0, 785, 786, 5, 115, 0, 0, 786, 787, 5, 101, 0, 0, 787, 88, 1, 0, 0, 0, 788,
		789, 5, 99, 0, 0, 789, 790, 5, 97, 0, 0, 790, 791, 5, 116, 0, 0, 791, 792, 5, 99, 0, 0, 792, 793,
		5, 104, 0, 0, 793, 90, 1, 0, 0, 0, 794, 795, 5, 99, 0, 0, 795, 796, 5, 104, 0, 0, 796, 797, 5, 97,
		0, 0, 797, 798, 5, 114, 0, 0, 798, 92, 1, 0, 0, 0, 799, 800, 5, 99, 0, 0, 800, 801, 5, 108, 0, 0,
		801, 802, 5, 97, 0, 0, 802, 803, 5, 115, 0, 0, 803, 804, 5, 115, 0, 0, 804, 94, 1, 0, 0, 0, 805,
		806, 5, 99, 0, 0, 806, 807, 5, 111, 0, 0, 807, 808, 5, 110, 0, 0, 808, 809, 5, 115, 0, 0, 809,
		810, 5, 116, 0, 0, 810, 96, 1, 0, 0, 0, 811, 812, 5, 99, 0, 0, 812, 813, 5, 111, 0, 0, 813, 814,
		5, 110, 0, 0, 814, 815, 5, 116, 0, 0, 815, 816, 5, 105, 0, 0, 816, 817, 5, 110, 0, 0, 817, 818,
		5, 117, 0, 0, 818, 819, 5, 101, 0, 0, 819, 98, 1, 0, 0, 0, 820, 821, 5, 100, 0, 0, 821, 822, 5,
		101, 0, 0, 822, 823, 5, 102, 0, 0, 823, 824, 5, 97, 0, 0, 824, 825, 5, 117, 0, 0, 825, 826, 5,
		108, 0, 0, 826, 827, 5, 116, 0, 0, 827, 100, 1, 0, 0, 0, 828, 829, 5, 100, 0, 0, 829, 830, 5, 111,
		0, 0, 830, 102, 1, 0, 0, 0, 831, 832, 5, 100, 0, 0, 832, 833, 5, 111, 0, 0, 833, 834, 5, 117, 0,
		0, 834, 835, 5, 98, 0, 0, 835, 836, 5, 108, 0, 0, 836, 837, 5, 101, 0, 0, 837, 104, 1, 0, 0, 0,
		838, 839, 5, 101, 0, 0, 839, 840, 5, 108, 0, 0, 840, 841, 5, 115, 0, 0, 841, 842, 5, 101, 0, 0,
		842, 106, 1, 0, 0, 0, 843, 844, 5, 101, 0, 0, 844, 845, 5, 110, 0, 0, 845, 846, 5, 117, 0, 0, 846,
		847, 5, 109, 0, 0, 847, 108, 1, 0, 0, 0, 848, 849, 5, 101, 0, 0, 849, 850, 5, 120, 0, 0, 850, 851,
		5, 116, 0, 0, 851, 852, 5, 101, 0, 0, 852, 853, 5, 110, 0, 0, 853, 854, 5, 100, 0, 0, 854, 855,
		5, 115, 0, 0, 855, 110, 1, 0, 0, 0, 856, 857, 5, 102, 0, 0, 857, 858, 5, 105, 0, 0, 858, 859, 5,
		110, 0, 0, 859, 860, 5, 97, 0, 0, 860, 861, 5, 108, 0, 0, 861, 112, 1, 0, 0, 0, 862, 863, 5, 102,
		0, 0, 863, 864, 5, 105, 0, 0, 864, 865, 5, 110, 0, 0, 865, 866, 5, 97, 0, 0, 866, 867, 5, 108,
		0, 0, 867, 868, 5, 108, 0, 0, 868, 869, 5, 121, 0, 0, 869, 114, 1, 0, 0, 0, 870, 871, 5, 102, 0,
		0, 871, 872, 5, 108, 0, 0, 872, 873, 5, 111, 0, 0, 873, 874, 5, 97, 0, 0, 874, 875, 5, 116, 0,
		0, 875, 116, 1, 0, 0, 0, 876, 877, 5, 102, 0, 0, 877, 878, 5, 111, 0, 0, 878, 879, 5, 114, 0, 0,
		879, 118, 1, 0, 0, 0, 880, 881, 5, 105, 0, 0, 881, 882, 5, 102, 0, 0, 882, 120, 1, 0, 0, 0, 883,
		884, 5, 103, 0, 0, 884, 885, 5, 111, 0, 0, 885, 886, 5, 116, 0, 0, 886, 887, 5, 111, 0, 0, 887,
		122, 1, 0, 0, 0, 888, 889, 5, 105, 0, 0, 889, 890, 5, 109, 0, 0, 890, 891, 5, 112, 0, 0, 891, 892,
		5, 108, 0, 0, 892, 893, 5, 101, 0, 0, 893, 894, 5, 109, 0, 0, 894, 895, 5, 101, 0, 0, 895, 896,
		5, 110, 0, 0, 896, 897, 5, 116, 0, 0, 897, 898, 5, 115, 0, 0, 898, 124, 1, 0, 0, 0, 899, 900, 5,
		105, 0, 0, 900, 901, 5, 109, 0, 0, 901, 902, 5, 112, 0, 0, 902, 903, 5, 111, 0, 0, 903, 904, 5,
		114, 0, 0, 904, 905, 5, 116, 0, 0, 905, 126, 1, 0, 0, 0, 906, 907, 5, 105, 0, 0, 907, 908, 5, 110,
		0, 0, 908, 909, 5, 115, 0, 0, 909, 910, 5, 116, 0, 0, 910, 911, 5, 97, 0, 0, 911, 912, 5, 110,
		0, 0, 912, 913, 5, 99, 0, 0, 913, 914, 5, 101, 0, 0, 914, 915, 5, 111, 0, 0, 915, 916, 5, 102,
		0, 0, 916, 128, 1, 0, 0, 0, 917, 918, 5, 105, 0, 0, 918, 919, 5, 110, 0, 0, 919, 920, 5, 116, 0,
		0, 920, 130, 1, 0, 0, 0, 921, 922, 5, 105, 0, 0, 922, 923, 5, 110, 0, 0, 923, 924, 5, 116, 0, 0,
		924, 925, 5, 101, 0, 0, 925, 926, 5, 114, 0, 0, 926, 927, 5, 102, 0, 0, 927, 928, 5, 97, 0, 0,
		928, 929, 5, 99, 0, 0, 929, 930, 5, 101, 0, 0, 930, 132, 1, 0, 0, 0, 931, 932, 5, 108, 0, 0, 932,
		933, 5, 111, 0, 0, 933, 934, 5, 110, 0, 0, 934, 935, 5, 103, 0, 0, 935, 134, 1, 0, 0, 0, 936, 937,
		5, 110, 0, 0, 937, 938, 5, 97, 0, 0, 938, 939, 5, 116, 0, 0, 939, 940, 5, 105, 0, 0, 940, 941,
		5, 118, 0, 0, 941, 942, 5, 101, 0, 0, 942, 136, 1, 0, 0, 0, 943, 944, 5, 110, 0, 0, 944, 945, 5,
		101, 0, 0, 945, 946, 5, 119, 0, 0, 946, 138, 1, 0, 0, 0, 947, 948, 5, 110, 0, 0, 948, 949, 5, 111,
		0, 0, 949, 950, 5, 110, 0, 0, 950, 951, 5, 45, 0, 0, 951, 952, 5, 115, 0, 0, 952, 953, 5, 101,
		0, 0, 953, 954, 5, 97, 0, 0, 954, 955, 5, 108, 0, 0, 955, 956, 5, 101, 0, 0, 956, 957, 5, 100,
		0, 0, 957, 140, 1, 0, 0, 0, 958, 959, 5, 112, 0, 0, 959, 960, 5, 97, 0, 0, 960, 961, 5, 99, 0, 0,
		961, 962, 5, 107, 0, 0, 962, 963, 5, 97, 0, 0, 963, 964, 5, 103, 0, 0, 964, 965, 5, 101, 0, 0,
		965, 142, 1, 0, 0, 0, 966, 967, 5, 112, 0, 0, 967, 968, 5, 101, 0, 0, 968, 969, 5, 114, 0, 0, 969,
		970, 5, 109, 0, 0, 970, 971, 5, 105, 0, 0, 971, 972, 5, 116, 0, 0, 972, 973, 5, 115, 0, 0, 973,
		144, 1, 0, 0, 0, 974, 975, 5, 112, 0, 0, 975, 976, 5, 114, 0, 0, 976, 977, 5, 105, 0, 0, 977, 978,
		5, 118, 0, 0, 978, 979, 5, 97, 0, 0, 979, 980, 5, 116, 0, 0, 980, 981, 5, 101, 0, 0, 981, 146,
		1, 0, 0, 0, 982, 983, 5, 112, 0, 0, 983, 984, 5, 114, 0, 0, 984, 985, 5, 111, 0, 0, 985, 986, 5,
		116, 0, 0, 986, 987, 5, 101, 0, 0, 987, 988, 5, 99, 0, 0, 988, 989, 5, 116, 0, 0, 989, 990, 5,
		101, 0, 0, 990, 991, 5, 100, 0, 0, 991, 148, 1, 0, 0, 0, 992, 993, 5, 112, 0, 0, 993, 994, 5, 117,
		0, 0, 994, 995, 5, 98, 0, 0, 995, 996, 5, 108, 0, 0, 996, 997, 5, 105, 0, 0, 997, 998, 5, 99, 0,
		0, 998, 150, 1, 0, 0, 0, 999, 1000, 5, 114, 0, 0, 1000, 1001, 5, 101, 0, 0, 1001, 1002, 5, 99,
		0, 0, 1002, 1003, 5, 111, 0, 0, 1003, 1004, 5, 114, 0, 0, 1004, 1005, 5, 100, 0, 0, 1005, 152,
		1, 0, 0, 0, 1006, 1007, 5, 114, 0, 0, 1007, 1008, 5, 101, 0, 0, 1008, 1009, 5, 116, 0, 0, 1009,
		1010, 5, 117, 0, 0, 1010, 1011, 5, 114, 0, 0, 1011, 1012, 5, 110, 0, 0, 1012, 154, 1, 0, 0, 0,
		1013, 1014, 5, 115, 0, 0, 1014, 1015, 5, 101, 0, 0, 1015, 1016, 5, 97, 0, 0, 1016, 1017, 5,
		108, 0, 0, 1017, 1018, 5, 101, 0, 0, 1018, 1019, 5, 100, 0, 0, 1019, 156, 1, 0, 0, 0, 1020, 1021,
		5, 115, 0, 0, 1021, 1022, 5, 104, 0, 0, 1022, 1023, 5, 111, 0, 0, 1023, 1024, 5, 114, 0, 0, 1024,
		1025, 5, 116, 0, 0, 1025, 158, 1, 0, 0, 0, 1026, 1027, 5, 115, 0, 0, 1027, 1028, 5, 116, 0, 0,
		1028, 1029, 5, 97, 0, 0, 1029, 1030, 5, 116, 0, 0, 1030, 1031, 5, 105, 0, 0, 1031, 1032, 5,
		99, 0, 0, 1032, 160, 1, 0, 0, 0, 1033, 1034, 5, 115, 0, 0, 1034, 1035, 5, 116, 0, 0, 1035, 1036,
		5, 114, 0, 0, 1036, 1037, 5, 105, 0, 0, 1037, 1038, 5, 99, 0, 0, 1038, 1039, 5, 116, 0, 0, 1039,
		1040, 5, 102, 0, 0, 1040, 1041, 5, 112, 0, 0, 1041, 162, 1, 0, 0, 0, 1042, 1043, 5, 115, 0, 0,
		1043, 1044, 5, 117, 0, 0, 1044, 1045, 5, 112, 0, 0, 1045, 1046, 5, 101, 0, 0, 1046, 1047, 5,
		114, 0, 0, 1047, 164, 1, 0, 0, 0, 1048, 1049, 5, 115, 0, 0, 1049, 1050, 5, 119, 0, 0, 1050, 1051,
		5, 105, 0, 0, 1051, 1052, 5, 116, 0, 0, 1052, 1053, 5, 99, 0, 0, 1053, 1054, 5, 104, 0, 0, 1054,
		166, 1, 0, 0, 0, 1055, 1056, 5, 115, 0, 0, 1056, 1057, 5, 121, 0, 0, 1057, 1058, 5, 110, 0, 0,
		1058, 1059, 5, 99, 0, 0, 1059, 1060, 5, 104, 0, 0, 1060, 1061, 5, 114, 0, 0, 1061, 1062, 5,
		111, 0, 0, 1062, 1063, 5, 110, 0, 0, 1063, 1064, 5, 105, 0, 0, 1064, 1065, 5, 122, 0, 0, 1065,
		1066, 5, 101, 0, 0, 1066, 1067, 5, 100, 0, 0, 1067, 168, 1, 0, 0, 0, 1068, 1069, 5, 116, 0, 0,
		1069, 1070, 5, 104, 0, 0, 1070, 1071, 5, 105, 0, 0, 1071, 1072, 5, 115, 0, 0, 1072, 170, 1,
		0, 0, 0, 1073, 1074, 5, 116, 0, 0, 1074, 1075, 5, 104, 0, 0, 1075, 1076, 5, 114, 0, 0, 1076,
		1077, 5, 111, 0, 0, 1077, 1078, 5, 119, 0, 0, 1078, 172, 1, 0, 0, 0, 1079, 1080, 5, 116, 0, 0,
		1080, 1081, 5, 104, 0, 0, 1081, 1082, 5, 114, 0, 0, 1082, 1083, 5, 111, 0, 0, 1083, 1084, 5,
		119, 0, 0, 1084, 1085, 5, 115, 0, 0, 1085, 174, 1, 0, 0, 0, 1086, 1087, 5, 116, 0, 0, 1087, 1088,
		5, 114, 0, 0, 1088, 1089, 5, 97, 0, 0, 1089, 1090, 5, 110, 0, 0, 1090, 1091, 5, 115, 0, 0, 1091,
		1092, 5, 105, 0, 0, 1092, 1093, 5, 101, 0, 0, 1093, 1094, 5, 110, 0, 0, 1094, 1095, 5, 116,
		0, 0, 1095, 176, 1, 0, 0, 0, 1096, 1097, 5, 116, 0, 0, 1097, 1098, 5, 114, 0, 0, 1098, 1099,
		5, 121, 0, 0, 1099, 178, 1, 0, 0, 0, 1100, 1101, 5, 118, 0, 0, 1101, 1102, 5, 111, 0, 0, 1102,
		1103, 5, 105, 0, 0, 1103, 1104, 5, 100, 0, 0, 1104, 180, 1, 0, 0, 0, 1105, 1106, 5, 118, 0, 0,
		1106, 1107, 5, 111, 0, 0, 1107, 1108, 5, 108, 0, 0, 1108, 1109, 5, 97, 0, 0, 1109, 1110, 5,
		116, 0, 0, 1110, 1111, 5, 105, 0, 0, 1111, 1112, 5, 108, 0, 0, 1112, 1113, 5, 101, 0, 0, 1113,
		182, 1, 0, 0, 0, 1114, 1115, 5, 119, 0, 0, 1115, 1116, 5, 104, 0, 0, 1116, 1117, 5, 105, 0, 0,
		1117, 1118, 5, 108, 0, 0, 1118, 1119, 5, 101, 0, 0, 1119, 184, 1, 0, 0, 0, 1120, 1125, 3, 189,
		91, 0, 1121, 1125, 3, 191, 92, 0, 1122, 1125, 3, 193, 93, 0, 1123, 1125, 3, 195, 94, 0, 1124,
		1120, 1, 0, 0, 0, 1124, 1121, 1, 0, 0, 0, 1124, 1122, 1, 0, 0, 0, 1124, 1123, 1, 0, 0, 0, 1125,
		1129, 1, 0, 0, 0, 1126, 1127, 3, 211, 102, 0, 1127, 1128, 6, 89, 16, 0, 1128, 1130, 1, 0, 0,
		0, 1129, 1126, 1, 0, 0, 0, 1129, 1130, 1, 0, 0, 0, 1130, 1143, 1, 0, 0, 0, 1131, 1134, 3, 187,
		90, 0, 1132, 1133, 7, 5, 0, 0, 1133, 1135, 6, 89, 17, 0, 1134, 1132, 1, 0, 0, 0, 1135, 1136,
		1, 0, 0, 0, 1136, 1134, 1, 0, 0, 0, 1136, 1137, 1, 0, 0, 0, 1137, 1138, 1, 0, 0, 0, 1138, 1140,
		6, 89, 18, 0, 1139, 1141, 3, 197, 95, 0, 1140, 1139, 1, 0, 0, 0, 1140, 1141, 1, 0, 0, 0, 1141,
		1143, 1, 0, 0, 0, 1142, 1124, 1, 0, 0, 0, 1142, 1131, 1, 0, 0, 0, 1143, 186, 1, 0, 0, 0, 1144,
		1145, 5, 48, 0, 0, 1145, 188, 1, 0, 0, 0, 1146, 1148, 3, 199, 96, 0, 1147, 1149, 3, 197, 95,
		0, 1148, 1147, 1, 0, 0, 0, 1148, 1149, 1, 0, 0, 0, 1149, 190, 1, 0, 0, 0, 1150, 1152, 3, 213,
		103, 0, 1151, 1153, 3, 197, 95, 0, 1152, 1151, 1, 0, 0, 0, 1152, 1153, 1, 0, 0, 0, 1153, 192,
		1, 0, 0, 0, 1154, 1156, 3, 221, 107, 0, 1155, 1157, 3, 197, 95, 0, 1156, 1155, 1, 0, 0, 0, 1156,
		1157, 1, 0, 0, 0, 1157, 194, 1, 0, 0, 0, 1158, 1160, 3, 229, 111, 0, 1159, 1161, 3, 197, 95,
		0, 1160, 1159, 1, 0, 0, 0, 1160, 1161, 1, 0, 0, 0, 1161, 196, 1, 0, 0, 0, 1162, 1163, 7, 6, 0,
		0, 1163, 198, 1, 0, 0, 0, 1164, 1175, 3, 187, 90, 0, 1165, 1172, 3, 205, 99, 0, 1166, 1168,
		3, 201, 97, 0, 1167, 1166, 1, 0, 0, 0, 1167, 1168, 1, 0, 0, 0, 1168, 1173, 1, 0, 0, 0, 1169, 1170,
		3, 209, 101, 0, 1170, 1171, 3, 201, 97, 0, 1171, 1173, 1, 0, 0, 0, 1172, 1167, 1, 0, 0, 0, 1172,
		1169, 1, 0, 0, 0, 1173, 1175, 1, 0, 0, 0, 1174, 1164, 1, 0, 0, 0, 1174, 1165, 1, 0, 0, 0, 1175,
		200, 1, 0, 0, 0, 1176, 1184, 3, 203, 98, 0, 1177, 1179, 3, 207, 100, 0, 1178, 1177, 1, 0, 0,
		0, 1179, 1182, 1, 0, 0, 0, 1180, 1178, 1, 0, 0, 0, 1180, 1181, 1, 0, 0, 0, 1181, 1183, 1, 0, 0,
		0, 1182, 1180, 1, 0, 0, 0, 1183, 1185, 3, 203, 98, 0, 1184, 1180, 1, 0, 0, 0, 1184, 1185, 1,
		0, 0, 0, 1185, 202, 1, 0, 0, 0, 1186, 1189, 3, 187, 90, 0, 1187, 1189, 3, 205, 99, 0, 1188, 1186,
		1, 0, 0, 0, 1188, 1187, 1, 0, 0, 0, 1189, 204, 1, 0, 0, 0, 1190, 1191, 7, 7, 0, 0, 1191, 206, 1,
		0, 0, 0, 1192, 1195, 3, 203, 98, 0, 1193, 1195, 3, 211, 102, 0, 1194, 1192, 1, 0, 0, 0, 1194,
		1193, 1, 0, 0, 0, 1195, 208, 1, 0, 0, 0, 1196, 1198, 3, 211, 102, 0, 1197, 1196, 1, 0, 0, 0, 1198,
		1199, 1, 0, 0, 0, 1199, 1197, 1, 0, 0, 0, 1199, 1200, 1, 0, 0, 0, 1200, 210, 1, 0, 0, 0, 1201,
		1202, 5, 95, 0, 0, 1202, 212, 1, 0, 0, 0, 1203, 1204, 3, 187, 90, 0, 1204, 1205, 7, 8, 0, 0, 1205,
		1206, 3, 215, 104, 0, 1206, 214, 1, 0, 0, 0, 1207, 1215, 3, 217, 105, 0, 1208, 1210, 3, 219,
		106, 0, 1209, 1208, 1, 0, 0, 0, 1210, 1213, 1, 0, 0, 0, 1211, 1209, 1, 0, 0, 0, 1211, 1212, 1,
		0, 0, 0, 1212, 1214, 1, 0, 0, 0, 1213, 1211, 1, 0, 0, 0, 1214, 1216, 3, 217, 105, 0, 1215, 1211,
		1, 0, 0, 0, 1215, 1216, 1, 0, 0, 0, 1216, 216, 1, 0, 0, 0, 1217, 1218, 7, 9, 0, 0, 1218, 218, 1,
		0, 0, 0, 1219, 1222, 3, 217, 105, 0, 1220, 1222, 3, 211, 102, 0, 1221, 1219, 1, 0, 0, 0, 1221,
		1220, 1, 0, 0, 0, 1222, 220, 1, 0, 0, 0, 1223, 1225, 3, 187, 90, 0, 1224, 1226, 3, 209, 101,
		0, 1225, 1224, 1, 0, 0, 0, 1225, 1226, 1, 0, 0, 0, 1226, 1227, 1, 0, 0, 0, 1227, 1228, 3, 223,
		108, 0, 1228, 222, 1, 0, 0, 0, 1229, 1237, 3, 225, 109, 0, 1230, 1232, 3, 227, 110, 0, 1231,
		1230, 1, 0, 0, 0, 1232, 1235, 1, 0, 0, 0, 1233, 1231, 1, 0, 0, 0, 1233, 1234, 1, 0, 0, 0, 1234,
		1236, 1, 0, 0, 0, 1235, 1233, 1, 0, 0, 0, 1236, 1238, 3, 225, 109, 0, 1237, 1233, 1, 0, 0, 0,
		1237, 1238, 1, 0, 0, 0, 1238, 224, 1, 0, 0, 0, 1239, 1240, 7, 10, 0, 0, 1240, 226, 1, 0, 0, 0,
		1241, 1244, 3, 225, 109, 0, 1242, 1244, 3, 211, 102, 0, 1243, 1241, 1, 0, 0, 0, 1243, 1242,
		1, 0, 0, 0, 1244, 228, 1, 0, 0, 0, 1245, 1246, 3, 187, 90, 0, 1246, 1247, 7, 11, 0, 0, 1247, 1248,
		3, 231, 112, 0, 1248, 230, 1, 0, 0, 0, 1249, 1257, 3, 233, 113, 0, 1250, 1252, 3, 235, 114,
		0, 1251, 1250, 1, 0, 0, 0, 1252, 1255, 1, 0, 0, 0, 1253, 1251, 1, 0, 0, 0, 1253, 1254, 1, 0, 0,
		0, 1254, 1256, 1, 0, 0, 0, 1255, 1253, 1, 0, 0, 0, 1256, 1258, 3, 233, 113, 0, 1257, 1253, 1,
		0, 0, 0, 1257, 1258, 1, 0, 0, 0, 1258, 232, 1, 0, 0, 0, 1259, 1260, 7, 12, 0, 0, 1260, 234, 1,
		0, 0, 0, 1261, 1264, 3, 233, 113, 0, 1262, 1264, 3, 211, 102, 0, 1263, 1261, 1, 0, 0, 0, 1263,
		1262, 1, 0, 0, 0, 1264, 236, 1, 0, 0, 0, 1265, 1268, 3, 239, 116, 0, 1266, 1268, 3, 251, 122,
		0, 1267, 1265, 1, 0, 0, 0, 1267, 1266, 1, 0, 0, 0, 1268, 1272, 1, 0, 0, 0, 1269, 1270, 3, 211,
		102, 0, 1270, 1271, 6, 115, 19, 0, 1271, 1273, 1, 0, 0, 0, 1272, 1269, 1, 0, 0, 0, 1272, 1273,
		1, 0, 0, 0, 1273, 238, 1, 0, 0, 0, 1274, 1276, 3, 201, 97, 0, 1275, 1274, 1, 0, 0, 0, 1275, 1276,
		1, 0, 0, 0, 1276, 1277, 1, 0, 0, 0, 1277, 1278, 3, 259, 126, 0, 1278, 1280, 3, 201, 97, 0, 1279,
		1281, 3, 241, 117, 0, 1280, 1279, 1, 0, 0, 0, 1280, 1281, 1, 0, 0, 0, 1281, 1283, 1, 0, 0, 0,
		1282, 1284, 3, 249, 121, 0, 1283, 1282, 1, 0, 0, 0, 1283, 1284, 1, 0, 0, 0, 1284, 1294, 1, 0,
		0, 0, 1285, 1286, 3, 201, 97, 0, 1286, 1288, 3, 241, 117, 0, 1287, 1289, 3, 249, 121, 0, 1288,
		1287, 1, 0, 0, 0, 1288, 1289, 1, 0, 0, 0, 1289, 1294, 1, 0, 0, 0, 1290, 1291, 3, 201, 97, 0, 1291,
		1292, 3, 249, 121, 0, 1292, 1294, 1, 0, 0, 0, 1293, 1275, 1, 0, 0, 0, 1293, 1285, 1, 0, 0, 0,
		1293, 1290, 1, 0, 0, 0, 1294, 240, 1, 0, 0, 0, 1295, 1296, 3, 243, 118, 0, 1296, 1297, 3, 245,
		119, 0, 1297, 242, 1, 0, 0, 0, 1298, 1299, 7, 13, 0, 0, 1299, 244, 1, 0, 0, 0, 1300, 1302, 3,
		247, 120, 0, 1301, 1300, 1, 0, 0, 0, 1301, 1302, 1, 0, 0, 0, 1302, 1303, 1, 0, 0, 0, 1303, 1304,
		3, 201, 97, 0, 1304, 246, 1, 0, 0, 0, 1305, 1306, 7, 14, 0, 0, 1306, 248, 1, 0, 0, 0, 1307, 1308,
		7, 15, 0, 0, 1308, 250, 1, 0, 0, 0, 1309, 1310, 3, 253, 123, 0, 1310, 1312, 3, 255, 124, 0, 1311,
		1313, 3, 249, 121, 0, 1312, 1311, 1, 0, 0, 0, 1312, 1313, 1, 0, 0, 0, 1313, 252, 1, 0, 0, 0, 1314,
		1316, 3, 213, 103, 0, 1315, 1317, 3, 259, 126, 0, 1316, 1315, 1, 0, 0, 0, 1316, 1317, 1, 0,
		0, 0, 1317, 1327, 1, 0, 0, 0, 1318, 1319, 3, 187, 90, 0, 1319, 1321, 7, 8, 0, 0, 1320, 1322,
		3, 215, 104, 0, 1321, 1320, 1, 0, 0, 0, 1321, 1322, 1, 0, 0, 0, 1322, 1323, 1, 0, 0, 0, 1323,
		1324, 3, 259, 126, 0, 1324, 1325, 3, 215, 104, 0, 1325, 1327, 1, 0, 0, 0, 1326, 1314, 1, 0,
		0, 0, 1326, 1318, 1, 0, 0, 0, 1327, 254, 1, 0, 0, 0, 1328, 1329, 3, 257, 125, 0, 1329, 1330,
		3, 245, 119, 0, 1330, 256, 1, 0, 0, 0, 1331, 1332, 7, 16, 0, 0, 1332, 258, 1, 0, 0, 0, 1333, 1334,
		5, 46, 0, 0, 1334, 260, 1, 0, 0, 0, 1335, 1336, 5, 116, 0, 0, 1336, 1337, 5, 114, 0, 0, 1337,
		1338, 5, 117, 0, 0, 1338, 1345, 5, 101, 0, 0, 1339, 1340, 5, 102, 0, 0, 1340, 1341, 5, 97, 0,
		0, 1341, 1342, 5, 108, 0, 0, 1342, 1343, 5, 115, 0, 0, 1343, 1345, 5, 101, 0, 0, 1344, 1335,
		1, 0, 0, 0, 1344, 1339, 1, 0, 0, 0, 1345, 262, 1, 0, 0, 0, 1346, 1347, 3, 279, 136, 0, 1347, 1348,
		7, 17, 0, 0, 1348, 1354, 1, 0, 0, 0, 1349, 1354, 3, 265, 129, 0, 1350, 1354, 3, 267, 130, 0,
		1351, 1354, 3, 271, 132, 0, 1352, 1354, 3, 273, 133, 0, 1353, 1346, 1, 0, 0, 0, 1353, 1349,
		1, 0, 0, 0, 1353, 1350, 1, 0, 0, 0, 1353, 1351, 1, 0, 0, 0, 1353, 1352, 1, 0, 0, 0, 1354, 264,
		1, 0, 0, 0, 1355, 1356, 3, 279, 136, 0, 1356, 1357, 3, 225, 109, 0, 1357, 1368, 1, 0, 0, 0, 1358,
		1359, 3, 279, 136, 0, 1359, 1360, 3, 225, 109, 0, 1360, 1361, 3, 225, 109, 0, 1361, 1368,
		1, 0, 0, 0, 1362, 1363, 3, 279, 136, 0, 1363, 1364, 3, 269, 131, 0, 1364, 1365, 3, 225, 109,
		0, 1365, 1366, 3, 225, 109, 0, 1366, 1368, 1, 0, 0, 0, 1367, 1355, 1, 0, 0, 0, 1367, 1358, 1,
		0, 0, 0, 1367, 1362, 1, 0, 0, 0, 1368, 266, 1, 0, 0, 0, 1369, 1370, 3, 279, 136, 0, 1370, 1371,
		5, 117, 0, 0, 1371, 1372, 3, 217, 105, 0, 1372, 1373, 3, 217, 105, 0, 1373, 1374, 3, 217, 105,
		0, 1374, 1375, 3, 217, 105, 0, 1375, 268, 1, 0, 0, 0, 1376, 1377, 7, 18, 0, 0, 1377, 270, 1,
		0, 0, 0, 1378, 1379, 3, 279, 136, 0, 1379, 1380, 3, 283, 138, 0, 1380, 272, 1, 0, 0, 0, 1381,
		1382, 3, 279, 136, 0, 1382, 1383, 3, 275, 134, 0, 1383, 274, 1, 0, 0, 0, 1384, 1386, 5, 13,
		0, 0, 1385, 1384, 1, 0, 0, 0, 1385, 1386, 1, 0, 0, 0, 1386, 1387, 1, 0, 0, 0, 1387, 1390, 5, 10,
		0, 0, 1388, 1390, 5, 13, 0, 0, 1389, 1385, 1, 0, 0, 0, 1389, 1388, 1, 0, 0, 0, 1390, 276, 1, 0,
		0, 0, 1391, 1392, 3, 279, 136, 0, 1392, 1393, 3, 281, 137, 0, 1393, 278, 1, 0, 0, 0, 1394, 1395,
		5, 92, 0, 0, 1395, 280, 1, 0, 0, 0, 1396, 1397, 5, 47, 0, 0, 1397, 282, 1, 0, 0, 0, 1398, 1399,
		5, 36, 0, 0, 1399, 284, 1, 0, 0, 0, 1400, 1401, 5, 34, 0, 0, 1401, 286, 1, 0, 0, 0, 1402, 1403,
		5, 39, 0, 0, 1403, 288, 1, 0, 0, 0, 1404, 1405, 5, 34, 0, 0, 1405, 1406, 5, 34, 0, 0, 1406, 1407,
		5, 34, 0, 0, 1407, 290, 1, 0, 0, 0, 1408, 1409, 5, 39, 0, 0, 1409, 1410, 5, 39, 0, 0, 1410, 1411,
		5, 39, 0, 0, 1411, 292, 1, 0, 0, 0, 1412, 1413, 5, 36, 0, 0, 1413, 1414, 5, 47, 0, 0, 1414, 294,
		1, 0, 0, 0, 1415, 1416, 5, 47, 0, 0, 1416, 1417, 5, 36, 0, 0, 1417, 296, 1, 0, 0, 0, 1418, 1419,
		5, 36, 0, 0, 1419, 1420, 5, 47, 0, 0, 1420, 298, 1, 0, 0, 0, 1421, 1422, 5, 36, 0, 0, 1422, 1423,
		5, 36, 0, 0, 1423, 300, 1, 0, 0, 0, 1424, 1425, 5, 36, 0, 0, 1425, 1426, 5, 47, 0, 0, 1426, 1427,
		5, 36, 0, 0, 1427, 302, 1, 0, 0, 0, 1428, 1429, 5, 110, 0, 0, 1429, 1430, 5, 117, 0, 0, 1430,
		1431, 5, 108, 0, 0, 1431, 1432, 5, 108, 0, 0, 1432, 304, 1, 0, 0, 0, 1433, 1434, 5, 46, 0, 0,
		1434, 1435, 5, 46, 0, 0, 1435, 306, 1, 0, 0, 0, 1436, 1437, 5, 60, 0, 0, 1437, 1438, 5, 46, 0,
		0, 1438, 1439, 5, 46, 0, 0, 1439, 308, 1, 0, 0, 0, 1440, 1441, 5, 46, 0, 0, 1441, 1442, 5, 46,
		0, 0, 1442, 1443, 5, 60, 0, 0, 1443, 310, 1, 0, 0, 0, 1444, 1445, 5, 60, 0, 0, 1445, 1446, 5,
		46, 0, 0, 1446, 1447, 5, 46, 0, 0, 1447, 1448, 5, 60, 0, 0, 1448, 312, 1, 0, 0, 0, 1449, 1450,
		5, 42, 0, 0, 1450, 1451, 5, 46, 0, 0, 1451, 314, 1, 0, 0, 0, 1452, 1453, 5, 63, 0, 0, 1453, 1454,
		5, 46, 0, 0, 1454, 316, 1, 0, 0, 0, 1455, 1456, 5, 63, 0, 0, 1456, 1457, 5, 91, 0, 0, 1457, 1458,
		1, 0, 0, 0, 1458, 1459, 6, 155, 20, 0, 1459, 1460, 1, 0, 0, 0, 1460, 1461, 6, 155, 12, 0, 1461,
		318, 1, 0, 0, 0, 1462, 1463, 5, 63, 0, 0, 1463, 1464, 5, 63, 0, 0, 1464, 1465, 5, 46, 0, 0, 1465,
		320, 1, 0, 0, 0, 1466, 1467, 5, 63, 0, 0, 1467, 1468, 5, 58, 0, 0, 1468, 322, 1, 0, 0, 0, 1469,
		1470, 5, 46, 0, 0, 1470, 1471, 5, 38, 0, 0, 1471, 324, 1, 0, 0, 0, 1472, 1473, 5, 58, 0, 0, 1473,
		1474, 5, 58, 0, 0, 1474, 326, 1, 0, 0, 0, 1475, 1476, 5, 61, 0, 0, 1476, 1477, 5, 126, 0, 0, 1477,
		328, 1, 0, 0, 0, 1478, 1479, 5, 61, 0, 0, 1479, 1480, 5, 61, 0, 0, 1480, 1481, 5, 126, 0, 0, 1481,
		330, 1, 0, 0, 0, 1482, 1483, 5, 42, 0, 0, 1483, 1484, 5, 42, 0, 0, 1484, 332, 1, 0, 0, 0, 1485,
		1486, 5, 42, 0, 0, 1486, 1487, 5, 42, 0, 0, 1487, 1488, 5, 61, 0, 0, 1488, 334, 1, 0, 0, 0, 1489,
		1490, 5, 60, 0, 0, 1490, 1491, 5, 61, 0, 0, 1491, 1492, 5, 62, 0, 0, 1492, 336, 1, 0, 0, 0, 1493,
		1494, 5, 61, 0, 0, 1494, 1495, 5, 61, 0, 0, 1495, 1496, 5, 61, 0, 0, 1496, 338, 1, 0, 0, 0, 1497,
		1498, 5, 33, 0, 0, 1498, 1499, 5, 61, 0, 0, 1499, 1500, 5, 61, 0, 0, 1500, 340, 1, 0, 0, 0, 1501,
		1502, 5, 45, 0, 0, 1502, 1503, 5, 62, 0, 0, 1503, 342, 1, 0, 0, 0, 1504, 1505, 5, 33, 0, 0, 1505,
		1506, 5, 105, 0, 0, 1506, 1507, 5, 110, 0, 0, 1507, 1508, 5, 115, 0, 0, 1508, 1509, 5, 116,
		0, 0, 1509, 1510, 5, 97, 0, 0, 1510, 1511, 5, 110, 0, 0, 1511, 1512, 5, 99, 0, 0, 1512, 1513,
		5, 101, 0, 0, 1513, 1514, 5, 111, 0, 0, 1514, 1515, 5, 102, 0, 0, 1515, 1516, 1, 0, 0, 0, 1516,
		1517, 4, 168, 13, 0, 1517, 344, 1, 0, 0, 0, 1518, 1519, 5, 33, 0, 0, 1519, 1520, 5, 105, 0, 0,
		1520, 1521, 5, 110, 0, 0, 1521, 1522, 1, 0, 0, 0, 1522, 1523, 4, 169, 14, 0, 1523, 346, 1, 0,
		0, 0, 1524, 1525, 5, 40, 0, 0, 1525, 1526, 6, 170, 21, 0, 1526, 1527, 1, 0, 0, 0, 1527, 1528,
		6, 170, 12, 0, 1528, 348, 1, 0, 0, 0, 1529, 1530, 5, 41, 0, 0, 1530, 1531, 6, 171, 22, 0, 1531,
		1532, 1, 0, 0, 0, 1532, 1533, 6, 171, 6, 0, 1533, 350, 1, 0, 0, 0, 1534, 1535, 5, 123, 0, 0, 1535,
		1536, 6, 172, 23, 0, 1536, 1537, 1, 0, 0, 0, 1537, 1538, 6, 172, 12, 0, 1538, 352, 1, 0, 0, 0,
		1539, 1540, 5, 125, 0, 0, 1540, 1541, 6, 173, 24, 0, 1541, 1542, 1, 0, 0, 0, 1542, 1543, 6,
		173, 6, 0, 1543, 354, 1, 0, 0, 0, 1544, 1545, 5, 91, 0, 0, 1545, 1546, 6, 174, 25, 0, 1546, 1547,
		1, 0, 0, 0, 1547, 1548, 6, 174, 12, 0, 1548, 356, 1, 0, 0, 0, 1549, 1550, 5, 93, 0, 0, 1550, 1551,
		6, 175, 26, 0, 1551, 1552, 1, 0, 0, 0, 1552, 1553, 6, 175, 6, 0, 1553, 358, 1, 0, 0, 0, 1554,
		1555, 5, 59, 0, 0, 1555, 360, 1, 0, 0, 0, 1556, 1557, 5, 44, 0, 0, 1557, 362, 1, 0, 0, 0, 1558,
		1559, 3, 259, 126, 0, 1559, 364, 1, 0, 0, 0, 1560, 1561, 5, 61, 0, 0, 1561, 366, 1, 0, 0, 0, 1562,
		1563, 5, 62, 0, 0, 1563, 368, 1, 0, 0, 0, 1564, 1565, 5, 60, 0, 0, 1565, 370, 1, 0, 0, 0, 1566,
		1567, 5, 33, 0, 0, 1567, 372, 1, 0, 0, 0, 1568, 1569, 5, 126, 0, 0, 1569, 374, 1, 0, 0, 0, 1570,
		1571, 5, 63, 0, 0, 1571, 376, 1, 0, 0, 0, 1572, 1573, 5, 58, 0, 0, 1573, 378, 1, 0, 0, 0, 1574,
		1575, 5, 61, 0, 0, 1575, 1576, 5, 61, 0, 0, 1576, 380, 1, 0, 0, 0, 1577, 1578, 5, 60, 0, 0, 1578,
		1579, 5, 61, 0, 0, 1579, 382, 1, 0, 0, 0, 1580, 1581, 5, 62, 0, 0, 1581, 1582, 5, 61, 0, 0, 1582,
		384, 1, 0, 0, 0, 1583, 1584, 5, 33, 0, 0, 1584, 1585, 5, 61, 0, 0, 1585, 386, 1, 0, 0, 0, 1586,
		1587, 5, 38, 0, 0, 1587, 1588, 5, 38, 0, 0, 1588, 388, 1, 0, 0, 0, 1589, 1590, 5, 124, 0, 0, 1590,
		1591, 5, 124, 0, 0, 1591, 390, 1, 0, 0, 0, 1592, 1593, 5, 43, 0, 0, 1593, 1594, 5, 43, 0, 0, 1594,
		392, 1, 0, 0, 0, 1595, 1596, 5, 45, 0, 0, 1596, 1597, 5, 45, 0, 0, 1597, 394, 1, 0, 0, 0, 1598,
		1599, 5, 43, 0, 0, 1599, 396, 1, 0, 0, 0, 1600, 1601, 5, 45, 0, 0, 1601, 398, 1, 0, 0, 0, 1602,
		1603, 5, 42, 0, 0, 1603, 400, 1, 0, 0, 0, 1604, 1605, 3, 281, 137, 0, 1605, 402, 1, 0, 0, 0, 1606,
		1607, 5, 38, 0, 0, 1607, 404, 1, 0, 0, 0, 1608, 1609, 5, 124, 0, 0, 1609, 406, 1, 0, 0, 0, 1610,
		1611, 5, 94, 0, 0, 1611, 408, 1, 0, 0, 0, 1612, 1613, 5, 37, 0, 0, 1613, 410, 1, 0, 0, 0, 1614,
		1615, 5, 43, 0, 0, 1615, 1616, 5, 61, 0, 0, 1616, 412, 1, 0, 0, 0, 1617, 1618, 5, 45, 0, 0, 1618,
		1619, 5, 61, 0, 0, 1619, 414, 1, 0, 0, 0, 1620, 1621, 5, 42, 0, 0, 1621, 1622, 5, 61, 0, 0, 1622,
		416, 1, 0, 0, 0, 1623, 1624, 5, 47, 0, 0, 1624, 1625, 5, 61, 0, 0, 1625, 418, 1, 0, 0, 0, 1626,
		1627, 5, 38, 0, 0, 1627, 1628, 5, 61, 0, 0, 1628, 420, 1, 0, 0, 0, 1629, 1630, 5, 124, 0, 0, 1630,
		1631, 5, 61, 0, 0, 1631, 422, 1, 0, 0, 0, 1632, 1633, 5, 94, 0, 0, 1633, 1634, 5, 61, 0, 0, 1634,
		424, 1, 0, 0, 0, 1635, 1636, 5, 37, 0, 0, 1636, 1637, 5, 61, 0, 0, 1637, 426, 1, 0, 0, 0, 1638,
		1639, 5, 60, 0, 0, 1639, 1640, 5, 60, 0, 0, 1640, 1641, 5, 61, 0, 0, 1641, 428, 1, 0, 0, 0, 1642,
		1643, 5, 62, 0, 0, 1643, 1644, 5, 62, 0, 0, 1644, 1645, 5, 61, 0, 0, 1645, 430, 1, 0, 0, 0, 1646,
		1647, 5, 62, 0, 0, 1647, 1648, 5, 62, 0, 0, 1648, 1649, 5, 62, 0, 0, 1649, 1650, 5, 61, 0, 0,
		1650, 432, 1, 0, 0, 0, 1651, 1652, 5, 63, 0, 0, 1652, 1653, 5, 61, 0, 0, 1653, 434, 1, 0, 0, 0,
		1654, 1655, 3, 441, 217, 0, 1655, 1659, 4, 214, 15, 0, 1656, 1658, 3, 445, 219, 0, 1657, 1656,
		1, 0, 0, 0, 1658, 1661, 1, 0, 0, 0, 1659, 1657, 1, 0, 0, 0, 1659, 1660, 1, 0, 0, 0, 1660, 436,
		1, 0, 0, 0, 1661, 1659, 1, 0, 0, 0, 1662, 1666, 3, 441, 217, 0, 1663, 1665, 3, 445, 219, 0, 1664,
		1663, 1, 0, 0, 0, 1665, 1668, 1, 0, 0, 0, 1666, 1664, 1, 0, 0, 0, 1666, 1667, 1, 0, 0, 0, 1667,
		438, 1, 0, 0, 0, 1668, 1666, 1, 0, 0, 0, 1669, 1673, 3, 443, 218, 0, 1670, 1672, 3, 447, 220,
		0, 1671, 1670, 1, 0, 0, 0, 1672, 1675, 1, 0, 0, 0, 1673, 1671, 1, 0, 0, 0, 1673, 1674, 1, 0, 0,
		0, 1674, 440, 1, 0, 0, 0, 1675, 1673, 1, 0, 0, 0, 1676, 1683, 7, 19, 0, 0, 1677, 1678, 8, 20,
		0, 0, 1678, 1683, 4, 217, 16, 0, 1679, 1680, 7, 21, 0, 0, 1680, 1681, 7, 22, 0, 0, 1681, 1683,
		4, 217, 17, 0, 1682, 1676, 1, 0, 0, 0, 1682, 1677, 1, 0, 0, 0, 1682, 1679, 1, 0, 0, 0, 1683, 442,
		1, 0, 0, 0, 1684, 1685, 3, 441, 217, 0, 1685, 1686, 4, 218, 18, 0, 1686, 444, 1, 0, 0, 0, 1687,
		1694, 7, 23, 0, 0, 1688, 1689, 8, 20, 0, 0, 1689, 1694, 4, 219, 19, 0, 1690, 1691, 7, 21, 0,
		0, 1691, 1692, 7, 22, 0, 0, 1692, 1694, 4, 219, 20, 0, 1693, 1687, 1, 0, 0, 0, 1693, 1688, 1,
		0, 0, 0, 1693, 1690, 1, 0, 0, 0, 1694, 446, 1, 0, 0, 0, 1695, 1696, 3, 445, 219, 0, 1696, 1697,
		4, 220, 21, 0, 1697, 448, 1, 0, 0, 0, 1698, 1700, 8, 24, 0, 0, 1699, 1698, 1, 0, 0, 0, 1700, 1703,
		1, 0, 0, 0, 1701, 1699, 1, 0, 0, 0, 1701, 1702, 1, 0, 0, 0, 1702, 450, 1, 0, 0, 0, 1703, 1701,
		1, 0, 0, 0, 1704, 1705, 5, 64, 0, 0, 1705, 452, 1, 0, 0, 0, 1706, 1707, 5, 46, 0, 0, 1707, 1708,
		5, 46, 0, 0, 1708, 1709, 5, 46, 0, 0, 1709, 454, 1, 0, 0, 0, 1710, 1712, 7, 25, 0, 0, 1711, 1710,
		1, 0, 0, 0, 1712, 1713, 1, 0, 0, 0, 1713, 1711, 1, 0, 0, 0, 1713, 1714, 1, 0, 0, 0, 1714, 1721,
		1, 0, 0, 0, 1715, 1717, 3, 273, 133, 0, 1716, 1715, 1, 0, 0, 0, 1717, 1718, 1, 0, 0, 0, 1718,
		1716, 1, 0, 0, 0, 1718, 1719, 1, 0, 0, 0, 1719, 1721, 1, 0, 0, 0, 1720, 1711, 1, 0, 0, 0, 1720,
		1716, 1, 0, 0, 0, 1721, 1722, 1, 0, 0, 0, 1722, 1723, 6, 224, 27, 0, 1723, 456, 1, 0, 0, 0, 1724,
		1725, 3, 275, 134, 0, 1725, 1726, 6, 225, 28, 0, 1726, 458, 1, 0, 0, 0, 1727, 1728, 5, 47, 0,
		0, 1728, 1729, 5, 42, 0, 0, 1729, 1733, 1, 0, 0, 0, 1730, 1732, 9, 0, 0, 0, 1731, 1730, 1, 0,
		0, 0, 1732, 1735, 1, 0, 0, 0, 1733, 1734, 1, 0, 0, 0, 1733, 1731, 1, 0, 0, 0, 1734, 1736, 1, 0,
		0, 0, 1735, 1733, 1, 0, 0, 0, 1736, 1737, 5, 42, 0, 0, 1737, 1738, 5, 47, 0, 0, 1738, 1739, 1,
		0, 0, 0, 1739, 1740, 6, 226, 29, 0, 1740, 1741, 1, 0, 0, 0, 1741, 1742, 6, 226, 30, 0, 1742,
		460, 1, 0, 0, 0, 1743, 1744, 5, 47, 0, 0, 1744, 1745, 5, 47, 0, 0, 1745, 1749, 1, 0, 0, 0, 1746,
		1748, 8, 24, 0, 0, 1747, 1746, 1, 0, 0, 0, 1748, 1751, 1, 0, 0, 0, 1749, 1747, 1, 0, 0, 0, 1749,
		1750, 1, 0, 0, 0, 1750, 1752, 1, 0, 0, 0, 1751, 1749, 1, 0, 0, 0, 1752, 1753, 6, 227, 31, 0, 1753,
		1754, 1, 0, 0, 0, 1754, 1755, 6, 227, 30, 0, 1755, 462, 1, 0, 0, 0, 1756, 1757, 5, 35, 0, 0, 1757,
		1758, 5, 33, 0, 0, 1758, 1759, 1, 0, 0, 0, 1759, 1760, 6, 228, 32, 0, 1760, 1769, 3, 449, 221,
		0, 1761, 1762, 3, 275, 134, 0, 1762, 1763, 5, 35, 0, 0, 1763, 1764, 5, 33, 0, 0, 1764, 1765,
		1, 0, 0, 0, 1765, 1766, 3, 449, 221, 0, 1766, 1768, 1, 0, 0, 0, 1767, 1761, 1, 0, 0, 0, 1768,
		1771, 1, 0, 0, 0, 1769, 1767, 1, 0, 0, 0, 1769, 1770, 1, 0, 0, 0, 1770, 1772, 1, 0, 0, 0, 1771,
		1769, 1, 0, 0, 0, 1772, 1773, 6, 228, 27, 0, 1773, 464, 1, 0, 0, 0, 1774, 1775, 9, 0, 0, 0, 1775,
		1776, 6, 229, 33, 0, 1776, 466, 1, 0, 0, 0, 82, 0, 1, 2, 3, 4, 5, 6, 471, 480, 490, 498, 507, 516,
		520, 526, 538, 552, 566, 603, 658, 662, 669, 676, 683, 699, 740, 1124, 1129, 1136, 1140,
		1142, 1148, 1152, 1156, 1160, 1167, 1172, 1174, 1180, 1184, 1188, 1194, 1199, 1211, 1215,
		1221, 1225, 1233, 1237, 1243, 1253, 1257, 1263, 1267, 1272, 1275, 1280, 1283, 1288, 1293,
		1301, 1312, 1316, 1321, 1326, 1344, 1353, 1367, 1385, 1389, 1659, 1666, 1673, 1682, 1693,
		1701, 1713, 1718, 1720, 1733, 1749, 1769, 34, 5, 1, 0, 5, 5, 0, 7, 2, 0, 5, 2, 0, 5, 3, 0, 5, 4,
		0, 4, 0, 0, 3, 0, 0, 7, 3, 0, 7, 4, 0, 1, 17, 0, 7, 88, 0, 5, 0, 0, 7, 131, 0, 5, 6, 0, 1, 20, 1, 1, 89,
		2, 1, 89, 3, 1, 89, 4, 1, 115, 5, 1, 155, 6, 1, 170, 7, 1, 171, 8, 1, 172, 9, 1, 173, 10, 1, 174,
		11, 1, 175, 12, 6, 0, 0, 1, 225, 13, 1, 226, 14, 7, 135, 0, 1, 227, 15, 1, 228, 16, 1, 229, 17];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GroovyLexer.__ATN) {
			GroovyLexer.__ATN = new ATNDeserializer().deserialize(GroovyLexer._serializedATN);
		}

		return GroovyLexer.__ATN;
	}

	static DecisionsToDFA = GroovyLexer._ATN.decisionToState.map((ds: DecisionState, index: number) => new DFA(ds, index));
}