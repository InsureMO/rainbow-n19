import {AstNode} from './ast-node';
import {AstVisitor} from './ast-visitor';
import {
	AddAssignCaptor,
	AddCaptor,
	AndCaptor,
	ArrowCaptor,
	AssignCaptor,
	AstNodeCaptor,
	AtInterfaceDeclarationCaptor,
	BitandAssignCaptor,
	BitandCaptor,
	BitnotCaptor,
	BitorAssignCaptor,
	BitorCaptor,
	ClassDeclarationCaptor,
	ColonCaptor,
	CommaCaptor,
	DecreaseCaptor,
	DivideAssignCaptor,
	DivideCaptor,
	DotCaptor,
	EllipsisCaptor,
	ElvisCaptor,
	EnumClassDeclarationCaptor,
	EqualCaptor,
	GreaterThanCaptor,
	GreaterThanOrEqualCaptor,
	IdenticalCaptor,
	IdentifierCaptor,
	ImportDeclarationCaptor,
	IncreaseCaptor,
	InterfaceDeclarationCaptor,
	KwAbstractCaptor,
	KwAsCaptor,
	KwAssertCaptor,
	KwBreakCaptor,
	KwCaseCaptor,
	KwCatchCaptor,
	KwConstCaptor,
	KwContinueCaptor,
	KwDefaultCaptor,
	KwDefCaptor,
	KwDoCaptor,
	KwElseCaptor,
	KwExtendsCaptor,
	KwFinalCaptor,
	KwFinallyCaptor,
	KwForCaptor,
	KwGotoCaptor,
	KwIfCaptor,
	KwImplementsCaptor,
	KwInCaptor,
	KwInstanceofCaptor,
	KwNativeCaptor,
	KwNewCaptor,
	KwNonSealedCaptor,
	KwNotInCaptor,
	KwNotInstanceofCaptor,
	KwNullCaptor,
	KwPermitsCaptor,
	KwPrivateCaptor,
	KwProtectedCaptor,
	KwPublicCaptor,
	KwReturnCaptor,
	KwSealedCaptor,
	KwStaticCaptor,
	KwStrictfpCaptor,
	KwSuperCaptor,
	KwSwitchCaptor,
	KwSynchronizedCaptor,
	KwThisCaptor,
	KwThreadsafeCaptor,
	KwThrowCaptor,
	KwThrowsCaptor,
	KwTransientCaptor,
	KwTryCaptor,
	KwVarCaptor,
	KwVoidCaptor,
	KwVolatileCaptor,
	KwWhileCaptor,
	KwYieldCaptor,
	LBraceCaptor,
	LBrackCaptor,
	LessThanCaptor,
	LessThanOrEqualCaptor,
	LParenCaptor,
	LshiftAssignCaptor,
	LtBooleanFalseCaptor,
	LtBooleanTrueCaptor,
	MethodPointerCaptor,
	MethodReferenceCaptor,
	ModAssignCaptor,
	ModCaptor,
	MultipleAssignCaptor,
	MultipleCaptor,
	MultipleLinesCommentCaptor,
	NewLineWith2CharsCaptor,
	NewLineWithSingleCarriageReturnCaptor,
	NewLineWithSingleNewLineCaptor,
	NotCaptor,
	NotEqualCaptor,
	NotIdenticalCaptor,
	OrCaptor,
	PackageDeclarationCaptor,
	PowerAssignCaptor,
	PowerCaptor,
	PtBooleanCaptor,
	PtByteCaptor,
	PtCharCaptor,
	PtDoubleCaptor,
	PtFloatCaptor,
	PtIntCaptor,
	PtLongCaptor,
	PtShortCaptor,
	QuestionCaptor,
	RangeExclusiveFullCaptor,
	RangeExclusiveLeftCaptor,
	RangeExclusiveRightCaptor,
	RangeInclusiveCaptor,
	RBraceCaptor,
	RBrackCaptor,
	RecordClassDeclarationCaptor,
	RegexFindCaptor,
	RegexMatchCaptor,
	RParenCaptor,
	RshiftAssignCaptor,
	SafeChainDotCaptor,
	SafeDotCaptor,
	SafeIndexCaptor,
	ScriptCommandCaptor,
	SemicolonCaptor,
	SingleLineCommentCaptor,
	SpaceshipCaptor,
	SpreadDotCaptor,
	SubtractAssignCaptor,
	SubtractCaptor,
	TabsCaptor,
	TraitClassDeclarationCaptor,
	UndeterminedCharsCaptor,
	UrshiftAssignCaptor,
	WhitespacesCaptor,
	XorAssignCaptor,
	XorCaptor
} from './captor';
import {
	AbstractNode,
	AddAssignNode,
	AddNode,
	AndNode,
	AnnotationDeclarationNode,
	ArrowNode,
	AsNode,
	AssertNode,
	AssignNode,
	AtInterfaceDeclarationNode,
	AtInterfaceNode,
	BinaryLiteralNode,
	BinaryStartMarkNode,
	BitandAssignNode,
	BitandNode,
	BitnotNode,
	BitorAssignNode,
	BitorNode,
	BooleanLiteralNode,
	BooleanNode,
	BreakNode,
	ByteNode,
	CaseNode,
	CatchNode,
	CharLiteralNode,
	CharNode,
	CharsNode,
	ClassDeclarationNode,
	ClassNode,
	ColonNode,
	CommaNode,
	CommentKeywordNode,
	CompilationUnitNode,
	ConstNode,
	ContinueNode,
	DecimalExponentPartNode,
	DecimalExponentSymbolNode,
	DecimalLiteralNode,
	DecreaseNode,
	DefaultNode,
	DefNode,
	DivideAssignNode,
	DivideNode,
	DollarSlashyGStringDollarEscapeNode,
	DollarSlashyGStringLiteralNode,
	DollarSlashyGStringQuotationMarkBeginNode,
	DollarSlashyGStringQuotationMarkEndNode,
	DollarSlashyGStringSlashEscapeNode,
	DoNode,
	DotNode,
	DoubleNode,
	EllipsisNode,
	ElseNode,
	ElvisAssignNode,
	ElvisNode,
	EnumClassDeclarationNode,
	EnumNode,
	EqualNode,
	ExtendsNode,
	FinallyNode,
	FinalNode,
	FloatNode,
	ForNode,
	GotoNode,
	GreaterThanNode,
	GreaterThanOrEqualNode,
	GStringContentNode,
	GStringInterpolationContentNode,
	GStringInterpolationNode,
	GStringInterpolationSymbolNode,
	GStringLiteralNode,
	GStringQuotationMarkMLNode,
	GStringQuotationMarkNode,
	HexadecimalLiteralNode,
	HexadecimalStartMarkNode,
	IdenticalNode,
	IdentifierNode,
	IfNode,
	ImplementsNode,
	ImportAllMarkNode,
	ImportDeclarationNode,
	ImportNode,
	IncreaseNode,
	InNode,
	InstanceofNode,
	IntegralLiteralNode,
	InterfaceDeclarationNode,
	InterfaceNode,
	IntNode,
	LBraceNode,
	LBrackNode,
	LessThanNode,
	LessThanOrEqualNode,
	LongNode,
	LParenNode,
	LshiftAssignNode,
	MethodPointerNode,
	MethodReferenceNode,
	ModAssignNode,
	ModNode,
	MultipleAssignNode,
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	MultipleNode,
	NativeNode,
	NewLineNode,
	NewNode,
	NonSealedNode,
	NotEqualNode,
	NotIdenticalNode,
	NotInNode,
	NotInstanceofNode,
	NotNode,
	NullNode,
	NumericBasePartNode,
	NumericSignPartNode,
	NumericSuffixPartNode,
	NumericUnderscorePartNode,
	OctalLiteralNode,
	OctalStartMarkNode,
	OrNode,
	PackageDeclarationNode,
	PackageNode,
	PermitsNode,
	PowerAssignNode,
	PowerNode,
	PrivateNode,
	ProtectedNode,
	PublicNode,
	QuestionNode,
	RangeExclusiveFullNode,
	RangeExclusiveLeftNode,
	RangeExclusiveRightNode,
	RangeInclusiveNode,
	RBraceNode,
	RBrackNode,
	RecordClassDeclarationNode,
	RecordNode,
	RegexFindNode,
	RegexMatchNode,
	ReturnNode,
	RParenNode,
	RshiftAssignNode,
	SafeChainDotNode,
	SafeDotNode,
	SafeIndexCloseNode,
	SafeIndexNode,
	ScriptCommandNode,
	ScriptCommandStartMarkNode,
	SealedNode,
	SemicolonNode,
	ShortNode,
	SingleLineCommentNode,
	SingleLineCommentStartMarkNode,
	SlashyGStringBackslashEscapeNode,
	SlashyGStringLiteralNode,
	SlashyGStringQuotationMarkNode,
	SpaceshipNode,
	SpreadDotNode,
	StaticBlockDeclarationNode,
	StaticNode,
	StrictfpNode,
	StringBackslashEscapeNode,
	StringBackspaceEscapeNode,
	StringCarriageReturnEscapeNode,
	StringDollarEscapeNode,
	StringDoubleQuoteEscapeNode,
	StringFormFeedEscapeNode,
	StringLiteralNode,
	StringMLFirstNewLineEraserNode,
	StringNewLineEscapeNode,
	StringQuotationMarkMLNode,
	StringQuotationMarkNode,
	StringSingleQuoteEscapeNode,
	StringSingleSpaceEscapeNode,
	StringTabulationEscapeNode,
	StringUnicodeEscapeContentNode,
	StringUnicodeEscapeMarkNode,
	StringUnicodeEscapeNode,
	SubtractAssignNode,
	SubtractNode,
	SuperNode,
	SwitchNode,
	SynchronizedNode,
	TabsNode,
	ThisNode,
	ThreadsafeNode,
	ThrowNode,
	ThrowsNode,
	TraitClassDeclarationNode,
	TraitNode,
	TransientNode,
	TryNode,
	UndeterminedCharsNode,
	UnexpectedCharsNode,
	UrshiftAssignNode,
	VarNode,
	VoidNode,
	VolatileNode,
	WhileNode,
	WhitespacesNode,
	XorAssignNode,
	XorNode,
	YieldNode
} from './node';
import {TokenId} from './tokens';

