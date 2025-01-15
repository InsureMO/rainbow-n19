import {GroovyParser, GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessor} from './PostNodeProcessor';
import * as PostProcessors from './PostProcessors';

export class PostNodeProcessorRegistry {
	private static PROCESSORS: Map<number, PostNodeProcessor<GroovyParserRuleContext>> = new Map();
	static {
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_compilationUnit, new PostProcessors.CompilationUnitPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_scriptStatements, new PostProcessors.ScriptStatementsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_scriptStatement, new PostProcessors.ScriptStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_packageDeclaration, new PostProcessors.PackageDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_importDeclaration, new PostProcessors.ImportDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeDeclaration, new PostProcessors.TypeDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_modifier, new PostProcessors.ModifierPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_modifiersOpt, new PostProcessors.ModifiersOptPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_modifiers, new PostProcessors.ModifiersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceModifiersOpt, new PostProcessors.ClassOrInterfaceModifiersOptPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceModifiers, new PostProcessors.ClassOrInterfaceModifiersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceModifier, new PostProcessors.ClassOrInterfaceModifierPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableModifier, new PostProcessors.VariableModifierPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableModifiersOpt, new PostProcessors.VariableModifiersOptPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableModifiers, new PostProcessors.VariableModifiersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeParameters, new PostProcessors.TypeParametersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeParameter, new PostProcessors.TypeParameterPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeBound, new PostProcessors.TypeBoundPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeList, new PostProcessors.TypeListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classDeclaration, new PostProcessors.ClassDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classBody, new PostProcessors.ClassBodyPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enumConstants, new PostProcessors.EnumConstantsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enumConstant, new PostProcessors.EnumConstantPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classBodyDeclaration, new PostProcessors.ClassBodyDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_memberDeclaration, new PostProcessors.MemberDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_methodDeclaration, new PostProcessors.MethodDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_compactConstructorDeclaration, new PostProcessors.CompactConstructorDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_methodName, new PostProcessors.MethodNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_returnType, new PostProcessors.ReturnTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_fieldDeclaration, new PostProcessors.FieldDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclarators, new PostProcessors.VariableDeclaratorsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclarator, new PostProcessors.VariableDeclaratorPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclaratorId, new PostProcessors.VariableDeclaratorIdPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableInitializer, new PostProcessors.VariableInitializerPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableInitializers, new PostProcessors.VariableInitializersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_emptyDims, new PostProcessors.EmptyDimsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_emptyDimsOpt, new PostProcessors.EmptyDimsOptPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardType, new PostProcessors.StandardTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_type, new PostProcessors.TypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classOrInterfaceType, new PostProcessors.ClassOrInterfaceTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_generalClassOrInterfaceType, new PostProcessors.GeneralClassOrInterfaceTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardClassOrInterfaceType, new PostProcessors.StandardClassOrInterfaceTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_primitiveType, new PostProcessors.PrimitiveTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeArguments, new PostProcessors.TypeArgumentsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeArgument, new PostProcessors.TypeArgumentPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotatedQualifiedClassName, new PostProcessors.AnnotatedQualifiedClassNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedClassNameList, new PostProcessors.QualifiedClassNameListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_formalParameters, new PostProcessors.FormalParametersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_formalParameterList, new PostProcessors.FormalParameterListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_thisFormalParameter, new PostProcessors.ThisFormalParameterPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_formalParameter, new PostProcessors.FormalParameterPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_methodBody, new PostProcessors.MethodBodyPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedName, new PostProcessors.QualifiedNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedNameElement, new PostProcessors.QualifiedNameElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedNameElements, new PostProcessors.QualifiedNameElementsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedClassName, new PostProcessors.QualifiedClassNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_qualifiedStandardClassName, new PostProcessors.QualifiedStandardClassNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_literal, new PostProcessors.LiteralPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_gstring, new PostProcessors.GstringPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_gstringValue, new PostProcessors.GstringValuePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_gstringPath, new PostProcessors.GstringPathPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_lambdaExpression, new PostProcessors.LambdaExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardLambdaExpression, new PostProcessors.StandardLambdaExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_lambdaParameters, new PostProcessors.LambdaParametersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_standardLambdaParameters, new PostProcessors.StandardLambdaParametersPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_lambdaBody, new PostProcessors.LambdaBodyPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_closure, new PostProcessors.ClosurePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_closureOrLambdaExpression, new PostProcessors.ClosureOrLambdaExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_blockStatementsOpt, new PostProcessors.BlockStatementsOptPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_blockStatements, new PostProcessors.BlockStatementsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotationsOpt, new PostProcessors.AnnotationsOptPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotation, new PostProcessors.AnnotationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValues, new PostProcessors.ElementValuesPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_annotationName, new PostProcessors.AnnotationNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValuePairs, new PostProcessors.ElementValuePairsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValuePair, new PostProcessors.ElementValuePairPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValuePairName, new PostProcessors.ElementValuePairNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValue, new PostProcessors.ElementValuePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_elementValueArrayInitializer, new PostProcessors.ElementValueArrayInitializerPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_block, new PostProcessors.BlockPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_blockStatement, new PostProcessors.BlockStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_localVariableDeclaration, new PostProcessors.LocalVariableDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableDeclaration, new PostProcessors.VariableDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeNamePairs, new PostProcessors.TypeNamePairsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeNamePair, new PostProcessors.TypeNamePairPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_variableNames, new PostProcessors.VariableNamesPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_conditionalStatement, new PostProcessors.ConditionalStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_ifElseStatement, new PostProcessors.IfElseStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchStatement, new PostProcessors.SwitchStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_loopStatement, new PostProcessors.LoopStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_continueStatement, new PostProcessors.ContinueStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_breakStatement, new PostProcessors.BreakStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_yieldStatement, new PostProcessors.YieldStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_tryCatchStatement, new PostProcessors.TryCatchStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_assertStatement, new PostProcessors.AssertStatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_statement, new PostProcessors.StatementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_catchClause, new PostProcessors.CatchClausePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_catchType, new PostProcessors.CatchTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_finallyBlock, new PostProcessors.FinallyBlockPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_resources, new PostProcessors.ResourcesPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_resourceList, new PostProcessors.ResourceListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_resource, new PostProcessors.ResourcePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchBlockStatementGroup, new PostProcessors.SwitchBlockStatementGroupPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchLabel, new PostProcessors.SwitchLabelPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_forControl, new PostProcessors.ForControlPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedForControl, new PostProcessors.EnhancedForControlPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_classicalForControl, new PostProcessors.ClassicalForControlPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_forInit, new PostProcessors.ForInitPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_forUpdate, new PostProcessors.ForUpdatePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_castParExpression, new PostProcessors.CastParExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_parExpression, new PostProcessors.ParExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expressionInPar, new PostProcessors.ExpressionInParPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expressionList, new PostProcessors.ExpressionListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expressionListElement, new PostProcessors.ExpressionListElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedStatementExpression, new PostProcessors.EnhancedStatementExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_statementExpression, new PostProcessors.StatementExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_postfixExpression, new PostProcessors.PostfixExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchExpression, new PostProcessors.SwitchExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchBlockStatementExpressionGroup, new PostProcessors.SwitchBlockStatementExpressionGroupPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_switchExpressionLabel, new PostProcessors.SwitchExpressionLabelPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_expression, new PostProcessors.ExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_castOperandExpression, new PostProcessors.CastOperandExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_commandExpression, new PostProcessors.CommandExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_commandArgument, new PostProcessors.CommandArgumentPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_pathExpression, new PostProcessors.PathExpressionPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_pathElement, new PostProcessors.PathElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namePart, new PostProcessors.NamePartPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_dynamicMemberName, new PostProcessors.DynamicMemberNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_indexPropertyArgs, new PostProcessors.IndexPropertyArgsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgs, new PostProcessors.NamedPropertyArgsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_primary, new PostProcessors.PrimaryPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgPrimary, new PostProcessors.NamedPropertyArgPrimaryPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedArgPrimary, new PostProcessors.NamedArgPrimaryPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_commandPrimary, new PostProcessors.CommandPrimaryPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_list, new PostProcessors.ListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_map, new PostProcessors.MapPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_mapEntryList, new PostProcessors.MapEntryListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgList, new PostProcessors.NamedPropertyArgListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_mapEntry, new PostProcessors.MapEntryPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArg, new PostProcessors.NamedPropertyArgPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedArg, new PostProcessors.NamedArgPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_mapEntryLabel, new PostProcessors.MapEntryLabelPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedPropertyArgLabel, new PostProcessors.NamedPropertyArgLabelPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_namedArgLabel, new PostProcessors.NamedArgLabelPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_creator, new PostProcessors.CreatorPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_dim, new PostProcessors.DimPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_arrayInitializer, new PostProcessors.ArrayInitializerPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_anonymousInnerClassDeclaration, new PostProcessors.AnonymousInnerClassDeclarationPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_createdName, new PostProcessors.CreatedNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_nonWildcardTypeArguments, new PostProcessors.NonWildcardTypeArgumentsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_typeArgumentsOrDiamond, new PostProcessors.TypeArgumentsOrDiamondPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_arguments, new PostProcessors.ArgumentsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_argumentList, new PostProcessors.ArgumentListPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedArgumentListInPar, new PostProcessors.EnhancedArgumentListInParPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_firstArgumentListElement, new PostProcessors.FirstArgumentListElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_argumentListElement, new PostProcessors.ArgumentListElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_enhancedArgumentListElement, new PostProcessors.EnhancedArgumentListElementPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_stringLiteral, new PostProcessors.StringLiteralPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_className, new PostProcessors.ClassNamePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_identifier, new PostProcessors.IdentifierPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_builtInType, new PostProcessors.BuiltInTypePostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_keywords, new PostProcessors.KeywordsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_rparen, new PostProcessors.RparenPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_nls, new PostProcessors.NlsPostProcessor());
		PostNodeProcessorRegistry.PROCESSORS.set(GroovyParser.RULE_sep, new PostProcessors.SepPostProcessor());

	}
	private static NOOP_PROCESSOR = new PostProcessors.NoopPostNodeProcessor();

	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static getProcessor(ruleIndex: number) {
		return PostNodeProcessorRegistry.PROCESSORS.get(ruleIndex) ?? PostNodeProcessorRegistry.NOOP_PROCESSOR;
	}
}