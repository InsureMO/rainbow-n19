import {ParseTreeVisitor} from 'antlr4';
import {
	AdditiveExprAltContext,
	AndExprAltContext,
	AnnotatedQualifiedClassNameContext,
	AnnotationContext,
	AnnotationNameContext,
	AnnotationsOptContext,
	AnonymousInnerClassDeclarationContext,
	ArgumentsContext,
	ArrayInitializerContext,
	AssertStatementContext,
	AssertStmtAltContext,
	AssignmentExprAltContext,
	BlockContext,
	BlockStatementContext,
	BlockStatementsContext,
	BlockStatementsOptContext,
	BlockStmtAltContext,
	BooleanLiteralAltContext,
	BreakStatementContext,
	BreakStmtAltContext,
	BuiltInTypeContext,
	BuiltInTypePrmrAltContext,
	CastExprAltContext,
	CastParExpressionContext,
	CatchClauseContext,
	CatchTypeContext,
	ClassBodyContext,
	ClassBodyDeclarationContext,
	ClassDeclarationContext,
	ClassicalForControlContext,
	ClassNameContext,
	ClassOrInterfaceModifierContext,
	ClassOrInterfaceModifiersContext,
	ClassOrInterfaceModifiersOptContext,
	ClassOrInterfaceTypeContext,
	ClosureContext,
	ClosureOrLambdaExpressionContext,
	ClosureOrLambdaExpressionPrmrAltContext,
	CommandArgumentContext,
	CommandExprAltContext,
	CommandExpressionContext,
	CompactConstructorDeclarationContext,
	CompilationUnitContext,
	ConditionalExprAltContext,
	ConditionalStatementContext,
	ConditionalStmtAltContext,
	ContinueStatementContext,
	ContinueStmtAltContext,
	CreatedNameContext,
	CreatorContext,
	DimContext,
	DoWhileStmtAltContext,
	DynamicMemberNameContext,
	ElementValueArrayInitializerContext,
	ElementValueContext,
	ElementValuePairContext,
	ElementValuePairNameContext,
	ElementValuePairsContext,
	ElementValuesContext,
	EmptyDimsContext,
	EmptyDimsOptContext,
	EmptyStmtAltContext,
	EnhancedArgumentListElementContext,
	EnhancedArgumentListInParContext,
	EnhancedForControlContext,
	EnhancedStatementExpressionContext,
	EnumConstantContext,
	EnumConstantsContext,
	EqualityExprAltContext,
	ExclusiveOrExprAltContext,
	ExpressionContext,
	ExpressionInParContext,
	ExpressionListContext,
	ExpressionListElementContext,
	ExpressionStmtAltContext,
	FieldDeclarationContext,
	FinallyBlockContext,
	FloatingPointLiteralAltContext,
	ForControlContext,
	ForInitContext,
	FormalParameterContext,
	FormalParameterListContext,
	FormalParametersContext,
	ForStmtAltContext,
	ForUpdateContext,
	GstringContext,
	GstringPathContext,
	GstringPrmrAltContext,
	GstringValueContext,
	IdentifierContext,
	IdentifierPrmrAltContext,
	IfElseStatementContext,
	ImportDeclarationContext,
	InclusiveOrExprAltContext,
	IndexPropertyArgsContext,
	IntegerLiteralAltContext,
	KeywordsContext,
	LabeledStmtAltContext,
	LambdaBodyContext,
	ListContext,
	ListPrmrAltContext,
	LiteralContext,
	LiteralPrmrAltContext,
	LocalVariableDeclarationContext,
	LocalVariableDeclarationStmtAltContext,
	LogicalAndExprAltContext,
	LogicalOrExprAltContext,
	LoopStatementContext,
	LoopStmtAltContext,
	MapContext,
	MapEntryContext,
	MapEntryLabelContext,
	MapEntryListContext,
	MapPrmrAltContext,
	MemberDeclarationContext,
	MethodBodyContext,
	MethodDeclarationContext,
	MethodNameContext,
	ModifierContext,
	ModifiersContext,
	ModifiersOptContext,
	MultipleAssignmentExprAltContext,
	MultiplicativeExprAltContext,
	NamedPropertyArgsContext,
	NamePartContext,
	NewPrmrAltContext,
	NlsContext,
	NonWildcardTypeArgumentsContext,
	NullLiteralAltContext,
	PackageDeclarationContext,
	ParenPrmrAltContext,
	ParExpressionContext,
	PathElementContext,
	PathExpressionContext,
	PostfixExprAltContext,
	PostfixExpressionContext,
	PowerExprAltContext,
	PrimaryContext,
	PrimitiveTypeContext,
	QualifiedClassNameContext,
	QualifiedClassNameListContext,
	QualifiedNameContext,
	QualifiedNameElementContext,
	QualifiedNameElementsContext,
	QualifiedStandardClassNameContext,
	RegexExprAltContext,
	RelationalExprAltContext,
	ResourceContext,
	ResourceListContext,
	ResourcesContext,
	ReturnStmtAltContext,
	ReturnTypeContext,
	RparenContext,
	ScriptStatementContext,
	ScriptStatementsContext,
	SepContext,
	ShiftExprAltContext,
	StandardLambdaExpressionContext,
	StandardLambdaParametersContext,
	StatementContext,
	StatementExpressionContext,
	StringLiteralAltContext,
	StringLiteralContext,
	SuperPrmrAltContext,
	SwitchBlockStatementExpressionGroupContext,
	SwitchBlockStatementGroupContext,
	SwitchExprAltContext,
	SwitchExpressionContext,
	SwitchExpressionLabelContext,
	SwitchLabelContext,
	SwitchStatementContext,
	SynchronizedStmtAltContext,
	ThisFormalParameterContext,
	ThisPrmrAltContext,
	ThrowStmtAltContext,
	TryCatchStatementContext,
	TryCatchStmtAltContext,
	TypeArgumentContext,
	TypeArgumentsContext,
	TypeArgumentsOrDiamondContext,
	TypeBoundContext,
	TypeContext,
	TypeDeclarationContext,
	TypeListContext,
	TypeNamePairContext,
	TypeNamePairsContext,
	TypeParameterContext,
	TypeParametersContext,
	UnaryAddExprAltContext,
	UnaryNotExprAltContext,
	VariableDeclarationContext,
	VariableDeclaratorContext,
	VariableDeclaratorIdContext,
	VariableDeclaratorsContext,
	VariableInitializerContext,
	VariableInitializersContext,
	VariableModifierContext,
	VariableModifiersContext,
	VariableModifiersOptContext,
	VariableNamesContext,
	WhileStmtAltContext,
	YieldStatementContext,
	YieldStmtAltContext
} from './ParserContexts';