// constructor of elements
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassImplementsAstNode = new (...args: any[]) => AstNode;
type ClassImplementsAstNodeCaptor = new (astVisitor: AstVisitor) => AstNodeCaptor;

type CompilationUnitTokenId = TokenId.COMPILATION_UNIT;
type ScriptCommandMarkTokenId = TokenId.ScriptCommandStartMark;
type CommentTokenIds =
	| TokenId.SingleLineCommentStartMark
	| TokenId.MultipleLinesCommentStartMark
	| TokenId.MultipleLinesCommentEndMark
	| TokenId.CommentKeyword;
type PackageNoCaptorTokenId = TokenId.PACKAGE;
type ImportNoCaptorTokenId = TokenId.IMPORT | TokenId.ImportAllMark;
type TypeTokenIds =
	| TokenId.INTERFACE
	| TokenId.CLASS
	| TokenId.AT_INTERFACE
	| TokenId.ENUM
	| TokenId.RECORD
	| TokenId.TRAIT;
type OperatorNoCaptorTokenId = TokenId.SafeIndexClose;
type CharsNoCaptorTokenId = TokenId.Chars | TokenId.UnexpectedChars;
type NoCaptorTokenIds =
	| CompilationUnitTokenId
	| ScriptCommandMarkTokenId
	| CommentTokenIds
	| PackageNoCaptorTokenId | ImportNoCaptorTokenId
	| TypeTokenIds
	| OperatorNoCaptorTokenId
	| CharsNoCaptorTokenId;

