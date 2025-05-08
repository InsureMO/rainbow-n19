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
	AS, // G1.0
	DEF, // G1.0
	IN, // G1.0
	TRAIT, // G2.3
	THREADSAFE, // G2.4 @ThreadSafe
	// java keywords
	ABSTRACT, // 1.0
	ASSERT, // 1.4
	AT_INTERFACE, // 5
	BREAK, // 1.0
	CASE, // 1.0
	CATCH, // 1.0
	CLASS, // 1.0
	CONST, // reserved, 1.0
	CONTINUE, // 1.0
	DEFAULT, // 1.0
	DO, // 1.0
	ELSE, // 1.0
	ENUM, // 5
	EXTENDS, // 1.0
	FINAL, // 1.0
	FINALLY, // 1.0
	FOR, // 1.0
	GOTO, // reserved, 1.0
	IF, // 1.0
	IMPLEMENTS, // 1.0
	IMPORT, // 1.0
	INSTANCEOF, // 1.0
	INTERFACE, // 1.0
	NATIVE, // 1.0
	NEW, // 1.0
	NON_SEALED, // 17
	NOT_IN, // !in
	NOT_INSTANCEOF, // !instanceof
	NULL, // 1.0
	PACKAGE, // 1.0
	PERMITS, // 17
	PRIVATE, // 1.0
	PROTECTED, // 1.0
	PUBLIC, // 1.0
	RECORD, // 16
	RETURN, // 1.0
	SEALED, // 17
	STATIC, // 1.0
	STRICTFP, // 1.2
	SUPER, // 1.0
	SWITCH, // 1.0
	SYNCHRONIZED, // 1.0
	THIS, // 1.0
	THROW, // 1.0
	THROWS, // 1.0
	TRANSIENT, // 1.0
	TRY, // 1.0
	VAR, // 10
	VOID, // 1.0
	VOLATILE, // 1.0
	WHILE, // 1.0
	YIELD, // 14
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
	CharLiteral, // a single char in '', and declared as char with 3 different ways: "char x = 'x'", "def x = 'x' as char", "def x = (char)'x'"
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
	StringLiteral,
	GStringQuotationMark, // "
	GStringQuotationMarkML, // """
	SlashyGStringQuotationMark, // /
	DollarSlashyGStringQuotationStartMark, // $/
	DollarSlashyGStringQuotationEndMark, // /$
	SlashyGStringBackslashEscape, // \/
	DollarSlashyGStringDollarEscape, // $$
	DollarSlashyGStringSlashEscape, // $/
	GStringContent, // string part in gstring
	GStringInterpolationSymbol, // $ of ${...} or $...
	GStringInterpolationContent, // ${...}, $..., the "..." part, any groovy expression is good for it
	GStringInterpolation, // ${...}, $..., "..." means interpolation, any groovy expression is good for it
	GStringLiteral,
	SlashyGStringLiteral,
	DollarSlashyGStringLiteral,
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
	MethodReference, // :: // this also supported by java
	RegexFind, // =~
	RegexMatch, // ==~
	Power, // **
	PowerAssign, // **=
	Spaceship, // <=>
	Identical, // ===
	NotIdentical, // !==
	Arrow, // -> // this also supported by java
	// separators
	LBrace, // {
	RBrace, // }
	LParen, // (
	RParen, // )
	LBrack, // [
	RBrack, // ]
	Semicolon, // ;
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
	Decrease, // --
	Add, // +
	Subtract, // -
	Multiple, // *
	Divide, // /
	Bitand, // &
	Bitor, // |
	Xor, // ^
	Mod, // %
	AddAssign, // +=
	SubtractAssign, // -=
	MultipleAssign, // *=
	DivideAssign, // /=
	BitandAssign, // &=
	BitorAssign, // |=
	XorAssign, // ^=
	ModAssign, // %=
	LshiftAssign, // <<=
	RshiftAssign, // >>=
	UrshiftAssign, // >>>=
	ElvisAssign, // ?=
	Ellipsis, // ...
	// comment
	CommentKeyword,
	CommentHighlightChars, // chars after comment keyword
	SingleLineCommentStartMark,
	SingleLineComment,
	MultipleLinesCommentStartMark,
	MultipleLinesCommentEndMark,
	MultipleLinesCommentsHeadAsterisks,  // asterisks in head of line
	MultipleLinesComment,
	// shebang command
	ScriptCommandStartMark, // #!
	ScriptCommand, // first line starts with "#!"
	// text content
	Whitespaces,
	Tabs,
	NewLine, // \n or \r\n
	Chars,
	Identifier,
	UndeterminedChars,
	UnexpectedChars,
	// statements
	PackageDeclaration,
	ImportDeclaration,
	ImportAllMark,
	InterfaceDeclaration,
	ClassDeclaration,
	AtInterfaceClassDeclaration,
	EnumClassDeclaration,
	RecordClassDeclaration,
	TraitClassDeclaration,
	ClassBody,
	StaticBlockDeclaration,
	StaticBlockBody,
	ConstructorDeclaration,
	ConstructorBody,
	MethodDeclaration,
	MethodBody,
	FieldDeclaration,
	AnnotationDeclaration,
	GenericTypeDeclaration,
	IfDeclaration,
	IfIfDeclaration,
	IfIfBody,
	IfElseIfDeclaration,
	IfElseIfBody,
	IfElseDeclaration,
	IfElseBody,
	SwitchDeclaration,
	SwitchBody,
	SwitchCaseDeclaration,
	SwitchCaseBody,
	SwitchDefaultDeclaration,
	SwitchDefaultBody,
	WhileDeclaration,
	WhileBody,
	DoWhileDeclaration,
	DoWhileBody,
	ForDeclaration,
	ForBody,
	TryCatchDeclaration,
	TryDeclaration,
	TryBody,
	CatchDeclaration,
	CatchBody,
	FinallyDeclaration,
	FinallyBody,
	Closure,
	LambdaDeclaration,
	LambdaBody,
	CodeBlock,
	ArrayInitializer,
	// temporary tokens are only used during the AST parsing process
	// and will be replaced with official tokens before the parsing is completed
	// name starts with "$Tmp"
	/** "cscmf" means: class, static block, constructor, method and field */
	Tmp$OneOfCscmfDeclaration
}

