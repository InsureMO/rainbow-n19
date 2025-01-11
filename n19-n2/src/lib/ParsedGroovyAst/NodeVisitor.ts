import {GroovyParser} from '../OrgApacheGroovyParserAntlr4';
import {Optional} from '../TsAddon';
import {DecorableParsedNode} from './DecorableParsedNode';
import {ParsedNode} from './Node';

export class ParsedNodeVisitor {
	private static readonly ATOMIC_LIST_COLLECTOR: Map<number, (node: DecorableParsedNode) => boolean> = new Map();
	static {
		// false
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_compilationUnit, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_scriptStatements, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_scriptStatement, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_packageDeclaration, ParsedNodeVisitor.requireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_importDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_modifier, ParsedNodeVisitor.requireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_modifiersOpt, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_modifiers, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classOrInterfaceModifiersOpt, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classOrInterfaceModifiers, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classOrInterfaceModifier, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableModifier, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableModifiersOpt, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableModifiers, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeParameter, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeBound, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classBody, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_enumConstants, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_enumConstant, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classBodyDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_memberDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_methodDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_compactConstructorDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_methodName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_returnType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_fieldDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableDeclarators, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableDeclarator, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableDeclaratorId, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableInitializer, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableInitializers, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_emptyDims, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_emptyDimsOpt, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_standardType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_type, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classOrInterfaceType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_generalClassOrInterfaceType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_standardClassOrInterfaceType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_primitiveType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeArguments, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeArgument, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_annotatedQualifiedClassName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_qualifiedClassNameList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_formalParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_formalParameterList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_thisFormalParameter, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_formalParameter, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_methodBody, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_qualifiedName, ParsedNodeVisitor.requireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_qualifiedNameElement, ParsedNodeVisitor.requireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_qualifiedNameElements, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_qualifiedClassName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_qualifiedStandardClassName, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_literal, ParsedNodeVisitor.requireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_gstring, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_gstringValue, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_gstringPath, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_lambdaExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_standardLambdaExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_lambdaParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_standardLambdaParameters, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_lambdaBody, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_closure, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_closureOrLambdaExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_blockStatementsOpt, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_blockStatements, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_annotationsOpt, ParsedNodeVisitor.requireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_annotation, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_elementValues, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_annotationName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_elementValuePairs, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_elementValuePair, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_elementValuePairName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_elementValue, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_elementValueArrayInitializer, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_block, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_blockStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_localVariableDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeNamePairs, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeNamePair, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_variableNames, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_conditionalStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_ifElseStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_switchStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_loopStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_continueStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_breakStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_yieldStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_tryCatchStatement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_assertStatement, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_statement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_catchClause, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_catchType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_finallyBlock, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_resources, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_resourceList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_resource, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_switchBlockStatementGroup, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_switchLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_forControl, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_enhancedForControl, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_classicalForControl, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_forInit, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_forUpdate, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_castParExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_parExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_expressionInPar, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_expressionList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_expressionListElement, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_enhancedStatementExpression, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_statementExpression, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_postfixExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_switchExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_switchBlockStatementExpressionGroup, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_switchExpressionLabel, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_expression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_castOperandExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_commandExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_commandArgument, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_pathExpression, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_pathElement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namePart, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_dynamicMemberName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_indexPropertyArgs, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedPropertyArgs, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_primary, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedPropertyArgPrimary, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedArgPrimary, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_commandPrimary, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_list, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_map, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_mapEntryList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedPropertyArgList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_mapEntry, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedPropertyArg, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedArg, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_mapEntryLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedPropertyArgLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_namedArgLabel, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_creator, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_dim, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_arrayInitializer, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_anonymousInnerClassDeclaration, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_createdName, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_nonWildcardTypeArguments, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_typeArgumentsOrDiamond, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_arguments, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_argumentList, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_enhancedArgumentListInPar, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_firstArgumentListElement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_argumentListElement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_enhancedArgumentListElement, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_stringLiteral, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_className, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_identifier, ParsedNodeVisitor.requireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_builtInType, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_keywords, ParsedNodeVisitor.notRequireToAtomicList);
		// ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_rparen, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_nls, ParsedNodeVisitor.notRequireToAtomicList);
		ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.set(GroovyParser.RULE_sep, ParsedNodeVisitor.requireToAtomicList);
	}

	private static requireToAtomicList(_node: DecorableParsedNode): boolean {
		return true;
	}

	private static notRequireToAtomicList(_node: DecorableParsedNode): boolean {
		return false;
	}

	private readonly _roots: Array<DecorableParsedNode> = [];
	/**
	 * sorted, and ignored some context, for example, assign operator of variable declarator statement.
	 */
	private readonly _atomicNodes: Array<DecorableParsedNode> = [];

	constructor(roots: Array<ParsedNode>) {
		this._roots.push(...(roots.map(root => new DecorableParsedNode(root))));
		this._roots.forEach(root => this.initBuild(root));
	}

	protected initBuild(node: DecorableParsedNode): void {
		this.collectToAtomicList(node);
		node.underlay.children.forEach(child => this.initBuild(new DecorableParsedNode(child)));
	}

	protected shouldCollectToAtomicList(node: DecorableParsedNode): boolean {
		const check = ParsedNodeVisitor.ATOMIC_LIST_COLLECTOR.get(node.type);
		if (check != null) {
			return check(node);
		} else {
			console.error(`Node type[${node.type}] is not supported yet.`);
			return false;
		}
	}

	protected collectToAtomicList(node: DecorableParsedNode): void {
		if (this.shouldCollectToAtomicList(node)) {
			this._atomicNodes.push(node);
		}
	}

	get atomicNodes(): Array<DecorableParsedNode> {
		return this._atomicNodes;
	}

	findAtomicNode(line: number, column: number): Optional<DecorableParsedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found, continue finding on right part when position is after current node
				startIndex = midIndex + 1;
			} else {
				// not found, continue finding on left part when given position is before current node
				endIndex = midIndex - 1;
			}
		}

		// not found
		return (void 0);
	}

	findNodeOrNearestPrevious(line: number, column: number): Optional<DecorableParsedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		let result: Optional<DecorableParsedNode> = (void 0);

		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found,
				// current node is before given position, cache it
				// continue finding on right part when position is after current node
				result = node;
				startIndex = midIndex + 1;
			} else {
				// not found,
				// current node is after given position
				// continue finding on left part when given position is before current node
				endIndex = midIndex - 1;
			}
		}

		return result;
	}

	findNodeOrNearestNext(line: number, column: number): Optional<DecorableParsedNode> {
		let startIndex = 0;
		let endIndex = this._atomicNodes.length - 1;
		let result: Optional<DecorableParsedNode> = (void 0);

		while (startIndex <= endIndex) {
			const midIndex = Math.floor((startIndex + endIndex) / 2);
			const node = this._atomicNodes[midIndex];

			if (node.startLine <= line && node.startColumn <= column && node.endLine >= line && node.endColumn >= column) {
				// found, return
				return node;
			} else if (node.endLine < line || (node.endLine === line && node.endColumn < column)) {
				// not found,
				// current node is before given position
				// continue finding on right part when position is after current node
				startIndex = midIndex + 1;
			} else {
				// not found,
				// current node is after given position, cache it
				// continue finding on left part when given position is before current node
				result = node;
				endIndex = midIndex - 1;
			}
		}

		return result;
	}
}
