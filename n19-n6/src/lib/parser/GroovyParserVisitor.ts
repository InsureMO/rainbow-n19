// Generated from grammar/GroovyParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';
import {
	AdditiveExprAltContext,
	AndExprAltContext,
	AnnotatedQualifiedClassNameContext,
	AnnotationContext,
	AnnotationNameContext,
	AnnotationsOptContext,
	AnonymousInnerClassDeclarationContext,
	ArgumentListContext,
	ArgumentListElementContext,
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
	CastOperandExpressionContext,
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
	CommandPrimaryContext,
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
	ExpressionInParContext,
	ExpressionListContext,
	ExpressionListElementContext,
	ExpressionStmtAltContext,
	FieldDeclarationContext,
	FinallyBlockContext,
	FirstArgumentListElementContext,
	FloatingPointLiteralAltContext,
	ForControlContext,
	ForInitContext,
	FormalParameterContext,
	FormalParameterListContext,
	FormalParametersContext,
	ForStmtAltContext,
	ForUpdateContext,
	GeneralClassOrInterfaceTypeContext,
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
	LambdaExpressionContext,
	LambdaParametersContext,
	ListContext,
	ListPrmrAltContext,
	LiteralPrmrAltContext,
	LocalVariableDeclarationContext,
	LocalVariableDeclarationStmtAltContext,
	LogicalAndExprAltContext,
	LogicalOrExprAltContext,
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
	NamedArgContext,
	NamedArgLabelContext,
	NamedArgPrimaryContext,
	NamedPropertyArgContext,
	NamedPropertyArgLabelContext,
	NamedPropertyArgListContext,
	NamedPropertyArgPrimaryContext,
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
	StandardClassOrInterfaceTypeContext,
	StandardLambdaExpressionContext,
	StandardLambdaParametersContext,
	StandardTypeContext,
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
} from './GroovyParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GroovyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GroovyParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `GroovyParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.scriptStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatements?: (ctx: ScriptStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.scriptStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatement?: (ctx: ScriptStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.modifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersOpt?: (ctx: ModifiersOptContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableInitializers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializers?: (ctx: VariableInitializersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.emptyDims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDims?: (ctx: EmptyDimsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.standardType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardType?: (ctx: StandardTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.generalClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralClassOrInterfaceType?: (ctx: GeneralClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.standardClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardClassOrInterfaceType?: (ctx: StandardClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisFormalParameter?: (ctx: ThisFormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassName?: (ctx: QualifiedClassNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => Result;
	/**
	 * Visit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralAlt?: (ctx: StringLiteralAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteralAlt?: (ctx: NullLiteralAltContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.gstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstring?: (ctx: GstringContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.gstringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringValue?: (ctx: GstringValueContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.gstringPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPath?: (ctx: GstringPathContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.closure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure?: (ctx: ClosureContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.annotationsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationsOpt?: (ctx: AnnotationsOptContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.elementValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValues?: (ctx: ElementValuesContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.elementValuePairName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairName?: (ctx: ElementValuePairNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeNamePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePairs?: (ctx: TypeNamePairsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePair?: (ctx: TypeNamePairContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.variableNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableNames?: (ctx: VariableNamesContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStatement?: (ctx: IfElseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmtAlt?: (ctx: ForStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmtAlt?: (ctx: WhileStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStatement?: (ctx: TryCatchStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmtAlt?: (ctx: BlockStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStmtAlt?: (ctx: LoopStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmtAlt?: (ctx: BreakStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStmtAlt?: (ctx: YieldStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStmtAlt?: (ctx: AssertStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.classicalForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassicalForControl?: (ctx: ClassicalForControlContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.castParExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastParExpression?: (ctx: CastParExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.expressionInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionInPar?: (ctx: ExpressionInParContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.expressionListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionListElement?: (ctx: ExpressionListElementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `GroovyParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExprAlt?: (ctx: CommandExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.switchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpression?: (ctx: SwitchExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => Result;
	/**
	 * Visit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExprAlt?: (ctx: PostfixExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExprAlt?: (ctx: ShiftExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExprAlt?: (ctx: CastExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExprAlt?: (ctx: SwitchExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexExprAlt?: (ctx: RegexExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExprAlt?: (ctx: PowerExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExprAlt?: (ctx: RelationalExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExprAlt?: (ctx: EqualityExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExprAlt?: (ctx: AndExprAltContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastOperandExpression?: (ctx: CastOperandExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.commandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExpression?: (ctx: CommandExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.commandArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandArgument?: (ctx: CommandArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.pathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExpression?: (ctx: PathExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamePart?: (ctx: NamePartContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicMemberName?: (ctx: DynamicMemberNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => Result;
	/**
	 * Visit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewPrmrAlt?: (ctx: NewPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPrmrAlt?: (ctx: ListPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPrmrAlt?: (ctx: MapPrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgPrimary?: (ctx: NamedPropertyArgPrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgPrimary?: (ctx: NamedArgPrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandPrimary?: (ctx: CommandPrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.mapEntryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryList?: (ctx: MapEntryListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedPropertyArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgList?: (ctx: NamedPropertyArgListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.mapEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntry?: (ctx: MapEntryContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedPropertyArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArg?: (ctx: NamedPropertyArgContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArg?: (ctx: NamedArgContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryLabel?: (ctx: MapEntryLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedPropertyArgLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgLabel?: (ctx: NamedPropertyArgLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.namedArgLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgLabel?: (ctx: NamedArgLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.dim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDim?: (ctx: DimContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.firstArgumentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstArgumentListElement?: (ctx: FirstArgumentListElementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.argumentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentListElement?: (ctx: ArgumentListElementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.rparen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRparen?: (ctx: RparenContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.nls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNls?: (ctx: NlsContext) => Result;
	/**
	 * Visit a parse tree produced by `GroovyParser.sep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSep?: (ctx: SepContext) => Result;
}

