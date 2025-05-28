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
	BooleanTrue, // true
	BooleanFalse, // false
	// numeric
	NumericSignPart, // + or -
	NumericBasePart, // numbers
	NumericSuffixPart, // gG: BigInteger/BigDecimal, lL: Long, iI: Integer, dD: double, fF: float
	BinaryStartMark, // 0b/0B of [+-]0b...
	BinaryLiteral, // [+-]0b..., "..." means numbers
	OctalStartMark, // 0 of [+-]0...
	OctalLiteral, // [+-]0..., "..." means numbers
	HexadecimalStartMark, // 0x/0X of [+-]0x...
	HexadecimalLiteral, // [+-]0x..., "..." means numbers
	IntegralLiteral, // [+-]..., "..." means numbers
	DecimalExponentMark, // e/E
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
	GStringInterpolationStartMark, // $ of $...
	GStringInterpolationLBraceStartMark, // ${ of ${...}
	GStringInterpolationRBraceEndMark, // } of ${...}
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
	At, // @
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
	SynchronizedBlockDeclaration,
	SynchronizedBlockBody,
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
	SwitchDefaultDeclaration,
	WhileDeclaration,
	WhileBody,
	DoWhileDeclaration,
	DoWhileBody,
	ForDeclaration,
	ForBody,
	TryDeclaration,
	TryTryDeclaration,
	TryTryBody,
	TryCatchDeclaration,
	TryCatchBody,
	TryFinallyDeclaration,
	TryFinallyBody,
	Closure,
	LambdaDeclaration,
	LambdaBody,
	CodeBlock,
	ParenBlock,
	AssertStatement,
	BreakStatement,
	ContinueStatement,
	DefStatement,
	VarStatement,
	NewExpression,
	ThrowStatement,
	ArrayInitializer,
	AtFieldPathElement,
	// temporary tokens are only used during the AST parsing process
	// and will be replaced with official tokens before the parsing is completed
	// name starts with "$Tmp"
	/** "csscmf" means: class, static block, synchronized block, constructor, method and field */
	Tmp$CsscmfDeclaration,
	Tmp$NeverHappen
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
// noinspection JSUnusedGlobalSymbols
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
	/**
	 * brace, brack, paren, comma, semicolon, dot, at
	 */
	Separator,
	/** java and groovy keywords */
	Keyword,
	/**
	 * sl start, ml start and end, script command start, import all
	 */
	Mark,
	/** java and groovy operators */
	Operator,
	/**
	 * 8 types: int, long, short, float, double, boolean, char, byte
	 */
	PrimitiveType,
	/**
	 * java style identifier
	 */
	Identifier,
	// literal
	BooleanLiteral, NumberLiteral, StringLiteral,
	// chars only
	Chars, UndeterminedChars,
	// statement
	ScriptCommand, Comments,
	PackageDeclaration, ImportDeclaration,
	AnnotationDeclaration, GenericTypeDeclaration,
	/**
	 * class, interface, @interface, enum, record, trait
	 */
	TypeDeclaration, ConstructorDeclaration, MethodDeclaration, FieldDeclaration,
	/**
	 * static block, synchronized block,
	 * switch, switch-case, switch-default,
	 * while,
	 * do-while,
	 * if, if-if, if-else-if, if-else
	 * for,
	 * try, try-try, try-catch, try-finally
	 */
	LogicBlockDeclaration,
	/**
	 * class body, constructor body, method body,
	 * static block body, synchronized block body,
	 * switch body, switch-case body ("{}"), switch-default body ("{}"),
	 * do-while body, do-while condition ("() of while ()")
	 */
	LogicBlock,
	/**
	 * assert
	 */
	LogicStatement,
	PathElement,
	// temporary
	/**
	 * csscmf
	 */
	TemporaryStatement
}
