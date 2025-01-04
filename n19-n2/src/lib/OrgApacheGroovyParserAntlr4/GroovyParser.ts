import {FailedPredicateException, ParserATNSimulator, TokenStream} from 'antlr4';
import {Optional} from '../TsAddon';
import {AbstractParser} from './AbstractParser';
import {GroovySyntaxSource} from './GroovySyntaxSource';
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
	static readonly = 44;
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
}