type SpecialDefTokenIds =
	| TokenId.NewLine
	| TokenId.BooleanLiteral;
type CaptorNotDefinedYetTokenIds /* TODO CaptorNotDefinedYetTokenIds */ =
// numeric
	| TokenId.NumericSignPart
	| TokenId.NumericBasePart
	| TokenId.NumericUnderscorePart
	| TokenId.NumericSuffixPart
	| TokenId.BinaryStartMark
	| TokenId.BinaryLiteral
	| TokenId.OctalStartMark
	| TokenId.OctalLiteral
	| TokenId.HexadecimalStartMark
	| TokenId.HexadecimalLiteral
	| TokenId.IntegralLiteral
	| TokenId.DecimalExponentSymbol
	| TokenId.DecimalExponentPart
	| TokenId.DecimalLiteral
	// char
	| TokenId.CharLiteral
	// string and gstring
	| TokenId.StringQuotationMark
	| TokenId.StringQuotationMarkML
	| TokenId.StringMLFirstNewLineEraser
	| TokenId.StringBackspaceEscape
	| TokenId.StringFormFeedEscape
	| TokenId.StringNewLineEscape
	| TokenId.StringCarriageReturnEscape
	| TokenId.StringSingleSpaceEscape
	| TokenId.StringTabulationEscape
	| TokenId.StringBackslashEscape
	| TokenId.StringSingleQuoteEscape
	| TokenId.StringDoubleQuoteEscape
	| TokenId.StringDollarEscape
	| TokenId.StringUnicodeEscape
	| TokenId.StringUnicodeEscapeMark
	| TokenId.StringUnicodeEscapeContent
	| TokenId.StringLiteral
	| TokenId.GStringQuotationMark
	| TokenId.GStringQuotationMarkML
	| TokenId.SlashyGStringQuotationMark
	| TokenId.DollarSlashyGStringQuotationMarkBegin
	| TokenId.DollarSlashyGStringQuotationMarkEnd
	| TokenId.SlashyGStringBackslashEscape
	| TokenId.DollarSlashyGStringDollarEscape
	| TokenId.DollarSlashyGStringSlashEscape
	| TokenId.GStringContent
	| TokenId.GStringInterpolationSymbol
	| TokenId.GStringInterpolationContent
	| TokenId.GStringInterpolation
	| TokenId.GStringLiteral
	| TokenId.SlashyGStringLiteral
	| TokenId.DollarSlashyGStringLiteral
	// static block
	| TokenId.StaticBlockDeclaration
	// annotation
	| TokenId.AnnotationDeclaration;