export class GroovyParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitIdentifierPrmrAlt(ctx: IdentifierPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLiteralPrmrAlt(ctx: LiteralPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitGstringPrmrAlt(ctx: GstringPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitNewPrmrAlt(ctx: NewPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitThisPrmrAlt(ctx: ThisPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSuperPrmrAlt(ctx: SuperPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitParenPrmrAlt(ctx: ParenPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClosureOrLambdaExpressionPrmrAlt(ctx: ClosureOrLambdaExpressionPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitListPrmrAlt(ctx: ListPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMapPrmrAlt(ctx: MapPrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBuiltInTypePrmrAlt(ctx: BuiltInTypePrmrAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitIntegerLiteralAlt(ctx: IntegerLiteralAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitFloatingPointLiteralAlt(ctx: FloatingPointLiteralAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitStringLiteralAlt(ctx: StringLiteralAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBooleanLiteralAlt(ctx: BooleanLiteralAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitNullLiteralAlt(ctx: NullLiteralAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCastExprAlt(ctx: CastExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPostfixExprAlt(ctx: PostfixExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchExprAlt(ctx: SwitchExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitUnaryNotExprAlt(ctx: UnaryNotExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPowerExprAlt(ctx: PowerExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitUnaryAddExprAlt(ctx: UnaryAddExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMultiplicativeExprAlt(ctx: MultiplicativeExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAdditiveExprAlt(ctx: AdditiveExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitShiftExprAlt(ctx: ShiftExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitRelationalExprAlt(ctx: RelationalExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEqualityExprAlt(ctx: EqualityExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitRegexExprAlt(ctx: RegexExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAndExprAlt(ctx: AndExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitExclusiveOrExprAlt(ctx: ExclusiveOrExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitInclusiveOrExprAlt(ctx: InclusiveOrExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLogicalAndExprAlt(ctx: LogicalAndExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLogicalOrExprAlt(ctx: LogicalOrExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitConditionalExprAlt(ctx: ConditionalExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMultipleAssignmentExprAlt(ctx: MultipleAssignmentExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAssignmentExprAlt(ctx: AssignmentExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBlockStmtAlt(ctx: BlockStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitConditionalStmtAlt(ctx: ConditionalStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLoopStmtAlt(ctx: LoopStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTryCatchStmtAlt(ctx: TryCatchStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSynchronizedStmtAlt(ctx: SynchronizedStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitReturnStmtAlt(ctx: ReturnStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitThrowStmtAlt(ctx: ThrowStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBreakStmtAlt(ctx: BreakStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitContinueStmtAlt(ctx: ContinueStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitYieldStmtAlt(ctx: YieldStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLabeledStmtAlt(ctx: LabeledStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAssertStmtAlt(ctx: AssertStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLocalVariableDeclarationStmtAlt(ctx: LocalVariableDeclarationStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitExpressionStmtAlt(ctx: ExpressionStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEmptyStmtAlt(ctx: EmptyStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCommandExprAlt(ctx: CommandExprAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitForStmtAlt(ctx: ForStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitWhileStmtAlt(ctx: WhileStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitDoWhileStmtAlt(ctx: DoWhileStmtAltContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCompilationUnit(ctx: CompilationUnitContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitScriptStatements(ctx: ScriptStatementsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitScriptStatement(ctx: ScriptStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPackageDeclaration(ctx: PackageDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitImportDeclaration(ctx: ImportDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeDeclaration(ctx: TypeDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitModifier(ctx: ModifierContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitModifiersOpt(ctx: ModifiersOptContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitModifiers(ctx: ModifiersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassOrInterfaceModifiersOpt(ctx: ClassOrInterfaceModifiersOptContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassOrInterfaceModifiers(ctx: ClassOrInterfaceModifiersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassOrInterfaceModifier(ctx: ClassOrInterfaceModifierContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableModifier(ctx: VariableModifierContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableModifiersOpt(ctx: VariableModifiersOptContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableModifiers(ctx: VariableModifiersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeParameters(ctx: TypeParametersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeParameter(ctx: TypeParameterContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeBound(ctx: TypeBoundContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeList(ctx: TypeListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassDeclaration(ctx: ClassDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassBody(ctx: ClassBodyContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEnumConstants(ctx: EnumConstantsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEnumConstant(ctx: EnumConstantContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassBodyDeclaration(ctx: ClassBodyDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMemberDeclaration(ctx: MemberDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMethodDeclaration(ctx: MethodDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCompactConstructorDeclaration(ctx: CompactConstructorDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMethodName(ctx: MethodNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitReturnType(ctx: ReturnTypeContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitFieldDeclaration(ctx: FieldDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableDeclarators(ctx: VariableDeclaratorsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableDeclarator(ctx: VariableDeclaratorContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableDeclaratorId(ctx: VariableDeclaratorIdContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableInitializer(ctx: VariableInitializerContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableInitializers(ctx: VariableInitializersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEmptyDims(ctx: EmptyDimsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEmptyDimsOpt(ctx: EmptyDimsOptContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitType(ctx: TypeContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassOrInterfaceType(ctx: ClassOrInterfaceTypeContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPrimitiveType(ctx: PrimitiveTypeContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeArguments(ctx: TypeArgumentsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeArgument(ctx: TypeArgumentContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAnnotatedQualifiedClassName(ctx: AnnotatedQualifiedClassNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitQualifiedClassNameList(ctx: QualifiedClassNameListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitFormalParameters(ctx: FormalParametersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitFormalParameterList(ctx: FormalParameterListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitThisFormalParameter(ctx: ThisFormalParameterContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitFormalParameter(ctx: FormalParameterContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMethodBody(ctx: MethodBodyContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitQualifiedName(ctx: QualifiedNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitQualifiedNameElement(ctx: QualifiedNameElementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitQualifiedNameElements(ctx: QualifiedNameElementsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitQualifiedClassName(ctx: QualifiedClassNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitQualifiedStandardClassName(ctx: QualifiedStandardClassNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLiteral(ctx: LiteralContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitGstring(ctx: GstringContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitGstringValue(ctx: GstringValueContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitGstringPath(ctx: GstringPathContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitStandardLambdaExpression(ctx: StandardLambdaExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitStandardLambdaParameters(ctx: StandardLambdaParametersContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLambdaBody(ctx: LambdaBodyContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClosure(ctx: ClosureContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClosureOrLambdaExpression(ctx: ClosureOrLambdaExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBlockStatementsOpt(ctx: BlockStatementsOptContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBlockStatements(ctx: BlockStatementsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAnnotationsOpt(ctx: AnnotationsOptContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAnnotation(ctx: AnnotationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitElementValues(ctx: ElementValuesContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAnnotationName(ctx: AnnotationNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitElementValuePairs(ctx: ElementValuePairsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitElementValuePair(ctx: ElementValuePairContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitElementValuePairName(ctx: ElementValuePairNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitElementValue(ctx: ElementValueContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitElementValueArrayInitializer(ctx: ElementValueArrayInitializerContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBlock(ctx: BlockContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBlockStatement(ctx: BlockStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLocalVariableDeclaration(ctx: LocalVariableDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableDeclaration(ctx: VariableDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeNamePairs(ctx: TypeNamePairsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeNamePair(ctx: TypeNamePairContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitVariableNames(ctx: VariableNamesContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitConditionalStatement(ctx: ConditionalStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitIfElseStatement(ctx: IfElseStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchStatement(ctx: SwitchStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitLoopStatement(ctx: LoopStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitContinueStatement(ctx: ContinueStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBreakStatement(ctx: BreakStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitYieldStatement(ctx: YieldStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTryCatchStatement(ctx: TryCatchStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAssertStatement(ctx: AssertStatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitStatement(ctx: StatementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCatchClause(ctx: CatchClauseContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCatchType(ctx: CatchTypeContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitFinallyBlock(ctx: FinallyBlockContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitResources(ctx: ResourcesContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitResourceList(ctx: ResourceListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitResource(ctx: ResourceContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchBlockStatementGroup(ctx: SwitchBlockStatementGroupContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchLabel(ctx: SwitchLabelContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitForControl(ctx: ForControlContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEnhancedForControl(ctx: EnhancedForControlContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassicalForControl(ctx: ClassicalForControlContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitForInit(ctx: ForInitContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitForUpdate(ctx: ForUpdateContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCastParExpression(ctx: CastParExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitParExpression(ctx: ParExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitExpressionInPar(ctx: ExpressionInParContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitExpressionList(ctx: ExpressionListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitExpressionListElement(ctx: ExpressionListElementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEnhancedStatementExpression(ctx: EnhancedStatementExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitStatementExpression(ctx: StatementExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPostfixExpression(ctx: PostfixExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchExpression(ctx: SwitchExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchBlockStatementExpressionGroup(ctx: SwitchBlockStatementExpressionGroupContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSwitchExpressionLabel(ctx: SwitchExpressionLabelContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitExpression(ctx: ExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCommandExpression(ctx: CommandExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCommandArgument(ctx: CommandArgumentContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPathExpression(ctx: PathExpressionContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPathElement(ctx: PathElementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitNamePart(ctx: NamePartContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitDynamicMemberName(ctx: DynamicMemberNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitIndexPropertyArgs(ctx: IndexPropertyArgsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitNamedPropertyArgs(ctx: NamedPropertyArgsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitPrimary(ctx: PrimaryContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitList(ctx: ListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMap(ctx: MapContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMapEntryList(ctx: MapEntryListContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMapEntry(ctx: MapEntryContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitMapEntryLabel(ctx: MapEntryLabelContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCreator(ctx: CreatorContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitDim(ctx: DimContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitArrayInitializer(ctx: ArrayInitializerContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitAnonymousInnerClassDeclaration(ctx: AnonymousInnerClassDeclarationContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitCreatedName(ctx: CreatedNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitNonWildcardTypeArguments(ctx: NonWildcardTypeArgumentsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitTypeArgumentsOrDiamond(ctx: TypeArgumentsOrDiamondContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitArguments(ctx: ArgumentsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEnhancedArgumentListInPar(ctx: EnhancedArgumentListInParContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitEnhancedArgumentListElement(ctx: EnhancedArgumentListElementContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitStringLiteral(ctx: StringLiteralContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitClassName(ctx: ClassNameContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitIdentifier(ctx: IdentifierContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitBuiltInType(ctx: BuiltInTypeContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitKeywords(ctx: KeywordsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitRparen(ctx: RparenContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitNls(ctx: NlsContext): Result {
		return this.visitChildren(ctx);
	}

	/**
	 * <p>The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.</p>
	 */
	visitSep(ctx: SepContext): Result {
		return this.visitChildren(ctx);
	}
}
