import {
	ATN,
	ATNDeserializer,
	DFA,
	FailedPredicateException,
	NoViableAltException,
	ParserATNSimulator,
	ParserRuleContext,
	PredictionContextCache,
	RecognitionException,
	RuleContext,
	stringToCharArray,
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
	GroovyParserRuleContext,
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
		this._interp = new ParserATNSimulator(this, GroovyParser._ATN, GroovyParser._DECISIONS_TO_DFA, new PredictionContextCache());
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
					// eslint-disable-next-line no-extra-boolean-cast
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
						// nothing
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
				// eslint-disable-next-line no-extra-boolean-cast
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
						// eslint-disable-next-line no-extra-boolean-cast
						if (!(!SemanticPredicates.isFollowingArgumentsOrClosure(_localCtx._expression))) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' !SemanticPredicates.isFollowingArgumentsOrClosure($expression.ctx) ');
						}
						this.state = 1480;
						this.argumentList();
					}
						break;
					case 2: {
						// nothing
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
									// noinspection ExceptionCaughtLocallyJS
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

	nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext /* throws RecognitionException */ {
		const _localCtx = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 298, GroovyParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1737;
				this.match(GroovyParser.LT);
				this.state = 1738;
				this.nls();
				this.state = 1739;
				this.typeList();
				this.state = 1740;
				this.nls();
				this.state = 1741;
				this.match(GroovyParser.GT);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext /* throws RecognitionException */ {
		const _localCtx = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localCtx, 300, GroovyParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1746;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 187, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1743;
					this.match(GroovyParser.LT);
					this.state = 1744;
					this.match(GroovyParser.GT);
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1745;
					this.typeArguments();
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

	arguments(): ArgumentsContext /* throws RecognitionException */ {
		const _localCtx = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 302, GroovyParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1748;
				this.match(GroovyParser.LPAREN);
				this.state = 1750;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 188, this._ctx)) {
					case 1: {
						this.state = 1749;
						this.enhancedArgumentListInPar();
					}
						break;
				}
				this.state = 1753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la == GroovyParser.COMMA) {
					{
						this.state = 1752;
						this.match(GroovyParser.COMMA);
					}
				}

				this.state = 1755;
				this.rparen();
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	argumentList(): EnhancedArgumentListInParContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedArgumentListInParContext(this._ctx, this.state);
		this.enterRule(_localCtx, 304, GroovyParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1757;
				this.firstArgumentListElement();
				this.state = 1764;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1758;
								this.match(GroovyParser.COMMA);
								this.state = 1759;
								this.nls();
								this.state = 1760;
								this.argumentListElement();
							}
						}
					}
					this.state = 1766;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	enhancedArgumentListInPar(): EnhancedArgumentListInParContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedArgumentListInParContext(this._ctx, this.state);
		this.enterRule(_localCtx, 306, GroovyParser.RULE_enhancedArgumentListInPar);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1767;
				this.enhancedArgumentListElement();
				this.state = 1774;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1768;
								this.match(GroovyParser.COMMA);
								this.state = 1769;
								this.nls();
								this.state = 1770;
								this.enhancedArgumentListElement();
							}
						}
					}
					this.state = 1776;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	firstArgumentListElement(): EnhancedArgumentListElementContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 308, GroovyParser.RULE_firstArgumentListElement);
		try {
			this.state = 1779;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 192, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1777;
					this.expressionListElement(true);
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1778;
					this.namedArg();
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

	argumentListElement(): EnhancedArgumentListElementContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 310, GroovyParser.RULE_argumentListElement);
		try {
			this.state = 1783;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 193, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1781;
					this.expressionListElement(true);
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1782;
					this.namedPropertyArg();
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

	enhancedArgumentListElement(): EnhancedArgumentListElementContext /* throws RecognitionException */ {
		const _localCtx = new EnhancedArgumentListElementContext(this._ctx, this.state);
		this.enterRule(_localCtx, 312, GroovyParser.RULE_enhancedArgumentListElement);
		try {
			this.state = 1788;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 194, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localCtx, 1);
				{
					this.state = 1785;
					this.expressionListElement(true);
				}
					break;
				case 2:
					this.enterOuterAlt(_localCtx, 2);
				{
					this.state = 1786;
					this.standardLambdaExpression();
				}
					break;
				case 3:
					this.enterOuterAlt(_localCtx, 3);
				{
					this.state = 1787;
					this.namedPropertyArg();
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

	stringLiteral(): StringLiteralContext /* throws RecognitionException */ {
		const _localCtx = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localCtx, 314, GroovyParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1790;
				this.match(GroovyParser.StringLiteral);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	className(): ClassNameContext /* throws RecognitionException */ {
		const _localCtx = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localCtx, 316, GroovyParser.RULE_className);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1792;
				this.match(GroovyParser.CapitalizedIdentifier);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	identifier(): IdentifierContext /* throws RecognitionException */ {
		const _localCtx = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localCtx, 318, GroovyParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1794;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x3f) == 0 && ((1 << _la) & ((1 << GroovyParser.AS) | (1 << GroovyParser.IN) | (1 << GroovyParser.TRAIT) | (1 << GroovyParser.VAR) | (1 << GroovyParser.YIELD) | (1 << GroovyParser.PERMITS) | (1 << GroovyParser.RECORD) | (1 << GroovyParser.SEALED))) != 0) || _la == GroovyParser.CapitalizedIdentifier || _la == GroovyParser.Identifier)) {
					this._errHandler.recoverInline(this);
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

	builtInType(): BuiltInTypeContext /* throws RecognitionException */ {
		const _localCtx = new BuiltInTypeContext(this._ctx, this.state);
		this.enterRule(_localCtx, 320, GroovyParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1796;
				_la = this._input.LA(1);
				if (!(_la == GroovyParser.BuiltInPrimitiveType || _la == GroovyParser.VOID)) {
					this._errHandler.recoverInline(this);
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

	keywords(): KeywordsContext /* throws RecognitionException */ {
		const _localCtx = new KeywordsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 322, GroovyParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1798;
				_la = this._input.LA(1);
				if (!(((((_la - 7)) & ~0x3f) == 0 && ((1 << (_la - 7)) & ((1 << (GroovyParser.AS - 7)) | (1 << (GroovyParser.DEF - 7)) | (1 << (GroovyParser.IN - 7)) | (1 << (GroovyParser.TRAIT - 7)) | (1 << (GroovyParser.THREADSAFE - 7)) | (1 << (GroovyParser.VAR - 7)) | (1 << (GroovyParser.BuiltInPrimitiveType - 7)) | (1 << (GroovyParser.ABSTRACT - 7)) | (1 << (GroovyParser.ASSERT - 7)) | (1 << (GroovyParser.BREAK - 7)) | (1 << (GroovyParser.YIELD - 7)) | (1 << (GroovyParser.CASE - 7)) | (1 << (GroovyParser.CATCH - 7)) | (1 << (GroovyParser.CLASS - 7)) | (1 << (GroovyParser.CONST - 7)) | (1 << (GroovyParser.CONTINUE - 7)) | (1 << (GroovyParser.DEFAULT - 7)) | (1 << (GroovyParser.DO - 7)) | (1 << (GroovyParser.ELSE - 7)) | (1 << (GroovyParser.ENUM - 7)) | (1 << (GroovyParser.EXTENDS - 7)) | (1 << (GroovyParser.FINAL - 7)) | (1 << (GroovyParser.FINALLY - 7)) | (1 << (GroovyParser.FOR - 7)) | (1 << (GroovyParser.IF - 7)) | (1 << (GroovyParser.GOTO - 7)) | (1 << (GroovyParser.IMPLEMENTS - 7)) | (1 << (GroovyParser.IMPORT - 7)) | (1 << (GroovyParser.INSTANCEOF - 7)) | (1 << (GroovyParser.INTERFACE - 7)) | (1 << (GroovyParser.NATIVE - 7)) | (1 << (GroovyParser.NEW - 7)) | (1 << (GroovyParser.NON_SEALED - 7)) | (1 << (GroovyParser.PACKAGE - 7)) | (1 << (GroovyParser.PERMITS - 7)) | (1 << (GroovyParser.PRIVATE - 7)) | (1 << (GroovyParser.PROTECTED - 7)) | (1 << (GroovyParser.PUBLIC - 7)) | (1 << (GroovyParser.RECORD - 7)) | (1 << (GroovyParser.RETURN - 7)) | (1 << (GroovyParser.SEALED - 7)) | (1 << (GroovyParser.STATIC - 7)) | (1 << (GroovyParser.STRICTFP - 7)) | (1 << (GroovyParser.SUPER - 7)) | (1 << (GroovyParser.SWITCH - 7)) | (1 << (GroovyParser.SYNCHRONIZED - 7)) | (1 << (GroovyParser.THIS - 7)) | (1 << (GroovyParser.THROW - 7)) | (1 << (GroovyParser.THROWS - 7)) | (1 << (GroovyParser.TRANSIENT - 7)) | (1 << (GroovyParser.TRY - 7)) | (1 << (GroovyParser.VOID - 7)) | (1 << (GroovyParser.VOLATILE - 7)) | (1 << (GroovyParser.WHILE - 7)) | (1 << (GroovyParser.BooleanLiteral - 7)) | (1 << (GroovyParser.NullLiteral - 7)))) != 0))) {
					this._errHandler.recoverInline(this);
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

	rparen(): RparenContext /* throws RecognitionException */ {
		const _localCtx = new RparenContext(this._ctx, this.state);
		this.enterRule(_localCtx, 324, GroovyParser.RULE_rparen);
		try {
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1800;
				this.match(GroovyParser.RPAREN);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	nls(): NlsContext /* throws RecognitionException */ {
		const _localCtx = new NlsContext(this._ctx, this.state);
		this.enterRule(_localCtx, 326, GroovyParser.RULE_nls);
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1805;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 195, this._ctx);
				while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER) {
					if (_alt == 1) {
						{
							{
								this.state = 1802;
								this.match(GroovyParser.NL);
							}
						}
					}
					this.state = 1807;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 195, this._ctx);
				}
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	sep(): SepContext /* throws RecognitionException */ {
		const _localCtx = new SepContext(this._ctx, this.state);
		this.enterRule(_localCtx, 328, GroovyParser.RULE_sep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localCtx, 1);
			{
				this.state = 1809;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1: {
							{
								this.state = 1808;
								_la = this._input.LA(1);
								if (!(_la == GroovyParser.SEMI || _la == GroovyParser.NL)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) == Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
							}
						}
							break;
						default:
							// noinspection ExceptionCaughtLocallyJS
							throw new NoViableAltException(this);
					}
					this.state = 1811;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 196, this._ctx);
				} while (_alt != 2 && _alt != ATN.INVALID_ALT_NUMBER);
			}
		} catch (re /* RecognitionException */) {
			this.handleRecognitionExceptionOrRethrow(_localCtx, re);
		} finally {
			this.exitRule();
		}
		return _localCtx;
	}

	sempred(_localCtx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 2:
				return this.scriptStatement_sempred(_localCtx as ScriptStatementContext, predIndex);
			case 20:
				return this.classBody_sempred(_localCtx as ClassBodyContext, predIndex);
			case 81:
				return this.localVariableDeclaration_sempred(_localCtx as LocalVariableDeclarationContext, predIndex);
			case 95:
				return this.statement_sempred(_localCtx as StatementContext, predIndex);
			case 120:
				return this.expression_sempred(_localCtx as ExpressionContext, predIndex);
			case 122:
				return this.commandExpression_sempred(_localCtx as CommandExpressionContext, predIndex);
			case 124:
				return this.pathExpression_sempred(_localCtx as PathExpressionContext, predIndex);
		}
		return true;
	}

	private scriptStatement_sempred(_localCtx: ScriptStatementContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return !SemanticPredicates.isInvalidMethodDeclaration(this._input);
		}
		return true;
	}

	private classBody_sempred(_localCtx: ClassBodyContext, predIndex: number): boolean {
		switch (predIndex) {
			case 1:
				return 2 == _localCtx.t;
		}
		return true;
	}

	private localVariableDeclaration_sempred(_localCtx: LocalVariableDeclarationContext, predIndex: number): boolean {
		switch (predIndex) {
			case 2:
				return !SemanticPredicates.isInvalidLocalVariableDeclaration(this._input);
		}
		return true;
	}

	private statement_sempred(_localCtx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
			case 3:
				return this._inSwitchExpressionLevel > 0;
		}
		return true;
	}

	private expression_sempred(_localCtx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 4:
				return this.precpred(this._ctx, 17);
			case 5:
				return this.precpred(this._ctx, 15);
			case 6:
				return this.precpred(this._ctx, 14);
			case 7:
				return this.precpred(this._ctx, 13);
			case 8:
				return this.precpred(this._ctx, 11);
			case 9:
				return this.precpred(this._ctx, 10);
			case 10:
				return this.precpred(this._ctx, 9);
			case 11:
				return this.precpred(this._ctx, 8);
			case 12:
				return this.precpred(this._ctx, 7);
			case 13:
				return this.precpred(this._ctx, 6);
			case 14:
				return this.precpred(this._ctx, 5);
			case 15:
				return this.precpred(this._ctx, 4);
			case 16:
				return this.precpred(this._ctx, 3);
			case 17:
				return this.precpred(this._ctx, 12);
			case 18:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private commandExpression_sempred(_localCtx: CommandExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 19:
				return !SemanticPredicates.isFollowingArgumentsOrClosure(_localCtx._expression);
		}
		return true;
	}

	private pathExpression_sempred(_localCtx: PathExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 20:
				return this._input.LT(2).type == GroovyParser.DOT;
		}
		return true;
	}

	static readonly _serializedATN =
		'\x03\uc91d\ucaba\u058d\uafba\u4f53\u0607\uea8b\uc241\x03\u008b\u0718\x04\x02\t' +
		'\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x13' +
		'\t\x13\x04\f\t\f\x04\r\t\r\x04\x16\t\x16\x04\x17\t\x17\x04\x20\t\x20\x04\x21\t\x21\x04\x22\t\x22' +
		'\x04\x23\t\x23\x04\x24\t\x24\x04\x25\t\x25\x04\x26\t\x26\x04\x27\t\x27\x04\x30\t\x30\x04\x31\t\x31' +
		'\x04\x32\t\x32\x04\x33\t\x33\x04\x34\t\x34\x04\x35\t\x35\x04\x36\t\x36\x04\x37\t\x37\x04 \t \x04!' +
		'\t!\x04"\t"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+\x04' +
		',\t,\x04-\t-\x04.\t.\x04/\t/\x04\x60\t\x60\x04\x61\t\x61\x04\x62\t\x62\x04\x63\t\x63\x04\x64\t' +
		'\x64\x04\x65\t\x65\x04\x66\t\x66\x04\x67\t\x67\x48\t8\x49\t9\x04:\t:\x04;\t;\x04<\t<\x04=\t=' +
		'\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04F\tF\x04G\tG\x04H\tH\x04I' +
		'\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT' +
		'\x04U\tU\x04V\tV\x04W\tW\x04X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04' +
		'`\t`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04i\ti\x04j\tj\x04k\t' +
		'k\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04' +
		'w\tw\x04x\tx\x04y\ty\x04z\tz\x04{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x177\t\x177\x04\u0080\t\u0080' +
		'\x04\u0081\t\u0081\x04\u0082\t\u0082\x04\u0083\t\u0083\x04\u0084\t\u0084\x04\u0085' +
		'\t\u0085\x04\u0086\t\u0086\x04\u0087\t\u0087\x04\u0088\t\u0088\x04\u0089\t\u0089' +
		'\x04\u008a\t\u008a\x04\u008b\t\u008b\x04\u008c\t\u008c\x04\u008d\t\u008d\x04\u008e' +
		'\t\u008e\x04\u008f\t\u008f\x04\u0090\t\u0090\x04\u0091\t\u0091\x04\u0092\t\u0092' +
		'\x04\u0093\t\u0093\x04\u0094\t\u0094\x04\u0095\t\u0095\x04\u0096\t\u0096\x04\u0097' +
		'\t\u0097\x04\u0098\t\u0098\x04\u0099\t\u0099\x04\u009a\t\u009a\x04\u009b\t\u009b' +
		'\x04\u009c\t\u009c\x04\u009d\t\u009d\x04\u009e\t\u009e\x04\u009f\t\u009f\x04\u00a0' +
		'\t\u00a0\x04\u00a1\t\u00a1\x04\u00a2\t\u00a2\x04\u00a3\t\u00a3\x04\u00a4\t\u00a4' +
		'\x04\u00a5\t\u00a5\x04\u00a6\t\u00a6\x03\x02\x03\x02\x03\x02\x05\x02\u0150\n\x02\x05\x02\u0152\n' +
		'\x02\x03\x02\x05\x02\u0155\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u015d\n\x03\f\x03\x16\x03\u0160' +
		'\x13\x03\x03\x03\x05\x03\u0163\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u016a\n\x04\x03\x05\x03\x05\x03\x05' +
		'\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\u0173\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u017a\n\x06\x03\x07\x03' +
		'\x07\x03\x07\x03\b\x03\b\x05\b\u0181\n\b\x03\t\x03\t\x03\t\x05\t\u0186\n\t\x03\n\x03\n\x03\n\x03\n' +
		'\x07\n\u018c\n\n\f\n\x16\n\u018f\x13\n\x03\x13\x03\x13\x07\x13\u0193\n\x13\f\x13\x16\x13' +
		'\u0196\x13\x13\x05\x13\u0198\n\x13\x03\f\x03\f\x03\f\x03\f\x07\f\u019e\n\f\f\f\x16\f\u01a1' +
		'\x13\f\x03\r\x03\r\x05\r\u01a5\n\r\x03\x16\x03\x16\x05\x16\u01a9\n\x16\x03\x17\x03\x17\x03\x17\x05' +
		'\x17\u01ae\n\x17\x03\x20\x03\x20\x03\x20\x03\x20\x07\x20\u01b4\n\x20\f\x20\x16\x20\u01b7\x13' +
		'\x20\x03\x21\x03\x21\x03\x21\x03\x21\x03\x21\x03\x21\x03\x21\x07\x21\u01c0\n\x21\f\x21\x16\x21\u01c3' +
		'\x13\x21\x03\x21\x03\x21\x03\x21\x03\x22\x03\x22\x03\x22\x03\x22\x03\x22\x03\x22\x05\x22\u01ce\n\x22\x03' +
		'\x23\x03\x23\x03\x23\x03\x23\x03\x23\x07\x23\u01d5\n\x23\f\x23\x16\x23\u01d8\x13\x23\x03\x24\x03' +
		'\x24\x03\x24\x03\x24\x03\x24\x07\x24\u01df\n\x24\f\x24\x16\x24\u01e2\x13\x24\x03\x25\x03\x25\x03' +
		'\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x05\x25\u01f1\n\x25' +
		'\x03\x25\x03\x25\x03\x25\x03\x25\x05\x25\u01f7\n\x25\x03\x25\x03\x25\x03\x25\x05\x25\u01fc\n\x25\x03' +
		'\x25\x03\x25\x03\x25\x03\x25\x03\x25\x05\x25\u0203\n\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x05\x25' +
		'\u020a\n\x25\x03\x25\x03\x25\x03\x25\x03\x25\x03\x25\x05\x25\u0211\n\x25\x03\x25\x03\x25\x03\x25\x03' +
		'\x26\x03\x26\x03\x26\x03\x26\x03\x26\x03\x26\x03\x26\x05\x26\u021d\n\x26\x03\x26\x05\x26\u0220\n\x26' +
		'\x03\x26\x05\x26\u0223\n\x26\x03\x26\x03\x26\x03\x26\x03\x26\x07\x26\u0229\n\x26\f\x26\x16\x26\u022c' +
		'\x13\x26\x05\x26\u022e\n\x26\x03\x26\x05\x26\u0231\n\x26\x03\x26\x03\x26\x03\x27\x03\x27\x03\x27\x03' +
		'\x27\x03\x27\x03\x27\x07\x27\u023b\n\x27\f\x27\x16\x27\u023e\x13\x27\x03\x30\x03\x30\x03\x30\x05' +
		'\x30\u0243\n\x30\x03\x30\x05\x30\u0246\n\x30\x03\x31\x03\x31\x05\x31\u024a\n\x31\x03\x31\x03\x31' +
		'\x05\x31\u024e\n\x31\x03\x32\x03\x32\x03\x32\x03\x32\x03\x32\x05\x32\u0255\n\x32\x05\x32\u0257\n' +
		'\x32\x03\x33\x03\x33\x05\x33\u025b\n\x33\x03\x33\x03\x33\x03\x33\x05\x33\u0260\n\x33\x03\x33\x03\x33' +
		'\x03\x33\x03\x33\x03\x33\x03\x33\x03\x33\x03\x33\x03\x33\x03\x33\x03\x33\x05\x33\u026d\n\x33\x03\x33\x03\x33' +
		'\x03\x33\x05\x33\u0272\n\x33\x05\x33\u0274\n\x33\x03\x34\x03\x34\x03\x34\x03\x34\x03\x35\x03\x35\x05' +
		'\x35\u027c\n\x35\x03\x36\x03\x36\x05\x36\u0280\n\x36\x03\x37\x03\x37\x03 \x03 \x03 \x03 \x03 \x07 \u0289' +
		'\n \f \x016 \u028c\x013 \x03!\x03!\x03!\x03!\x03!\x03!\x05!\u0294\n!\x03"\x03"\x03#\x03#\x03$\x03' +
		'$\x03$\x03$\x03$\x03$\x07$\u02a0\n$\f$\x016$\u02a3\x013$\x03$\x03$\x05$\u02a7\n$\x03%\x03%\x03%' +
		'\x03%\x06%\u02ad\n%\r%\x016%\u02ae\x03&\x05&\u02b2\n&\x03\'\x03\'\x03\'\x05\'\u02b7\n\'' +
		'\x03\'\x03\'\x03(\x03(\x03(\x05(\u02be\n(\x03(\x05(\u02c1\n(\x03(\x03(\x03)\x03)\x05)\u02c7\n)\x03' +
		')\x05)\u02ca\n)\x03*\x03*\x05*\u02ce\n*\x03+\x03+\x05+\u02d2\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03' +
		'-\x03-\x03-\x07-\u02dd\n-\f-\x016-\u02e0\x013-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.' +
		'\u02ec\n.\x05.\u02ee\n.\x03/\x03/\x03/\x03\x60\x03\x60\x03\x60\x03\x60\x03\x60\x07\x60\u02f8\n\x60' +
		'\f\x60\x16\x60\u02fb\x13\x60\x03\x61\x03\x61\x05\x61\u02ff\n\x61\x03\x61\x03\x61\x03\x62\x03\x62' +
		'\x05\x62\u0305\n\x62\x03\x62\x03\x62\x03\x62\x03\x62\x07\x62\u030b\n\x62\f\x62\x16\x62\u030e' +
		'\x13\x62\x03\x63\x03\x63\x03\x63\x03\x64\x03\x64\x05\x64\u0315\n\x64\x03\x64\x05\x64\u0318\n\x64\x03' +
		'\x64\x03\x64\x03\x64\x03\x64\x03\x64\x03\x64\x05\x64\u0320\n\x64\x03\x65\x03\x65\x03\x66\x03\x66\x03\x66' +
		'\x07\x66\u0327\n\x66\f\x66\x16\x66\u032a\x13\x66\x03\x67\x03\x67\x03\x67\x03\x67\x03\x67\x05\x67' +
		'\u0331\n\x67\x38\x38\x38\x78\u0336\n8\f8\x168\u0339\x138\x39\x39\x39\x03:\x03:\x03:\x03' +
		':\x07:\u0342\n:\f:\x016:\u0345\x013:\x03;\x03;\x03;\x03;\x03;\x05;\u034c\n;\x03<\x03<\x03<\x03<' +
		'\x07<\u0352\n<\f<\x016<\u0355\x013<\x03<\x03<\x03=\x03=\x05=\u035b\n=\x03>\x03>\x07>\u035f\n' +
		'>\f>\x016>\u0362\x013>\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03B\x03B\x05B' +
		'\u0374\nB\x03C\x03C\x05C\u0378\nC\x03D\x03D\x03D\x03D\x03D\x05D\u037f\nD\x03D\x03D\x05D\u0383' +
		'\nD\x03D\x05D\u0386\nD\x03D\x03D\x03D\x03E\x03E\x05E\u038d\nE\x03F\x05F\u0390\nF\x03G\x03G\x03G' +
		'\x03G\x07G\u0396\nG\fG\x016G\u0399\x013G\x03G\x05G\u039c\nG\x03H\x03H\x03H\x03H\x07H\u03a2\n' +
		'H\fH\x016H\u03a5\x013H\x03H\x03H\x05H\u03a9\nH\x03I\x03I\x03I\x03I\x03I\x05I\u03b0\nI\x03I\x03I' +
		'\x05I\u03b4\nI\x03J\x03J\x05J\u03b8\nJ\x03K\x03K\x03L\x03L\x03L\x07L\u03bf\nL\fL\x016L\u03c2' +
		'\x013L\x03M\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x05N\u03cc\nN\x03O\x03O\x03O\x05O\u03d1\nO\x03P\x03P\x03' +
		'P\x03P\x07P\u03d7\nP\fP\x016P\u03da\x013P\x03P\x05P\u03dd\nP\x05P\u03df\nP\x03P\x03P\x03Q' +
		'\x03Q\x05Q\u03e5\nQ\x03Q\x03Q\x03Q\x03R\x03R\x05R\u03ec\nR\x03S\x03S\x03S\x03T\x03T\x03T\x05T\u03f4' +
		'\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u03fd\nT\x03T\x03T\x03T\x05T\u0402\nT\x03U\x03U\x03U\x03U' +
		'\x07U\u0408\nU\fU\x016U\u040b\x013U\x03U\x03U\x03V\x05V\u0410\nV\x03V\x03V\x03W\x03W\x03W\x03W\x06' +
		'W\u0418\nW\rW\x016W\u0419\x03W\x03W\x03X\x03X\x05X\u0420\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0428' +
		'\nY\x03Y\x03Y\x03Y\x03Y\x05Y\u042e\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x06Z\u0436\nZ\rZ\x016Z\u0437' +
		'\x03Z\x03Z\x05Z\u043c\nZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[' +
		'\x03[\x03[\x03[\x03[\x05[\u0453\n[\x03\\\x03\\\x05\\\u0457\n\\\x03]\x03]\x05]\u045b\n]\x03^\x03' +
		'^\x03^\x03_\x03_\x05_\u0462\n_\x03_\x03_\x03_\x03_\x03_\x07_\u0469\n_\f_\x016_\u046c\x013_\x03_' +
		'\x03_\x03_\x05_\u0471\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u047a\n`\x03a\x03a\x03a\x03a\x03a\x03a' +
		'\x03a\x03a\x03a\x03a\x03a\x05a\u0487\na\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a' +
		'\x03a\x05a\u0498\na\x03b\x03b\x03b\x03b\x05b\u049e\nb\x03b\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x07c\u04a8' +
		'\nc\fc\x016c\u04ab\x013c\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03e\x05e\u04b5\ne\x03e\x03e\x03f\x03f\x03' +
		'f\x03f\x07f\u04bd\nf\ff\x016f\u04c0\x013f\x03g\x03g\x05g\u04c4\ng\x03h\x03h\x03h\x03h\x07h\u04ca' +
		'\nh\fh\x016h\u04cd\x013h\x03h\x03h\x03h\x03i\x03i\x03i\x03i\x03i\x03i\x05i\u04d8\ni\x03j\x03j\x05j\u04dc' +
		'\nj\x03k\x03k\x05k\u04e0\nk\x03k\x03k\x03k\x03k\x03l\x05l\u04e7\nl\x03l\x03l\x05l\u04eb\nl\x03l' +
		'\x03l\x05l\u04ef\nl\x03m\x03m\x05m\u04f3\nm\x03n\x03n\x03o\x03o\x03o\x03o\x03p\x03p\x03q\x03q\x03q\x03q' +
		'\x03r\x03r\x03r\x03r\x03r\x07r\u0506\nr\fr\x016r\u0509\x013r\x03s\x05s\u050c\ns\x03s\x03s\x03t\x03' +
		't\x05t\u0512\nt\x03u\x03u\x03v\x03v\x05v\u0518\nv\x03w\x03w\x03w\x03w\x03w\x03w\x07w\u0520\nw\f' +
		'w\x016w\u0523\x013w\x03w\x03w\x03w\x03x\x03x\x03x\x06x\u052b\nx\rx\x016x\u052c\x03x\x03x\x03y\x03' +
		'y\x03y\x05y\u0534\ny\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03' +
		'z\x03z\x03z\x05z\u054a\nz\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03' +
		'z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u0565\nz\x03z\x05z\u0568\nz\x03z\x03z\x03z\x03z\x03z\x03' +
		'z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03' +
		'z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03' +
		'z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x05z\u05a8\nz\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03' +
		'z\x03z\x03z\x03z\x03z\x03z\x07z\u05b8\nz\fz\x016z\u05bb\x013z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{' +
		'\x03{\x03{\x05{\u05c7\n{\x03|\x03|\x03|\x03|\x05|\u05cd\n|\x03|\x07|\u05d0\n|\f|\x016|\u05d3' +
		'\x013|\x03}\x03}\x06}\u05d7\n}\r}\x016}\u05d8\x03}\x05}\u05dc\n}\x03~\x03~\x03~\x05~\u05e1\n' +
		'~\x03~\x03~\x03~\x07~\u05e6\n~\f~\x016~\u05e9\x013~\x03\x177\x03\x177\x03\x177\x03\x177\x03\x0177' +
		'\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x05\x177\u05f6\n\x177\x03\x177\x03\x177\x03\x0177' +
		'\x03\x177\x05\x177\u05fc\n\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x05\x177\u0604' +
		'\n\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x03\x177\x05\x177\u060f' +
		'\n\x177\x03\u0080\x03\u0080\x03\u0080\x03\u0080\x05\u0080\u0615\n\u0080\x03\u0081\x03' +
		'\u0081\x05\u0081\u0619\n\u0081\x03\u0082\x03\u0082\x05\u0082\u061d\n\u0082\x03\u0082' +
		'\x03\u0082\x03\u0083\x03\u0083\x03\u0083\x05\u0083\u0624\n\u0083\x03\u0083\x03\u0083' +
		'\x03\u0084\x03\u0084\x05\u0084\u062a\n\u0084\x03\u0084\x03\u0084\x03\u0084\x03\u0084' +
		'\x03\u0084\x03\u0084\x03\u0084\x03\u0084\x03\u0084\x03\u0084\x03\u0084\x03\u0084\x03\u0084' +
		'\x05\u0084\u0639\n\u0084\x03\u0085\x03\u0085\x03\u0085\x03\u0085\x03\u0085\x03\u0085' +
		'\x05\u0085\u0641\n\u0085\x03\u0086\x03\u0086\x03\u0086\x05\u0086\u0646\n\u0086\x03' +
		'\u0087\x03\u0087\x03\u0087\x05\u0087\u064b\n\u0087\x03\u0088\x03\u0088\x05\u0088\u064f' +
		'\n\u0088\x03\u0088\x05\u0088\u0652\n\u0088\x03\u0088\x03\u0088\x03\u0089\x03\u0089' +
		'\x03\u0089\x05\u0089\u0659\n\u0089\x03\u0089\x05\u0089\u065c\n\u0089\x03\u0089\x03' +
		'\u0089\x03\u008a\x03\u008a\x03\u008a\x07\u008a\u0663\n\u008a\f\u008a\x16\u008a' +
		'\u0666\x13\u008a\x03\u008b\x03\u008b\x03\u008b\x07\u008b\u066b\n\u008b\f\u008b' +
		'\x16\u008b\u066e\x13\u008b\x03\u008c\x03\u008c\x03\u008c\x03\u008c\x03\u008c\x03\u008c' +
		'\x03\u008c\x03\u008c\x03\u008c\x03\u008c\x05\u008c\u067a\n\u008c\x03\u008d\x03\u008d' +
		'\x03\u008d\x03\u008d\x03\u008d\x03\u008d\x03\u008d\x03\u008d\x03\u008d\x03\u008d\x05\u008d' +
		'\u0686\n\u008d\x03\u008e\x03\u008e\x03\u008e\x03\u008e\x03\u008e\x03\u008e\x03\u008e' +
		'\x03\u008e\x03\u008e\x03\u008e\x05\u008e\u0692\n\u008e\x03\u008f\x03\u008f\x05\u008f' +
		'\u0696\n\u008f\x03\u0090\x03\u0090\x05\u0090\u069a\n\u0090\x03\u0091\x03\u0091\x05' +
		'\u0091\u069e\n\u0091\x03\u0092\x03\u0092\x03\u0092\x03\u0092\x05\u0092\u06a4\n\u0092' +
		'\x03\u0092\x06\u0092\u06a7\n\u0092\r\u0092\x16\u0092\u06a8\x03\u0092\x03\u0092' +
		'\x03\u0092\x05\u0092\u06ae\n\u0092\x05\u0092\u06b0\n\u0092\x03\u0093\x03\u0093\x03' +
		'\u0093\x05\u0093\u06b5\n\u0093\x03\u0093\x03\u0093\x03\u0094\x03\u0094\x03\u0094\x03' +
		'\u0094\x03\u0094\x05\u0094\u06be\n\u0094\x03\u0094\x03\u0094\x03\u0095\x03\u0095\x03' +
		'\u0096\x03\u0096\x03\u0096\x03\u0096\x05\u0096\u06c8\n\u0096\x05\u0096\u06ca\n\u0096' +
		'\x03\u0097\x03\u0097\x03\u0097\x03\u0097\x03\u0097\x03\u0097\x03\u0098\x03\u0098\x03\u0098' +
		'\x05\u0098\u06d5\n\u0098\x03\u0099\x03\u0099\x05\u0099\u06d9\n\u0099\x03\u0099\x05' +
		'\u0099\u06dc\n\u0099\x03\u0099\x03\u0099\x03\u009a\x03\u009a\x03\u009a\x03\u009a\x03' +
		'\u009a\x07\u009a\u06e5\n\u009a\f\u009a\x16\u009a\u06e8\x13\u009a\x03\u009b\x03' +
		'\u009b\x03\u009b\x03\u009b\x03\u009b\x07\u009b\u06ef\n\u009b\f\u009b\x16\u009b' +
		'\u06f2\x13\u009b\x03\u009c\x03\u009c\x05\u009c\u06f6\n\u009c\x03\u009d\x03\u009d' +
		'\x05\u009d\u06fa\n\u009d\x03\u009e\x03\u009e\x03\u009e\x05\u009e\u06ff\n\u009e\x03' +
		'\u009f\x03\u009f\x03\u00a0\x03\u00a0\x03\u00a1\x03\u00a1\x03\u00a2\x03\u00a2\x03\u00a3' +
		'\x03\u00a3\x03\u00a4\x03\u00a4\x03\u00a5\x07\u00a5\u070e\n\u00a5\f\u00a5\x16\u00a5' +
		'\u0711\x13\u00a5\x03\u00a6\x06\u00a6\u0714\n\u00a6\r\u00a6\x16\u00a6\u0715\x03' +
		'\u00a6\x02\x02\x03\u00f2\u00a7\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x16\x02\x20\x02\x22\x02\x24\x02\x26' +
		'\x02\x30\x02\x32\x02\x34\x02\x36\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x60\x02\x62\x02\x64\x02\x66\x28\x02' +
		':\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02' +
		'h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\u0080\x02\u0082\x02\u0084\x02\u0086\x02\u0088' +
		'\x02\u008a\x02\u008c\x02\u008e\x02\u0090\x02\u0092\x02\u0094\x02\u0096\x02\u0098\x02\u009a' +
		'\x02\u009c\x02\u009e\x02\u00a0\x02\u00a2\x02\u00a4\x02\u00a6\x02\u00a8\x02\u00aa\x02\u00ac' +
		'\x02\u00ae\x02\u00b0\x02\u00b2\x02\u00b4\x02\u00b6\x02\u00b8\x02\u00ba\x02\u00bc\x02\u00be' +
		'\x02\u00c0\x02\u00c2\x02\u00c4\x02\u00c6\x02\u00c8\x02\u00ca\x02\u00cc\x02\u00ce\x02\u00d0' +
		'\x02\u00d2\x02\u00d4\x02\u00d6\x02\u00d8\x02\u00da\x02\u00dc\x02\u00de\x02\u00e0\x02\u00e2' +
		'\x02\u00e4\x02\u00e6\x02\u00e8\x02\u00ea\x02\u00ec\x02\u00ee\x02\u00f0\x02\u00f2\x02\u00f4' +
		'\x02\u00f6\x02\u00f8\x02\u00fa\x02\u00fc\x02\u00fe\x02\u0100\x02\u0102\x02\u0104\x02\u0106' +
		'\x02\u0108\x02\u010a\x02\u010c\x02\u010e\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118' +
		'\x02\u011a\x02\u011c\x02\u011e\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012a' +
		'\x02\u012c\x02\u012e\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013a\x02\u013c' +
		'\x02\u013e\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014a\x02\x02\x32\b\x02\n' +
		'\n\x16\x16\'\'\x66\x066::==\b\x02\x20\x20\x31\x31\x36\x036)),.\x61\x63\b\x02\n\n\x16\x16\x20' +
		'\x20\x36\x036,.\x62\x63\x04\x02\x35\x35\x64\x64\x04\x02__gg\x04\x02\x13\x013gg\x03\x02no\x04\x02UUgg\x03' +
		'\x02de\x03\x02nq\x04\x02rsww\x03\x02pq\x03\x02CF\x06\x02\x13\x013WWbcij\x05\x02RThhkk\x03\x02NO\x05\x02\t\t' +
		'%%VV\x05\x02QQaax\u0083\x05\x02GHJJ``\x04\x02II\\\\\n\x02\t\t\x13\f\x16\x16\x23\x023++//\x61' +
		'\x61\u0084\u0085\x04\x02\x17\x017<<\x04\x02\t>AB\x04\x02^^\u0089\u0089\x02\u0781\x02\u014c' +
		'\x03\x02\x02\x02\x04\u0158\x03\x02\x02\x02\x06\u0169\x03\x02\x02\x02\b\u016b\x03\x02\x02\x02\n\u016f\x03\x02\x02' +
		'\x02\f\u017b\x03\x02\x02\x02\x16\u0180\x03\x02\x02\x02\x20\u0185\x03\x02\x02\x02\x22\u0187\x03\x02\x02\x02' +
		'\x24\u0197\x03\x02\x02\x02\x26\u0199\x03\x02\x02\x02\x30\u01a4\x03\x02\x02\x02\x32\u01a8\x03\x02\x02\x02\x34' +
		'\u01ad\x03\x02\x02\x02\x36\u01af\x03\x02\x02\x02 \u01b8\x03\x02\x02\x02"\u01c7\x03\x02\x02\x02$\u01cf' +
		'\x03\x02\x02\x02&\u01d9\x03\x02\x02\x02(\u01f0\x03\x02\x02\x02*\u0215\x03\x02\x02\x02,\u0234\x03\x02\x02\x02.' +
		'\u023f\x03\x02\x02\x02\x60\u024d\x03\x02\x02\x02\x62\u0256\x03\x02\x02\x02\x64\u0258\x03\x02\x02\x02\x66\u0275' +
		'\x03\x02\x02\x28\u027b\x03\x02\x02\x02:\u027f\x03\x02\x02\x02<\u0281\x03\x02\x02\x02>\u0283\x03\x02\x02\x02@' +
		'\u028d\x03\x02\x02\x02B\u0295\x03\x02\x02\x02D\u0297\x03\x02\x02\x02F\u0299\x03\x02\x02\x02H\u02ac\x03\x02' +
		'\x02\x02J\u02b1\x03\x02\x02\x02L\u02b3\x03\x02\x02\x02N\u02ba\x03\x02\x02\x02P\u02c6\x03\x02\x02\x02R\u02cb' +
		'\x03\x02\x02\x02T\u02cf\x03\x02\x02\x02V\u02d3\x03\x02\x02\x02X\u02d5\x03\x02\x02\x02Z\u02ed\x03\x02\x02\x02\\' +
		'\u02ef\x03\x02\x02\x02^\u02f2\x03\x02\x02\x02`\u02fc\x03\x02\x02\x02b\u0304\x03\x02\x02\x02d\u030f\x03\x02' +
		'\x02\x02f\u0312\x03\x02\x02\x02h\u0321\x03\x02\x02\x02j\u0323\x03\x02\x02\x02l\u0330\x03\x02\x02\x02n\u0337' +
		'\x03\x02\x02\x02p\u033a\x03\x02\x02\x02r\u033d\x03\x02\x02\x02t\u034b\x03\x02\x02\x02v\u034d\x03\x02\x02\x02x' +
		'\u035a\x03\x02\x02\x02z\u035c\x03\x02\x02\x02|\u0363\x03\x02\x02\x02~\u0369\x03\x02\x02\x02\u0080\u036f' +
		'\x03\x02\x02\x02\u0082\u0373\x03\x02\x02\x02\u0084\u0377\x03\x02\x02\x02\u0086\u0379\x03\x02\x02\x02\u0088' +
		'\u038c\x03\x02\x02\x02\u008a\u038f\x03\x02\x02\x02\u008c\u0391\x03\x02\x02\x02\u008e\u03a8\x03\x02' +
		'\x02\x02\u0090\u03aa\x03\x02\x02\x02\u0092\u03b7\x03\x02\x02\x02\u0094\u03b9\x03\x02\x02\x02\u0096' +
		'\u03bb\x03\x02\x02\x02\u0098\u03c3\x03\x02\x02\x02\u009a\u03cb\x03\x02\x02\x02\u009c\u03d0\x03\x02' +
		'\x02\x02\u009e\u03d2\x03\x02\x02\x02\u00a0\u03e2\x03\x02\x02\x02\u00a2\u03eb\x03\x02\x02\x02\u00a4' +
		'\u03ed\x03\x02\x02\x02\u00a6\u0401\x03\x02\x02\x02\u00a8\u0403\x03\x02\x02\x02\u00aa\u040f\x03\x02' +
		'\x02\x02\u00ac\u0413\x03\x02\x02\x02\u00ae\u041f\x03\x02\x02\x02\u00b0\u0421\x03\x02\x02\x02\u00b2' +
		'\u042f\x03\x02\x02\x02\u00b4\u0452\x03\x02\x02\x02\u00b6\u0454\x03\x02\x02\x02\u00b8\u0458\x03\x02' +
		'\x02\x02\u00ba\u045c\x03\x02\x02\x02\u00bc\u045f\x03\x02\x02\x02\u00be\u0472\x03\x02\x02\x02\u00c0' +
		'\u0497\x03\x02\x02\x02\u00c2\u0499\x03\x02\x02\x02\u00c4\u04a4\x03\x02\x02\x02\u00c6\u04ac\x03\x02' +
		'\x02\x02\u00c8\u04b0\x03\x02\x02\x02\u00ca\u04b8\x03\x02\x02\x02\u00cc\u04c3\x03\x02\x02\x02\u00ce' +
		'\u04c5\x03\x02\x02\x02\u00d0\u04d7\x03\x02\x02\x02\u00d2\u04db\x03\x02\x02\x02\u00d4\u04dd\x03\x02' +
		'\x02\x02\u00d6\u04e6\x03\x02\x02\x02\u00d8\u04f2\x03\x02\x02\x02\u00da\u04f4\x03\x02\x02\x02\u00dc' +
		'\u04f6\x03\x02\x02\x02\u00de\u04fa\x03\x02\x02\x02\u00e0\u04fc\x03\x02\x02\x02\u00e2\u0500\x03\x02' +
		'\x02\x02\u00e4\u050b\x03\x02\x02\x02\u00e6\u0511\x03\x02\x02\x02\u00e8\u0513\x03\x02\x02\x02\u00ea' +
		'\u0515\x03\x02\x02\x02\u00ec\u0519\x03\x02\x02\x02\u00ee\u052a\x03\x02\x02\x02\u00f0\u0533\x03\x02' +
		'\x02\x02\u00f2\u0549\x03\x02\x02\x02\u00f4\u05c6\x03\x02\x02\x02\u00f6\u05c8\x03\x02\x02\x02\u00f8' +
		'\u05d4\x03\x02\x02\x02\u00fa\u05e0\x03\x02\x02\x02\u00fc\u060e\x03\x02\x02\x02\u00fe\u0614\x03\x02' +
		'\x02\x02\u0100\u0618\x03\x02\x02\x02\u0102\u061a\x03\x02\x02\x02\u0104\u0620\x03\x02\x02\x02\u0106' +
		'\u0638\x03\x02\x02\x02\u0108\u0640\x03\x02\x02\x02\u010a\u0645\x03\x02\x02\x02\u010c\u064a\x03\x02' +
		'\x02\x02\u010e\u064c\x03\x02\x02\x02\u0110\u0655\x03\x02\x02\x02\u0112\u065f\x03\x02\x02\x02\u0114' +
		'\u0667\x03\x02\x02\x02\u0116\u0679\x03\x02\x02\x02\u0118\u0685\x03\x02\x02\x02\u011a\u0691\x03\x02' +
		'\x02\x02\u011c\u0695\x03\x02\x02\x02\u011e\u0699\x03\x02\x02\x02\u0120\u069d\x03\x02\x02\x02\u0122' +
		'\u069f\x03\x02\x02\x02\u0124\u06b1\x03\x02\x02\x02\u0126\u06b8\x03\x02\x02\x02\u0128\u06c1\x03\x02' +
		'\x02\x02\u012a\u06c3\x03\x02\x02\x02\u012c\u06cb\x03\x02\x02\x02\u012e\u06d4\x03\x02\x02\x02\u0130' +
		'\u06d6\x03\x02\x02\x02\u0132\u06df\x03\x02\x02\x02\u0134\u06e9\x03\x02\x02\x02\u0136\u06f5\x03\x02' +
		'\x02\x02\u0138\u06f9\x03\x02\x02\x02\u013a\u06fe\x03\x02\x02\x02\u013c\u0700\x03\x02\x02\x02\u013e' +
		'\u0702\x03\x02\x02\x02\u0140\u0704\x03\x02\x02\x02\u0142\u0706\x03\x02\x02\x02\u0144\u0708\x03\x02' +
		'\x02\x02\u0146\u070a\x03\x02\x02\x02\u0148\u070f\x03\x02\x02\x02\u014a\u0713\x03\x02\x02\x02\u014c' +
		'\u0151\x05\u0148\u00a5\x02\u014d\u014f\x05\b\x05\x02\u014e\u0150\x05\u014a\u00a6\x02' +
		'\u014f\u014e\x03\x02\x02\x02\u014f\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014d' +
		'\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0154\x03\x02\x02\x02\u0153\u0155\x05\x04\x03\x02\u0154' +
		'\u0153\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x07\x02' +
		'\x02\x03\u0157\x03\x03\x02\x02\x02\u0158\u015e\x05\x06\x04\x02\u0159\u015a\x05\u014a\u00a6\x02\u015a' +
		'\u015b\x05\x06\x04\x02\u015b\u015d\x03\x02\x02\x02\u015c\u0159\x03\x02\x02\x02\u015d\u0160\x03\x02' +
		'\x02\x02\u015e\u015c\x03\x02\x02\x02\u015e\u015f\x03\x02\x02\x02\u015f\u0162\x03\x02\x02\x02\u0160' +
		'\u015e\x03\x02\x02\x02\u0161\u0163\x05\u014a\u00a6\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163' +
		'\x03\x02\x02\x02\u0163\x05\x03\x02\x02\x02\u0164\u016a\x05\n\x06\x02\u0165\u016a\x05\f\x07\x02\u0166' +
		'\u0167\x06\x04\x02\x02\u0167\u016a\x05\x64\x33\x02\u0168\u016a\x05\u00c0a\x02\u0169\u0164' +
		'\x03\x02\x02\x02\u0169\u0165\x03\x02\x02\x02\u0169\u0166\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02\u016a' +
		'\x07\x03\x02\x02\x02\u016b\u016c\x05\u008eH\x02\u016c\u016d\x07*\x02\x02\u016d\u016e\x05j\x66' +
		'\x02\u016e\t\x03\x02\x02\x02\u016f\u0170\x05\u008eH\x02\u0170\u0172\x07$\x02\x02\u0171\u0173' +
		'\x07\x62\x02\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02' +
		'\u0174\u0179\x05j\x66\x02\u0175\u0176\x07`\x02\x02\u0176\u017a\x07r\x02\x02\u0177\u0178' +
		'\x07\t\x02\x02\u0178\u017a\x05\u0140\u00a1\x02\u0179\u0175\x03\x02\x02\x02\u0179\u0177\x03' +
		'\x02\x02\x02\u0179\u017a\x03\x02\x02\x02\u017a\x13\x03\x02\x02\x02\u017b\u017c\x05\x24\x13\x02\u017c' +
		'\u017d\x05(\x25\x02\u017d\r\x03\x02\x02\x02\u017e\u0181\x05\x30\r\x02\u017f\u0181\t\x02\x02' +
		'\x02\u0180\u017e\x03\x02\x02\x02\u0180\u017f\x03\x02\x02\x02\u0181\x17\x03\x02\x02\x02\u0182\u0183' +
		'\x05\x22\n\x02\u0183\u0184\x05\u0148\u00a5\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0182' +
		'\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\x21\x03\x02\x02\x02\u0187\u018d\x05\x16\b\x02\u0188' +
		'\u0189\x05\u0148\u00a5\x02\u0189\u018a\x05\x16\b\x02\u018a\u018c\x03\x02\x02\x02\u018b' +
		'\u0188\x03\x02\x02\x02\u018c\u018f\x03\x02\x02\x02\u018d\u018b\x03\x02\x02\x02\u018d\u018e\x03\x02' +
		'\x02\x02\u018e\x23\x03\x02\x02\x02\u018f\u018d\x03\x02\x02\x02\u0190\u0194\x05\x26\f\x02\u0191\u0193' +
		'\x07\u0089\x02\x02\u0192\u0191\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02' +
		'\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u0190' +
		'\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\x25\x03\x02\x02\x02\u0199\u019f\x05\x30\r\x02\u019a' +
		'\u019b\x05\u0148\u00a5\x02\u019b\u019c\x05\x30\r\x02\u019c\u019e\x03\x02\x02\x02\u019d' +
		'\u019a\x03\x02\x02\x02\u019e\u01a1\x03\x02\x02\x02\u019f\u019d\x03\x02\x02\x02\u019f\u01a0\x03\x02' +
		'\x02\x02\u01a0\x27\x03\x02\x02\x02\u01a1\u019f\x03\x02\x02\x02\u01a2\u01a5\x05\u0090I\x02\u01a3' +
		'\u01a5\t\x03\x02\x02\u01a4\u01a2\x03\x02\x02\x02\u01a4\u01a3\x03\x02\x02\x02\u01a5\x31\x03\x02\x02' +
		'\x02\u01a6\u01a9\x05\u0090I\x02\u01a7\u01a9\t\x04\x02\x02\u01a8\u01a6\x03\x02\x02\x02\u01a8' +
		'\u01a7\x03\x02\x02\x02\u01a9\x33\x03\x02\x02\x02\u01aa\u01ab\x05\x36\x20\x02\u01ab\u01ac\x05\u0148' +
		'\u00a5\x02\u01ac\u01ae\x03\x02\x02\x02\u01ad\u01aa\x03\x02\x02\x02\u01ad\u01ae\x03\x02\x02\x02\u01ae' +
		'\x35\x03\x02\x02\x02\u01af\u01b5\x05\x32\x16\x02\u01b0\u01b1\x05\u0148\u00a5\x02\u01b1\u01b2' +
		'\x05\x32\x16\x02\u01b2\u01b4\x03\x02\x02\x02\u01b3\u01b0\x03\x02\x02\x02\u01b4\u01b7\x03\x02\x02\x02' +
		'\u01b5\u01b3\x03\x02\x02\x02\u01b5\u01b6\x03\x02\x02\x02\u01b6\x37\x03\x02\x02\x02\u01b7\u01b5' +
		'\x03\x02\x02\x02\u01b8\u01b9\x07c\x02\x02\u01b9\u01ba\x05\u0148\u00a5\x02\u01ba\u01c1\x05' +
		'"\x22\x02\u01bb\u01bc\x07_\x02\x02\u01bc\u01bd\x05\u0148\u00a5\x02\u01bd\u01be\x05"' +
		'\x22\x02\u01be\u01c0\x03\x02\x02\x02\u01bf\u01bb\x03\x02\x02\x02\u01c0\u01c3\x03\x02\x02\x02\u01c1' +
		'\u01bf\x03\x02\x02\x02\u01c1\u01c2\x03\x02\x02\x02\u01c2\u01c4\x03\x02\x02\x02\u01c3\u01c1\x03\x02' +
		'\x02\x02\u01c4\u01c5\x05\u0148\u00a5\x02\u01c5\u01c6\x07b\x02\x02\u01c6!\x03\x02\x02\x02\u01c7' +
		'\u01c8\x05\u008eH\x02\u01c8\u01cd\x05\u013e\u00a0\x02\u01c9\u01ca\x07\x35\x02\x02\u01ca' +
		'\u01cb\x05\u0148\u00a5\x02\u01cb\u01cc\x05$\x23\x02\u01cc\u01ce\x03\x02\x02\x02\u01cd\u01c9' +
		'\x03\x02\x02\x02\u01cd\u01ce\x03\x02\x02\x02\u01ce#\x03\x02\x02\x02\u01cf\u01d6\x05N(\x02\u01d0\u01d1' +
		'\x07t\x02\x02\u01d1\u01d2\x05\u0148\u00a5\x02\u01d2\u01d3\x05N(\x02\u01d3\u01d5\x03\x02' +
		'\x02\x02\u01d4\u01d0\x03\x02\x02\x02\u01d5\u01d8\x03\x02\x02\x02\u01d6\u01d4\x03\x02\x02\x02\u01d6' +
		'\u01d7\x03\x02\x02\x02\u01d7%\x03\x02\x02\x02\u01d8\u01d6\x03\x02\x02\x02\u01d9\u01e0\x05N(\x02\u01da' +
		'\u01db\x07_\x02\x02\u01db\u01dc\x05\u0148\u00a5\x02\u01dc\u01dd\x05N(\x02\u01dd\u01df' +
		'\x03\x02\x02\x02\u01de\u01da\x03\x02\x02\x02\u01df\u01e2\x03\x02\x02\x02\u01e0\u01de\x03\x02\x02\x02\u01e0' +
		'\u01e1\x03\x02\x02\x02\u01e1\'\x03\x02\x02\x02\u01e2\u01e0\x03\x02\x02\x02\u01e3\u01e4\x07\x26\x02' +
		'\x02\u01e4\u01f1\b\x25\x01\x02\u01e5\u01e6\x07&\x02\x02\u01e6\u01f1\b\x25\x01\x02\u01e7' +
		'\u01e8\x07\x34\x02\x02\u01e8\u01f1\b\x25\x01\x02\u01e9\u01ea\x07\u0086\x02\x02\u01ea\u01eb' +
		'\x07&\x02\x02\u01eb\u01f1\b\x25\x01\x02\u01ec\u01ed\x07\f\x02\x02\u01ed\u01f1\b\x25\x01\x02' +
		'\u01ee\u01ef\x07/\x02\x02\u01ef\u01f1\b\x25\x01\x02\u01f0\u01e3\x03\x02\x02\x02\u01f0\u01e5' +
		'\x03\x02\x02\x02\u01f0\u01e7\x03\x02\x02\x02\u01f0\u01e9\x03\x02\x02\x02\u01f0\u01ec\x03\x02\x02\x02\u01f0' +
		'\u01ee\x03\x02\x02\x02\u01f1\u01f2\x03\x02\x02\x02\u01f2\u01f6\x05\u0140\u00a1\x02\u01f3\u01f4' +
		'\x05\u0148\u00a5\x02\u01f4\u01f5\x05 \x21\x02\u01f5\u01f7\x03\x02\x02\x02\u01f6\u01f3\x03' +
		'\x02\x02\x02\u01f6\u01f7\x03\x02\x02\x02\u01f7\u01fb\x03\x02\x02\x02\u01f8\u01f9\x05\u0148\u00a5' +
		'\x02\u01f9\u01fa\x05`\x61\x02\u01fa\u01fc\x03\x02\x02\x02\u01fb\u01f8\x03\x02\x02\x02\u01fb\u01fc' +
		'\x03\x02\x02\x02\u01fc\u0202\x03\x02\x02\x02\u01fd\u01fe\x05\u0148\u00a5\x02\u01fe\u01ff\x07' +
		'\x35\x02\x02\u01ff\u0200\x05\u0148\u00a5\x02\u0200\u0201\x05&\x24\x02\u0201\u0203\x03' +
		'\x02\x02\x02\u0202\u01fd\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0209\x03\x02\x02\x02\u0204' +
		'\u0205\x05\u0148\u00a5\x02\u0205\u0206\x07#\x02\x02\u0206\u0207\x05\u0148\u00a5\x02' +
		'\u0207\u0208\x05&\x24\x02\u0208\u020a\x03\x02\x02\x02\u0209\u0204\x03\x02\x02\x02\u0209\u020a' +
		'\x03\x02\x02\x02\u020a\u0210\x03\x02\x02\x02\u020b\u020c\x05\u0148\u00a5\x02\u020c\u020d\x07' +
		'+\x02\x02\u020d\u020e\x05\u0148\u00a5\x02\u020e\u020f\x05&\x24\x02\u020f\u0211\x03\x02' +
		'\x02\x02\u0210\u020b\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212' +
		'\u0213\x05\u0148\u00a5\x02\u0213\u0214\x05*\x26\x02\u0214)\x03\x02\x02\x02\u0215\u0216' +
		'\x07Z\x02\x02\u0216\u0222\x05\u0148\u00a5\x02\u0217\u0218\x06\x26\x03\x03\u0218\u021c\x05' +
		',\x27\x02\u0219\u021a\x05\u0148\u00a5\x02\u021a\u021b\x07_\x02\x02\u021b\u021d\x03\x02' +
		'\x02\x02\u021c\u0219\x03\x02\x02\x02\u021c\u021d\x03\x02\x02\x02\u021d\u021f\x03\x02\x02\x02\u021e' +
		'\u0220\x05\u014a\u00a6\x02\u021f\u021e\x03\x02\x02\x02\u021f\u0220\x03\x02\x02\x02\u0220\u0223' +
		'\x03\x02\x02\x02\u0221\u0223\x03\x02\x02\x02\u0222\u0217\x03\x02\x02\x02\u0222\u0221\x03\x02\x02\x02\u0223' +
		'\u022d\x03\x02\x02\x02\u0224\u022a\x05\x60\x31\x02\u0225\u0226\x05\u014a\u00a6\x02\u0226' +
		'\u0227\x05\x60\x31\x02\u0227\u0229\x03\x02\x02\x02\u0228\u0225\x03\x02\x02\x02\u0229\u022c\x03' +
		'\x02\x02\x02\u022a\u0228\x03\x02\x02\x02\u022a\u022b\x03\x02\x02\x02\u022b\u022e\x03\x02\x02\x02\u022c' +
		'\u022a\x03\x02\x02\x02\u022d\u0224\x03\x02\x02\x02\u022d\u022e\x03\x02\x02\x02\u022e\u0230\x03\x02' +
		'\x02\x02\u022f\u0231\x05\u014a\u00a6\x02\u0230\u022f\x03\x02\x02\x02\u0230\u0231\x03\x02\x02' +
		'\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x07[\x02\x02\u0233+\x03\x02\x02\x02\u0234\u023c\x05' +
		'.\x30\x02\u0235\u0236\x05\u0148\u00a5\x02\u0236\u0237\x07_\x02\x02\u0237\u0238\x05\u0148' +
		'\u00a5\x02\u0238\u0239\x05.\x30\x02\u0239\u023b\x03\x02\x02\x02\u023a\u0235\x03\x02\x02\x02\u023b' +
		'\u023e\x03\x02\x02\x02\u023c\u023a\x03\x02\x02\x02\u023c\u023d\x03\x02\x02\x02\u023d-\x03\x02\x02\x02' +
		'\u023e\u023c\x03\x02\x02\x02\u023f\u0240\x05\u008eH\x02\u0240\u0242\x05\u0140\u00a1' +
		'\x02\u0241\u0243\x05\u0130\u0099\x02\u0242\u0241\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02' +
		'\u0243\u0245\x03\x02\x02\x02\u0244\u0246\x05\u0128\u0095\x02\u0245\u0244\x03\x02\x02\x02\u0245' +
		'\u0246\x03\x02\x02\x02\u0246/\x03\x02\x02\x02\u0247\u0248\x07\x62\x02\x02\u0248\u024a\x05\u0148' +
		'\u00a5\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024a\x03\x02\x02\x02\u024a\u024b\x03\x02\x02\x02\u024b' +
		'\u024e\x05\u00a0Q\x02\u024c\u024e\x05\x62\x32\x02\u024d\u0249\x03\x02\x02\x02\u024d\u024c' +
		'\x03\x02\x02\x02\u024e\x61\x03\x02\x02\x02\u024f\u0257\x05\x64\x33\x02\u0250\u0257\x05<\x37\x02\u0251' +
		'\u0254\x05\x20\t\x02\u0252\u0255\x05(\x25\x02\u0253\u0255\x05\x66\x34\x02\u0254\u0252' +
		'\x03\x02\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u024f\x03\x02\x02\x02\u0256' +
		'\u0250\x03\x02\x02\x02\u0256\u0251\x03\x02\x02\x02\u0257\x63\x03\x02\x02\x02\u0258\u025a\x05\x20\t' +
		'\x02\u0259\u025b\x05 \x21\x02\u025a\u0259\x03\x02\x02\x02\u025a\u025b\x03\x02\x02\x02\u025b\u025f' +
		'\x03\x02\x02\x02\u025c\u025d\x05:\x36\x02\u025d\u025e\x05\u0148\u00a5\x02\u025e\u0260\x03' +
		'\x02\x02\x02\u025f\u025c\x03\x02\x02\x02\u025f\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261' +
		'\u0262\x58\x35\x02\u0262\u0273\x05`\x61\x02\u0263\u0264\x07\x31\x02\x02\u0264\u0265\x05' +
		'\u0148\u00a5\x02\u0265\u0266\x05\u009cO\x02\u0266\u0274\x03\x02\x02\x02\u0267\u0268' +
		'\x05\u0148\u00a5\x02\u0268\u0269\x79\x02\x02\u0269\u026a\x05\u0148\u00a5\x02\u026a' +
		'\u026b\x05^\x60\x02\u026b\u026d\x03\x02\x02\x02\u026c\u0267\x03\x02\x02\x02\u026c\u026d\x03\x02' +
		'\x02\x02\u026d\u0271\x03\x02\x02\x02\u026e\u026f\x05\u0148\u00a5\x02\u026f\u0270\x05h\x65' +
		'\x02\u0270\u0272\x03\x02\x02\x02\u0271\u026e\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274' +
		'\x03\x02\x02\x02\u0273\u0263\x03\x02\x02\x02\u0273\u026c\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274' +
		'\x65\x03\x02\x02\x02\u0275\u0276\x58\x35\x02\u0276\u0277\x05\u0148\u00a5\x02\u0277\u0278' +
		'\x05h\x65\x02\u0278\x67\x03\x02\x02\x02\u0279\u027c\x05\u0140\u00a1\x02\u027a\u027c\x05\u013c' +
		'\u009f\x02\u027b\u0279\x03\x02\x02\x02\u027b\u027a\x03\x02\x02\x02\u027c9\x03\x02\x02\x02\u027d' +
		'\u0280\x05L\'\x02\u027e\u0280\x07<\x02\x02\u027f\u027d\x03\x02\x02\x02\u027f\u027e\x03\x02\x02' +
		'\x02\u0280;\x03\x02\x02\x02\u0281\u0282\x05\u00a6T\x02\u0282=\x03\x02\x02\x02\u0283\u028a\x05' +
		'@!\x02\u0284\u0285\x07_\x02\x02\u0285\u0286\x05\u0148\u00a5\x02\u0286\u0287\x05@!\x02' +
		'\u0287\u0289\x03\x02\x02\x02\u0288\u0284\x03\x02\x02\x02\u0289\u028c\x03\x02\x02\x02\u028a\u0288' +
		'\x03\x02\x02\x02\u028a\u028b\x03\x02\x02\x02\u028b?\x03\x02\x02\x02\u028c\u028a\x03\x02\x02\x02\u028d' +
		'\u0293\x05B"\x02\u028e\u028f\x05\u0148\u00a5\x02\u028f\u0290\x07a\x02\x02\u0290\u0291' +
		'\x05\u0148\u00a5\x02\u0291\u0292\x05D#\x02\u0292\u0294\x03\x02\x02\x02\u0293\u028e\x03\x02' +
		'\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294A\x03\x02\x02\x02\u0295\u0296\x05\u0140\u00a1\x02\u0296' +
		'C\x03\x02\x02\x02\u0297\u0298\x05\u00e6t\x02\u0298E\x03\x02\x02\x02\u0299\u02a1\x05D#\x02\u029a' +
		'\u029b\x05\u0148\u00a5\x02\u029b\u029c\x07_\x02\x02\u029c\u029d\x05\u0148\u00a5\x02' +
		'\u029d\u029e\x05D#\x02\u029e\u02a0\x03\x02\x02\x02\u029f\u029a\x03\x02\x02\x02\u02a0\u02a3' +
		'\x03\x02\x02\x02\u02a1\u029f\x03\x02\x02\x02\u02a1\u02a2\x03\x02\x02\x02\u02a2\u02a4\x03\x02\x02\x02\u02a3' +
		'\u02a1\x03\x02\x02\x02\u02a4\u02a6\x05\u0148\u00a5\x02\u02a5\u02a7\x07_\x02\x02\u02a6\u02a5' +
		'\x03\x02\x02\x02\u02a6\u02a7\x03\x02\x02\x02\u02a7G\x03\x02\x02\x02\u02a8\u02a9\x05\u008eH\x02\u02a9' +
		'\u02aa\x07\\\x02\x02\u02aa\u02ab\x07]\x02\x02\u02ab\u02ad\x03\x02\x02\x02\u02ac\u02a8\x03\x02' +
		'\x02\x02\u02ad\u02ae\x03\x02\x02\x02\u02ae\u02ac\x03\x02\x02\x02\u02ae\u02af\x03\x02\x02\x02\u02af' +
		'I\x03\x02\x02\x02\u02b0\u02b2\x05H%\x02\u02b1\u02b0\x03\x02\x02\x02\u02b1\u02b2\x03\x02\x02\x02\u02b2' +
		'K\x03\x02\x02\x02\u02b3\u02b6\x05\u008eH\x02\u02b4\u02b7\x05V,\x02\u02b5\u02b7\x05T+\x02\u02b6' +
		'\u02b4\x03\x02\x02\x02\u02b6\u02b5\x03\x02\x02\x02\u02b7\u02b8\x03\x02\x02\x02\u02b8\u02b9\x05J' +
		'&\x02\u02b9M\x03\x02\x02\x02\u02ba\u02c0\x05\u008eH\x02\u02bb\u02be\x05V,\x02\u02bc\u02be' +
		'\x07<\x02\x02\u02bd\u02bb\x03\x02\x02\x02\u02bd\u02bc\x03\x02\x02\x02\u02be\u02c1\x03\x02\x02\x02\u02bf' +
		'\u02c1\x05R*\x02\u02c0\u02bd\x03\x02\x02\x02\u02c0\u02bf\x03\x02\x02\x02\u02c1\u02c2\x03\x02\x02' +
		'\x02\u02c2\u02c3\x05J&\x02\u02c3O\x03\x02\x02\x02\u02c4\u02c7\x05p9\x02\u02c5\u02c7\x05r:' +
		'\x02\u02c6\u02c4\x03\x02\x02\x02\u02c6\u02c5\x03\x02\x02\x02\u02c7\u02c9\x03\x02\x02\x02\u02c8\u02ca' +
		'\x05X-\x02\u02c9\u02c8\x03\x02\x02\x02\u02c9\u02ca\x03\x02\x02\x02\u02caQ\x03\x02\x02\x02\u02cb\u02cd' +
		'\x05p9\x02\u02cc\u02ce\x05X-\x02\u02cd\u02cc\x03\x02\x02\x02\u02cd\u02ce\x03\x02\x02\x02\u02ce' +
		'S\x03\x02\x02\x02\u02cf\u02d1\x05r:\x02\u02d0\u02d2\x05X-\x02\u02d1\u02d0\x03\x02\x02\x02\u02d1' +
		'\u02d2\x03\x02\x02\x02\u02d2U\x03\x02\x02\x02\u02d3\u02d4\x07\x17\x02\x02\u02d4W\x03\x02\x02\x02\u02d5' +
		'\u02d6\x07c\x02\x02\u02d6\u02d7\x05\u0148\u00a5\x02\u02d7\u02de\x05Z.\x02\u02d8\u02d9' +
		'\x07_\x02\x02\u02d9\u02da\x05\u0148\u00a5\x02\u02da\u02db\x05Z.\x02\u02db\u02dd\x03\x02' +
		'\x02\x02\u02dc\u02d8\x03\x02\x02\x02\u02dd\u02e0\x03\x02\x02\x02\u02de\u02dc\x03\x02\x02\x02\u02de' +
		'\u02df\x03\x02\x02\x02\u02df\u02e1\x03\x02\x02\x02\u02e0\u02de\x03\x02\x02\x02\u02e1\u02e2\x05\u0148' +
		'\u00a5\x02\u02e2\u02e3\x07b\x02\x02\u02e3Y\x03\x02\x02\x02\u02e4\u02ee\x05N(\x02\u02e5\u02e6' +
		'\x05\u008eH\x02\u02e6\u02eb\x07f\x02\x02\u02e7\u02e8\t\x05\x02\x02\u02e8\u02e9\x05\u0148' +
		'\u00a5\x02\u02e9\u02ea\x05N(\x02\u02ea\u02ec\x03\x02\x02\x02\u02eb\u02e7\x03\x02\x02\x02\u02eb' +
		'\u02ec\x03\x02\x02\x02\u02ec\u02ee\x03\x02\x02\x02\u02ed\u02e4\x03\x02\x02\x02\u02ed\u02e5\x03\x02' +
		'\x02\x02\u02ee[\x03\x02\x02\x02\u02ef\u02f0\x05\u008eH\x02\u02f0\u02f1\x05p9\x02\u02f1]\x03' +
		'\x02\x02\x02\u02f2\u02f9\x05\\/\x02\u02f3\u02f4\x07_\x02\x02\u02f4\u02f5\x05\u0148\u00a5' +
		'\x02\u02f5\u02f6\x05\\/\x02\u02f6\u02f8\x03\x02\x02\x02\u02f7\u02f3\x03\x02\x02\x02\u02f8\u02fb' +
		'\x03\x02\x02\x02\u02f9\u02f7\x03\x02\x02\x02\u02f9\u02fa\x03\x02\x02\x02\u02fa_\x03\x02\x02\x02\u02fb' +
		'\u02f9\x03\x02\x02\x02\u02fc\u02fe\x07X\x02\x02\u02fd\u02ff\x05b\x62\x02\u02fe\u02fd\x03\x02' +
		'\x02\x02\u02fe\u02ff\x03\x02\x02\x02\u02ff\u0300\x03\x02\x02\x02\u0300\u0301\x05\u0146\u00a4' +
		'\x02\u0301a\x03\x02\x02\x02\u0302\u0305\x05f\x64\x02\u0303\u0305\x05d\x63\x02\u0304\u0302' +
		'\x03\x02\x02\x02\u0304\u0303\x03\x02\x02\x02\u0305\u030c\x03\x02\x02\x02\u0306\u0307\x07_\x02\x02\u0307' +
		'\u0308\x05\u0148\u00a5\x02\u0308\u0309\x05f\x64\x02\u0309\u030b\x03\x02\x02\x02\u030a\u0306' +
		'\x03\x02\x02\x02\u030b\u030e\x03\x02\x02\x02\u030c\u030a\x03\x02\x02\x02\u030c\u030d\x03\x02\x02\x02\u030d' +
		'c\x03\x02\x02\x02\u030e\u030c\x03\x02\x02\x02\u030f\u0310\x05N(\x02\u0310\u0311\x07\x67\x02\x02\u0311' +
		'e\x03\x02\x02\x02\u0312\u0314\x05\x34\x17\x02\u0313\u0315\x05N(\x02\u0314\u0313\x03\x02\x02\x02' +
		'\u0314\u0315\x03\x02\x02\x02\u0315\u0317\x03\x02\x02\x02\u0316\u0318\x07\u0087\x02\x02\u0317' +
		'\u0316\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031f\x05B' +
		'"\x02\u031a\u031b\x05\u0148\u00a5\x02\u031b\u031c\x07a\x02\x02\u031c\u031d\x05\u0148' +
		'\u00a5\x02\u031d\u031e\x05\u00f2z\x02\u031e\u0320\x03\x02\x02\x02\u031f\u031a\x03\x02\x02' +
		'\x02\u031f\u0320\x03\x02\x02\x02\u0320g\x03\x02\x02\x02\u0321\u0322\x05\u00a0Q\x02\u0322i\x03' +
		'\x02\x02\x02\u0323\u0328\x05l\x67\x02\u0324\u0325\x07`\x02\x02\u0325\u0327\x05l\x67\x02\u0326' +
		'\u0324\x03\x02\x02\x02\u0327\u032a\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02' +
		'\x02\x02\u0329k\x03\x02\x02\x02\u032a\u0328\x03\x02\x02\x02\u032b\u0331\x05\u0140\u00a1\x02\u032c' +
		'\u0331\x07\n\x02\x02\u032d\u0331\x07\x13\x02\x02\u032e\u0331\x07\t\x02\x02\u032f\u0331\x07' +
		'\f\x02\x02\u0330\u032b\x03\x02\x02\x02\u0330\u032c\x03\x02\x02\x02\u0330\u032d\x03\x02\x02\x02\u0330' +
		'\u032e\x03\x02\x02\x02\u0330\u032f\x03\x02\x02\x02\u0331m\x03\x02\x02\x02\u0332\u0333\x05l\x67\x02' +
		'\u0333\u0334\x07`\x02\x02\u0334\u0336\x03\x02\x02\x02\u0335\u0332\x03\x02\x02\x02\u0336\u0339' +
		'\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338o\x03\x02\x02\x02\u0339' +
		'\u0337\x03\x02\x02\x02\u033a\u033b\x05n8\x02\u033b\u033c\x05\u0140\u00a1\x02\u033cq\x03' +
		'\x02\x02\x02\u033d\u033e\x05n8\x02\u033e\u0343\x05\u013e\u00a0\x02\u033f\u0340\x07`\x02' +
		'\x02\u0340\u0342\x05\u013e\u00a0\x02\u0341\u033f\x03\x02\x02\x02\u0342\u0345\x03\x02\x02\x02' +
		'\u0343\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344s\x03\x02\x02\x02\u0345\u0343\x03' +
		'\x02\x02\x02\u0346\u034c\x07?\x02\x02\u0347\u034c\x07@\x02\x02\u0348\u034c\x05\u013c\u009f' +
		'\x02\u0349\u034c\x07A\x02\x02\u034a\u034c\x07B\x02\x02\u034b\u0346\x03\x02\x02\x02\u034b\u0347' +
		'\x03\x02\x02\x02\u034b\u0348\x03\x02\x02\x02\u034b\u0349\x03\x02\x02\x02\u034b\u034a\x03\x02\x02\x02\u034c' +
		'u\x03\x02\x02\x02\u034d\u034e\x07\x04\x02\x02\u034e\u0353\x05x=\x02\u034f\u0350\x07\x06\x02\x02\u0350' +
		'\u0352\x05x=\x02\u0351\u034f\x03\x02\x02\x02\u0352\u0355\x03\x02\x02\x02\u0353\u0351\x03\x02\x02' +
		'\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356\u0357' +
		'\x07\x05\x02\x02\u0357w\x03\x02\x02\x02\u0358\u035b\x05z>\x02\u0359\u035b\x05\u0086D\x02\u035a' +
		'\u0358\x03\x02\x02\x02\u035a\u0359\x03\x02\x02\x02\u035by\x03\x02\x02\x02\u035c\u0360\x05\u0140' +
		'\u00a1\x02\u035d\u035f\x07\x07\x02\x02\u035e\u035d\x03\x02\x02\x02\u035f\u0362\x03\x02\x02\x02\u0360' +
		'\u035e\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361{\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02' +
		'\u0363\u0364\x05\u0080A\x02\u0364\u0365\x05\u0148\u00a5\x02\u0365\u0366\x07U\x02\x02' +
		'\u0366\u0367\x05\u0148\u00a5\x02\u0367\u0368\x05\u0084C\x02\u0368}\x03\x02\x02\x02\u0369' +
		'\u036a\x05\u0082B\x02\u036a\u036b\x05\u0148\u00a5\x02\u036b\u036c\x07U\x02\x02\u036c' +
		'\u036d\x05\u0148\u00a5\x02\u036d\u036e\x05\u0084C\x02\u036e\x177\x03\x02\x02\x02\u036f' +
		'\u0370\x05`\x61\x02\u0370\u0081\x03\x02\x02\x02\u0371\u0374\x05`\x61\x02\u0372\u0374\x05B' +
		'"\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0372\x03\x02\x02\x02\u0374\u0083\x03\x02\x02\x02\u0375' +
		'\u0378\x05\u00a0Q\x02\u0376\u0378\x05\u00e8u\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0376' +
		'\x03\x02\x02\x02\u0378\u0085\x03\x02\x02\x02\u0379\u0382\x07Z\x02\x02\u037a\u037e\x05\u0148\u00a5' +
		'\x02\u037b\u037c\x05b\x62\x02\u037c\u037d\x05\u0148\u00a5\x02\u037d\u037f\x03\x02\x02\x02' +
		'\u037e\u037b\x03\x02\x02\x02\u037e\u037f\x03\x02\x02\x02\u037f\u0380\x03\x02\x02\x02\u0380\u0381' +
		'\x07U\x02\x02\u0381\u0383\x03\x02\x02\x02\u0382\u037a\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383' +
		'\u0385\x03\x02\x02\x02\u0384\u0386\x05\u014a\u00a6\x02\u0385\u0384\x03\x02\x02\x02\u0385\u0386' +
		'\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x05\u008aF\x02\u0388\u0389\x07[\x02\x02' +
		'\u0389\u0087\x03\x02\x02\x02\u038a\u038d\x05\u0086D\x02\u038b\u038d\x05|?\x02\u038c\u038a' +
		'\x03\x02\x02\x02\u038c\u038b\x03\x02\x02\x02\u038d\u0089\x03\x02\x02\x02\u038e\u0390\x05\u008cG' +
		'\x02\u038f\u038e\x03\x02\x02\x02\u038f\u0390\x03\x02\x02\x02\u0390\u008b\x03\x02\x02\x02\u0391\u0397' +
		'\x05\u00a2R\x02\u0392\u0393\x05\u014a\u00a6\x02\u0393\u0394\x05\u00a2R\x02\u0394\u0396' +
		'\x03\x02\x02\x02\u0395\u0392\x03\x02\x02\x02\u0396\u0399\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397' +
		'\u0398\x03\x02\x02\x02\u0398\u039b\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u039a\u039c\x05\u014a' +
		'\u00a6\x02\u039b\u039a\x03\x02\x02\x02\u039b\u039c\x03\x02\x02\x02\u039c\u008d\x03\x02\x02\x02\u039d' +
		'\u03a3\x05\u0090I\x02\u039e\u039f\x05\u0148\u00a5\x02\u039f\u03a0\x05\u0090I\x02\u03a0' +
		'\u03a2\x03\x02\x02\x02\u03a1\u039e\x03\x02\x02\x02\u03a2\u03a5\x03\x02\x02\x02\u03a3\u03a1\x03\x02' +
		'\x02\x02\u03a3\u03a4\x03\x02\x02\x02\u03a4\u03a6\x03\x02\x02\x02\u03a5\u03a3\x03\x02\x02\x02\u03a6' +
		'\u03a7\x05\u0148\u00a5\x02\u03a7\u03a9\x03\x02\x02\x02\u03a8\u039d\x03\x02\x02\x02\u03a8\u03a9' +
		'\x03\x02\x02\x02\u03a9\u008f\x03\x02\x02\x02\u03aa\u03ab\x07\u0086\x02\x02\u03ab\u03b3\x05\u0094' +
		'K\x02\u03ac\u03ad\x05\u0148\u00a5\x02\u03ad\u03af\x07X\x02\x02\u03ae\u03b0\x05\u0092' +
		'J\x02\u03af\u03ae\x03\x02\x02\x02\u03af\u03b0\x03\x02\x02\x02\u03b0\u03b1\x03\x02\x02\x02\u03b1' +
		'\u03b2\x05\u0146\u00a4\x02\u03b2\u03b4\x03\x02\x02\x02\u03b3\u03ac\x03\x02\x02\x02\u03b3\u03b4' +
		'\x03\x02\x02\x02\u03b4\u0091\x03\x02\x02\x02\u03b5\u03b8\x05\u0096L\x02\u03b6\u03b8\x05\u009c' +
		'O\x02\u03b7\u03b5\x03\x02\x02\x02\u03b7\u03b6\x03\x02\x02\x02\u03b8\u0093\x03\x02\x02\x02\u03b9' +
		'\u03ba\x05p9\x02\u03ba\u0095\x03\x02\x02\x02\u03bb\u03c0\x05\u0098M\x02\u03bc\u03bd\x07' +
		'_\x02\x02\u03bd\u03bf\x05\u0098M\x02\u03be\u03bc\x03\x02\x02\x02\u03bf\u03c2\x03\x02\x02\x02\u03c0' +
		'\u03be\x03\x02\x02\x02\u03c0\u03c1\x03\x02\x02\x02\u03c1\u0097\x03\x02\x02\x02\u03c2\u03c0\x03\x02' +
		'\x02\x02\u03c3\u03c4\x05\u009aN\x02\u03c4\u03c5\x05\u0148\u00a5\x02\u03c5\u03c6\x07' +
		'a\x02\x02\u03c6\u03c7\x05\u0148\u00a5\x02\u03c7\u03c8\x05\u009cO\x02\u03c8\u0099\x03' +
		'\x02\x02\x02\u03c9\u03cc\x05\u0140\u00a1\x02\u03ca\u03cc\x05\u0144\u00a3\x02\u03cb\u03c9' +
		'\x03\x02\x02\x02\u03cb\u03ca\x03\x02\x02\x02\u03cc\u009b\x03\x02\x02\x02\u03cd\u03d1\x05\u009eP' +
		'\x02\u03ce\u03d1\x05\u0090I\x02\u03cf\u03d1\x05\u00f2z\x02\u03d0\u03cd\x03\x02\x02\x02\u03d0' +
		'\u03ce\x03\x02\x02\x02\u03d0\u03cf\x03\x02\x02\x02\u03d1\u009d\x03\x02\x02\x02\u03d2\u03de\x07\\' +
		'\x02\x02\u03d3\u03d8\x05\u009cO\x02\u03d4\u03d5\x07_\x02\x02\u03d5\u03d7\x05\u009cO\x02' +
		'\u03d6\u03d4\x03\x02\x02\x02\u03d7\u03da\x03\x02\x02\x02\u03d8\u03d6\x03\x02\x02\x02\u03d8\u03d9' +
		'\x03\x02\x02\x02\u03d9\u03dc\x03\x02\x02\x02\u03da\u03d8\x03\x02\x02\x02\u03db\u03dd\x07_\x02\x02\u03dc' +
		'\u03db\x03\x02\x02\x02\u03dc\u03dd\x03\x02\x02\x02\u03dd\u03df\x03\x02\x02\x02\u03de\u03d3\x03\x02' +
		'\x02\x02\u03de\u03df\x03\x02\x02\x02\u03df\u03e0\x03\x02\x02\x02\u03e0\u03e1\x07]\x02\x02\u03e1' +
		'\u009f\x03\x02\x02\x02\u03e2\u03e4\x07Z\x02\x02\u03e3\u03e5\x05\u014a\u00a6\x02\u03e4\u03e3' +
		'\x03\x02\x02\x02\u03e4\u03e5\x03\x02\x02\x02\u03e5\u03e6\x03\x02\x02\x02\u03e6\u03e7\x05\u008aF' +
		'\x02\u03e7\u03e8\x07[\x02\x02\u03e8\u00a1\x03\x02\x02\x02\u03e9\u03ec\x05\u00a4S\x02\u03ea' +
		'\u03ec\x05\u00c0a\x02\u03eb\u03e9\x03\x02\x02\x02\u03eb\u03ea\x03\x02\x02\x02\u03ec\u00a3' +
		'\x03\x02\x02\x02\u03ed\u03ee\x06S\x04\x02\u03ee\u03ef\x05\u00a6T\x02\u03ef\u00a5\x03\x02\x02\x02' +
		'\u03f0\u03f1\x05\x22\n\x02\u03f1\u03fc\x05\u0148\u00a5\x02\u03f2\u03f4\x05N(\x02\u03f3' +
		'\u03f2\x03\x02\x02\x02\u03f3\u03f4\x03\x02\x02\x02\u03f4\u03f5\x03\x02\x02\x02\u03f5\u03fd\x05>' +
		' \x02\u03f6\u03f7\x05\u00a8U\x02\u03f7\u03f8\x05\u0148\u00a5\x02\u03f8\u03f9\x07a' +
		'\x02\x02\u03f9\u03fa\x05\u0148\u00a5\x02\u03fa\u03fb\x05D#\x02\u03fb\u03fd\x03\x02\x02\x02' +
		'\u03fc\u03f3\x03\x02\x02\x02\u03fc\u03f6\x03\x02\x02\x02\u03fd\u0402\x03\x02\x02\x02\u03fe\u03ff' +
		'\x05N(\x02\u03ff\u0400\x05> \x02\u0400\u0402\x03\x02\x02\x02\u0401\u03f0\x03\x02\x02\x02\u0401' +
		'\u03fe\x03\x02\x02\x02\u0402\u00a7\x03\x02\x02\x02\u0403\u0404\x07X\x02\x02\u0404\u0409\x05\u00aa' +
		'V\x02\u0405\u0406\x07_\x02\x02\u0406\u0408\x05\u00aaV\x02\u0407\u0405\x03\x02\x02\x02\u0408' +
		'\u040b\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040a\x03\x02\x02\x02\u040a\u040c\x03\x02' +
		'\x02\x02\u040b\u0409\x03\x02\x02\x02\u040c\u040d\x05\u0146\u00a4\x02\u040d\u00a9\x03\x02\x02' +
		'\x02\u040e\u0410\x05N(\x02\u040f\u040e\x03\x02\x02\x02\u040f\u0410\x03\x02\x02\x02\u0410\u0411' +
		'\x03\x02\x02\x02\u0411\u0412\x05B"\x02\u0412\u00ab\x03\x02\x02\x02\u0413\u0414\x07X\x02\x02\u0414' +
		'\u0417\x05B"\x02\u0415\u0416\x07_\x02\x02\u0416\u0418\x05B"\x02\u0417\u0415\x03\x02\x02' +
		'\x02\u0418\u0419\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419\u041a\x03\x02\x02\x02\u041a\u041b' +
		'\x03\x02\x02\x02\u041b\u041c\x05\u0146\u00a4\x02\u041c\u00ad\x03\x02\x02\x02\u041d\u0420\x05' +
		'\u00b0Y\x02\u041e\u0420\x05\u00b2Z\x02\u041f\u041d\x03\x02\x02\x02\u041f\u041e\x03\x02\x02' +
		'\x02\u0420\u00af\x03\x02\x02\x02\u0421\u0422\x07!\x02\x02\u0422\u0423\x05\u00e0q\x02\u0423' +
		'\u0424\x05\u0148\u00a5\x02\u0424\u042d\x05\u00c0a\x02\u0425\u0428\x05\u0148\u00a5' +
		'\x02\u0426\u0428\x05\u014a\u00a6\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0426\x03\x02\x02\x02' +
		'\u0428\u0429\x03\x02\x02\x02\u0429\u042a\x07\x33\x02\x02\u042a\u042b\x05\u0148\u00a5\x02' +
		'\u042b\u042c\x05\u00c0a\x02\u042c\u042e\x03\x02\x02\x02\u042d\u0427\x03\x02\x02\x02\u042d' +
		'\u042e\x03\x02\x02\x02\u042e\u00b1\x03\x02\x02\x02\u042f\u0430\x07\x65\x02\x02\u0430\u0431\x05' +
		'\u00e0q\x02\u0431\u0432\x05\u0148\u00a5\x02\u0432\u0433\x07Z\x02\x02\u0433\u043b\x05' +
		'\u0148\u00a5\x02\u0434\u0436\x05\u00ceh\x02\u0435\u0434\x03\x02\x02\x02\u0436\u0437' +
		'\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439' +
		'\u043a\x05\u0148\u00a5\x02\u043a\u043c\x03\x02\x02\x02\u043b\u0435\x03\x02\x02\x02\u043b\u043c' +
		'\x03\x02\x02\x02\u043c\u043d\x03\x02\x02\x02\u043d\u043e\x07[\x02\x02\u043e\u00b3\x03\x02\x02\x02\u043f' +
		'\u0440\x07 \x02\x02\u0440\u0441\x07X\x02\x02\u0441\u0442\x05\u00d2j\x02\u0442\u0443\x05' +
		'\u0146\u00a4\x02\u0443\u0444\x05\u0148\u00a5\x02\u0444\u0445\x05\u00c0a\x02\u0445' +
		'\u0453\x03\x02\x02\x02\u0446\u0447\x07>\x02\x02\u0447\u0448\x05\u00e0q\x02\u0448\u0449\x05' +
		'\u0148\u00a5\x02\u0449\u044a\x05\u00c0a\x02\u044a\u0453\x03\x02\x02\x02\u044b\u044c' +
		'\x07\x32\x02\x02\u044c\u044d\x05\u0148\u00a5\x02\u044d\u044e\x05\u00c0a\x02\u044e\u044f' +
		'\x05\u0148\u00a5\x02\u044f\u0450\x07>\x02\x02\u0450\u0451\x05\u00e0q\x02\u0451\u0453' +
		'\x03\x02\x02\x02\u0452\u043f\x03\x02\x02\x02\u0452\u0446\x03\x02\x02\x02\u0452\u044b\x03\x02\x02\x02\u0453' +
		'\u00b5\x03\x02\x02\x02\u0454\u0456\x07\x30\x02\x02\u0455\u0457\x05\u0140\u00a1\x02\u0456' +
		'\u0455\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u00b7\x03\x02\x02\x02\u0458\u045a\x07\x22' +
		'\x02\x02\u0459\u045b\x05\u0140\u00a1\x02\u045a\u0459\x03\x02\x02\x02\u045a\u045b\x03\x02\x02' +
		'\x02\u045b\u00b9\x03\x02\x02\x02\u045c\u045d\x07\x23\x02\x02\u045d\u045e\x05\u00f2z\x02\u045e' +
		'\u00bb\x03\x02\x02\x02\u045f\u0461\x07;\x02\x02\u0460\u0462\x05\u00c8e\x02\u0461\u0460\x03' +
		'\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0464\x05\u0148\u00a5' +
		'\x02\u0464\u046a\x05\u00a0Q\x02\u0465\u0466\x05\u0148\u00a5\x02\u0466\u0467\x05\u00c2' +
		'b\x02\u0467\u0469\x03\x02\x02\x02\u0468\u0465\x03\x02\x02\x02\u0469\u046c\x03\x02\x02\x02\u046a' +
		'\u0468\x03\x02\x02\x02\u046a\u046b\x03\x02\x02\x02\u046b\u0470\x03\x02\x02\x02\u046c\u046a\x03\x02' +
		'\x02\x02\u046d\u046e\x05\u0148\u00a5\x02\u046e\u046f\x05\u00c6d\x02\u046f\u0471\x03' +
		'\x02\x02\x02\u0470\u046d\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471\u00bd\x03\x02\x02\x02\u0472' +
		'\u0473\x07\x21\x02\x02\u0473\u0479\x05\u00f2z\x02\u0474\u0475\x05\u0148\u00a5\x02\u0475' +
		'\u0476\t\x06\x02\x02\u0476\u0477\x05\u0148\u00a5\x02\u0477\u0478\x05\u00f2z\x02\u0478' +
		'\u047a\x03\x02\x02\x02\u0479\u0474\x03\x02\x02\x02\u0479\u047a\x03\x02\x02\x02\u047a\u00bf\x03\x02' +
		'\x02\x02\u047b\u0498\x05\u00a0Q\x02\u047c\u0498\x05\u00aeX\x02\u047d\u0498\x05\u00b4' +
		'[\x02\u047e\u0498\x05\u00bc_\x02\u047f\u0480\x07\x66\x02\x02\u0480\u0481\x05\u00e0q\x02' +
		'\u0481\u0482\x05\u0148\u00a5\x02\u0482\u0483\x05\u00a0Q\x02\u0483\u0498\x03\x02\x02' +
		'\x02\u0484\u0486\x07\x60\x02\x02\u0485\u0487\x05\u00f2z\x02\u0486\u0485\x03\x02\x02\x02\u0486' +
		'\u0487\x03\x02\x02\x02\u0487\u0498\x03\x02\x02\x02\u0488\u0489\x78\x02\x02\u0489\u0498\x05\u00f2' +
		'z\x02\u048a\u0498\x05\u00b8]\x02\u048b\u0498\x05\u00b6\\\x02\u048c\u048d\x06a\x05\x02' +
		'\u048d\u0498\x05\u00ba^\x02\u048e\u048f\x05\u0140\u00a1\x02\u048f\u0490\x07g\x02\x02' +
		'\u0490\u0491\x05\u0148\u00a5\x02\u0491\u0492\x05\u00c0a\x02\u0492\u0498\x03\x02\x02' +
		'\x02\u0493\u0498\x05\u00be`\x02\u0494\u0498\x05\u00a4S\x02\u0495\u0498\x05\u00e8u' +
		'\x02\u0496\u0498\x07^\x02\x02\u0497\u047b\x03\x02\x02\x02\u0497\u047c\x03\x02\x02\x02\u0497\u047d' +
		'\x03\x02\x02\x02\u0497\u047e\x03\x02\x02\x02\u0497\u047f\x03\x02\x02\x02\u0497\u0484\x03\x02\x02\x02\u0497' +
		'\u0488\x03\x02\x02\x02\u0497\u048a\x03\x02\x02\x02\u0497\u048b\x03\x02\x02\x02\u0497\u048c\x03\x02' +
		'\x02\x02\u0497\u048e\x03\x02\x02\x02\u0497\u0493\x03\x02\x02\x02\u0497\u0494\x03\x02\x02\x02\u0497' +
		'\u0495\x03\x02\x02\x02\u0497\u0496\x03\x02\x02\x02\u0498\u00c1\x03\x02\x02\x02\u0499\u049a\x07\x25' +
		'\x02\x02\u049a\u049b\x07X\x02\x02\u049b\u049d\x05\x34\x17\x02\u049c\u049e\x05\u00c4c\x02\u049d' +
		'\u049c\x03\x02\x02\x02\u049d\u049e\x03\x02\x02\x02\u049e\u049f\x03\x02\x02\x02\u049f\u04a0\x05\u0140' +
		'\u00a1\x02\u04a0\u04a1\x05\u0146\u00a4\x02\u04a1\u04a2\x05\u0148\u00a5\x02\u04a2' +
		'\u04a3\x05\u00a0Q\x02\u04a3\u00c3\x03\x02\x02\x02\u04a4\u04a9\x05p9\x02\u04a5\u04a6\x07' +
		'u\x02\x02\u04a6\u04a8\x05p9\x02\u04a7\u04a5\x03\x02\x02\x02\u04a8\u04ab\x03\x02\x02\x02\u04a9' +
		'\u04a7\x03\x02\x02\x02\u04a9\u04aa\x03\x02\x02\x02\u04aa\u00c5\x03\x02\x02\x02\u04ab\u04a9\x03\x02' +
		'\x02\x02\u04ac\u04ad\x07\x37\x02\x02\u04ad\u04ae\x05\u0148\u00a5\x02\u04ae\u04af\x05\u00a0' +
		'Q\x02\u04af\u00c7\x03\x02\x02\x02\u04b0\u04b1\x07X\x02\x02\u04b1\u04b2\x05\u0148\u00a5\x02' +
		'\u04b2\u04b4\x05\u00caf\x02\u04b3\u04b5\x05\u014a\u00a6\x02\u04b4\u04b3\x03\x02\x02' +
		'\x02\u04b4\u04b5\x03\x02\x02\x02\u04b5\u04b6\x03\x02\x02\x02\u04b6\u04b7\x05\u0146\u00a4\x02' +
		'\u04b7\u00c9\x03\x02\x02\x02\u04b8\u04be\x05\u00ccg\x02\u04b9\u04ba\x05\u014a\u00a6' +
		'\x02\u04ba\u04bb\x05\u00ccg\x02\u04bb\u04bd\x03\x02\x02\x02\u04bc\u04b9\x03\x02\x02\x02\u04bd' +
		'\u04c0\x03\x02\x02\x02\u04be\u04bc\x03\x02\x02\x02\u04be\u04bf\x03\x02\x02\x02\u04bf\u00cb\x03\x02' +
		'\x02\x02\u04c0\u04be\x03\x02\x02\x02\u04c1\u04c4\x05\u00a4S\x02\u04c2\u04c4\x05\u00f2z\x02' +
		'\u04c3\u04c1\x03\x02\x02\x02\u04c3\u04c2\x03\x02\x02\x02\u04c4\u00cd\x03\x02\x02\x02\u04c5\u04cb' +
		'\x05\u00d0i\x02\u04c6\u04c7\x05\u0148\u00a5\x02\u04c7\u04c8\x05\u00d0i\x02\u04c8\u04ca' +
		'\x03\x02\x02\x02\u04c9\u04c6\x03\x02\x02\x02\u04ca\u04cd\x03\x02\x02\x02\u04cb\u04c9\x03\x02\x02\x02\u04cb' +
		'\u04cc\x03\x02\x02\x02\u04cc\u04ce\x03\x02\x02\x02\u04cd\u04cb\x03\x02\x02\x02\u04ce\u04cf\x05\u0148' +
		'\u00a5\x02\u04cf\u04d0\x05\u008cG\x02\u04d0\u00cf\x03\x02\x02\x02\u04d1\u04d2\x07\x24\x02' +
		'\x02\u04d2\u04d3\x05\u00f2z\x02\u04d3\u04d4\x07g\x02\x02\u04d4\u04d8\x03\x02\x02\x02\u04d5' +
		'\u04d6\x07\x31\x02\x02\u04d6\u04d8\x07g\x02\x02\u04d7\u04d1\x03\x02\x02\x02\u04d7\u04d5\x03\x02' +
		'\x02\x02\u04d8\u00d1\x03\x02\x02\x02\u04d9\u04dc\x05\u00d4k\x02\u04da\u04dc\x05\u00d6l\x02' +
		'\u04db\u04d9\x03\x02\x02\x02\u04db\u04da\x03\x02\x02\x02\u04dc\u00d3\x03\x02\x02\x02\u04dd\u04df' +
		'\x05\x34\x17\x02\u04de\u04e0\x05N(\x02\u04df\u04de\x03\x02\x02\x02\u04df\u04e0\x03\x02\x02\x02\u04e0' +
		'\u04e1\x03\x02\x02\x02\u04e1\u04e2\x05B"\x02\u04e2\u04e3\t\x07\x02\x02\u04e3\u04e4\x05\u00f2' +
		'z\x02\u04e4\u00d5\x03\x02\x02\x02\u04e5\u04e7\x05\u00d8m\x02\u04e6\u04e5\x03\x02\x02\x02\u04e6' +
		'\u04e7\x03\x02\x02\x02\u04e7\u04e8\x03\x02\x02\x02\u04e8\u04ea\x07^\x02\x02\u04e9\u04eb\x05\u00f2' +
		'z\x02\u04ea\u04e9\x03\x02\x02\x02\u04ea\u04eb\x03\x02\x02\x02\u04eb\u04ec\x03\x02\x02\x02\u04ec' +
		'\u04ee\x07^\x02\x02\u04ed\u04ef\x05\u00dan\x02\u04ee\u04ed\x03\x02\x02\x02\u04ee\u04ef\x03' +
		'\x02\x02\x02\u04ef\u00d7\x03\x02\x02\x02\u04f0\u04f3\x05\u00a4S\x02\u04f1\u04f3\x05\u00e2' +
		'r\x02\u04f2\u04f0\x03\x02\x02\x02\u04f2\u04f1\x03\x02\x02\x02\u04f3\u00d9\x03\x02\x02\x02\u04f4' +
		'\u04f5\x05\u00e2r\x02\u04f5\u00db\x03\x02\x02\x02\u04f6\u04f7\x07X\x02\x02\u04f7\u04f8\x05' +
		'N(\x02\u04f8\u04f9\x05\u0146\u00a4\x02\u04f9\u00dd\x03\x02\x02\x02\u04fa\u04fb\x05\u00e0' +
		'q\x02\u04fb\u00df\x03\x02\x02\x02\u04fc\u04fd\x07X\x02\x02\u04fd\u04fe\x05\u00e6t\x02\u04fe' +
		'\u04ff\x05\u0146\u00a4\x02\u04ff\u00e1\x03\x02\x02\x02\u0500\u0507\x05\u00e4s\x02\u0501' +
		'\u0502\x07_\x02\x02\u0502\u0503\x05\u0148\u00a5\x02\u0503\u0504\x05\u00e4s\x02\u0504' +
		'\u0506\x03\x02\x02\x02\u0505\u0501\x03\x02\x02\x02\u0506\u0509\x03\x02\x02\x02\u0507\u0505\x03\x02' +
		'\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508\u00e3\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u050a' +
		'\u050c\x07r\x02\x02\u050b\u050a\x03\x02\x02\x02\u050b\u050c\x03\x02\x02\x02\u050c\u050d\x03\x02' +
		'\x02\x02\u050d\u050e\x05\u00f2z\x02\u050e\u00e5\x03\x02\x02\x02\u050f\u0512\x05\u00e8u\x02' +
		'\u0510\u0512\x05~@\x02\u0511\u050f\x03\x02\x02\x02\u0511\u0510\x03\x02\x02\x02\u0512\u00e7' +
		'\x03\x02\x02\x02\u0513\u0514\x05\u00f6|\x02\u0514\u00e9\x03\x02\x02\x02\u0515\u0517\x05\u00fa' +
		'~\x02\u0516\u0518\t\b\x02\x02\u0517\u0516\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518' +
		'\u00eb\x03\x02\x02\x02\u0519\u051a\x07\x65\x02\x02\u051a\u051b\x05\u00e0q\x02\u051b\u051c' +
		'\x05\u0148\u00a5\x02\u051c\u051d\x07Z\x02\x02\u051d\u0521\x05\u0148\u00a5\x02\u051e' +
		'\u0520\x05\u00eex\x02\u051f\u051e\x03\x02\x02\x02\u0520\u0523\x03\x02\x02\x02\u0521\u051f' +
		'\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0524\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0524' +
		'\u0525\x05\u0148\u00a5\x02\u0525\u0526\x07[\x02\x02\u0526\u00ed\x03\x02\x02\x02\u0527\u0528' +
		'\x05\u00f0y\x02\u0528\u0529\x05\u0148\u00a5\x02\u0529\u052b\x03\x02\x02\x02\u052a\u0527' +
		'\x03\x02\x02\x02\u052b\u052c\x03\x02\x02\x02\u052c\u052a\x03\x02\x02\x02\u052c\u052d\x03\x02\x02\x02\u052d' +
		'\u052e\x03\x02\x02\x02\u052e\u052f\x05\u008cG\x02\u052f\u00ef\x03\x02\x02\x02\u0530\u0531' +
		'\x07\x24\x02\x02\u0531\u0534\x05\u00e2r\x02\u0532\u0534\x07\x31\x02\x02\u0533\u0530\x03\x02' +
		'\x02\x02\u0533\u0532\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535\u0536\t\t\x02\x02\u0536' +
		'\u00f1\x03\x02\x02\x02\u0537\u0538\bz\x01\x02\u0538\u0539\x05\u00dco\x02\u0539\u053a\x05' +
		'\u00f4{\x02\u053a\u054a\x03\x02\x02\x02\u053b\u054a\x05\u00eav\x02\u053c\u054a\x05\u00ec' +
		'w\x02\u053d\u053e\t\n\x02\x02\u053e\u053f\x05\u0148\u00a5\x02\u053f\u0540\x05\u00f2' +
		'z\x24\u0540\u054a\x03\x02\x02\x02\u0541\u0542\t\x13\x02\x02\u0542\u054a\x05\u00f2z\x22' +
		'\u0543\u0544\x05\u00acW\x02\u0544\u0545\x05\u0148\u00a5\x02\u0545\u0546\x07a\x02\x02' +
		'\u0546\u0547\x05\u0148\u00a5\x02\u0547\u0548\x05\u00e8u\x02\u0548\u054a\x03\x02\x02' +
		'\x02\u0549\u0537\x03\x02\x02\x02\u0549\u053b\x03\x02\x02\x02\u0549\u053c\x03\x02\x02\x02\u0549\u053d' +
		'\x03\x02\x02\x02\u0549\u0541\x03\x02\x02\x02\u0549\u0543\x03\x02\x02\x02\u054a\u05b9\x03\x02\x02\x02\u054b' +
		'\u054c\f\x23\x02\x02\u054c\u054d\x07P\x02\x02\u054d\u054e\x05\u0148\u00a5\x02\u054e\u054f' +
		'\x05\u00f2z\x24\u054f\u05b8\x03\x02\x02\x02\u0550\u0551\f\x21\x02\x02\u0551\u0552\x05\u0148' +
		'\u00a5\x02\u0552\u0553\t\f\x02\x02\u0553\u0554\x05\u0148\u00a5\x02\u0554\u0555\x05' +
		'\u00f2z\x22\u0555\u05b8\x03\x02\x02\x02\u0556\u0557\f\x20\x02\x02\u0557\u0558\t\r\x02' +
		'\x02\u0558\u0559\x05\u0148\u00a5\x02\u0559\u055a\x05\u00f2z\x21\u055a\u05b8\x03\x02' +
		'\x02\x02\u055b\u055c\f\x17\x02\x02\u055c\u0567\x05\u0148\u00a5\x02\u055d\u055e\x07c\x02' +
		'\x02\u055e\u0565\x07c\x02\x02\u055f\u0560\x07b\x02\x02\u0560\u0561\x07b\x02\x02\u0561\u0565' +
		'\x07b\x02\x02\u0562\u0563\x07b\x02\x02\u0563\u0565\x07b\x02\x02\u0564\u055d\x03\x02\x02\x02\u0564' +
		'\u055f\x03\x02\x02\x02\u0564\u0562\x03\x02\x02\x02\u0565\u0568\x03\x02\x02\x02\u0566\u0568\t\x16' +
		'\x02\x02\u0567\u0564\x03\x02\x02\x02\u0567\u0566\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569' +
		'\u056a\x05\u0148\u00a5\x02\u056a\u056b\x05\u00f2z\x20\u056b\u05b8\x03\x02\x02\x02\u056c' +
		'\u056d\f\r\x02\x02\u056d\u056e\x05\u0148\u00a5\x02\u056e\u056f\t\x17\x02\x02\u056f' +
		'\u0570\x05\u0148\u00a5\x02\u0570\u0571\x05\u00f2z\x16\u0571\u05b8\x03\x02\x02\x02\u0572' +
		'\u0573\f\f\x02\x02\u0573\u0574\x05\u0148\u00a5\x02\u0574\u0575\t\x20\x02\x02\u0575' +
		'\u0576\x05\u0148\u00a5\x02\u0576\u0577\x05\u00f2z\r\u0577\u05b8\x03\x02\x02\x02\u0578' +
		'\u0579\f\x13\x02\x02\u0579\u057a\x05\u0148\u00a5\x02\u057a\u057b\t\x21\x02\x02\u057b' +
		'\u057c\x05\u0148\u00a5\x02\u057c\u057d\x05\u00f2z\f\u057d\u05b8\x03\x02\x02\x02\u057e' +
		'\u057f\f\n\x02\x02\u057f\u0580\x05\u0148\u00a5\x02\u0580\u0581\x07t\x02\x02\u0581\u0582' +
		'\x05\u0148\u00a5\x02\u0582\u0583\x05\u00f2z\x13\u0583\u05b8\x03\x02\x02\x02\u0584\u0585' +
		'\f\t\x02\x02\u0585\u0586\x05\u0148\u00a5\x02\u0586\u0587\x07v\x02\x02\u0587\u0588\x05' +
		'\u0148\u00a5\x02\u0588\u0589\x05\u00f2z\n\u0589\u05b8\x03\x02\x02\x02\u058a\u058b' +
		'\f\b\x02\x02\u058b\u058c\x05\u0148\u00a5\x02\u058c\u058d\x07u\x02\x02\u058d\u058e\x05' +
		'\u0148\u00a5\x02\u058e\u058f\x05\u00f2z\t\u058f\u05b8\x03\x02\x02\x02\u0590\u0591' +
		'\f\x07\x02\x02\u0591\u0592\x05\u0148\u00a5\x02\u0592\u0593\x07l\x02\x02\u0593\u0594\x05' +
		'\u0148\u00a5\x02\u0594\u0595\x05\u00f2z\b\u0595\u05b8\x03\x02\x02\x02\u0596\u0597' +
		'\f\x06\x02\x02\u0597\u0598\x05\u0148\u00a5\x02\u0598\u0599\x07m\x02\x02\u0599\u059a\x05' +
		'\u0148\u00a5\x02\u059a\u059b\x05\u00f2z\x07\u059b\u05b8\x03\x02\x02\x02\u059c\u059d' +
		'\f\x05\x02\x02\u059d\u05a7\x05\u0148\u00a5\x02\u059e\u059f\x07f\x02\x02\u059f\u05a0\x05' +
		'\u0148\u00a5\x02\u05a0\u05a1\x05\u00f2z\x02\u05a1\u05a2\x05\u0148\u00a5\x02\u05a2' +
		'\u05a3\x07g\x02\x02\u05a3\u05a4\x05\u0148\u00a5\x02\u05a4\u05a8\x03\x02\x02\x02\u05a5\u05a6' +
		'\x07K\x02\x02\u05a6\u05a8\x05\u0148\u00a5\x02\u05a7\u059e\x03\x02\x02\x02\u05a7\u05a5\x03' +
		'\x02\x02\x02\u05a8\u05a9\x03\x02\x02\x02\u05a9\u05aa\x05\u00f2z\x05\u05aa\u05b8\x03\x02\x02\x02' +
		'\u05ab\u05ac\f\x16\x02\x02\u05ac\u05ad\x05\u0148\u00a5\x02\u05ad\u05ae\t\x22\x02\x02' +
		'\u05ae\u05af\x05\u0148\u00a5\x02\u05af\u05b0\x05N(\x02\u05b0\u05b8\x03\x02\x02\x02\u05b1' +
		'\u05b2\f\x03\x02\x02\u05b2\u05b3\x05\u0148\u00a5\x02\u05b3\u05b4\t\x23\x02\x02\u05b4' +
		'\u05b5\x05\u0148\u00a5\x02\u05b5\u05b6\x05\u00e6t\x02\u05b6\u05b8\x03\x02\x02\x02\u05b7' +
		'\u054b\x03\x02\x02\x02\u05b7\u0550\x03\x02\x02\x02\u05b7\u0556\x03\x02\x02\x02\u05b7\u055b\x03\x02' +
		'\x02\x02\u05b7\u056c\x03\x02\x02\x02\u05b7\u0572\x03\x02\x02\x02\u05b7\u0578\x03\x02\x02\x02\u05b7' +
		'\u057e\x03\x02\x02\x02\u05b7\u0584\x03\x02\x02\x02\u05b7\u058a\x03\x02\x02\x02\u05b7\u0590\x03\x02' +
		'\x02\x02\u05b7\u0596\x03\x02\x02\x02\u05b7\u059c\x03\x02\x02\x02\u05b7\u05ab\x03\x02\x02\x02\u05b7' +
		'\u05b1\x03\x02\x02\x02\u05b8\u05bb\x03\x02\x02\x02\u05b9\u05b7\x03\x02\x02\x02\u05b9\u05ba\x03\x02' +
		'\x02\x02\u05ba\u00f3\x03\x02\x02\x02\u05bb\u05b9\x03\x02\x02\x02\u05bc\u05bd\x05\u00dco\x02\u05bd' +
		'\u05be\x05\u00f4{\x02\u05be\u05c7\x03\x02\x02\x02\u05bf\u05c7\x05\u00eav\x02\u05c0\u05c1' +
		'\t\n\x02\x02\u05c1\u05c2\x05\u0148\u00a5\x02\u05c2\u05c3\x05\u00f4{\x02\u05c3\u05c7' +
		'\x03\x02\x02\x02\u05c4\u05c5\t\x13\x02\x02\u05c5\u05c7\x05\u00f4{\x02\u05c6\u05bc\x03\x02\x02' +
		'\x02\u05c6\u05bf\x03\x02\x02\x02\u05c6\u05c0\x03\x02\x02\x02\u05c6\u05c4\x03\x02\x02\x02\u05c7\u00f5' +
		'\x03\x02\x02\x02\u05c8\u05cc\x05\u00f2z\x02\u05c9\u05ca\x06|\x25\x03\u05ca\u05cd\x05\u0132' +
		'\u009a\x02\u05cb\u05cd\x03\x02\x02\x02\u05cc\u05c9\x03\x02\x02\x02\u05cc\u05cb\x03\x02\x02\x02\u05cd' +
		'\u05d1\x03\x02\x02\x02\u05ce\u05d0\x05\u00f8}\x02\u05cf\u05ce\x03\x02\x02\x02\u05d0\u05d3' +
		'\x03\x02\x02\x02\u05d1\u05cf\x03\x02\x02\x02\u05d1\u05d2\x03\x02\x02\x02\u05d2\u00f7\x03\x02\x02\x02\u05d3' +
		'\u05d1\x03\x02\x02\x02\u05d4\u05db\x05\u010c\u0087\x02\u05d5\u05d7\x05\u00fc\x177\x02\u05d6' +
		'\u05d5\x03\x02\x02\x02\u05d7\u05d8\x03\x02\x02\x02\u05d8\u05d6\x03\x02\x02\x02\u05d8\u05d9\x03\x02' +
		'\x02\x02\u05d9\u05dc\x03\x02\x02\x02\u05da\u05dc\x05\u0132\u009a\x02\u05db\u05d6\x03\x02\x02' +
		'\x02\u05db\u05da\x03\x02\x02\x02\u05db\u05dc\x03\x02\x02\x02\u05dc\u00f9\x03\x02\x02\x02\u05dd\u05e1' +
		'\x05\u0106\u0084\x02\u05de\u05df\x06~\x26\x02\u05df\u05e1\x07\x62\x02\x02\u05e0\u05dd' +
		'\x03\x02\x02\x02\u05e0\u05de\x03\x02\x02\x02\u05e1\u05e7\x03\x02\x02\x02\u05e2\u05e3\x05\u00fc\x177' +
		'\x02\u05e3\u05e4\b~\x01\x02\u05e4\u05e6\x03\x02\x02\x02\u05e5\u05e2\x03\x02\x02\x02\u05e6\u05e9' +
		'\x03\x02\x02\x02\u05e7\u05e5\x03\x02\x02\x02\u05e7\u05e8\x03\x02\x02\x02\u05e8\u00fb\x03\x02\x02\x02\u05e9' +
		'\u05e7\x03\x02\x02\x02\u05ea\u0603\x05\u0148\u00a5\x02\u05eb\u05ec\x07`\x02\x02\u05ec\u05ed' +
		'\x05\u0148\u00a5\x02\u05ed\u05ee\x07(\x02\x02\u05ee\u05ef\x05\u0122\u0092\x02\u05ef' +
		'\u05f0\b\x177\x01\x02\u05f0\u0604\x03\x02\x02\x02\u05f1\u05f2\t\x24\x02\x02\u05f2\u05f5' +
		'\x05\u0148\u00a5\x02\u05f3\u05f6\x07\u0086\x02\x02\u05f4\u05f6\x05\u012c\u0097\x02\u05f5' +
		'\u05f3\x03\x02\x02\x02\u05f5\u05f4\x03\x02\x02\x02\u05f5\u05f6\x03\x02\x02\x02\u05f6\u05fc\x03\x02' +
		'\x02\x02\u05f7\u05f8\x07L\x02\x02\u05f8\u05fc\x05\u0148\u00a5\x02\u05f9\u05fa\x07M\x02\x02' +
		'\u05fa\u05fc\x05\u0148\u00a5\x02\u05fb\u05f1\x03\x02\x02\x02\u05fb\u05f7\x03\x02\x02\x02\u05fb' +
		'\u05f9\x03\x02\x02\x02\u05fc\u05fd\x03\x02\x02\x02\u05fd\u05fe\x05\u00fe\u0080\x02\u05fe\u05ff' +
		'\b\x177\x01\x02\u05ff\u0604\x03\x02\x02\x02\u0600\u0601\x05\u0088E\x02\u0601\u0602\b\x177' +
		'\x01\x02\u0602\u0604\x03\x02\x02\x02\u0603\u05eb\x03\x02\x02\x02\u0603\u05fb\x03\x02\x02\x02\u0603' +
		'\u0600\x03\x02\x02\x02\u0604\u060f\x03\x02\x02\x02\u0605\u0606\x05\u0130\u0099\x02\u0606\u0607' +
		'\b\x177\x01\x02\u0607\u060f\x03\x02\x02\x02\u0608\u0609\x05\u0102\u0082\x02\u0609\u060a' +
		'\b\x177\x01\x02\u060a\u060f\x03\x02\x02\x02\u060b\u060c\x05\u0104\u0083\x02\u060c\u060d' +
		'\b\x177\x01\x02\u060d\u060f\x03\x02\x02\x02\u060e\u05ea\x03\x02\x02\x02\u060e\u0605\x03\x02\x02\x02' +
		'\u060e\u0608\x03\x02\x02\x02\u060e\u060b\x03\x02\x02\x02\u060f\u00fd\x03\x02\x02\x02\u0610\u0615' +
		'\x05\u0140\u00a1\x02\u0611\u0615\x05\u013c\u009f\x02\u0612\u0615\x05\u0100\u0081' +
		'\x02\u0613\u0615\x05\u0144\u00a3\x02\u0614\u0610\x03\x02\x02\x02\u0614\u0611\x03\x02\x02\x02' +
		'\u0614\u0612\x03\x02\x02\x02\u0614\u0613\x03\x02\x02\x02\u0615\u00ff\x03\x02\x02\x02\u0616\u0619' +
		'\x05\u00dep\x02\u0617\u0619\x05v<\x02\u0618\u0616\x03\x02\x02\x02\u0618\u0617\x03\x02\x02\x02' +
		'\u0619\u0101\x03\x02\x02\x02\u061a\u061c\t\x25\x02\x02\u061b\u061d\x05\u00e2r\x02\u061c' +
		'\u061b\x03\x02\x02\x02\u061c\u061d\x03\x02\x02\x02\u061d\u061e\x03\x02\x02\x02\u061e\u061f\x07]' +
		'\x02\x02\u061f\u0103\x03\x02\x02\x02\u0620\u0623\t\x25\x02\x02\u0621\u0624\x05\u0114\u008b' +
		'\x02\u0622\u0624\x07g\x02\x02\u0623\u0621\x03\x02\x02\x02\u0623\u0622\x03\x02\x02\x02\u0624\u0625' +
		'\x03\x02\x02\x02\u0625\u0626\x07]\x02\x02\u0626\u0105\x03\x02\x02\x02\u0627\u0629\x05\u0140\u00a1' +
		'\x02\u0628\u062a\x05X-\x02\u0629\u0628\x03\x02\x02\x02\u0629\u062a\x03\x02\x02\x02\u062a\u0639' +
		'\x03\x02\x02\x02\u062b\u0639\x05t;\x02\u062c\u0639\x05v<\x02\u062d\u062e\x07(\x02\x02\u062e' +
		'\u062f\x05\u0148\u00a5\x02\u062f\u0630\x05\u0122\u0092\x02\u0630\u0639\x03\x02\x02\x02' +
		'\u0631\u0639\x07\x67\x02\x02\u0632\u0639\x07\x64\x02\x02\u0633\u0639\x05\u00dep\x02\u0634' +
		'\u0639\x05\u0088E\x02\u0635\u0639\x05\u010e\u0088\x02\u0636\u0639\x05\u0110\u0089' +
		'\x02\u0637\u0639\x05\u0142\u00a2\x02\u0638\u0627\x03\x02\x02\x02\u0638\u062b\x03\x02\x02\x02' +
		'\u0638\u062c\x03\x02\x02\x02\u0638\u062d\x03\x02\x02\x02\u0638\u0631\x03\x02\x02\x02\u0638\u0632' +
		'\x03\x02\x02\x02\u0638\u0633\x03\x02\x02\x02\u0638\u0634\x03\x02\x02\x02\u0638\u0635\x03\x02\x02\x02\u0638' +
		'\u0636\x03\x02\x02\x02\u0638\u0637\x03\x02\x02\x02\u0639\u0107\x03\x02\x02\x02\u063a\u0641\x05\u0140' +
		'\u00a1\x02\u063b\u0641\x05t;\x02\u063c\u0641\x05v<\x02\u063d\u0641\x05\u00dep\x02\u063e' +
		'\u0641\x05\u010e\u0088\x02\u063f\u0641\x05\u0110\u0089\x02\u0640\u063a\x03\x02\x02\x02' +
		'\u0640\u063b\x03\x02\x02\x02\u0640\u063c\x03\x02\x02\x02\u0640\u063d\x03\x02\x02\x02\u0640\u063e' +
		'\x03\x02\x02\x02\u0640\u063f\x03\x02\x02\x02\u0641\u0109\x03\x02\x02\x02\u0642\u0646\x05\u0140\u00a1' +
		'\x02\u0643\u0646\x05t;\x02\u0644\u0646\x05v<\x02\u0645\u0642\x03\x02\x02\x02\u0645\u0643' +
		'\x03\x02\x02\x02\u0645\u0644\x03\x02\x02\x02\u0646\u010b\x03\x02\x02\x02\u0647\u064b\x05\u0140\u00a1' +
		'\x02\u0648\u064b\x05t;\x02\u0649\u064b\x05v<\x02\u064a\u0647\x03\x02\x02\x02\u064a\u0648' +
		'\x03\x02\x02\x02\u064a\u0649\x03\x02\x02\x02\u064b\u010d\x03\x02\x02\x02\u064c\u064e\x07\\\x02\x02\u064d' +
		'\u064f\x05\u00e2r\x02\u064e\u064d\x03\x02\x02\x02\u064e\u064f\x03\x02\x02\x02\u064f\u0651' +
		'\x03\x02\x02\x02\u0650\u0652\x07_\x02\x02\u0651\u0650\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652' +
		'\u0653\x03\x02\x02\x02\u0653\u0654\x07]\x02\x02\u0654\u010f\x03\x02\x02\x02\u0655\u065b\x07\\' +
		'\x02\x02\u0656\u0658\x05\u0112\u008a\x02\u0657\u0659\x07_\x02\x02\u0658\u0657\x03\x02\x02' +
		'\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065c\x03\x02\x02\x02\u065a\u065c\x07g\x02\x02\u065b\u0656' +
		'\x03\x02\x02\x02\u065b\u065a\x03\x02\x02\x02\u065c\u065d\x03\x02\x02\x02\u065d\u065e\x07]\x02\x02\u065e' +
		'\u0111\x03\x02\x02\x02\u065f\u0664\x05\u0116\u008c\x02\u0660\u0661\x07_\x02\x02\u0661\u0663' +
		'\x05\u0116\u008c\x02\u0662\u0660\x03\x02\x02\x02\u0663\u0666\x03\x02\x02\x02\u0664\u0662\x03' +
		'\x02\x02\x02\u0664\u0665\x03\x02\x02\x02\u0665\u0113\x03\x02\x02\x02\u0666\u0664\x03\x02\x02\x02\u0667' +
		'\u066c\x05\u0118\u008d\x02\u0668\u0669\x07_\x02\x02\u0669\u066b\x05\u0118\u008d\x02' +
		'\u066a\u0668\x03\x02\x02\x02\u066b\u066e\x03\x02\x02\x02\u066c\u066a\x03\x02\x02\x02\u066c\u066d' +
		'\x03\x02\x02\x02\u066d\u0115\x03\x02\x02\x02\u066e\u066c\x03\x02\x02\x02\u066f\u0670\x05\u011c\u008f' +
		'\x02\u0670\u0671\x07g\x02\x02\u0671\u0672\x05\u0148\u00a5\x02\u0672\u0673\x05\u00f2' +
		'z\x02\u0673\u067a\x03\x02\x02\x02\u0674\u0675\x07r\x02\x02\u0675\u0676\x07g\x02\x02\u0676\u0677' +
		'\x05\u0148\u00a5\x02\u0677\u0678\x05\u00f2z\x02\u0678\u067a\x03\x02\x02\x02\u0679\u066f' +
		'\x03\x02\x02\x02\u0679\u0674\x03\x02\x02\x02\u067a\u0117\x03\x02\x02\x02\u067b\u067c\x05\u011e\u0090' +
		'\x02\u067c\u067d\x07g\x02\x02\u067d\u067e\x05\u0148\u00a5\x02\u067e\u067f\x05\u00f2' +
		'z\x02\u067f\u0686\x03\x02\x02\x02\u0680\u0681\x07r\x02\x02\u0681\u0682\x07g\x02\x02\u0682\u0683' +
		'\x05\u0148\u00a5\x02\u0683\u0684\x05\u00f2z\x02\u0684\u0686\x03\x02\x02\x02\u0685\u067b' +
		'\x03\x02\x02\x02\u0685\u0680\x03\x02\x02\x02\u0686\u0119\x03\x02\x02\x02\u0687\u0688\x05\u0120\u0091' +
		'\x02\u0688\u0689\x07g\x02\x02\u0689\u068a\x05\u0148\u00a5\x02\u068a\u068b\x05\u00f2' +
		'z\x02\u068b\u0692\x03\x02\x02\x02\u068c\u068d\x07r\x02\x02\u068d\u068e\x07g\x02\x02\u068e\u068f' +
		'\x05\u0148\u00a5\x02\u068f\u0690\x05\u00f2z\x02\u0690\u0692\x03\x02\x02\x02\u0691\u0687' +
		'\x03\x02\x02\x02\u0691\u068c\x03\x02\x02\x02\u0692\u011b\x03\x02\x02\x02\u0693\u0696\x05\u0144\u00a3' +
		'\x02\u0694\u0696\x05\u0106\u0084\x02\u0695\u0693\x03\x02\x02\x02\u0695\u0694\x03\x02\x02\x02' +
		'\u0696\u011d\x03\x02\x02\x02\u0697\u069a\x05\u0144\u00a3\x02\u0698\u069a\x05\u0108\u0085' +
		'\x02\u0699\u0697\x03\x02\x02\x02\u0699\u0698\x03\x02\x02\x02\u069a\u011f\x03\x02\x02\x02\u069b\u069e' +
		'\x05\u0144\u00a3\x02\u069c\u069e\x05\u010a\u0086\x02\u069d\u069b\x03\x02\x02\x02\u069d' +
		'\u069c\x03\x02\x02\x02\u069e\u0121\x03\x02\x02\x02\u069f\u06af\x05\u012a\u0096\x02\u06a0\u06a1' +
		'\x05\u0148\u00a5\x02\u06a1\u06a3\x05\u0130\u0099\x02\u06a2\u06a4\x05\u0128\u0095' +
		'\x02\u06a3\u06a2\x03\x02\x02\x02\u06a3\u06a4\x03\x02\x02\x02\u06a4\u06b0\x03\x02\x02\x02\u06a5\u06a7' +
		'\x05\u0124\u0093\x02\u06a6\u06a5\x03\x02\x02\x02\u06a7\u06a8\x03\x02\x02\x02\u06a8\u06a6\x03' +
		'\x02\x02\x02\u06a8\u06a9\x03\x02\x02\x02\u06a9\u06ad\x03\x02\x02\x02\u06aa\u06ab\x05\u0148\u00a5' +
		'\x02\u06ab\u06ac\x05\u0126\u0094\x02\u06ac\u06ae\x03\x02\x02\x02\u06ad\u06aa\x03\x02\x02\x02' +
		'\u06ad\u06ae\x03\x02\x02\x02\u06ae\u06b0\x03\x02\x02\x02\u06af\u06a0\x03\x02\x02\x02\u06af\u06a6' +
		'\x03\x02\x02\x02\u06b0\u0123\x03\x02\x02\x02\u06b1\u06b2\x05\u008eH\x02\u06b2\u06b4\x07\\\x02' +
		'\x02\u06b3\u06b5\x05\u00f2z\x02\u06b4\u06b3\x03\x02\x02\x02\u06b4\u06b5\x03\x02\x02\x02\u06b5' +
		'\u06b6\x03\x02\x02\x02\u06b6\u06b7\x07]\x02\x02\u06b7\u0125\x03\x02\x02\x02\u06b8\u06b9\x07Z\x02' +
		'\x02\u06b9\u06bd\x05\u0148\u00a5\x02\u06ba\u06bb\x05F$\x02\u06bb\u06bc\x05\u0148\u00a5' +
		'\x02\u06bc\u06be\x03\x02\x02\x02\u06bd\u06ba\x03\x02\x02\x02\u06bd\u06be\x03\x02\x02\x02\u06be\u06bf' +
		'\x03\x02\x02\x02\u06bf\u06c0\x07[\x02\x02\u06c0\u0127\x03\x02\x02\x02\u06c1\u06c2\x05*\x26\x02\u06c2' +
		'\u0129\x03\x02\x02\x02\u06c3\u06c9\x05\u008eH\x02\u06c4\u06ca\x05V,\x02\u06c5\u06c7\x05' +
		'p9\x02\u06c6\u06c8\x05\u012e\u0098\x02\u06c7\u06c6\x03\x02\x02\x02\u06c7\u06c8\x03\x02\x02' +
		'\x02\u06c8\u06ca\x03\x02\x02\x02\u06c9\u06c4\x03\x02\x02\x02\u06c9\u06c5\x03\x02\x02\x02\u06ca\u012b' +
		'\x03\x02\x02\x02\u06cb\u06cc\x07c\x02\x02\u06cc\u06cd\x05\u0148\u00a5\x02\u06cd\u06ce\x05' +
		'&\x24\x02\u06ce\u06cf\x05\u0148\u00a5\x02\u06cf\u06d0\x07b\x02\x02\u06d0\u012d\x03\x02' +
		'\x02\x02\u06d1\u06d2\x07c\x02\x02\u06d2\u06d5\x07b\x02\x02\u06d3\u06d5\x05X-\x02\u06d4\u06d1' +
		'\x03\x02\x02\x02\u06d4\u06d3\x03\x02\x02\x02\u06d5\u012f\x03\x02\x02\x02\u06d6\u06d8\x07X\x02\x02\u06d7' +
		'\u06d9\x05\u0134\u009b\x02\u06d8\u06d7\x03\x02\x02\x02\u06d8\u06d9\x03\x02\x02\x02\u06d9\u06db' +
		'\x03\x02\x02\x02\u06da\u06dc\x07_\x02\x02\u06db\u06da\x03\x02\x02\x02\u06db\u06dc\x03\x02\x02\x02\u06dc' +
		'\u06dd\x03\x02\x02\x02\u06dd\u06de\x05\u0146\u00a4\x02\u06de\u0131\x03\x02\x02\x02\u06df\u06e6' +
		'\x05\u0136\u009c\x02\u06e0\u06e1\x07_\x02\x02\u06e1\u06e2\x05\u0148\u00a5\x02\u06e2' +
		'\u06e3\x05\u0138\u009d\x02\u06e3\u06e5\x03\x02\x02\x02\u06e4\u06e0\x03\x02\x02\x02\u06e5\u06e8' +
		'\x03\x02\x02\x02\u06e6\u06e4\x03\x02\x02\x02\u06e6\u06e7\x03\x02\x02\x02\u06e7\u0133\x03\x02\x02\x02\u06e8' +
		'\u06e6\x03\x02\x02\x02\u06e9\u06f0\x05\u013a\u009e\x02\u06ea\u06eb\x07_\x02\x02\u06eb\u06ec' +
		'\x05\u0148\u00a5\x02\u06ec\u06ed\x05\u013a\u009e\x02\u06ed\u06ef\x03\x02\x02\x02\u06ee' +
		'\u06ea\x03\x02\x02\x02\u06ef\u06f2\x03\x02\x02\x02\u06f0\u06ee\x03\x02\x02\x02\u06f0\u06f1\x03\x02' +
		'\x02\x02\u06f1\u0135\x03\x02\x02\x02\u06f2\u06f0\x03\x02\x02\x02\u06f3\u06f6\x05\u00e4s\x02\u06f4' +
		'\u06f6\x05\u011a\u008e\x02\u06f5\u06f3\x03\x02\x02\x02\u06f5\u06f4\x03\x02\x02\x02\u06f6\u0137' +
		'\x03\x02\x02\x02\u06f7\u06fa\x05\u00e4s\x02\u06f8\u06fa\x05\u0118\u008d\x02\u06f9\u06f7' +
		'\x03\x02\x02\x02\u06f9\u06f8\x03\x02\x02\x02\u06fa\u0139\x03\x02\x02\x02\u06fb\u06ff\x05\u00e4s' +
		'\x02\u06fc\u06ff\x05~@\x02\u06fd\u06ff\x05\u0118\u008d\x02\u06fe\u06fb\x03\x02\x02\x02\u06fe' +
		'\u06fc\x03\x02\x02\x02\u06fe\u06fd\x03\x02\x02\x02\u06ff\u013b\x03\x02\x02\x02\u0700\u0701\x07\x03' +
		'\x02\x02\u0701\u013d\x03\x02\x02\x02\u0702\u0703\x07\u0084\x02\x02\u0703\u013f\x03\x02\x02\x02\u0704' +
		'\u0705\t\x26\x02\x02\u0705\u0141\x03\x02\x02\x02\u0706\u0707\t\x27\x02\x02\u0707\u0143\x03' +
		'\x02\x02\x02\u0708\u0709\t\x30\x02\x02\u0709\u0145\x03\x02\x02\x02\u070a\u070b\x07Y\x02\x02\u070b' +
		'\u0147\x03\x02\x02\x02\u070c\u070e\x07\u0089\x02\x02\u070d\u070c\x03\x02\x02\x02\u070e\u0711' +
		'\x03\x02\x02\x02\u070f\u070d\x03\x02\x02\x02\u070f\u0710\x03\x02\x02\x02\u0710\u0149\x03\x02\x02\x02\u0711' +
		'\u070f\x03\x02\x02\x02\u0712\u0714\t\x31\x02\x02\u0713\u0712\x03\x02\x02\x02\u0714\u0715\x03' +
		'\x02\x02\x02\u0715\u0713\x03\x02\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u014b\x03\x02\x02\x02\u00c7' +
		'\u014f\u0151\u0154\u015e\u0162\u0169\u0172\u0179\u0180\u0185\u018d\u0194' +
		'\u0197\u019f\u01a4\u01a8\u01ad\u01b5\u01c1\u01cd\u01d6\u01e0\u01f0\u01f6' +
		'\u01fb\u0202\u0209\u0210\u021c\u021f\u0222\u022a\u022d\u0230\u023c\u0242' +
		'\u0245\u0249\u024d\u0254\u0256\u025a\u025f\u026c\u0271\u0273\u027b\u027f' +
		'\u028a\u0293\u02a1\u02a6\u02ae\u02b1\u02b6\u02bd\u02c0\u02c6\u02c9\u02cd' +
		'\u02d1\u02de\u02eb\u02ed\u02f9\u02fe\u0304\u030c\u0314\u0317\u031f\u0328' +
		'\u0330\u0337\u0343\u034b\u0353\u035a\u0360\u0373\u0377\u037e\u0382\u0385' +
		'\u038c\u038f\u0397\u039b\u03a3\u03a8\u03af\u03b3\u03b7\u03c0\u03cb\u03d0' +
		'\u03d8\u03dc\u03de\u03e4\u03eb\u03f3\u03fc\u0401\u0409\u040f\u0419\u041f' +
		'\u0427\u042d\u0437\u043b\u0452\u0456\u045a\u0461\u046a\u0470\u0479\u0486' +
		'\u0497\u049d\u04a9\u04b4\u04be\u04c3\u04cb\u04d7\u04db\u04df\u04e6\u04ea' +
		'\u04ee\u04f2\u0507\u050b\u0511\u0517\u0521\u052c\u0533\u0549\u0564\u0567' +
		'\u05a7\u05b7\u05b9\u05c6\u05cc\u05d1\u05d8\u05db\u05e0\u05e7\u05f5\u05fb' +
		'\u0603\u060e\u0614\u0618\u061c\u0623\u0629\u0638\u0640\u0645\u064a\u064e' +
		'\u0651\u0658\u065b\u0664\u066c\u0679\u0685\u0691\u0695\u0699\u069d\u06a3' +
		'\u06a8\u06ad\u06af\u06b4\u06bd\u06c7\u06c9\u06d4\u06d8\u06db\u06e6\u06f0' +
		'\u06f5\u06f9\u06fe\u070f\u0715';
	static readonly _ATN: ATN = new ATNDeserializer().deserialize(Array.from(stringToCharArray(GroovyParser._serializedATN)));
	static readonly _DECISIONS_TO_DFA = GroovyParser._ATN.decisionToState.map((ds, index) => new DFA(ds, index));
}
