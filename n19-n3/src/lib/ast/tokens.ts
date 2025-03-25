import {NodeType} from '@lezer/common';

export enum TokenId {
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
	BinaryStartMark, // 0b of [+-]0b...
	BinaryLiteral, // [+-]0b..., "..." means numbers
	OctalStartMark, // 0 of [+-]0...
	OctalLiteral, // [+-]0..., "..." means numbers
	HexadecimalStartMark, // 0x of [+-]0x...
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
	// comment
	CommentKeyword,
	SingleLineCommentStartMark,
	SingleLineComment,
	MultipleLinesCommentStartMark,
	MultipleLinesCommentEndMark,
	MultipleLinesComment,
	// shebang command
	ScriptCommandStartMark, // #!
	ScriptCommand, // first line starts with "#!"
	// text content
	Whitespaces,
	Tabs,
	NewLine, // \n or \r\n
	Chars,
	UndeterminedChars,
	UnexpectedChars,
	// statements
	Annotation,
	PackageDeclaration,
	ImportDeclaration,
}

interface Token {
	id: TokenId;
	name: string;
	top?: boolean;
}

export const Tokens: { [key in keyof typeof TokenId]: Token } = {
	COMPILATION_UNIT: {id: TokenId.COMPILATION_UNIT, name: 'CompilationUnit', top: true},
	// primitive types
	BOOLEAN: {id: TokenId.BOOLEAN, name: 'Boolean'},
	CHAR: {id: TokenId.CHAR, name: 'Char'},
	BYTE: {id: TokenId.BYTE, name: 'Byte'},
	SHORT: {id: TokenId.SHORT, name: 'Short'},
	INT: {id: TokenId.INT, name: 'Int'},
	LONG: {id: TokenId.LONG, name: 'Long'},
	FLOAT: {id: TokenId.FLOAT, name: 'Float'},
	DOUBLE: {id: TokenId.DOUBLE, name: 'Double'},
	// groovy keywords
	AS: {id: TokenId.AS, name: 'As'},
	DEF: {id: TokenId.DEF, name: 'Def'},
	IN: {id: TokenId.IN, name: 'In'},
	TRAIT: {id: TokenId.TRAIT, name: 'Trait'},
	THREADSAFE: {id: TokenId.THREADSAFE, name: 'Threadsafe'},
	// java keywords
	ABSTRACT: {id: TokenId.ABSTRACT, name: 'Abstract'},
	ASSERT: {id: TokenId.ASSERT, name: 'Assert'},
	BREAK: {id: TokenId.BREAK, name: 'Break'},
	CASE: {id: TokenId.CASE, name: 'Case'},
	CATCH: {id: TokenId.CATCH, name: 'Catch'},
	CLASS: {id: TokenId.CLASS, name: 'Class'},
	CONST: {id: TokenId.CONST, name: 'Const'},
	CONTINUE: {id: TokenId.CONTINUE, name: 'Continue'},
	DEFAULT: {id: TokenId.DEFAULT, name: 'Default'},
	DO: {id: TokenId.DO, name: 'Do'},
	ELSE: {id: TokenId.ELSE, name: 'Else'},
	ENUM: {id: TokenId.ENUM, name: 'Enum'},
	EXTENDS: {id: TokenId.EXTENDS, name: 'Extends'},
	FINAL: {id: TokenId.FINAL, name: 'Final'},
	FINALLY: {id: TokenId.FINALLY, name: 'Finally'},
	FOR: {id: TokenId.FOR, name: 'For'},
	IF: {id: TokenId.IF, name: 'If'},
	GOTO: {id: TokenId.GOTO, name: 'Goto'},
	IMPLEMENTS: {id: TokenId.IMPLEMENTS, name: 'Implements'},
	IMPORT: {id: TokenId.IMPORT, name: 'Import'},
	INSTANCEOF: {id: TokenId.INSTANCEOF, name: 'Instanceof'},
	INTERFACE: {id: TokenId.INTERFACE, name: 'Interface'},
	NATIVE: {id: TokenId.NATIVE, name: 'Native'},
	NEW: {id: TokenId.NEW, name: 'New'},
	NON_SEALED: {id: TokenId.NON_SEALED, name: 'NonSealed'},
	NULL: {id: TokenId.NULL, name: 'Null'},
	PACKAGE: {id: TokenId.PACKAGE, name: 'Package'},
	PERMITS: {id: TokenId.PERMITS, name: 'Permits'},
	PRIVATE: {id: TokenId.PRIVATE, name: 'Private'},
	PROTECTED: {id: TokenId.PROTECTED, name: 'Protected'},
	PUBLIC: {id: TokenId.PUBLIC, name: 'Public'},
	RECORD: {id: TokenId.RECORD, name: 'Record'},
	RETURN: {id: TokenId.RETURN, name: 'Return'},
	SEALED: {id: TokenId.SEALED, name: 'Sealed'},
	STATIC: {id: TokenId.STATIC, name: 'Static'},
	STRICTFP: {id: TokenId.STRICTFP, name: 'Strictfp'},
	SUPER: {id: TokenId.SUPER, name: 'Super'},
	SWITCH: {id: TokenId.SWITCH, name: 'Switch'},
	SYNCHRONIZED: {id: TokenId.SYNCHRONIZED, name: 'Synchronized'},
	THIS: {id: TokenId.THIS, name: 'This'},
	THROW: {id: TokenId.THROW, name: 'Throw'},
	THROWS: {id: TokenId.THROWS, name: 'Throws'},
	TRANSIENT: {id: TokenId.TRANSIENT, name: 'Transient'},
	TRY: {id: TokenId.TRY, name: 'Try'},
	VAR: {id: TokenId.VAR, name: 'Var'},
	VOID: {id: TokenId.VOID, name: 'Void'},
	VOLATILE: {id: TokenId.VOLATILE, name: 'Volatile'},
	WHILE: {id: TokenId.WHILE, name: 'While'},
	YIELD: {id: TokenId.YIELD, name: 'Yield'},
	// boolean
	BooleanLiteral: {id: TokenId.BooleanLiteral, name: 'BooleanLiteral'},
	// numeric
	NumericSignPart: {id: TokenId.NumericSignPart, name: 'NumericSignPart'},
	NumericBasePart: {id: TokenId.NumericBasePart, name: 'NumericBasePart'},
	NumericUnderscorePart: {id: TokenId.NumericUnderscorePart, name: 'NumericUnderscorePart'},
	NumericSuffixPart: {id: TokenId.NumericSuffixPart, name: 'NumericSuffixPart'},
	BinaryStartMark: {id: TokenId.BinaryStartMark, name: 'BinaryStartMark'},
	BinaryLiteral: {id: TokenId.BinaryLiteral, name: 'BinaryLiteral'},
	OctalStartMark: {id: TokenId.OctalStartMark, name: 'OctalStartMark'},
	OctalLiteral: {id: TokenId.OctalLiteral, name: 'OctalLiteral'},
	HexadecimalStartMark: {id: TokenId.HexadecimalStartMark, name: 'HexadecimalStartMark'},
	HexadecimalLiteral: {id: TokenId.HexadecimalLiteral, name: 'HexadecimalLiteral'},
	IntegralLiteral: {id: TokenId.IntegralLiteral, name: 'IntegralLiteral'},
	DecimalExponentSymbol: {id: TokenId.DecimalExponentSymbol, name: 'DecimalExponentSymbol'},
	DecimalExponentPart: {id: TokenId.DecimalExponentPart, name: 'DecimalExponentPart'},
	DecimalLiteral: {id: TokenId.DecimalLiteral, name: 'DecimalLiteral'},
	// char
	GChar: {id: TokenId.GChar, name: 'GChar'},
	// string and gstring
	StringQuotationMark: {id: TokenId.StringQuotationMark, name: 'StringQuotationMark'},
	StringQuotationMarkML: {id: TokenId.StringQuotationMarkML, name: 'StringQuotationMarkML'},
	StringMLFirstNewLineEraser: {id: TokenId.StringMLFirstNewLineEraser, name: 'StringMLFirstNewLineEraser'},
	StringBackspaceEscape: {id: TokenId.StringBackspaceEscape, name: 'StringBackspaceEscape'},
	StringFormFeedEscape: {id: TokenId.StringFormFeedEscape, name: 'StringFormFeedEscape'},
	StringNewLineEscape: {id: TokenId.StringNewLineEscape, name: 'StringNewLineEscape'},
	StringCarriageReturnEscape: {id: TokenId.StringCarriageReturnEscape, name: 'StringCarriageReturnEscape'},
	StringSingleSpaceEscape: {id: TokenId.StringSingleSpaceEscape, name: 'StringSingleSpaceEscape'},
	StringTabulationEscape: {id: TokenId.StringTabulationEscape, name: 'StringTabulationEscape'},
	StringBackslashEscape: {id: TokenId.StringBackslashEscape, name: 'StringBackslashEscape'},
	StringSingleQuoteEscape: {id: TokenId.StringSingleQuoteEscape, name: 'StringSingleQuoteEscape'},
	StringDoubleQuoteEscape: {id: TokenId.StringDoubleQuoteEscape, name: 'StringDoubleQuoteEscape'},
	StringDollarEscape: {id: TokenId.StringDollarEscape, name: 'StringDollarEscape'},
	StringUnicodeEscape: {id: TokenId.StringUnicodeEscape, name: 'StringUnicodeEscape'},
	StringUnicodeEscapeMark: {id: TokenId.StringUnicodeEscapeMark, name: 'StringUnicodeEscapeMark'},
	StringUnicodeEscapeContent: {id: TokenId.StringUnicodeEscapeContent, name: 'StringUnicodeEscapeContent'},
	String: {id: TokenId.String, name: 'String'},
	GStringQuotationMark: {id: TokenId.GStringQuotationMark, name: 'GStringQuotationMark'},
	GStringQuotationMarkML: {id: TokenId.GStringQuotationMarkML, name: 'GStringQuotationMarkML'},
	SlashyGStringQuotationMark: {id: TokenId.SlashyGStringQuotationMark, name: 'SlashyGStringQuotationMark'},
	DollarSlashyGStringQuotationMarkBegin: {
		id: TokenId.DollarSlashyGStringQuotationMarkBegin, name: 'DollarSlashyGStringQuotationMarkBegin'
	},
	DollarSlashyGStringQuotationMarkEnd: {
		id: TokenId.DollarSlashyGStringQuotationMarkEnd, name: 'DollarSlashyGStringQuotationMarkEnd'
	},
	SlashyGStringBackslashEscape: {
		id: TokenId.SlashyGStringBackslashEscape, name: 'SlashyGStringBackslashEscape'
	},
	DollarSlashyGStringDollarEscape: {
		id: TokenId.DollarSlashyGStringDollarEscape, name: 'DollarSlashyGStringDollarEscape'
	},
	DollarSlashyGStringSlashEscape: {
		id: TokenId.DollarSlashyGStringSlashEscape, name: 'DollarSlashyGStringSlashEscape'
	},
	GStringContent: {id: TokenId.GStringContent, name: 'GStringContent'},
	GStringInterpolationSymbol: {id: TokenId.GStringInterpolationSymbol, name: 'GStringInterpolationSymbol'},
	GStringInterpolationContent: {id: TokenId.GStringInterpolationContent, name: 'GStringInterpolationContent'},
	GStringInterpolation: {id: TokenId.GStringInterpolation, name: 'GStringInterpolation'},
	GString: {id: TokenId.GString, name: 'GString'},
	SlashyGString: {id: TokenId.SlashyGString, name: 'SlashyGString'},
	DollarSlashyGString: {id: TokenId.DollarSlashyGString, name: 'DollarSlashyGString'},
	// Groovy Operators
	RangeInclusive: {id: TokenId.RangeInclusive, name: 'RangeInclusive'},
	RangeExclusiveLeft: {id: TokenId.RangeExclusiveLeft, name: 'RangeExclusiveLeft'},
	RangeExclusiveRight: {id: TokenId.RangeExclusiveRight, name: 'RangeExclusiveRight'},
	RangeExclusiveFull: {id: TokenId.RangeExclusiveFull, name: 'RangeExclusiveFull'},
	SpreadDot: {id: TokenId.SpreadDot, name: 'SpreadDot'},
	SafeDot: {id: TokenId.SafeDot, name: 'SafeDot'},
	SafeIndex: {id: TokenId.SafeIndex, name: 'SafeIndex'},
	SafeIndexClose: {id: TokenId.SafeIndexClose, name: 'SafeIndexClose'},
	SafeChainDot: {id: TokenId.SafeChainDot, name: 'SafeChainDot'},
	Elvis: {id: TokenId.Elvis, name: 'Elvis'},
	MethodPointer: {id: TokenId.MethodPointer, name: 'MethodPointer'},
	MethodReference: {id: TokenId.MethodReference, name: 'MethodReference'},
	RegexFind: {id: TokenId.RegexFind, name: 'RegexFind'},
	RegexMatch: {id: TokenId.RegexMatch, name: 'RegexMatch'},
	Power: {id: TokenId.Power, name: 'Power'},
	PowerAssign: {id: TokenId.PowerAssign, name: 'PowerAssign'},
	Spaceship: {id: TokenId.Spaceship, name: 'Spaceship'},
	Identical: {id: TokenId.Identical, name: 'Identical'},
	NotIdentical: {id: TokenId.NotIdentical, name: 'NotIdentical'},
	Arrow: {id: TokenId.Arrow, name: 'Arrow'},
	NotInstanceOf: {id: TokenId.NotInstanceOf, name: 'NotInstanceOf'},
	NotIn: {id: TokenId.NotIn, name: 'NotIn'},
	// separators
	LBrace: {id: TokenId.LBrace, name: 'LBrace'},
	RBrace: {id: TokenId.RBrace, name: 'RBrace'},
	LParen: {id: TokenId.LParen, name: 'LParen'},
	RParen: {id: TokenId.RParen, name: 'RParen'},
	LBrack: {id: TokenId.LBrack, name: 'LBrack'},
	RBrack: {id: TokenId.RBrack, name: 'RBrack'},
	Semi: {id: TokenId.Semi, name: 'Semi'},
	Comma: {id: TokenId.Comma, name: 'Comma'},
	Dot: {id: TokenId.Dot, name: 'Dot'},
	// operators
	Assign: {id: TokenId.Assign, name: 'Assign'},
	GreaterThan: {id: TokenId.GreaterThan, name: 'GreaterThan'},
	LessThan: {id: TokenId.LessThan, name: 'LessThan'},
	Not: {id: TokenId.Not, name: 'Not'},
	Bitnot: {id: TokenId.Bitnot, name: 'Bitnot'},
	Question: {id: TokenId.Question, name: 'Question'},
	Colon: {id: TokenId.Colon, name: 'Colon'},
	Equal: {id: TokenId.Equal, name: 'Equal'},
	LessThanOrEqual: {id: TokenId.LessThanOrEqual, name: 'LessThanOrEqual'},
	GreaterThanOrEqual: {id: TokenId.GreaterThanOrEqual, name: 'GreaterThanOrEqual'},
	NotEqual: {id: TokenId.NotEqual, name: 'NotEqual'},
	And: {id: TokenId.And, name: 'And'},
	Or: {id: TokenId.Or, name: 'Or'},
	Increase: {id: TokenId.Increase, name: 'Increase'},
	Dec: {id: TokenId.Dec, name: 'Dec'},
	Add: {id: TokenId.Add, name: 'Add'},
	Subtract: {id: TokenId.Subtract, name: 'Subtract'},
	Multiple: {id: TokenId.Multiple, name: 'Multiple'},
	Divide: {id: TokenId.Divide, name: 'Divide'},
	Bitand: {id: TokenId.Bitand, name: 'Bitand'},
	Bitor: {id: TokenId.Bitor, name: 'Bitor'},
	Xor: {id: TokenId.Xor, name: 'Xor'},
	Mod: {id: TokenId.Mod, name: 'Mod'},
	AddAssign: {id: TokenId.AddAssign, name: 'AddAssign'},
	SubAssign: {id: TokenId.SubAssign, name: 'SubAssign'},
	MulAssign: {id: TokenId.MulAssign, name: 'MulAssign'},
	DivAssign: {id: TokenId.DivAssign, name: 'DivAssign'},
	AndAssign: {id: TokenId.AndAssign, name: 'AndAssign'},
	OrAssign: {id: TokenId.OrAssign, name: 'OrAssign'},
	XorAssign: {id: TokenId.XorAssign, name: 'XorAssign'},
	ModAssign: {id: TokenId.ModAssign, name: 'ModAssign'},
	LshiftAssign: {id: TokenId.LshiftAssign, name: 'LshiftAssign'},
	RshiftAssign: {id: TokenId.RshiftAssign, name: 'RshiftAssign'},
	UrshiftAssign: {id: TokenId.UrshiftAssign, name: 'UrshiftAssign'},
	ElvisAssign: {id: TokenId.ElvisAssign, name: 'ElvisAssign'},
	At: {id: TokenId.At, name: 'At'},
	Ellipsis: {id: TokenId.Ellipsis, name: 'Ellipsis'},
	// comment
	CommentKeyword: {id: TokenId.CommentKeyword, name: 'CommentKeyword'},
	SingleLineCommentStartMark: {id: TokenId.SingleLineCommentStartMark, name: 'SingleLineCommentStartMark'},
	SingleLineComment: {id: TokenId.SingleLineComment, name: 'SingleLineComment'},
	MultipleLinesCommentStartMark: {id: TokenId.MultipleLinesCommentStartMark, name: 'MultipleLinesCommentStartMark'},
	MultipleLinesCommentEndMark: {id: TokenId.MultipleLinesCommentEndMark, name: 'MultipleLinesCommentEndMark'},
	MultipleLinesComment: {id: TokenId.MultipleLinesComment, name: 'MultipleLinesComment'},
	// shebang command
	ScriptCommandStartMark: {id: TokenId.ScriptCommandStartMark, name: 'ScriptCommandStartMark'},
	ScriptCommand: {id: TokenId.ScriptCommand, name: 'ScriptCommand'},
	// text content
	Whitespaces: {id: TokenId.Whitespaces, name: 'Whitespaces'},
	Tabs: {id: TokenId.Tabs, name: 'Tabs'},
	NewLine: {id: TokenId.NewLine, name: 'NewLine'},
	Chars: {id: TokenId.Chars, name: 'Chars'},
	UndeterminedChars: {id: TokenId.UndeterminedChars, name: 'UndeterminedChars'},
	UnexpectedChars: {id: TokenId.UnexpectedChars, name: 'UnexpectedChars'},
	// statements
	Annotation: {id: TokenId.Annotation, name: 'Annotation'},
	PackageDeclaration: {id: TokenId.PackageDeclaration, name: 'PackageDeclaration'},
	ImportDeclaration: {id: TokenId.ImportDeclaration, name: 'ImportDeclaration'}
};

export const TokenToNodeTypes: Array<NodeType> = (() => {
	const tokens = Object.values(Tokens);
	const types: Array<NodeType> = new Array(tokens.length).fill(null);
	tokens.forEach(token => types[token.id] = NodeType.define(token));
	const notDefined: Array<number> = [];
	const incorrectIndexes: Array<{ def: NodeType, index: number }> = [];
	types.forEach((type, index) => {
		if (type == null) {
			notDefined.push(index);
		} else if (type.id !== index) {
			incorrectIndexes.push({def: type, index});
		}
	});
	const error: Array<string> = [];
	if (notDefined.length !== 0) {
		error.push(`not defined[${notDefined.join(', ')}]`);
	}
	if (incorrectIndexes.length !== 0) {
		error.push(`mismatched[${incorrectIndexes.map(({def, index}) => {
			return `[defId=${def.id}, defName=${def.name}, index=${index}, expect=${Tokens[index]?.name ?? 'TBD'}]`;
		}).join(', ')}]`);
	}
	if (error.length !== 0) {
		throw new Error(`Error occurred in node type definition, ${error.join(', ')}.`);
	}
	return types;
})();
