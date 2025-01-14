import {GroovyParser, GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessor} from './PostNodeProcessor';
import {
	AnnotationsOptPostProcessor,
	ClassBodyPostProcessor,
	ClassDeclarationPostProcessor,
	ClassNamePostProcessor,
	ClassOrInterfaceModifiersOptPostProcessor,
	CompilationUnitPostProcessor,
	EmptyDimsOptPostProcessor,
	EnhancedStatementExpressionPostProcessor,
	ExpressionPostProcessor,
	GeneralClassOrInterfaceTypePostProcessor,
	IdentifierPostProcessor,
	ImportDeclarationPostProcessor,
	LiteralPostProcessor,
	ModifierPostProcessor,
	ModifiersPostProcessor,
	NlsPostProcessor,
	NoopPostNodeProcessor,
	PackageDeclarationPostProcessor,
	PathExpressionPostProcessor,
	PostfixExpressionPostProcessor,
	PrimaryPostProcessor,
	QualifiedClassNamePostProcessor,
	QualifiedNameElementPostProcessor,
	QualifiedNameElementsPostProcessor,
	QualifiedNamePostProcessor,
	ScriptStatementPostProcessor,
	ScriptStatementsPostProcessor,
	SepPostProcessor,
	StatementExpressionPostProcessor,
	StatementPostProcessor,
	TypeBoundPostProcessor,
	TypeDeclarationPostProcessor,
	TypeParameterPostProcessor,
	TypeParametersPostProcessor,
	TypePostProcessor,
	VariableDeclaratorIdPostProcessor,
	VariableDeclaratorPostProcessor,
	VariableDeclaratorsPostProcessor
} from './PostProcessor';

export class PostNodeProcessorRegistry {
	private static PROCESSORS: Map<number, PostNodeProcessor<GroovyParserRuleContext>> = new Map();
	static {
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_compilationUnit, new CompilationUnitPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_scriptStatements, new ScriptStatementsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_scriptStatement, new ScriptStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_packageDeclaration, new PackageDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_importDeclaration, new ImportDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeDeclaration, new TypeDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_modifier, new ModifierPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_modifiersOpt, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_modifiers, new ModifiersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceModifiersOpt, new ClassOrInterfaceModifiersOptPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceModifiers, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceModifier, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableModifier, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableModifiersOpt, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableModifiers, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeParameters, new TypeParametersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeParameter, new TypeParameterPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeBound, new TypeBoundPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeList, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classDeclaration, new ClassDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classBody, new ClassBodyPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enumConstants, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enumConstant, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classBodyDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_memberDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_methodDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_compactConstructorDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_methodName, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_returnType, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_fieldDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclarators, new VariableDeclaratorsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclarator, new VariableDeclaratorPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclaratorId, new VariableDeclaratorIdPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableInitializer, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableInitializers, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_emptyDims, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_emptyDimsOpt, new EmptyDimsOptPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardType, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_type, new TypePostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceType, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_generalClassOrInterfaceType, new GeneralClassOrInterfaceTypePostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardClassOrInterfaceType, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_primitiveType, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeArguments, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeArgument, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotatedQualifiedClassName, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedClassNameList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_formalParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_formalParameterList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_thisFormalParameter, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_formalParameter, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_methodBody, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedName, new QualifiedNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedNameElement, new QualifiedNameElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedNameElements, new QualifiedNameElementsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedClassName, new QualifiedClassNamePostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedStandardClassName, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_literal, new LiteralPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_gstring, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_gstringValue, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_gstringPath, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_lambdaExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardLambdaExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_lambdaParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardLambdaParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_lambdaBody, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_closure, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_closureOrLambdaExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_blockStatementsOpt, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_blockStatements, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotationsOpt, new AnnotationsOptPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotation, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValues, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotationName, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValuePairs, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValuePair, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValuePairName, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValue, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValueArrayInitializer, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_block, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_blockStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_localVariableDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeNamePairs, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeNamePair, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableNames, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_conditionalStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_ifElseStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_loopStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_continueStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_breakStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_yieldStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_tryCatchStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_assertStatement, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_statement, new StatementPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_catchClause, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_catchType, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_finallyBlock, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_resources, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_resourceList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_resource, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchBlockStatementGroup, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_forControl, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedForControl, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classicalForControl, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_forInit, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_forUpdate, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_castParExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_parExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expressionInPar, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expressionList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expressionListElement, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedStatementExpression, new EnhancedStatementExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_statementExpression, new StatementExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_postfixExpression, new PostfixExpressionPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchBlockStatementExpressionGroup, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchExpressionLabel, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expression, new ExpressionPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_castOperandExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_commandExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_commandArgument, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_pathExpression, new PathExpressionPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_pathElement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namePart, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_dynamicMemberName, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_indexPropertyArgs, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgs, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_primary, new PrimaryPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgPrimary, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedArgPrimary, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_commandPrimary, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_list, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_map, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_mapEntryList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_mapEntry, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArg, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedArg, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_mapEntryLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedArgLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_creator, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_dim, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_arrayInitializer, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_anonymousInnerClassDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_createdName, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_nonWildcardTypeArguments, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeArgumentsOrDiamond, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_arguments, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_argumentList, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedArgumentListInPar, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_firstArgumentListElement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_argumentListElement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedArgumentListElement, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_stringLiteral, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_className, new ClassNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_identifier, new IdentifierPostProcessor());
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_builtInType, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_keywords, ParsedNodeVisitor.notRequireToAtomicList);
		// PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_rparen, ParsedNodeVisitor.notRequireToAtomicList);
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_nls, new NlsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_sep, new SepPostProcessor());

	}
	private static NOOP_PROCESSOR = new NoopPostNodeProcessor();

	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static getProcessor(ruleIndex: number) {
		return PostNodeProcessorRegistry.PROCESSORS.get(ruleIndex) ?? PostNodeProcessorRegistry.NOOP_PROCESSOR;
	}
}