type NothingDefinedTokenIds = undefined;
type StandardDefTokenIds = Exclude<TokenId, NoCaptorTokenIds | SpecialDefTokenIds | CaptorNotDefinedYetTokenIds | NothingDefinedTokenIds>;
type TokenAstDefsType = {
	[key in StandardDefTokenIds]: [ClassImplementsAstNode, ClassImplementsAstNodeCaptor]
} & {
	[key in NoCaptorTokenIds]: [ClassImplementsAstNode]
} & {
	// new line has 3 captors
	[key in TokenId.NewLine]: [ClassImplementsAstNode, ClassImplementsAstNodeCaptor, ClassImplementsAstNodeCaptor, ClassImplementsAstNodeCaptor]
} & {
	// boolean literal has 2 captors
	[key in TokenId.BooleanLiteral]: [ClassImplementsAstNode, ClassImplementsAstNodeCaptor, ClassImplementsAstNodeCaptor]
} & {
	[key in CaptorNotDefinedYetTokenIds]: [ClassImplementsAstNode]
} & {
	[key in NothingDefinedTokenIds]: []
}

/**
 * list all token ids, nodes and captors.
 * for verification in dev phase.
 */
export const TokenAstDefs: TokenAstDefsType = {
	[TokenId.COMPILATION_UNIT]: [CompilationUnitNode],
	// primitive types
	[TokenId.BOOLEAN]: [BooleanNode, PtBooleanCaptor],
	[TokenId.CHAR]: [CharNode, PtCharCaptor],
	[TokenId.BYTE]: [ByteNode, PtByteCaptor],
	[TokenId.SHORT]: [ShortNode, PtShortCaptor],
	[TokenId.INT]: [IntNode, PtIntCaptor],
	[TokenId.LONG]: [LongNode, PtLongCaptor],
	[TokenId.FLOAT]: [FloatNode, PtFloatCaptor],
	[TokenId.DOUBLE]: [DoubleNode, PtDoubleCaptor],
	// groovy keywords
	[TokenId.AS]: [AsNode, KwAsCaptor],
	[TokenId.DEF]: [DefNode, KwDefCaptor],
	[TokenId.IN]: [InNode, KwInCaptor],
	[TokenId.TRAIT]: [TraitNode],
	[TokenId.THREADSAFE]: [ThreadsafeNode, KwThreadsafeCaptor],
	// java keywords
	[TokenId.ABSTRACT]: [AbstractNode, KwAbstractCaptor],
	[TokenId.ASSERT]: [AssertNode, KwAssertCaptor],
	[TokenId.AT_INTERFACE]: [AtInterfaceNode],
	[TokenId.BREAK]: [BreakNode, KwBreakCaptor],
	[TokenId.CASE]: [CaseNode, KwCaseCaptor],
	[TokenId.CATCH]: [CatchNode, KwCatchCaptor],
	[TokenId.CLASS]: [ClassNode],
	[TokenId.CONST]: [ConstNode, KwConstCaptor],
	[TokenId.CONTINUE]: [ContinueNode, KwContinueCaptor],
	[TokenId.DEFAULT]: [DefaultNode, KwDefaultCaptor],
	[TokenId.DO]: [DoNode, KwDoCaptor],
	[TokenId.ELSE]: [ElseNode, KwElseCaptor],
	[TokenId.ENUM]: [EnumNode],
	[TokenId.EXTENDS]: [ExtendsNode, KwExtendsCaptor],
	[TokenId.FINAL]: [FinalNode, KwFinalCaptor],
	[TokenId.FINALLY]: [FinallyNode, KwFinallyCaptor],
	[TokenId.FOR]: [ForNode, KwForCaptor],
	[TokenId.GOTO]: [GotoNode, KwGotoCaptor],
	[TokenId.IF]: [IfNode, KwIfCaptor],
	[TokenId.IMPLEMENTS]: [ImplementsNode, KwImplementsCaptor],
	[TokenId.IMPORT]: [ImportNode],
	[TokenId.INSTANCEOF]: [InstanceofNode, KwInstanceofCaptor],
	[TokenId.INTERFACE]: [InterfaceNode],
	[TokenId.NATIVE]: [NativeNode, KwNativeCaptor],
	[TokenId.NEW]: [NewNode, KwNewCaptor],
	[TokenId.NON_SEALED]: [NonSealedNode, KwNonSealedCaptor],
	[TokenId.NOT_IN]: [NotInNode, KwNotInCaptor],
	[TokenId.NOT_INSTANCEOF]: [NotInstanceofNode, KwNotInstanceofCaptor],
	[TokenId.NULL]: [NullNode, KwNullCaptor],
	[TokenId.PACKAGE]: [PackageNode],
	[TokenId.PERMITS]: [PermitsNode, KwPermitsCaptor],
	[TokenId.PRIVATE]: [PrivateNode, KwPrivateCaptor],
	[TokenId.PROTECTED]: [ProtectedNode, KwProtectedCaptor],
	[TokenId.PUBLIC]: [PublicNode, KwPublicCaptor],
	[TokenId.RECORD]: [RecordNode],
	[TokenId.RETURN]: [ReturnNode, KwReturnCaptor],
	[TokenId.SEALED]: [SealedNode, KwSealedCaptor],
	[TokenId.STATIC]: [StaticNode, KwStaticCaptor],
	[TokenId.STRICTFP]: [StrictfpNode, KwStrictfpCaptor],
	[TokenId.SUPER]: [SuperNode, KwSuperCaptor],
	[TokenId.SWITCH]: [SwitchNode, KwSwitchCaptor],
	[TokenId.SYNCHRONIZED]: [SynchronizedNode, KwSynchronizedCaptor],
	[TokenId.THIS]: [ThisNode, KwThisCaptor],
	[TokenId.THROW]: [ThrowNode, KwThrowCaptor],
	[TokenId.THROWS]: [ThrowsNode, KwThrowsCaptor],
	[TokenId.TRANSIENT]: [TransientNode, KwTransientCaptor],
	[TokenId.TRY]: [TryNode, KwTryCaptor],
	[TokenId.VAR]: [VarNode, KwVarCaptor],
	[TokenId.VOID]: [VoidNode, KwVoidCaptor],
	[TokenId.VOLATILE]: [VolatileNode, KwVolatileCaptor],
	[TokenId.WHILE]: [WhileNode, KwWhileCaptor],
	[TokenId.YIELD]: [YieldNode, KwYieldCaptor],
	// boolean
	[TokenId.BooleanLiteral]: [BooleanLiteralNode, LtBooleanTrueCaptor, LtBooleanFalseCaptor],
	// numeric
	[TokenId.NumericSignPart]: [NumericSignPartNode],
	[TokenId.NumericBasePart]: [NumericBasePartNode],
	[TokenId.NumericUnderscorePart]: [NumericUnderscorePartNode],
	[TokenId.NumericSuffixPart]: [NumericSuffixPartNode],
	[TokenId.BinaryStartMark]: [BinaryStartMarkNode],
	[TokenId.BinaryLiteral]: [BinaryLiteralNode],
	[TokenId.OctalStartMark]: [OctalStartMarkNode],
	[TokenId.OctalLiteral]: [OctalLiteralNode],
	[TokenId.HexadecimalStartMark]: [HexadecimalStartMarkNode],
	[TokenId.HexadecimalLiteral]: [HexadecimalLiteralNode],
	[TokenId.IntegralLiteral]: [IntegralLiteralNode],
	[TokenId.DecimalExponentSymbol]: [DecimalExponentSymbolNode],
	[TokenId.DecimalExponentPart]: [DecimalExponentPartNode],
	[TokenId.DecimalLiteral]: [DecimalLiteralNode],
	// char
	[TokenId.CharLiteral]: [CharLiteralNode],
	// string and gstring
	[TokenId.StringQuotationMark]: [StringQuotationMarkNode],
	[TokenId.StringQuotationMarkML]: [StringQuotationMarkMLNode],
	[TokenId.StringMLFirstNewLineEraser]: [StringMLFirstNewLineEraserNode],
	[TokenId.StringBackspaceEscape]: [StringBackspaceEscapeNode],
	[TokenId.StringFormFeedEscape]: [StringFormFeedEscapeNode],
	[TokenId.StringNewLineEscape]: [StringNewLineEscapeNode],
	[TokenId.StringCarriageReturnEscape]: [StringCarriageReturnEscapeNode],
	[TokenId.StringSingleSpaceEscape]: [StringSingleSpaceEscapeNode],
	[TokenId.StringTabulationEscape]: [StringTabulationEscapeNode],
	[TokenId.StringBackslashEscape]: [StringBackslashEscapeNode],
	[TokenId.StringSingleQuoteEscape]: [StringSingleQuoteEscapeNode],
	[TokenId.StringDoubleQuoteEscape]: [StringDoubleQuoteEscapeNode],
	[TokenId.StringDollarEscape]: [StringDollarEscapeNode],
	[TokenId.StringUnicodeEscape]: [StringUnicodeEscapeNode],
	[TokenId.StringUnicodeEscapeMark]: [StringUnicodeEscapeMarkNode],
	[TokenId.StringUnicodeEscapeContent]: [StringUnicodeEscapeContentNode],
	[TokenId.StringLiteral]: [StringLiteralNode],
	[TokenId.GStringQuotationMark]: [GStringQuotationMarkNode],
	[TokenId.GStringQuotationMarkML]: [GStringQuotationMarkMLNode],
	[TokenId.SlashyGStringQuotationMark]: [SlashyGStringQuotationMarkNode],
	[TokenId.DollarSlashyGStringQuotationMarkBegin]: [DollarSlashyGStringQuotationMarkBeginNode],
	[TokenId.DollarSlashyGStringQuotationMarkEnd]: [DollarSlashyGStringQuotationMarkEndNode],
	[TokenId.SlashyGStringBackslashEscape]: [SlashyGStringBackslashEscapeNode],
	[TokenId.DollarSlashyGStringDollarEscape]: [DollarSlashyGStringDollarEscapeNode],
	[TokenId.DollarSlashyGStringSlashEscape]: [DollarSlashyGStringSlashEscapeNode],
	[TokenId.GStringContent]: [GStringContentNode],
	[TokenId.GStringInterpolationSymbol]: [GStringInterpolationSymbolNode],
	[TokenId.GStringInterpolationContent]: [GStringInterpolationContentNode],
	[TokenId.GStringInterpolation]: [GStringInterpolationNode],
	[TokenId.GStringLiteral]: [GStringLiteralNode],
	[TokenId.SlashyGStringLiteral]: [SlashyGStringLiteralNode],
	[TokenId.DollarSlashyGStringLiteral]: [DollarSlashyGStringLiteralNode],
	// Groovy Operators
	[TokenId.RangeInclusive]: [RangeInclusiveNode, RangeInclusiveCaptor],
	[TokenId.RangeExclusiveLeft]: [RangeExclusiveLeftNode, RangeExclusiveLeftCaptor],
	[TokenId.RangeExclusiveRight]: [RangeExclusiveRightNode, RangeExclusiveRightCaptor],
	[TokenId.RangeExclusiveFull]: [RangeExclusiveFullNode, RangeExclusiveFullCaptor],
	[TokenId.SpreadDot]: [SpreadDotNode, SpreadDotCaptor],
	[TokenId.SafeDot]: [SafeDotNode, SafeDotCaptor],
	[TokenId.SafeIndex]: [SafeIndexNode, SafeIndexCaptor],
	[TokenId.SafeIndexClose]: [SafeIndexCloseNode],
	[TokenId.SafeChainDot]: [SafeChainDotNode, SafeChainDotCaptor],
	[TokenId.Elvis]: [ElvisNode, ElvisCaptor],
	[TokenId.MethodPointer]: [MethodPointerNode, MethodPointerCaptor],
	[TokenId.MethodReference]: [MethodReferenceNode, MethodReferenceCaptor],
	[TokenId.RegexFind]: [RegexFindNode, RegexFindCaptor],
	[TokenId.RegexMatch]: [RegexMatchNode, RegexMatchCaptor],
	[TokenId.Power]: [PowerNode, PowerCaptor],
	[TokenId.PowerAssign]: [PowerAssignNode, PowerAssignCaptor],
	[TokenId.Spaceship]: [SpaceshipNode, SpaceshipCaptor],
	[TokenId.Identical]: [IdenticalNode, IdenticalCaptor],
	[TokenId.NotIdentical]: [NotIdenticalNode, NotIdenticalCaptor],
	[TokenId.Arrow]: [ArrowNode, ArrowCaptor],
	// separators
	[TokenId.LBrace]: [LBraceNode, LBraceCaptor],
	[TokenId.RBrace]: [RBraceNode, RBraceCaptor],
	[TokenId.LParen]: [LParenNode, LParenCaptor],
	[TokenId.RParen]: [RParenNode, RParenCaptor],
	[TokenId.LBrack]: [LBrackNode, LBrackCaptor],
	[TokenId.RBrack]: [RBrackNode, RBrackCaptor],
	[TokenId.Semicolon]: [SemicolonNode, SemicolonCaptor],
	[TokenId.Comma]: [CommaNode, CommaCaptor],
	[TokenId.Dot]: [DotNode, DotCaptor],
	// operators
	[TokenId.Assign]: [AssignNode, AssignCaptor],
	[TokenId.GreaterThan]: [GreaterThanNode, GreaterThanCaptor],
	[TokenId.LessThan]: [LessThanNode, LessThanCaptor],
	[TokenId.Not]: [NotNode, NotCaptor],
	[TokenId.Bitnot]: [BitnotNode, BitnotCaptor],
	[TokenId.Question]: [QuestionNode, QuestionCaptor],
	[TokenId.Colon]: [ColonNode, ColonCaptor],
	[TokenId.Equal]: [EqualNode, EqualCaptor],
	[TokenId.LessThanOrEqual]: [LessThanOrEqualNode, LessThanOrEqualCaptor],
	[TokenId.GreaterThanOrEqual]: [GreaterThanOrEqualNode, GreaterThanOrEqualCaptor],
	[TokenId.NotEqual]: [NotEqualNode, NotEqualCaptor],
	[TokenId.And]: [AndNode, AndCaptor],
	[TokenId.Or]: [OrNode, OrCaptor],
	[TokenId.Increase]: [IncreaseNode, IncreaseCaptor],
	[TokenId.Decrease]: [DecreaseNode, DecreaseCaptor],
	[TokenId.Add]: [AddNode, AddCaptor],
	[TokenId.Subtract]: [SubtractNode, SubtractCaptor],
	[TokenId.Multiple]: [MultipleNode, MultipleCaptor],
	[TokenId.Divide]: [DivideNode, DivideCaptor],
	[TokenId.Bitand]: [BitandNode, BitandCaptor],
	[TokenId.Bitor]: [BitorNode, BitorCaptor],
	[TokenId.Xor]: [XorNode, XorCaptor],
	[TokenId.Mod]: [ModNode, ModCaptor],
	[TokenId.AddAssign]: [AddAssignNode, AddAssignCaptor],
	[TokenId.SubtractAssign]: [SubtractAssignNode, SubtractAssignCaptor],
	[TokenId.MultipleAssign]: [MultipleAssignNode, MultipleAssignCaptor],
	[TokenId.DivideAssign]: [DivideAssignNode, DivideAssignCaptor],
	[TokenId.BitandAssign]: [BitandAssignNode, BitandAssignCaptor],
	[TokenId.BitorAssign]: [BitorAssignNode, BitorAssignCaptor],
	[TokenId.XorAssign]: [XorAssignNode, XorAssignCaptor],
	[TokenId.ModAssign]: [ModAssignNode, ModAssignCaptor],
	[TokenId.LshiftAssign]: [LshiftAssignNode, LshiftAssignCaptor],
	[TokenId.RshiftAssign]: [RshiftAssignNode, RshiftAssignCaptor],
	[TokenId.UrshiftAssign]: [UrshiftAssignNode, UrshiftAssignCaptor],
	[TokenId.ElvisAssign]: [ElvisAssignNode, ElvisCaptor],
	[TokenId.Ellipsis]: [EllipsisNode, EllipsisCaptor],
	// comment
	[TokenId.CommentKeyword]: [CommentKeywordNode],
	[TokenId.SingleLineCommentStartMark]: [SingleLineCommentStartMarkNode],
	[TokenId.SingleLineComment]: [SingleLineCommentNode, SingleLineCommentCaptor],
	[TokenId.MultipleLinesCommentStartMark]: [MultipleLinesCommentStartMarkNode],
	[TokenId.MultipleLinesCommentEndMark]: [MultipleLinesCommentEndMarkNode],
	[TokenId.MultipleLinesComment]: [MultipleLinesCommentNode, MultipleLinesCommentCaptor],
	// shebang command
	[TokenId.ScriptCommandStartMark]: [ScriptCommandStartMarkNode],
	[TokenId.ScriptCommand]: [ScriptCommandNode, ScriptCommandCaptor],
	// text content
	[TokenId.Whitespaces]: [WhitespacesNode, WhitespacesCaptor],
	[TokenId.Tabs]: [TabsNode, TabsCaptor],
	[TokenId.NewLine]: [NewLineNode, NewLineWithSingleCarriageReturnCaptor, NewLineWithSingleNewLineCaptor, NewLineWith2CharsCaptor],
	[TokenId.Chars]: [CharsNode],
	[TokenId.Identifier]: [IdentifierNode, IdentifierCaptor],
	[TokenId.UndeterminedChars]: [UndeterminedCharsNode, UndeterminedCharsCaptor],
	[TokenId.UnexpectedChars]: [UnexpectedCharsNode],
	// statements
	[TokenId.PackageDeclaration]: [PackageDeclarationNode, PackageDeclarationCaptor],
	[TokenId.ImportDeclaration]: [ImportDeclarationNode, ImportDeclarationCaptor],
	[TokenId.ImportAllMark]: [ImportAllMarkNode],
	[TokenId.InterfaceDeclaration]: [InterfaceDeclarationNode, InterfaceDeclarationCaptor],
	[TokenId.ClassDeclaration]: [ClassDeclarationNode, ClassDeclarationCaptor],
	[TokenId.AtInterfaceClassDeclaration]: [AtInterfaceDeclarationNode, AtInterfaceDeclarationCaptor],
	[TokenId.EnumClassDeclaration]: [EnumClassDeclarationNode, EnumClassDeclarationCaptor],
	[TokenId.RecordClassDeclaration]: [RecordClassDeclarationNode, RecordClassDeclarationCaptor],
	[TokenId.TraitClassDeclaration]: [TraitClassDeclarationNode, TraitClassDeclarationCaptor],
	[TokenId.StaticBlockDeclaration]: [StaticBlockDeclarationNode],
	[TokenId.AnnotationDeclaration]: [AnnotationDeclarationNode]
} as const;