interface Token {
	id: TokenId;
	name: string;
	top?: boolean;
}

export type TokenIdKeys = Exclude<keyof typeof TokenId, number>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ExcludeTemporaryTokenId<S extends TokenIdKeys> = S extends `Tmp$${infer _}` ? never : S;
export type TokenKeys = ExcludeTemporaryTokenId<TokenIdKeys>;
export type TokenRecord = { [key in TokenKeys]: Token }

// key is value of enumeration, according to typescript standard
export const Tokens: Readonly<TokenRecord> = Object.keys(TokenId).reduce((ret, key) => {
	if ('0123456789'.includes(`${key}`[0]) || key.startsWith('Tmp$')) {
		// keys are indexes and names
		// ignore index keys and temporary token keys
		return ret;
	}
	ret[key] = {id: TokenId[key], name: key};
	if (ret[key].id === TokenId.COMPILATION_UNIT) {
		ret[key].top = true;
	}
	return ret;
}, {} as TokenRecord);

export enum TokenType {
	CompilationUnit,
	WhitespaceOrTabs, NewLine,
	Separator,
	Keyword, Mark, Operator, PrimitiveType, Symbol,
	Identifier,
	// literal
	BooleanLiteral,
	NumberLiteral,
	StringLiteral,
	// chars only
	Chars, UndeterminedChars,
	// statement
	ScriptCommand, Comments,
	PackageDeclaration, ImportDeclaration,
	TypeDeclaration, ConstructorDeclaration, MethodDeclaration, FieldDeclaration,
	LogicBlockDeclaration, LogicBlock,
	// temporary
	TemporaryStatement
}
