import {
	ATN,
	FailedPredicateException,
	NoViableAltException,
	ParserATNSimulator,
	ParserRuleContext,
	RecognitionException,
	Token,
	TokenStream
} from 'antlr4';
import {Optional} from '../TsAddon';
import {AbstractParser} from './AbstractParser';
import {GroovySyntaxSource} from './GroovySyntaxSource';
import {
	AdditiveExprAltContext,
	AndExprAltContext,
	AnnotatedQualifiedClassNameContext,
	AnnotationContext,
	AnnotationNameContext,
	AnnotationsOptContext,
	AnonymousInnerClassDeclarationContext,
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
	BuiltInTypePrmrAltContext,
	CastExprAltContext,
	CastParExpressionContext,
	CatchClauseContext,
	CatchTypeContext,
	ClassBodyContext,
	ClassBodyDeclarationContext,
	ClassDeclarationContext,
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
	EnhancedForControlContext,
	EnhancedStatementExpressionContext,
	EnumConstantContext,
	EnumConstantsContext,
	EqualityExprAltContext,
	ExclusiveOrExprAltContext,
	ExpressionContext,
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
	GroovyParserRuleContext,
	GstringContext,
	GstringPathContext,
	GstringPrmrAltContext,
	GstringValueContext,
	IdentifierPrmrAltContext,
	IfElseStatementContext,
	ImportDeclarationContext,
	InclusiveOrExprAltContext,
	IndexPropertyArgsContext,
	IntegerLiteralAltContext,
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
	ScriptStatementContext,
	ScriptStatementsContext,
	ShiftExprAltContext,
	StandardLambdaExpressionContext,
	StandardLambdaParametersContext,
	StatementContext,
	StatementExpressionContext,
	StringLiteralAltContext,
	SuperPrmrAltContext,
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
	TryCatchStmtAltContext,
	TypeArgumentContext,
	TypeArgumentsContext,
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
import {SwitchBlockStatementExpressionGroupContext} from './ParserContexts/SwitchBlockStatementExpressionGroupContext';
import {SemanticPredicates} from './SemanticPredicates';
import {Vocabulary} from './Vocabulary';

export class GroovyParser extends AbstractParser {
	static readonly StringLiteral = 1;
	static readonly GStringBegin = 2;
	static readonly GStringEnd = 3;
	static readonly GStringPart = 4;
	static readonly GStringPathPart = 5;
	static readonly RollBackOne = 6;
	static readonly AS = 7;
	static readonly DEF = 8;
	static readonly IN = 9;
	static readonly TRAIT = 10;
	static readonly THREADSAFE = 11;
	static readonly VAR = 12;
	static readonly BuiltInPrimitiveType = 13;
	static readonly ABSTRACT = 14;
	static readonly ASSERT = 15;
	static readonly BREAK = 16;
	static readonly YIELD = 17;
	static readonly CASE = 18;
	static readonly CATCH = 19;
	static readonly CLASS = 20;
	static readonly CONST = 21;
	static readonly CONTINUE = 22;
	static readonly DEFAULT = 23;
	static readonly DO = 24;
	static readonly ELSE = 25;
	static readonly ENUM = 26;
	static readonly EXTENDS = 27;
	static readonly FINAL = 28;
	static readonly FINALLY = 29;
	static readonly FOR = 30;
	static readonly IF = 31;
	static readonly GOTO = 32;
	static readonly IMPLEMENTS = 33;
	static readonly IMPORT = 34;
	static readonly INSTANCEOF = 35;
	static readonly INTERFACE = 36;
	static readonly NATIVE = 37;
	static readonly NEW = 38;
	static readonly NON_SEALED = 39;
	static readonly PACKAGE = 40;
	static readonly PERMITS = 41;
	static readonly PRIVATE = 42;
	static readonly PROTECTED = 43;
	static readonly PUBLIC = 44;
	static readonly RECORD = 45;
	static readonly RETURN = 46;
	static readonly SEALED = 47;
	static readonly STATIC = 48;
	static readonly STRICTFP = 49;
	static readonly SUPER = 50;
	static readonly SWITCH = 51;
	static readonly SYNCHRONIZED = 52;
	static readonly THIS = 53;
	static readonly THROW = 54;
	static readonly THROWS = 55;
	static readonly TRANSIENT = 56;
	static readonly TRY = 57;
	static readonly VOID = 58;
	static readonly VOLATILE = 59;
	static readonly WHILE = 60;
	static readonly IntegerLiteral = 61;
	static readonly FloatingPointLiteral = 62;
	static readonly BooleanLiteral = 63;
	static readonly NullLiteral = 64;
	static readonly RANGE_INCLUSIVE = 65;
	static readonly RANGE_EXCLUSIVE_LEFT = 66;
	static readonly RANGE_EXCLUSIVE_RIGHT = 67;
	static readonly RANGE_EXCLUSIVE_FULL = 68;
	static readonly SPREAD_DOT = 69;
	static readonly SAFE_DOT = 70;
	static readonly SAFE_INDEX = 71;
	static readonly SAFE_CHAIN_DOT = 72;
	static readonly ELVIS = 73;
	static readonly METHOD_POINTER = 74;
	static readonly METHOD_REFERENCE = 75;
	static readonly REGEX_FIND = 76;
	static readonly REGEX_MATCH = 77;
	static readonly POWER = 78;
	static readonly POWER_ASSIGN = 79;
	static readonly SPACESHIP = 80;
	static readonly IDENTICAL = 81;
	static readonly NOT_IDENTICAL = 82;
	static readonly ARROW = 83;
	static readonly NOT_INSTANCEOF = 84;
	static readonly NOT_IN = 85;
	static readonly LPAREN = 86;
	static readonly RPAREN = 87;
	static readonly LBRACE = 88;
	static readonly RBRACE = 89;
	static readonly LBRACK = 90;
	static readonly RBRACK = 91;
	static readonly SEMI = 92;
	static readonly COMMA = 93;
	static readonly DOT = 94;
	static readonly ASSIGN = 95;
	static readonly GT = 96;
	static readonly LT = 97;
	static readonly NOT = 98;
	static readonly BITNOT = 99;
	static readonly QUESTION = 100;
	static readonly COLON = 101;
	static readonly EQUAL = 102;
	static readonly LE = 103;
	static readonly GE = 104;
	static readonly NOTEQUAL = 105;
	static readonly AND = 106;
	static readonly OR = 107;
	static readonly INC = 108;
	static readonly DEC = 109;
	static readonly ADD = 110;
	static readonly SUB = 111;
	static readonly MUL = 112;
	static readonly DIV = 113;
	static readonly BITAND = 114;
	static readonly BITOR = 115;
	static readonly XOR = 116;
	static readonly MOD = 117;
	static readonly ADD_ASSIGN = 118;
	static readonly SUB_ASSIGN = 119;
	static readonly MUL_ASSIGN = 120;
	static readonly DIV_ASSIGN = 121;
	static readonly AND_ASSIGN = 122;
	static readonly OR_ASSIGN = 123;
	static readonly XOR_ASSIGN = 124;
	static readonly MOD_ASSIGN = 125;
	static readonly LSHIFT_ASSIGN = 126;
	static readonly RSHIFT_ASSIGN = 127;
	static readonly URSHIFT_ASSIGN = 128;
	static readonly ELVIS_ASSIGN = 129;
	static readonly CapitalizedIdentifier = 130;
	static readonly Identifier = 131;
	static readonly AT = 132;
	static readonly ELLIPSIS = 133;
	static readonly WS = 134;
	static readonly NL = 135;
	static readonly SH_COMMENT = 136;
	static readonly UNEXPECTED_CHAR = 137;

	static readonly RULE_compilationUnit = 0;
	static readonly RULE_scriptStatements = 1;
	static readonly RULE_scriptStatement = 2;
	static readonly RULE_packageDeclaration = 3;
	static readonly RULE_importDeclaration = 4;
	static readonly RULE_typeDeclaration = 5;
	static readonly RULE_modifier = 6;
	static readonly RULE_modifiersOpt = 7;
	static readonly RULE_modifiers = 8;
	static readonly RULE_classOrInterfaceModifiersOpt = 9;
	static readonly RULE_classOrInterfaceModifiers = 10;
	static readonly RULE_classOrInterfaceModifier = 11;
	static readonly RULE_variableModifier = 12;
	static readonly RULE_variableModifiersOpt = 13;
	static readonly RULE_variableModifiers = 14;
	static readonly RULE_typeParameters = 15;
	static readonly RULE_typeParameter = 16;
	static readonly RULE_typeBound = 17;
	static readonly RULE_typeList = 18;
	static readonly RULE_classDeclaration = 19;
	static readonly RULE_classBody = 20;
	static readonly RULE_enumConstants = 21;
	static readonly RULE_enumConstant = 22;
	static readonly RULE_classBodyDeclaration = 23;
	static readonly RULE_memberDeclaration = 24;
	static readonly RULE_methodDeclaration = 25;
	static readonly RULE_compactConstructorDeclaration = 26;
	static readonly RULE_methodName = 27;
	static readonly RULE_returnType = 28;
	static readonly RULE_fieldDeclaration = 29;
	static readonly RULE_variableDeclarators = 30;
	static readonly RULE_variableDeclarator = 31;
	static readonly RULE_variableDeclaratorId = 32;
	static readonly RULE_variableInitializer = 33;
	static readonly RULE_variableInitializers = 34;
	static readonly RULE_emptyDims = 35;
	static readonly RULE_emptyDimsOpt = 36;
	static readonly RULE_standardType = 37;
	static readonly RULE_type = 38;
	static readonly RULE_classOrInterfaceType = 39;
	static readonly RULE_generalClassOrInterfaceType = 40;
	static readonly RULE_standardClassOrInterfaceType = 41;
	static readonly RULE_primitiveType = 42;
	static readonly RULE_typeArguments = 43;
	static readonly RULE_typeArgument = 44;
	static readonly RULE_annotatedQualifiedClassName = 45;
	static readonly RULE_qualifiedClassNameList = 46;
	static readonly RULE_formalParameters = 47;
	static readonly RULE_formalParameterList = 48;
	static readonly RULE_thisFormalParameter = 49;
	static readonly RULE_formalParameter = 50;
	static readonly RULE_methodBody = 51;
	static readonly RULE_qualifiedName = 52;
	static readonly RULE_qualifiedNameElement = 53;
	static readonly RULE_qualifiedNameElements = 54;
	static readonly RULE_qualifiedClassName = 55;
	static readonly RULE_qualifiedStandardClassName = 56;
	static readonly RULE_literal = 57;
	static readonly RULE_gstring = 58;
	static readonly RULE_gstringValue = 59;
	static readonly RULE_gstringPath = 60;
	static readonly RULE_lambdaExpression = 61;
	static readonly RULE_standardLambdaExpression = 62;
	static readonly RULE_lambdaParameters = 63;
	static readonly RULE_standardLambdaParameters = 64;
	static readonly RULE_lambdaBody = 65;
	static readonly RULE_closure = 66;
	static readonly RULE_closureOrLambdaExpression = 67;
	static readonly RULE_blockStatementsOpt = 68;
	static readonly RULE_blockStatements = 69;
	static readonly RULE_annotationsOpt = 70;
	static readonly RULE_annotation = 71;
	static readonly RULE_elementValues = 72;
	static readonly RULE_annotationName = 73;
	static readonly RULE_elementValuePairs = 74;
	static readonly RULE_elementValuePair = 75;
	static readonly RULE_elementValuePairName = 76;
	static readonly RULE_elementValue = 77;
	static readonly RULE_elementValueArrayInitializer = 78;
	static readonly RULE_block = 79;
	static readonly RULE_blockStatement = 80;
	static readonly RULE_localVariableDeclaration = 81;
	static readonly RULE_variableDeclaration = 82;
	static readonly RULE_typeNamePairs = 83;
	static readonly RULE_typeNamePair = 84;
	static readonly RULE_variableNames = 85;
	static readonly RULE_conditionalStatement = 86;
	static readonly RULE_ifElseStatement = 87;
	static readonly RULE_switchStatement = 88;
	static readonly RULE_loopStatement = 89;
	static readonly RULE_continueStatement = 90;
	static readonly RULE_breakStatement = 91;
	static readonly RULE_yieldStatement = 92;
	static readonly RULE_tryCatchStatement = 93;
	static readonly RULE_assertStatement = 94;
	static readonly RULE_statement = 95;
	static readonly RULE_catchClause = 96;
	static readonly RULE_catchType = 97;
	static readonly RULE_finallyBlock = 98;
	static readonly RULE_resources = 99;
	static readonly RULE_resourceList = 100;
	static readonly RULE_resource = 101;
	static readonly RULE_switchBlockStatementGroup = 102;
	static readonly RULE_switchLabel = 103;
	static readonly RULE_forControl = 104;
	static readonly RULE_enhancedForControl = 105;
	static readonly RULE_classicalForControl = 106;
	static readonly RULE_forInit = 107;
	static readonly RULE_forUpdate = 108;
	static readonly RULE_castParExpression = 109;
	static readonly RULE_parExpression = 110;
	static readonly RULE_expressionInPar = 111;
	static readonly RULE_expressionList = 112;
	static readonly RULE_expressionListElement = 113;
	static readonly RULE_enhancedStatementExpression = 114;
	static readonly RULE_statementExpression = 115;
	static readonly RULE_postfixExpression = 116;
	static readonly RULE_switchExpression = 117;
	static readonly RULE_switchBlockStatementExpressionGroup = 118;
	static readonly RULE_switchExpressionLabel = 119;
	static readonly RULE_expression = 120;
	static readonly RULE_castOperandExpression = 121;
	static readonly RULE_commandExpression = 122;
	static readonly RULE_commandArgument = 123;
	static readonly RULE_pathExpression = 124;
	static readonly RULE_pathElement = 125;
	static readonly RULE_namePart = 126;
	static readonly RULE_dynamicMemberName = 127;
	static readonly RULE_indexPropertyArgs = 128;
	static readonly RULE_namedPropertyArgs = 129;
	static readonly RULE_primary = 130;
	static readonly RULE_namedPropertyArgPrimary = 131;
	static readonly RULE_namedArgPrimary = 132;
	static readonly RULE_commandPrimary = 133;
	static readonly RULE_list = 134;
	static readonly RULE_map = 135;
	static readonly RULE_mapEntryList = 136;
	static readonly RULE_namedPropertyArgList = 137;
	static readonly RULE_mapEntry = 138;
	static readonly RULE_namedPropertyArg = 139;
	static readonly RULE_namedArg = 140;
	static readonly RULE_mapEntryLabel = 141;
	static readonly RULE_namedPropertyArgLabel = 142;
	static readonly RULE_namedArgLabel = 143;
	static readonly RULE_creator = 144;
	static readonly RULE_dim = 145;
	static readonly RULE_arrayInitializer = 146;
	static readonly RULE_anonymousInnerClassDeclaration = 147;
	static readonly RULE_createdName = 148;
	static readonly RULE_nonWildcardTypeArguments = 149;
	static readonly RULE_typeArgumentsOrDiamond = 150;
	static readonly RULE_arguments = 151;
	static readonly RULE_argumentList = 152;
	static readonly RULE_enhancedArgumentListInPar = 153;
	static readonly RULE_firstArgumentListElement = 154;
	static readonly RULE_argumentListElement = 155;
	static readonly RULE_enhancedArgumentListElement = 156;
	static readonly RULE_stringLiteral = 157;
	static readonly RULE_className = 158;
	static readonly RULE_identifier = 159;
	static readonly RULE_builtInType = 160;
	static readonly RULE_keywords = 161;
	static readonly RULE_rparen = 162;
	static readonly RULE_nls = 163;
	static readonly RULE_sep = 164;

	private static makeRuleNames(): Array<string> {
		return [
			'compilationUnit', 'scriptStatements', 'scriptStatement', 'packageDeclaration',
			'importDeclaration', 'typeDeclaration', 'modifier', 'modifiersOpt', 'modifiers',
			'classOrInterfaceModifiersOpt', 'classOrInterfaceModifiers', 'classOrInterfaceModifier',
			'variableModifier', 'variableModifiersOpt', 'variableModifiers', 'typeParameters',
			'typeParameter', 'typeBound', 'typeList', 'classDeclaration', 'classBody',
			'enumConstants', 'enumConstant', 'classBodyDeclaration', 'memberDeclaration',
			'methodDeclaration', 'compactConstructorDeclaration', 'methodName', 'returnType',
			'fieldDeclaration', 'variableDeclarators', 'variableDeclarator', 'variableDeclaratorId',
			'variableInitializer', 'variableInitializers', 'emptyDims', 'emptyDimsOpt',
			'standardType', 'type', 'classOrInterfaceType', 'generalClassOrInterfaceType',
			'standardClassOrInterfaceType', 'primitiveType', 'typeArguments', 'typeArgument',
			'annotatedQualifiedClassName', 'qualifiedClassNameList', 'formalParameters',
			'formalParameterList', 'thisFormalParameter', 'formalParameter', 'methodBody',
			'qualifiedName', 'qualifiedNameElement', 'qualifiedNameElements', 'qualifiedClassName',
			'qualifiedStandardClassName', 'literal', 'gstring', 'gstringValue', 'gstringPath',
			'lambdaExpression', 'standardLambdaExpression', 'lambdaParameters', 'standardLambdaParameters',
			'lambdaBody', 'closure', 'closureOrLambdaExpression', 'blockStatementsOpt',
			'blockStatements', 'annotationsOpt', 'annotation', 'elementValues', 'annotationName',
			'elementValuePairs', 'elementValuePair', 'elementValuePairName', 'elementValue',
			'elementValueArrayInitializer', 'block', 'blockStatement', 'localVariableDeclaration',
			'variableDeclaration', 'typeNamePairs', 'typeNamePair', 'variableNames',
			'conditionalStatement', 'ifElseStatement', 'switchStatement', 'loopStatement',
			'continueStatement', 'breakStatement', 'yieldStatement', 'tryCatchStatement',
			'assertStatement', 'statement', 'catchClause', 'catchType', 'finallyBlock',
			'resources', 'resourceList', 'resource', 'switchBlockStatementGroup',
			'switchLabel', 'forControl', 'enhancedForControl', 'classicalForControl',
			'forInit', 'forUpdate', 'castParExpression', 'parExpression', 'expressionInPar',
			'expressionList', 'expressionListElement', 'enhancedStatementExpression',
			'statementExpression', 'postfixExpression', 'switchExpression', 'switchBlockStatementExpressionGroup',
			'switchExpressionLabel', 'expression', 'castOperandExpression', 'commandExpression',
			'commandArgument', 'pathExpression', 'pathElement', 'namePart', 'dynamicMemberName',
			'indexPropertyArgs', 'namedPropertyArgs', 'primary', 'namedPropertyArgPrimary',
			'namedArgPrimary', 'commandPrimary', 'list', 'map', 'mapEntryList', 'namedPropertyArgList',
			'mapEntry', 'namedPropertyArg', 'namedArg', 'mapEntryLabel', 'namedPropertyArgLabel',
			'namedArgLabel', 'creator', 'dim', 'arrayInitializer', 'anonymousInnerClassDeclaration',
			'createdName', 'nonWildcardTypeArguments', 'typeArgumentsOrDiamond',
			'arguments', 'argumentList', 'enhancedArgumentListInPar', 'firstArgumentListElement',
			'argumentListElement', 'enhancedArgumentListElement', 'stringLiteral',
			'className', 'identifier', 'builtInType', 'keywords', 'rparen', 'nls',
			'sep'
		];
	}

	static readonly ruleNames = GroovyParser.makeRuleNames();

	// noinspection DuplicatedCode
	private static makeLiteralNames(): Array<Optional<string>> {
		return [
			null, null, null, null, null, null, null, '\'as\'', '\'def\'', '\'in\'', '\'trait\'',
			'\'threadsafe\'', '\'var\'', null, '\'abstract\'', '\'assert\'', '\'break\'', '\'yield\'',
			'\'case\'', '\'catch\'', '\'class\'', '\'const\'', '\'continue\'', '\'default\'',
			'\'do\'', '\'else\'', '\'enum\'', '\'extends\'', '\'final\'', '\'finally\'', '\'for\'',
			'\'if\'', '\'goto\'', '\'implements\'', '\'import\'', '\'instanceof\'', '\'interface\'',
			'\'native\'', '\'new\'', '\'non-sealed\'', '\'package\'', '\'permits\'', '\'private\'',
			'\'protected\'', '\'public\'', '\'record\'', '\'return\'', '\'sealed\'', '\'static\'',
			'\'strictfp\'', '\'super\'', '\'switch\'', '\'synchronized\'', '\'this\'', '\'throw\'',
			'\'throws\'', '\'transient\'', '\'try\'', '\'void\'', '\'volatile\'', '\'while\'',
			null, null, null, '\'null\'', '\'..\'', '\'<..\'', '\'..<\'', '\'<..<\'', '\'*.\'',
			'\'?.\'', null, '\'??.\'', '\'?:\'', '\'.&\'', '\'::\'', '\'=~\'', '\'==~\'', '\'**\'',
			'\'**=\'', '\'<=>\'', '\'===\'', '\'!==\'', '\'->\'', '\'!instanceof\'', '\'!in\'',
			null, null, null, null, null, null, '\';\'', '\',\'', null, '\'=\'', '\'>\'',
			'\'<\'', '\'!\'', '\'~\'', '\'?\'', '\':\'', '\'==\'', '\'<=\'', '\'>=\'', '\'!=\'', '\'&&\'',
			'\'||\'', '\'++\'', '\'--\'', '\'+\'', '\'-\'', '\'*\'', null, '\'&\'', '\'|\'', '\'^\'',
			'\'%\'', '\'+=\'', '\'-=\'', '\'*=\'', '\'/=\'', '\'&=\'', '\'|=\'', '\'^=\'', '\'%=\'',
			'\'<<=\'', '\'>>=\'', '\'>>>=\'', '\'?=\'', null, null, '\'@\'', '\'...\''
		];
	}

	private static readonly _LITERAL_NAMES = GroovyParser.makeLiteralNames();

	// noinspection DuplicatedCode
	private static makeSymbolicNames(): Array<Optional<string>> {
		return [
			null, 'StringLiteral', 'GStringBegin', 'GStringEnd', 'GStringPart', 'GStringPathPart',
			'RollBackOne', 'AS', 'DEF', 'IN', 'TRAIT', 'THREADSAFE', 'VAR', 'BuiltInPrimitiveType',
			'ABSTRACT', 'ASSERT', 'BREAK', 'YIELD', 'CASE', 'CATCH', 'CLASS', 'CONST',
			'CONTINUE', 'DEFAULT', 'DO', 'ELSE', 'ENUM', 'EXTENDS', 'FINAL', 'FINALLY',
			'FOR', 'IF', 'GOTO', 'IMPLEMENTS', 'IMPORT', 'INSTANCEOF', 'INTERFACE',
			'NATIVE', 'NEW', 'NON_SEALED', 'PACKAGE', 'PERMITS', 'PRIVATE', 'PROTECTED',
			'PUBLIC', 'RECORD', 'RETURN', 'SEALED', 'STATIC', 'STRICTFP', 'SUPER',
			'SWITCH', 'SYNCHRONIZED', 'THIS', 'THROW', 'THROWS', 'TRANSIENT', 'TRY',
			'VOID', 'VOLATILE', 'WHILE', 'IntegerLiteral', 'FloatingPointLiteral',
			'BooleanLiteral', 'NullLiteral', 'RANGE_INCLUSIVE', 'RANGE_EXCLUSIVE_LEFT',
			'RANGE_EXCLUSIVE_RIGHT', 'RANGE_EXCLUSIVE_FULL', 'SPREAD_DOT', 'SAFE_DOT',
			'SAFE_INDEX', 'SAFE_CHAIN_DOT', 'ELVIS', 'METHOD_POINTER', 'METHOD_REFERENCE',
			'REGEX_FIND', 'REGEX_MATCH', 'POWER', 'POWER_ASSIGN', 'SPACESHIP', 'IDENTICAL',
			'NOT_IDENTICAL', 'ARROW', 'NOT_INSTANCEOF', 'NOT_IN', 'LPAREN', 'RPAREN',
			'LBRACE', 'RBRACE', 'LBRACK', 'RBRACK', 'SEMI', 'COMMA', 'DOT', 'ASSIGN',
			'GT', 'LT', 'NOT', 'BITNOT', 'QUESTION', 'COLON', 'EQUAL', 'LE', 'GE',
			'NOTEQUAL', 'AND', 'OR', 'INC', 'DEC', 'ADD', 'SUB', 'MUL', 'DIV', 'BITAND',
			'BITOR', 'XOR', 'MOD', 'ADD_ASSIGN', 'SUB_ASSIGN', 'MUL_ASSIGN', 'DIV_ASSIGN',
			'AND_ASSIGN', 'OR_ASSIGN', 'XOR_ASSIGN', 'MOD_ASSIGN', 'LSHIFT_ASSIGN',
			'RSHIFT_ASSIGN', 'URSHIFT_ASSIGN', 'ELVIS_ASSIGN', 'CapitalizedIdentifier',
			'Identifier', 'AT', 'ELLIPSIS', 'WS', 'NL', 'SH_COMMENT', 'UNEXPECTED_CHAR'
		];
	}

	private static readonly _SYMBOLIC_NAMES = GroovyParser.makeSymbolicNames();
	static readonly VOCABULARY = new Vocabulary(GroovyParser._LITERAL_NAMES, GroovyParser._SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	static readonly tokenNames = GroovyParser._SYMBOLIC_NAMES.map((_, index) => {
		return GroovyParser.VOCABULARY.getLiteralName(index) ?? GroovyParser.VOCABULARY.getSymbolicName(index) ?? '<INVALID>';
	});

	/**
	 * @deprecated
	 */
	getTokenNames(): Array<string> {
		return GroovyParser.tokenNames;
	}

	getVocabulary(): Vocabulary {
		return GroovyParser.VOCABULARY;
	}

	getGrammarFileName(): string {
		return 'GroovyParser.g4';
	}

	getRuleNames(): Array<string> {
		return GroovyParser.ruleNames;
	}

	getSerializedATN(): string {
		return GroovyParser._serializedATN;
	}

	protected createFailedPredicateException(predicate: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	private _inSwitchExpressionLevel: number = 0;

	get syntaxErrorSource(): number {
		return GroovySyntaxSource.PARSER;
	}

	get errorLine(): number {
		const token = this._input.LT(-1);

		if (null == token) {
			return -1;
		}

		return token.line;
	}

	get errorColumn(): number {
		const token = this._input.LT(-1);

		if (null == token) {
			return -1;
		}

		return token.column + 1 + token.text.length;
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, GroovyParser._ATN);
	}

	private handleRecognitionExceptionOrRethrow(localCtx: GroovyParserRuleContext, e: any): void {
		if (e instanceof RecognitionException) {
			localCtx.exception = e;
			this._errHandler.reportError(this, e);
			this._errHandler.recover(this, e);
		} else {
			throw e;
		}
	}

	public compilationUnit(): CompilationUnitContext /* throws RecognitionException */ {
		const _localCtx = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localCtx, 0, GroovyParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 330;
				this.nls();
				this.state = 335;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
					case 1: {
						this.state = 331;
						this.packageDeclaration();
						this.state = 333;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
							case 1: {
								this.state = 332;
								this.sep();
							}
								break;
						}
					}
						break;
				}
				this.state = 338;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
					case 1: {
						this.state = 337;
						this.scriptStatements();
					}
						break;
				}
				this.state = 340;
				this.match(GroovyParser.EOF);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	scriptStatements(): ScriptStatementsContext /* throws RecognitionException */ {
		const _localCtx = new ScriptStatementsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 2, GroovyParser.RULE_scriptStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 342;
				this.scriptStatement();
				this.state = 348;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 343;
								this.sep();
								this.state = 344;
								this.scriptStatement();
							}
						}
					}
					this.state = 350;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.SEMI || _la == GroovyParser.NL) {
					{
						this.state = 351;
						this.sep();
					}
				}

			}
		} catch (re /** RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	scriptStatement(): ScriptStatementContext /* throws RecognitionException */ {
		const _localCtx = new ScriptStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 4, GroovyParser.RULE_scriptStatement);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 354;
					this.importDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 355;
					this.typeDeclaration();
				}
					break;
				case 3:
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 356;
					if (!(!SemanticPredicates.isInvalidMethodDeclaration(this._input))) {
						// noinspection ExceptionCaughtLocallyJS
						throw this.createFailedPredicateException(' !SemanticPredicates.isInvalidMethodDeclaration(_input) ');
					}
					this.state = 357;
					this.methodDeclaration(3, 9);
				}
					break;
				case 4:
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 358;
					this.statement();
				}
					break;
			}
		} catch (re /** RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	packageDeclaration(): PackageDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 6, GroovyParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 361;
				this.annotationsOpt();
				this.state = 362;
				this.match(GroovyParser.PACKAGE);
				this.state = 363;
				this.qualifiedName();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	importDeclaration(): ImportDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 8, GroovyParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 365;
				this.annotationsOpt();
				this.state = 366;
				this.match(GroovyParser.IMPORT);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.STATIC) {
					{
						this.state = 367;
						this.match(GroovyParser.STATIC);
					}
				}

				this.state = 370;
				this.qualifiedName();
				this.state = 375;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.DOT: {
						this.state = 371;
						this.match(GroovyParser.DOT);
						this.state = 372;
						this.match(GroovyParser.MUL);
					}
						break;
					case GroovyParser.AS: {
						this.state = 373;
						this.match(GroovyParser.AS);
						this.state = 374;
						_localCtx.alias = this.identifier();
					}
						break;
					case GroovyParser.EOF:
					case GroovyParser.SEMI:
					case GroovyParser.NL:
						break;
					default:
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(re, _localCtx);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeDeclaration(): TypeDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 10, GroovyParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 377;
				this.classOrInterfaceModifiersOpt();
				this.state = 378;
				this.classDeclaration();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	modifier(): ModifierContext /* throws RecognitionException */ {
		const _localCtx = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localCtx, 12, GroovyParser.RULE_modifier);
		let _la: number;
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.ABSTRACT:
				case GroovyParser.DEFAULT:
				case GroovyParser.FINAL:
				case GroovyParser.NON_SEALED:
				case GroovyParser.PRIVATE:
				case GroovyParser.PROTECTED:
				case GroovyParser.PUBLIC:
				case GroovyParser.SEALED:
				case GroovyParser.STATIC:
				case GroovyParser.STRICTFP:
				case GroovyParser.AT:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 380;
					this.classOrInterfaceModifier();
				}
					break;
				case GroovyParser.DEF:
				case GroovyParser.VAR:
				case GroovyParser.NATIVE:
				case GroovyParser.SYNCHRONIZED:
				case GroovyParser.TRANSIENT:
				case GroovyParser.VOLATILE:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 381;
					_localCtx.m = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.DEF) | (1 << GroovyParser.VAR) | (1 << GroovyParser.NATIVE) | (1 << GroovyParser.SYNCHRONIZED) | (1 << GroovyParser.TRANSIENT) | (1 << GroovyParser.VOLATILE))) != 0))) {
						_localCtx.m = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) == Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	modifiersOpt(): ModifiersOptContext /* throws RecognitionException */ {
		const _localCtx = new ModifiersOptContext(this._ctx, this.state);
		this.enterRule(_localCtx, 14, GroovyParser.RULE_modifiersOpt);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 387;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
					case 1: {
						this.state = 384;
						this.modifiers();
						this.state = 385;
						this.nls();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	modifiers(): ModifiersContext /* throws RecognitionException */ {
		const _localCtx = new ModifiersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 16, GroovyParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 389;
				this.modifier();
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 390;
								this.nls();
								this.state = 391;
								this.modifier();
							}
						}
					}
					this.state = 397;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classOrInterfaceModifiersOpt(): ClassOrInterfaceModifiersOptContext /* throws RecognitionException */ {
		const _localCtx = new ClassOrInterfaceModifiersOptContext(this._ctx, this.state);
		this.enterRule(_localCtx, 18, GroovyParser.RULE_classOrInterfaceModifiersOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 405;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
					case 1: {
						this.state = 398;
						this.classOrInterfaceModifiers();
						this.state = 402;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la == GroovyParser.NL) {
							{
								{
									this.state = 399;
									this.match(GroovyParser.NL);
								}
							}
							this.state = 404;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext /* throws RecognitionException */ {
		const _localCtx = new ClassOrInterfaceModifiersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 20, GroovyParser.RULE_classOrInterfaceModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 407;
				this.classOrInterfaceModifier();
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 408;
								this.nls();
								this.state = 409;
								this.classOrInterfaceModifier();
							}
						}
					}
					this.state = 415;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classOrInterfaceModifier(): ClassOrInterfaceModifierContext /* throws RecognitionException */ {
		const _localCtx = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localCtx, 22, GroovyParser.RULE_classOrInterfaceModifier);
		let _la: number;
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.AT:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 416;
					this.annotation();
				}
					break;
				case GroovyParser.ABSTRACT:
				case GroovyParser.DEFAULT:
				case GroovyParser.FINAL:
				case GroovyParser.NON_SEALED:
				case GroovyParser.PRIVATE:
				case GroovyParser.PROTECTED:
				case GroovyParser.PUBLIC:
				case GroovyParser.SEALED:
				case GroovyParser.STATIC:
				case GroovyParser.STRICTFP:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 417;
					_localCtx.m = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.DEFAULT) | (1 << GroovyParser.FINAL) | (1 << GroovyParser.NON_SEALED) | (1 << GroovyParser.PRIVATE) | (1 << GroovyParser.PROTECTED) | (1 << GroovyParser.PUBLIC) | (1 << GroovyParser.SEALED) | (1 << GroovyParser.STATIC) | (1 << GroovyParser.STRICTFP))) != 0))) {
						_localCtx.m = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) == Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableModifier(): VariableModifierContext /* throws RecognitionException */ {
		const _localCtx = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localCtx, 24, GroovyParser.RULE_variableModifier);
		let _la: number;
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.AT:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 420;
					this.annotation();
				}
					break;
				case GroovyParser.DEF:
				case GroovyParser.VAR:
				case GroovyParser.ABSTRACT:
				case GroovyParser.FINAL:
				case GroovyParser.PRIVATE:
				case GroovyParser.PROTECTED:
				case GroovyParser.PUBLIC:
				case GroovyParser.STATIC:
				case GroovyParser.STRICTFP:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 421;
					_localCtx.m = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.DEF) | (1 << GroovyParser.VAR) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.FINAL) | (1 << GroovyParser.PRIVATE) | (1 << GroovyParser.PROTECTED) | (1 << GroovyParser.PUBLIC) | (1 << GroovyParser.STATIC) | (1 << GroovyParser.STRICTFP))) != 0))) {
						_localCtx.m = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) == Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableModifiersOpt(): VariableModifiersOptContext /* throws RecognitionException */ {
		const _localCtx = new VariableModifiersOptContext(this._ctx, this.state);
		this.enterRule(_localCtx, 26, GroovyParser.RULE_variableModifiersOpt);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 427;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
					case 1: {
						this.state = 424;
						this.variableModifiers();
						this.state = 425;
						this.nls();
					}
						break;
				}
			}
		} catch (re /* RecognitionException*/) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableModifiers(): VariableModifiersContext /* throws RecognitionException */ {
		const _localCtx = new VariableModifiersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 28, GroovyParser.RULE_variableModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 429;
				this.variableModifier();
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 430;
								this.nls();
								this.state = 431;
								this.variableModifier();
							}
						}
					}
					this.state = 437;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeParameters(): TypeParametersContext /* throws RecognitionException */ {
		const _localCtx = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 30, GroovyParser.RULE_typeParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 438;
				this.match(GroovyParser.LT);
				this.state = 439;
				this.nls();
				this.state = 440;
				this.typeParameter();
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 441;
								this.match(GroovyParser.COMMA);
								this.state = 442;
								this.nls();
								this.state = 443;
								this.typeParameter();
							}
						}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
				}
				this.state = 450;
				this.nls();
				this.state = 451;
				this.match(GroovyParser.GT);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeParameter(): TypeParameterContext /* throws RecognitionException */ {
		const _localCtx = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localCtx, 32, GroovyParser.RULE_typeParameter);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 453;
				this.annotationsOpt();
				this.state = 454;
				this.className();
				this.state = 459;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 19, this._ctx)) {
					case 1: {
						this.state = 455;
						this.match(GroovyParser.EXTENDS);
						this.state = 456;
						this.nls();
						this.state = 457;
						this.typeBound();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeBound(): TypeBoundContext /* throws RecognitionException*/ {
		const _localCtx = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localCtx, 34, GroovyParser.RULE_typeBound);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 461;
				this.type();
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 462;
								this.match(GroovyParser.BITAND);
								this.state = 463;
								this.nls();
								this.state = 464;
								this.type();
							}
						}
					}
					this.state = 470;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeList(): TypeListContext /* throws RecognitionException */ {
		const _localCtx = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 36, GroovyParser.RULE_typeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 471;
				this.type();
				this.state = 478;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 472;
								this.match(GroovyParser.COMMA);
								this.state = 473;
								this.nls();
								this.state = 474;
								this.type();
							}
						}
					}
					this.state = 480;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classDeclaration(): ClassDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 38, GroovyParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 494;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.CLASS: {
						this.state = 481;
						this.match(GroovyParser.CLASS);
						_localCtx.t = 0;
					}
						break;
					case GroovyParser.INTERFACE: {
						this.state = 483;
						this.match(GroovyParser.INTERFACE);
						_localCtx.t = 1;
					}
						break;
					case GroovyParser.ENUM: {
						this.state = 485;
						this.match(GroovyParser.ENUM);
						_localCtx.t = 2;
					}
						break;
					case GroovyParser.AT: {
						this.state = 487;
						this.match(GroovyParser.AT);
						this.state = 488;
						this.match(GroovyParser.INTERFACE);
						_localCtx.t = 3;
					}
						break;
					case GroovyParser.TRAIT: {
						this.state = 490;
						this.match(GroovyParser.TRAIT);
						_localCtx.t = 4;
					}
						break;
					case GroovyParser.RECORD: {
						this.state = 492;
						this.match(GroovyParser.RECORD);
						_localCtx.t = 5;
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 496;
				this.identifier();
				this.state = 500;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
					case 1: {
						this.state = 497;
						this.nls();
						this.state = 498;
						this.typeParameters();
					}
						break;
				}
				this.state = 505;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
					case 1: {
						this.state = 502;
						this.nls();
						this.state = 503;
						this.formalParameters();
					}
						break;
				}
				this.state = 512;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 25, this._ctx)) {
					case 1: {
						this.state = 507;
						this.nls();
						this.state = 508;
						this.match(GroovyParser.EXTENDS);
						this.state = 509;
						this.nls();
						this.state = 510;
						_localCtx.scs = this.typeList();
					}
						break;
				}
				this.state = 519;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 26, this._ctx)) {
					case 1: {
						this.state = 514;
						this.nls();
						this.state = 515;
						this.match(GroovyParser.IMPLEMENTS);
						this.state = 516;
						this.nls();
						this.state = 517;
						_localCtx.is = this.typeList();
					}
						break;
				}
				this.state = 526;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
					case 1: {
						this.state = 521;
						this.nls();
						this.state = 522;
						this.match(GroovyParser.PERMITS);
						this.state = 523;
						this.nls();
						this.state = 524;
						_localCtx.ps = this.typeList();
					}
						break;
				}
				this.state = 528;
				this.nls();
				this.state = 529;
				this.classBody(_localCtx.t);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classBody(t: number): ClassBodyContext /* throws RecognitionException */ {
		const _localCtx = new ClassBodyContext(this._ctx, this.state, t);
		this.enterRule(_localCtx, 40, GroovyParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 531;
				this.match(GroovyParser.LBRACE);
				this.state = 532;
				this.nls();
				this.state = 544;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 30, this._ctx)) {
					case 1: {
						this.state = 533;
						if (!(2 == _localCtx.t)) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' 2 == $t ');
						}
						this.state = 534;
						this.enumConstants();
						this.state = 538;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
							case 1: {
								this.state = 535;
								this.nls();
								this.state = 536;
								this.match(GroovyParser.COMMA);
							}
								break;
						}
						this.state = 541;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
							case 1: {
								this.state = 540;
								this.sep();
							}
								break;
						}
					}
						break;
					case 2: {
					}
						break;
				}
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.StringLiteral) | (1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.YIELD) | (1 << GroovyParser.CLASS) | (1 << GroovyParser.DEFAULT) | (1 << GroovyParser.ENUM) | (1 << GroovyParser.FINAL) | (1 << GroovyParser.IMPORT) | (1 << GroovyParser.INTERFACE) | (1 << GroovyParser.NATIVE) | (1 << GroovyParser.NON_SEALED) | (1 << GroovyParser.PACKAGE) | (1 << GroovyParser.PERMITS) | (1 << GroovyParser.PRIVATE) | (1 << GroovyParser.PROTECTED) | (1 << GroovyParser.PUBLIC) | (1 << GroovyParser.RECORD) | (1 << GroovyParser.SEALED) | (1 << GroovyParser.STATIC) | (1 << GroovyParser.STRICTFP) | (1 << GroovyParser.SYNCHRONIZED) | (1 << GroovyParser.TRANSIENT) | (1 << GroovyParser.VOID) | (1 << GroovyParser.VOLATILE))) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1 << (_la - 88)) & ((1 << (GroovyParser.LBRACE - 88)) | (1 << (GroovyParser.LBRACK - 88)) | (1 << (GroovyParser.LT - 88)) | (1 << (GroovyParser.QUESTION - 88)) | (1 << (GroovyParser.CapitalizedIdentifier - 88)) | (1 << (GroovyParser.Identifier - 88)) | (1 << (GroovyParser.AT - 88)))) != 0)) {
					{
						this.state = 546;
						this.classBodyDeclaration(_localCtx.t);
						this.state = 552;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
						while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
							if (_alt == 1) {
								{
									{
										this.state = 547;
										this.sep();
										this.state = 548;
										this.classBodyDeclaration(_localCtx.t);
									}
								}
							}
							this.state = 554;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
						}
					}
				}

				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.SEMI || _la == GroovyParser.NL) {
					{
						this.state = 557;
						this.sep();
					}
				}

				this.state = 560;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	enumConstants(): EnumConstantsContext /* throws RecognitionException */ {
		const _localCtx = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 42, GroovyParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 562;
				this.enumConstant();
				this.state = 570;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 563;
								this.nls();
								this.state = 564;
								this.match(GroovyParser.COMMA);
								this.state = 565;
								this.nls();
								this.state = 566;
								this.enumConstant();
							}
						}
					}
					this.state = 572;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	enumConstant(): EnumConstantContext /* throws RecognitionException */ {
		const _localCtx = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localCtx, 44, GroovyParser.RULE_enumConstant);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 573;
				this.annotationsOpt();
				this.state = 574;
				this.identifier();
				this.state = 576;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 35, this._ctx)) {
					case 1: {
						this.state = 575;
						this.arguments();
					}
						break;
				}
				this.state = 579;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
					case 1: {
						this.state = 578;
						this.anonymousInnerClassDeclaration(1);
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classBodyDeclaration(t: number): ClassBodyDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new ClassBodyDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localCtx, 46, GroovyParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 583;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la == GroovyParser.STATIC) {
						{
							this.state = 581;
							this.match(GroovyParser.STATIC);
							this.state = 582;
							this.nls();
						}
					}

					this.state = 585;
					this.block();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 586;
					this.memberDeclaration(_localCtx.t);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	memberDeclaration(t: number): MemberDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new MemberDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localCtx, 48, GroovyParser.RULE_memberDeclaration);
		try {
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 589;
					this.methodDeclaration(0, _localCtx.t);
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 590;
					this.fieldDeclaration();
				}
					break;
				case 3:
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 591;
					this.modifiersOpt();
					this.state = 594;
					this._errHandler.sync(this);
					switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
						case 1: {
							this.state = 592;
							this.classDeclaration();
						}
							break;
						case 2: {
							this.state = 593;
							this.compactConstructorDeclaration();
						}
							break;
					}
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	methodDeclaration(t: number, ct: number): MethodDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new MethodDeclarationContext(this._ctx, this.state, t, ct);
		this.enterRule(_localCtx, 50, GroovyParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 598;
				this.modifiersOpt();
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.LT) {
					{
						this.state = 599;
						this.typeParameters();
					}
				}

				this.state = 605;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 42, this._ctx)) {
					case 1: {
						this.state = 602;
						this.returnType(_localCtx.ct);
						this.state = 603;
						this.nls();
					}
						break;
				}
				this.state = 607;
				this.methodName();
				this.state = 608;
				this.formalParameters();
				this.state = 625;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
					case 1: {
						this.state = 609;
						this.match(GroovyParser.DEFAULT);
						this.state = 610;
						this.nls();
						this.state = 611;
						this.elementValue();
					}
						break;
					case 2: {
						this.state = 618;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 43, this._ctx)) {
							case 1: {
								this.state = 613;
								this.nls();
								this.state = 614;
								this.match(GroovyParser.THROWS);
								this.state = 615;
								this.nls();
								this.state = 616;
								this.qualifiedClassNameList();
							}
								break;
						}
						this.state = 623;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 44, this._ctx)) {
							case 1: {
								this.state = 620;
								this.nls();
								this.state = 621;
								this.methodBody();
							}
								break;
						}
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	compactConstructorDeclaration(): CompactConstructorDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new CompactConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 52, GroovyParser.RULE_compactConstructorDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 627;
				this.methodName();
				this.state = 628;
				this.nls();
				this.state = 629;
				this.methodBody();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	methodName(): MethodNameContext /* throws RecognitionException */ {
		const _localCtx = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 54, GroovyParser.RULE_methodName);
		try {
			this.state = 633;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 631;
					this.identifier();
				}
					break;
				case GroovyParser.StringLiteral:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 632;
					this.stringLiteral();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	returnType(ct: number): ReturnTypeContext /* throws RecognitionException */ {
		const _localCtx = new ReturnTypeContext(this._ctx, this.state, ct);
		this.enterRule(_localCtx, 56, GroovyParser.RULE_returnType);
		try {
			this.state = 637;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 635;
					this.standardType();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 636;
					this.match(GroovyParser.VOID);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	fieldDeclaration(): FieldDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 58, GroovyParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 639;
				this.variableDeclaration(1);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableDeclarators(): VariableDeclaratorsContext /* throws RecognitionException */ {
		const _localCtx = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 60, GroovyParser.RULE_variableDeclarators);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 641;
				this.variableDeclarator();
				this.state = 648;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 642;
								this.match(GroovyParser.COMMA);
								this.state = 643;
								this.nls();
								this.state = 644;
								this.variableDeclarator();
							}
						}
					}
					this.state = 650;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableDeclarator(): VariableDeclaratorContext /* throws RecognitionException */ {
		const _localCtx = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localCtx, 62, GroovyParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 651;
				this.variableDeclaratorId();
				this.state = 657;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
					case 1: {
						this.state = 652;
						this.nls();
						this.state = 653;
						this.match(GroovyParser.ASSIGN);
						this.state = 654;
						this.nls();
						this.state = 655;
						this.variableInitializer();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableDeclaratorId(): VariableDeclaratorIdContext /* throws RecognitionException */ {
		const _localCtx = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localCtx, 64, GroovyParser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 659;
				this.identifier();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableInitializer(): VariableInitializerContext /* throws RecognitionException */ {
		const _localCtx = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localCtx, 66, GroovyParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 661;
				this.enhancedStatementExpression();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableInitializers(): VariableInitializersContext /* throws RecognitionException */ {
		const _localCtx = new VariableInitializersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 68, GroovyParser.RULE_variableInitializers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 663;
				this.variableInitializer();
				this.state = 671;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 664;
								this.nls();
								this.state = 665;
								this.match(GroovyParser.COMMA);
								this.state = 666;
								this.nls();
								this.state = 667;
								this.variableInitializer();
							}
						}
					}
					this.state = 673;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 674;
				this.nls();
				this.state = 676;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 51, this._ctx)) {
					case 1: {
						this.state = 675;
						this.match(GroovyParser.COMMA);
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	emptyDims(): EmptyDimsContext /* throws RecognitionException */ {
		const _localCtx = new EmptyDimsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 70, GroovyParser.RULE_emptyDims);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 682;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1: {
							{
								this.state = 678;
								this.annotationsOpt();
								this.state = 679;
								this.match(GroovyParser.LBRACK);
								this.state = 680;
								this.match(GroovyParser.RBRACK);
							}
						}
							break;
						default:
							// noinspection ExceptionCaughtLocallyJS
							throw new NoViableAltException(this);
					}
					this.state = 684;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
				} while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	emptyDimsOpt(): EmptyDimsOptContext /* throws RecognitionException */ {
		const _localCtx = new EmptyDimsOptContext(this._ctx, this.state);
		this.enterRule(_localCtx, 72, GroovyParser.RULE_emptyDimsOpt);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 687;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
					case 1: {
						this.state = 686;
						this.emptyDims();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	standardType(): TypeContext /* throws RecognitionException */ {
		const _localCtx = new TypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 74, GroovyParser.RULE_standardType);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 689;
				this.annotationsOpt();
				this.state = 692;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.BuiltInPrimitiveType: {
						this.state = 690;
						this.primitiveType();
					}
						break;
					case GroovyParser.AS:
					case GroovyParser.DEF:
					case GroovyParser.IN:
					case GroovyParser.TRAIT:
					case GroovyParser.VAR:
					case GroovyParser.YIELD:
					case GroovyParser.PERMITS:
					case GroovyParser.RECORD:
					case GroovyParser.SEALED:
					case GroovyParser.CapitalizedIdentifier:
					case GroovyParser.Identifier: {
						this.state = 691;
						this.standardClassOrInterfaceType();
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 694;
				this.emptyDimsOpt();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	type(): TypeContext /* throws RecognitionException */ {
		const _localCtx = new TypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 76, GroovyParser.RULE_type);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 696;
				this.annotationsOpt();
				this.state = 702;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.BuiltInPrimitiveType:
					case GroovyParser.VOID: {
						this.state = 699;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case GroovyParser.BuiltInPrimitiveType: {
								this.state = 697;
								this.primitiveType();
							}
								break;
							case GroovyParser.VOID: {
								this.state = 698;
								this.match(GroovyParser.VOID);
							}
								break;
							default:
								// noinspection ExceptionCaughtLocallyJS
								throw new NoViableAltException(this);
						}
					}
						break;
					case GroovyParser.AS:
					case GroovyParser.DEF:
					case GroovyParser.IN:
					case GroovyParser.TRAIT:
					case GroovyParser.VAR:
					case GroovyParser.YIELD:
					case GroovyParser.PERMITS:
					case GroovyParser.RECORD:
					case GroovyParser.SEALED:
					case GroovyParser.CapitalizedIdentifier:
					case GroovyParser.Identifier: {
						this.state = 701;
						this.generalClassOrInterfaceType();
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 704;
				this.emptyDimsOpt();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classOrInterfaceType(): ClassOrInterfaceTypeContext /* throws RecognitionException */ {
		const _localCtx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 78, GroovyParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 708;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
					case 1: {
						this.state = 706;
						this.qualifiedClassName();
					}
						break;
					case 2: {
						this.state = 707;
						this.qualifiedStandardClassName();
					}
						break;
				}
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.LT) {
					{
						this.state = 710;
						this.typeArguments();
					}
				}

			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	generalClassOrInterfaceType(): ClassOrInterfaceTypeContext /* throws RecognitionException */ {
		const _localCtx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 80, GroovyParser.RULE_generalClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 713;
				this.qualifiedClassName();
				this.state = 715;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
					case 1: {
						this.state = 714;
						this.typeArguments();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	standardClassOrInterfaceType(): ClassOrInterfaceTypeContext /* throws RecognitionException */ {
		const _localCtx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 82, GroovyParser.RULE_standardClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 717;
				this.qualifiedStandardClassName();
				this.state = 719;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 60, this._ctx)) {
					case 1: {
						this.state = 718;
						this.typeArguments();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	primitiveType(): PrimitiveTypeContext /* throws RecognitionException */ {
		const _localCtx = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 84, GroovyParser.RULE_primitiveType);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 721;
				this.match(GroovyParser.BuiltInPrimitiveType);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeArguments(): TypeArgumentsContext /* throws RecognitionException */ {
		const _localCtx = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 86, GroovyParser.RULE_typeArguments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 723;
				this.match(GroovyParser.LT);
				this.state = 724;
				this.nls();
				this.state = 725;
				this.typeArgument();
				this.state = 732;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 726;
								this.match(GroovyParser.COMMA);
								this.state = 727;
								this.nls();
								this.state = 728;
								this.typeArgument();
							}
						}
					}
					this.state = 734;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
				}
				this.state = 735;
				this.nls();
				this.state = 736;
				this.match(GroovyParser.GT);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeArgument(): TypeArgumentContext /* throws RecognitionException */ {
		const _localCtx = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localCtx, 88, GroovyParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 63, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 738;
					this.type();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 739;
					this.annotationsOpt();
					this.state = 740;
					this.match(GroovyParser.QUESTION);
					this.state = 745;
					this._errHandler.sync(this);
					switch (this._interp.adaptivePredict(this._input, 62, this._ctx)) {
						case 1: {
							this.state = 741;
							_la = this._input.LA(1);
							if (!(_la == GroovyParser.EXTENDS || _la == GroovyParser.SUPER)) {
								this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) == Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 742;
							this.nls();
							this.state = 743;
							this.type();
						}
							break;
					}
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	annotatedQualifiedClassName(): AnnotatedQualifiedClassNameContext /* throws RecognitionException */ {
		const _localCtx = new AnnotatedQualifiedClassNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 90, GroovyParser.RULE_annotatedQualifiedClassName);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 749;
				this.annotationsOpt();
				this.state = 750;
				this.qualifiedClassName();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	qualifiedClassNameList(): QualifiedClassNameListContext /* throws RecognitionException */ {
		const _localCtx = new QualifiedClassNameListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 92, GroovyParser.RULE_qualifiedClassNameList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 752;
				this.annotatedQualifiedClassName();
				this.state = 759;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 753;
								this.match(GroovyParser.COMMA);
								this.state = 754;
								this.nls();
								this.state = 755;
								this.annotatedQualifiedClassName();
							}
						}
					}
					this.state = 761;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	formalParameters(): FormalParametersContext /* throws RecognitionException */ {
		const _localCtx = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 94, GroovyParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 762;
				this.match(GroovyParser.LPAREN);
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.YIELD) | (1 << GroovyParser.FINAL) | (1 << GroovyParser.IMPORT) | (1 << GroovyParser.PACKAGE) | (1 << GroovyParser.PERMITS) | (1 << GroovyParser.PRIVATE) | (1 << GroovyParser.PROTECTED) | (1 << GroovyParser.PUBLIC) | (1 << GroovyParser.RECORD) | (1 << GroovyParser.SEALED) | (1 << GroovyParser.STATIC) | (1 << GroovyParser.STRICTFP) | (1 << GroovyParser.VOID))) != 0) || ((((_la - 90)) & ~0x3f) == 0 && ((1 << (_la - 90)) & ((1 << (GroovyParser.LBRACK - 90)) | (1 << (GroovyParser.QUESTION - 90)) | (1 << (GroovyParser.CapitalizedIdentifier - 90)) | (1 << (GroovyParser.Identifier - 90)) | (1 << (GroovyParser.AT - 90)) | (1 << (GroovyParser.ELLIPSIS - 90)))) != 0)) {
					{
						this.state = 763;
						this.formalParameterList();
					}
				}

				this.state = 766;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	formalParameterList(): FormalParameterListContext /* throws RecognitionException */ {
		const _localCtx = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 96, GroovyParser.RULE_formalParameterList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 770;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 66, this._ctx)) {
					case 1: {
						this.state = 768;
						this.formalParameter();
					}
						break;
					case 2: {
						this.state = 769;
						this.thisFormalParameter();
					}
						break;
				}
				this.state = 778;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 772;
								this.match(GroovyParser.COMMA);
								this.state = 773;
								this.nls();
								this.state = 774;
								this.formalParameter();
							}
						}
					}
					this.state = 780;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	thisFormalParameter(): ThisFormalParameterContext /* throws RecognitionException */ {
		const _localCtx = new ThisFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localCtx, 98, GroovyParser.RULE_thisFormalParameter);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 781;
				this.type();
				this.state = 782;
				this.match(GroovyParser.THIS);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	formalParameter(): FormalParameterContext /* throws RecognitionException */ {
		const _localCtx = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localCtx, 100, GroovyParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 784;
				this.variableModifiersOpt();
				this.state = 786;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 68, this._ctx)) {
					case 1: {
						this.state = 785;
						this.type();
					}
						break;
				}
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.ELLIPSIS) {
					{
						this.state = 788;
						this.match(GroovyParser.ELLIPSIS);
					}
				}

				this.state = 791;
				this.variableDeclaratorId();
				this.state = 797;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 70, this._ctx)) {
					case 1: {
						this.state = 792;
						this.nls();
						this.state = 793;
						this.match(GroovyParser.ASSIGN);
						this.state = 794;
						this.nls();
						this.state = 795;
						this.expression(0);
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	methodBody(): MethodBodyContext /* throws RecognitionException */ {
		const _localCtx = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localCtx, 102, GroovyParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 799;
				this.block();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	qualifiedName(): QualifiedNameContext /* throws RecognitionException */ {
		const _localCtx = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 104, GroovyParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 801;
				this.qualifiedNameElement();
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 802;
								this.match(GroovyParser.DOT);
								this.state = 803;
								this.qualifiedNameElement();
							}
						}
					}
					this.state = 808;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	qualifiedNameElement(): QualifiedNameElementContext /* throws RecognitionException */ {
		const _localCtx = new QualifiedNameElementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 106, GroovyParser.RULE_qualifiedNameElement);
		try {
			this.state = 814;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 72, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 809;
					this.identifier();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 810;
					this.match(GroovyParser.DEF);
				}
					break;
				case 3:
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 811;
					this.match(GroovyParser.IN);
				}
					break;
				case 4:
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 812;
					this.match(GroovyParser.AS);
				}
					break;
				case 5:
					this.enterOuterAlt(_localCtx, 5);
				{
					this.state = 813;
					this.match(GroovyParser.TRAIT);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	qualifiedNameElements(): QualifiedNameElementsContext /* throws RecognitionException */ {
		const _localCtx = new QualifiedNameElementsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 108, GroovyParser.RULE_qualifiedNameElements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 821;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 816;
								this.qualifiedNameElement();
								this.state = 817;
								this.match(GroovyParser.DOT);
							}
						}
					}
					this.state = 823;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	qualifiedClassName(): QualifiedClassNameContext /* throws RecognitionException */ {
		const _localCtx = new QualifiedClassNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 110, GroovyParser.RULE_qualifiedClassName);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 824;
				this.qualifiedNameElements();
				this.state = 825;
				this.identifier();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	qualifiedStandardClassName(): QualifiedStandardClassNameContext /* throws RecognitionException */ {
		const _localCtx = new QualifiedStandardClassNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 112, GroovyParser.RULE_qualifiedStandardClassName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 827;
				this.qualifiedNameElements();
				this.state = 828;
				this.className();
				this.state = 833;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 829;
								this.match(GroovyParser.DOT);
								this.state = 830;
								this.className();
							}
						}
					}
					this.state = 835;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	literal(): LiteralContext /* throws RecognitionException */ {
		let _localCtx = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localCtx, 114, GroovyParser.RULE_literal);
		try {
			this.state = 841;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.IntegerLiteral:
					_localCtx = new IntegerLiteralAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 836;
					this.match(GroovyParser.IntegerLiteral);
				}
					break;
				case GroovyParser.FloatingPointLiteral:
					_localCtx = new FloatingPointLiteralAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 837;
					this.match(GroovyParser.FloatingPointLiteral);
				}
					break;
				case GroovyParser.StringLiteral:
					_localCtx = new StringLiteralAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 838;
					this.stringLiteral();
				}
					break;
				case GroovyParser.BooleanLiteral:
					_localCtx = new BooleanLiteralAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 839;
					this.match(GroovyParser.BooleanLiteral);
				}
					break;
				case GroovyParser.NullLiteral:
					_localCtx = new NullLiteralAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 5);
				{
					this.state = 840;
					this.match(GroovyParser.NullLiteral);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	gstring(): GstringContext /* throws RecognitionException */ {
		const _localCtx = new GstringContext(this._ctx, this.state);
		this.enterRule(_localCtx, 116, GroovyParser.RULE_gstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 843;
				this.match(GroovyParser.GStringBegin);
				this.state = 844;
				this.gstringValue();
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la == GroovyParser.GStringPart) {
					{
						{
							this.state = 845;
							this.match(GroovyParser.GStringPart);
							this.state = 846;
							this.gstringValue();
						}
					}
					this.state = 851;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 852;
				this.match(GroovyParser.GStringEnd);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	gstringValue(): GstringValueContext /* throws RecognitionException */ {
		const _localCtx = new GstringValueContext(this._ctx, this.state);
		this.enterRule(_localCtx, 118, GroovyParser.RULE_gstringValue);
		try {
			this.state = 856;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 854;
					this.gstringPath();
				}
					break;
				case GroovyParser.LBRACE:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 855;
					this.closure();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	gstringPath(): GstringPathContext /* throws RecognitionException */ {
		const _localCtx = new GstringPathContext(this._ctx, this.state);
		this.enterRule(_localCtx, 120, GroovyParser.RULE_gstringPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 858;
				this.identifier();
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la == GroovyParser.GStringPathPart) {
					{
						{
							this.state = 859;
							this.match(GroovyParser.GStringPathPart);
						}
					}
					this.state = 864;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	lambdaExpression(): StandardLambdaExpressionContext /* throws RecognitionException */ {
		const _localCtx = new StandardLambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 122, GroovyParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 865;
				this.lambdaParameters();
				this.state = 866;
				this.nls();
				this.state = 867;
				this.match(GroovyParser.ARROW);
				this.state = 868;
				this.nls();
				this.state = 869;
				this.lambdaBody();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	standardLambdaExpression(): StandardLambdaExpressionContext /* throws RecognitionException */ {
		const _localCtx = new StandardLambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 124, GroovyParser.RULE_standardLambdaExpression);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 871;
				this.standardLambdaParameters();
				this.state = 872;
				this.nls();
				this.state = 873;
				this.match(GroovyParser.ARROW);
				this.state = 874;
				this.nls();
				this.state = 875;
				this.lambdaBody();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	lambdaParameters(): StandardLambdaParametersContext /* throws RecognitionException */ {
		const _localCtx = new StandardLambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 126, GroovyParser.RULE_lambdaParameters);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 877;
				this.formalParameters();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	standardLambdaParameters(): StandardLambdaParametersContext /* throws RecognitionException */ {
		const _localCtx = new StandardLambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localCtx, 128, GroovyParser.RULE_standardLambdaParameters);
		try {
			this.state = 881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.LPAREN:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 879;
					this.formalParameters();
				}
					break;
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 880;
					this.variableDeclaratorId();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	lambdaBody(): LambdaBodyContext /* throws RecognitionException */ {
		const _localCtx = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localCtx, 130, GroovyParser.RULE_lambdaBody);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 80, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 883;
					this.block();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 884;
					this.statementExpression();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	closure(): ClosureContext /* throws RecognitionException */ {
		const _localCtx = new ClosureContext(this._ctx, this.state);
		this.enterRule(_localCtx, 132, GroovyParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 887;
				this.match(GroovyParser.LBRACE);
				this.state = 896;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 82, this._ctx)) {
					case 1: {
						this.state = 888;
						this.nls();
						this.state = 892;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.DEF) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.BuiltInPrimitiveType) | (1 << GroovyParser.ABSTRACT) | (1 << GroovyParser.YIELD) | (1 << GroovyParser.FINAL) | (1 << GroovyParser.IMPORT) | (1 << GroovyParser.PACKAGE) | (1 << GroovyParser.PERMITS) | (1 << GroovyParser.PRIVATE) | (1 << GroovyParser.PROTECTED) | (1 << GroovyParser.PUBLIC) | (1 << GroovyParser.RECORD) | (1 << GroovyParser.SEALED) | (1 << GroovyParser.STATIC) | (1 << GroovyParser.STRICTFP) | (1 << GroovyParser.VOID))) != 0) || ((((_la - 90)) & ~0x3f) == 0 && ((1 << (_la - 90)) & ((1 << (GroovyParser.LBRACK - 90)) | (1 << (GroovyParser.QUESTION - 90)) | (1 << (GroovyParser.CapitalizedIdentifier - 90)) | (1 << (GroovyParser.Identifier - 90)) | (1 << (GroovyParser.AT - 90)) | (1 << (GroovyParser.ELLIPSIS - 90)))) != 0)) {
							{
								this.state = 889;
								this.formalParameterList();
								this.state = 890;
								this.nls();
							}
						}

						this.state = 894;
						this.match(GroovyParser.ARROW);
					}
						break;
				}
				this.state = 899;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 83, this._ctx)) {
					case 1: {
						this.state = 898;
						this.sep();
					}
						break;
				}
				this.state = 901;
				this.blockStatementsOpt();
				this.state = 902;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	closureOrLambdaExpression(): ClosureOrLambdaExpressionContext /* throws RecognitionException */ {
		const _localCtx = new ClosureOrLambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 134, GroovyParser.RULE_closureOrLambdaExpression);
		try {
			this.state = 906;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.LBRACE:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 904;
					this.closure();
				}
					break;
				case GroovyParser.LPAREN:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 905;
					this.lambdaExpression();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	blockStatementsOpt(): BlockStatementsOptContext /* throws RecognitionException */ {
		const _localCtx = new BlockStatementsOptContext(this._ctx, this.state);
		this.enterRule(_localCtx, 136, GroovyParser.RULE_blockStatementsOpt);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 909;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 85, this._ctx)) {
					case 1: {
						this.state = 908;
						this.blockStatements();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	blockStatements(): BlockStatementsContext /* throws RecognitionException */ {
		const _localCtx = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 138, GroovyParser.RULE_blockStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 911;
				this.blockStatement();
				this.state = 917;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 912;
								this.sep();
								this.state = 913;
								this.blockStatement();
							}
						}
					}
					this.state = 919;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
				}
				this.state = 921;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 87, this._ctx)) {
					case 1: {
						this.state = 920;
						this.sep();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	annotationsOpt(): AnnotationsOptContext /* throws RecognitionException */ {
		const _localCtx = new AnnotationsOptContext(this._ctx, this.state);
		this.enterRule(_localCtx, 140, GroovyParser.RULE_annotationsOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.AT) {
					{
						this.state = 923;
						this.annotation();
						this.state = 929;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
						while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
							if (_alt == 1) {
								{
									{
										this.state = 924;
										this.nls();
										this.state = 925;
										this.annotation();
									}
								}
							}
							this.state = 931;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
						}
						this.state = 932;
						this.nls();
					}
				}

			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	annotation(): AnnotationContext /* throws RecognitionException */ {
		const _localCtx = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 142, GroovyParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 936;
				this.match(GroovyParser.AT);
				this.state = 937;
				this.annotationName();
				this.state = 945;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 91, this._ctx)) {
					case 1: {
						this.state = 938;
						this.nls();
						this.state = 939;
						this.match(GroovyParser.LPAREN);
						this.state = 941;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 90, this._ctx)) {
							case 1: {
								this.state = 940;
								this.elementValues();
							}
								break;
						}
						this.state = 943;
						this.rparen();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	elementValues(): ElementValuesContext /* throws RecognitionException */ {
		const _localCtx = new ElementValuesContext(this._ctx, this.state);
		this.enterRule(_localCtx, 144, GroovyParser.RULE_elementValues);
		try {
			this.state = 949;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 92, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 947;
					this.elementValuePairs();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 948;
					this.elementValue();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	annotationName(): AnnotationNameContext /* throws RecognitionException */ {
		const _localCtx = new AnnotationNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 146, GroovyParser.RULE_annotationName);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 951;
				this.qualifiedClassName();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	elementValuePairs(): ElementValuePairsContext /* throws RecognitionException */ {
		const _localCtx = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 148, GroovyParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 953;
				this.elementValuePair();
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la == GroovyParser.COMMA) {
					{
						{
							this.state = 954;
							this.match(GroovyParser.COMMA);
							this.state = 955;
							this.elementValuePair();
						}
					}
					this.state = 960;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	elementValuePair(): ElementValuePairContext /* throws RecognitionException */ {
		const _localCtx = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localCtx, 150, GroovyParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 961;
				this.elementValuePairName();
				this.state = 962;
				this.nls();
				this.state = 963;
				this.match(GroovyParser.ASSIGN);
				this.state = 964;
				this.nls();
				this.state = 965;
				this.elementValue();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	elementValuePairName(): ElementValuePairNameContext /* throws RecognitionException */ {
		const _localCtx = new ElementValuePairNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 152, GroovyParser.RULE_elementValuePairName);
		try {
			this.state = 969;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 94, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 967;
					this.identifier();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 968;
					this.keywords();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	elementValue(): ElementValueContext /* throws RecognitionException */ {
		const _localCtx = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localCtx, 154, GroovyParser.RULE_elementValue);
		try {
			this.state = 974;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 95, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 971;
					this.elementValueArrayInitializer();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 972;
					this.annotation();
				}
					break;
				case 3:
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 973;
					this.expression(0);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	elementValueArrayInitializer(): ElementValueArrayInitializerContext /* throws RecognitionException */ {
		const _localCtx = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localCtx, 156, GroovyParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 976;
				this.match(GroovyParser.LBRACK);
				this.state = 988;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 98, this._ctx)) {
					case 1: {
						this.state = 977;
						this.elementValue();
						this.state = 982;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
						while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
							if (_alt == 1) {
								{
									{
										this.state = 978;
										this.match(GroovyParser.COMMA);
										this.state = 979;
										this.elementValue();
									}
								}
							}
							this.state = 984;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
						}
						this.state = 986;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la == GroovyParser.COMMA) {
							{
								this.state = 985;
								this.match(GroovyParser.COMMA);
							}
						}

					}
						break;
				}
				this.state = 990;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	block(): BlockContext /* throws RecognitionException */ {
		const _localCtx = new BlockContext(this._ctx, this.state);
		this.enterRule(_localCtx, 158, GroovyParser.RULE_block);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 992;
				this.match(GroovyParser.LBRACE);
				this.state = 994;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 99, this._ctx)) {
					case 1: {
						this.state = 993;
						this.sep();
					}
						break;
				}
				this.state = 996;
				this.blockStatementsOpt();
				this.state = 997;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	blockStatement(): BlockStatementContext /* throws RecognitionException */ {
		const _localCtx = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 160, GroovyParser.RULE_blockStatement);
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 100, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 999;
					this.localVariableDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1000;
					this.statement();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	localVariableDeclaration(): LocalVariableDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localCtx, 162, GroovyParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1003;
				if (!(!SemanticPredicates.isInvalidLocalVariableDeclaration(this._input))) {
					// noinspection ExceptionCaughtLocallyJS
					throw this.createFailedPredicateException(' !SemanticPredicates.isInvalidLocalVariableDeclaration(_input) ');
				}
				this.state = 1004;
				this.variableDeclaration(0);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableDeclaration(t: number): VariableDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new VariableDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localCtx, 164, GroovyParser.RULE_variableDeclaration);
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 103, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1006;
					this.modifiers();
					this.state = 1007;
					this.nls();
					this.state = 1018;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
						case GroovyParser.AS:
						case GroovyParser.DEF:
						case GroovyParser.IN:
						case GroovyParser.TRAIT:
						case GroovyParser.VAR:
						case GroovyParser.BuiltInPrimitiveType:
						case GroovyParser.YIELD:
						case GroovyParser.IMPORT:
						case GroovyParser.PACKAGE:
						case GroovyParser.PERMITS:
						case GroovyParser.RECORD:
						case GroovyParser.SEALED:
						case GroovyParser.VOID:
						case GroovyParser.LBRACK:
						case GroovyParser.QUESTION:
						case GroovyParser.CapitalizedIdentifier:
						case GroovyParser.Identifier:
						case GroovyParser.AT: {
							this.state = 1009;
							this._errHandler.sync(this);
							switch (this._interp.adaptivePredict(this._input, 101, this._ctx)) {
								case 1: {
									this.state = 1008;
									this.type();
								}
									break;
							}
							this.state = 1011;
							this.variableDeclarators();
						}
							break;
						case GroovyParser.LPAREN: {
							this.state = 1012;
							this.typeNamePairs();
							this.state = 1013;
							this.nls();
							this.state = 1014;
							this.match(GroovyParser.ASSIGN);
							this.state = 1015;
							this.nls();
							this.state = 1016;
							this.variableInitializer();
						}
							break;
						default:
							// noinspection ExceptionCaughtLocallyJS
							throw new NoViableAltException(this);
					}
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1020;
					this.type();
					this.state = 1021;
					this.variableDeclarators();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeNamePairs(): TypeNamePairsContext /* throws RecognitionException */ {
		const _localCtx = new TypeNamePairsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 166, GroovyParser.RULE_typeNamePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1025;
				this.match(GroovyParser.LPAREN);
				this.state = 1026;
				this.typeNamePair();
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la == GroovyParser.COMMA) {
					{
						{
							this.state = 1027;
							this.match(GroovyParser.COMMA);
							this.state = 1028;
							this.typeNamePair();
						}
					}
					this.state = 1033;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1034;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeNamePair(): TypeNamePairContext /* throws RecognitionException */ {
		const _localCtx = new TypeNamePairContext(this._ctx, this.state);
		this.enterRule(_localCtx, 168, GroovyParser.RULE_typeNamePair);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1037;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 105, this._ctx)) {
					case 1: {
						this.state = 1036;
						this.type();
					}
						break;
				}
				this.state = 1039;
				this.variableDeclaratorId();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	variableNames(): VariableNamesContext /* throws RecognitionException */ {
		const _localCtx = new VariableNamesContext(this._ctx, this.state);
		this.enterRule(_localCtx, 170, GroovyParser.RULE_variableNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1041;
				this.match(GroovyParser.LPAREN);
				this.state = 1042;
				this.variableDeclaratorId();
				this.state = 1045;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 1043;
							this.match(GroovyParser.COMMA);
							this.state = 1044;
							this.variableDeclaratorId();
						}
					}
					this.state = 1047;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la == GroovyParser.COMMA);
				this.state = 1049;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	conditionalStatement(): ConditionalStatementContext /* throws RecognitionException */ {
		const _localCtx = new ConditionalStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 172, GroovyParser.RULE_conditionalStatement);
		try {
			this.state = 1053;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.IF:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1051;
					this.ifElseStatement();
				}
					break;
				case GroovyParser.SWITCH:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1052;
					this.switchStatement();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	ifElseStatement(): IfElseStatementContext /* throws RecognitionException */ {
		const _localCtx = new IfElseStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 174, GroovyParser.RULE_ifElseStatement);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1055;
				this.match(GroovyParser.IF);
				this.state = 1056;
				this.expressionInPar();
				this.state = 1057;
				this.nls();
				this.state = 1058;
				_localCtx.tb = this.statement();
				this.state = 1067;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 109, this._ctx)) {
					case 1: {
						this.state = 1061;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 108, this._ctx)) {
							case 1: {
								this.state = 1059;
								this.nls();
							}
								break;
							case 2: {
								this.state = 1060;
								this.sep();
							}
								break;
						}
						this.state = 1063;
						this.match(GroovyParser.ELSE);
						this.state = 1064;
						this.nls();
						this.state = 1065;
						_localCtx.fb = this.statement();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	switchStatement(): SwitchStatementContext /* throws RecognitionException */ {
		const _localCtx = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 176, GroovyParser.RULE_switchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1069;
				this.match(GroovyParser.SWITCH);
				this.state = 1070;
				this.expressionInPar();
				this.state = 1071;
				this.nls();
				this.state = 1072;
				this.match(GroovyParser.LBRACE);
				this.state = 1073;
				this.nls();
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.CASE || _la == GroovyParser.DEFAULT) {
					{
						this.state = 1075;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1: {
									{
										this.state = 1074;
										this.switchBlockStatementGroup();
									}
								}
									break;
								default:
									// noinspection ExceptionCaughtLocallyJS
									throw new NoViableAltException(this);
							}
							this.state = 1077;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
						} while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER);
						this.state = 1079;
						this.nls();
					}
				}

				this.state = 1083;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	loopStatement(): LoopStatementContext /* throws RecognitionException */ {
		let _localCtx = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 178, GroovyParser.RULE_loopStatement);
		try {
			this.state = 1104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.FOR:
					_localCtx = new ForStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1085;
					this.match(GroovyParser.FOR);
					this.state = 1086;
					this.match(GroovyParser.LPAREN);
					this.state = 1087;
					this.forControl();
					this.state = 1088;
					this.rparen();
					this.state = 1089;
					this.nls();
					this.state = 1090;
					this.statement();
				}
					break;
				case GroovyParser.WHILE:
					_localCtx = new WhileStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1092;
					this.match(GroovyParser.WHILE);
					this.state = 1093;
					this.expressionInPar();
					this.state = 1094;
					this.nls();
					this.state = 1095;
					this.statement();
				}
					break;
				case GroovyParser.DO:
					_localCtx = new DoWhileStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1097;
					this.match(GroovyParser.DO);
					this.state = 1098;
					this.nls();
					this.state = 1099;
					this.statement();
					this.state = 1100;
					this.nls();
					this.state = 1101;
					this.match(GroovyParser.WHILE);
					this.state = 1102;
					this.expressionInPar();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	continueStatement(): ContinueStatementContext /* throws RecognitionException */ {
		const _localCtx = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 180, GroovyParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1106;
				this.match(GroovyParser.CONTINUE);
				this.state = 1108;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 113, this._ctx)) {
					case 1: {
						this.state = 1107;
						this.identifier();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	breakStatement(): BreakStatementContext /* throws RecognitionException */ {
		const _localCtx = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 182, GroovyParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1110;
				this.match(GroovyParser.BREAK);
				this.state = 1112;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 114, this._ctx)) {
					case 1: {
						this.state = 1111;
						this.identifier();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	yieldStatement(): YieldStatementContext /* throws RecognitionException */ {
		const _localCtx = new YieldStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 184, GroovyParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1114;
				this.match(GroovyParser.YIELD);
				this.state = 1115;
				this.expression(0);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	tryCatchStatement(): TryCatchStatementContext /* throws RecognitionException */ {
		const _localCtx = new TryCatchStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 186, GroovyParser.RULE_tryCatchStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1117;
				this.match(GroovyParser.TRY);
				this.state = 1119;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 115, this._ctx)) {
					case 1: {
						this.state = 1118;
						this.resources();
					}
						break;
				}
				this.state = 1121;
				this.nls();
				this.state = 1122;
				this.block();
				this.state = 1128;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1123;
								this.nls();
								this.state = 1124;
								this.catchClause();
							}
						}
					}
					this.state = 1130;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
				}
				this.state = 1134;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 117, this._ctx)) {
					case 1: {
						this.state = 1131;
						this.nls();
						this.state = 1132;
						this.finallyBlock();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	assertStatement(): AssertStatementContext /* throws RecognitionException */ {
		const _localCtx = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 188, GroovyParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1136;
				this.match(GroovyParser.ASSERT);
				this.state = 1137;
				_localCtx.ce = this.expression(0);
				this.state = 1143;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 118, this._ctx)) {
					case 1: {
						this.state = 1138;
						this.nls();
						this.state = 1139;
						_la = this._input.LA(1);
						if (!(_la == GroovyParser.COMMA || _la == GroovyParser.COLON)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) == Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1140;
						this.nls();
						this.state = 1141;
						_localCtx.me = this.expression(0);
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	statement(): StatementContext /* throws RecognitionException */ {
		let _localCtx = new StatementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 190, GroovyParser.RULE_statement);
		try {
			this.state = 1173;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 120, this._ctx)) {
				case 1:
					_localCtx = new BlockStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1145;
					this.block();
				}
					break;
				case 2:
					_localCtx = new ConditionalStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1146;
					this.conditionalStatement();
				}
					break;
				case 3:
					_localCtx = new LoopStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1147;
					this.loopStatement();
				}
					break;
				case 4:
					_localCtx = new TryCatchStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 1148;
					this.tryCatchStatement();
				}
					break;
				case 5:
					_localCtx = new SynchronizedStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 5);
				{
					this.state = 1149;
					this.match(GroovyParser.SYNCHRONIZED);
					this.state = 1150;
					this.expressionInPar();
					this.state = 1151;
					this.nls();
					this.state = 1152;
					this.block();
				}
					break;
				case 6:
					_localCtx = new ReturnStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 6);
				{
					this.state = 1154;
					this.match(GroovyParser.RETURN);
					this.state = 1156;
					this._errHandler.sync(this);
					switch (this._interp.adaptivePredict(this._input, 119, this._ctx)) {
						case 1: {
							this.state = 1155;
							this.expression(0);
						}
							break;
					}
				}
					break;
				case 7:
					_localCtx = new ThrowStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 7);
				{
					this.state = 1158;
					this.match(GroovyParser.THROW);
					this.state = 1159;
					this.expression(0);
				}
					break;
				case 8:
					_localCtx = new BreakStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 8);
				{
					this.state = 1160;
					this.breakStatement();
				}
					break;
				case 9:
					_localCtx = new ContinueStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 9);
				{
					this.state = 1161;
					this.continueStatement();
				}
					break;
				case 10:
					_localCtx = new YieldStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 10);
				{
					this.state = 1162;
					if (!(this._inSwitchExpressionLevel > 0)) {
						// noinspection ExceptionCaughtLocallyJS
						throw this.createFailedPredicateException(' inSwitchExpressionLevel > 0 ');
					}
					this.state = 1163;
					this.yieldStatement();
				}
					break;
				case 11:
					_localCtx = new LabeledStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 11);
				{
					this.state = 1164;
					this.identifier();
					this.state = 1165;
					this.match(GroovyParser.COLON);
					this.state = 1166;
					this.nls();
					this.state = 1167;
					this.statement();
				}
					break;
				case 12:
					_localCtx = new AssertStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 12);
				{
					this.state = 1169;
					this.assertStatement();
				}
					break;
				case 13:
					_localCtx = new LocalVariableDeclarationStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 13);
				{
					this.state = 1170;
					this.localVariableDeclaration();
				}
					break;
				case 14:
					_localCtx = new ExpressionStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 14);
				{
					this.state = 1171;
					this.statementExpression();
				}
					break;
				case 15:
					_localCtx = new EmptyStmtAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 15);
				{
					this.state = 1172;
					this.match(GroovyParser.SEMI);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	catchClause(): CatchClauseContext /* throws RecognitionException */ {
		const _localCtx = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localCtx, 192, GroovyParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1175;
				this.match(GroovyParser.CATCH);
				this.state = 1176;
				this.match(GroovyParser.LPAREN);
				this.state = 1177;
				this.variableModifiersOpt();
				this.state = 1179;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 121, this._ctx)) {
					case 1: {
						this.state = 1178;
						this.catchType();
					}
						break;
				}
				this.state = 1181;
				this.identifier();
				this.state = 1182;
				this.rparen();
				this.state = 1183;
				this.nls();
				this.state = 1184;
				this.block();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	catchType(): CatchTypeContext /* throws RecognitionException */ {
		const _localCtx = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 194, GroovyParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1186;
				this.qualifiedClassName();
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la == GroovyParser.BITOR) {
					{
						{
							this.state = 1187;
							this.match(GroovyParser.BITOR);
							this.state = 1188;
							this.qualifiedClassName();
						}
					}
					this.state = 1193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	finallyBlock(): FinallyBlockContext /* throws RecognitionException */ {
		const _localCtx = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localCtx, 196, GroovyParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1194;
				this.match(GroovyParser.FINALLY);
				this.state = 1195;
				this.nls();
				this.state = 1196;
				this.block();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	resources(): ResourcesContext /* throws RecognitionException */ {
		const _localCtx = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localCtx, 198, GroovyParser.RULE_resources);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1198;
				this.match(GroovyParser.LPAREN);
				this.state = 1199;
				this.nls();
				this.state = 1200;
				this.resourceList();
				this.state = 1202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.SEMI || _la == GroovyParser.NL) {
					{
						this.state = 1201;
						this.sep();
					}
				}

				this.state = 1204;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	resourceList(): ResourceListContext /* throws RecognitionException */ {
		const _localCtx = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 200, GroovyParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1206;
				this.resource();
				this.state = 1212;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1207;
								this.sep();
								this.state = 1208;
								this.resource();
							}
						}
					}
					this.state = 1214;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
				}
			}
		} catch (re /* RecognitionException*/) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	resource(): ResourceContext /* throws RecognitionException */ {
		const _localCtx = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localCtx, 202, GroovyParser.RULE_resource);
		try {
			this.state = 1217;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 125, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1215;
					this.localVariableDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1216;
					this.expression(0);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	switchBlockStatementGroup(): SwitchBlockStatementGroupContext /* throws RecognitionException */ {
		const _localCtx = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localCtx, 204, GroovyParser.RULE_switchBlockStatementGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1219;
				this.switchLabel();
				this.state = 1225;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1220;
								this.nls();
								this.state = 1221;
								this.switchLabel();
							}
						}
					}
					this.state = 1227;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
				}
				this.state = 1228;
				this.nls();
				this.state = 1229;
				this.blockStatements();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	switchLabel(): SwitchLabelContext /* throws RecognitionException */ {
		const _localCtx = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localCtx, 206, GroovyParser.RULE_switchLabel);
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.CASE:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1231;
					this.match(GroovyParser.CASE);
					this.state = 1232;
					this.expression(0);
					this.state = 1233;
					this.match(GroovyParser.COLON);
				}
					break;
				case GroovyParser.DEFAULT:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1235;
					this.match(GroovyParser.DEFAULT);
					this.state = 1236;
					this.match(GroovyParser.COLON);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	forControl(): ForControlContext /* throws RecognitionException */ {
		const _localCtx = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localCtx, 208, GroovyParser.RULE_forControl);
		try {
			this.state = 1241;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 128, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1239;
					this.enhancedForControl();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1240;
					this.classicalForControl();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	enhancedForControl(): EnhancedForControlContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localCtx, 210, GroovyParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1243;
				this.variableModifiersOpt();
				this.state = 1245;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 129, this._ctx)) {
					case 1: {
						this.state = 1244;
						this.type();
					}
						break;
				}
				this.state = 1247;
				this.variableDeclaratorId();
				this.state = 1248;
				_la = this._input.LA(1);
				if (!(_la == GroovyParser.IN || _la == GroovyParser.COLON)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) == Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1249;
				this.expression(0);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	classicalForControl(): ClassicalForControlContext /* throws RecognitionException */ {
		const _localCtx = new ClassicalForControlContext(this._ctx, this.state);
		this.enterRule(_localCtx, 212, GroovyParser.RULE_classicalForControl);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1252;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 130, this._ctx)) {
					case 1: {
						this.state = 1251;
						this.forInit();
					}
						break;
				}
				this.state = 1254;
				this.match(GroovyParser.SEMI);
				this.state = 1256;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 131, this._ctx)) {
					case 1: {
						this.state = 1255;
						this.expression(0);
					}
						break;
				}
				this.state = 1258;
				this.match(GroovyParser.SEMI);
				this.state = 1260;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 132, this._ctx)) {
					case 1: {
						this.state = 1259;
						this.forUpdate();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	forInit(): ForInitContext /* throws RecognitionException */ {
		const _localCtx = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localCtx, 214, GroovyParser.RULE_forInit);
		try {
			this.state = 1264;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 133, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1262;
					this.localVariableDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1263;
					this.expressionList(false);
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	forUpdate(): ForUpdateContext /* throws RecognitionException */ {
		const _localCtx = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localCtx, 216, GroovyParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1266;
				this.expressionList(false);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	castParExpression(): CastParExpressionContext /* throws RecognitionException */ {
		const _localCtx = new CastParExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 218, GroovyParser.RULE_castParExpression);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1268;
				this.match(GroovyParser.LPAREN);
				this.state = 1269;
				this.type();
				this.state = 1270;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	parExpression(): ParExpressionContext /* throws RecognitionException */ {
		const _localCtx = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 220, GroovyParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1272;
				this.expressionInPar();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	expressionInPar(): ExpressionInParContext /* throws RecognitionException */ {
		const _localCtx = new ExpressionInParContext(this._ctx, this.state);
		this.enterRule(_localCtx, 222, GroovyParser.RULE_expressionInPar);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1274;
				this.match(GroovyParser.LPAREN);
				this.state = 1275;
				this.enhancedStatementExpression();
				this.state = 1276;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	expressionList(canSpread: boolean): ExpressionListContext /* throws RecognitionException */ {
		const _localCtx = new ExpressionListContext(this._ctx, this.state, canSpread);
		this.enterRule(_localCtx, 224, GroovyParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1278;
				this.expressionListElement(_localCtx.canSpread);
				this.state = 1285;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1279;
								this.match(GroovyParser.COMMA);
								this.state = 1280;
								this.nls();
								this.state = 1281;
								this.expressionListElement(_localCtx.canSpread);
							}
						}
					}
					this.state = 1287;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	expressionListElement(canSpread: boolean): ExpressionListElementContext /* throws RecognitionException */ {
		const _localCtx = new ExpressionListElementContext(this._ctx, this.state, canSpread);
		this.enterRule(_localCtx, 226, GroovyParser.RULE_expressionListElement);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1289;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 135, this._ctx)) {
					case 1: {
						this.state = 1288;
						this.match(GroovyParser.MUL);
					}
						break;
				}
				this.state = 1291;
				this.expression(0);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	enhancedStatementExpression(): EnhancedStatementExpressionContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedStatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 228, GroovyParser.RULE_enhancedStatementExpression);
		try {
			this.state = 1295;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 136, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1293;
					this.statementExpression();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1294;
					this.standardLambdaExpression();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	statementExpression(): StatementExpressionContext /* throws RecognitionException */ {
		let _localCtx = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 230, GroovyParser.RULE_statementExpression);
		try {
			_localCtx = new CommandExprAltContext(_localCtx);
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1297;
				this.commandExpression();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	postfixExpression(): PostfixExpressionContext /* throws RecognitionException */ {
		const _localCtx = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 232, GroovyParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1299;
				this.pathExpression();
				this.state = 1301;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 137, this._ctx)) {
					case 1: {
						this.state = 1300;
						_localCtx.op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la == GroovyParser.INC || _la == GroovyParser.DEC)) {
							_localCtx.op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) == Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	switchExpression(): SwitchExpressionContext /* throws RecognitionException */ {
		const _localCtx = new SwitchExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 234, GroovyParser.RULE_switchExpression);

		this._inSwitchExpressionLevel++;

		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1303;
				this.match(GroovyParser.SWITCH);
				this.state = 1304;
				this.expressionInPar();
				this.state = 1305;
				this.nls();
				this.state = 1306;
				this.match(GroovyParser.LBRACE);
				this.state = 1307;
				this.nls();
				this.state = 1311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1308;
								this.switchBlockStatementExpressionGroup();
							}
						}
					}
					this.state = 1313;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
				}
				this.state = 1314;
				this.nls();
				this.state = 1315;
				this.match(GroovyParser.RBRACE);
			}
			this._ctx.stop = this._input.LT(-1);

			this._inSwitchExpressionLevel--;

		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	switchBlockStatementExpressionGroup(): SwitchBlockStatementExpressionGroupContext /* throws RecognitionException */ {
		const _localCtx = new SwitchBlockStatementExpressionGroupContext(this._ctx, this.state);
		this.enterRule(_localCtx, 236, GroovyParser.RULE_switchBlockStatementExpressionGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1320;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1: {
							{
								this.state = 1317;
								this.switchExpressionLabel();
								this.state = 1318;
								this.nls();
							}
						}
							break;
						default:
							// noinspection ExceptionCaughtLocallyJS
							throw new NoViableAltException(this);
					}
					this.state = 1322;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 139, this._ctx);
				} while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER);
				this.state = 1324;
				this.blockStatements();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	switchExpressionLabel(): SwitchExpressionLabelContext /* throws RecognitionException */ {
		const _localCtx = new SwitchExpressionLabelContext(this._ctx, this.state);
		this.enterRule(_localCtx, 238, GroovyParser.RULE_switchExpressionLabel);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1329;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.CASE: {
						this.state = 1326;
						this.match(GroovyParser.CASE);
						this.state = 1327;
						this.expressionList(true);
					}
						break;
					case GroovyParser.DEFAULT: {
						this.state = 1328;
						this.match(GroovyParser.DEFAULT);
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 1331;
				_localCtx.ac = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la == GroovyParser.ARROW || _la == GroovyParser.COLON)) {
					_localCtx.ac = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) == Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	//  expression() throws RecognitionException {
	// 	return expression(0);
	// }

	expression(_p: number = 0): ExpressionContext /* throws RecognitionException */ {
		const _parentCtx: ParserRuleContext = this._ctx;
		const _parentState = this.state;
		let _localCtx = new ExpressionContext(this._ctx, _parentState);
		let _prevCtx = _localCtx;
		const _startState = 240;
		this.enterRecursionRule(_localCtx, 240, GroovyParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1351;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 141, this._ctx)) {
					case 1: {
						_localCtx = new CastExprAltContext(_localCtx);
						this._ctx = _localCtx;
						_prevCtx = _localCtx;

						this.state = 1334;
						this.castParExpression();
						this.state = 1335;
						this.castOperandExpression();
					}
						break;
					case 2: {
						_localCtx = new PostfixExprAltContext(_localCtx);
						this._ctx = _localCtx;
						_prevCtx = _localCtx;
						this.state = 1337;
						this.postfixExpression();
					}
						break;
					case 3: {
						_localCtx = new SwitchExprAltContext(_localCtx);
						this._ctx = _localCtx;
						_prevCtx = _localCtx;
						this.state = 1338;
						this.switchExpression();
					}
						break;
					case 4: {
						_localCtx = new UnaryNotExprAltContext(_localCtx);
						this._ctx = _localCtx;
						_prevCtx = _localCtx;
						this.state = 1339;
						_la = this._input.LA(1);
						if (!(_la == GroovyParser.NOT || _la == GroovyParser.BITNOT)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) == Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1340;
						this.nls();
						this.state = 1341;
						this.expression(18);
					}
						break;
					case 5: {
						_localCtx = new UnaryAddExprAltContext(_localCtx);
						this._ctx = _localCtx;
						_prevCtx = _localCtx;
						this.state = 1343;
						(_localCtx as UnaryAddExprAltContext).op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 108)) & ~0x3f) == 0 && ((1 << (_la - 108)) & ((1 << (GroovyParser.INC - 108)) | (1 << (GroovyParser.DEC - 108)) | (1 << (GroovyParser.ADD - 108)) | (1 << (GroovyParser.SUB - 108)))) != 0))) {
							(_localCtx as UnaryAddExprAltContext).op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) == Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1344;
						this.expression(16);
					}
						break;
					case 6: {
						_localCtx = new MultipleAssignmentExprAltContext(_localCtx);
						this._ctx = _localCtx;
						_prevCtx = _localCtx;
						this.state = 1345;
						(_localCtx as MultipleAssignmentExprAltContext).left = this.variableNames();
						this.state = 1346;
						this.nls();
						this.state = 1347;
						(_localCtx as MultipleAssignmentExprAltContext).op = this.match(GroovyParser.ASSIGN);
						this.state = 1348;
						this.nls();
						this.state = 1349;
						(_localCtx as MultipleAssignmentExprAltContext).right = this.statementExpression();
					}
						break;
				}
				this._ctx.stop = this._input.LT(-1);
				this.state = 1463;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevCtx = _localCtx;
						{
							this.state = 1461;
							this._errHandler.sync(this);
							switch (this._interp.adaptivePredict(this._input, 145, this._ctx)) {
								case 1: {
									_localCtx = new PowerExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as PowerExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1353;
									if (!(this.precpred(this._ctx, 17))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 17)');
									}
									this.state = 1354;
									(_localCtx as PowerExprAltContext).op = this.match(GroovyParser.POWER);
									this.state = 1355;
									this.nls();
									this.state = 1356;
									(_localCtx as PowerExprAltContext).right = this.expression(18);
								}
									break;
								case 2: {
									_localCtx = new MultiplicativeExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as MultiplicativeExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1358;
									if (!(this.precpred(this._ctx, 15))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 15)');
									}
									this.state = 1359;
									this.nls();
									this.state = 1360;
									(_localCtx as MultiplicativeExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(((((_la - 112)) & ~0x3f) == 0 && ((1 << (_la - 112)) & ((1 << (GroovyParser.MUL - 112)) | (1 << (GroovyParser.DIV - 112)) | (1 << (GroovyParser.MOD - 112)))) != 0))) {
										(_localCtx as MultiplicativeExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1361;
									this.nls();
									this.state = 1362;
									(_localCtx as MultiplicativeExprAltContext).right = this.expression(16);
								}
									break;
								case 3: {
									_localCtx = new AdditiveExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as AdditiveExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1364;
									if (!(this.precpred(this._ctx, 14))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 14)');
									}
									this.state = 1365;
									(_localCtx as AdditiveExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la == GroovyParser.ADD || _la == GroovyParser.SUB)) {
										(_localCtx as AdditiveExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1366;
									this.nls();
									this.state = 1367;
									(_localCtx as AdditiveExprAltContext).right = this.expression(15);
								}
									break;
								case 4: {
									_localCtx = new ShiftExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as ShiftExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1369;
									if (!(this.precpred(this._ctx, 13))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 13)');
									}
									this.state = 1370;
									this.nls();
									this.state = 1381;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case GroovyParser.GT:
										case GroovyParser.LT: {
											this.state = 1378;
											this._errHandler.sync(this);
											switch (this._interp.adaptivePredict(this._input, 142, this._ctx)) {
												case 1: {
													this.state = 1371;
													(_localCtx as ShiftExprAltContext).dlOp = this.match(GroovyParser.LT);
													this.state = 1372;
													this.match(GroovyParser.LT);
												}
													break;
												case 2: {
													this.state = 1373;
													(_localCtx as ShiftExprAltContext).tgOp = this.match(GroovyParser.GT);
													this.state = 1374;
													this.match(GroovyParser.GT);
													this.state = 1375;
													this.match(GroovyParser.GT);
												}
													break;
												case 3: {
													this.state = 1376;
													(_localCtx as ShiftExprAltContext).dgOp = this.match(GroovyParser.GT);
													this.state = 1377;
													this.match(GroovyParser.GT);
												}
													break;
											}
										}
											break;
										case GroovyParser.RANGE_INCLUSIVE:
										case GroovyParser.RANGE_EXCLUSIVE_LEFT:
										case GroovyParser.RANGE_EXCLUSIVE_RIGHT:
										case GroovyParser.RANGE_EXCLUSIVE_FULL: {
											this.state = 1380;
											(_localCtx as ShiftExprAltContext).rangeOp = this._input.LT(1);
											_la = this._input.LA(1);
											if (!(((((_la - 65)) & ~0x3f) == 0 && ((1 << (_la - 65)) & ((1 << (GroovyParser.RANGE_INCLUSIVE - 65)) | (1 << (GroovyParser.RANGE_EXCLUSIVE_LEFT - 65)) | (1 << (GroovyParser.RANGE_EXCLUSIVE_RIGHT - 65)) | (1 << (GroovyParser.RANGE_EXCLUSIVE_FULL - 65)))) != 0))) {
												(_localCtx as ShiftExprAltContext).rangeOp = this._errHandler.recoverInline(this);
											} else {
												if (this._input.LA(1) == Token.EOF) {
													this.matchedEOF = true;
												}

												this._errHandler.reportMatch(this);
												this.consume();
											}
										}
											break;
										default:
											// noinspection ExceptionCaughtLocallyJS
											throw new NoViableAltException(this);
									}
									this.state = 1383;
									this.nls();
									this.state = 1384;
									(_localCtx as ShiftExprAltContext).right = this.expression(14);
								}
									break;
								case 5: {
									_localCtx = new RelationalExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as RelationalExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1386;
									if (!(this.precpred(this._ctx, 11))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 11)');
									}
									this.state = 1387;
									this.nls();
									this.state = 1388;
									(_localCtx as RelationalExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la == GroovyParser.IN || ((((_la - 85)) & ~0x3f) == 0 && ((1 << (_la - 85)) & ((1 << (GroovyParser.NOT_IN - 85)) | (1 << (GroovyParser.GT - 85)) | (1 << (GroovyParser.LT - 85)) | (1 << (GroovyParser.LE - 85)) | (1 << (GroovyParser.GE - 85)))) != 0))) {
										(_localCtx as RelationalExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1389;
									this.nls();
									this.state = 1390;
									(_localCtx as RelationalExprAltContext).right = this.expression(12);
								}
									break;
								case 6: {
									_localCtx = new EqualityExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as EqualityExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1392;
									if (!(this.precpred(this._ctx, 10))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 10)');
									}
									this.state = 1393;
									this.nls();
									this.state = 1394;
									(_localCtx as EqualityExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(((((_la - 80)) & ~0x3f) == 0 && ((1 << (_la - 80)) & ((1 << (GroovyParser.SPACESHIP - 80)) | (1 << (GroovyParser.IDENTICAL - 80)) | (1 << (GroovyParser.NOT_IDENTICAL - 80)) | (1 << (GroovyParser.EQUAL - 80)) | (1 << (GroovyParser.NOTEQUAL - 80)))) != 0))) {
										(_localCtx as EqualityExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1395;
									this.nls();
									this.state = 1396;
									(_localCtx as EqualityExprAltContext).right = this.expression(11);
								}
									break;
								case 7: {
									_localCtx = new RegexExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as RegexExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1398;
									if (!(this.precpred(this._ctx, 9))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 9)');
									}
									this.state = 1399;
									this.nls();
									this.state = 1400;
									(_localCtx as RegexExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la == GroovyParser.REGEX_FIND || _la == GroovyParser.REGEX_MATCH)) {
										(_localCtx as RegexExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1401;
									this.nls();
									this.state = 1402;
									(_localCtx as RegexExprAltContext).right = this.expression(10);
								}
									break;
								case 8: {
									_localCtx = new AndExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as AndExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1404;
									if (!(this.precpred(this._ctx, 8))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 8)');
									}
									this.state = 1405;
									this.nls();
									this.state = 1406;
									(_localCtx as AndExprAltContext).op = this.match(GroovyParser.BITAND);
									this.state = 1407;
									this.nls();
									this.state = 1408;
									(_localCtx as AndExprAltContext).right = this.expression(9);
								}
									break;
								case 9: {
									_localCtx = new ExclusiveOrExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as ExclusiveOrExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1410;
									if (!(this.precpred(this._ctx, 7))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 7)');
									}
									this.state = 1411;
									this.nls();
									this.state = 1412;
									(_localCtx as ExclusiveOrExprAltContext).op = this.match(GroovyParser.XOR);
									this.state = 1413;
									this.nls();
									this.state = 1414;
									(_localCtx as ExclusiveOrExprAltContext).right = this.expression(8);
								}
									break;
								case 10: {
									_localCtx = new InclusiveOrExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as InclusiveOrExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1416;
									if (!(this.precpred(this._ctx, 6))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 6)');
									}
									this.state = 1417;
									this.nls();
									this.state = 1418;
									(_localCtx as InclusiveOrExprAltContext).op = this.match(GroovyParser.BITOR);
									this.state = 1419;
									this.nls();
									this.state = 1420;
									(_localCtx as InclusiveOrExprAltContext).right = this.expression(7);
								}
									break;
								case 11: {
									_localCtx = new LogicalAndExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as LogicalAndExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1422;
									if (!(this.precpred(this._ctx, 5))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 5)');
									}
									this.state = 1423;
									this.nls();
									this.state = 1424;
									(_localCtx as LogicalAndExprAltContext).op = this.match(GroovyParser.AND);
									this.state = 1425;
									this.nls();
									this.state = 1426;
									(_localCtx as LogicalAndExprAltContext).right = this.expression(6);
								}
									break;
								case 12: {
									_localCtx = new LogicalOrExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as LogicalOrExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1428;
									if (!(this.precpred(this._ctx, 4))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 4)');
									}
									this.state = 1429;
									this.nls();
									this.state = 1430;
									(_localCtx as LogicalOrExprAltContext).op = this.match(GroovyParser.OR);
									this.state = 1431;
									this.nls();
									this.state = 1432;
									(_localCtx as LogicalOrExprAltContext).right = this.expression(5);
								}
									break;
								case 13: {
									_localCtx = new ConditionalExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as ConditionalExprAltContext).con = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1434;
									if (!(this.precpred(this._ctx, 3))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 3)');
									}
									this.state = 1435;
									this.nls();
									this.state = 1445;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case GroovyParser.QUESTION: {
											this.state = 1436;
											this.match(GroovyParser.QUESTION);
											this.state = 1437;
											this.nls();
											this.state = 1438;
											(_localCtx as ConditionalExprAltContext).tb = this.expression(0);
											this.state = 1439;
											this.nls();
											this.state = 1440;
											this.match(GroovyParser.COLON);
											this.state = 1441;
											this.nls();
										}
											break;
										case GroovyParser.ELVIS: {
											this.state = 1443;
											this.match(GroovyParser.ELVIS);
											this.state = 1444;
											this.nls();
										}
											break;
										default:
											// noinspection ExceptionCaughtLocallyJS
											throw new NoViableAltException(this);
									}
									this.state = 1447;
									(_localCtx as ConditionalExprAltContext).fb = this.expression(3);
								}
									break;
								case 14: {
									_localCtx = new RelationalExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as RelationalExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1449;
									if (!(this.precpred(this._ctx, 12))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 12)');
									}
									this.state = 1450;
									this.nls();
									this.state = 1451;
									(_localCtx as RelationalExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la == GroovyParser.AS || _la == GroovyParser.INSTANCEOF || _la == GroovyParser.NOT_INSTANCEOF)) {
										(_localCtx as RelationalExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1452;
									this.nls();
									this.state = 1453;
									this.type();
								}
									break;
								case 15: {
									_localCtx = new AssignmentExprAltContext(new ExpressionContext(_parentCtx, _parentState));
									(_localCtx as AssignmentExprAltContext).left = _prevCtx;
									this.pushNewRecursionContext(_localCtx, _startState, GroovyParser.RULE_expression);
									this.state = 1455;
									if (!(this.precpred(this._ctx, 1))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('precpred(_ctx, 1)');
									}
									this.state = 1456;
									this.nls();
									this.state = 1457;
									(_localCtx as AssignmentExprAltContext).op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(((((_la - 79)) & ~0x3f) == 0 && ((1 << (_la - 79)) & ((1 << (GroovyParser.POWER_ASSIGN - 79)) | (1 << (GroovyParser.ASSIGN - 79)) | (1 << (GroovyParser.ADD_ASSIGN - 79)) | (1 << (GroovyParser.SUB_ASSIGN - 79)) | (1 << (GroovyParser.MUL_ASSIGN - 79)) | (1 << (GroovyParser.DIV_ASSIGN - 79)) | (1 << (GroovyParser.AND_ASSIGN - 79)) | (1 << (GroovyParser.OR_ASSIGN - 79)) | (1 << (GroovyParser.XOR_ASSIGN - 79)) | (1 << (GroovyParser.MOD_ASSIGN - 79)) | (1 << (GroovyParser.LSHIFT_ASSIGN - 79)) | (1 << (GroovyParser.RSHIFT_ASSIGN - 79)) | (1 << (GroovyParser.URSHIFT_ASSIGN - 79)) | (1 << (GroovyParser.ELVIS_ASSIGN - 79)))) != 0))) {
										(_localCtx as AssignmentExprAltContext).op = this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1458;
									this.nls();
									this.state = 1459;
									(_localCtx as AssignmentExprAltContext).right = this.enhancedStatementExpression();
								}
									break;
							}
						}
					}
					this.state = 1465;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.unrollRecursionContexts(_parentCtx);
		}
		return _localCtx;
	}

	castOperandExpression(): ExpressionContext /* throws RecognitionException */ {
		let _localCtx = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 242, GroovyParser.RULE_castOperandExpression);
		let _la: number;
		try {
			this.state = 1476;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 147, this._ctx)) {
				case 1:
					_localCtx = new CastExprAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1466;
					this.castParExpression();
					this.state = 1467;
					this.castOperandExpression();
				}
					break;
				case 2:
					_localCtx = new PostfixExprAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1469;
					this.postfixExpression();
				}
					break;
				case 3:
					_localCtx = new UnaryNotExprAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1470;
					_la = this._input.LA(1);
					if (!(_la == GroovyParser.NOT || _la == GroovyParser.BITNOT)) {
						this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) == Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1471;
					this.nls();
					this.state = 1472;
					this.castOperandExpression();
				}
					break;
				case 4:
					_localCtx = new UnaryAddExprAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 1474;
					(_localCtx as UnaryAddExprAltContext).op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 108)) & ~0x3f) == 0 && ((1 << (_la - 108)) & ((1 << (GroovyParser.INC - 108)) | (1 << (GroovyParser.DEC - 108)) | (1 << (GroovyParser.ADD - 108)) | (1 << (GroovyParser.SUB - 108)))) != 0))) {
						(_localCtx as UnaryAddExprAltContext).op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) == Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1475;
					this.castOperandExpression();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	commandExpression(): CommandExpressionContext /* throws RecognitionException */ {
		const _localCtx = new CommandExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 244, GroovyParser.RULE_commandExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1478;
				_localCtx._expression = this.expression(0);
				this.state = 1482;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 148, this._ctx)) {
					case 1: {
						this.state = 1479;
						if (!(!SemanticPredicates.isFollowingArgumentsOrClosure(_localCtx.expression))) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' !SemanticPredicates.isFollowingArgumentsOrClosure($expression.ctx) ');
						}
						this.state = 1480;
						this.argumentList();
					}
						break;
					case 2: {
					}
						break;
				}
				this.state = 1487;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1484;
								this.commandArgument();
							}
						}
					}
					this.state = 1489;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	commandArgument(): CommandArgumentContext /* throws RecognitionException */ {
		const _localCtx = new CommandArgumentContext(this._ctx, this.state);
		this.enterRule(_localCtx, 246, GroovyParser.RULE_commandArgument);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1490;
				this.commandPrimary();
				this.state = 1497;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 151, this._ctx)) {
					case 1: {
						this.state = 1492;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1: {
									{
										this.state = 1491;
										this.pathElement();
									}
								}
									break;
								default:
									throw new NoViableAltException(this);
							}
							this.state = 1494;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
						} while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER);
					}
						break;
					case 2: {
						this.state = 1496;
						this.argumentList();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	pathExpression(): PathExpressionContext /* throws RecognitionException */ {
		const _localCtx = new PathExpressionContext(this._ctx, this.state);
		this.enterRule(_localCtx, 248, GroovyParser.RULE_pathExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1502;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 152, this._ctx)) {
					case 1: {
						this.state = 1499;
						this.primary();
					}
						break;
					case 2: {
						this.state = 1500;
						if (!(this._input.LT(2).type == GroovyParser.DOT)) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' _input.LT(2).getType() == DOT ');
						}
						this.state = 1501;
						this.match(GroovyParser.STATIC);
					}
						break;
				}
				this.state = 1509;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1504;
								_localCtx._pathElement = this.pathElement();
								_localCtx.t = _localCtx._pathElement.t;
							}
						}
					}
					this.state = 1511;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	pathElement(): PathElementContext /* throws RecognitionException */ {
		const _localCtx = new PathElementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 250, GroovyParser.RULE_pathElement);
		let _la: number;
		try {
			this.state = 1548;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 157, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1512;
					this.nls();
					this.state = 1537;
					this._errHandler.sync(this);
					switch (this._interp.adaptivePredict(this._input, 156, this._ctx)) {
						case 1: {
							this.state = 1513;
							this.match(GroovyParser.DOT);
							this.state = 1514;
							this.nls();
							this.state = 1515;
							this.match(GroovyParser.NEW);
							this.state = 1516;
							this.creator(1);
							_localCtx.t = 6;
						}
							break;
						case 2: {
							this.state = 1529;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
								case GroovyParser.SPREAD_DOT:
								case GroovyParser.SAFE_DOT:
								case GroovyParser.SAFE_CHAIN_DOT:
								case GroovyParser.DOT: {
									this.state = 1519;
									_la = this._input.LA(1);
									if (!(((((_la - 69)) & ~0x3f) == 0 && ((1 << (_la - 69)) & ((1 << (GroovyParser.SPREAD_DOT - 69)) | (1 << (GroovyParser.SAFE_DOT - 69)) | (1 << (GroovyParser.SAFE_CHAIN_DOT - 69)) | (1 << (GroovyParser.DOT - 69)))) != 0))) {
										this._errHandler.recoverInline(this);
									} else {
										if (this._input.LA(1) == Token.EOF) {
											this.matchedEOF = true;
										}

										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1520;
									this.nls();
									this.state = 1523;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case GroovyParser.AT: {
											this.state = 1521;
											this.match(GroovyParser.AT);
										}
											break;
										case GroovyParser.LT: {
											this.state = 1522;
											this.nonWildcardTypeArguments();
										}
											break;
										case GroovyParser.StringLiteral:
										case GroovyParser.GStringBegin:
										case GroovyParser.AS:
										case GroovyParser.DEF:
										case GroovyParser.IN:
										case GroovyParser.TRAIT:
										case GroovyParser.THREADSAFE:
										case GroovyParser.VAR:
										case GroovyParser.BuiltInPrimitiveType:
										case GroovyParser.ABSTRACT:
										case GroovyParser.ASSERT:
										case GroovyParser.BREAK:
										case GroovyParser.YIELD:
										case GroovyParser.CASE:
										case GroovyParser.CATCH:
										case GroovyParser.CLASS:
										case GroovyParser.CONST:
										case GroovyParser.CONTINUE:
										case GroovyParser.DEFAULT:
										case GroovyParser.DO:
										case GroovyParser.ELSE:
										case GroovyParser.ENUM:
										case GroovyParser.EXTENDS:
										case GroovyParser.FINAL:
										case GroovyParser.FINALLY:
										case GroovyParser.FOR:
										case GroovyParser.IF:
										case GroovyParser.GOTO:
										case GroovyParser.IMPLEMENTS:
										case GroovyParser.IMPORT:
										case GroovyParser.INSTANCEOF:
										case GroovyParser.INTERFACE:
										case GroovyParser.NATIVE:
										case GroovyParser.NEW:
										case GroovyParser.NON_SEALED:
										case GroovyParser.PACKAGE:
										case GroovyParser.PERMITS:
										case GroovyParser.PRIVATE:
										case GroovyParser.PROTECTED:
										case GroovyParser.PUBLIC:
										case GroovyParser.RECORD:
										case GroovyParser.RETURN:
										case GroovyParser.SEALED:
										case GroovyParser.STATIC:
										case GroovyParser.STRICTFP:
										case GroovyParser.SUPER:
										case GroovyParser.SWITCH:
										case GroovyParser.SYNCHRONIZED:
										case GroovyParser.THIS:
										case GroovyParser.THROW:
										case GroovyParser.THROWS:
										case GroovyParser.TRANSIENT:
										case GroovyParser.TRY:
										case GroovyParser.VOID:
										case GroovyParser.VOLATILE:
										case GroovyParser.WHILE:
										case GroovyParser.BooleanLiteral:
										case GroovyParser.NullLiteral:
										case GroovyParser.LPAREN:
										case GroovyParser.CapitalizedIdentifier:
										case GroovyParser.Identifier:
											break;
										default:
											break;
									}
								}
									break;
								case GroovyParser.METHOD_POINTER: {
									this.state = 1525;
									this.match(GroovyParser.METHOD_POINTER);
									this.state = 1526;
									this.nls();
								}
									break;
								case GroovyParser.METHOD_REFERENCE: {
									this.state = 1527;
									this.match(GroovyParser.METHOD_REFERENCE);
									this.state = 1528;
									this.nls();
								}
									break;
								default:
									// noinspection ExceptionCaughtLocallyJS
									throw new NoViableAltException(this);
							}
							this.state = 1531;
							this.namePart();
							_localCtx.t = 1;
						}
							break;
						case 3: {
							this.state = 1534;
							this.closureOrLambdaExpression();
							_localCtx.t = 3;
						}
							break;
					}
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1539;
					this.arguments();
					_localCtx.t = 2;
				}
					break;
				case 3:
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1542;
					this.indexPropertyArgs();
					_localCtx.t = 4;
				}
					break;
				case 4:
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 1545;
					this.namedPropertyArgs();
					_localCtx.t = 5;
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namePart(): NamePartContext /* throws RecognitionException */ {
		const _localCtx = new NamePartContext(this._ctx, this.state);
		this.enterRule(_localCtx, 252, GroovyParser.RULE_namePart);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1554;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 158, this._ctx)) {
					case 1: {
						this.state = 1550;
						this.identifier();
					}
						break;
					case 2: {
						this.state = 1551;
						this.stringLiteral();
					}
						break;
					case 3: {
						this.state = 1552;
						this.dynamicMemberName();
					}
						break;
					case 4: {
						this.state = 1553;
						this.keywords();
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	dynamicMemberName(): DynamicMemberNameContext /* throws RecognitionException */ {
		const _localCtx = new DynamicMemberNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 254, GroovyParser.RULE_dynamicMemberName);
		try {
			this.state = 1558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.LPAREN:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1556;
					this.parExpression();
				}
					break;
				case GroovyParser.GStringBegin:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1557;
					this.gstring();
				}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	indexPropertyArgs(): IndexPropertyArgsContext /* throws RecognitionException */ {
		const _localCtx = new IndexPropertyArgsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 256, GroovyParser.RULE_indexPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1560;
				_la = this._input.LA(1);
				if (!(_la == GroovyParser.SAFE_INDEX || _la == GroovyParser.LBRACK)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) == Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1562;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 160, this._ctx)) {
					case 1: {
						this.state = 1561;
						this.expressionList(true);
					}
						break;
				}
				this.state = 1564;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedPropertyArgs(): NamedPropertyArgsContext /* throws RecognitionException */ {
		const _localCtx = new NamedPropertyArgsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 258, GroovyParser.RULE_namedPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1566;
				_la = this._input.LA(1);
				if (!(_la == GroovyParser.SAFE_INDEX || _la == GroovyParser.LBRACK)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) == Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1569;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.StringLiteral:
					case GroovyParser.GStringBegin:
					case GroovyParser.AS:
					case GroovyParser.DEF:
					case GroovyParser.IN:
					case GroovyParser.TRAIT:
					case GroovyParser.THREADSAFE:
					case GroovyParser.VAR:
					case GroovyParser.BuiltInPrimitiveType:
					case GroovyParser.ABSTRACT:
					case GroovyParser.ASSERT:
					case GroovyParser.BREAK:
					case GroovyParser.YIELD:
					case GroovyParser.CASE:
					case GroovyParser.CATCH:
					case GroovyParser.CLASS:
					case GroovyParser.CONST:
					case GroovyParser.CONTINUE:
					case GroovyParser.DEFAULT:
					case GroovyParser.DO:
					case GroovyParser.ELSE:
					case GroovyParser.ENUM:
					case GroovyParser.EXTENDS:
					case GroovyParser.FINAL:
					case GroovyParser.FINALLY:
					case GroovyParser.FOR:
					case GroovyParser.IF:
					case GroovyParser.GOTO:
					case GroovyParser.IMPLEMENTS:
					case GroovyParser.IMPORT:
					case GroovyParser.INSTANCEOF:
					case GroovyParser.INTERFACE:
					case GroovyParser.NATIVE:
					case GroovyParser.NEW:
					case GroovyParser.NON_SEALED:
					case GroovyParser.PACKAGE:
					case GroovyParser.PERMITS:
					case GroovyParser.PRIVATE:
					case GroovyParser.PROTECTED:
					case GroovyParser.PUBLIC:
					case GroovyParser.RECORD:
					case GroovyParser.RETURN:
					case GroovyParser.SEALED:
					case GroovyParser.STATIC:
					case GroovyParser.STRICTFP:
					case GroovyParser.SUPER:
					case GroovyParser.SWITCH:
					case GroovyParser.SYNCHRONIZED:
					case GroovyParser.THIS:
					case GroovyParser.THROW:
					case GroovyParser.THROWS:
					case GroovyParser.TRANSIENT:
					case GroovyParser.TRY:
					case GroovyParser.VOID:
					case GroovyParser.VOLATILE:
					case GroovyParser.WHILE:
					case GroovyParser.IntegerLiteral:
					case GroovyParser.FloatingPointLiteral:
					case GroovyParser.BooleanLiteral:
					case GroovyParser.NullLiteral:
					case GroovyParser.LPAREN:
					case GroovyParser.LBRACK:
					case GroovyParser.MUL:
					case GroovyParser.CapitalizedIdentifier:
					case GroovyParser.Identifier: {
						this.state = 1567;
						this.namedPropertyArgList();
					}
						break;
					case GroovyParser.COLON: {
						this.state = 1568;
						this.match(GroovyParser.COLON);
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 1571;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	primary(): PrimaryContext /* throws RecognitionException */ {
		let _localCtx = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 260, GroovyParser.RULE_primary);
		try {
			this.state = 1590;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 163, this._ctx)) {
				case 1:
					_localCtx = new IdentifierPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1573;
					this.identifier();
					this.state = 1575;
					this._errHandler.sync(this);
					switch (this._interp.adaptivePredict(this._input, 162, this._ctx)) {
						case 1: {
							this.state = 1574;
							this.typeArguments();
						}
							break;
					}
				}
					break;
				case 2:
					_localCtx = new LiteralPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1577;
					this.literal();
				}
					break;
				case 3:
					_localCtx = new GstringPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1578;
					this.gstring();
				}
					break;
				case 4:
					_localCtx = new NewPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 1579;
					this.match(GroovyParser.NEW);
					this.state = 1580;
					this.nls();
					this.state = 1581;
					this.creator(0);
				}
					break;
				case 5:
					_localCtx = new ThisPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 5);
				{
					this.state = 1583;
					this.match(GroovyParser.THIS);
				}
					break;
				case 6:
					_localCtx = new SuperPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 6);
				{
					this.state = 1584;
					this.match(GroovyParser.SUPER);
				}
					break;
				case 7:
					_localCtx = new ParenPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 7);
				{
					this.state = 1585;
					this.parExpression();
				}
					break;
				case 8:
					_localCtx = new ClosureOrLambdaExpressionPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 8);
				{
					this.state = 1586;
					this.closureOrLambdaExpression();
				}
					break;
				case 9:
					_localCtx = new ListPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 9);
				{
					this.state = 1587;
					this.list();
				}
					break;
				case 10:
					_localCtx = new MapPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 10);
				{
					this.state = 1588;
					this.map();
				}
					break;
				case 11:
					_localCtx = new BuiltInTypePrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 11);
				{
					this.state = 1589;
					this.builtInType();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedPropertyArgPrimary(): PrimaryContext /* throws RecognitionException */ {
		let _localCtx = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 262, GroovyParser.RULE_namedPropertyArgPrimary);
		try {
			this.state = 1598;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 164, this._ctx)) {
				case 1:
					_localCtx = new IdentifierPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1592;
					this.identifier();
				}
					break;
				case 2:
					_localCtx = new LiteralPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1593;
					this.literal();
				}
					break;
				case 3:
					_localCtx = new GstringPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1594;
					this.gstring();
				}
					break;
				case 4:
					_localCtx = new ParenPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 4);
				{
					this.state = 1595;
					this.parExpression();
				}
					break;
				case 5:
					_localCtx = new ListPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 5);
				{
					this.state = 1596;
					this.list();
				}
					break;
				case 6:
					_localCtx = new MapPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 6);
				{
					this.state = 1597;
					this.map();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedArgPrimary(): PrimaryContext /* throws RecognitionException */ {
		let _localCtx = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 264, GroovyParser.RULE_namedArgPrimary);
		try {
			this.state = 1603;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					_localCtx = new IdentifierPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1600;
					this.identifier();
				}
					break;
				case GroovyParser.StringLiteral:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.BooleanLiteral:
				case GroovyParser.NullLiteral:
					_localCtx = new LiteralPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1601;
					this.literal();
				}
					break;
				case GroovyParser.GStringBegin:
					_localCtx = new GstringPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1602;
					this.gstring();
				}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	commandPrimary(): PrimaryContext /* throws RecognitionException */ {
		let _localCtx = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 266, GroovyParser.RULE_commandPrimary);
		try {
			this.state = 1608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.AS:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.VAR:
				case GroovyParser.YIELD:
				case GroovyParser.PERMITS:
				case GroovyParser.RECORD:
				case GroovyParser.SEALED:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					_localCtx = new IdentifierPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1605;
					this.identifier();
				}
					break;
				case GroovyParser.StringLiteral:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.BooleanLiteral:
				case GroovyParser.NullLiteral:
					_localCtx = new LiteralPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1606;
					this.literal();
				}
					break;
				case GroovyParser.GStringBegin:
					_localCtx = new GstringPrmrAltContext(_localCtx);
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1607;
					this.gstring();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	list(): ListContext /* throws RecognitionException */ {
		const _localCtx = new ListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 268, GroovyParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1610;
				this.match(GroovyParser.LBRACK);
				this.state = 1612;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 167, this._ctx)) {
					case 1: {
						this.state = 1611;
						this.expressionList(true);
					}
						break;
				}
				this.state = 1615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.COMMA) {
					{
						this.state = 1614;
						this.match(GroovyParser.COMMA);
					}
				}

				this.state = 1617;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	map(): MapContext /* throws RecognitionException */ {
		const _localCtx = new MapContext(this._ctx, this.state);
		this.enterRule(_localCtx, 270, GroovyParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1619;
				this.match(GroovyParser.LBRACK);
				this.state = 1625;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.StringLiteral:
					case GroovyParser.GStringBegin:
					case GroovyParser.AS:
					case GroovyParser.DEF:
					case GroovyParser.IN:
					case GroovyParser.TRAIT:
					case GroovyParser.THREADSAFE:
					case GroovyParser.VAR:
					case GroovyParser.BuiltInPrimitiveType:
					case GroovyParser.ABSTRACT:
					case GroovyParser.ASSERT:
					case GroovyParser.BREAK:
					case GroovyParser.YIELD:
					case GroovyParser.CASE:
					case GroovyParser.CATCH:
					case GroovyParser.CLASS:
					case GroovyParser.CONST:
					case GroovyParser.CONTINUE:
					case GroovyParser.DEFAULT:
					case GroovyParser.DO:
					case GroovyParser.ELSE:
					case GroovyParser.ENUM:
					case GroovyParser.EXTENDS:
					case GroovyParser.FINAL:
					case GroovyParser.FINALLY:
					case GroovyParser.FOR:
					case GroovyParser.IF:
					case GroovyParser.GOTO:
					case GroovyParser.IMPLEMENTS:
					case GroovyParser.IMPORT:
					case GroovyParser.INSTANCEOF:
					case GroovyParser.INTERFACE:
					case GroovyParser.NATIVE:
					case GroovyParser.NEW:
					case GroovyParser.NON_SEALED:
					case GroovyParser.PACKAGE:
					case GroovyParser.PERMITS:
					case GroovyParser.PRIVATE:
					case GroovyParser.PROTECTED:
					case GroovyParser.PUBLIC:
					case GroovyParser.RECORD:
					case GroovyParser.RETURN:
					case GroovyParser.SEALED:
					case GroovyParser.STATIC:
					case GroovyParser.STRICTFP:
					case GroovyParser.SUPER:
					case GroovyParser.SWITCH:
					case GroovyParser.SYNCHRONIZED:
					case GroovyParser.THIS:
					case GroovyParser.THROW:
					case GroovyParser.THROWS:
					case GroovyParser.TRANSIENT:
					case GroovyParser.TRY:
					case GroovyParser.VOID:
					case GroovyParser.VOLATILE:
					case GroovyParser.WHILE:
					case GroovyParser.IntegerLiteral:
					case GroovyParser.FloatingPointLiteral:
					case GroovyParser.BooleanLiteral:
					case GroovyParser.NullLiteral:
					case GroovyParser.LPAREN:
					case GroovyParser.LBRACE:
					case GroovyParser.LBRACK:
					case GroovyParser.MUL:
					case GroovyParser.CapitalizedIdentifier:
					case GroovyParser.Identifier: {
						this.state = 1620;
						this.mapEntryList();
						this.state = 1622;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la == GroovyParser.COMMA) {
							{
								this.state = 1621;
								this.match(GroovyParser.COMMA);
							}
						}

					}
						break;
					case GroovyParser.COLON: {
						this.state = 1624;
						this.match(GroovyParser.COLON);
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 1627;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	mapEntryList(): MapEntryListContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 272, GroovyParser.RULE_mapEntryList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1629;
				this.mapEntry();
				this.state = 1634;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1630;
								this.match(GroovyParser.COMMA);
								this.state = 1631;
								this.mapEntry();
							}
						}
					}
					this.state = 1636;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedPropertyArgList(): MapEntryListContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryListContext(this._ctx, this.state);
		this.enterRule(_localCtx, 274, GroovyParser.RULE_namedPropertyArgList);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1637;
				this.namedPropertyArg();
				this.state = 1642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la == GroovyParser.COMMA) {
					{
						{
							this.state = 1638;
							this.match(GroovyParser.COMMA);
							this.state = 1639;
							this.namedPropertyArg();
						}
					}
					this.state = 1644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	mapEntry(): MapEntryContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 276, GroovyParser.RULE_mapEntry);
		try {
			this.state = 1655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.StringLiteral:
				case GroovyParser.GStringBegin:
				case GroovyParser.AS:
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.THREADSAFE:
				case GroovyParser.VAR:
				case GroovyParser.BuiltInPrimitiveType:
				case GroovyParser.ABSTRACT:
				case GroovyParser.ASSERT:
				case GroovyParser.BREAK:
				case GroovyParser.YIELD:
				case GroovyParser.CASE:
				case GroovyParser.CATCH:
				case GroovyParser.CLASS:
				case GroovyParser.CONST:
				case GroovyParser.CONTINUE:
				case GroovyParser.DEFAULT:
				case GroovyParser.DO:
				case GroovyParser.ELSE:
				case GroovyParser.ENUM:
				case GroovyParser.EXTENDS:
				case GroovyParser.FINAL:
				case GroovyParser.FINALLY:
				case GroovyParser.FOR:
				case GroovyParser.IF:
				case GroovyParser.GOTO:
				case GroovyParser.IMPLEMENTS:
				case GroovyParser.IMPORT:
				case GroovyParser.INSTANCEOF:
				case GroovyParser.INTERFACE:
				case GroovyParser.NATIVE:
				case GroovyParser.NEW:
				case GroovyParser.NON_SEALED:
				case GroovyParser.PACKAGE:
				case GroovyParser.PERMITS:
				case GroovyParser.PRIVATE:
				case GroovyParser.PROTECTED:
				case GroovyParser.PUBLIC:
				case GroovyParser.RECORD:
				case GroovyParser.RETURN:
				case GroovyParser.SEALED:
				case GroovyParser.STATIC:
				case GroovyParser.STRICTFP:
				case GroovyParser.SUPER:
				case GroovyParser.SWITCH:
				case GroovyParser.SYNCHRONIZED:
				case GroovyParser.THIS:
				case GroovyParser.THROW:
				case GroovyParser.THROWS:
				case GroovyParser.TRANSIENT:
				case GroovyParser.TRY:
				case GroovyParser.VOID:
				case GroovyParser.VOLATILE:
				case GroovyParser.WHILE:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.BooleanLiteral:
				case GroovyParser.NullLiteral:
				case GroovyParser.LPAREN:
				case GroovyParser.LBRACE:
				case GroovyParser.LBRACK:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1645;
					this.mapEntryLabel();
					this.state = 1646;
					this.match(GroovyParser.COLON);
					this.state = 1647;
					this.nls();
					this.state = 1648;
					this.expression(0);
				}
					break;
				case GroovyParser.MUL:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1650;
					this.match(GroovyParser.MUL);
					this.state = 1651;
					this.match(GroovyParser.COLON);
					this.state = 1652;
					this.nls();
					this.state = 1653;
					this.expression(0);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedPropertyArg(): MapEntryContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 278, GroovyParser.RULE_namedPropertyArg);
		try {
			this.state = 1667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.StringLiteral:
				case GroovyParser.GStringBegin:
				case GroovyParser.AS:
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.THREADSAFE:
				case GroovyParser.VAR:
				case GroovyParser.BuiltInPrimitiveType:
				case GroovyParser.ABSTRACT:
				case GroovyParser.ASSERT:
				case GroovyParser.BREAK:
				case GroovyParser.YIELD:
				case GroovyParser.CASE:
				case GroovyParser.CATCH:
				case GroovyParser.CLASS:
				case GroovyParser.CONST:
				case GroovyParser.CONTINUE:
				case GroovyParser.DEFAULT:
				case GroovyParser.DO:
				case GroovyParser.ELSE:
				case GroovyParser.ENUM:
				case GroovyParser.EXTENDS:
				case GroovyParser.FINAL:
				case GroovyParser.FINALLY:
				case GroovyParser.FOR:
				case GroovyParser.IF:
				case GroovyParser.GOTO:
				case GroovyParser.IMPLEMENTS:
				case GroovyParser.IMPORT:
				case GroovyParser.INSTANCEOF:
				case GroovyParser.INTERFACE:
				case GroovyParser.NATIVE:
				case GroovyParser.NEW:
				case GroovyParser.NON_SEALED:
				case GroovyParser.PACKAGE:
				case GroovyParser.PERMITS:
				case GroovyParser.PRIVATE:
				case GroovyParser.PROTECTED:
				case GroovyParser.PUBLIC:
				case GroovyParser.RECORD:
				case GroovyParser.RETURN:
				case GroovyParser.SEALED:
				case GroovyParser.STATIC:
				case GroovyParser.STRICTFP:
				case GroovyParser.SUPER:
				case GroovyParser.SWITCH:
				case GroovyParser.SYNCHRONIZED:
				case GroovyParser.THIS:
				case GroovyParser.THROW:
				case GroovyParser.THROWS:
				case GroovyParser.TRANSIENT:
				case GroovyParser.TRY:
				case GroovyParser.VOID:
				case GroovyParser.VOLATILE:
				case GroovyParser.WHILE:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.BooleanLiteral:
				case GroovyParser.NullLiteral:
				case GroovyParser.LPAREN:
				case GroovyParser.LBRACK:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1657;
					this.namedPropertyArgLabel();
					this.state = 1658;
					this.match(GroovyParser.COLON);
					this.state = 1659;
					this.nls();
					this.state = 1660;
					this.expression(0);
				}
					break;
				case GroovyParser.MUL:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1662;
					this.match(GroovyParser.MUL);
					this.state = 1663;
					this.match(GroovyParser.COLON);
					this.state = 1664;
					this.nls();
					this.state = 1665;
					this.expression(0);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedArg(): MapEntryContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryContext(this._ctx, this.state);
		this.enterRule(_localCtx, 280, GroovyParser.RULE_namedArg);
		try {
			this.state = 1679;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case GroovyParser.StringLiteral:
				case GroovyParser.GStringBegin:
				case GroovyParser.AS:
				case GroovyParser.DEF:
				case GroovyParser.IN:
				case GroovyParser.TRAIT:
				case GroovyParser.THREADSAFE:
				case GroovyParser.VAR:
				case GroovyParser.BuiltInPrimitiveType:
				case GroovyParser.ABSTRACT:
				case GroovyParser.ASSERT:
				case GroovyParser.BREAK:
				case GroovyParser.YIELD:
				case GroovyParser.CASE:
				case GroovyParser.CATCH:
				case GroovyParser.CLASS:
				case GroovyParser.CONST:
				case GroovyParser.CONTINUE:
				case GroovyParser.DEFAULT:
				case GroovyParser.DO:
				case GroovyParser.ELSE:
				case GroovyParser.ENUM:
				case GroovyParser.EXTENDS:
				case GroovyParser.FINAL:
				case GroovyParser.FINALLY:
				case GroovyParser.FOR:
				case GroovyParser.IF:
				case GroovyParser.GOTO:
				case GroovyParser.IMPLEMENTS:
				case GroovyParser.IMPORT:
				case GroovyParser.INSTANCEOF:
				case GroovyParser.INTERFACE:
				case GroovyParser.NATIVE:
				case GroovyParser.NEW:
				case GroovyParser.NON_SEALED:
				case GroovyParser.PACKAGE:
				case GroovyParser.PERMITS:
				case GroovyParser.PRIVATE:
				case GroovyParser.PROTECTED:
				case GroovyParser.PUBLIC:
				case GroovyParser.RECORD:
				case GroovyParser.RETURN:
				case GroovyParser.SEALED:
				case GroovyParser.STATIC:
				case GroovyParser.STRICTFP:
				case GroovyParser.SUPER:
				case GroovyParser.SWITCH:
				case GroovyParser.SYNCHRONIZED:
				case GroovyParser.THIS:
				case GroovyParser.THROW:
				case GroovyParser.THROWS:
				case GroovyParser.TRANSIENT:
				case GroovyParser.TRY:
				case GroovyParser.VOID:
				case GroovyParser.VOLATILE:
				case GroovyParser.WHILE:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.BooleanLiteral:
				case GroovyParser.NullLiteral:
				case GroovyParser.CapitalizedIdentifier:
				case GroovyParser.Identifier:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1669;
					this.namedArgLabel();
					this.state = 1670;
					this.match(GroovyParser.COLON);
					this.state = 1671;
					this.nls();
					this.state = 1672;
					this.expression(0);
				}
					break;
				case GroovyParser.MUL:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1674;
					this.match(GroovyParser.MUL);
					this.state = 1675;
					this.match(GroovyParser.COLON);
					this.state = 1676;
					this.nls();
					this.state = 1677;
					this.expression(0);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	mapEntryLabel(): MapEntryLabelContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryLabelContext(this._ctx, this.state);
		this.enterRule(_localCtx, 282, GroovyParser.RULE_mapEntryLabel);
		try {
			this.state = 1683;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 176, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1681;
					this.keywords();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1682;
					this.primary();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedPropertyArgLabel(): MapEntryLabelContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryLabelContext(this._ctx, this.state);
		this.enterRule(_localCtx, 284, GroovyParser.RULE_namedPropertyArgLabel);
		try {
			this.state = 1687;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 177, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1685;
					this.keywords();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1686;
					this.namedPropertyArgPrimary();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	namedArgLabel(): MapEntryLabelContext /* throws RecognitionException */ {
		const _localCtx = new MapEntryLabelContext(this._ctx, this.state);
		this.enterRule(_localCtx, 286, GroovyParser.RULE_namedArgLabel);
		try {
			this.state = 1691;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 178, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1689;
					this.keywords();
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1690;
					this.namedArgPrimary();
				}
					break;
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	creator(t: number): CreatorContext /* throws RecognitionException */ {
		const _localCtx = new CreatorContext(this._ctx, this.state, t);
		this.enterRule(_localCtx, 288, GroovyParser.RULE_creator);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1693;
				this.createdName();
				this.state = 1709;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 182, this._ctx)) {
					case 1: {
						this.state = 1694;
						this.nls();
						this.state = 1695;
						this.arguments();
						this.state = 1697;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 179, this._ctx)) {
							case 1: {
								this.state = 1696;
								this.anonymousInnerClassDeclaration(0);
							}
								break;
						}
					}
						break;
					case 2: {
						this.state = 1700;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1: {
									{
										this.state = 1699;
										this.dim();
									}
								}
									break;
								default:
									// noinspection ExceptionCaughtLocallyJS
									throw new NoViableAltException(this);
							}
							this.state = 1702;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
						} while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER);
						this.state = 1707;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 181, this._ctx)) {
							case 1: {
								this.state = 1704;
								this.nls();
								this.state = 1705;
								this.arrayInitializer();
							}
								break;
						}
					}
						break;
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	dim(): DimContext /* throws RecognitionException */ {
		const _localCtx = new DimContext(this._ctx, this.state);
		this.enterRule(_localCtx, 290, GroovyParser.RULE_dim);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1711;
				this.annotationsOpt();
				this.state = 1712;
				this.match(GroovyParser.LBRACK);
				this.state = 1714;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 183, this._ctx)) {
					case 1: {
						this.state = 1713;
						this.expression(0);
					}
						break;
				}
				this.state = 1716;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	arrayInitializer(): ArrayInitializerContext /* throws RecognitionException */ {
		const _localCtx = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localCtx, 292, GroovyParser.RULE_arrayInitializer);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1718;
				this.match(GroovyParser.LBRACE);
				this.state = 1719;
				this.nls();
				this.state = 1723;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 184, this._ctx)) {
					case 1: {
						this.state = 1720;
						this.variableInitializers();
						this.state = 1721;
						this.nls();
					}
						break;
				}
				this.state = 1725;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	anonymousInnerClassDeclaration(t: number): AnonymousInnerClassDeclarationContext /* throws RecognitionException */ {
		const _localCtx = new AnonymousInnerClassDeclarationContext(this._ctx, this.state, t);
		this.enterRule(_localCtx, 294, GroovyParser.RULE_anonymousInnerClassDeclaration);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1727;
				this.classBody(0);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	createdName(): CreatedNameContext /* throws RecognitionException */ {
		const _localCtx = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 296, GroovyParser.RULE_createdName);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1729;
				this.annotationsOpt();
				this.state = 1735;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case GroovyParser.BuiltInPrimitiveType: {
						this.state = 1730;
						this.primitiveType();
					}
						break;
					case GroovyParser.AS:
					case GroovyParser.DEF:
					case GroovyParser.IN:
					case GroovyParser.TRAIT:
					case GroovyParser.VAR:
					case GroovyParser.YIELD:
					case GroovyParser.PERMITS:
					case GroovyParser.RECORD:
					case GroovyParser.SEALED:
					case GroovyParser.CapitalizedIdentifier:
					case GroovyParser.Identifier: {
						this.state = 1731;
						this.qualifiedClassName();
						this.state = 1733;
						this._errHandler.sync(this);
						switch (this._interp.adaptivePredict(this._input, 185, this._ctx)) {
							case 1: {
								this.state = 1732;
								this.typeArgumentsOrDiamond();
							}
								break;
						}
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}
}
