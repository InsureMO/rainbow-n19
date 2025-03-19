// Generated from grammar/GroovyParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from 'antlr4';
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
 * This interface defines a complete listener for a parse tree produced by
 * `GroovyParser`.
 */
export class GroovyParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `GroovyParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.scriptStatements`.
	 * @param ctx the parse tree
	 */
	enterScriptStatements?: (ctx: ScriptStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.scriptStatements`.
	 * @param ctx the parse tree
	 */
	exitScriptStatements?: (ctx: ScriptStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.scriptStatement`.
	 * @param ctx the parse tree
	 */
	enterScriptStatement?: (ctx: ScriptStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.scriptStatement`.
	 * @param ctx the parse tree
	 */
	exitScriptStatement?: (ctx: ScriptStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.modifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterModifiersOpt?: (ctx: ModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.modifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitModifiersOpt?: (ctx: ModifiersOptContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.modifiers`.
	 * @param ctx the parse tree
	 */
	enterModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.modifiers`.
	 * @param ctx the parse tree
	 */
	exitModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	enterVariableModifiers?: (ctx: VariableModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableModifiers`.
	 * @param ctx the parse tree
	 */
	exitVariableModifiers?: (ctx: VariableModifiersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableInitializers`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializers?: (ctx: VariableInitializersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableInitializers`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializers?: (ctx: VariableInitializersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.emptyDims`.
	 * @param ctx the parse tree
	 */
	enterEmptyDims?: (ctx: EmptyDimsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.emptyDims`.
	 * @param ctx the parse tree
	 */
	exitEmptyDims?: (ctx: EmptyDimsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 */
	enterEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 */
	exitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.standardType`.
	 * @param ctx the parse tree
	 */
	enterStandardType?: (ctx: StandardTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.standardType`.
	 * @param ctx the parse tree
	 */
	exitStandardType?: (ctx: StandardTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.generalClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterGeneralClassOrInterfaceType?: (ctx: GeneralClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.generalClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitGeneralClassOrInterfaceType?: (ctx: GeneralClassOrInterfaceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.standardClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterStandardClassOrInterfaceType?: (ctx: StandardClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.standardClassOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitStandardClassOrInterfaceType?: (ctx: StandardClassOrInterfaceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 */
	enterAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 */
	exitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterThisFormalParameter?: (ctx: ThisFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitThisFormalParameter?: (ctx: ThisFormalParameterContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameElement?: (ctx: QualifiedNameElementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedClassName?: (ctx: QualifiedClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedClassName?: (ctx: QualifiedClassNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => void;
	/**
	 * Enter a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => void;
	/**
	 * Enter a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	enterFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	exitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => void;
	/**
	 * Enter a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralAlt?: (ctx: StringLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralAlt?: (ctx: StringLiteralAltContext) => void;
	/**
	 * Enter a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => void;
	/**
	 * Enter a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNullLiteralAlt?: (ctx: NullLiteralAltContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNullLiteralAlt?: (ctx: NullLiteralAltContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.gstring`.
	 * @param ctx the parse tree
	 */
	enterGstring?: (ctx: GstringContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.gstring`.
	 * @param ctx the parse tree
	 */
	exitGstring?: (ctx: GstringContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.gstringValue`.
	 * @param ctx the parse tree
	 */
	enterGstringValue?: (ctx: GstringValueContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.gstringValue`.
	 * @param ctx the parse tree
	 */
	exitGstringValue?: (ctx: GstringValueContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.gstringPath`.
	 * @param ctx the parse tree
	 */
	enterGstringPath?: (ctx: GstringPathContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.gstringPath`.
	 * @param ctx the parse tree
	 */
	exitGstringPath?: (ctx: GstringPathContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	enterLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.lambdaBody`.
	 * @param ctx the parse tree
	 */
	exitLambdaBody?: (ctx: LambdaBodyContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.closure`.
	 * @param ctx the parse tree
	 */
	enterClosure?: (ctx: ClosureContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.closure`.
	 * @param ctx the parse tree
	 */
	exitClosure?: (ctx: ClosureContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 */
	enterBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 */
	exitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	enterBlockStatements?: (ctx: BlockStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.blockStatements`.
	 * @param ctx the parse tree
	 */
	exitBlockStatements?: (ctx: BlockStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.annotationsOpt`.
	 * @param ctx the parse tree
	 */
	enterAnnotationsOpt?: (ctx: AnnotationsOptContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.annotationsOpt`.
	 * @param ctx the parse tree
	 */
	exitAnnotationsOpt?: (ctx: AnnotationsOptContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.elementValues`.
	 * @param ctx the parse tree
	 */
	enterElementValues?: (ctx: ElementValuesContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.elementValues`.
	 * @param ctx the parse tree
	 */
	exitElementValues?: (ctx: ElementValuesContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.annotationName`.
	 * @param ctx the parse tree
	 */
	enterAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.annotationName`.
	 * @param ctx the parse tree
	 */
	exitAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.elementValuePairName`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairName?: (ctx: ElementValuePairNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.elementValuePairName`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairName?: (ctx: ElementValuePairNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeNamePairs`.
	 * @param ctx the parse tree
	 */
	enterTypeNamePairs?: (ctx: TypeNamePairsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeNamePairs`.
	 * @param ctx the parse tree
	 */
	exitTypeNamePairs?: (ctx: TypeNamePairsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeNamePair`.
	 * @param ctx the parse tree
	 */
	enterTypeNamePair?: (ctx: TypeNamePairContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeNamePair`.
	 * @param ctx the parse tree
	 */
	exitTypeNamePair?: (ctx: TypeNamePairContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.variableNames`.
	 * @param ctx the parse tree
	 */
	enterVariableNames?: (ctx: VariableNamesContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.variableNames`.
	 * @param ctx the parse tree
	 */
	exitVariableNames?: (ctx: VariableNamesContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	enterIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.ifElseStatement`.
	 * @param ctx the parse tree
	 */
	exitIfElseStatement?: (ctx: IfElseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterForStmtAlt?: (ctx: ForStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitForStmtAlt?: (ctx: ForStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStmtAlt?: (ctx: WhileStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStmtAlt?: (ctx: WhileStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.yieldStatement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStatement?: (ctx: TryCatchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStatement?: (ctx: TryCatchStatementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	enterAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.assertStatement`.
	 * @param ctx the parse tree
	 */
	exitAssertStatement?: (ctx: AssertStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBlockStmtAlt?: (ctx: BlockStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBlockStmtAlt?: (ctx: BlockStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLoopStmtAlt?: (ctx: LoopStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLoopStmtAlt?: (ctx: LoopStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterReturnStmtAlt?: (ctx: ReturnStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterThrowStmtAlt?: (ctx: ThrowStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBreakStmtAlt?: (ctx: BreakStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBreakStmtAlt?: (ctx: BreakStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterContinueStmtAlt?: (ctx: ContinueStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterYieldStmtAlt?: (ctx: YieldStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitYieldStmtAlt?: (ctx: YieldStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterAssertStmtAlt?: (ctx: AssertStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitAssertStmtAlt?: (ctx: AssertStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.classicalForControl`.
	 * @param ctx the parse tree
	 */
	enterClassicalForControl?: (ctx: ClassicalForControlContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.classicalForControl`.
	 * @param ctx the parse tree
	 */
	exitClassicalForControl?: (ctx: ClassicalForControlContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.castParExpression`.
	 * @param ctx the parse tree
	 */
	enterCastParExpression?: (ctx: CastParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.castParExpression`.
	 * @param ctx the parse tree
	 */
	exitCastParExpression?: (ctx: CastParExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.expressionInPar`.
	 * @param ctx the parse tree
	 */
	enterExpressionInPar?: (ctx: ExpressionInParContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.expressionInPar`.
	 * @param ctx the parse tree
	 */
	exitExpressionInPar?: (ctx: ExpressionInParContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.expressionListElement`.
	 * @param ctx the parse tree
	 */
	enterExpressionListElement?: (ctx: ExpressionListElementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.expressionListElement`.
	 * @param ctx the parse tree
	 */
	exitExpressionListElement?: (ctx: ExpressionListElementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 */
	enterEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 */
	exitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `GroovyParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterCommandExprAlt?: (ctx: CommandExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `GroovyParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitCommandExprAlt?: (ctx: CommandExprAltContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpression?: (ctx: SwitchExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.switchExpression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpression?: (ctx: SwitchExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => void;
	/**
	 * Enter a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExprAlt?: (ctx: PostfixExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExprAlt?: (ctx: PostfixExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftExprAlt?: (ctx: ShiftExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftExprAlt?: (ctx: ShiftExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `castExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExprAlt?: (ctx: CastExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExprAlt?: (ctx: CastExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSwitchExprAlt?: (ctx: SwitchExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSwitchExprAlt?: (ctx: SwitchExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRegexExprAlt?: (ctx: RegexExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRegexExprAlt?: (ctx: RegexExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExprAlt?: (ctx: ConditionalExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExprAlt?: (ctx: PowerExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExprAlt?: (ctx: PowerExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExprAlt?: (ctx: RelationalExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExprAlt?: (ctx: RelationalExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExprAlt?: (ctx: EqualityExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExprAlt?: (ctx: EqualityExprAltContext) => void;
	/**
	 * Enter a parse tree produced by the `andExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExprAlt?: (ctx: AndExprAltContext) => void;
	/**
	 * Exit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExprAlt?: (ctx: AndExprAltContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	enterCastOperandExpression?: (ctx: CastOperandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 */
	exitCastOperandExpression?: (ctx: CastOperandExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.commandExpression`.
	 * @param ctx the parse tree
	 */
	enterCommandExpression?: (ctx: CommandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.commandExpression`.
	 * @param ctx the parse tree
	 */
	exitCommandExpression?: (ctx: CommandExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.commandArgument`.
	 * @param ctx the parse tree
	 */
	enterCommandArgument?: (ctx: CommandArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.commandArgument`.
	 * @param ctx the parse tree
	 */
	exitCommandArgument?: (ctx: CommandArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.pathExpression`.
	 * @param ctx the parse tree
	 */
	enterPathExpression?: (ctx: PathExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.pathExpression`.
	 * @param ctx the parse tree
	 */
	exitPathExpression?: (ctx: PathExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.pathElement`.
	 * @param ctx the parse tree
	 */
	enterPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.pathElement`.
	 * @param ctx the parse tree
	 */
	exitPathElement?: (ctx: PathElementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namePart`.
	 * @param ctx the parse tree
	 */
	enterNamePart?: (ctx: NamePartContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namePart`.
	 * @param ctx the parse tree
	 */
	exitNamePart?: (ctx: NamePartContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 */
	enterDynamicMemberName?: (ctx: DynamicMemberNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 */
	exitDynamicMemberName?: (ctx: DynamicMemberNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 */
	enterIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 */
	exitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => void;
	/**
	 * Enter a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterNewPrmrAlt?: (ctx: NewPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitNewPrmrAlt?: (ctx: NewPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterThisPrmrAlt?: (ctx: ThisPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterParenPrmrAlt?: (ctx: ParenPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterListPrmrAlt?: (ctx: ListPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitListPrmrAlt?: (ctx: ListPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterMapPrmrAlt?: (ctx: MapPrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitMapPrmrAlt?: (ctx: MapPrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	enterBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => void;
	/**
	 * Exit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 */
	exitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArgPrimary?: (ctx: NamedPropertyArgPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArgPrimary?: (ctx: NamedPropertyArgPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedArgPrimary`.
	 * @param ctx the parse tree
	 */
	enterNamedArgPrimary?: (ctx: NamedArgPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedArgPrimary`.
	 * @param ctx the parse tree
	 */
	exitNamedArgPrimary?: (ctx: NamedArgPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	enterCommandPrimary?: (ctx: CommandPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.commandPrimary`.
	 * @param ctx the parse tree
	 */
	exitCommandPrimary?: (ctx: CommandPrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.mapEntryList`.
	 * @param ctx the parse tree
	 */
	enterMapEntryList?: (ctx: MapEntryListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.mapEntryList`.
	 * @param ctx the parse tree
	 */
	exitMapEntryList?: (ctx: MapEntryListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedPropertyArgList`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArgList?: (ctx: NamedPropertyArgListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedPropertyArgList`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArgList?: (ctx: NamedPropertyArgListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	enterMapEntry?: (ctx: MapEntryContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	exitMapEntry?: (ctx: MapEntryContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedPropertyArg`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArg?: (ctx: NamedPropertyArgContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedPropertyArg`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArg?: (ctx: NamedPropertyArgContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedArg`.
	 * @param ctx the parse tree
	 */
	enterNamedArg?: (ctx: NamedArgContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedArg`.
	 * @param ctx the parse tree
	 */
	exitNamedArg?: (ctx: NamedArgContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 */
	enterMapEntryLabel?: (ctx: MapEntryLabelContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 */
	exitMapEntryLabel?: (ctx: MapEntryLabelContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedPropertyArgLabel`.
	 * @param ctx the parse tree
	 */
	enterNamedPropertyArgLabel?: (ctx: NamedPropertyArgLabelContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedPropertyArgLabel`.
	 * @param ctx the parse tree
	 */
	exitNamedPropertyArgLabel?: (ctx: NamedPropertyArgLabelContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.namedArgLabel`.
	 * @param ctx the parse tree
	 */
	enterNamedArgLabel?: (ctx: NamedArgLabelContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.namedArgLabel`.
	 * @param ctx the parse tree
	 */
	exitNamedArgLabel?: (ctx: NamedArgLabelContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.dim`.
	 * @param ctx the parse tree
	 */
	enterDim?: (ctx: DimContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.dim`.
	 * @param ctx the parse tree
	 */
	exitDim?: (ctx: DimContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 */
	enterEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 */
	exitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.firstArgumentListElement`.
	 * @param ctx the parse tree
	 */
	enterFirstArgumentListElement?: (ctx: FirstArgumentListElementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.firstArgumentListElement`.
	 * @param ctx the parse tree
	 */
	exitFirstArgumentListElement?: (ctx: FirstArgumentListElementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.argumentListElement`.
	 * @param ctx the parse tree
	 */
	enterArgumentListElement?: (ctx: ArgumentListElementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.argumentListElement`.
	 * @param ctx the parse tree
	 */
	exitArgumentListElement?: (ctx: ArgumentListElementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 */
	enterEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 */
	exitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.builtInType`.
	 * @param ctx the parse tree
	 */
	enterBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.builtInType`.
	 * @param ctx the parse tree
	 */
	exitBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.keywords`.
	 * @param ctx the parse tree
	 */
	enterKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.keywords`.
	 * @param ctx the parse tree
	 */
	exitKeywords?: (ctx: KeywordsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.rparen`.
	 * @param ctx the parse tree
	 */
	enterRparen?: (ctx: RparenContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.rparen`.
	 * @param ctx the parse tree
	 */
	exitRparen?: (ctx: RparenContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.nls`.
	 * @param ctx the parse tree
	 */
	enterNls?: (ctx: NlsContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.nls`.
	 * @param ctx the parse tree
	 */
	exitNls?: (ctx: NlsContext) => void;
	/**
	 * Enter a parse tree produced by `GroovyParser.sep`.
	 * @param ctx the parse tree
	 */
	enterSep?: (ctx: SepContext) => void;
	/**
	 * Exit a parse tree produced by `GroovyParser.sep`.
	 * @param ctx the parse tree
	 */
	exitSep?: (ctx: SepContext) => void;
}

