// Generated from grammar/GroovyParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer,
	DecisionState,
	DFA,
	FailedPredicateException,
	NoViableAltException,
	ParserATNSimulator,
	ParserRuleContext,
	PredictionContextCache,
	RecognitionException,
	RuleContext,
	TerminalNode,
	Token,
	TokenStream
} from 'antlr4';
import {AbstractParser} from './AbstractParser';
import {GroovyLexer} from './GroovyLexer';
import {GroovyParserListener} from './GroovyParserListener';
import {GroovyParserRuleContext} from './GroovyParserRuleContext';
import {GroovyParserVisitor} from './GroovyParserVisitor';
import {GroovySyntaxSource} from './GroovySyntaxSource';
import {SemanticPredicates} from './SemanticPredicates';

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
// type int = number;

// import AbstractParser from './AbstractParser.js';

export class GroovyParser extends AbstractParser {
	public static readonly StringLiteral = 1;
	public static readonly GStringBegin = 2;
	public static readonly GStringEnd = 3;
	public static readonly GStringPart = 4;
	public static readonly GStringPathPart = 5;
	public static readonly RollBackOne = 6;
	public static readonly AS = 7;
	public static readonly DEF = 8;
	public static readonly IN = 9;
	public static readonly TRAIT = 10;
	public static readonly THREADSAFE = 11;
	public static readonly VAR = 12;
	public static readonly BuiltInPrimitiveType = 13;
	public static readonly ABSTRACT = 14;
	public static readonly ASSERT = 15;
	public static readonly BREAK = 16;
	public static readonly YIELD = 17;
	public static readonly CASE = 18;
	public static readonly CATCH = 19;
	public static readonly CLASS = 20;
	public static readonly CONST = 21;
	public static readonly CONTINUE = 22;
	public static readonly DEFAULT = 23;
	public static readonly DO = 24;
	public static readonly ELSE = 25;
	public static readonly ENUM = 26;
	public static readonly EXTENDS = 27;
	public static readonly FINAL = 28;
	public static readonly FINALLY = 29;
	public static readonly FOR = 30;
	public static readonly IF = 31;
	public static readonly GOTO = 32;
	public static readonly IMPLEMENTS = 33;
	public static readonly IMPORT = 34;
	public static readonly INSTANCEOF = 35;
	public static readonly INTERFACE = 36;
	public static readonly NATIVE = 37;
	public static readonly NEW = 38;
	public static readonly NON_SEALED = 39;
	public static readonly PACKAGE = 40;
	public static readonly PERMITS = 41;
	public static readonly PRIVATE = 42;
	public static readonly PROTECTED = 43;
	public static readonly PUBLIC = 44;
	public static readonly RECORD = 45;
	public static readonly RETURN = 46;
	public static readonly SEALED = 47;
	public static readonly STATIC = 48;
	public static readonly STRICTFP = 49;
	public static readonly SUPER = 50;
	public static readonly SWITCH = 51;
	public static readonly SYNCHRONIZED = 52;
	public static readonly THIS = 53;
	public static readonly THROW = 54;
	public static readonly THROWS = 55;
	public static readonly TRANSIENT = 56;
	public static readonly TRY = 57;
	public static readonly VOID = 58;
	public static readonly VOLATILE = 59;
	public static readonly WHILE = 60;
	public static readonly IntegerLiteral = 61;
	public static readonly FloatingPointLiteral = 62;
	public static readonly BooleanLiteral = 63;
	public static readonly NullLiteral = 64;
	public static readonly RANGE_INCLUSIVE = 65;
	public static readonly RANGE_EXCLUSIVE_LEFT = 66;
	public static readonly RANGE_EXCLUSIVE_RIGHT = 67;
	public static readonly RANGE_EXCLUSIVE_FULL = 68;
	public static readonly SPREAD_DOT = 69;
	public static readonly SAFE_DOT = 70;
	public static readonly SAFE_INDEX = 71;
	public static readonly SAFE_CHAIN_DOT = 72;
	public static readonly ELVIS = 73;
	public static readonly METHOD_POINTER = 74;
	public static readonly METHOD_REFERENCE = 75;
	public static readonly REGEX_FIND = 76;
	public static readonly REGEX_MATCH = 77;
	public static readonly POWER = 78;
	public static readonly POWER_ASSIGN = 79;
	public static readonly SPACESHIP = 80;
	public static readonly IDENTICAL = 81;
	public static readonly NOT_IDENTICAL = 82;
	public static readonly ARROW = 83;
	public static readonly NOT_INSTANCEOF = 84;
	public static readonly NOT_IN = 85;
	public static readonly LPAREN = 86;
	public static readonly RPAREN = 87;
	public static readonly LBRACE = 88;
	public static readonly RBRACE = 89;
	public static readonly LBRACK = 90;
	public static readonly RBRACK = 91;
	public static readonly SEMI = 92;
	public static readonly COMMA = 93;
	public static readonly DOT = 94;
	public static readonly ASSIGN = 95;
	public static readonly GT = 96;
	public static readonly LT = 97;
	public static readonly NOT = 98;
	public static readonly BITNOT = 99;
	public static readonly QUESTION = 100;
	public static readonly COLON = 101;
	public static readonly EQUAL = 102;
	public static readonly LE = 103;
	public static readonly GE = 104;
	public static readonly NOTEQUAL = 105;
	public static readonly AND = 106;
	public static readonly OR = 107;
	public static readonly INC = 108;
	public static readonly DEC = 109;
	public static readonly ADD = 110;
	public static readonly SUB = 111;
	public static readonly MUL = 112;
	public static readonly DIV = 113;
	public static readonly BITAND = 114;
	public static readonly BITOR = 115;
	public static readonly XOR = 116;
	public static readonly MOD = 117;
	public static readonly ADD_ASSIGN = 118;
	public static readonly SUB_ASSIGN = 119;
	public static readonly MUL_ASSIGN = 120;
	public static readonly DIV_ASSIGN = 121;
	public static readonly AND_ASSIGN = 122;
	public static readonly OR_ASSIGN = 123;
	public static readonly XOR_ASSIGN = 124;
	public static readonly MOD_ASSIGN = 125;
	public static readonly LSHIFT_ASSIGN = 126;
	public static readonly RSHIFT_ASSIGN = 127;
	public static readonly URSHIFT_ASSIGN = 128;
	public static readonly ELVIS_ASSIGN = 129;
	public static readonly CapitalizedIdentifier = 130;
	public static readonly Identifier = 131;
	public static readonly AT = 132;
	public static readonly ELLIPSIS = 133;
	public static readonly WS = 134;
	public static readonly NL = 135;
	public static readonly SH_COMMENT = 136;
	public static readonly UNEXPECTED_CHAR = 137;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_scriptStatements = 1;
	public static readonly RULE_scriptStatement = 2;
	public static readonly RULE_packageDeclaration = 3;
	public static readonly RULE_importDeclaration = 4;
	public static readonly RULE_typeDeclaration = 5;
	public static readonly RULE_modifier = 6;
	public static readonly RULE_modifiersOpt = 7;
	public static readonly RULE_modifiers = 8;
	public static readonly RULE_classOrInterfaceModifiersOpt = 9;
	public static readonly RULE_classOrInterfaceModifiers = 10;
	public static readonly RULE_classOrInterfaceModifier = 11;
	public static readonly RULE_variableModifier = 12;
	public static readonly RULE_variableModifiersOpt = 13;
	public static readonly RULE_variableModifiers = 14;
	public static readonly RULE_typeParameters = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeBound = 17;
	public static readonly RULE_typeList = 18;
	public static readonly RULE_classDeclaration = 19;
	public static readonly RULE_classBody = 20;
	public static readonly RULE_enumConstants = 21;
	public static readonly RULE_enumConstant = 22;
	public static readonly RULE_classBodyDeclaration = 23;
	public static readonly RULE_memberDeclaration = 24;
	public static readonly RULE_methodDeclaration = 25;
	public static readonly RULE_compactConstructorDeclaration = 26;
	public static readonly RULE_methodName = 27;
	public static readonly RULE_returnType = 28;
	public static readonly RULE_fieldDeclaration = 29;
	public static readonly RULE_variableDeclarators = 30;
	public static readonly RULE_variableDeclarator = 31;
	public static readonly RULE_variableDeclaratorId = 32;
	public static readonly RULE_variableInitializer = 33;
	public static readonly RULE_variableInitializers = 34;
	public static readonly RULE_emptyDims = 35;
	public static readonly RULE_emptyDimsOpt = 36;
	public static readonly RULE_standardType = 37;
	public static readonly RULE_type = 38;
	public static readonly RULE_classOrInterfaceType = 39;
	public static readonly RULE_generalClassOrInterfaceType = 40;
	public static readonly RULE_standardClassOrInterfaceType = 41;
	public static readonly RULE_primitiveType = 42;
	public static readonly RULE_typeArguments = 43;
	public static readonly RULE_typeArgument = 44;
	public static readonly RULE_annotatedQualifiedClassName = 45;
	public static readonly RULE_qualifiedClassNameList = 46;
	public static readonly RULE_formalParameters = 47;
	public static readonly RULE_formalParameterList = 48;
	public static readonly RULE_thisFormalParameter = 49;
	public static readonly RULE_formalParameter = 50;
	public static readonly RULE_methodBody = 51;
	public static readonly RULE_qualifiedName = 52;
	public static readonly RULE_qualifiedNameElement = 53;
	public static readonly RULE_qualifiedNameElements = 54;
	public static readonly RULE_qualifiedClassName = 55;
	public static readonly RULE_qualifiedStandardClassName = 56;
	public static readonly RULE_literal = 57;
	public static readonly RULE_gstring = 58;
	public static readonly RULE_gstringValue = 59;
	public static readonly RULE_gstringPath = 60;
	public static readonly RULE_lambdaExpression = 61;
	public static readonly RULE_standardLambdaExpression = 62;
	public static readonly RULE_lambdaParameters = 63;
	public static readonly RULE_standardLambdaParameters = 64;
	public static readonly RULE_lambdaBody = 65;
	public static readonly RULE_closure = 66;
	public static readonly RULE_closureOrLambdaExpression = 67;
	public static readonly RULE_blockStatementsOpt = 68;
	public static readonly RULE_blockStatements = 69;
	public static readonly RULE_annotationsOpt = 70;
	public static readonly RULE_annotation = 71;
	public static readonly RULE_elementValues = 72;
	public static readonly RULE_annotationName = 73;
	public static readonly RULE_elementValuePairs = 74;
	public static readonly RULE_elementValuePair = 75;
	public static readonly RULE_elementValuePairName = 76;
	public static readonly RULE_elementValue = 77;
	public static readonly RULE_elementValueArrayInitializer = 78;
	public static readonly RULE_block = 79;
	public static readonly RULE_blockStatement = 80;
	public static readonly RULE_localVariableDeclaration = 81;
	public static readonly RULE_variableDeclaration = 82;
	public static readonly RULE_typeNamePairs = 83;
	public static readonly RULE_typeNamePair = 84;
	public static readonly RULE_variableNames = 85;
	public static readonly RULE_conditionalStatement = 86;
	public static readonly RULE_ifElseStatement = 87;
	public static readonly RULE_switchStatement = 88;
	public static readonly RULE_loopStatement = 89;
	public static readonly RULE_continueStatement = 90;
	public static readonly RULE_breakStatement = 91;
	public static readonly RULE_yieldStatement = 92;
	public static readonly RULE_tryCatchStatement = 93;
	public static readonly RULE_assertStatement = 94;
	public static readonly RULE_statement = 95;
	public static readonly RULE_catchClause = 96;
	public static readonly RULE_catchType = 97;
	public static readonly RULE_finallyBlock = 98;
	public static readonly RULE_resources = 99;
	public static readonly RULE_resourceList = 100;
	public static readonly RULE_resource = 101;
	public static readonly RULE_switchBlockStatementGroup = 102;
	public static readonly RULE_switchLabel = 103;
	public static readonly RULE_forControl = 104;
	public static readonly RULE_enhancedForControl = 105;
	public static readonly RULE_classicalForControl = 106;
	public static readonly RULE_forInit = 107;
	public static readonly RULE_forUpdate = 108;
	public static readonly RULE_castParExpression = 109;
	public static readonly RULE_parExpression = 110;
	public static readonly RULE_expressionInPar = 111;
	public static readonly RULE_expressionList = 112;
	public static readonly RULE_expressionListElement = 113;
	public static readonly RULE_enhancedStatementExpression = 114;
	public static readonly RULE_statementExpression = 115;
	public static readonly RULE_postfixExpression = 116;
	public static readonly RULE_switchExpression = 117;
	public static readonly RULE_switchBlockStatementExpressionGroup = 118;
	public static readonly RULE_switchExpressionLabel = 119;
	public static readonly RULE_expression = 120;
	public static readonly RULE_castOperandExpression = 121;
	public static readonly RULE_commandExpression = 122;
	public static readonly RULE_commandArgument = 123;
	public static readonly RULE_pathExpression = 124;
	public static readonly RULE_pathElement = 125;
	public static readonly RULE_namePart = 126;
	public static readonly RULE_dynamicMemberName = 127;
	public static readonly RULE_indexPropertyArgs = 128;
	public static readonly RULE_namedPropertyArgs = 129;
	public static readonly RULE_primary = 130;
	public static readonly RULE_namedPropertyArgPrimary = 131;
	public static readonly RULE_namedArgPrimary = 132;
	public static readonly RULE_commandPrimary = 133;
	public static readonly RULE_list = 134;
	public static readonly RULE_map = 135;
	public static readonly RULE_mapEntryList = 136;
	public static readonly RULE_namedPropertyArgList = 137;
	public static readonly RULE_mapEntry = 138;
	public static readonly RULE_namedPropertyArg = 139;
	public static readonly RULE_namedArg = 140;
	public static readonly RULE_mapEntryLabel = 141;
	public static readonly RULE_namedPropertyArgLabel = 142;
	public static readonly RULE_namedArgLabel = 143;
	public static readonly RULE_creator = 144;
	public static readonly RULE_dim = 145;
	public static readonly RULE_arrayInitializer = 146;
	public static readonly RULE_anonymousInnerClassDeclaration = 147;
	public static readonly RULE_createdName = 148;
	public static readonly RULE_nonWildcardTypeArguments = 149;
	public static readonly RULE_typeArgumentsOrDiamond = 150;
	public static readonly RULE_arguments = 151;
	public static readonly RULE_argumentList = 152;
	public static readonly RULE_enhancedArgumentListInPar = 153;
	public static readonly RULE_firstArgumentListElement = 154;
	public static readonly RULE_argumentListElement = 155;
	public static readonly RULE_enhancedArgumentListElement = 156;
	public static readonly RULE_stringLiteral = 157;
	public static readonly RULE_className = 158;
	public static readonly RULE_identifier = 159;
	public static readonly RULE_builtInType = 160;
	public static readonly RULE_keywords = 161;
	public static readonly RULE_rparen = 162;
	public static readonly RULE_nls = 163;
	public static readonly RULE_sep = 164;
	public static readonly literalNames: (string | null)[] = [null, null,
		null, null,
		null, null,
		null, '\'as\'',
		'\'def\'', '\'in\'',
		'\'trait\'', '\'threadsafe\'',
		'\'var\'', null,
		'\'abstract\'',
		'\'assert\'',
		'\'break\'', '\'yield\'',
		'\'case\'', '\'catch\'',
		'\'class\'', '\'const\'',
		'\'continue\'',
		'\'default\'',
		'\'do\'', '\'else\'',
		'\'enum\'', '\'extends\'',
		'\'final\'', '\'finally\'',
		'\'for\'', '\'if\'',
		'\'goto\'', '\'implements\'',
		'\'import\'',
		'\'instanceof\'',
		'\'interface\'',
		'\'native\'',
		'\'new\'', '\'non-sealed\'',
		'\'package\'',
		'\'permits\'',
		'\'private\'',
		'\'protected\'',
		'\'public\'',
		'\'record\'',
		'\'return\'',
		'\'sealed\'',
		'\'static\'',
		'\'strictfp\'',
		'\'super\'', '\'switch\'',
		'\'synchronized\'',
		'\'this\'', '\'throw\'',
		'\'throws\'',
		'\'transient\'',
		'\'try\'', '\'void\'',
		'\'volatile\'',
		'\'while\'', null,
		null, null,
		'\'null\'', '\'..\'',
		'\'<..\'', '\'..<\'',
		'\'<..<\'', '\'*.\'',
		'\'?.\'', null,
		'\'??.\'', '\'?:\'',
		'\'.&\'', '\'::\'',
		'\'=~\'', '\'==~\'',
		'\'**\'', '\'**=\'',
		'\'<=>\'', '\'===\'',
		'\'!==\'', '\'->\'',
		'\'!instanceof\'',
		'\'!in\'', null,
		null, null,
		null, null,
		null, '\';\'',
		'\',\'', null,
		'\'=\'', '\'>\'',
		'\'<\'', '\'!\'',
		'\'~\'', '\'?\'',
		'\':\'', '\'==\'',
		'\'<=\'', '\'>=\'',
		'\'!=\'', '\'&&\'',
		'\'||\'', '\'++\'',
		'\'--\'', '\'+\'',
		'\'-\'', '\'*\'',
		null, '\'&\'',
		'\'|\'', '\'^\'',
		'\'%\'', '\'+=\'',
		'\'-=\'', '\'*=\'',
		'\'/=\'', '\'&=\'',
		'\'|=\'', '\'^=\'',
		'\'%=\'', '\'<<=\'',
		'\'>>=\'', '\'>>>=\'',
		'\'?=\'', null,
		null, '\'@\'',
		'\'...\''];
	public static readonly symbolicNames: (string | null)[] = [null, 'StringLiteral',
		'GStringBegin',
		'GStringEnd',
		'GStringPart',
		'GStringPathPart',
		'RollBackOne',
		'AS', 'DEF',
		'IN', 'TRAIT',
		'THREADSAFE',
		'VAR', 'BuiltInPrimitiveType',
		'ABSTRACT',
		'ASSERT', 'BREAK',
		'YIELD', 'CASE',
		'CATCH', 'CLASS',
		'CONST', 'CONTINUE',
		'DEFAULT',
		'DO', 'ELSE',
		'ENUM', 'EXTENDS',
		'FINAL', 'FINALLY',
		'FOR', 'IF',
		'GOTO', 'IMPLEMENTS',
		'IMPORT', 'INSTANCEOF',
		'INTERFACE',
		'NATIVE', 'NEW',
		'NON_SEALED',
		'PACKAGE',
		'PERMITS',
		'PRIVATE',
		'PROTECTED',
		'PUBLIC', 'RECORD',
		'RETURN', 'SEALED',
		'STATIC', 'STRICTFP',
		'SUPER', 'SWITCH',
		'SYNCHRONIZED',
		'THIS', 'THROW',
		'THROWS', 'TRANSIENT',
		'TRY', 'VOID',
		'VOLATILE',
		'WHILE', 'IntegerLiteral',
		'FloatingPointLiteral',
		'BooleanLiteral',
		'NullLiteral',
		'RANGE_INCLUSIVE',
		'RANGE_EXCLUSIVE_LEFT',
		'RANGE_EXCLUSIVE_RIGHT',
		'RANGE_EXCLUSIVE_FULL',
		'SPREAD_DOT',
		'SAFE_DOT',
		'SAFE_INDEX',
		'SAFE_CHAIN_DOT',
		'ELVIS', 'METHOD_POINTER',
		'METHOD_REFERENCE',
		'REGEX_FIND',
		'REGEX_MATCH',
		'POWER', 'POWER_ASSIGN',
		'SPACESHIP',
		'IDENTICAL',
		'NOT_IDENTICAL',
		'ARROW', 'NOT_INSTANCEOF',
		'NOT_IN', 'LPAREN',
		'RPAREN', 'LBRACE',
		'RBRACE', 'LBRACK',
		'RBRACK', 'SEMI',
		'COMMA', 'DOT',
		'ASSIGN', 'GT',
		'LT', 'NOT',
		'BITNOT', 'QUESTION',
		'COLON', 'EQUAL',
		'LE', 'GE',
		'NOTEQUAL',
		'AND', 'OR',
		'INC', 'DEC',
		'ADD', 'SUB',
		'MUL', 'DIV',
		'BITAND', 'BITOR',
		'XOR', 'MOD',
		'ADD_ASSIGN',
		'SUB_ASSIGN',
		'MUL_ASSIGN',
		'DIV_ASSIGN',
		'AND_ASSIGN',
		'OR_ASSIGN',
		'XOR_ASSIGN',
		'MOD_ASSIGN',
		'LSHIFT_ASSIGN',
		'RSHIFT_ASSIGN',
		'URSHIFT_ASSIGN',
		'ELVIS_ASSIGN',
		'CapitalizedIdentifier',
		'Identifier',
		'AT', 'ELLIPSIS',
		'WS', 'NL',
		'SH_COMMENT',
		'UNEXPECTED_CHAR'];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		'createdName', 'nonWildcardTypeArguments', 'typeArgumentsOrDiamond', 'arguments',
		'argumentList', 'enhancedArgumentListInPar', 'firstArgumentListElement',
		'argumentListElement', 'enhancedArgumentListElement', 'stringLiteral',
		'className', 'identifier', 'builtInType', 'keywords', 'rparen', 'nls',
		'sep'
	];

	public get grammarFileName(): string {
		return 'GroovyParser.g4';
	}

	public get literalNames(): (string | null)[] {
		return GroovyParser.literalNames;
	}

	public get symbolicNames(): (string | null)[] {
		return GroovyParser.symbolicNames;
	}

	public get ruleNames(): string[] {
		return GroovyParser.ruleNames;
	}

	public get serializedATN(): number[] {
		return GroovyParser._serializedATN;
	}

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
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
		this._interp = new ParserATNSimulator(this, GroovyParser._ATN, GroovyParser.DecisionsToDFA, new PredictionContextCache());
	}

	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		const localctx: CompilationUnitContext = new CompilationUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, GroovyParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public scriptStatements(): ScriptStatementsContext {
		const localctx: ScriptStatementsContext = new ScriptStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, GroovyParser.RULE_scriptStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 342;
				this.scriptStatement();
				this.state = 348;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
				if (_la === 92 || _la === 135) {
					{
						this.state = 351;
						this.sep();
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public scriptStatement(): ScriptStatementContext {
		const localctx: ScriptStatementContext = new ScriptStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, GroovyParser.RULE_scriptStatement);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 354;
					this.importDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 355;
					this.typeDeclaration();
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 356;
					// eslint-disable-next-line no-extra-boolean-cast
					if (!(!SemanticPredicates.isInvalidMethodDeclaration(this._input))) {
						// noinspection ExceptionCaughtLocallyJS
						throw this.createFailedPredicateException(' !SemanticPredicates.isInvalidMethodDeclaration(this._input) ');
					}
					this.state = 357;
					this.methodDeclaration(3, 9);
				}
					break;
				case 4:
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 358;
					this.statement();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		const localctx: PackageDeclarationContext = new PackageDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, GroovyParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 361;
				this.annotationsOpt();
				this.state = 362;
				this.match(GroovyParser.PACKAGE);
				this.state = 363;
				this.qualifiedName();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		const localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, GroovyParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 365;
				this.annotationsOpt();
				this.state = 366;
				this.match(GroovyParser.IMPORT);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 48) {
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
					case 94: {
						this.state = 371;
						this.match(GroovyParser.DOT);
						this.state = 372;
						this.match(GroovyParser.MUL);
					}
						break;
					case 7: {
						this.state = 373;
						this.match(GroovyParser.AS);
						this.state = 374;
						localctx._alias = this.identifier();
					}
						break;
					case -1:
					case 92:
					case 135:
						break;
					default:
						break;
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		const localctx: TypeDeclarationContext = new TypeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, GroovyParser.RULE_typeDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 377;
				this.classOrInterfaceModifiersOpt();
				this.state = 378;
				this.classDeclaration();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public modifier(): ModifierContext {
		const localctx: ModifierContext = new ModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, GroovyParser.RULE_modifier);
		let _la: number;
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 14:
				case 23:
				case 28:
				case 39:
				case 42:
				case 43:
				case 44:
				case 47:
				case 48:
				case 49:
				case 132:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 380;
					this.classOrInterfaceModifier();
				}
					break;
				case 8:
				case 12:
				case 37:
				case 52:
				case 56:
				case 59:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 381;
					localctx._m = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === 8 || _la === 12 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4751361) !== 0))) {
						localctx._m = this._errHandler.recoverInline(this);
					} else {
						this._errHandler.reportMatch(this);
						this.consume();
					}
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public modifiersOpt(): ModifiersOptContext {
		const localctx: ModifiersOptContext = new ModifiersOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, GroovyParser.RULE_modifiersOpt);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public modifiers(): ModifiersContext {
		const localctx: ModifiersContext = new ModifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, GroovyParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 389;
				this.modifier();
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classOrInterfaceModifiersOpt(): ClassOrInterfaceModifiersOptContext {
		const localctx: ClassOrInterfaceModifiersOptContext = new ClassOrInterfaceModifiersOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, GroovyParser.RULE_classOrInterfaceModifiersOpt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
						while (_la === 135) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext {
		const localctx: ClassOrInterfaceModifiersContext = new ClassOrInterfaceModifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, GroovyParser.RULE_classOrInterfaceModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 407;
				this.classOrInterfaceModifier();
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		const localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, GroovyParser.RULE_classOrInterfaceModifier);
		let _la: number;
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 132:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 416;
					this.annotation();
				}
					break;
				case 14:
				case 23:
				case 28:
				case 39:
				case 42:
				case 43:
				case 44:
				case 47:
				case 48:
				case 49:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 417;
					localctx._m = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 276840448) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 1849) !== 0))) {
						localctx._m = this._errHandler.recoverInline(this);
					} else {
						this._errHandler.reportMatch(this);
						this.consume();
					}
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		const localctx: VariableModifierContext = new VariableModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, GroovyParser.RULE_variableModifier);
		let _la: number;
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 132:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 420;
					this.annotation();
				}
					break;
				case 8:
				case 12:
				case 14:
				case 28:
				case 42:
				case 43:
				case 44:
				case 48:
				case 49:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 421;
					localctx._m = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268456192) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 199) !== 0))) {
						localctx._m = this._errHandler.recoverInline(this);
					} else {
						this._errHandler.reportMatch(this);
						this.consume();
					}
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableModifiersOpt(): VariableModifiersOptContext {
		const localctx: VariableModifiersOptContext = new VariableModifiersOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, GroovyParser.RULE_variableModifiersOpt);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableModifiers(): VariableModifiersContext {
		const localctx: VariableModifiersContext = new VariableModifiersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, GroovyParser.RULE_variableModifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 429;
				this.variableModifier();
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		const localctx: TypeParametersContext = new TypeParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, GroovyParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 438;
				this.match(GroovyParser.LT);
				this.state = 439;
				this.nls();
				this.state = 440;
				this.typeParameter();
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 450;
				this.nls();
				this.state = 451;
				this.match(GroovyParser.GT);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		const localctx: TypeParameterContext = new TypeParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, GroovyParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 453;
				this.annotationsOpt();
				this.state = 454;
				this.className();
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 27) {
					{
						this.state = 455;
						this.match(GroovyParser.EXTENDS);
						this.state = 456;
						this.nls();
						this.state = 457;
						this.typeBound();
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		const localctx: TypeBoundContext = new TypeBoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, GroovyParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 461;
				this.type_();
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 114) {
					{
						{
							this.state = 462;
							this.match(GroovyParser.BITAND);
							this.state = 463;
							this.nls();
							this.state = 464;
							this.type_();
						}
					}
					this.state = 470;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeList(): TypeListContext {
		const localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, GroovyParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 471;
				this.type_();
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
					{
						{
							this.state = 472;
							this.match(GroovyParser.COMMA);
							this.state = 473;
							this.nls();
							this.state = 474;
							this.type_();
						}
					}
					this.state = 480;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		const localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, GroovyParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 494;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 20: {
						this.state = 481;
						this.match(GroovyParser.CLASS);
						localctx.t = 0;
					}
						break;
					case 36: {
						this.state = 483;
						this.match(GroovyParser.INTERFACE);
						localctx.t = 1;
					}
						break;
					case 26: {
						this.state = 485;
						this.match(GroovyParser.ENUM);
						localctx.t = 2;
					}
						break;
					case 132: {
						this.state = 487;
						this.match(GroovyParser.AT);
						this.state = 488;
						this.match(GroovyParser.INTERFACE);
						localctx.t = 3;
					}
						break;
					case 10: {
						this.state = 490;
						this.match(GroovyParser.TRAIT);
						localctx.t = 4;
					}
						break;
					case 45: {
						this.state = 492;
						this.match(GroovyParser.RECORD);
						localctx.t = 5;
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
						localctx._scs = this.typeList();
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
						localctx._is = this.typeList();
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
						localctx._ps = this.typeList();
					}
						break;
				}
				this.state = 528;
				this.nls();
				this.state = 529;
				this.classBody(localctx.t);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classBody(t: number): ClassBodyContext {
		const localctx: ClassBodyContext = new ClassBodyContext(this, this._ctx, this.state, t);
		this.enterRule(localctx, 40, GroovyParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
						if (!(2 === localctx.t)) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' 2 === $t ');
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
					case 2:
						// tslint:disable-next-line:no-empty
					{
						// do nothing
					}
						break;
				}
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 345143170) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 13712363) !== 0) || _la === 88 || _la === 97 || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 7) !== 0)) {
					{
						this.state = 546;
						this.classBodyDeclaration(localctx.t);
						this.state = 552;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 547;
										this.sep();
										this.state = 548;
										this.classBodyDeclaration(localctx.t);
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
				if (_la === 92 || _la === 135) {
					{
						this.state = 557;
						this.sep();
					}
				}

				this.state = 560;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		const localctx: EnumConstantsContext = new EnumConstantsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, GroovyParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 562;
				this.enumConstant();
				this.state = 570;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		const localctx: EnumConstantContext = new EnumConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, GroovyParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 573;
				this.annotationsOpt();
				this.state = 574;
				this.identifier();
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 86) {
					{
						this.state = 575;
						this.arguments();
					}
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classBodyDeclaration(t: number): ClassBodyDeclarationContext {
		const localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this, this._ctx, this.state, t);
		this.enterRule(localctx, 46, GroovyParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 583;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === 48) {
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
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 586;
					this.memberDeclaration(localctx.t);
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public memberDeclaration(t: number): MemberDeclarationContext {
		const localctx: MemberDeclarationContext = new MemberDeclarationContext(this, this._ctx, this.state, t);
		this.enterRule(localctx, 48, GroovyParser.RULE_memberDeclaration);
		try {
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 589;
					this.methodDeclaration(0, localctx.t);
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 590;
					this.fieldDeclaration();
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public methodDeclaration(t: number, ct: number): MethodDeclarationContext {
		const localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state, t, ct);
		this.enterRule(localctx, 50, GroovyParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 598;
				this.modifiersOpt();
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 97) {
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
						this.returnType(localctx.ct);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		const localctx: CompactConstructorDeclarationContext = new CompactConstructorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, GroovyParser.RULE_compactConstructorDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 627;
				this.methodName();
				this.state = 628;
				this.nls();
				this.state = 629;
				this.methodBody();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public methodName(): MethodNameContext {
		const localctx: MethodNameContext = new MethodNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, GroovyParser.RULE_methodName);
		try {
			this.state = 633;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 7:
				case 9:
				case 10:
				case 12:
				case 17:
				case 41:
				case 45:
				case 47:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 631;
					this.identifier();
				}
					break;
				case 1:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 632;
					this.stringLiteral();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public returnType(ct: number): ReturnTypeContext {
		const localctx: ReturnTypeContext = new ReturnTypeContext(this, this._ctx, this.state, ct);
		this.enterRule(localctx, 56, GroovyParser.RULE_returnType);
		try {
			this.state = 637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 7:
				case 8:
				case 9:
				case 10:
				case 12:
				case 13:
				case 17:
				case 41:
				case 45:
				case 47:
				case 130:
				case 131:
				case 132:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 635;
					this.standardType();
				}
					break;
				case 58:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 636;
					this.match(GroovyParser.VOID);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		const localctx: FieldDeclarationContext = new FieldDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, GroovyParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 639;
				this.variableDeclaration(1);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		const localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, GroovyParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 641;
				this.variableDeclarator();
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
					this.state = 650;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		const localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, GroovyParser.RULE_variableDeclarator);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		const localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, GroovyParser.RULE_variableDeclaratorId);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 659;
				this.identifier();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		const localctx: VariableInitializerContext = new VariableInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, GroovyParser.RULE_variableInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 661;
				this.enhancedStatementExpression();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableInitializers(): VariableInitializersContext {
		const localctx: VariableInitializersContext = new VariableInitializersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, GroovyParser.RULE_variableInitializers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 663;
				this.variableInitializer();
				this.state = 671;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
				_la = this._input.LA(1);
				if (_la === 93) {
					{
						this.state = 675;
						this.match(GroovyParser.COMMA);
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public emptyDims(): EmptyDimsContext {
		const localctx: EmptyDimsContext = new EmptyDimsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, GroovyParser.RULE_emptyDims);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public emptyDimsOpt(): EmptyDimsOptContext {
		const localctx: EmptyDimsOptContext = new EmptyDimsOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, GroovyParser.RULE_emptyDimsOpt);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public standardType(): StandardTypeContext {
		const localctx: StandardTypeContext = new StandardTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, GroovyParser.RULE_standardType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 689;
				this.annotationsOpt();
				this.state = 692;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 13: {
						this.state = 690;
						this.primitiveType();
					}
						break;
					case 7:
					case 8:
					case 9:
					case 10:
					case 12:
					case 17:
					case 41:
					case 45:
					case 47:
					case 130:
					case 131: {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public type_(): TypeContext {
		const localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, GroovyParser.RULE_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 696;
				this.annotationsOpt();
				this.state = 702;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 13:
					case 58: {
						this.state = 699;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case 13: {
								this.state = 697;
								this.primitiveType();
							}
								break;
							case 58: {
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
					case 7:
					case 8:
					case 9:
					case 10:
					case 12:
					case 17:
					case 41:
					case 45:
					case 47:
					case 130:
					case 131: {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		const localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, GroovyParser.RULE_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				if (_la === 97) {
					{
						this.state = 710;
						this.typeArguments();
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public generalClassOrInterfaceType(): GeneralClassOrInterfaceTypeContext {
		const localctx: GeneralClassOrInterfaceTypeContext = new GeneralClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, GroovyParser.RULE_generalClassOrInterfaceType);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public standardClassOrInterfaceType(): StandardClassOrInterfaceTypeContext {
		const localctx: StandardClassOrInterfaceTypeContext = new StandardClassOrInterfaceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, GroovyParser.RULE_standardClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 717;
				this.qualifiedStandardClassName();
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 97) {
					{
						this.state = 718;
						this.typeArguments();
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		const localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, GroovyParser.RULE_primitiveType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 721;
				this.match(GroovyParser.BuiltInPrimitiveType);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		const localctx: TypeArgumentsContext = new TypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, GroovyParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 723;
				this.match(GroovyParser.LT);
				this.state = 724;
				this.nls();
				this.state = 725;
				this.typeArgument();
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
					this.state = 734;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 735;
				this.nls();
				this.state = 736;
				this.match(GroovyParser.GT);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		const localctx: TypeArgumentContext = new TypeArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, GroovyParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 63, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 738;
					this.type_();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 739;
					this.annotationsOpt();
					this.state = 740;
					this.match(GroovyParser.QUESTION);
					this.state = 745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === 27 || _la === 50) {
						{
							this.state = 741;
							_la = this._input.LA(1);
							if (!(_la === 27 || _la === 50)) {
								this._errHandler.recoverInline(this);
							} else {
								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 742;
							this.nls();
							this.state = 743;
							this.type_();
						}
					}

				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public annotatedQualifiedClassName(): AnnotatedQualifiedClassNameContext {
		const localctx: AnnotatedQualifiedClassNameContext = new AnnotatedQualifiedClassNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, GroovyParser.RULE_annotatedQualifiedClassName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 749;
				this.annotationsOpt();
				this.state = 750;
				this.qualifiedClassName();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public qualifiedClassNameList(): QualifiedClassNameListContext {
		const localctx: QualifiedClassNameListContext = new QualifiedClassNameListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, GroovyParser.RULE_qualifiedClassNameList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 752;
				this.annotatedQualifiedClassName();
				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
					this.state = 761;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		const localctx: FormalParametersContext = new FormalParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, GroovyParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 762;
				this.match(GroovyParser.LPAREN);
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268597120) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 131551) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 15) !== 0)) {
					{
						this.state = 763;
						this.formalParameterList();
					}
				}

				this.state = 766;
				this.rparen();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		const localctx: FormalParameterListContext = new FormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, GroovyParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				_la = this._input.LA(1);
				while (_la === 93) {
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
					this.state = 780;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public thisFormalParameter(): ThisFormalParameterContext {
		const localctx: ThisFormalParameterContext = new ThisFormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, GroovyParser.RULE_thisFormalParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 781;
				this.type_();
				this.state = 782;
				this.match(GroovyParser.THIS);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		const localctx: FormalParameterContext = new FormalParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, GroovyParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 784;
				this.variableModifiersOpt();
				this.state = 786;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 68, this._ctx)) {
					case 1: {
						this.state = 785;
						this.type_();
					}
						break;
				}
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 133) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		const localctx: MethodBodyContext = new MethodBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, GroovyParser.RULE_methodBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 799;
				this.block();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		const localctx: QualifiedNameContext = new QualifiedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, GroovyParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 801;
				this.qualifiedNameElement();
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public qualifiedNameElement(): QualifiedNameElementContext {
		const localctx: QualifiedNameElementContext = new QualifiedNameElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, GroovyParser.RULE_qualifiedNameElement);
		try {
			this.state = 814;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 72, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 809;
					this.identifier();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 810;
					this.match(GroovyParser.DEF);
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 811;
					this.match(GroovyParser.IN);
				}
					break;
				case 4:
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 812;
					this.match(GroovyParser.AS);
				}
					break;
				case 5:
					this.enterOuterAlt(localctx, 5);
				{
					this.state = 813;
					this.match(GroovyParser.TRAIT);
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public qualifiedNameElements(): QualifiedNameElementsContext {
		const localctx: QualifiedNameElementsContext = new QualifiedNameElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, GroovyParser.RULE_qualifiedNameElements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 821;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public qualifiedClassName(): QualifiedClassNameContext {
		const localctx: QualifiedClassNameContext = new QualifiedClassNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, GroovyParser.RULE_qualifiedClassName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 824;
				this.qualifiedNameElements();
				this.state = 825;
				this.identifier();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public qualifiedStandardClassName(): QualifiedStandardClassNameContext {
		const localctx: QualifiedStandardClassNameContext = new QualifiedStandardClassNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, GroovyParser.RULE_qualifiedStandardClassName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 827;
				this.qualifiedNameElements();
				this.state = 828;
				this.className();
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 94) {
					{
						{
							this.state = 829;
							this.match(GroovyParser.DOT);
							this.state = 830;
							this.className();
						}
					}
					this.state = 835;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, GroovyParser.RULE_literal);
		try {
			this.state = 841;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 61:
					localctx = new IntegerLiteralAltContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 836;
					this.match(GroovyParser.IntegerLiteral);
				}
					break;
				case 62:
					localctx = new FloatingPointLiteralAltContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 837;
					this.match(GroovyParser.FloatingPointLiteral);
				}
					break;
				case 1:
					localctx = new StringLiteralAltContext(this, localctx);
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 838;
					this.stringLiteral();
				}
					break;
				case 63:
					localctx = new BooleanLiteralAltContext(this, localctx);
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 839;
					this.match(GroovyParser.BooleanLiteral);
				}
					break;
				case 64:
					localctx = new NullLiteralAltContext(this, localctx);
					this.enterOuterAlt(localctx, 5);
				{
					this.state = 840;
					this.match(GroovyParser.NullLiteral);
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public gstring(): GstringContext {
		const localctx: GstringContext = new GstringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, GroovyParser.RULE_gstring);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 843;
				this.match(GroovyParser.GStringBegin);
				this.state = 844;
				this.gstringValue();
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 4) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public gstringValue(): GstringValueContext {
		const localctx: GstringValueContext = new GstringValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, GroovyParser.RULE_gstringValue);
		try {
			this.state = 856;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 7:
				case 9:
				case 10:
				case 12:
				case 17:
				case 41:
				case 45:
				case 47:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 854;
					this.gstringPath();
				}
					break;
				case 88:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 855;
					this.closure();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public gstringPath(): GstringPathContext {
		const localctx: GstringPathContext = new GstringPathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, GroovyParser.RULE_gstringPath);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 858;
				this.identifier();
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 5) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		const localctx: LambdaExpressionContext = new LambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, GroovyParser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public standardLambdaExpression(): StandardLambdaExpressionContext {
		const localctx: StandardLambdaExpressionContext = new StandardLambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, GroovyParser.RULE_standardLambdaExpression);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		const localctx: LambdaParametersContext = new LambdaParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, GroovyParser.RULE_lambdaParameters);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 877;
				this.formalParameters();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public standardLambdaParameters(): StandardLambdaParametersContext {
		const localctx: StandardLambdaParametersContext = new StandardLambdaParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, GroovyParser.RULE_standardLambdaParameters);
		try {
			this.state = 881;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 86:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 879;
					this.formalParameters();
				}
					break;
				case 7:
				case 9:
				case 10:
				case 12:
				case 17:
				case 41:
				case 45:
				case 47:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 880;
					this.variableDeclaratorId();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		const localctx: LambdaBodyContext = new LambdaBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, GroovyParser.RULE_lambdaBody);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 80, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 883;
					this.block();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 884;
					this.statementExpression();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public closure(): ClosureContext {
		const localctx: ClosureContext = new ClosureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, GroovyParser.RULE_closure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268597120) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 131551) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 15) !== 0)) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		const localctx: ClosureOrLambdaExpressionContext = new ClosureOrLambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, GroovyParser.RULE_closureOrLambdaExpression);
		try {
			this.state = 906;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 88:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 904;
					this.closure();
				}
					break;
				case 86:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 905;
					this.lambdaExpression();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public blockStatementsOpt(): BlockStatementsOptContext {
		const localctx: BlockStatementsOptContext = new BlockStatementsOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, GroovyParser.RULE_blockStatementsOpt);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		const localctx: BlockStatementsContext = new BlockStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, GroovyParser.RULE_blockStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 911;
				this.blockStatement();
				this.state = 917;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public annotationsOpt(): AnnotationsOptContext {
		const localctx: AnnotationsOptContext = new AnnotationsOptContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, GroovyParser.RULE_annotationsOpt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 132) {
					{
						this.state = 923;
						this.annotation();
						this.state = 929;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		const localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, GroovyParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public elementValues(): ElementValuesContext {
		const localctx: ElementValuesContext = new ElementValuesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, GroovyParser.RULE_elementValues);
		try {
			this.state = 949;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 92, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 947;
					this.elementValuePairs();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 948;
					this.elementValue();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public annotationName(): AnnotationNameContext {
		const localctx: AnnotationNameContext = new AnnotationNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, GroovyParser.RULE_annotationName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 951;
				this.qualifiedClassName();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		const localctx: ElementValuePairsContext = new ElementValuePairsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, GroovyParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 953;
				this.elementValuePair();
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		const localctx: ElementValuePairContext = new ElementValuePairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, GroovyParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public elementValuePairName(): ElementValuePairNameContext {
		const localctx: ElementValuePairNameContext = new ElementValuePairNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, GroovyParser.RULE_elementValuePairName);
		try {
			this.state = 969;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 94, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 967;
					this.identifier();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 968;
					this.keywords();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		const localctx: ElementValueContext = new ElementValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, GroovyParser.RULE_elementValue);
		try {
			this.state = 974;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 95, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 971;
					this.elementValueArrayInitializer();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 972;
					this.annotation();
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 973;
					this.expression(0);
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		const localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, GroovyParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
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
						if (_la === 93) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public block(): BlockContext {
		const localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, GroovyParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		const localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, GroovyParser.RULE_blockStatement);
		try {
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 100, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 999;
					this.localVariableDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1000;
					this.statement();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		const localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, GroovyParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1003;
				// eslint-disable-next-line no-extra-boolean-cast
				if (!(!SemanticPredicates.isInvalidLocalVariableDeclaration(this._input))) {
					// noinspection ExceptionCaughtLocallyJS
					throw this.createFailedPredicateException(' !SemanticPredicates.isInvalidLocalVariableDeclaration(this._input) ');
				}
				this.state = 1004;
				this.variableDeclaration(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableDeclaration(t: number): VariableDeclarationContext {
		const localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state, t);
		this.enterRule(localctx, 164, GroovyParser.RULE_variableDeclaration);
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 103, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1006;
					this.modifiers();
					this.state = 1007;
					this.nls();
					this.state = 1018;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
						case 7:
						case 8:
						case 9:
						case 10:
						case 12:
						case 13:
						case 17:
						case 41:
						case 45:
						case 47:
						case 58:
						case 130:
						case 131:
						case 132: {
							this.state = 1009;
							this._errHandler.sync(this);
							switch (this._interp.adaptivePredict(this._input, 101, this._ctx)) {
								case 1: {
									this.state = 1008;
									this.type_();
								}
									break;
							}
							this.state = 1011;
							this.variableDeclarators();
						}
							break;
						case 86: {
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
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1020;
					this.type_();
					this.state = 1021;
					this.variableDeclarators();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeNamePairs(): TypeNamePairsContext {
		const localctx: TypeNamePairsContext = new TypeNamePairsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, GroovyParser.RULE_typeNamePairs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1025;
				this.match(GroovyParser.LPAREN);
				this.state = 1026;
				this.typeNamePair();
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeNamePair(): TypeNamePairContext {
		const localctx: TypeNamePairContext = new TypeNamePairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, GroovyParser.RULE_typeNamePair);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1037;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 105, this._ctx)) {
					case 1: {
						this.state = 1036;
						this.type_();
					}
						break;
				}
				this.state = 1039;
				this.variableDeclaratorId();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public variableNames(): VariableNamesContext {
		const localctx: VariableNamesContext = new VariableNamesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, GroovyParser.RULE_variableNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				} while (_la === 93);
				this.state = 1049;
				this.rparen();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public conditionalStatement(): ConditionalStatementContext {
		const localctx: ConditionalStatementContext = new ConditionalStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, GroovyParser.RULE_conditionalStatement);
		try {
			this.state = 1053;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 31:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1051;
					this.ifElseStatement();
				}
					break;
				case 51:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1052;
					this.switchStatement();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public ifElseStatement(): IfElseStatementContext {
		const localctx: IfElseStatementContext = new IfElseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, GroovyParser.RULE_ifElseStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1055;
				this.match(GroovyParser.IF);
				this.state = 1056;
				this.expressionInPar();
				this.state = 1057;
				this.nls();
				this.state = 1058;
				localctx._tb = this.statement();
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
						localctx._fb = this.statement();
					}
						break;
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		const localctx: SwitchStatementContext = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, GroovyParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				if (_la === 18 || _la === 23) {
					{
						this.state = 1075;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
								{
									this.state = 1074;
									this.switchBlockStatementGroup();
								}
							}
							this.state = 1077;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === 18 || _la === 23);
						this.state = 1079;
						this.nls();
					}
				}

				this.state = 1083;
				this.match(GroovyParser.RBRACE);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let localctx: LoopStatementContext = new LoopStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, GroovyParser.RULE_loopStatement);
		try {
			this.state = 1104;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 30:
					localctx = new ForStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
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
				case 60:
					localctx = new WhileStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
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
				case 24:
					localctx = new DoWhileStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 3);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		const localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, GroovyParser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1106;
				this.match(GroovyParser.CONTINUE);
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 136832) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 81) !== 0) || _la === 130 || _la === 131) {
					{
						this.state = 1107;
						this.identifier();
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		const localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, GroovyParser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1110;
				this.match(GroovyParser.BREAK);
				this.state = 1112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 136832) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 81) !== 0) || _la === 130 || _la === 131) {
					{
						this.state = 1111;
						this.identifier();
					}
				}

			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		const localctx: YieldStatementContext = new YieldStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, GroovyParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1114;
				this.match(GroovyParser.YIELD);
				this.state = 1115;
				this.expression(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public tryCatchStatement(): TryCatchStatementContext {
		const localctx: TryCatchStatementContext = new TryCatchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, GroovyParser.RULE_tryCatchStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1117;
				this.match(GroovyParser.TRY);
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === 86) {
					{
						this.state = 1118;
						this.resources();
					}
				}

				this.state = 1121;
				this.nls();
				this.state = 1122;
				this.block();
				this.state = 1128;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		const localctx: AssertStatementContext = new AssertStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, GroovyParser.RULE_assertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1136;
				this.match(GroovyParser.ASSERT);
				this.state = 1137;
				localctx._ce = this.expression(0);
				this.state = 1143;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 118, this._ctx)) {
					case 1: {
						this.state = 1138;
						this.nls();
						this.state = 1139;
						_la = this._input.LA(1);
						if (!(_la === 93 || _la === 101)) {
							this._errHandler.recoverInline(this);
						} else {
							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1140;
						this.nls();
						this.state = 1141;
						localctx._me = this.expression(0);
					}
						break;
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, GroovyParser.RULE_statement);
		try {
			this.state = 1173;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 120, this._ctx)) {
				case 1:
					localctx = new BlockStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1145;
					this.block();
				}
					break;
				case 2:
					localctx = new ConditionalStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1146;
					this.conditionalStatement();
				}
					break;
				case 3:
					localctx = new LoopStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1147;
					this.loopStatement();
				}
					break;
				case 4:
					localctx = new TryCatchStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 1148;
					this.tryCatchStatement();
				}
					break;
				case 5:
					localctx = new SynchronizedStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 5);
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
					localctx = new ReturnStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 6);
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
					localctx = new ThrowStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 7);
				{
					this.state = 1158;
					this.match(GroovyParser.THROW);
					this.state = 1159;
					this.expression(0);
				}
					break;
				case 8:
					localctx = new BreakStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 8);
				{
					this.state = 1160;
					this.breakStatement();
				}
					break;
				case 9:
					localctx = new ContinueStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 9);
				{
					this.state = 1161;
					this.continueStatement();
				}
					break;
				case 10:
					localctx = new YieldStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 10);
				{
					this.state = 1162;
					if (!(this._inSwitchExpressionLevel > 0)) {
						// noinspection ExceptionCaughtLocallyJS
						throw this.createFailedPredicateException(' this._inSwitchExpressionLevel > 0 ');
					}
					this.state = 1163;
					this.yieldStatement();
				}
					break;
				case 11:
					localctx = new LabeledStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 11);
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
					localctx = new AssertStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 12);
				{
					this.state = 1169;
					this.assertStatement();
				}
					break;
				case 13:
					localctx = new LocalVariableDeclarationStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 13);
				{
					this.state = 1170;
					this.localVariableDeclaration();
				}
					break;
				case 14:
					localctx = new ExpressionStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 14);
				{
					this.state = 1171;
					this.statementExpression();
				}
					break;
				case 15:
					localctx = new EmptyStmtAltContext(this, localctx);
					this.enterOuterAlt(localctx, 15);
				{
					this.state = 1172;
					this.match(GroovyParser.SEMI);
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		const localctx: CatchClauseContext = new CatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, GroovyParser.RULE_catchClause);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		const localctx: CatchTypeContext = new CatchTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, GroovyParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1186;
				this.qualifiedClassName();
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 115) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		const localctx: FinallyBlockContext = new FinallyBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, GroovyParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1194;
				this.match(GroovyParser.FINALLY);
				this.state = 1195;
				this.nls();
				this.state = 1196;
				this.block();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public resources(): ResourcesContext {
		const localctx: ResourcesContext = new ResourcesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, GroovyParser.RULE_resources);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				if (_la === 92 || _la === 135) {
					{
						this.state = 1201;
						this.sep();
					}
				}

				this.state = 1204;
				this.rparen();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public resourceList(): ResourceListContext {
		const localctx: ResourceListContext = new ResourceListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, GroovyParser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1206;
				this.resource();
				this.state = 1212;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 124, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public resource(): ResourceContext {
		const localctx: ResourceContext = new ResourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, GroovyParser.RULE_resource);
		try {
			this.state = 1217;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 125, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1215;
					this.localVariableDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1216;
					this.expression(0);
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		const localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, GroovyParser.RULE_switchBlockStatementGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1219;
				this.switchLabel();
				this.state = 1225;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		const localctx: SwitchLabelContext = new SwitchLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, GroovyParser.RULE_switchLabel);
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 18:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1231;
					this.match(GroovyParser.CASE);
					this.state = 1232;
					this.expression(0);
					this.state = 1233;
					this.match(GroovyParser.COLON);
				}
					break;
				case 23:
					this.enterOuterAlt(localctx, 2);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public forControl(): ForControlContext {
		const localctx: ForControlContext = new ForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, GroovyParser.RULE_forControl);
		try {
			this.state = 1241;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 128, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1239;
					this.enhancedForControl();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1240;
					this.classicalForControl();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		const localctx: EnhancedForControlContext = new EnhancedForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, GroovyParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1243;
				this.variableModifiersOpt();
				this.state = 1245;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 129, this._ctx)) {
					case 1: {
						this.state = 1244;
						this.type_();
					}
						break;
				}
				this.state = 1247;
				this.variableDeclaratorId();
				this.state = 1248;
				_la = this._input.LA(1);
				if (!(_la === 9 || _la === 101)) {
					this._errHandler.recoverInline(this);
				} else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1249;
				this.expression(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public classicalForControl(): ClassicalForControlContext {
		const localctx: ClassicalForControlContext = new ClassicalForControlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, GroovyParser.RULE_classicalForControl);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public forInit(): ForInitContext {
		const localctx: ForInitContext = new ForInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, GroovyParser.RULE_forInit);
		try {
			this.state = 1264;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 133, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1262;
					this.localVariableDeclaration();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1263;
					this.expressionList(false);
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		const localctx: ForUpdateContext = new ForUpdateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, GroovyParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1266;
				this.expressionList(false);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public castParExpression(): CastParExpressionContext {
		const localctx: CastParExpressionContext = new CastParExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, GroovyParser.RULE_castParExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1268;
				this.match(GroovyParser.LPAREN);
				this.state = 1269;
				this.type_();
				this.state = 1270;
				this.rparen();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		const localctx: ParExpressionContext = new ParExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, GroovyParser.RULE_parExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1272;
				this.expressionInPar();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public expressionInPar(): ExpressionInParContext {
		const localctx: ExpressionInParContext = new ExpressionInParContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, GroovyParser.RULE_expressionInPar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1274;
				this.match(GroovyParser.LPAREN);
				this.state = 1275;
				this.enhancedStatementExpression();
				this.state = 1276;
				this.rparen();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public expressionList(canSpread: boolean): ExpressionListContext {
		const localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state, canSpread);
		this.enterRule(localctx, 224, GroovyParser.RULE_expressionList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1278;
				this.expressionListElement(localctx.canSpread);
				this.state = 1285;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 1279;
								this.match(GroovyParser.COMMA);
								this.state = 1280;
								this.nls();
								this.state = 1281;
								this.expressionListElement(localctx.canSpread);
							}
						}
					}
					this.state = 1287;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public expressionListElement(canSpread: boolean): ExpressionListElementContext {
		const localctx: ExpressionListElementContext = new ExpressionListElementContext(this, this._ctx, this.state, canSpread);
		this.enterRule(localctx, 226, GroovyParser.RULE_expressionListElement);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		const localctx: EnhancedStatementExpressionContext = new EnhancedStatementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, GroovyParser.RULE_enhancedStatementExpression);
		try {
			this.state = 1295;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 136, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1293;
					this.statementExpression();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1294;
					this.standardLambdaExpression();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let localctx: StatementExpressionContext = new StatementExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, GroovyParser.RULE_statementExpression);
		try {
			localctx = new CommandExprAltContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1297;
				this.commandExpression();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		const localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, GroovyParser.RULE_postfixExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1299;
				this.pathExpression();
				this.state = 1301;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 137, this._ctx)) {
					case 1: {
						this.state = 1300;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === 108 || _la === 109)) {
							localctx._op = this._errHandler.recoverInline(this);
						} else {
							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
						break;
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public switchExpression(): SwitchExpressionContext {
		const localctx: SwitchExpressionContext = new SwitchExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, GroovyParser.RULE_switchExpression);

		this._inSwitchExpressionLevel++;

		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				_la = this._input.LA(1);
				while (_la === 18 || _la === 23) {
					{
						{
							this.state = 1308;
							this.switchBlockStatementExpressionGroup();
						}
					}
					this.state = 1313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1314;
				this.nls();
				this.state = 1315;
				this.match(GroovyParser.RBRACE);
			}
			this._ctx.stop = this._input.LT(-1);

			this._inSwitchExpressionLevel--;

		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public switchBlockStatementExpressionGroup(): SwitchBlockStatementExpressionGroupContext {
		const localctx: SwitchBlockStatementExpressionGroupContext = new SwitchBlockStatementExpressionGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, GroovyParser.RULE_switchBlockStatementExpressionGroup);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1324;
				this.blockStatements();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public switchExpressionLabel(): SwitchExpressionLabelContext {
		const localctx: SwitchExpressionLabelContext = new SwitchExpressionLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, GroovyParser.RULE_switchExpressionLabel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1329;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 18: {
						this.state = 1326;
						this.match(GroovyParser.CASE);
						this.state = 1327;
						this.expressionList(true);
					}
						break;
					case 23: {
						this.state = 1328;
						this.match(GroovyParser.DEFAULT);
					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
				this.state = 1331;
				localctx._ac = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === 83 || _la === 101)) {
					localctx._ac = this._errHandler.recoverInline(this);
				} else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		const _parentctx: ParserRuleContext = this._ctx;
		const _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		const _startState: number = 240;
		this.enterRecursionRule(localctx, 240, GroovyParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1351;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 141, this._ctx)) {
					case 1: {
						localctx = new CastExprAltContext(this, localctx);
						this._ctx = localctx;
						_prevctx = localctx;

						this.state = 1334;
						this.castParExpression();
						this.state = 1335;
						this.castOperandExpression();
					}
						break;
					case 2: {
						localctx = new PostfixExprAltContext(this, localctx);
						this._ctx = localctx;
						_prevctx = localctx;
						this.state = 1337;
						this.postfixExpression();
					}
						break;
					case 3: {
						localctx = new SwitchExprAltContext(this, localctx);
						this._ctx = localctx;
						_prevctx = localctx;
						this.state = 1338;
						this.switchExpression();
					}
						break;
					case 4: {
						localctx = new UnaryNotExprAltContext(this, localctx);
						this._ctx = localctx;
						_prevctx = localctx;
						this.state = 1339;
						_la = this._input.LA(1);
						if (!(_la === 98 || _la === 99)) {
							this._errHandler.recoverInline(this);
						} else {
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
						localctx = new UnaryAddExprAltContext(this, localctx);
						this._ctx = localctx;
						_prevctx = localctx;
						this.state = 1343;
						(localctx as UnaryAddExprAltContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 15) !== 0))) {
							(localctx as UnaryAddExprAltContext)._op = this._errHandler.recoverInline(this);
						} else {
							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1344;
						this.expression(16);
					}
						break;
					case 6: {
						localctx = new MultipleAssignmentExprAltContext(this, localctx);
						this._ctx = localctx;
						_prevctx = localctx;
						this.state = 1345;
						(localctx as MultipleAssignmentExprAltContext)._left = this.variableNames();
						this.state = 1346;
						this.nls();
						this.state = 1347;
						(localctx as MultipleAssignmentExprAltContext)._op = this.match(GroovyParser.ASSIGN);
						this.state = 1348;
						this.nls();
						this.state = 1349;
						(localctx as MultipleAssignmentExprAltContext)._right = this.statementExpression();
					}
						break;
				}
				this._ctx.stop = this._input.LT(-1);
				this.state = 1463;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = localctx;
						{
							this.state = 1461;
							this._errHandler.sync(this);
							switch (this._interp.adaptivePredict(this._input, 145, this._ctx)) {
								case 1: {
									localctx = new PowerExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as PowerExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1353;
									if (!(this.precpred(this._ctx, 17))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 17)');
									}
									this.state = 1354;
									(localctx as PowerExprAltContext)._op = this.match(GroovyParser.POWER);
									this.state = 1355;
									this.nls();
									this.state = 1356;
									(localctx as PowerExprAltContext)._right = this.expression(18);
								}
									break;
								case 2: {
									localctx = new MultiplicativeExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as MultiplicativeExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1358;
									if (!(this.precpred(this._ctx, 15))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 15)');
									}
									this.state = 1359;
									this.nls();
									this.state = 1360;
									(localctx as MultiplicativeExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 35) !== 0))) {
										(localctx as MultiplicativeExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1361;
									this.nls();
									this.state = 1362;
									(localctx as MultiplicativeExprAltContext)._right = this.expression(16);
								}
									break;
								case 3: {
									localctx = new AdditiveExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as AdditiveExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1364;
									if (!(this.precpred(this._ctx, 14))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 14)');
									}
									this.state = 1365;
									(localctx as AdditiveExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la === 110 || _la === 111)) {
										(localctx as AdditiveExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1366;
									this.nls();
									this.state = 1367;
									(localctx as AdditiveExprAltContext)._right = this.expression(15);
								}
									break;
								case 4: {
									localctx = new ShiftExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as ShiftExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1369;
									if (!(this.precpred(this._ctx, 13))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 13)');
									}
									this.state = 1370;
									this.nls();
									this.state = 1381;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case 96:
										case 97: {
											this.state = 1378;
											this._errHandler.sync(this);
											switch (this._interp.adaptivePredict(this._input, 142, this._ctx)) {
												case 1: {
													this.state = 1371;
													(localctx as ShiftExprAltContext)._dlOp = this.match(GroovyParser.LT);
													this.state = 1372;
													this.match(GroovyParser.LT);
												}
													break;
												case 2: {
													this.state = 1373;
													(localctx as ShiftExprAltContext)._tgOp = this.match(GroovyParser.GT);
													this.state = 1374;
													this.match(GroovyParser.GT);
													this.state = 1375;
													this.match(GroovyParser.GT);
												}
													break;
												case 3: {
													this.state = 1376;
													(localctx as ShiftExprAltContext)._dgOp = this.match(GroovyParser.GT);
													this.state = 1377;
													this.match(GroovyParser.GT);
												}
													break;
											}
										}
											break;
										case 65:
										case 66:
										case 67:
										case 68: {
											this.state = 1380;
											(localctx as ShiftExprAltContext)._rangeOp = this._input.LT(1);
											_la = this._input.LA(1);
											if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 15) !== 0))) {
												(localctx as ShiftExprAltContext)._rangeOp = this._errHandler.recoverInline(this);
											} else {
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
									(localctx as ShiftExprAltContext)._right = this.expression(14);
								}
									break;
								case 5: {
									localctx = new RelationalExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as RelationalExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1386;
									if (!(this.precpred(this._ctx, 11))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
									}
									this.state = 1387;
									this.nls();
									this.state = 1388;
									(localctx as RelationalExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la === 9 || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 792577) !== 0))) {
										(localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1389;
									this.nls();
									this.state = 1390;
									(localctx as RelationalExprAltContext)._right = this.expression(12);
								}
									break;
								case 6: {
									localctx = new EqualityExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as EqualityExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1392;
									if (!(this.precpred(this._ctx, 10))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
									}
									this.state = 1393;
									this.nls();
									this.state = 1394;
									(localctx as EqualityExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 37748743) !== 0))) {
										(localctx as EqualityExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1395;
									this.nls();
									this.state = 1396;
									(localctx as EqualityExprAltContext)._right = this.expression(11);
								}
									break;
								case 7: {
									localctx = new RegexExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as RegexExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1398;
									if (!(this.precpred(this._ctx, 9))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
									}
									this.state = 1399;
									this.nls();
									this.state = 1400;
									(localctx as RegexExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la === 76 || _la === 77)) {
										(localctx as RegexExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1401;
									this.nls();
									this.state = 1402;
									(localctx as RegexExprAltContext)._right = this.expression(10);
								}
									break;
								case 8: {
									localctx = new AndExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as AndExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1404;
									if (!(this.precpred(this._ctx, 8))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 8)');
									}
									this.state = 1405;
									this.nls();
									this.state = 1406;
									(localctx as AndExprAltContext)._op = this.match(GroovyParser.BITAND);
									this.state = 1407;
									this.nls();
									this.state = 1408;
									(localctx as AndExprAltContext)._right = this.expression(9);
								}
									break;
								case 9: {
									localctx = new ExclusiveOrExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as ExclusiveOrExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1410;
									if (!(this.precpred(this._ctx, 7))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
									}
									this.state = 1411;
									this.nls();
									this.state = 1412;
									(localctx as ExclusiveOrExprAltContext)._op = this.match(GroovyParser.XOR);
									this.state = 1413;
									this.nls();
									this.state = 1414;
									(localctx as ExclusiveOrExprAltContext)._right = this.expression(8);
								}
									break;
								case 10: {
									localctx = new InclusiveOrExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as InclusiveOrExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1416;
									if (!(this.precpred(this._ctx, 6))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
									}
									this.state = 1417;
									this.nls();
									this.state = 1418;
									(localctx as InclusiveOrExprAltContext)._op = this.match(GroovyParser.BITOR);
									this.state = 1419;
									this.nls();
									this.state = 1420;
									(localctx as InclusiveOrExprAltContext)._right = this.expression(7);
								}
									break;
								case 11: {
									localctx = new LogicalAndExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as LogicalAndExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1422;
									if (!(this.precpred(this._ctx, 5))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
									}
									this.state = 1423;
									this.nls();
									this.state = 1424;
									(localctx as LogicalAndExprAltContext)._op = this.match(GroovyParser.AND);
									this.state = 1425;
									this.nls();
									this.state = 1426;
									(localctx as LogicalAndExprAltContext)._right = this.expression(6);
								}
									break;
								case 12: {
									localctx = new LogicalOrExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as LogicalOrExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1428;
									if (!(this.precpred(this._ctx, 4))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
									}
									this.state = 1429;
									this.nls();
									this.state = 1430;
									(localctx as LogicalOrExprAltContext)._op = this.match(GroovyParser.OR);
									this.state = 1431;
									this.nls();
									this.state = 1432;
									(localctx as LogicalOrExprAltContext)._right = this.expression(5);
								}
									break;
								case 13: {
									localctx = new ConditionalExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as ConditionalExprAltContext)._con = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1434;
									if (!(this.precpred(this._ctx, 3))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
									}
									this.state = 1435;
									this.nls();
									this.state = 1445;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case 100: {
											this.state = 1436;
											this.match(GroovyParser.QUESTION);
											this.state = 1437;
											this.nls();
											this.state = 1438;
											(localctx as ConditionalExprAltContext)._tb = this.expression(0);
											this.state = 1439;
											this.nls();
											this.state = 1440;
											this.match(GroovyParser.COLON);
											this.state = 1441;
											this.nls();
										}
											break;
										case 73: {
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
									(localctx as ConditionalExprAltContext)._fb = this.expression(3);
								}
									break;
								case 14: {
									localctx = new RelationalExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as RelationalExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1449;
									if (!(this.precpred(this._ctx, 12))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 12)');
									}
									this.state = 1450;
									this.nls();
									this.state = 1451;
									(localctx as RelationalExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la === 7 || _la === 35 || _la === 84)) {
										(localctx as RelationalExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1452;
									this.nls();
									this.state = 1453;
									this.type_();
								}
									break;
								case 15: {
									localctx = new AssignmentExprAltContext(this, new ExpressionContext(this, _parentctx, _parentState));
									(localctx as AssignmentExprAltContext)._left = _prevctx;
									this.pushNewRecursionContext(localctx, _startState, GroovyParser.RULE_expression);
									this.state = 1455;
									if (!(this.precpred(this._ctx, 1))) {
										// noinspection ExceptionCaughtLocallyJS
										throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
									}
									this.state = 1456;
									this.nls();
									this.state = 1457;
									(localctx as AssignmentExprAltContext)._op = this._input.LT(1);
									_la = this._input.LA(1);
									if (!(_la === 79 || _la === 95 || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4095) !== 0))) {
										(localctx as AssignmentExprAltContext)._op = this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1458;
									this.nls();
									this.state = 1459;
									(localctx as AssignmentExprAltContext)._right = this.enhancedStatementExpression();
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	// @RuleVersion(0)
	public castOperandExpression(): CastOperandExpressionContext {
		const localctx: CastOperandExpressionContext = new CastOperandExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, GroovyParser.RULE_castOperandExpression);
		let _la: number;
		try {
			this.state = 1476;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 147, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1466;
					this.castParExpression();
					this.state = 1467;
					this.castOperandExpression();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1469;
					this.postfixExpression();
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1470;
					_la = this._input.LA(1);
					if (!(_la === 98 || _la === 99)) {
						this._errHandler.recoverInline(this);
					} else {
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
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 1474;
					localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 15) !== 0))) {
						localctx._op = this._errHandler.recoverInline(this);
					} else {
						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1475;
					this.castOperandExpression();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public commandExpression(): CommandExpressionContext {
		const localctx: CommandExpressionContext = new CommandExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, GroovyParser.RULE_commandExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1478;
				localctx._expression = this.expression(0);
				this.state = 1482;
				this._errHandler.sync(this);
				switch (this._interp.adaptivePredict(this._input, 148, this._ctx)) {
					case 1: {
						this.state = 1479;
						// eslint-disable-next-line  no-extra-boolean-cast
						if (!(!SemanticPredicates.isFollowingArgumentsOrClosure(localctx._expression))) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' !SemanticPredicates.isFollowingArgumentsOrClosure($expression.ctx) ');
						}
						this.state = 1480;
						this.argumentList();
					}
						break;
					case 2:
						// tslint:disable-next-line:no-empty
					{
						// do nothing
					}
						break;
				}
				this.state = 1487;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public commandArgument(): CommandArgumentContext {
		const localctx: CommandArgumentContext = new CommandArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, GroovyParser.RULE_commandArgument);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
						break;
					case 2: {
						this.state = 1496;
						this.argumentList();
					}
						break;
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public pathExpression(): PathExpressionContext {
		const localctx: PathExpressionContext = new PathExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, GroovyParser.RULE_pathExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
						if (!(this._input.LT(2).type === GroovyLexer.DOT)) {
							// noinspection ExceptionCaughtLocallyJS
							throw this.createFailedPredicateException(' this._input.LT(2).type === GroovyLexer.DOT ');
						}
						this.state = 1501;
						this.match(GroovyParser.STATIC);
					}
						break;
				}
				this.state = 1509;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 1504;
								localctx._pathElement = this.pathElement();
								localctx.t = localctx._pathElement.t;
							}
						}
					}
					this.state = 1511;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public pathElement(): PathElementContext {
		const localctx: PathElementContext = new PathElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, GroovyParser.RULE_pathElement);
		let _la: number;
		try {
			this.state = 1548;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 157, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
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
							localctx.t = 6;
						}
							break;
						case 2: {
							this.state = 1529;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
								case 69:
								case 70:
								case 72:
								case 94: {
									this.state = 1519;
									_la = this._input.LA(1);
									if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 33554443) !== 0))) {
										this._errHandler.recoverInline(this);
									} else {
										this._errHandler.reportMatch(this);
										this.consume();
									}
									this.state = 1520;
									this.nls();
									this.state = 1523;
									this._errHandler.sync(this);
									switch (this._input.LA(1)) {
										case 132: {
											this.state = 1521;
											this.match(GroovyParser.AT);
										}
											break;
										case 97: {
											this.state = 1522;
											this.nonWildcardTypeArguments();
										}
											break;
										case 1:
										case 2:
										case 7:
										case 8:
										case 9:
										case 10:
										case 11:
										case 12:
										case 13:
										case 14:
										case 15:
										case 16:
										case 17:
										case 18:
										case 19:
										case 20:
										case 21:
										case 22:
										case 23:
										case 24:
										case 25:
										case 26:
										case 27:
										case 28:
										case 29:
										case 30:
										case 31:
										case 32:
										case 33:
										case 34:
										case 35:
										case 36:
										case 37:
										case 38:
										case 39:
										case 40:
										case 41:
										case 42:
										case 43:
										case 44:
										case 45:
										case 46:
										case 47:
										case 48:
										case 49:
										case 50:
										case 51:
										case 52:
										case 53:
										case 54:
										case 55:
										case 56:
										case 57:
										case 58:
										case 59:
										case 60:
										case 63:
										case 64:
										case 86:
										case 130:
										case 131:
											break;
										default:
											break;
									}
								}
									break;
								case 74: {
									this.state = 1525;
									this.match(GroovyParser.METHOD_POINTER);
									this.state = 1526;
									this.nls();
								}
									break;
								case 75: {
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
							localctx.t = 1;
						}
							break;
						case 3: {
							this.state = 1534;
							this.closureOrLambdaExpression();
							localctx.t = 3;
						}
							break;
					}
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1539;
					this.arguments();
					localctx.t = 2;
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1542;
					this.indexPropertyArgs();
					localctx.t = 4;
				}
					break;
				case 4:
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 1545;
					this.namedPropertyArgs();
					localctx.t = 5;
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namePart(): NamePartContext {
		const localctx: NamePartContext = new NamePartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, GroovyParser.RULE_namePart);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public dynamicMemberName(): DynamicMemberNameContext {
		const localctx: DynamicMemberNameContext = new DynamicMemberNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, GroovyParser.RULE_dynamicMemberName);
		try {
			this.state = 1558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 86:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1556;
					this.parExpression();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1557;
					this.gstring();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public indexPropertyArgs(): IndexPropertyArgsContext {
		const localctx: IndexPropertyArgsContext = new IndexPropertyArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, GroovyParser.RULE_indexPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1560;
				_la = this._input.LA(1);
				if (!(_la === 71 || _la === 90)) {
					this._errHandler.recoverInline(this);
				} else {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedPropertyArgs(): NamedPropertyArgsContext {
		const localctx: NamedPropertyArgsContext = new NamedPropertyArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, GroovyParser.RULE_namedPropertyArgs);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1566;
				_la = this._input.LA(1);
				if (!(_la === 71 || _la === 90)) {
					this._errHandler.recoverInline(this);
				} else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1569;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 1:
					case 2:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					case 18:
					case 19:
					case 20:
					case 21:
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 28:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 39:
					case 40:
					case 41:
					case 42:
					case 43:
					case 44:
					case 45:
					case 46:
					case 47:
					case 48:
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 86:
					case 90:
					case 112:
					case 130:
					case 131: {
						this.state = 1567;
						this.namedPropertyArgList();
					}
						break;
					case 101: {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let localctx: PrimaryContext = new PrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, GroovyParser.RULE_primary);
		try {
			this.state = 1590;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 163, this._ctx)) {
				case 1:
					localctx = new IdentifierPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 1);
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
					localctx = new LiteralPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1577;
					this.literal();
				}
					break;
				case 3:
					localctx = new GstringPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1578;
					this.gstring();
				}
					break;
				case 4:
					localctx = new NewPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 4);
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
					localctx = new ThisPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 5);
				{
					this.state = 1583;
					this.match(GroovyParser.THIS);
				}
					break;
				case 6:
					localctx = new SuperPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 6);
				{
					this.state = 1584;
					this.match(GroovyParser.SUPER);
				}
					break;
				case 7:
					localctx = new ParenPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 7);
				{
					this.state = 1585;
					this.parExpression();
				}
					break;
				case 8:
					localctx = new ClosureOrLambdaExpressionPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 8);
				{
					this.state = 1586;
					this.closureOrLambdaExpression();
				}
					break;
				case 9:
					localctx = new ListPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 9);
				{
					this.state = 1587;
					this.list();
				}
					break;
				case 10:
					localctx = new MapPrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 10);
				{
					this.state = 1588;
					this.map();
				}
					break;
				case 11:
					localctx = new BuiltInTypePrmrAltContext(this, localctx);
					this.enterOuterAlt(localctx, 11);
				{
					this.state = 1589;
					this.builtInType();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedPropertyArgPrimary(): NamedPropertyArgPrimaryContext {
		const localctx: NamedPropertyArgPrimaryContext = new NamedPropertyArgPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, GroovyParser.RULE_namedPropertyArgPrimary);
		try {
			this.state = 1598;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 164, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1592;
					this.identifier();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1593;
					this.literal();
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1594;
					this.gstring();
				}
					break;
				case 4:
					this.enterOuterAlt(localctx, 4);
				{
					this.state = 1595;
					this.parExpression();
				}
					break;
				case 5:
					this.enterOuterAlt(localctx, 5);
				{
					this.state = 1596;
					this.list();
				}
					break;
				case 6:
					this.enterOuterAlt(localctx, 6);
				{
					this.state = 1597;
					this.map();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedArgPrimary(): NamedArgPrimaryContext {
		const localctx: NamedArgPrimaryContext = new NamedArgPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, GroovyParser.RULE_namedArgPrimary);
		try {
			this.state = 1603;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 7:
				case 9:
				case 10:
				case 12:
				case 17:
				case 41:
				case 45:
				case 47:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1600;
					this.identifier();
				}
					break;
				case 1:
				case 61:
				case 62:
				case 63:
				case 64:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1601;
					this.literal();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1602;
					this.gstring();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public commandPrimary(): CommandPrimaryContext {
		const localctx: CommandPrimaryContext = new CommandPrimaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, GroovyParser.RULE_commandPrimary);
		try {
			this.state = 1608;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 7:
				case 9:
				case 10:
				case 12:
				case 17:
				case 41:
				case 45:
				case 47:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1605;
					this.identifier();
				}
					break;
				case 1:
				case 61:
				case 62:
				case 63:
				case 64:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1606;
					this.literal();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1607;
					this.gstring();
				}
					break;
				default:
					// noinspection ExceptionCaughtLocallyJS
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public list(): ListContext {
		const localctx: ListContext = new ListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, GroovyParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				if (_la === 93) {
					{
						this.state = 1614;
						this.match(GroovyParser.COMMA);
					}
				}

				this.state = 1617;
				this.match(GroovyParser.RBRACK);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public map(): MapContext {
		const localctx: MapContext = new MapContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, GroovyParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1619;
				this.match(GroovyParser.LBRACK);
				this.state = 1625;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 1:
					case 2:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
					case 17:
					case 18:
					case 19:
					case 20:
					case 21:
					case 22:
					case 23:
					case 24:
					case 25:
					case 26:
					case 27:
					case 28:
					case 29:
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 38:
					case 39:
					case 40:
					case 41:
					case 42:
					case 43:
					case 44:
					case 45:
					case 46:
					case 47:
					case 48:
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 86:
					case 88:
					case 90:
					case 112:
					case 130:
					case 131: {
						this.state = 1620;
						this.mapEntryList();
						this.state = 1622;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === 93) {
							{
								this.state = 1621;
								this.match(GroovyParser.COMMA);
							}
						}

					}
						break;
					case 101: {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public mapEntryList(): MapEntryListContext {
		const localctx: MapEntryListContext = new MapEntryListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, GroovyParser.RULE_mapEntryList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1629;
				this.mapEntry();
				this.state = 1634;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 171, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedPropertyArgList(): NamedPropertyArgListContext {
		const localctx: NamedPropertyArgListContext = new NamedPropertyArgListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, GroovyParser.RULE_namedPropertyArgList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1637;
				this.namedPropertyArg();
				this.state = 1642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === 93) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public mapEntry(): MapEntryContext {
		const localctx: MapEntryContext = new MapEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, GroovyParser.RULE_mapEntry);
		try {
			this.state = 1655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 86:
				case 88:
				case 90:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
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
				case 112:
					this.enterOuterAlt(localctx, 2);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedPropertyArg(): NamedPropertyArgContext {
		const localctx: NamedPropertyArgContext = new NamedPropertyArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, GroovyParser.RULE_namedPropertyArg);
		try {
			this.state = 1667;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 86:
				case 90:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
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
				case 112:
					this.enterOuterAlt(localctx, 2);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedArg(): NamedArgContext {
		const localctx: NamedArgContext = new NamedArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, GroovyParser.RULE_namedArg);
		try {
			this.state = 1679;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case 1:
				case 2:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 130:
				case 131:
					this.enterOuterAlt(localctx, 1);
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
				case 112:
					this.enterOuterAlt(localctx, 2);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public mapEntryLabel(): MapEntryLabelContext {
		const localctx: MapEntryLabelContext = new MapEntryLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, GroovyParser.RULE_mapEntryLabel);
		try {
			this.state = 1683;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 176, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1681;
					this.keywords();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1682;
					this.primary();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedPropertyArgLabel(): NamedPropertyArgLabelContext {
		const localctx: NamedPropertyArgLabelContext = new NamedPropertyArgLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, GroovyParser.RULE_namedPropertyArgLabel);
		try {
			this.state = 1687;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 177, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1685;
					this.keywords();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1686;
					this.namedPropertyArgPrimary();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public namedArgLabel(): NamedArgLabelContext {
		const localctx: NamedArgLabelContext = new NamedArgLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, GroovyParser.RULE_namedArgLabel);
		try {
			this.state = 1691;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 178, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1689;
					this.keywords();
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1690;
					this.namedArgPrimary();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public creator(t: number): CreatorContext {
		const localctx: CreatorContext = new CreatorContext(this, this._ctx, this.state, t);
		this.enterRule(localctx, 288, GroovyParser.RULE_creator);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1693;
				this.createdName();
				this.state = 1709;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 86:
					case 135: {
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
					case 90:
					case 132: {
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
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public dim(): DimContext {
		const localctx: DimContext = new DimContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, GroovyParser.RULE_dim);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		const localctx: ArrayInitializerContext = new ArrayInitializerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, GroovyParser.RULE_arrayInitializer);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public anonymousInnerClassDeclaration(t: number): AnonymousInnerClassDeclarationContext {
		const localctx: AnonymousInnerClassDeclarationContext = new AnonymousInnerClassDeclarationContext(this, this._ctx, this.state, t);
		this.enterRule(localctx, 294, GroovyParser.RULE_anonymousInnerClassDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1727;
				this.classBody(0);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		const localctx: CreatedNameContext = new CreatedNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, GroovyParser.RULE_createdName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1729;
				this.annotationsOpt();
				this.state = 1735;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case 13: {
						this.state = 1730;
						this.primitiveType();
					}
						break;
					case 7:
					case 8:
					case 9:
					case 10:
					case 12:
					case 17:
					case 41:
					case 45:
					case 47:
					case 130:
					case 131: {
						this.state = 1731;
						this.qualifiedClassName();
						this.state = 1733;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === 97) {
							{
								this.state = 1732;
								this.typeArgumentsOrDiamond();
							}
						}

					}
						break;
					default:
						// noinspection ExceptionCaughtLocallyJS
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		const localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, GroovyParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(localctx, 1);
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		const localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, GroovyParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1746;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 187, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1743;
					this.match(GroovyParser.LT);
					this.state = 1744;
					this.match(GroovyParser.GT);
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1745;
					this.typeArguments();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		const localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, GroovyParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
				if (_la === 93) {
					{
						this.state = 1752;
						this.match(GroovyParser.COMMA);
					}
				}

				this.state = 1755;
				this.rparen();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		const localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, GroovyParser.RULE_argumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1757;
				this.firstArgumentListElement();
				this.state = 1764;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		const localctx: EnhancedArgumentListInParContext = new EnhancedArgumentListInParContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, GroovyParser.RULE_enhancedArgumentListInPar);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1767;
				this.enhancedArgumentListElement();
				this.state = 1774;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public firstArgumentListElement(): FirstArgumentListElementContext {
		const localctx: FirstArgumentListElementContext = new FirstArgumentListElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, GroovyParser.RULE_firstArgumentListElement);
		try {
			this.state = 1779;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 192, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1777;
					this.expressionListElement(true);
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1778;
					this.namedArg();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public argumentListElement(): ArgumentListElementContext {
		const localctx: ArgumentListElementContext = new ArgumentListElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, GroovyParser.RULE_argumentListElement);
		try {
			this.state = 1783;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 193, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1781;
					this.expressionListElement(true);
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1782;
					this.namedPropertyArg();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public enhancedArgumentListElement(): EnhancedArgumentListElementContext {
		const localctx: EnhancedArgumentListElementContext = new EnhancedArgumentListElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, GroovyParser.RULE_enhancedArgumentListElement);
		try {
			this.state = 1788;
			this._errHandler.sync(this);
			switch (this._interp.adaptivePredict(this._input, 194, this._ctx)) {
				case 1:
					this.enterOuterAlt(localctx, 1);
				{
					this.state = 1785;
					this.expressionListElement(true);
				}
					break;
				case 2:
					this.enterOuterAlt(localctx, 2);
				{
					this.state = 1786;
					this.standardLambdaExpression();
				}
					break;
				case 3:
					this.enterOuterAlt(localctx, 3);
				{
					this.state = 1787;
					this.namedPropertyArg();
				}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		const localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, GroovyParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1790;
				this.match(GroovyParser.StringLiteral);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public className(): ClassNameContext {
		const localctx: ClassNameContext = new ClassNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, GroovyParser.RULE_className);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1792;
				this.match(GroovyParser.CapitalizedIdentifier);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		const localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, GroovyParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1794;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 136832) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 81) !== 0) || _la === 130 || _la === 131)) {
					this._errHandler.recoverInline(this);
				} else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public builtInType(): BuiltInTypeContext {
		const localctx: BuiltInTypeContext = new BuiltInTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, GroovyParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1796;
				_la = this._input.LA(1);
				if (!(_la === 13 || _la === 58)) {
					this._errHandler.recoverInline(this);
				} else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public keywords(): KeywordsContext {
		const localctx: KeywordsContext = new KeywordsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, GroovyParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1798;
				_la = this._input.LA(1);
				if (!(((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & 4294967295) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 54525951) !== 0))) {
					this._errHandler.recoverInline(this);
				} else {
					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public rparen(): RparenContext {
		const localctx: RparenContext = new RparenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, GroovyParser.RULE_rparen);
		try {
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1800;
				this.match(GroovyParser.RPAREN);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public nls(): NlsContext {
		const localctx: NlsContext = new NlsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, GroovyParser.RULE_nls);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
				this.state = 1805;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 195, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
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
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	// @RuleVersion(0)
	public sep(): SepContext {
		const localctx: SepContext = new SepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, GroovyParser.RULE_sep);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
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
								if (!(_la === 92 || _la === 135)) {
									this._errHandler.recoverInline(this);
								} else {
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
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 2:
				return this.scriptStatement_sempred(localctx as ScriptStatementContext, predIndex);
			case 20:
				return this.classBody_sempred(localctx as ClassBodyContext, predIndex);
			case 81:
				return this.localVariableDeclaration_sempred(localctx as LocalVariableDeclarationContext, predIndex);
			case 95:
				return this.statement_sempred(localctx as StatementContext, predIndex);
			case 120:
				return this.expression_sempred(localctx as ExpressionContext, predIndex);
			case 122:
				return this.commandExpression_sempred(localctx as CommandExpressionContext, predIndex);
			case 124:
				return this.pathExpression_sempred(localctx as PathExpressionContext, predIndex);
		}
		return true;
	}

	private scriptStatement_sempred(_localctx: ScriptStatementContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return !SemanticPredicates.isInvalidMethodDeclaration(this._input);
		}
		return true;
	}

	private classBody_sempred(localctx: ClassBodyContext, predIndex: number): boolean {
		switch (predIndex) {
			case 1:
				return 2 === localctx.t;
		}
		return true;
	}

	private localVariableDeclaration_sempred(_localctx: LocalVariableDeclarationContext, predIndex: number): boolean {
		switch (predIndex) {
			case 2:
				return !SemanticPredicates.isInvalidLocalVariableDeclaration(this._input);
		}
		return true;
	}

	private statement_sempred(_localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
			case 3:
				return this._inSwitchExpressionLevel > 0;
		}
		return true;
	}

	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
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

	private commandExpression_sempred(localctx: CommandExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 19:
				return !SemanticPredicates.isFollowingArgumentsOrClosure(localctx._expression);
		}
		return true;
	}

	private pathExpression_sempred(_localctx: PathExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 20:
				return this._input.LT(2).type === GroovyLexer.DOT;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4, 1, 137, 1814, 2, 0, 7, 0,
		2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9,
		2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2,
		17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24,
		7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7,
		31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38,
		2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
		46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53,
		7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7,
		60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67,
		2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2,
		75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82,
		7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7,
		89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96,
		2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103,
		7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
		7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114, 2, 115,
		7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120, 7, 120, 2, 121,
		7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125, 2, 126, 7, 126, 2, 127,
		7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131, 7, 131, 2, 132, 7, 132, 2, 133,
		7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136, 2, 137, 7, 137, 2, 138, 7, 138, 2, 139,
		7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142, 7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145,
		7, 145, 2, 146, 7, 146, 2, 147, 7, 147, 2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151,
		7, 151, 2, 152, 7, 152, 2, 153, 7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157,
		7, 157, 2, 158, 7, 158, 2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163,
		7, 163, 2, 164, 7, 164, 1, 0, 1, 0, 1, 0, 3, 0, 334, 8, 0, 3, 0, 336, 8, 0, 1, 0, 3, 0, 339, 8, 0, 1,
		0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 347, 8, 1, 10, 1, 12, 1, 350, 9, 1, 1, 1, 3, 1, 353, 8, 1, 1, 2,
		1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 360, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 3, 4, 369, 8, 4, 1, 4,
		1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 376, 8, 4, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 3, 6, 383, 8, 6, 1, 7, 1, 7, 1, 7,
		3, 7, 388, 8, 7, 1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 394, 8, 8, 10, 8, 12, 8, 397, 9, 8, 1, 9, 1, 9, 5, 9, 401,
		8, 9, 10, 9, 12, 9, 404, 9, 9, 3, 9, 406, 8, 9, 1, 10, 1, 10, 1, 10, 1, 10, 5, 10, 412, 8, 10, 10,
		10, 12, 10, 415, 9, 10, 1, 11, 1, 11, 3, 11, 419, 8, 11, 1, 12, 1, 12, 3, 12, 423, 8, 12, 1, 13,
		1, 13, 1, 13, 3, 13, 428, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 5, 14, 434, 8, 14, 10, 14, 12, 14, 437,
		9, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 5, 15, 446, 8, 15, 10, 15, 12, 15, 449, 9,
		15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 460, 8, 16, 1, 17, 1, 17,
		1, 17, 1, 17, 1, 17, 5, 17, 467, 8, 17, 10, 17, 12, 17, 470, 9, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1,
		18, 5, 18, 477, 8, 18, 10, 18, 12, 18, 480, 9, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19,
		1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 495, 8, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 501,
		8, 19, 1, 19, 1, 19, 1, 19, 3, 19, 506, 8, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 513, 8, 19,
		1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 520, 8, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 527,
		8, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 539, 8, 20, 1,
		20, 3, 20, 542, 8, 20, 1, 20, 3, 20, 545, 8, 20, 1, 20, 1, 20, 1, 20, 1, 20, 5, 20, 551, 8, 20, 10,
		20, 12, 20, 554, 9, 20, 3, 20, 556, 8, 20, 1, 20, 3, 20, 559, 8, 20, 1, 20, 1, 20, 1, 21, 1, 21,
		1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 569, 8, 21, 10, 21, 12, 21, 572, 9, 21, 1, 22, 1, 22, 1, 22, 3,
		22, 577, 8, 22, 1, 22, 3, 22, 580, 8, 22, 1, 23, 1, 23, 3, 23, 584, 8, 23, 1, 23, 1, 23, 3, 23, 588,
		8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 595, 8, 24, 3, 24, 597, 8, 24, 1, 25, 1, 25, 3, 25,
		601, 8, 25, 1, 25, 1, 25, 1, 25, 3, 25, 606, 8, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25,
		1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 619, 8, 25, 1, 25, 1, 25, 1, 25, 3, 25, 624, 8, 25, 3, 25, 626,
		8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 3, 27, 634, 8, 27, 1, 28, 1, 28, 3, 28, 638, 8, 28,
		1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 5, 30, 647, 8, 30, 10, 30, 12, 30, 650, 9, 30, 1,
		31, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 658, 8, 31, 1, 32, 1, 32, 1, 33, 1, 33, 1, 34, 1, 34,
		1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 670, 8, 34, 10, 34, 12, 34, 673, 9, 34, 1, 34, 1, 34, 3, 34, 677,
		8, 34, 1, 35, 1, 35, 1, 35, 1, 35, 4, 35, 683, 8, 35, 11, 35, 12, 35, 684, 1, 36, 3, 36, 688, 8,
		36, 1, 37, 1, 37, 1, 37, 3, 37, 693, 8, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 3, 38, 700, 8, 38,
		1, 38, 3, 38, 703, 8, 38, 1, 38, 1, 38, 1, 39, 1, 39, 3, 39, 709, 8, 39, 1, 39, 3, 39, 712, 8, 39,
		1, 40, 1, 40, 3, 40, 716, 8, 40, 1, 41, 1, 41, 3, 41, 720, 8, 41, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43,
		1, 43, 1, 43, 1, 43, 1, 43, 5, 43, 731, 8, 43, 10, 43, 12, 43, 734, 9, 43, 1, 43, 1, 43, 1, 43, 1,
		44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 3, 44, 746, 8, 44, 3, 44, 748, 8, 44, 1, 45, 1, 45,
		1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 5, 46, 758, 8, 46, 10, 46, 12, 46, 761, 9, 46, 1, 47, 1,
		47, 3, 47, 765, 8, 47, 1, 47, 1, 47, 1, 48, 1, 48, 3, 48, 771, 8, 48, 1, 48, 1, 48, 1, 48, 1, 48,
		5, 48, 777, 8, 48, 10, 48, 12, 48, 780, 9, 48, 1, 49, 1, 49, 1, 49, 1, 50, 1, 50, 3, 50, 787, 8,
		50, 1, 50, 3, 50, 790, 8, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 798, 8, 50, 1, 51,
		1, 51, 1, 52, 1, 52, 1, 52, 5, 52, 805, 8, 52, 10, 52, 12, 52, 808, 9, 52, 1, 53, 1, 53, 1, 53, 1,
		53, 1, 53, 3, 53, 815, 8, 53, 1, 54, 1, 54, 1, 54, 5, 54, 820, 8, 54, 10, 54, 12, 54, 823, 9, 54,
		1, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 56, 5, 56, 832, 8, 56, 10, 56, 12, 56, 835, 9, 56, 1,
		57, 1, 57, 1, 57, 1, 57, 1, 57, 3, 57, 842, 8, 57, 1, 58, 1, 58, 1, 58, 1, 58, 5, 58, 848, 8, 58,
		10, 58, 12, 58, 851, 9, 58, 1, 58, 1, 58, 1, 59, 1, 59, 3, 59, 857, 8, 59, 1, 60, 1, 60, 5, 60, 861,
		8, 60, 10, 60, 12, 60, 864, 9, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 62, 1, 62, 1, 62,
		1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 64, 1, 64, 3, 64, 882, 8, 64, 1, 65, 1, 65, 3, 65, 886, 8, 65,
		1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 893, 8, 66, 1, 66, 1, 66, 3, 66, 897, 8, 66, 1, 66, 3, 66,
		900, 8, 66, 1, 66, 1, 66, 1, 66, 1, 67, 1, 67, 3, 67, 907, 8, 67, 1, 68, 3, 68, 910, 8, 68, 1, 69,
		1, 69, 1, 69, 1, 69, 5, 69, 916, 8, 69, 10, 69, 12, 69, 919, 9, 69, 1, 69, 3, 69, 922, 8, 69, 1,
		70, 1, 70, 1, 70, 1, 70, 5, 70, 928, 8, 70, 10, 70, 12, 70, 931, 9, 70, 1, 70, 1, 70, 3, 70, 935,
		8, 70, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 3, 71, 942, 8, 71, 1, 71, 1, 71, 3, 71, 946, 8, 71, 1, 72,
		1, 72, 3, 72, 950, 8, 72, 1, 73, 1, 73, 1, 74, 1, 74, 1, 74, 5, 74, 957, 8, 74, 10, 74, 12, 74, 960,
		9, 74, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 76, 1, 76, 3, 76, 970, 8, 76, 1, 77, 1, 77, 1,
		77, 3, 77, 975, 8, 77, 1, 78, 1, 78, 1, 78, 1, 78, 5, 78, 981, 8, 78, 10, 78, 12, 78, 984, 9, 78,
		1, 78, 3, 78, 987, 8, 78, 3, 78, 989, 8, 78, 1, 78, 1, 78, 1, 79, 1, 79, 3, 79, 995, 8, 79, 1, 79,
		1, 79, 1, 79, 1, 80, 1, 80, 3, 80, 1002, 8, 80, 1, 81, 1, 81, 1, 81, 1, 82, 1, 82, 1, 82, 3, 82, 1010,
		8, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 3, 82, 1019, 8, 82, 1, 82, 1, 82, 1, 82, 3,
		82, 1024, 8, 82, 1, 83, 1, 83, 1, 83, 1, 83, 5, 83, 1030, 8, 83, 10, 83, 12, 83, 1033, 9, 83, 1,
		83, 1, 83, 1, 84, 3, 84, 1038, 8, 84, 1, 84, 1, 84, 1, 85, 1, 85, 1, 85, 1, 85, 4, 85, 1046, 8, 85,
		11, 85, 12, 85, 1047, 1, 85, 1, 85, 1, 86, 1, 86, 3, 86, 1054, 8, 86, 1, 87, 1, 87, 1, 87, 1, 87,
		1, 87, 1, 87, 3, 87, 1062, 8, 87, 1, 87, 1, 87, 1, 87, 1, 87, 3, 87, 1068, 8, 87, 1, 88, 1, 88, 1,
		88, 1, 88, 1, 88, 1, 88, 4, 88, 1076, 8, 88, 11, 88, 12, 88, 1077, 1, 88, 1, 88, 3, 88, 1082, 8,
		88, 1, 88, 1, 88, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89,
		1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1105, 8, 89, 1, 90, 1, 90, 3, 90, 1109, 8,
		90, 1, 91, 1, 91, 3, 91, 1113, 8, 91, 1, 92, 1, 92, 1, 92, 1, 93, 1, 93, 3, 93, 1120, 8, 93, 1, 93,
		1, 93, 1, 93, 1, 93, 1, 93, 5, 93, 1127, 8, 93, 10, 93, 12, 93, 1130, 9, 93, 1, 93, 1, 93, 1, 93,
		3, 93, 1135, 8, 93, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 3, 94, 1144, 8, 94, 1, 95, 1,
		95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 3, 95, 1157, 8, 95, 1, 95, 1, 95,
		1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 3, 95, 1174,
		8, 95, 1, 96, 1, 96, 1, 96, 1, 96, 3, 96, 1180, 8, 96, 1, 96, 1, 96, 1, 96, 1, 96, 1, 96, 1, 97, 1,
		97, 1, 97, 5, 97, 1190, 8, 97, 10, 97, 12, 97, 1193, 9, 97, 1, 98, 1, 98, 1, 98, 1, 98, 1, 99, 1,
		99, 1, 99, 1, 99, 3, 99, 1203, 8, 99, 1, 99, 1, 99, 1, 100, 1, 100, 1, 100, 1, 100, 5, 100, 1211,
		8, 100, 10, 100, 12, 100, 1214, 9, 100, 1, 101, 1, 101, 3, 101, 1218, 8, 101, 1, 102, 1, 102,
		1, 102, 1, 102, 5, 102, 1224, 8, 102, 10, 102, 12, 102, 1227, 9, 102, 1, 102, 1, 102, 1, 102,
		1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 3, 103, 1238, 8, 103, 1, 104, 1, 104, 3, 104,
		1242, 8, 104, 1, 105, 1, 105, 3, 105, 1246, 8, 105, 1, 105, 1, 105, 1, 105, 1, 105, 1, 106, 3,
		106, 1253, 8, 106, 1, 106, 1, 106, 3, 106, 1257, 8, 106, 1, 106, 1, 106, 3, 106, 1261, 8, 106,
		1, 107, 1, 107, 3, 107, 1265, 8, 107, 1, 108, 1, 108, 1, 109, 1, 109, 1, 109, 1, 109, 1, 110,
		1, 110, 1, 111, 1, 111, 1, 111, 1, 111, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 5, 112, 1284,
		8, 112, 10, 112, 12, 112, 1287, 9, 112, 1, 113, 3, 113, 1290, 8, 113, 1, 113, 1, 113, 1, 114,
		1, 114, 3, 114, 1296, 8, 114, 1, 115, 1, 115, 1, 116, 1, 116, 3, 116, 1302, 8, 116, 1, 117, 1,
		117, 1, 117, 1, 117, 1, 117, 1, 117, 5, 117, 1310, 8, 117, 10, 117, 12, 117, 1313, 9, 117, 1,
		117, 1, 117, 1, 117, 1, 118, 1, 118, 1, 118, 4, 118, 1321, 8, 118, 11, 118, 12, 118, 1322, 1,
		118, 1, 118, 1, 119, 1, 119, 1, 119, 3, 119, 1330, 8, 119, 1, 119, 1, 119, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 3, 120, 1352, 8, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 3, 120, 1379, 8, 120, 1, 120, 3,
		120, 1382, 8, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 3, 120, 1446, 8, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1,
		120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 1, 120, 5, 120, 1462, 8,
		120, 10, 120, 12, 120, 1465, 9, 120, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121, 1, 121,
		1, 121, 1, 121, 1, 121, 3, 121, 1477, 8, 121, 1, 122, 1, 122, 1, 122, 1, 122, 3, 122, 1483, 8,
		122, 1, 122, 5, 122, 1486, 8, 122, 10, 122, 12, 122, 1489, 9, 122, 1, 123, 1, 123, 4, 123, 1493,
		8, 123, 11, 123, 12, 123, 1494, 1, 123, 3, 123, 1498, 8, 123, 1, 124, 1, 124, 1, 124, 3, 124,
		1503, 8, 124, 1, 124, 1, 124, 1, 124, 5, 124, 1508, 8, 124, 10, 124, 12, 124, 1511, 9, 124,
		1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 3, 125,
		1524, 8, 125, 1, 125, 1, 125, 1, 125, 1, 125, 3, 125, 1530, 8, 125, 1, 125, 1, 125, 1, 125, 1,
		125, 1, 125, 1, 125, 3, 125, 1538, 8, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1,
		125, 1, 125, 1, 125, 3, 125, 1549, 8, 125, 1, 126, 1, 126, 1, 126, 1, 126, 3, 126, 1555, 8, 126,
		1, 127, 1, 127, 3, 127, 1559, 8, 127, 1, 128, 1, 128, 3, 128, 1563, 8, 128, 1, 128, 1, 128, 1,
		129, 1, 129, 1, 129, 3, 129, 1570, 8, 129, 1, 129, 1, 129, 1, 130, 1, 130, 3, 130, 1576, 8, 130,
		1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130,
		1, 130, 3, 130, 1591, 8, 130, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1599, 8,
		131, 1, 132, 1, 132, 1, 132, 3, 132, 1604, 8, 132, 1, 133, 1, 133, 1, 133, 3, 133, 1609, 8, 133,
		1, 134, 1, 134, 3, 134, 1613, 8, 134, 1, 134, 3, 134, 1616, 8, 134, 1, 134, 1, 134, 1, 135, 1,
		135, 1, 135, 3, 135, 1623, 8, 135, 1, 135, 3, 135, 1626, 8, 135, 1, 135, 1, 135, 1, 136, 1, 136,
		1, 136, 5, 136, 1633, 8, 136, 10, 136, 12, 136, 1636, 9, 136, 1, 137, 1, 137, 1, 137, 5, 137,
		1641, 8, 137, 10, 137, 12, 137, 1644, 9, 137, 1, 138, 1, 138, 1, 138, 1, 138, 1, 138, 1, 138,
		1, 138, 1, 138, 1, 138, 1, 138, 3, 138, 1656, 8, 138, 1, 139, 1, 139, 1, 139, 1, 139, 1, 139,
		1, 139, 1, 139, 1, 139, 1, 139, 1, 139, 3, 139, 1668, 8, 139, 1, 140, 1, 140, 1, 140, 1, 140,
		1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1680, 8, 140, 1, 141, 1, 141, 3, 141,
		1684, 8, 141, 1, 142, 1, 142, 3, 142, 1688, 8, 142, 1, 143, 1, 143, 3, 143, 1692, 8, 143, 1,
		144, 1, 144, 1, 144, 1, 144, 3, 144, 1698, 8, 144, 1, 144, 4, 144, 1701, 8, 144, 11, 144, 12,
		144, 1702, 1, 144, 1, 144, 1, 144, 3, 144, 1708, 8, 144, 3, 144, 1710, 8, 144, 1, 145, 1, 145,
		1, 145, 3, 145, 1715, 8, 145, 1, 145, 1, 145, 1, 146, 1, 146, 1, 146, 1, 146, 1, 146, 3, 146,
		1724, 8, 146, 1, 146, 1, 146, 1, 147, 1, 147, 1, 148, 1, 148, 1, 148, 1, 148, 3, 148, 1734, 8,
		148, 3, 148, 1736, 8, 148, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 150, 1, 150, 1,
		150, 3, 150, 1747, 8, 150, 1, 151, 1, 151, 3, 151, 1751, 8, 151, 1, 151, 3, 151, 1754, 8, 151,
		1, 151, 1, 151, 1, 152, 1, 152, 1, 152, 1, 152, 1, 152, 5, 152, 1763, 8, 152, 10, 152, 12, 152,
		1766, 9, 152, 1, 153, 1, 153, 1, 153, 1, 153, 1, 153, 5, 153, 1773, 8, 153, 10, 153, 12, 153,
		1776, 9, 153, 1, 154, 1, 154, 3, 154, 1780, 8, 154, 1, 155, 1, 155, 3, 155, 1784, 8, 155, 1,
		156, 1, 156, 1, 156, 3, 156, 1789, 8, 156, 1, 157, 1, 157, 1, 158, 1, 158, 1, 159, 1, 159, 1,
		160, 1, 160, 1, 161, 1, 161, 1, 162, 1, 162, 1, 163, 5, 163, 1804, 8, 163, 10, 163, 12, 163,
		1807, 9, 163, 1, 164, 4, 164, 1810, 8, 164, 11, 164, 12, 164, 1811, 1, 164, 0, 1, 240, 165,
		0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50,
		52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98,
		100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134,
		136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170,
		172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206,
		208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242,
		244, 246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278,
		280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314,
		316, 318, 320, 322, 324, 326, 328, 0, 24, 6, 0, 8, 8, 12, 12, 37, 37, 52, 52, 56, 56, 59, 59,
		6, 0, 14, 14, 23, 23, 28, 28, 39, 39, 42, 44, 47, 49, 6, 0, 8, 8, 12, 12, 14, 14, 28, 28, 42, 44,
		48, 49, 2, 0, 27, 27, 50, 50, 2, 0, 93, 93, 101, 101, 2, 0, 9, 9, 101, 101, 1, 0, 108, 109, 2, 0,
		83, 83, 101, 101, 1, 0, 98, 99, 1, 0, 108, 111, 2, 0, 112, 113, 117, 117, 1, 0, 110, 111, 1, 0,
		65, 68, 4, 0, 9, 9, 85, 85, 96, 97, 103, 104, 3, 0, 80, 82, 102, 102, 105, 105, 1, 0, 76, 77, 3,
		0, 7, 7, 35, 35, 84, 84, 3, 0, 79, 79, 95, 95, 118, 129, 3, 0, 69, 70, 72, 72, 94, 94, 2, 0, 71,
		71, 90, 90, 8, 0, 7, 7, 9, 10, 12, 12, 17, 17, 41, 41, 45, 45, 47, 47, 130, 131, 2, 0, 13, 13, 58,
		58, 2, 0, 7, 60, 63, 64, 2, 0, 92, 92, 135, 135, 1919, 0, 330, 1, 0, 0, 0, 2, 342, 1, 0, 0, 0, 4,
		359, 1, 0, 0, 0, 6, 361, 1, 0, 0, 0, 8, 365, 1, 0, 0, 0, 10, 377, 1, 0, 0, 0, 12, 382, 1, 0, 0, 0, 14,
		387, 1, 0, 0, 0, 16, 389, 1, 0, 0, 0, 18, 405, 1, 0, 0, 0, 20, 407, 1, 0, 0, 0, 22, 418, 1, 0, 0, 0,
		24, 422, 1, 0, 0, 0, 26, 427, 1, 0, 0, 0, 28, 429, 1, 0, 0, 0, 30, 438, 1, 0, 0, 0, 32, 453, 1, 0,
		0, 0, 34, 461, 1, 0, 0, 0, 36, 471, 1, 0, 0, 0, 38, 494, 1, 0, 0, 0, 40, 531, 1, 0, 0, 0, 42, 562,
		1, 0, 0, 0, 44, 573, 1, 0, 0, 0, 46, 587, 1, 0, 0, 0, 48, 596, 1, 0, 0, 0, 50, 598, 1, 0, 0, 0, 52,
		627, 1, 0, 0, 0, 54, 633, 1, 0, 0, 0, 56, 637, 1, 0, 0, 0, 58, 639, 1, 0, 0, 0, 60, 641, 1, 0, 0, 0,
		62, 651, 1, 0, 0, 0, 64, 659, 1, 0, 0, 0, 66, 661, 1, 0, 0, 0, 68, 663, 1, 0, 0, 0, 70, 682, 1, 0,
		0, 0, 72, 687, 1, 0, 0, 0, 74, 689, 1, 0, 0, 0, 76, 696, 1, 0, 0, 0, 78, 708, 1, 0, 0, 0, 80, 713,
		1, 0, 0, 0, 82, 717, 1, 0, 0, 0, 84, 721, 1, 0, 0, 0, 86, 723, 1, 0, 0, 0, 88, 747, 1, 0, 0, 0, 90,
		749, 1, 0, 0, 0, 92, 752, 1, 0, 0, 0, 94, 762, 1, 0, 0, 0, 96, 770, 1, 0, 0, 0, 98, 781, 1, 0, 0, 0,
		100, 784, 1, 0, 0, 0, 102, 799, 1, 0, 0, 0, 104, 801, 1, 0, 0, 0, 106, 814, 1, 0, 0, 0, 108, 821,
		1, 0, 0, 0, 110, 824, 1, 0, 0, 0, 112, 827, 1, 0, 0, 0, 114, 841, 1, 0, 0, 0, 116, 843, 1, 0, 0, 0,
		118, 856, 1, 0, 0, 0, 120, 858, 1, 0, 0, 0, 122, 865, 1, 0, 0, 0, 124, 871, 1, 0, 0, 0, 126, 877,
		1, 0, 0, 0, 128, 881, 1, 0, 0, 0, 130, 885, 1, 0, 0, 0, 132, 887, 1, 0, 0, 0, 134, 906, 1, 0, 0, 0,
		136, 909, 1, 0, 0, 0, 138, 911, 1, 0, 0, 0, 140, 934, 1, 0, 0, 0, 142, 936, 1, 0, 0, 0, 144, 949,
		1, 0, 0, 0, 146, 951, 1, 0, 0, 0, 148, 953, 1, 0, 0, 0, 150, 961, 1, 0, 0, 0, 152, 969, 1, 0, 0, 0,
		154, 974, 1, 0, 0, 0, 156, 976, 1, 0, 0, 0, 158, 992, 1, 0, 0, 0, 160, 1001, 1, 0, 0, 0, 162, 1003,
		1, 0, 0, 0, 164, 1023, 1, 0, 0, 0, 166, 1025, 1, 0, 0, 0, 168, 1037, 1, 0, 0, 0, 170, 1041, 1, 0,
		0, 0, 172, 1053, 1, 0, 0, 0, 174, 1055, 1, 0, 0, 0, 176, 1069, 1, 0, 0, 0, 178, 1104, 1, 0, 0, 0,
		180, 1106, 1, 0, 0, 0, 182, 1110, 1, 0, 0, 0, 184, 1114, 1, 0, 0, 0, 186, 1117, 1, 0, 0, 0, 188,
		1136, 1, 0, 0, 0, 190, 1173, 1, 0, 0, 0, 192, 1175, 1, 0, 0, 0, 194, 1186, 1, 0, 0, 0, 196, 1194,
		1, 0, 0, 0, 198, 1198, 1, 0, 0, 0, 200, 1206, 1, 0, 0, 0, 202, 1217, 1, 0, 0, 0, 204, 1219, 1, 0,
		0, 0, 206, 1237, 1, 0, 0, 0, 208, 1241, 1, 0, 0, 0, 210, 1243, 1, 0, 0, 0, 212, 1252, 1, 0, 0, 0,
		214, 1264, 1, 0, 0, 0, 216, 1266, 1, 0, 0, 0, 218, 1268, 1, 0, 0, 0, 220, 1272, 1, 0, 0, 0, 222,
		1274, 1, 0, 0, 0, 224, 1278, 1, 0, 0, 0, 226, 1289, 1, 0, 0, 0, 228, 1295, 1, 0, 0, 0, 230, 1297,
		1, 0, 0, 0, 232, 1299, 1, 0, 0, 0, 234, 1303, 1, 0, 0, 0, 236, 1320, 1, 0, 0, 0, 238, 1329, 1, 0,
		0, 0, 240, 1351, 1, 0, 0, 0, 242, 1476, 1, 0, 0, 0, 244, 1478, 1, 0, 0, 0, 246, 1490, 1, 0, 0, 0,
		248, 1502, 1, 0, 0, 0, 250, 1548, 1, 0, 0, 0, 252, 1554, 1, 0, 0, 0, 254, 1558, 1, 0, 0, 0, 256,
		1560, 1, 0, 0, 0, 258, 1566, 1, 0, 0, 0, 260, 1590, 1, 0, 0, 0, 262, 1598, 1, 0, 0, 0, 264, 1603,
		1, 0, 0, 0, 266, 1608, 1, 0, 0, 0, 268, 1610, 1, 0, 0, 0, 270, 1619, 1, 0, 0, 0, 272, 1629, 1, 0,
		0, 0, 274, 1637, 1, 0, 0, 0, 276, 1655, 1, 0, 0, 0, 278, 1667, 1, 0, 0, 0, 280, 1679, 1, 0, 0, 0,
		282, 1683, 1, 0, 0, 0, 284, 1687, 1, 0, 0, 0, 286, 1691, 1, 0, 0, 0, 288, 1693, 1, 0, 0, 0, 290,
		1711, 1, 0, 0, 0, 292, 1718, 1, 0, 0, 0, 294, 1727, 1, 0, 0, 0, 296, 1729, 1, 0, 0, 0, 298, 1737,
		1, 0, 0, 0, 300, 1746, 1, 0, 0, 0, 302, 1748, 1, 0, 0, 0, 304, 1757, 1, 0, 0, 0, 306, 1767, 1, 0,
		0, 0, 308, 1779, 1, 0, 0, 0, 310, 1783, 1, 0, 0, 0, 312, 1788, 1, 0, 0, 0, 314, 1790, 1, 0, 0, 0,
		316, 1792, 1, 0, 0, 0, 318, 1794, 1, 0, 0, 0, 320, 1796, 1, 0, 0, 0, 322, 1798, 1, 0, 0, 0, 324,
		1800, 1, 0, 0, 0, 326, 1805, 1, 0, 0, 0, 328, 1809, 1, 0, 0, 0, 330, 335, 3, 326, 163, 0, 331,
		333, 3, 6, 3, 0, 332, 334, 3, 328, 164, 0, 333, 332, 1, 0, 0, 0, 333, 334, 1, 0, 0, 0, 334, 336,
		1, 0, 0, 0, 335, 331, 1, 0, 0, 0, 335, 336, 1, 0, 0, 0, 336, 338, 1, 0, 0, 0, 337, 339, 3, 2, 1, 0,
		338, 337, 1, 0, 0, 0, 338, 339, 1, 0, 0, 0, 339, 340, 1, 0, 0, 0, 340, 341, 5, 0, 0, 1, 341, 1, 1,
		0, 0, 0, 342, 348, 3, 4, 2, 0, 343, 344, 3, 328, 164, 0, 344, 345, 3, 4, 2, 0, 345, 347, 1, 0, 0,
		0, 346, 343, 1, 0, 0, 0, 347, 350, 1, 0, 0, 0, 348, 346, 1, 0, 0, 0, 348, 349, 1, 0, 0, 0, 349, 352,
		1, 0, 0, 0, 350, 348, 1, 0, 0, 0, 351, 353, 3, 328, 164, 0, 352, 351, 1, 0, 0, 0, 352, 353, 1, 0,
		0, 0, 353, 3, 1, 0, 0, 0, 354, 360, 3, 8, 4, 0, 355, 360, 3, 10, 5, 0, 356, 357, 4, 2, 0, 0, 357,
		360, 3, 50, 25, 0, 358, 360, 3, 190, 95, 0, 359, 354, 1, 0, 0, 0, 359, 355, 1, 0, 0, 0, 359, 356,
		1, 0, 0, 0, 359, 358, 1, 0, 0, 0, 360, 5, 1, 0, 0, 0, 361, 362, 3, 140, 70, 0, 362, 363, 5, 40, 0,
		0, 363, 364, 3, 104, 52, 0, 364, 7, 1, 0, 0, 0, 365, 366, 3, 140, 70, 0, 366, 368, 5, 34, 0, 0,
		367, 369, 5, 48, 0, 0, 368, 367, 1, 0, 0, 0, 368, 369, 1, 0, 0, 0, 369, 370, 1, 0, 0, 0, 370, 375,
		3, 104, 52, 0, 371, 372, 5, 94, 0, 0, 372, 376, 5, 112, 0, 0, 373, 374, 5, 7, 0, 0, 374, 376, 3,
		318, 159, 0, 375, 371, 1, 0, 0, 0, 375, 373, 1, 0, 0, 0, 375, 376, 1, 0, 0, 0, 376, 9, 1, 0, 0, 0,
		377, 378, 3, 18, 9, 0, 378, 379, 3, 38, 19, 0, 379, 11, 1, 0, 0, 0, 380, 383, 3, 22, 11, 0, 381,
		383, 7, 0, 0, 0, 382, 380, 1, 0, 0, 0, 382, 381, 1, 0, 0, 0, 383, 13, 1, 0, 0, 0, 384, 385, 3, 16,
		8, 0, 385, 386, 3, 326, 163, 0, 386, 388, 1, 0, 0, 0, 387, 384, 1, 0, 0, 0, 387, 388, 1, 0, 0, 0,
		388, 15, 1, 0, 0, 0, 389, 395, 3, 12, 6, 0, 390, 391, 3, 326, 163, 0, 391, 392, 3, 12, 6, 0, 392,
		394, 1, 0, 0, 0, 393, 390, 1, 0, 0, 0, 394, 397, 1, 0, 0, 0, 395, 393, 1, 0, 0, 0, 395, 396, 1, 0,
		0, 0, 396, 17, 1, 0, 0, 0, 397, 395, 1, 0, 0, 0, 398, 402, 3, 20, 10, 0, 399, 401, 5, 135, 0, 0,
		400, 399, 1, 0, 0, 0, 401, 404, 1, 0, 0, 0, 402, 400, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 406,
		1, 0, 0, 0, 404, 402, 1, 0, 0, 0, 405, 398, 1, 0, 0, 0, 405, 406, 1, 0, 0, 0, 406, 19, 1, 0, 0, 0,
		407, 413, 3, 22, 11, 0, 408, 409, 3, 326, 163, 0, 409, 410, 3, 22, 11, 0, 410, 412, 1, 0, 0, 0,
		411, 408, 1, 0, 0, 0, 412, 415, 1, 0, 0, 0, 413, 411, 1, 0, 0, 0, 413, 414, 1, 0, 0, 0, 414, 21,
		1, 0, 0, 0, 415, 413, 1, 0, 0, 0, 416, 419, 3, 142, 71, 0, 417, 419, 7, 1, 0, 0, 418, 416, 1, 0,
		0, 0, 418, 417, 1, 0, 0, 0, 419, 23, 1, 0, 0, 0, 420, 423, 3, 142, 71, 0, 421, 423, 7, 2, 0, 0, 422,
		420, 1, 0, 0, 0, 422, 421, 1, 0, 0, 0, 423, 25, 1, 0, 0, 0, 424, 425, 3, 28, 14, 0, 425, 426, 3,
		326, 163, 0, 426, 428, 1, 0, 0, 0, 427, 424, 1, 0, 0, 0, 427, 428, 1, 0, 0, 0, 428, 27, 1, 0, 0,
		0, 429, 435, 3, 24, 12, 0, 430, 431, 3, 326, 163, 0, 431, 432, 3, 24, 12, 0, 432, 434, 1, 0, 0,
		0, 433, 430, 1, 0, 0, 0, 434, 437, 1, 0, 0, 0, 435, 433, 1, 0, 0, 0, 435, 436, 1, 0, 0, 0, 436, 29,
		1, 0, 0, 0, 437, 435, 1, 0, 0, 0, 438, 439, 5, 97, 0, 0, 439, 440, 3, 326, 163, 0, 440, 447, 3,
		32, 16, 0, 441, 442, 5, 93, 0, 0, 442, 443, 3, 326, 163, 0, 443, 444, 3, 32, 16, 0, 444, 446,
		1, 0, 0, 0, 445, 441, 1, 0, 0, 0, 446, 449, 1, 0, 0, 0, 447, 445, 1, 0, 0, 0, 447, 448, 1, 0, 0, 0,
		448, 450, 1, 0, 0, 0, 449, 447, 1, 0, 0, 0, 450, 451, 3, 326, 163, 0, 451, 452, 5, 96, 0, 0, 452,
		31, 1, 0, 0, 0, 453, 454, 3, 140, 70, 0, 454, 459, 3, 316, 158, 0, 455, 456, 5, 27, 0, 0, 456,
		457, 3, 326, 163, 0, 457, 458, 3, 34, 17, 0, 458, 460, 1, 0, 0, 0, 459, 455, 1, 0, 0, 0, 459, 460,
		1, 0, 0, 0, 460, 33, 1, 0, 0, 0, 461, 468, 3, 76, 38, 0, 462, 463, 5, 114, 0, 0, 463, 464, 3, 326,
		163, 0, 464, 465, 3, 76, 38, 0, 465, 467, 1, 0, 0, 0, 466, 462, 1, 0, 0, 0, 467, 470, 1, 0, 0, 0,
		468, 466, 1, 0, 0, 0, 468, 469, 1, 0, 0, 0, 469, 35, 1, 0, 0, 0, 470, 468, 1, 0, 0, 0, 471, 478,
		3, 76, 38, 0, 472, 473, 5, 93, 0, 0, 473, 474, 3, 326, 163, 0, 474, 475, 3, 76, 38, 0, 475, 477,
		1, 0, 0, 0, 476, 472, 1, 0, 0, 0, 477, 480, 1, 0, 0, 0, 478, 476, 1, 0, 0, 0, 478, 479, 1, 0, 0, 0,
		479, 37, 1, 0, 0, 0, 480, 478, 1, 0, 0, 0, 481, 482, 5, 20, 0, 0, 482, 495, 6, 19, -1, 0, 483, 484,
		5, 36, 0, 0, 484, 495, 6, 19, -1, 0, 485, 486, 5, 26, 0, 0, 486, 495, 6, 19, -1, 0, 487, 488, 5,
		132, 0, 0, 488, 489, 5, 36, 0, 0, 489, 495, 6, 19, -1, 0, 490, 491, 5, 10, 0, 0, 491, 495, 6, 19,
		-1, 0, 492, 493, 5, 45, 0, 0, 493, 495, 6, 19, -1, 0, 494, 481, 1, 0, 0, 0, 494, 483, 1, 0, 0, 0,
		494, 485, 1, 0, 0, 0, 494, 487, 1, 0, 0, 0, 494, 490, 1, 0, 0, 0, 494, 492, 1, 0, 0, 0, 495, 496,
		1, 0, 0, 0, 496, 500, 3, 318, 159, 0, 497, 498, 3, 326, 163, 0, 498, 499, 3, 30, 15, 0, 499, 501,
		1, 0, 0, 0, 500, 497, 1, 0, 0, 0, 500, 501, 1, 0, 0, 0, 501, 505, 1, 0, 0, 0, 502, 503, 3, 326, 163,
		0, 503, 504, 3, 94, 47, 0, 504, 506, 1, 0, 0, 0, 505, 502, 1, 0, 0, 0, 505, 506, 1, 0, 0, 0, 506,
		512, 1, 0, 0, 0, 507, 508, 3, 326, 163, 0, 508, 509, 5, 27, 0, 0, 509, 510, 3, 326, 163, 0, 510,
		511, 3, 36, 18, 0, 511, 513, 1, 0, 0, 0, 512, 507, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513, 519, 1,
		0, 0, 0, 514, 515, 3, 326, 163, 0, 515, 516, 5, 33, 0, 0, 516, 517, 3, 326, 163, 0, 517, 518,
		3, 36, 18, 0, 518, 520, 1, 0, 0, 0, 519, 514, 1, 0, 0, 0, 519, 520, 1, 0, 0, 0, 520, 526, 1, 0, 0,
		0, 521, 522, 3, 326, 163, 0, 522, 523, 5, 41, 0, 0, 523, 524, 3, 326, 163, 0, 524, 525, 3, 36,
		18, 0, 525, 527, 1, 0, 0, 0, 526, 521, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 528, 1, 0, 0, 0, 528,
		529, 3, 326, 163, 0, 529, 530, 3, 40, 20, 0, 530, 39, 1, 0, 0, 0, 531, 532, 5, 88, 0, 0, 532, 544,
		3, 326, 163, 0, 533, 534, 4, 20, 1, 1, 534, 538, 3, 42, 21, 0, 535, 536, 3, 326, 163, 0, 536,
		537, 5, 93, 0, 0, 537, 539, 1, 0, 0, 0, 538, 535, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 541, 1,
		0, 0, 0, 540, 542, 3, 328, 164, 0, 541, 540, 1, 0, 0, 0, 541, 542, 1, 0, 0, 0, 542, 545, 1, 0, 0,
		0, 543, 545, 1, 0, 0, 0, 544, 533, 1, 0, 0, 0, 544, 543, 1, 0, 0, 0, 545, 555, 1, 0, 0, 0, 546, 552,
		3, 46, 23, 0, 547, 548, 3, 328, 164, 0, 548, 549, 3, 46, 23, 0, 549, 551, 1, 0, 0, 0, 550, 547,
		1, 0, 0, 0, 551, 554, 1, 0, 0, 0, 552, 550, 1, 0, 0, 0, 552, 553, 1, 0, 0, 0, 553, 556, 1, 0, 0, 0,
		554, 552, 1, 0, 0, 0, 555, 546, 1, 0, 0, 0, 555, 556, 1, 0, 0, 0, 556, 558, 1, 0, 0, 0, 557, 559,
		3, 328, 164, 0, 558, 557, 1, 0, 0, 0, 558, 559, 1, 0, 0, 0, 559, 560, 1, 0, 0, 0, 560, 561, 5, 89,
		0, 0, 561, 41, 1, 0, 0, 0, 562, 570, 3, 44, 22, 0, 563, 564, 3, 326, 163, 0, 564, 565, 5, 93, 0,
		0, 565, 566, 3, 326, 163, 0, 566, 567, 3, 44, 22, 0, 567, 569, 1, 0, 0, 0, 568, 563, 1, 0, 0, 0,
		569, 572, 1, 0, 0, 0, 570, 568, 1, 0, 0, 0, 570, 571, 1, 0, 0, 0, 571, 43, 1, 0, 0, 0, 572, 570,
		1, 0, 0, 0, 573, 574, 3, 140, 70, 0, 574, 576, 3, 318, 159, 0, 575, 577, 3, 302, 151, 0, 576,
		575, 1, 0, 0, 0, 576, 577, 1, 0, 0, 0, 577, 579, 1, 0, 0, 0, 578, 580, 3, 294, 147, 0, 579, 578,
		1, 0, 0, 0, 579, 580, 1, 0, 0, 0, 580, 45, 1, 0, 0, 0, 581, 582, 5, 48, 0, 0, 582, 584, 3, 326, 163,
		0, 583, 581, 1, 0, 0, 0, 583, 584, 1, 0, 0, 0, 584, 585, 1, 0, 0, 0, 585, 588, 3, 158, 79, 0, 586,
		588, 3, 48, 24, 0, 587, 583, 1, 0, 0, 0, 587, 586, 1, 0, 0, 0, 588, 47, 1, 0, 0, 0, 589, 597, 3,
		50, 25, 0, 590, 597, 3, 58, 29, 0, 591, 594, 3, 14, 7, 0, 592, 595, 3, 38, 19, 0, 593, 595, 3,
		52, 26, 0, 594, 592, 1, 0, 0, 0, 594, 593, 1, 0, 0, 0, 595, 597, 1, 0, 0, 0, 596, 589, 1, 0, 0, 0,
		596, 590, 1, 0, 0, 0, 596, 591, 1, 0, 0, 0, 597, 49, 1, 0, 0, 0, 598, 600, 3, 14, 7, 0, 599, 601,
		3, 30, 15, 0, 600, 599, 1, 0, 0, 0, 600, 601, 1, 0, 0, 0, 601, 605, 1, 0, 0, 0, 602, 603, 3, 56,
		28, 0, 603, 604, 3, 326, 163, 0, 604, 606, 1, 0, 0, 0, 605, 602, 1, 0, 0, 0, 605, 606, 1, 0, 0,
		0, 606, 607, 1, 0, 0, 0, 607, 608, 3, 54, 27, 0, 608, 625, 3, 94, 47, 0, 609, 610, 5, 23, 0, 0,
		610, 611, 3, 326, 163, 0, 611, 612, 3, 154, 77, 0, 612, 626, 1, 0, 0, 0, 613, 614, 3, 326, 163,
		0, 614, 615, 5, 55, 0, 0, 615, 616, 3, 326, 163, 0, 616, 617, 3, 92, 46, 0, 617, 619, 1, 0, 0,
		0, 618, 613, 1, 0, 0, 0, 618, 619, 1, 0, 0, 0, 619, 623, 1, 0, 0, 0, 620, 621, 3, 326, 163, 0, 621,
		622, 3, 102, 51, 0, 622, 624, 1, 0, 0, 0, 623, 620, 1, 0, 0, 0, 623, 624, 1, 0, 0, 0, 624, 626,
		1, 0, 0, 0, 625, 609, 1, 0, 0, 0, 625, 618, 1, 0, 0, 0, 625, 626, 1, 0, 0, 0, 626, 51, 1, 0, 0, 0,
		627, 628, 3, 54, 27, 0, 628, 629, 3, 326, 163, 0, 629, 630, 3, 102, 51, 0, 630, 53, 1, 0, 0, 0,
		631, 634, 3, 318, 159, 0, 632, 634, 3, 314, 157, 0, 633, 631, 1, 0, 0, 0, 633, 632, 1, 0, 0, 0,
		634, 55, 1, 0, 0, 0, 635, 638, 3, 74, 37, 0, 636, 638, 5, 58, 0, 0, 637, 635, 1, 0, 0, 0, 637, 636,
		1, 0, 0, 0, 638, 57, 1, 0, 0, 0, 639, 640, 3, 164, 82, 0, 640, 59, 1, 0, 0, 0, 641, 648, 3, 62, 31,
		0, 642, 643, 5, 93, 0, 0, 643, 644, 3, 326, 163, 0, 644, 645, 3, 62, 31, 0, 645, 647, 1, 0, 0,
		0, 646, 642, 1, 0, 0, 0, 647, 650, 1, 0, 0, 0, 648, 646, 1, 0, 0, 0, 648, 649, 1, 0, 0, 0, 649, 61,
		1, 0, 0, 0, 650, 648, 1, 0, 0, 0, 651, 657, 3, 64, 32, 0, 652, 653, 3, 326, 163, 0, 653, 654, 5,
		95, 0, 0, 654, 655, 3, 326, 163, 0, 655, 656, 3, 66, 33, 0, 656, 658, 1, 0, 0, 0, 657, 652, 1,
		0, 0, 0, 657, 658, 1, 0, 0, 0, 658, 63, 1, 0, 0, 0, 659, 660, 3, 318, 159, 0, 660, 65, 1, 0, 0, 0,
		661, 662, 3, 228, 114, 0, 662, 67, 1, 0, 0, 0, 663, 671, 3, 66, 33, 0, 664, 665, 3, 326, 163,
		0, 665, 666, 5, 93, 0, 0, 666, 667, 3, 326, 163, 0, 667, 668, 3, 66, 33, 0, 668, 670, 1, 0, 0,
		0, 669, 664, 1, 0, 0, 0, 670, 673, 1, 0, 0, 0, 671, 669, 1, 0, 0, 0, 671, 672, 1, 0, 0, 0, 672, 674,
		1, 0, 0, 0, 673, 671, 1, 0, 0, 0, 674, 676, 3, 326, 163, 0, 675, 677, 5, 93, 0, 0, 676, 675, 1,
		0, 0, 0, 676, 677, 1, 0, 0, 0, 677, 69, 1, 0, 0, 0, 678, 679, 3, 140, 70, 0, 679, 680, 5, 90, 0,
		0, 680, 681, 5, 91, 0, 0, 681, 683, 1, 0, 0, 0, 682, 678, 1, 0, 0, 0, 683, 684, 1, 0, 0, 0, 684,
		682, 1, 0, 0, 0, 684, 685, 1, 0, 0, 0, 685, 71, 1, 0, 0, 0, 686, 688, 3, 70, 35, 0, 687, 686, 1,
		0, 0, 0, 687, 688, 1, 0, 0, 0, 688, 73, 1, 0, 0, 0, 689, 692, 3, 140, 70, 0, 690, 693, 3, 84, 42,
		0, 691, 693, 3, 82, 41, 0, 692, 690, 1, 0, 0, 0, 692, 691, 1, 0, 0, 0, 693, 694, 1, 0, 0, 0, 694,
		695, 3, 72, 36, 0, 695, 75, 1, 0, 0, 0, 696, 702, 3, 140, 70, 0, 697, 700, 3, 84, 42, 0, 698, 700,
		5, 58, 0, 0, 699, 697, 1, 0, 0, 0, 699, 698, 1, 0, 0, 0, 700, 703, 1, 0, 0, 0, 701, 703, 3, 80, 40,
		0, 702, 699, 1, 0, 0, 0, 702, 701, 1, 0, 0, 0, 703, 704, 1, 0, 0, 0, 704, 705, 3, 72, 36, 0, 705,
		77, 1, 0, 0, 0, 706, 709, 3, 110, 55, 0, 707, 709, 3, 112, 56, 0, 708, 706, 1, 0, 0, 0, 708, 707,
		1, 0, 0, 0, 709, 711, 1, 0, 0, 0, 710, 712, 3, 86, 43, 0, 711, 710, 1, 0, 0, 0, 711, 712, 1, 0, 0,
		0, 712, 79, 1, 0, 0, 0, 713, 715, 3, 110, 55, 0, 714, 716, 3, 86, 43, 0, 715, 714, 1, 0, 0, 0, 715,
		716, 1, 0, 0, 0, 716, 81, 1, 0, 0, 0, 717, 719, 3, 112, 56, 0, 718, 720, 3, 86, 43, 0, 719, 718,
		1, 0, 0, 0, 719, 720, 1, 0, 0, 0, 720, 83, 1, 0, 0, 0, 721, 722, 5, 13, 0, 0, 722, 85, 1, 0, 0, 0,
		723, 724, 5, 97, 0, 0, 724, 725, 3, 326, 163, 0, 725, 732, 3, 88, 44, 0, 726, 727, 5, 93, 0, 0,
		727, 728, 3, 326, 163, 0, 728, 729, 3, 88, 44, 0, 729, 731, 1, 0, 0, 0, 730, 726, 1, 0, 0, 0, 731,
		734, 1, 0, 0, 0, 732, 730, 1, 0, 0, 0, 732, 733, 1, 0, 0, 0, 733, 735, 1, 0, 0, 0, 734, 732, 1, 0,
		0, 0, 735, 736, 3, 326, 163, 0, 736, 737, 5, 96, 0, 0, 737, 87, 1, 0, 0, 0, 738, 748, 3, 76, 38,
		0, 739, 740, 3, 140, 70, 0, 740, 745, 5, 100, 0, 0, 741, 742, 7, 3, 0, 0, 742, 743, 3, 326, 163,
		0, 743, 744, 3, 76, 38, 0, 744, 746, 1, 0, 0, 0, 745, 741, 1, 0, 0, 0, 745, 746, 1, 0, 0, 0, 746,
		748, 1, 0, 0, 0, 747, 738, 1, 0, 0, 0, 747, 739, 1, 0, 0, 0, 748, 89, 1, 0, 0, 0, 749, 750, 3, 140,
		70, 0, 750, 751, 3, 110, 55, 0, 751, 91, 1, 0, 0, 0, 752, 759, 3, 90, 45, 0, 753, 754, 5, 93, 0,
		0, 754, 755, 3, 326, 163, 0, 755, 756, 3, 90, 45, 0, 756, 758, 1, 0, 0, 0, 757, 753, 1, 0, 0, 0,
		758, 761, 1, 0, 0, 0, 759, 757, 1, 0, 0, 0, 759, 760, 1, 0, 0, 0, 760, 93, 1, 0, 0, 0, 761, 759,
		1, 0, 0, 0, 762, 764, 5, 86, 0, 0, 763, 765, 3, 96, 48, 0, 764, 763, 1, 0, 0, 0, 764, 765, 1, 0,
		0, 0, 765, 766, 1, 0, 0, 0, 766, 767, 3, 324, 162, 0, 767, 95, 1, 0, 0, 0, 768, 771, 3, 100, 50,
		0, 769, 771, 3, 98, 49, 0, 770, 768, 1, 0, 0, 0, 770, 769, 1, 0, 0, 0, 771, 778, 1, 0, 0, 0, 772,
		773, 5, 93, 0, 0, 773, 774, 3, 326, 163, 0, 774, 775, 3, 100, 50, 0, 775, 777, 1, 0, 0, 0, 776,
		772, 1, 0, 0, 0, 777, 780, 1, 0, 0, 0, 778, 776, 1, 0, 0, 0, 778, 779, 1, 0, 0, 0, 779, 97, 1, 0,
		0, 0, 780, 778, 1, 0, 0, 0, 781, 782, 3, 76, 38, 0, 782, 783, 5, 53, 0, 0, 783, 99, 1, 0, 0, 0, 784,
		786, 3, 26, 13, 0, 785, 787, 3, 76, 38, 0, 786, 785, 1, 0, 0, 0, 786, 787, 1, 0, 0, 0, 787, 789,
		1, 0, 0, 0, 788, 790, 5, 133, 0, 0, 789, 788, 1, 0, 0, 0, 789, 790, 1, 0, 0, 0, 790, 791, 1, 0, 0,
		0, 791, 797, 3, 64, 32, 0, 792, 793, 3, 326, 163, 0, 793, 794, 5, 95, 0, 0, 794, 795, 3, 326,
		163, 0, 795, 796, 3, 240, 120, 0, 796, 798, 1, 0, 0, 0, 797, 792, 1, 0, 0, 0, 797, 798, 1, 0, 0,
		0, 798, 101, 1, 0, 0, 0, 799, 800, 3, 158, 79, 0, 800, 103, 1, 0, 0, 0, 801, 806, 3, 106, 53, 0,
		802, 803, 5, 94, 0, 0, 803, 805, 3, 106, 53, 0, 804, 802, 1, 0, 0, 0, 805, 808, 1, 0, 0, 0, 806,
		804, 1, 0, 0, 0, 806, 807, 1, 0, 0, 0, 807, 105, 1, 0, 0, 0, 808, 806, 1, 0, 0, 0, 809, 815, 3, 318,
		159, 0, 810, 815, 5, 8, 0, 0, 811, 815, 5, 9, 0, 0, 812, 815, 5, 7, 0, 0, 813, 815, 5, 10, 0, 0,
		814, 809, 1, 0, 0, 0, 814, 810, 1, 0, 0, 0, 814, 811, 1, 0, 0, 0, 814, 812, 1, 0, 0, 0, 814, 813,
		1, 0, 0, 0, 815, 107, 1, 0, 0, 0, 816, 817, 3, 106, 53, 0, 817, 818, 5, 94, 0, 0, 818, 820, 1, 0,
		0, 0, 819, 816, 1, 0, 0, 0, 820, 823, 1, 0, 0, 0, 821, 819, 1, 0, 0, 0, 821, 822, 1, 0, 0, 0, 822,
		109, 1, 0, 0, 0, 823, 821, 1, 0, 0, 0, 824, 825, 3, 108, 54, 0, 825, 826, 3, 318, 159, 0, 826,
		111, 1, 0, 0, 0, 827, 828, 3, 108, 54, 0, 828, 833, 3, 316, 158, 0, 829, 830, 5, 94, 0, 0, 830,
		832, 3, 316, 158, 0, 831, 829, 1, 0, 0, 0, 832, 835, 1, 0, 0, 0, 833, 831, 1, 0, 0, 0, 833, 834,
		1, 0, 0, 0, 834, 113, 1, 0, 0, 0, 835, 833, 1, 0, 0, 0, 836, 842, 5, 61, 0, 0, 837, 842, 5, 62, 0,
		0, 838, 842, 3, 314, 157, 0, 839, 842, 5, 63, 0, 0, 840, 842, 5, 64, 0, 0, 841, 836, 1, 0, 0, 0,
		841, 837, 1, 0, 0, 0, 841, 838, 1, 0, 0, 0, 841, 839, 1, 0, 0, 0, 841, 840, 1, 0, 0, 0, 842, 115,
		1, 0, 0, 0, 843, 844, 5, 2, 0, 0, 844, 849, 3, 118, 59, 0, 845, 846, 5, 4, 0, 0, 846, 848, 3, 118,
		59, 0, 847, 845, 1, 0, 0, 0, 848, 851, 1, 0, 0, 0, 849, 847, 1, 0, 0, 0, 849, 850, 1, 0, 0, 0, 850,
		852, 1, 0, 0, 0, 851, 849, 1, 0, 0, 0, 852, 853, 5, 3, 0, 0, 853, 117, 1, 0, 0, 0, 854, 857, 3, 120,
		60, 0, 855, 857, 3, 132, 66, 0, 856, 854, 1, 0, 0, 0, 856, 855, 1, 0, 0, 0, 857, 119, 1, 0, 0, 0,
		858, 862, 3, 318, 159, 0, 859, 861, 5, 5, 0, 0, 860, 859, 1, 0, 0, 0, 861, 864, 1, 0, 0, 0, 862,
		860, 1, 0, 0, 0, 862, 863, 1, 0, 0, 0, 863, 121, 1, 0, 0, 0, 864, 862, 1, 0, 0, 0, 865, 866, 3, 126,
		63, 0, 866, 867, 3, 326, 163, 0, 867, 868, 5, 83, 0, 0, 868, 869, 3, 326, 163, 0, 869, 870, 3,
		130, 65, 0, 870, 123, 1, 0, 0, 0, 871, 872, 3, 128, 64, 0, 872, 873, 3, 326, 163, 0, 873, 874,
		5, 83, 0, 0, 874, 875, 3, 326, 163, 0, 875, 876, 3, 130, 65, 0, 876, 125, 1, 0, 0, 0, 877, 878,
		3, 94, 47, 0, 878, 127, 1, 0, 0, 0, 879, 882, 3, 94, 47, 0, 880, 882, 3, 64, 32, 0, 881, 879, 1,
		0, 0, 0, 881, 880, 1, 0, 0, 0, 882, 129, 1, 0, 0, 0, 883, 886, 3, 158, 79, 0, 884, 886, 3, 230,
		115, 0, 885, 883, 1, 0, 0, 0, 885, 884, 1, 0, 0, 0, 886, 131, 1, 0, 0, 0, 887, 896, 5, 88, 0, 0,
		888, 892, 3, 326, 163, 0, 889, 890, 3, 96, 48, 0, 890, 891, 3, 326, 163, 0, 891, 893, 1, 0, 0,
		0, 892, 889, 1, 0, 0, 0, 892, 893, 1, 0, 0, 0, 893, 894, 1, 0, 0, 0, 894, 895, 5, 83, 0, 0, 895,
		897, 1, 0, 0, 0, 896, 888, 1, 0, 0, 0, 896, 897, 1, 0, 0, 0, 897, 899, 1, 0, 0, 0, 898, 900, 3, 328,
		164, 0, 899, 898, 1, 0, 0, 0, 899, 900, 1, 0, 0, 0, 900, 901, 1, 0, 0, 0, 901, 902, 3, 136, 68,
		0, 902, 903, 5, 89, 0, 0, 903, 133, 1, 0, 0, 0, 904, 907, 3, 132, 66, 0, 905, 907, 3, 122, 61,
		0, 906, 904, 1, 0, 0, 0, 906, 905, 1, 0, 0, 0, 907, 135, 1, 0, 0, 0, 908, 910, 3, 138, 69, 0, 909,
		908, 1, 0, 0, 0, 909, 910, 1, 0, 0, 0, 910, 137, 1, 0, 0, 0, 911, 917, 3, 160, 80, 0, 912, 913,
		3, 328, 164, 0, 913, 914, 3, 160, 80, 0, 914, 916, 1, 0, 0, 0, 915, 912, 1, 0, 0, 0, 916, 919,
		1, 0, 0, 0, 917, 915, 1, 0, 0, 0, 917, 918, 1, 0, 0, 0, 918, 921, 1, 0, 0, 0, 919, 917, 1, 0, 0, 0,
		920, 922, 3, 328, 164, 0, 921, 920, 1, 0, 0, 0, 921, 922, 1, 0, 0, 0, 922, 139, 1, 0, 0, 0, 923,
		929, 3, 142, 71, 0, 924, 925, 3, 326, 163, 0, 925, 926, 3, 142, 71, 0, 926, 928, 1, 0, 0, 0, 927,
		924, 1, 0, 0, 0, 928, 931, 1, 0, 0, 0, 929, 927, 1, 0, 0, 0, 929, 930, 1, 0, 0, 0, 930, 932, 1, 0,
		0, 0, 931, 929, 1, 0, 0, 0, 932, 933, 3, 326, 163, 0, 933, 935, 1, 0, 0, 0, 934, 923, 1, 0, 0, 0,
		934, 935, 1, 0, 0, 0, 935, 141, 1, 0, 0, 0, 936, 937, 5, 132, 0, 0, 937, 945, 3, 146, 73, 0, 938,
		939, 3, 326, 163, 0, 939, 941, 5, 86, 0, 0, 940, 942, 3, 144, 72, 0, 941, 940, 1, 0, 0, 0, 941,
		942, 1, 0, 0, 0, 942, 943, 1, 0, 0, 0, 943, 944, 3, 324, 162, 0, 944, 946, 1, 0, 0, 0, 945, 938,
		1, 0, 0, 0, 945, 946, 1, 0, 0, 0, 946, 143, 1, 0, 0, 0, 947, 950, 3, 148, 74, 0, 948, 950, 3, 154,
		77, 0, 949, 947, 1, 0, 0, 0, 949, 948, 1, 0, 0, 0, 950, 145, 1, 0, 0, 0, 951, 952, 3, 110, 55, 0,
		952, 147, 1, 0, 0, 0, 953, 958, 3, 150, 75, 0, 954, 955, 5, 93, 0, 0, 955, 957, 3, 150, 75, 0,
		956, 954, 1, 0, 0, 0, 957, 960, 1, 0, 0, 0, 958, 956, 1, 0, 0, 0, 958, 959, 1, 0, 0, 0, 959, 149,
		1, 0, 0, 0, 960, 958, 1, 0, 0, 0, 961, 962, 3, 152, 76, 0, 962, 963, 3, 326, 163, 0, 963, 964,
		5, 95, 0, 0, 964, 965, 3, 326, 163, 0, 965, 966, 3, 154, 77, 0, 966, 151, 1, 0, 0, 0, 967, 970,
		3, 318, 159, 0, 968, 970, 3, 322, 161, 0, 969, 967, 1, 0, 0, 0, 969, 968, 1, 0, 0, 0, 970, 153,
		1, 0, 0, 0, 971, 975, 3, 156, 78, 0, 972, 975, 3, 142, 71, 0, 973, 975, 3, 240, 120, 0, 974, 971,
		1, 0, 0, 0, 974, 972, 1, 0, 0, 0, 974, 973, 1, 0, 0, 0, 975, 155, 1, 0, 0, 0, 976, 988, 5, 90, 0,
		0, 977, 982, 3, 154, 77, 0, 978, 979, 5, 93, 0, 0, 979, 981, 3, 154, 77, 0, 980, 978, 1, 0, 0,
		0, 981, 984, 1, 0, 0, 0, 982, 980, 1, 0, 0, 0, 982, 983, 1, 0, 0, 0, 983, 986, 1, 0, 0, 0, 984, 982,
		1, 0, 0, 0, 985, 987, 5, 93, 0, 0, 986, 985, 1, 0, 0, 0, 986, 987, 1, 0, 0, 0, 987, 989, 1, 0, 0,
		0, 988, 977, 1, 0, 0, 0, 988, 989, 1, 0, 0, 0, 989, 990, 1, 0, 0, 0, 990, 991, 5, 91, 0, 0, 991,
		157, 1, 0, 0, 0, 992, 994, 5, 88, 0, 0, 993, 995, 3, 328, 164, 0, 994, 993, 1, 0, 0, 0, 994, 995,
		1, 0, 0, 0, 995, 996, 1, 0, 0, 0, 996, 997, 3, 136, 68, 0, 997, 998, 5, 89, 0, 0, 998, 159, 1, 0,
		0, 0, 999, 1002, 3, 162, 81, 0, 1000, 1002, 3, 190, 95, 0, 1001, 999, 1, 0, 0, 0, 1001, 1000,
		1, 0, 0, 0, 1002, 161, 1, 0, 0, 0, 1003, 1004, 4, 81, 2, 0, 1004, 1005, 3, 164, 82, 0, 1005, 163,
		1, 0, 0, 0, 1006, 1007, 3, 16, 8, 0, 1007, 1018, 3, 326, 163, 0, 1008, 1010, 3, 76, 38, 0, 1009,
		1008, 1, 0, 0, 0, 1009, 1010, 1, 0, 0, 0, 1010, 1011, 1, 0, 0, 0, 1011, 1019, 3, 60, 30, 0, 1012,
		1013, 3, 166, 83, 0, 1013, 1014, 3, 326, 163, 0, 1014, 1015, 5, 95, 0, 0, 1015, 1016, 3, 326,
		163, 0, 1016, 1017, 3, 66, 33, 0, 1017, 1019, 1, 0, 0, 0, 1018, 1009, 1, 0, 0, 0, 1018, 1012,
		1, 0, 0, 0, 1019, 1024, 1, 0, 0, 0, 1020, 1021, 3, 76, 38, 0, 1021, 1022, 3, 60, 30, 0, 1022,
		1024, 1, 0, 0, 0, 1023, 1006, 1, 0, 0, 0, 1023, 1020, 1, 0, 0, 0, 1024, 165, 1, 0, 0, 0, 1025,
		1026, 5, 86, 0, 0, 1026, 1031, 3, 168, 84, 0, 1027, 1028, 5, 93, 0, 0, 1028, 1030, 3, 168, 84,
		0, 1029, 1027, 1, 0, 0, 0, 1030, 1033, 1, 0, 0, 0, 1031, 1029, 1, 0, 0, 0, 1031, 1032, 1, 0, 0,
		0, 1032, 1034, 1, 0, 0, 0, 1033, 1031, 1, 0, 0, 0, 1034, 1035, 3, 324, 162, 0, 1035, 167, 1,
		0, 0, 0, 1036, 1038, 3, 76, 38, 0, 1037, 1036, 1, 0, 0, 0, 1037, 1038, 1, 0, 0, 0, 1038, 1039,
		1, 0, 0, 0, 1039, 1040, 3, 64, 32, 0, 1040, 169, 1, 0, 0, 0, 1041, 1042, 5, 86, 0, 0, 1042, 1045,
		3, 64, 32, 0, 1043, 1044, 5, 93, 0, 0, 1044, 1046, 3, 64, 32, 0, 1045, 1043, 1, 0, 0, 0, 1046,
		1047, 1, 0, 0, 0, 1047, 1045, 1, 0, 0, 0, 1047, 1048, 1, 0, 0, 0, 1048, 1049, 1, 0, 0, 0, 1049,
		1050, 3, 324, 162, 0, 1050, 171, 1, 0, 0, 0, 1051, 1054, 3, 174, 87, 0, 1052, 1054, 3, 176,
		88, 0, 1053, 1051, 1, 0, 0, 0, 1053, 1052, 1, 0, 0, 0, 1054, 173, 1, 0, 0, 0, 1055, 1056, 5, 31,
		0, 0, 1056, 1057, 3, 222, 111, 0, 1057, 1058, 3, 326, 163, 0, 1058, 1067, 3, 190, 95, 0, 1059,
		1062, 3, 326, 163, 0, 1060, 1062, 3, 328, 164, 0, 1061, 1059, 1, 0, 0, 0, 1061, 1060, 1, 0,
		0, 0, 1062, 1063, 1, 0, 0, 0, 1063, 1064, 5, 25, 0, 0, 1064, 1065, 3, 326, 163, 0, 1065, 1066,
		3, 190, 95, 0, 1066, 1068, 1, 0, 0, 0, 1067, 1061, 1, 0, 0, 0, 1067, 1068, 1, 0, 0, 0, 1068, 175,
		1, 0, 0, 0, 1069, 1070, 5, 51, 0, 0, 1070, 1071, 3, 222, 111, 0, 1071, 1072, 3, 326, 163, 0,
		1072, 1073, 5, 88, 0, 0, 1073, 1081, 3, 326, 163, 0, 1074, 1076, 3, 204, 102, 0, 1075, 1074,
		1, 0, 0, 0, 1076, 1077, 1, 0, 0, 0, 1077, 1075, 1, 0, 0, 0, 1077, 1078, 1, 0, 0, 0, 1078, 1079,
		1, 0, 0, 0, 1079, 1080, 3, 326, 163, 0, 1080, 1082, 1, 0, 0, 0, 1081, 1075, 1, 0, 0, 0, 1081,
		1082, 1, 0, 0, 0, 1082, 1083, 1, 0, 0, 0, 1083, 1084, 5, 89, 0, 0, 1084, 177, 1, 0, 0, 0, 1085,
		1086, 5, 30, 0, 0, 1086, 1087, 5, 86, 0, 0, 1087, 1088, 3, 208, 104, 0, 1088, 1089, 3, 324,
		162, 0, 1089, 1090, 3, 326, 163, 0, 1090, 1091, 3, 190, 95, 0, 1091, 1105, 1, 0, 0, 0, 1092,
		1093, 5, 60, 0, 0, 1093, 1094, 3, 222, 111, 0, 1094, 1095, 3, 326, 163, 0, 1095, 1096, 3, 190,
		95, 0, 1096, 1105, 1, 0, 0, 0, 1097, 1098, 5, 24, 0, 0, 1098, 1099, 3, 326, 163, 0, 1099, 1100,
		3, 190, 95, 0, 1100, 1101, 3, 326, 163, 0, 1101, 1102, 5, 60, 0, 0, 1102, 1103, 3, 222, 111,
		0, 1103, 1105, 1, 0, 0, 0, 1104, 1085, 1, 0, 0, 0, 1104, 1092, 1, 0, 0, 0, 1104, 1097, 1, 0, 0,
		0, 1105, 179, 1, 0, 0, 0, 1106, 1108, 5, 22, 0, 0, 1107, 1109, 3, 318, 159, 0, 1108, 1107, 1,
		0, 0, 0, 1108, 1109, 1, 0, 0, 0, 1109, 181, 1, 0, 0, 0, 1110, 1112, 5, 16, 0, 0, 1111, 1113, 3,
		318, 159, 0, 1112, 1111, 1, 0, 0, 0, 1112, 1113, 1, 0, 0, 0, 1113, 183, 1, 0, 0, 0, 1114, 1115,
		5, 17, 0, 0, 1115, 1116, 3, 240, 120, 0, 1116, 185, 1, 0, 0, 0, 1117, 1119, 5, 57, 0, 0, 1118,
		1120, 3, 198, 99, 0, 1119, 1118, 1, 0, 0, 0, 1119, 1120, 1, 0, 0, 0, 1120, 1121, 1, 0, 0, 0, 1121,
		1122, 3, 326, 163, 0, 1122, 1128, 3, 158, 79, 0, 1123, 1124, 3, 326, 163, 0, 1124, 1125, 3,
		192, 96, 0, 1125, 1127, 1, 0, 0, 0, 1126, 1123, 1, 0, 0, 0, 1127, 1130, 1, 0, 0, 0, 1128, 1126,
		1, 0, 0, 0, 1128, 1129, 1, 0, 0, 0, 1129, 1134, 1, 0, 0, 0, 1130, 1128, 1, 0, 0, 0, 1131, 1132,
		3, 326, 163, 0, 1132, 1133, 3, 196, 98, 0, 1133, 1135, 1, 0, 0, 0, 1134, 1131, 1, 0, 0, 0, 1134,
		1135, 1, 0, 0, 0, 1135, 187, 1, 0, 0, 0, 1136, 1137, 5, 15, 0, 0, 1137, 1143, 3, 240, 120, 0,
		1138, 1139, 3, 326, 163, 0, 1139, 1140, 7, 4, 0, 0, 1140, 1141, 3, 326, 163, 0, 1141, 1142,
		3, 240, 120, 0, 1142, 1144, 1, 0, 0, 0, 1143, 1138, 1, 0, 0, 0, 1143, 1144, 1, 0, 0, 0, 1144,
		189, 1, 0, 0, 0, 1145, 1174, 3, 158, 79, 0, 1146, 1174, 3, 172, 86, 0, 1147, 1174, 3, 178, 89,
		0, 1148, 1174, 3, 186, 93, 0, 1149, 1150, 5, 52, 0, 0, 1150, 1151, 3, 222, 111, 0, 1151, 1152,
		3, 326, 163, 0, 1152, 1153, 3, 158, 79, 0, 1153, 1174, 1, 0, 0, 0, 1154, 1156, 5, 46, 0, 0, 1155,
		1157, 3, 240, 120, 0, 1156, 1155, 1, 0, 0, 0, 1156, 1157, 1, 0, 0, 0, 1157, 1174, 1, 0, 0, 0,
		1158, 1159, 5, 54, 0, 0, 1159, 1174, 3, 240, 120, 0, 1160, 1174, 3, 182, 91, 0, 1161, 1174,
		3, 180, 90, 0, 1162, 1163, 4, 95, 3, 0, 1163, 1174, 3, 184, 92, 0, 1164, 1165, 3, 318, 159,
		0, 1165, 1166, 5, 101, 0, 0, 1166, 1167, 3, 326, 163, 0, 1167, 1168, 3, 190, 95, 0, 1168, 1174,
		1, 0, 0, 0, 1169, 1174, 3, 188, 94, 0, 1170, 1174, 3, 162, 81, 0, 1171, 1174, 3, 230, 115, 0,
		1172, 1174, 5, 92, 0, 0, 1173, 1145, 1, 0, 0, 0, 1173, 1146, 1, 0, 0, 0, 1173, 1147, 1, 0, 0,
		0, 1173, 1148, 1, 0, 0, 0, 1173, 1149, 1, 0, 0, 0, 1173, 1154, 1, 0, 0, 0, 1173, 1158, 1, 0, 0,
		0, 1173, 1160, 1, 0, 0, 0, 1173, 1161, 1, 0, 0, 0, 1173, 1162, 1, 0, 0, 0, 1173, 1164, 1, 0, 0,
		0, 1173, 1169, 1, 0, 0, 0, 1173, 1170, 1, 0, 0, 0, 1173, 1171, 1, 0, 0, 0, 1173, 1172, 1, 0, 0,
		0, 1174, 191, 1, 0, 0, 0, 1175, 1176, 5, 19, 0, 0, 1176, 1177, 5, 86, 0, 0, 1177, 1179, 3, 26,
		13, 0, 1178, 1180, 3, 194, 97, 0, 1179, 1178, 1, 0, 0, 0, 1179, 1180, 1, 0, 0, 0, 1180, 1181,
		1, 0, 0, 0, 1181, 1182, 3, 318, 159, 0, 1182, 1183, 3, 324, 162, 0, 1183, 1184, 3, 326, 163,
		0, 1184, 1185, 3, 158, 79, 0, 1185, 193, 1, 0, 0, 0, 1186, 1191, 3, 110, 55, 0, 1187, 1188,
		5, 115, 0, 0, 1188, 1190, 3, 110, 55, 0, 1189, 1187, 1, 0, 0, 0, 1190, 1193, 1, 0, 0, 0, 1191,
		1189, 1, 0, 0, 0, 1191, 1192, 1, 0, 0, 0, 1192, 195, 1, 0, 0, 0, 1193, 1191, 1, 0, 0, 0, 1194,
		1195, 5, 29, 0, 0, 1195, 1196, 3, 326, 163, 0, 1196, 1197, 3, 158, 79, 0, 1197, 197, 1, 0, 0,
		0, 1198, 1199, 5, 86, 0, 0, 1199, 1200, 3, 326, 163, 0, 1200, 1202, 3, 200, 100, 0, 1201, 1203,
		3, 328, 164, 0, 1202, 1201, 1, 0, 0, 0, 1202, 1203, 1, 0, 0, 0, 1203, 1204, 1, 0, 0, 0, 1204,
		1205, 3, 324, 162, 0, 1205, 199, 1, 0, 0, 0, 1206, 1212, 3, 202, 101, 0, 1207, 1208, 3, 328,
		164, 0, 1208, 1209, 3, 202, 101, 0, 1209, 1211, 1, 0, 0, 0, 1210, 1207, 1, 0, 0, 0, 1211, 1214,
		1, 0, 0, 0, 1212, 1210, 1, 0, 0, 0, 1212, 1213, 1, 0, 0, 0, 1213, 201, 1, 0, 0, 0, 1214, 1212,
		1, 0, 0, 0, 1215, 1218, 3, 162, 81, 0, 1216, 1218, 3, 240, 120, 0, 1217, 1215, 1, 0, 0, 0, 1217,
		1216, 1, 0, 0, 0, 1218, 203, 1, 0, 0, 0, 1219, 1225, 3, 206, 103, 0, 1220, 1221, 3, 326, 163,
		0, 1221, 1222, 3, 206, 103, 0, 1222, 1224, 1, 0, 0, 0, 1223, 1220, 1, 0, 0, 0, 1224, 1227, 1,
		0, 0, 0, 1225, 1223, 1, 0, 0, 0, 1225, 1226, 1, 0, 0, 0, 1226, 1228, 1, 0, 0, 0, 1227, 1225, 1,
		0, 0, 0, 1228, 1229, 3, 326, 163, 0, 1229, 1230, 3, 138, 69, 0, 1230, 205, 1, 0, 0, 0, 1231,
		1232, 5, 18, 0, 0, 1232, 1233, 3, 240, 120, 0, 1233, 1234, 5, 101, 0, 0, 1234, 1238, 1, 0, 0,
		0, 1235, 1236, 5, 23, 0, 0, 1236, 1238, 5, 101, 0, 0, 1237, 1231, 1, 0, 0, 0, 1237, 1235, 1,
		0, 0, 0, 1238, 207, 1, 0, 0, 0, 1239, 1242, 3, 210, 105, 0, 1240, 1242, 3, 212, 106, 0, 1241,
		1239, 1, 0, 0, 0, 1241, 1240, 1, 0, 0, 0, 1242, 209, 1, 0, 0, 0, 1243, 1245, 3, 26, 13, 0, 1244,
		1246, 3, 76, 38, 0, 1245, 1244, 1, 0, 0, 0, 1245, 1246, 1, 0, 0, 0, 1246, 1247, 1, 0, 0, 0, 1247,
		1248, 3, 64, 32, 0, 1248, 1249, 7, 5, 0, 0, 1249, 1250, 3, 240, 120, 0, 1250, 211, 1, 0, 0, 0,
		1251, 1253, 3, 214, 107, 0, 1252, 1251, 1, 0, 0, 0, 1252, 1253, 1, 0, 0, 0, 1253, 1254, 1, 0,
		0, 0, 1254, 1256, 5, 92, 0, 0, 1255, 1257, 3, 240, 120, 0, 1256, 1255, 1, 0, 0, 0, 1256, 1257,
		1, 0, 0, 0, 1257, 1258, 1, 0, 0, 0, 1258, 1260, 5, 92, 0, 0, 1259, 1261, 3, 216, 108, 0, 1260,
		1259, 1, 0, 0, 0, 1260, 1261, 1, 0, 0, 0, 1261, 213, 1, 0, 0, 0, 1262, 1265, 3, 162, 81, 0, 1263,
		1265, 3, 224, 112, 0, 1264, 1262, 1, 0, 0, 0, 1264, 1263, 1, 0, 0, 0, 1265, 215, 1, 0, 0, 0, 1266,
		1267, 3, 224, 112, 0, 1267, 217, 1, 0, 0, 0, 1268, 1269, 5, 86, 0, 0, 1269, 1270, 3, 76, 38,
		0, 1270, 1271, 3, 324, 162, 0, 1271, 219, 1, 0, 0, 0, 1272, 1273, 3, 222, 111, 0, 1273, 221,
		1, 0, 0, 0, 1274, 1275, 5, 86, 0, 0, 1275, 1276, 3, 228, 114, 0, 1276, 1277, 3, 324, 162, 0,
		1277, 223, 1, 0, 0, 0, 1278, 1285, 3, 226, 113, 0, 1279, 1280, 5, 93, 0, 0, 1280, 1281, 3, 326,
		163, 0, 1281, 1282, 3, 226, 113, 0, 1282, 1284, 1, 0, 0, 0, 1283, 1279, 1, 0, 0, 0, 1284, 1287,
		1, 0, 0, 0, 1285, 1283, 1, 0, 0, 0, 1285, 1286, 1, 0, 0, 0, 1286, 225, 1, 0, 0, 0, 1287, 1285,
		1, 0, 0, 0, 1288, 1290, 5, 112, 0, 0, 1289, 1288, 1, 0, 0, 0, 1289, 1290, 1, 0, 0, 0, 1290, 1291,
		1, 0, 0, 0, 1291, 1292, 3, 240, 120, 0, 1292, 227, 1, 0, 0, 0, 1293, 1296, 3, 230, 115, 0, 1294,
		1296, 3, 124, 62, 0, 1295, 1293, 1, 0, 0, 0, 1295, 1294, 1, 0, 0, 0, 1296, 229, 1, 0, 0, 0, 1297,
		1298, 3, 244, 122, 0, 1298, 231, 1, 0, 0, 0, 1299, 1301, 3, 248, 124, 0, 1300, 1302, 7, 6, 0,
		0, 1301, 1300, 1, 0, 0, 0, 1301, 1302, 1, 0, 0, 0, 1302, 233, 1, 0, 0, 0, 1303, 1304, 5, 51, 0,
		0, 1304, 1305, 3, 222, 111, 0, 1305, 1306, 3, 326, 163, 0, 1306, 1307, 5, 88, 0, 0, 1307, 1311,
		3, 326, 163, 0, 1308, 1310, 3, 236, 118, 0, 1309, 1308, 1, 0, 0, 0, 1310, 1313, 1, 0, 0, 0, 1311,
		1309, 1, 0, 0, 0, 1311, 1312, 1, 0, 0, 0, 1312, 1314, 1, 0, 0, 0, 1313, 1311, 1, 0, 0, 0, 1314,
		1315, 3, 326, 163, 0, 1315, 1316, 5, 89, 0, 0, 1316, 235, 1, 0, 0, 0, 1317, 1318, 3, 238, 119,
		0, 1318, 1319, 3, 326, 163, 0, 1319, 1321, 1, 0, 0, 0, 1320, 1317, 1, 0, 0, 0, 1321, 1322, 1,
		0, 0, 0, 1322, 1320, 1, 0, 0, 0, 1322, 1323, 1, 0, 0, 0, 1323, 1324, 1, 0, 0, 0, 1324, 1325, 3,
		138, 69, 0, 1325, 237, 1, 0, 0, 0, 1326, 1327, 5, 18, 0, 0, 1327, 1330, 3, 224, 112, 0, 1328,
		1330, 5, 23, 0, 0, 1329, 1326, 1, 0, 0, 0, 1329, 1328, 1, 0, 0, 0, 1330, 1331, 1, 0, 0, 0, 1331,
		1332, 7, 7, 0, 0, 1332, 239, 1, 0, 0, 0, 1333, 1334, 6, 120, -1, 0, 1334, 1335, 3, 218, 109,
		0, 1335, 1336, 3, 242, 121, 0, 1336, 1352, 1, 0, 0, 0, 1337, 1352, 3, 232, 116, 0, 1338, 1352,
		3, 234, 117, 0, 1339, 1340, 7, 8, 0, 0, 1340, 1341, 3, 326, 163, 0, 1341, 1342, 3, 240, 120,
		18, 1342, 1352, 1, 0, 0, 0, 1343, 1344, 7, 9, 0, 0, 1344, 1352, 3, 240, 120, 16, 1345, 1346,
		3, 170, 85, 0, 1346, 1347, 3, 326, 163, 0, 1347, 1348, 5, 95, 0, 0, 1348, 1349, 3, 326, 163,
		0, 1349, 1350, 3, 230, 115, 0, 1350, 1352, 1, 0, 0, 0, 1351, 1333, 1, 0, 0, 0, 1351, 1337, 1,
		0, 0, 0, 1351, 1338, 1, 0, 0, 0, 1351, 1339, 1, 0, 0, 0, 1351, 1343, 1, 0, 0, 0, 1351, 1345, 1,
		0, 0, 0, 1352, 1463, 1, 0, 0, 0, 1353, 1354, 10, 17, 0, 0, 1354, 1355, 5, 78, 0, 0, 1355, 1356,
		3, 326, 163, 0, 1356, 1357, 3, 240, 120, 18, 1357, 1462, 1, 0, 0, 0, 1358, 1359, 10, 15, 0,
		0, 1359, 1360, 3, 326, 163, 0, 1360, 1361, 7, 10, 0, 0, 1361, 1362, 3, 326, 163, 0, 1362, 1363,
		3, 240, 120, 16, 1363, 1462, 1, 0, 0, 0, 1364, 1365, 10, 14, 0, 0, 1365, 1366, 7, 11, 0, 0, 1366,
		1367, 3, 326, 163, 0, 1367, 1368, 3, 240, 120, 15, 1368, 1462, 1, 0, 0, 0, 1369, 1370, 10,
		13, 0, 0, 1370, 1381, 3, 326, 163, 0, 1371, 1372, 5, 97, 0, 0, 1372, 1379, 5, 97, 0, 0, 1373,
		1374, 5, 96, 0, 0, 1374, 1375, 5, 96, 0, 0, 1375, 1379, 5, 96, 0, 0, 1376, 1377, 5, 96, 0, 0,
		1377, 1379, 5, 96, 0, 0, 1378, 1371, 1, 0, 0, 0, 1378, 1373, 1, 0, 0, 0, 1378, 1376, 1, 0, 0,
		0, 1379, 1382, 1, 0, 0, 0, 1380, 1382, 7, 12, 0, 0, 1381, 1378, 1, 0, 0, 0, 1381, 1380, 1, 0,
		0, 0, 1382, 1383, 1, 0, 0, 0, 1383, 1384, 3, 326, 163, 0, 1384, 1385, 3, 240, 120, 14, 1385,
		1462, 1, 0, 0, 0, 1386, 1387, 10, 11, 0, 0, 1387, 1388, 3, 326, 163, 0, 1388, 1389, 7, 13, 0,
		0, 1389, 1390, 3, 326, 163, 0, 1390, 1391, 3, 240, 120, 12, 1391, 1462, 1, 0, 0, 0, 1392, 1393,
		10, 10, 0, 0, 1393, 1394, 3, 326, 163, 0, 1394, 1395, 7, 14, 0, 0, 1395, 1396, 3, 326, 163,
		0, 1396, 1397, 3, 240, 120, 11, 1397, 1462, 1, 0, 0, 0, 1398, 1399, 10, 9, 0, 0, 1399, 1400,
		3, 326, 163, 0, 1400, 1401, 7, 15, 0, 0, 1401, 1402, 3, 326, 163, 0, 1402, 1403, 3, 240, 120,
		10, 1403, 1462, 1, 0, 0, 0, 1404, 1405, 10, 8, 0, 0, 1405, 1406, 3, 326, 163, 0, 1406, 1407,
		5, 114, 0, 0, 1407, 1408, 3, 326, 163, 0, 1408, 1409, 3, 240, 120, 9, 1409, 1462, 1, 0, 0, 0,
		1410, 1411, 10, 7, 0, 0, 1411, 1412, 3, 326, 163, 0, 1412, 1413, 5, 116, 0, 0, 1413, 1414,
		3, 326, 163, 0, 1414, 1415, 3, 240, 120, 8, 1415, 1462, 1, 0, 0, 0, 1416, 1417, 10, 6, 0, 0,
		1417, 1418, 3, 326, 163, 0, 1418, 1419, 5, 115, 0, 0, 1419, 1420, 3, 326, 163, 0, 1420, 1421,
		3, 240, 120, 7, 1421, 1462, 1, 0, 0, 0, 1422, 1423, 10, 5, 0, 0, 1423, 1424, 3, 326, 163, 0,
		1424, 1425, 5, 106, 0, 0, 1425, 1426, 3, 326, 163, 0, 1426, 1427, 3, 240, 120, 6, 1427, 1462,
		1, 0, 0, 0, 1428, 1429, 10, 4, 0, 0, 1429, 1430, 3, 326, 163, 0, 1430, 1431, 5, 107, 0, 0, 1431,
		1432, 3, 326, 163, 0, 1432, 1433, 3, 240, 120, 5, 1433, 1462, 1, 0, 0, 0, 1434, 1435, 10, 3,
		0, 0, 1435, 1445, 3, 326, 163, 0, 1436, 1437, 5, 100, 0, 0, 1437, 1438, 3, 326, 163, 0, 1438,
		1439, 3, 240, 120, 0, 1439, 1440, 3, 326, 163, 0, 1440, 1441, 5, 101, 0, 0, 1441, 1442, 3,
		326, 163, 0, 1442, 1446, 1, 0, 0, 0, 1443, 1444, 5, 73, 0, 0, 1444, 1446, 3, 326, 163, 0, 1445,
		1436, 1, 0, 0, 0, 1445, 1443, 1, 0, 0, 0, 1446, 1447, 1, 0, 0, 0, 1447, 1448, 3, 240, 120, 3,
		1448, 1462, 1, 0, 0, 0, 1449, 1450, 10, 12, 0, 0, 1450, 1451, 3, 326, 163, 0, 1451, 1452, 7,
		16, 0, 0, 1452, 1453, 3, 326, 163, 0, 1453, 1454, 3, 76, 38, 0, 1454, 1462, 1, 0, 0, 0, 1455,
		1456, 10, 1, 0, 0, 1456, 1457, 3, 326, 163, 0, 1457, 1458, 7, 17, 0, 0, 1458, 1459, 3, 326,
		163, 0, 1459, 1460, 3, 228, 114, 0, 1460, 1462, 1, 0, 0, 0, 1461, 1353, 1, 0, 0, 0, 1461, 1358,
		1, 0, 0, 0, 1461, 1364, 1, 0, 0, 0, 1461, 1369, 1, 0, 0, 0, 1461, 1386, 1, 0, 0, 0, 1461, 1392,
		1, 0, 0, 0, 1461, 1398, 1, 0, 0, 0, 1461, 1404, 1, 0, 0, 0, 1461, 1410, 1, 0, 0, 0, 1461, 1416,
		1, 0, 0, 0, 1461, 1422, 1, 0, 0, 0, 1461, 1428, 1, 0, 0, 0, 1461, 1434, 1, 0, 0, 0, 1461, 1449,
		1, 0, 0, 0, 1461, 1455, 1, 0, 0, 0, 1462, 1465, 1, 0, 0, 0, 1463, 1461, 1, 0, 0, 0, 1463, 1464,
		1, 0, 0, 0, 1464, 241, 1, 0, 0, 0, 1465, 1463, 1, 0, 0, 0, 1466, 1467, 3, 218, 109, 0, 1467, 1468,
		3, 242, 121, 0, 1468, 1477, 1, 0, 0, 0, 1469, 1477, 3, 232, 116, 0, 1470, 1471, 7, 8, 0, 0, 1471,
		1472, 3, 326, 163, 0, 1472, 1473, 3, 242, 121, 0, 1473, 1477, 1, 0, 0, 0, 1474, 1475, 7, 9,
		0, 0, 1475, 1477, 3, 242, 121, 0, 1476, 1466, 1, 0, 0, 0, 1476, 1469, 1, 0, 0, 0, 1476, 1470,
		1, 0, 0, 0, 1476, 1474, 1, 0, 0, 0, 1477, 243, 1, 0, 0, 0, 1478, 1482, 3, 240, 120, 0, 1479, 1480,
		4, 122, 19, 1, 1480, 1483, 3, 304, 152, 0, 1481, 1483, 1, 0, 0, 0, 1482, 1479, 1, 0, 0, 0, 1482,
		1481, 1, 0, 0, 0, 1483, 1487, 1, 0, 0, 0, 1484, 1486, 3, 246, 123, 0, 1485, 1484, 1, 0, 0, 0,
		1486, 1489, 1, 0, 0, 0, 1487, 1485, 1, 0, 0, 0, 1487, 1488, 1, 0, 0, 0, 1488, 245, 1, 0, 0, 0,
		1489, 1487, 1, 0, 0, 0, 1490, 1497, 3, 266, 133, 0, 1491, 1493, 3, 250, 125, 0, 1492, 1491,
		1, 0, 0, 0, 1493, 1494, 1, 0, 0, 0, 1494, 1492, 1, 0, 0, 0, 1494, 1495, 1, 0, 0, 0, 1495, 1498,
		1, 0, 0, 0, 1496, 1498, 3, 304, 152, 0, 1497, 1492, 1, 0, 0, 0, 1497, 1496, 1, 0, 0, 0, 1497,
		1498, 1, 0, 0, 0, 1498, 247, 1, 0, 0, 0, 1499, 1503, 3, 260, 130, 0, 1500, 1501, 4, 124, 20,
		0, 1501, 1503, 5, 48, 0, 0, 1502, 1499, 1, 0, 0, 0, 1502, 1500, 1, 0, 0, 0, 1503, 1509, 1, 0,
		0, 0, 1504, 1505, 3, 250, 125, 0, 1505, 1506, 6, 124, -1, 0, 1506, 1508, 1, 0, 0, 0, 1507, 1504,
		1, 0, 0, 0, 1508, 1511, 1, 0, 0, 0, 1509, 1507, 1, 0, 0, 0, 1509, 1510, 1, 0, 0, 0, 1510, 249,
		1, 0, 0, 0, 1511, 1509, 1, 0, 0, 0, 1512, 1537, 3, 326, 163, 0, 1513, 1514, 5, 94, 0, 0, 1514,
		1515, 3, 326, 163, 0, 1515, 1516, 5, 38, 0, 0, 1516, 1517, 3, 288, 144, 0, 1517, 1518, 6, 125,
		-1, 0, 1518, 1538, 1, 0, 0, 0, 1519, 1520, 7, 18, 0, 0, 1520, 1523, 3, 326, 163, 0, 1521, 1524,
		5, 132, 0, 0, 1522, 1524, 3, 298, 149, 0, 1523, 1521, 1, 0, 0, 0, 1523, 1522, 1, 0, 0, 0, 1523,
		1524, 1, 0, 0, 0, 1524, 1530, 1, 0, 0, 0, 1525, 1526, 5, 74, 0, 0, 1526, 1530, 3, 326, 163, 0,
		1527, 1528, 5, 75, 0, 0, 1528, 1530, 3, 326, 163, 0, 1529, 1519, 1, 0, 0, 0, 1529, 1525, 1,
		0, 0, 0, 1529, 1527, 1, 0, 0, 0, 1530, 1531, 1, 0, 0, 0, 1531, 1532, 3, 252, 126, 0, 1532, 1533,
		6, 125, -1, 0, 1533, 1538, 1, 0, 0, 0, 1534, 1535, 3, 134, 67, 0, 1535, 1536, 6, 125, -1, 0,
		1536, 1538, 1, 0, 0, 0, 1537, 1513, 1, 0, 0, 0, 1537, 1529, 1, 0, 0, 0, 1537, 1534, 1, 0, 0, 0,
		1538, 1549, 1, 0, 0, 0, 1539, 1540, 3, 302, 151, 0, 1540, 1541, 6, 125, -1, 0, 1541, 1549,
		1, 0, 0, 0, 1542, 1543, 3, 256, 128, 0, 1543, 1544, 6, 125, -1, 0, 1544, 1549, 1, 0, 0, 0, 1545,
		1546, 3, 258, 129, 0, 1546, 1547, 6, 125, -1, 0, 1547, 1549, 1, 0, 0, 0, 1548, 1512, 1, 0, 0,
		0, 1548, 1539, 1, 0, 0, 0, 1548, 1542, 1, 0, 0, 0, 1548, 1545, 1, 0, 0, 0, 1549, 251, 1, 0, 0,
		0, 1550, 1555, 3, 318, 159, 0, 1551, 1555, 3, 314, 157, 0, 1552, 1555, 3, 254, 127, 0, 1553,
		1555, 3, 322, 161, 0, 1554, 1550, 1, 0, 0, 0, 1554, 1551, 1, 0, 0, 0, 1554, 1552, 1, 0, 0, 0,
		1554, 1553, 1, 0, 0, 0, 1555, 253, 1, 0, 0, 0, 1556, 1559, 3, 220, 110, 0, 1557, 1559, 3, 116,
		58, 0, 1558, 1556, 1, 0, 0, 0, 1558, 1557, 1, 0, 0, 0, 1559, 255, 1, 0, 0, 0, 1560, 1562, 7, 19,
		0, 0, 1561, 1563, 3, 224, 112, 0, 1562, 1561, 1, 0, 0, 0, 1562, 1563, 1, 0, 0, 0, 1563, 1564,
		1, 0, 0, 0, 1564, 1565, 5, 91, 0, 0, 1565, 257, 1, 0, 0, 0, 1566, 1569, 7, 19, 0, 0, 1567, 1570,
		3, 274, 137, 0, 1568, 1570, 5, 101, 0, 0, 1569, 1567, 1, 0, 0, 0, 1569, 1568, 1, 0, 0, 0, 1570,
		1571, 1, 0, 0, 0, 1571, 1572, 5, 91, 0, 0, 1572, 259, 1, 0, 0, 0, 1573, 1575, 3, 318, 159, 0,
		1574, 1576, 3, 86, 43, 0, 1575, 1574, 1, 0, 0, 0, 1575, 1576, 1, 0, 0, 0, 1576, 1591, 1, 0, 0,
		0, 1577, 1591, 3, 114, 57, 0, 1578, 1591, 3, 116, 58, 0, 1579, 1580, 5, 38, 0, 0, 1580, 1581,
		3, 326, 163, 0, 1581, 1582, 3, 288, 144, 0, 1582, 1591, 1, 0, 0, 0, 1583, 1591, 5, 53, 0, 0,
		1584, 1591, 5, 50, 0, 0, 1585, 1591, 3, 220, 110, 0, 1586, 1591, 3, 134, 67, 0, 1587, 1591,
		3, 268, 134, 0, 1588, 1591, 3, 270, 135, 0, 1589, 1591, 3, 320, 160, 0, 1590, 1573, 1, 0, 0,
		0, 1590, 1577, 1, 0, 0, 0, 1590, 1578, 1, 0, 0, 0, 1590, 1579, 1, 0, 0, 0, 1590, 1583, 1, 0, 0,
		0, 1590, 1584, 1, 0, 0, 0, 1590, 1585, 1, 0, 0, 0, 1590, 1586, 1, 0, 0, 0, 1590, 1587, 1, 0, 0,
		0, 1590, 1588, 1, 0, 0, 0, 1590, 1589, 1, 0, 0, 0, 1591, 261, 1, 0, 0, 0, 1592, 1599, 3, 318,
		159, 0, 1593, 1599, 3, 114, 57, 0, 1594, 1599, 3, 116, 58, 0, 1595, 1599, 3, 220, 110, 0, 1596,
		1599, 3, 268, 134, 0, 1597, 1599, 3, 270, 135, 0, 1598, 1592, 1, 0, 0, 0, 1598, 1593, 1, 0,
		0, 0, 1598, 1594, 1, 0, 0, 0, 1598, 1595, 1, 0, 0, 0, 1598, 1596, 1, 0, 0, 0, 1598, 1597, 1, 0,
		0, 0, 1599, 263, 1, 0, 0, 0, 1600, 1604, 3, 318, 159, 0, 1601, 1604, 3, 114, 57, 0, 1602, 1604,
		3, 116, 58, 0, 1603, 1600, 1, 0, 0, 0, 1603, 1601, 1, 0, 0, 0, 1603, 1602, 1, 0, 0, 0, 1604, 265,
		1, 0, 0, 0, 1605, 1609, 3, 318, 159, 0, 1606, 1609, 3, 114, 57, 0, 1607, 1609, 3, 116, 58, 0,
		1608, 1605, 1, 0, 0, 0, 1608, 1606, 1, 0, 0, 0, 1608, 1607, 1, 0, 0, 0, 1609, 267, 1, 0, 0, 0,
		1610, 1612, 5, 90, 0, 0, 1611, 1613, 3, 224, 112, 0, 1612, 1611, 1, 0, 0, 0, 1612, 1613, 1,
		0, 0, 0, 1613, 1615, 1, 0, 0, 0, 1614, 1616, 5, 93, 0, 0, 1615, 1614, 1, 0, 0, 0, 1615, 1616,
		1, 0, 0, 0, 1616, 1617, 1, 0, 0, 0, 1617, 1618, 5, 91, 0, 0, 1618, 269, 1, 0, 0, 0, 1619, 1625,
		5, 90, 0, 0, 1620, 1622, 3, 272, 136, 0, 1621, 1623, 5, 93, 0, 0, 1622, 1621, 1, 0, 0, 0, 1622,
		1623, 1, 0, 0, 0, 1623, 1626, 1, 0, 0, 0, 1624, 1626, 5, 101, 0, 0, 1625, 1620, 1, 0, 0, 0, 1625,
		1624, 1, 0, 0, 0, 1626, 1627, 1, 0, 0, 0, 1627, 1628, 5, 91, 0, 0, 1628, 271, 1, 0, 0, 0, 1629,
		1634, 3, 276, 138, 0, 1630, 1631, 5, 93, 0, 0, 1631, 1633, 3, 276, 138, 0, 1632, 1630, 1, 0,
		0, 0, 1633, 1636, 1, 0, 0, 0, 1634, 1632, 1, 0, 0, 0, 1634, 1635, 1, 0, 0, 0, 1635, 273, 1, 0,
		0, 0, 1636, 1634, 1, 0, 0, 0, 1637, 1642, 3, 278, 139, 0, 1638, 1639, 5, 93, 0, 0, 1639, 1641,
		3, 278, 139, 0, 1640, 1638, 1, 0, 0, 0, 1641, 1644, 1, 0, 0, 0, 1642, 1640, 1, 0, 0, 0, 1642,
		1643, 1, 0, 0, 0, 1643, 275, 1, 0, 0, 0, 1644, 1642, 1, 0, 0, 0, 1645, 1646, 3, 282, 141, 0, 1646,
		1647, 5, 101, 0, 0, 1647, 1648, 3, 326, 163, 0, 1648, 1649, 3, 240, 120, 0, 1649, 1656, 1,
		0, 0, 0, 1650, 1651, 5, 112, 0, 0, 1651, 1652, 5, 101, 0, 0, 1652, 1653, 3, 326, 163, 0, 1653,
		1654, 3, 240, 120, 0, 1654, 1656, 1, 0, 0, 0, 1655, 1645, 1, 0, 0, 0, 1655, 1650, 1, 0, 0, 0,
		1656, 277, 1, 0, 0, 0, 1657, 1658, 3, 284, 142, 0, 1658, 1659, 5, 101, 0, 0, 1659, 1660, 3,
		326, 163, 0, 1660, 1661, 3, 240, 120, 0, 1661, 1668, 1, 0, 0, 0, 1662, 1663, 5, 112, 0, 0, 1663,
		1664, 5, 101, 0, 0, 1664, 1665, 3, 326, 163, 0, 1665, 1666, 3, 240, 120, 0, 1666, 1668, 1,
		0, 0, 0, 1667, 1657, 1, 0, 0, 0, 1667, 1662, 1, 0, 0, 0, 1668, 279, 1, 0, 0, 0, 1669, 1670, 3,
		286, 143, 0, 1670, 1671, 5, 101, 0, 0, 1671, 1672, 3, 326, 163, 0, 1672, 1673, 3, 240, 120,
		0, 1673, 1680, 1, 0, 0, 0, 1674, 1675, 5, 112, 0, 0, 1675, 1676, 5, 101, 0, 0, 1676, 1677, 3,
		326, 163, 0, 1677, 1678, 3, 240, 120, 0, 1678, 1680, 1, 0, 0, 0, 1679, 1669, 1, 0, 0, 0, 1679,
		1674, 1, 0, 0, 0, 1680, 281, 1, 0, 0, 0, 1681, 1684, 3, 322, 161, 0, 1682, 1684, 3, 260, 130,
		0, 1683, 1681, 1, 0, 0, 0, 1683, 1682, 1, 0, 0, 0, 1684, 283, 1, 0, 0, 0, 1685, 1688, 3, 322,
		161, 0, 1686, 1688, 3, 262, 131, 0, 1687, 1685, 1, 0, 0, 0, 1687, 1686, 1, 0, 0, 0, 1688, 285,
		1, 0, 0, 0, 1689, 1692, 3, 322, 161, 0, 1690, 1692, 3, 264, 132, 0, 1691, 1689, 1, 0, 0, 0, 1691,
		1690, 1, 0, 0, 0, 1692, 287, 1, 0, 0, 0, 1693, 1709, 3, 296, 148, 0, 1694, 1695, 3, 326, 163,
		0, 1695, 1697, 3, 302, 151, 0, 1696, 1698, 3, 294, 147, 0, 1697, 1696, 1, 0, 0, 0, 1697, 1698,
		1, 0, 0, 0, 1698, 1710, 1, 0, 0, 0, 1699, 1701, 3, 290, 145, 0, 1700, 1699, 1, 0, 0, 0, 1701,
		1702, 1, 0, 0, 0, 1702, 1700, 1, 0, 0, 0, 1702, 1703, 1, 0, 0, 0, 1703, 1707, 1, 0, 0, 0, 1704,
		1705, 3, 326, 163, 0, 1705, 1706, 3, 292, 146, 0, 1706, 1708, 1, 0, 0, 0, 1707, 1704, 1, 0,
		0, 0, 1707, 1708, 1, 0, 0, 0, 1708, 1710, 1, 0, 0, 0, 1709, 1694, 1, 0, 0, 0, 1709, 1700, 1, 0,
		0, 0, 1710, 289, 1, 0, 0, 0, 1711, 1712, 3, 140, 70, 0, 1712, 1714, 5, 90, 0, 0, 1713, 1715,
		3, 240, 120, 0, 1714, 1713, 1, 0, 0, 0, 1714, 1715, 1, 0, 0, 0, 1715, 1716, 1, 0, 0, 0, 1716,
		1717, 5, 91, 0, 0, 1717, 291, 1, 0, 0, 0, 1718, 1719, 5, 88, 0, 0, 1719, 1723, 3, 326, 163, 0,
		1720, 1721, 3, 68, 34, 0, 1721, 1722, 3, 326, 163, 0, 1722, 1724, 1, 0, 0, 0, 1723, 1720, 1,
		0, 0, 0, 1723, 1724, 1, 0, 0, 0, 1724, 1725, 1, 0, 0, 0, 1725, 1726, 5, 89, 0, 0, 1726, 293, 1,
		0, 0, 0, 1727, 1728, 3, 40, 20, 0, 1728, 295, 1, 0, 0, 0, 1729, 1735, 3, 140, 70, 0, 1730, 1736,
		3, 84, 42, 0, 1731, 1733, 3, 110, 55, 0, 1732, 1734, 3, 300, 150, 0, 1733, 1732, 1, 0, 0, 0,
		1733, 1734, 1, 0, 0, 0, 1734, 1736, 1, 0, 0, 0, 1735, 1730, 1, 0, 0, 0, 1735, 1731, 1, 0, 0, 0,
		1736, 297, 1, 0, 0, 0, 1737, 1738, 5, 97, 0, 0, 1738, 1739, 3, 326, 163, 0, 1739, 1740, 3, 36,
		18, 0, 1740, 1741, 3, 326, 163, 0, 1741, 1742, 5, 96, 0, 0, 1742, 299, 1, 0, 0, 0, 1743, 1744,
		5, 97, 0, 0, 1744, 1747, 5, 96, 0, 0, 1745, 1747, 3, 86, 43, 0, 1746, 1743, 1, 0, 0, 0, 1746,
		1745, 1, 0, 0, 0, 1747, 301, 1, 0, 0, 0, 1748, 1750, 5, 86, 0, 0, 1749, 1751, 3, 306, 153, 0,
		1750, 1749, 1, 0, 0, 0, 1750, 1751, 1, 0, 0, 0, 1751, 1753, 1, 0, 0, 0, 1752, 1754, 5, 93, 0,
		0, 1753, 1752, 1, 0, 0, 0, 1753, 1754, 1, 0, 0, 0, 1754, 1755, 1, 0, 0, 0, 1755, 1756, 3, 324,
		162, 0, 1756, 303, 1, 0, 0, 0, 1757, 1764, 3, 308, 154, 0, 1758, 1759, 5, 93, 0, 0, 1759, 1760,
		3, 326, 163, 0, 1760, 1761, 3, 310, 155, 0, 1761, 1763, 1, 0, 0, 0, 1762, 1758, 1, 0, 0, 0, 1763,
		1766, 1, 0, 0, 0, 1764, 1762, 1, 0, 0, 0, 1764, 1765, 1, 0, 0, 0, 1765, 305, 1, 0, 0, 0, 1766,
		1764, 1, 0, 0, 0, 1767, 1774, 3, 312, 156, 0, 1768, 1769, 5, 93, 0, 0, 1769, 1770, 3, 326, 163,
		0, 1770, 1771, 3, 312, 156, 0, 1771, 1773, 1, 0, 0, 0, 1772, 1768, 1, 0, 0, 0, 1773, 1776, 1,
		0, 0, 0, 1774, 1772, 1, 0, 0, 0, 1774, 1775, 1, 0, 0, 0, 1775, 307, 1, 0, 0, 0, 1776, 1774, 1,
		0, 0, 0, 1777, 1780, 3, 226, 113, 0, 1778, 1780, 3, 280, 140, 0, 1779, 1777, 1, 0, 0, 0, 1779,
		1778, 1, 0, 0, 0, 1780, 309, 1, 0, 0, 0, 1781, 1784, 3, 226, 113, 0, 1782, 1784, 3, 278, 139,
		0, 1783, 1781, 1, 0, 0, 0, 1783, 1782, 1, 0, 0, 0, 1784, 311, 1, 0, 0, 0, 1785, 1789, 3, 226,
		113, 0, 1786, 1789, 3, 124, 62, 0, 1787, 1789, 3, 278, 139, 0, 1788, 1785, 1, 0, 0, 0, 1788,
		1786, 1, 0, 0, 0, 1788, 1787, 1, 0, 0, 0, 1789, 313, 1, 0, 0, 0, 1790, 1791, 5, 1, 0, 0, 1791,
		315, 1, 0, 0, 0, 1792, 1793, 5, 130, 0, 0, 1793, 317, 1, 0, 0, 0, 1794, 1795, 7, 20, 0, 0, 1795,
		319, 1, 0, 0, 0, 1796, 1797, 7, 21, 0, 0, 1797, 321, 1, 0, 0, 0, 1798, 1799, 7, 22, 0, 0, 1799,
		323, 1, 0, 0, 0, 1800, 1801, 5, 87, 0, 0, 1801, 325, 1, 0, 0, 0, 1802, 1804, 5, 135, 0, 0, 1803,
		1802, 1, 0, 0, 0, 1804, 1807, 1, 0, 0, 0, 1805, 1803, 1, 0, 0, 0, 1805, 1806, 1, 0, 0, 0, 1806,
		327, 1, 0, 0, 0, 1807, 1805, 1, 0, 0, 0, 1808, 1810, 7, 23, 0, 0, 1809, 1808, 1, 0, 0, 0, 1810,
		1811, 1, 0, 0, 0, 1811, 1809, 1, 0, 0, 0, 1811, 1812, 1, 0, 0, 0, 1812, 329, 1, 0, 0, 0, 197, 333,
		335, 338, 348, 352, 359, 368, 375, 382, 387, 395, 402, 405, 413, 418, 422, 427, 435, 447,
		459, 468, 478, 494, 500, 505, 512, 519, 526, 538, 541, 544, 552, 555, 558, 570, 576, 579,
		583, 587, 594, 596, 600, 605, 618, 623, 625, 633, 637, 648, 657, 671, 676, 684, 687, 692,
		699, 702, 708, 711, 715, 719, 732, 745, 747, 759, 764, 770, 778, 786, 789, 797, 806, 814,
		821, 833, 841, 849, 856, 862, 881, 885, 892, 896, 899, 906, 909, 917, 921, 929, 934, 941,
		945, 949, 958, 969, 974, 982, 986, 988, 994, 1001, 1009, 1018, 1023, 1031, 1037, 1047,
		1053, 1061, 1067, 1077, 1081, 1104, 1108, 1112, 1119, 1128, 1134, 1143, 1156, 1173, 1179,
		1191, 1202, 1212, 1217, 1225, 1237, 1241, 1245, 1252, 1256, 1260, 1264, 1285, 1289, 1295,
		1301, 1311, 1322, 1329, 1351, 1378, 1381, 1445, 1461, 1463, 1476, 1482, 1487, 1494, 1497,
		1502, 1509, 1523, 1529, 1537, 1548, 1554, 1558, 1562, 1569, 1575, 1590, 1598, 1603, 1608,
		1612, 1615, 1622, 1625, 1634, 1642, 1655, 1667, 1679, 1683, 1687, 1691, 1697, 1702, 1707,
		1709, 1714, 1723, 1733, 1735, 1746, 1750, 1753, 1764, 1774, 1779, 1783, 1788, 1805, 1811];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GroovyParser.__ATN) {
			GroovyParser.__ATN = new ATNDeserializer().deserialize(GroovyParser._serializedATN);
		}

		return GroovyParser.__ATN;
	}

	static DecisionsToDFA = GroovyParser._ATN.decisionToState.map((ds: DecisionState, index: number) => new DFA(ds, index));

}

export class CompilationUnitContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public EOF(): TerminalNode {
		return this.getToken(GroovyParser.EOF, 0);
	}

	public packageDeclaration(): PackageDeclarationContext {
		return this.getTypedRuleContext(PackageDeclarationContext, 0) as PackageDeclarationContext;
	}

	public scriptStatements(): ScriptStatementsContext {
		return this.getTypedRuleContext(ScriptStatementsContext, 0) as ScriptStatementsContext;
	}

	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_compilationUnit;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ScriptStatementsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public scriptStatement_list(): ScriptStatementContext[] {
		return this.getTypedRuleContexts(ScriptStatementContext) as ScriptStatementContext[];
	}

	public scriptStatement(i: number): ScriptStatementContext {
		return this.getTypedRuleContext(ScriptStatementContext, i) as ScriptStatementContext;
	}

	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}

	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_scriptStatements;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterScriptStatements) {
			listener.enterScriptStatements(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitScriptStatements) {
			listener.exitScriptStatements(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitScriptStatements) {
			return visitor.visitScriptStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ScriptStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public importDeclaration(): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, 0) as ImportDeclarationContext;
	}

	public typeDeclaration(): TypeDeclarationContext {
		return this.getTypedRuleContext(TypeDeclarationContext, 0) as TypeDeclarationContext;
	}

	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}

	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_scriptStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterScriptStatement) {
			listener.enterScriptStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitScriptStatement) {
			listener.exitScriptStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitScriptStatement) {
			return visitor.visitScriptStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PackageDeclarationContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public PACKAGE(): TerminalNode {
		return this.getToken(GroovyParser.PACKAGE, 0);
	}

	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_packageDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ImportDeclarationContext extends GroovyParserRuleContext {
	public _alias!: IdentifierContext;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public IMPORT(): TerminalNode {
		return this.getToken(GroovyParser.IMPORT, 0);
	}

	public qualifiedName(): QualifiedNameContext {
		return this.getTypedRuleContext(QualifiedNameContext, 0) as QualifiedNameContext;
	}

	public STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	public DOT(): TerminalNode {
		return this.getToken(GroovyParser.DOT, 0);
	}

	public MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	public AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_importDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeDeclarationContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public classOrInterfaceModifiersOpt(): ClassOrInterfaceModifiersOptContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifiersOptContext, 0) as ClassOrInterfaceModifiersOptContext;
	}

	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ModifierContext extends GroovyParserRuleContext {
	public _m!: Token;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifierContext, 0) as ClassOrInterfaceModifierContext;
	}

	public NATIVE(): TerminalNode {
		return this.getToken(GroovyParser.NATIVE, 0);
	}

	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(GroovyParser.SYNCHRONIZED, 0);
	}

	public TRANSIENT(): TerminalNode {
		return this.getToken(GroovyParser.TRANSIENT, 0);
	}

	public VOLATILE(): TerminalNode {
		return this.getToken(GroovyParser.VOLATILE, 0);
	}

	public DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	public VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_modifier;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ModifiersOptContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public modifiers(): ModifiersContext {
		return this.getTypedRuleContext(ModifiersContext, 0) as ModifiersContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_modifiersOpt;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterModifiersOpt) {
			listener.enterModifiersOpt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitModifiersOpt) {
			listener.exitModifiersOpt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitModifiersOpt) {
			return visitor.visitModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ModifiersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}

	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_modifiers;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitModifiers) {
			return visitor.visitModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassOrInterfaceModifiersOptContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public classOrInterfaceModifiers(): ClassOrInterfaceModifiersContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifiersContext, 0) as ClassOrInterfaceModifiersContext;
	}

	public NL_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.NL);
	}

	public NL(i: number): TerminalNode {
		return this.getToken(GroovyParser.NL, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceModifiersOpt;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceModifiersOpt) {
			listener.enterClassOrInterfaceModifiersOpt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceModifiersOpt) {
			listener.exitClassOrInterfaceModifiersOpt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifiersOpt) {
			return visitor.visitClassOrInterfaceModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassOrInterfaceModifiersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public classOrInterfaceModifier_list(): ClassOrInterfaceModifierContext[] {
		return this.getTypedRuleContexts(ClassOrInterfaceModifierContext) as ClassOrInterfaceModifierContext[];
	}

	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext {
		return this.getTypedRuleContext(ClassOrInterfaceModifierContext, i) as ClassOrInterfaceModifierContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceModifiers;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceModifiers) {
			listener.enterClassOrInterfaceModifiers(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceModifiers) {
			listener.exitClassOrInterfaceModifiers(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifiers) {
			return visitor.visitClassOrInterfaceModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassOrInterfaceModifierContext extends GroovyParserRuleContext {
	public _m!: Token;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}

	public PUBLIC(): TerminalNode {
		return this.getToken(GroovyParser.PUBLIC, 0);
	}

	public PROTECTED(): TerminalNode {
		return this.getToken(GroovyParser.PROTECTED, 0);
	}

	public PRIVATE(): TerminalNode {
		return this.getToken(GroovyParser.PRIVATE, 0);
	}

	public STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	public ABSTRACT(): TerminalNode {
		return this.getToken(GroovyParser.ABSTRACT, 0);
	}

	public SEALED(): TerminalNode {
		return this.getToken(GroovyParser.SEALED, 0);
	}

	public NON_SEALED(): TerminalNode {
		return this.getToken(GroovyParser.NON_SEALED, 0);
	}

	public FINAL(): TerminalNode {
		return this.getToken(GroovyParser.FINAL, 0);
	}

	public STRICTFP(): TerminalNode {
		return this.getToken(GroovyParser.STRICTFP, 0);
	}

	public DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceModifier;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableModifierContext extends GroovyParserRuleContext {
	public _m!: Token;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}

	public FINAL(): TerminalNode {
		return this.getToken(GroovyParser.FINAL, 0);
	}

	public DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	public VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	public PUBLIC(): TerminalNode {
		return this.getToken(GroovyParser.PUBLIC, 0);
	}

	public PROTECTED(): TerminalNode {
		return this.getToken(GroovyParser.PROTECTED, 0);
	}

	public PRIVATE(): TerminalNode {
		return this.getToken(GroovyParser.PRIVATE, 0);
	}

	public STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	public ABSTRACT(): TerminalNode {
		return this.getToken(GroovyParser.ABSTRACT, 0);
	}

	public STRICTFP(): TerminalNode {
		return this.getToken(GroovyParser.STRICTFP, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableModifier;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableModifiersOptContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableModifiers(): VariableModifiersContext {
		return this.getTypedRuleContext(VariableModifiersContext, 0) as VariableModifiersContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableModifiersOpt;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableModifiersOpt) {
			listener.enterVariableModifiersOpt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableModifiersOpt) {
			listener.exitVariableModifiersOpt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableModifiersOpt) {
			return visitor.visitVariableModifiersOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableModifiersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableModifier_list(): VariableModifierContext[] {
		return this.getTypedRuleContexts(VariableModifierContext) as VariableModifierContext[];
	}

	public variableModifier(i: number): VariableModifierContext {
		return this.getTypedRuleContext(VariableModifierContext, i) as VariableModifierContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableModifiers;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableModifiers) {
			listener.enterVariableModifiers(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableModifiers) {
			listener.exitVariableModifiers(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableModifiers) {
			return visitor.visitVariableModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeParametersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public typeParameter_list(): TypeParameterContext[] {
		return this.getTypedRuleContexts(TypeParameterContext) as TypeParameterContext[];
	}

	public typeParameter(i: number): TypeParameterContext {
		return this.getTypedRuleContext(TypeParameterContext, i) as TypeParameterContext;
	}

	public GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeParameters;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeParameterContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public className(): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, 0) as ClassNameContext;
	}

	public EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public typeBound(): TypeBoundContext {
		return this.getTypedRuleContext(TypeBoundContext, 0) as TypeBoundContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeParameter;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeBoundContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}

	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}

	public BITAND_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.BITAND);
	}

	public BITAND(i: number): TerminalNode {
		return this.getToken(GroovyParser.BITAND, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeBound;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}

	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassDeclarationContext extends GroovyParserRuleContext {
	public t: number = 0;
	public _scs!: TypeListContext;
	public _is!: TypeListContext;
	public _ps!: TypeListContext;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}

	public CLASS(): TerminalNode {
		return this.getToken(GroovyParser.CLASS, 0);
	}

	public INTERFACE(): TerminalNode {
		return this.getToken(GroovyParser.INTERFACE, 0);
	}

	public ENUM(): TerminalNode {
		return this.getToken(GroovyParser.ENUM, 0);
	}

	public AT(): TerminalNode {
		return this.getToken(GroovyParser.AT, 0);
	}

	public TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	public RECORD(): TerminalNode {
		return this.getToken(GroovyParser.RECORD, 0);
	}

	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}

	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}

	public EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	public IMPLEMENTS(): TerminalNode {
		return this.getToken(GroovyParser.IMPLEMENTS, 0);
	}

	public PERMITS(): TerminalNode {
		return this.getToken(GroovyParser.PERMITS, 0);
	}

	public typeList_list(): TypeListContext[] {
		return this.getTypedRuleContexts(TypeListContext) as TypeListContext[];
	}

	public typeList(i: number): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, i) as TypeListContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassBodyContext extends GroovyParserRuleContext {
	public t: number = 0;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
	}

	public LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	public enumConstants(): EnumConstantsContext {
		return this.getTypedRuleContext(EnumConstantsContext, 0) as EnumConstantsContext;
	}

	public classBodyDeclaration_list(): ClassBodyDeclarationContext[] {
		return this.getTypedRuleContexts(ClassBodyDeclarationContext) as ClassBodyDeclarationContext[];
	}

	public classBodyDeclaration(i: number): ClassBodyDeclarationContext {
		return this.getTypedRuleContext(ClassBodyDeclarationContext, i) as ClassBodyDeclarationContext;
	}

	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}

	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}

	public COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classBody;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EnumConstantsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public enumConstant_list(): EnumConstantContext[] {
		return this.getTypedRuleContexts(EnumConstantContext) as EnumConstantContext[];
	}

	public enumConstant(i: number): EnumConstantContext {
		return this.getTypedRuleContext(EnumConstantContext, i) as EnumConstantContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_enumConstants;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EnumConstantContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}

	public anonymousInnerClassDeclaration(): AnonymousInnerClassDeclarationContext {
		return this.getTypedRuleContext(AnonymousInnerClassDeclarationContext, 0) as AnonymousInnerClassDeclarationContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_enumConstant;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassBodyDeclarationContext extends GroovyParserRuleContext {
	public t: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public memberDeclaration(): MemberDeclarationContext {
		return this.getTypedRuleContext(MemberDeclarationContext, 0) as MemberDeclarationContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classBodyDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MemberDeclarationContext extends GroovyParserRuleContext {
	public t: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
	}

	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}

	public fieldDeclaration(): FieldDeclarationContext {
		return this.getTypedRuleContext(FieldDeclarationContext, 0) as FieldDeclarationContext;
	}

	public modifiersOpt(): ModifiersOptContext {
		return this.getTypedRuleContext(ModifiersOptContext, 0) as ModifiersOptContext;
	}

	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}

	public compactConstructorDeclaration(): CompactConstructorDeclarationContext {
		return this.getTypedRuleContext(CompactConstructorDeclarationContext, 0) as CompactConstructorDeclarationContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_memberDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MethodDeclarationContext extends GroovyParserRuleContext {
	public t: number;
	public ct: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number, ct: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
		this.ct = ct;
	}

	public modifiersOpt(): ModifiersOptContext {
		return this.getTypedRuleContext(ModifiersOptContext, 0) as ModifiersOptContext;
	}

	public methodName(): MethodNameContext {
		return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
	}

	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}

	public typeParameters(): TypeParametersContext {
		return this.getTypedRuleContext(TypeParametersContext, 0) as TypeParametersContext;
	}

	public returnType(): ReturnTypeContext {
		return this.getTypedRuleContext(ReturnTypeContext, 0) as ReturnTypeContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}

	public THROWS(): TerminalNode {
		return this.getToken(GroovyParser.THROWS, 0);
	}

	public qualifiedClassNameList(): QualifiedClassNameListContext {
		return this.getTypedRuleContext(QualifiedClassNameListContext, 0) as QualifiedClassNameListContext;
	}

	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_methodDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CompactConstructorDeclarationContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public methodName(): MethodNameContext {
		return this.getTypedRuleContext(MethodNameContext, 0) as MethodNameContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public methodBody(): MethodBodyContext {
		return this.getTypedRuleContext(MethodBodyContext, 0) as MethodBodyContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_compactConstructorDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCompactConstructorDeclaration) {
			listener.enterCompactConstructorDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCompactConstructorDeclaration) {
			listener.exitCompactConstructorDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCompactConstructorDeclaration) {
			return visitor.visitCompactConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MethodNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_methodName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ReturnTypeContext extends GroovyParserRuleContext {
	public ct: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, ct: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.ct = ct;
	}

	public standardType(): StandardTypeContext {
		return this.getTypedRuleContext(StandardTypeContext, 0) as StandardTypeContext;
	}

	public VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_returnType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterReturnType) {
			listener.enterReturnType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitReturnType) {
			listener.exitReturnType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitReturnType) {
			return visitor.visitReturnType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FieldDeclarationContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_fieldDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableDeclaratorsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableDeclarator_list(): VariableDeclaratorContext[] {
		return this.getTypedRuleContexts(VariableDeclaratorContext) as VariableDeclaratorContext[];
	}

	public variableDeclarator(i: number): VariableDeclaratorContext {
		return this.getTypedRuleContext(VariableDeclaratorContext, i) as VariableDeclaratorContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableDeclarators;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableDeclaratorContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableDeclarator;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableDeclaratorIdContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableDeclaratorId;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableInitializerContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getTypedRuleContext(EnhancedStatementExpressionContext, 0) as EnhancedStatementExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableInitializer;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableInitializersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableInitializer_list(): VariableInitializerContext[] {
		return this.getTypedRuleContexts(VariableInitializerContext) as VariableInitializerContext[];
	}

	public variableInitializer(i: number): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, i) as VariableInitializerContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableInitializers;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableInitializers) {
			listener.enterVariableInitializers(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableInitializers) {
			listener.exitVariableInitializers(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableInitializers) {
			return visitor.visitVariableInitializers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EmptyDimsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt_list(): AnnotationsOptContext[] {
		return this.getTypedRuleContexts(AnnotationsOptContext) as AnnotationsOptContext[];
	}

	public annotationsOpt(i: number): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, i) as AnnotationsOptContext;
	}

	public LBRACK_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.LBRACK);
	}

	public LBRACK(i: number): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, i);
	}

	public RBRACK_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.RBRACK);
	}

	public RBRACK(i: number): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_emptyDims;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEmptyDims) {
			listener.enterEmptyDims(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEmptyDims) {
			listener.exitEmptyDims(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEmptyDims) {
			return visitor.visitEmptyDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EmptyDimsOptContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public emptyDims(): EmptyDimsContext {
		return this.getTypedRuleContext(EmptyDimsContext, 0) as EmptyDimsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_emptyDimsOpt;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEmptyDimsOpt) {
			listener.enterEmptyDimsOpt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEmptyDimsOpt) {
			listener.exitEmptyDimsOpt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEmptyDimsOpt) {
			return visitor.visitEmptyDimsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StandardTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public emptyDimsOpt(): EmptyDimsOptContext {
		return this.getTypedRuleContext(EmptyDimsOptContext, 0) as EmptyDimsOptContext;
	}

	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}

	public standardClassOrInterfaceType(): StandardClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(StandardClassOrInterfaceTypeContext, 0) as StandardClassOrInterfaceTypeContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_standardType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStandardType) {
			listener.enterStandardType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStandardType) {
			listener.exitStandardType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStandardType) {
			return visitor.visitStandardType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public emptyDimsOpt(): EmptyDimsOptContext {
		return this.getTypedRuleContext(EmptyDimsOptContext, 0) as EmptyDimsOptContext;
	}

	public generalClassOrInterfaceType(): GeneralClassOrInterfaceTypeContext {
		return this.getTypedRuleContext(GeneralClassOrInterfaceTypeContext, 0) as GeneralClassOrInterfaceTypeContext;
	}

	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}

	public VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_type;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassOrInterfaceTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getTypedRuleContext(QualifiedClassNameContext, 0) as QualifiedClassNameContext;
	}

	public qualifiedStandardClassName(): QualifiedStandardClassNameContext {
		return this.getTypedRuleContext(QualifiedStandardClassNameContext, 0) as QualifiedStandardClassNameContext;
	}

	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classOrInterfaceType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GeneralClassOrInterfaceTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getTypedRuleContext(QualifiedClassNameContext, 0) as QualifiedClassNameContext;
	}

	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_generalClassOrInterfaceType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGeneralClassOrInterfaceType) {
			listener.enterGeneralClassOrInterfaceType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGeneralClassOrInterfaceType) {
			listener.exitGeneralClassOrInterfaceType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitGeneralClassOrInterfaceType) {
			return visitor.visitGeneralClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StandardClassOrInterfaceTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedStandardClassName(): QualifiedStandardClassNameContext {
		return this.getTypedRuleContext(QualifiedStandardClassNameContext, 0) as QualifiedStandardClassNameContext;
	}

	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_standardClassOrInterfaceType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStandardClassOrInterfaceType) {
			listener.enterStandardClassOrInterfaceType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStandardClassOrInterfaceType) {
			listener.exitStandardClassOrInterfaceType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStandardClassOrInterfaceType) {
			return visitor.visitStandardClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PrimitiveTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public BuiltInPrimitiveType(): TerminalNode {
		return this.getToken(GroovyParser.BuiltInPrimitiveType, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_primitiveType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeArgumentsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public typeArgument_list(): TypeArgumentContext[] {
		return this.getTypedRuleContexts(TypeArgumentContext) as TypeArgumentContext[];
	}

	public typeArgument(i: number): TypeArgumentContext {
		return this.getTypedRuleContext(TypeArgumentContext, i) as TypeArgumentContext;
	}

	public GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeArguments;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeArgumentContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public QUESTION(): TerminalNode {
		return this.getToken(GroovyParser.QUESTION, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	public SUPER(): TerminalNode {
		return this.getToken(GroovyParser.SUPER, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeArgument;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnnotatedQualifiedClassNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getTypedRuleContext(QualifiedClassNameContext, 0) as QualifiedClassNameContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_annotatedQualifiedClassName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotatedQualifiedClassName) {
			listener.enterAnnotatedQualifiedClassName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotatedQualifiedClassName) {
			listener.exitAnnotatedQualifiedClassName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAnnotatedQualifiedClassName) {
			return visitor.visitAnnotatedQualifiedClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QualifiedClassNameListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotatedQualifiedClassName_list(): AnnotatedQualifiedClassNameContext[] {
		return this.getTypedRuleContexts(AnnotatedQualifiedClassNameContext) as AnnotatedQualifiedClassNameContext[];
	}

	public annotatedQualifiedClassName(i: number): AnnotatedQualifiedClassNameContext {
		return this.getTypedRuleContext(AnnotatedQualifiedClassNameContext, i) as AnnotatedQualifiedClassNameContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_qualifiedClassNameList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedClassNameList) {
			listener.enterQualifiedClassNameList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedClassNameList) {
			listener.exitQualifiedClassNameList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedClassNameList) {
			return visitor.visitQualifiedClassNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FormalParametersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_formalParameters;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FormalParameterListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public formalParameter_list(): FormalParameterContext[] {
		return this.getTypedRuleContexts(FormalParameterContext) as FormalParameterContext[];
	}

	public formalParameter(i: number): FormalParameterContext {
		return this.getTypedRuleContext(FormalParameterContext, i) as FormalParameterContext;
	}

	public thisFormalParameter(): ThisFormalParameterContext {
		return this.getTypedRuleContext(ThisFormalParameterContext, 0) as ThisFormalParameterContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_formalParameterList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ThisFormalParameterContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public THIS(): TerminalNode {
		return this.getToken(GroovyParser.THIS, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_thisFormalParameter;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterThisFormalParameter) {
			listener.enterThisFormalParameter(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitThisFormalParameter) {
			listener.exitThisFormalParameter(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitThisFormalParameter) {
			return visitor.visitThisFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FormalParameterContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableModifiersOpt(): VariableModifiersOptContext {
		return this.getTypedRuleContext(VariableModifiersOptContext, 0) as VariableModifiersOptContext;
	}

	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public ELLIPSIS(): TerminalNode {
		return this.getToken(GroovyParser.ELLIPSIS, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_formalParameter;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MethodBodyContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_methodBody;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QualifiedNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedNameElement_list(): QualifiedNameElementContext[] {
		return this.getTypedRuleContexts(QualifiedNameElementContext) as QualifiedNameElementContext[];
	}

	public qualifiedNameElement(i: number): QualifiedNameElementContext {
		return this.getTypedRuleContext(QualifiedNameElementContext, i) as QualifiedNameElementContext;
	}

	public DOT_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.DOT);
	}

	public DOT(i: number): TerminalNode {
		return this.getToken(GroovyParser.DOT, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_qualifiedName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QualifiedNameElementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	public IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	public AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	public TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_qualifiedNameElement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedNameElement) {
			listener.enterQualifiedNameElement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedNameElement) {
			listener.exitQualifiedNameElement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameElement) {
			return visitor.visitQualifiedNameElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QualifiedNameElementsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedNameElement_list(): QualifiedNameElementContext[] {
		return this.getTypedRuleContexts(QualifiedNameElementContext) as QualifiedNameElementContext[];
	}

	public qualifiedNameElement(i: number): QualifiedNameElementContext {
		return this.getTypedRuleContext(QualifiedNameElementContext, i) as QualifiedNameElementContext;
	}

	public DOT_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.DOT);
	}

	public DOT(i: number): TerminalNode {
		return this.getToken(GroovyParser.DOT, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_qualifiedNameElements;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedNameElements) {
			listener.enterQualifiedNameElements(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedNameElements) {
			listener.exitQualifiedNameElements(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedNameElements) {
			return visitor.visitQualifiedNameElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QualifiedClassNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedNameElements(): QualifiedNameElementsContext {
		return this.getTypedRuleContext(QualifiedNameElementsContext, 0) as QualifiedNameElementsContext;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_qualifiedClassName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedClassName) {
			listener.enterQualifiedClassName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedClassName) {
			listener.exitQualifiedClassName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedClassName) {
			return visitor.visitQualifiedClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class QualifiedStandardClassNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedNameElements(): QualifiedNameElementsContext {
		return this.getTypedRuleContext(QualifiedNameElementsContext, 0) as QualifiedNameElementsContext;
	}

	public className_list(): ClassNameContext[] {
		return this.getTypedRuleContexts(ClassNameContext) as ClassNameContext[];
	}

	public className(i: number): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, i) as ClassNameContext;
	}

	public DOT_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.DOT);
	}

	public DOT(i: number): TerminalNode {
		return this.getToken(GroovyParser.DOT, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_qualifiedStandardClassName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterQualifiedStandardClassName) {
			listener.enterQualifiedStandardClassName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitQualifiedStandardClassName) {
			listener.exitQualifiedStandardClassName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitQualifiedStandardClassName) {
			return visitor.visitQualifiedStandardClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LiteralContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_literal;
	}

	public override copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}

export class StringLiteralAltContext extends LiteralContext {
	constructor(parser: GroovyParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStringLiteralAlt) {
			listener.enterStringLiteralAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStringLiteralAlt) {
			listener.exitStringLiteralAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralAlt) {
			return visitor.visitStringLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IntegerLiteralAltContext extends LiteralContext {
	constructor(parser: GroovyParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public IntegerLiteral(): TerminalNode {
		return this.getToken(GroovyParser.IntegerLiteral, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIntegerLiteralAlt) {
			listener.enterIntegerLiteralAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIntegerLiteralAlt) {
			listener.exitIntegerLiteralAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteralAlt) {
			return visitor.visitIntegerLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FloatingPointLiteralAltContext extends LiteralContext {
	constructor(parser: GroovyParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public FloatingPointLiteral(): TerminalNode {
		return this.getToken(GroovyParser.FloatingPointLiteral, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFloatingPointLiteralAlt) {
			listener.enterFloatingPointLiteralAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFloatingPointLiteralAlt) {
			listener.exitFloatingPointLiteralAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFloatingPointLiteralAlt) {
			return visitor.visitFloatingPointLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NullLiteralAltContext extends LiteralContext {
	constructor(parser: GroovyParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public NullLiteral(): TerminalNode {
		return this.getToken(GroovyParser.NullLiteral, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNullLiteralAlt) {
			listener.enterNullLiteralAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNullLiteralAlt) {
			listener.exitNullLiteralAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNullLiteralAlt) {
			return visitor.visitNullLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BooleanLiteralAltContext extends LiteralContext {
	constructor(parser: GroovyParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public BooleanLiteral(): TerminalNode {
		return this.getToken(GroovyParser.BooleanLiteral, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBooleanLiteralAlt) {
			listener.enterBooleanLiteralAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBooleanLiteralAlt) {
			listener.exitBooleanLiteralAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralAlt) {
			return visitor.visitBooleanLiteralAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GstringContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public GStringBegin(): TerminalNode {
		return this.getToken(GroovyParser.GStringBegin, 0);
	}

	public gstringValue_list(): GstringValueContext[] {
		return this.getTypedRuleContexts(GstringValueContext) as GstringValueContext[];
	}

	public gstringValue(i: number): GstringValueContext {
		return this.getTypedRuleContext(GstringValueContext, i) as GstringValueContext;
	}

	public GStringEnd(): TerminalNode {
		return this.getToken(GroovyParser.GStringEnd, 0);
	}

	public GStringPart_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.GStringPart);
	}

	public GStringPart(i: number): TerminalNode {
		return this.getToken(GroovyParser.GStringPart, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_gstring;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstring) {
			listener.enterGstring(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstring) {
			listener.exitGstring(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitGstring) {
			return visitor.visitGstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GstringValueContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public gstringPath(): GstringPathContext {
		return this.getTypedRuleContext(GstringPathContext, 0) as GstringPathContext;
	}

	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_gstringValue;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstringValue) {
			listener.enterGstringValue(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstringValue) {
			listener.exitGstringValue(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitGstringValue) {
			return visitor.visitGstringValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GstringPathContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public GStringPathPart_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.GStringPathPart);
	}

	public GStringPathPart(i: number): TerminalNode {
		return this.getToken(GroovyParser.GStringPathPart, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_gstringPath;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstringPath) {
			listener.enterGstringPath(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstringPath) {
			listener.exitGstringPath(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitGstringPath) {
			return visitor.visitGstringPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LambdaExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public lambdaParameters(): LambdaParametersContext {
		return this.getTypedRuleContext(LambdaParametersContext, 0) as LambdaParametersContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	public lambdaBody(): LambdaBodyContext {
		return this.getTypedRuleContext(LambdaBodyContext, 0) as LambdaBodyContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_lambdaExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StandardLambdaExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public standardLambdaParameters(): StandardLambdaParametersContext {
		return this.getTypedRuleContext(StandardLambdaParametersContext, 0) as StandardLambdaParametersContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	public lambdaBody(): LambdaBodyContext {
		return this.getTypedRuleContext(LambdaBodyContext, 0) as LambdaBodyContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_standardLambdaExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStandardLambdaExpression) {
			listener.enterStandardLambdaExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStandardLambdaExpression) {
			listener.exitStandardLambdaExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStandardLambdaExpression) {
			return visitor.visitStandardLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LambdaParametersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_lambdaParameters;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StandardLambdaParametersContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public formalParameters(): FormalParametersContext {
		return this.getTypedRuleContext(FormalParametersContext, 0) as FormalParametersContext;
	}

	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_standardLambdaParameters;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStandardLambdaParameters) {
			listener.enterStandardLambdaParameters(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStandardLambdaParameters) {
			listener.exitStandardLambdaParameters(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStandardLambdaParameters) {
			return visitor.visitStandardLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LambdaBodyContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_lambdaBody;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClosureContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getTypedRuleContext(BlockStatementsOptContext, 0) as BlockStatementsOptContext;
	}

	public RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}

	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_closure;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClosure) {
			listener.enterClosure(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClosure) {
			listener.exitClosure(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClosure) {
			return visitor.visitClosure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClosureOrLambdaExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}

	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_closureOrLambdaExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClosureOrLambdaExpression) {
			listener.enterClosureOrLambdaExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClosureOrLambdaExpression) {
			listener.exitClosureOrLambdaExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClosureOrLambdaExpression) {
			return visitor.visitClosureOrLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockStatementsOptContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_blockStatementsOpt;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStatementsOpt) {
			listener.enterBlockStatementsOpt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStatementsOpt) {
			listener.exitBlockStatementsOpt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBlockStatementsOpt) {
			return visitor.visitBlockStatementsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockStatementsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}

	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}

	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}

	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_blockStatements;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnnotationsOptContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}

	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_annotationsOpt;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotationsOpt) {
			listener.enterAnnotationsOpt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotationsOpt) {
			listener.exitAnnotationsOpt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAnnotationsOpt) {
			return visitor.visitAnnotationsOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnnotationContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public AT(): TerminalNode {
		return this.getToken(GroovyParser.AT, 0);
	}

	public annotationName(): AnnotationNameContext {
		return this.getTypedRuleContext(AnnotationNameContext, 0) as AnnotationNameContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public elementValues(): ElementValuesContext {
		return this.getTypedRuleContext(ElementValuesContext, 0) as ElementValuesContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_annotation;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ElementValuesContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public elementValuePairs(): ElementValuePairsContext {
		return this.getTypedRuleContext(ElementValuePairsContext, 0) as ElementValuePairsContext;
	}

	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_elementValues;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValues) {
			listener.enterElementValues(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValues) {
			listener.exitElementValues(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValues) {
			return visitor.visitElementValues(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnnotationNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getTypedRuleContext(QualifiedClassNameContext, 0) as QualifiedClassNameContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_annotationName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnnotationName) {
			listener.enterAnnotationName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnnotationName) {
			listener.exitAnnotationName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAnnotationName) {
			return visitor.visitAnnotationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ElementValuePairsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public elementValuePair_list(): ElementValuePairContext[] {
		return this.getTypedRuleContexts(ElementValuePairContext) as ElementValuePairContext[];
	}

	public elementValuePair(i: number): ElementValuePairContext {
		return this.getTypedRuleContext(ElementValuePairContext, i) as ElementValuePairContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_elementValuePairs;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ElementValuePairContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public elementValuePairName(): ElementValuePairNameContext {
		return this.getTypedRuleContext(ElementValuePairNameContext, 0) as ElementValuePairNameContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	public elementValue(): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, 0) as ElementValueContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_elementValuePair;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ElementValuePairNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_elementValuePairName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValuePairName) {
			listener.enterElementValuePairName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValuePairName) {
			listener.exitElementValuePairName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairName) {
			return visitor.visitElementValuePairName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ElementValueContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		return this.getTypedRuleContext(ElementValueArrayInitializerContext, 0) as ElementValueArrayInitializerContext;
	}

	public annotation(): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, 0) as AnnotationContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_elementValue;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ElementValueArrayInitializerContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	public RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	public elementValue_list(): ElementValueContext[] {
		return this.getTypedRuleContexts(ElementValueContext) as ElementValueContext[];
	}

	public elementValue(i: number): ElementValueContext {
		return this.getTypedRuleContext(ElementValueContext, i) as ElementValueContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_elementValueArrayInitializer;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	public blockStatementsOpt(): BlockStatementsOptContext {
		return this.getTypedRuleContext(BlockStatementsOptContext, 0) as BlockStatementsOptContext;
	}

	public RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_block;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}

	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_blockStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LocalVariableDeclarationContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_localVariableDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableDeclarationContext extends GroovyParserRuleContext {
	public t: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
	}

	public modifiers(): ModifiersContext {
		return this.getTypedRuleContext(ModifiersContext, 0) as ModifiersContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getTypedRuleContext(VariableDeclaratorsContext, 0) as VariableDeclaratorsContext;
	}

	public typeNamePairs(): TypeNamePairsContext {
		return this.getTypedRuleContext(TypeNamePairsContext, 0) as TypeNamePairsContext;
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	public variableInitializer(): VariableInitializerContext {
		return this.getTypedRuleContext(VariableInitializerContext, 0) as VariableInitializerContext;
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeNamePairsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public typeNamePair_list(): TypeNamePairContext[] {
		return this.getTypedRuleContexts(TypeNamePairContext) as TypeNamePairContext[];
	}

	public typeNamePair(i: number): TypeNamePairContext {
		return this.getTypedRuleContext(TypeNamePairContext, i) as TypeNamePairContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeNamePairs;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeNamePairs) {
			listener.enterTypeNamePairs(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeNamePairs) {
			listener.exitTypeNamePairs(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeNamePairs) {
			return visitor.visitTypeNamePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeNamePairContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeNamePair;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeNamePair) {
			listener.enterTypeNamePair(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeNamePair) {
			listener.exitTypeNamePair(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeNamePair) {
			return visitor.visitTypeNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableNamesContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public variableDeclaratorId_list(): VariableDeclaratorIdContext[] {
		return this.getTypedRuleContexts(VariableDeclaratorIdContext) as VariableDeclaratorIdContext[];
	}

	public variableDeclaratorId(i: number): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, i) as VariableDeclaratorIdContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_variableNames;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterVariableNames) {
			listener.enterVariableNames(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitVariableNames) {
			listener.exitVariableNames(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitVariableNames) {
			return visitor.visitVariableNames(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public ifElseStatement(): IfElseStatementContext {
		return this.getTypedRuleContext(IfElseStatementContext, 0) as IfElseStatementContext;
	}

	public switchStatement(): SwitchStatementContext {
		return this.getTypedRuleContext(SwitchStatementContext, 0) as SwitchStatementContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_conditionalStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitConditionalStatement) {
			return visitor.visitConditionalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IfElseStatementContext extends GroovyParserRuleContext {
	public _tb!: StatementContext;
	public _fb!: StatementContext;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public IF(): TerminalNode {
		return this.getToken(GroovyParser.IF, 0);
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}

	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}

	public ELSE(): TerminalNode {
		return this.getToken(GroovyParser.ELSE, 0);
	}

	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_ifElseStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIfElseStatement) {
			listener.enterIfElseStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIfElseStatement) {
			listener.exitIfElseStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIfElseStatement) {
			return visitor.visitIfElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public SWITCH(): TerminalNode {
		return this.getToken(GroovyParser.SWITCH, 0);
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	public RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	public switchBlockStatementGroup_list(): SwitchBlockStatementGroupContext[] {
		return this.getTypedRuleContexts(SwitchBlockStatementGroupContext) as SwitchBlockStatementGroupContext[];
	}

	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext {
		return this.getTypedRuleContext(SwitchBlockStatementGroupContext, i) as SwitchBlockStatementGroupContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_switchStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LoopStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_loopStatement;
	}

	public override copyFrom(ctx: LoopStatementContext): void {
		super.copyFrom(ctx);
	}
}

export class DoWhileStmtAltContext extends LoopStatementContext {
	constructor(parser: GroovyParser, ctx: LoopStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public DO(): TerminalNode {
		return this.getToken(GroovyParser.DO, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}

	public WHILE(): TerminalNode {
		return this.getToken(GroovyParser.WHILE, 0);
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterDoWhileStmtAlt) {
			listener.enterDoWhileStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitDoWhileStmtAlt) {
			listener.exitDoWhileStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStmtAlt) {
			return visitor.visitDoWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForStmtAltContext extends LoopStatementContext {
	constructor(parser: GroovyParser, ctx: LoopStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public FOR(): TerminalNode {
		return this.getToken(GroovyParser.FOR, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public forControl(): ForControlContext {
		return this.getTypedRuleContext(ForControlContext, 0) as ForControlContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForStmtAlt) {
			listener.enterForStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForStmtAlt) {
			listener.exitForStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitForStmtAlt) {
			return visitor.visitForStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class WhileStmtAltContext extends LoopStatementContext {
	constructor(parser: GroovyParser, ctx: LoopStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public WHILE(): TerminalNode {
		return this.getToken(GroovyParser.WHILE, 0);
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterWhileStmtAlt) {
			listener.enterWhileStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitWhileStmtAlt) {
			listener.exitWhileStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitWhileStmtAlt) {
			return visitor.visitWhileStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ContinueStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public CONTINUE(): TerminalNode {
		return this.getToken(GroovyParser.CONTINUE, 0);
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_continueStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BreakStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public BREAK(): TerminalNode {
		return this.getToken(GroovyParser.BREAK, 0);
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_breakStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class YieldStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public YIELD(): TerminalNode {
		return this.getToken(GroovyParser.YIELD, 0);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_yieldStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TryCatchStatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public TRY(): TerminalNode {
		return this.getToken(GroovyParser.TRY, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public resources(): ResourcesContext {
		return this.getTypedRuleContext(ResourcesContext, 0) as ResourcesContext;
	}

	public catchClause_list(): CatchClauseContext[] {
		return this.getTypedRuleContexts(CatchClauseContext) as CatchClauseContext[];
	}

	public catchClause(i: number): CatchClauseContext {
		return this.getTypedRuleContext(CatchClauseContext, i) as CatchClauseContext;
	}

	public finallyBlock(): FinallyBlockContext {
		return this.getTypedRuleContext(FinallyBlockContext, 0) as FinallyBlockContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_tryCatchStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTryCatchStatement) {
			listener.enterTryCatchStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTryCatchStatement) {
			listener.exitTryCatchStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTryCatchStatement) {
			return visitor.visitTryCatchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssertStatementContext extends GroovyParserRuleContext {
	public _ce!: ExpressionContext;
	public _me!: ExpressionContext;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public ASSERT(): TerminalNode {
		return this.getToken(GroovyParser.ASSERT, 0);
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_assertStatement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StatementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_statement;
	}

	public override copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}

export class ConditionalStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public conditionalStatement(): ConditionalStatementContext {
		return this.getTypedRuleContext(ConditionalStatementContext, 0) as ConditionalStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterConditionalStmtAlt) {
			listener.enterConditionalStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitConditionalStmtAlt) {
			listener.exitConditionalStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitConditionalStmtAlt) {
			return visitor.visitConditionalStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EmptyStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public SEMI(): TerminalNode {
		return this.getToken(GroovyParser.SEMI, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEmptyStmtAlt) {
			listener.enterEmptyStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEmptyStmtAlt) {
			listener.exitEmptyStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEmptyStmtAlt) {
			return visitor.visitEmptyStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBlockStmtAlt) {
			listener.enterBlockStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBlockStmtAlt) {
			listener.exitBlockStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBlockStmtAlt) {
			return visitor.visitBlockStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TryCatchStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public tryCatchStatement(): TryCatchStatementContext {
		return this.getTypedRuleContext(TryCatchStatementContext, 0) as TryCatchStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTryCatchStmtAlt) {
			listener.enterTryCatchStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTryCatchStmtAlt) {
			listener.exitTryCatchStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTryCatchStmtAlt) {
			return visitor.visitTryCatchStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BreakStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBreakStmtAlt) {
			listener.enterBreakStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBreakStmtAlt) {
			listener.exitBreakStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBreakStmtAlt) {
			return visitor.visitBreakStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class YieldStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public yieldStatement(): YieldStatementContext {
		return this.getTypedRuleContext(YieldStatementContext, 0) as YieldStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterYieldStmtAlt) {
			listener.enterYieldStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitYieldStmtAlt) {
			listener.exitYieldStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitYieldStmtAlt) {
			return visitor.visitYieldStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ContinueStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterContinueStmtAlt) {
			listener.enterContinueStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitContinueStmtAlt) {
			listener.exitContinueStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitContinueStmtAlt) {
			return visitor.visitContinueStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssertStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public assertStatement(): AssertStatementContext {
		return this.getTypedRuleContext(AssertStatementContext, 0) as AssertStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAssertStmtAlt) {
			listener.enterAssertStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAssertStmtAlt) {
			listener.exitAssertStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAssertStmtAlt) {
			return visitor.visitAssertStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LoopStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public loopStatement(): LoopStatementContext {
		return this.getTypedRuleContext(LoopStatementContext, 0) as LoopStatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLoopStmtAlt) {
			listener.enterLoopStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLoopStmtAlt) {
			listener.exitLoopStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLoopStmtAlt) {
			return visitor.visitLoopStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SynchronizedStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(GroovyParser.SYNCHRONIZED, 0);
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSynchronizedStmtAlt) {
			listener.enterSynchronizedStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSynchronizedStmtAlt) {
			listener.exitSynchronizedStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSynchronizedStmtAlt) {
			return visitor.visitSynchronizedStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionStmtAlt) {
			listener.enterExpressionStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionStmtAlt) {
			listener.exitExpressionStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitExpressionStmtAlt) {
			return visitor.visitExpressionStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LocalVariableDeclarationStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLocalVariableDeclarationStmtAlt) {
			listener.enterLocalVariableDeclarationStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLocalVariableDeclarationStmtAlt) {
			listener.exitLocalVariableDeclarationStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStmtAlt) {
			return visitor.visitLocalVariableDeclarationStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ReturnStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public RETURN(): TerminalNode {
		return this.getToken(GroovyParser.RETURN, 0);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterReturnStmtAlt) {
			listener.enterReturnStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitReturnStmtAlt) {
			listener.exitReturnStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitReturnStmtAlt) {
			return visitor.visitReturnStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ThrowStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public THROW(): TerminalNode {
		return this.getToken(GroovyParser.THROW, 0);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterThrowStmtAlt) {
			listener.enterThrowStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitThrowStmtAlt) {
			listener.exitThrowStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitThrowStmtAlt) {
			return visitor.visitThrowStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LabeledStmtAltContext extends StatementContext {
	constructor(parser: GroovyParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLabeledStmtAlt) {
			listener.enterLabeledStmtAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLabeledStmtAlt) {
			listener.exitLabeledStmtAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLabeledStmtAlt) {
			return visitor.visitLabeledStmtAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CatchClauseContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public CATCH(): TerminalNode {
		return this.getToken(GroovyParser.CATCH, 0);
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public variableModifiersOpt(): VariableModifiersOptContext {
		return this.getTypedRuleContext(VariableModifiersOptContext, 0) as VariableModifiersOptContext;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public catchType(): CatchTypeContext {
		return this.getTypedRuleContext(CatchTypeContext, 0) as CatchTypeContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_catchClause;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CatchTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public qualifiedClassName_list(): QualifiedClassNameContext[] {
		return this.getTypedRuleContexts(QualifiedClassNameContext) as QualifiedClassNameContext[];
	}

	public qualifiedClassName(i: number): QualifiedClassNameContext {
		return this.getTypedRuleContext(QualifiedClassNameContext, i) as QualifiedClassNameContext;
	}

	public BITOR_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.BITOR);
	}

	public BITOR(i: number): TerminalNode {
		return this.getToken(GroovyParser.BITOR, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_catchType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FinallyBlockContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public FINALLY(): TerminalNode {
		return this.getToken(GroovyParser.FINALLY, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_finallyBlock;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ResourcesContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public resourceList(): ResourceListContext {
		return this.getTypedRuleContext(ResourceListContext, 0) as ResourceListContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public sep(): SepContext {
		return this.getTypedRuleContext(SepContext, 0) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_resources;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterResources) {
			listener.enterResources(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitResources) {
			listener.exitResources(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ResourceListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public resource_list(): ResourceContext[] {
		return this.getTypedRuleContexts(ResourceContext) as ResourceContext[];
	}

	public resource(i: number): ResourceContext {
		return this.getTypedRuleContext(ResourceContext, i) as ResourceContext;
	}

	public sep_list(): SepContext[] {
		return this.getTypedRuleContexts(SepContext) as SepContext[];
	}

	public sep(i: number): SepContext {
		return this.getTypedRuleContext(SepContext, i) as SepContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_resourceList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ResourceContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_resource;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchBlockStatementGroupContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public switchLabel_list(): SwitchLabelContext[] {
		return this.getTypedRuleContexts(SwitchLabelContext) as SwitchLabelContext[];
	}

	public switchLabel(i: number): SwitchLabelContext {
		return this.getTypedRuleContext(SwitchLabelContext, i) as SwitchLabelContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_switchBlockStatementGroup;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchLabelContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public CASE(): TerminalNode {
		return this.getToken(GroovyParser.CASE, 0);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_switchLabel;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForControlContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public enhancedForControl(): EnhancedForControlContext {
		return this.getTypedRuleContext(EnhancedForControlContext, 0) as EnhancedForControlContext;
	}

	public classicalForControl(): ClassicalForControlContext {
		return this.getTypedRuleContext(ClassicalForControlContext, 0) as ClassicalForControlContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_forControl;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EnhancedForControlContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public variableModifiersOpt(): VariableModifiersOptContext {
		return this.getTypedRuleContext(VariableModifiersOptContext, 0) as VariableModifiersOptContext;
	}

	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getTypedRuleContext(VariableDeclaratorIdContext, 0) as VariableDeclaratorIdContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_enhancedForControl;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassicalForControlContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public SEMI_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.SEMI);
	}

	public SEMI(i: number): TerminalNode {
		return this.getToken(GroovyParser.SEMI, i);
	}

	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public forUpdate(): ForUpdateContext {
		return this.getTypedRuleContext(ForUpdateContext, 0) as ForUpdateContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_classicalForControl;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassicalForControl) {
			listener.enterClassicalForControl(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassicalForControl) {
			listener.exitClassicalForControl(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassicalForControl) {
			return visitor.visitClassicalForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForInitContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getTypedRuleContext(LocalVariableDeclarationContext, 0) as LocalVariableDeclarationContext;
	}

	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_forInit;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForUpdateContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_forUpdate;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastParExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_castParExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCastParExpression) {
			listener.enterCastParExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCastParExpression) {
			listener.exitCastParExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCastParExpression) {
			return visitor.visitCastParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_parExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionInParContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getTypedRuleContext(EnhancedStatementExpressionContext, 0) as EnhancedStatementExpressionContext;
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_expressionInPar;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionInPar) {
			listener.enterExpressionInPar(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionInPar) {
			listener.exitExpressionInPar(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitExpressionInPar) {
			return visitor.visitExpressionInPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionListContext extends GroovyParserRuleContext {
	public canSpread: boolean;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.parser = parser;
		this.canSpread = canSpread;
	}

	public expressionListElement_list(): ExpressionListElementContext[] {
		return this.getTypedRuleContexts(ExpressionListElementContext) as ExpressionListElementContext[];
	}

	public expressionListElement(i: number): ExpressionListElementContext {
		return this.getTypedRuleContext(ExpressionListElementContext, i) as ExpressionListElementContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_expressionList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionListElementContext extends GroovyParserRuleContext {
	public canSpread: boolean;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, canSpread: boolean) {
		super(parent, invokingState);
		this.parser = parser;
		this.canSpread = canSpread;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_expressionListElement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExpressionListElement) {
			listener.enterExpressionListElement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExpressionListElement) {
			listener.exitExpressionListElement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitExpressionListElement) {
			return visitor.visitExpressionListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EnhancedStatementExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}

	public standardLambdaExpression(): StandardLambdaExpressionContext {
		return this.getTypedRuleContext(StandardLambdaExpressionContext, 0) as StandardLambdaExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_enhancedStatementExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedStatementExpression) {
			listener.enterEnhancedStatementExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedStatementExpression) {
			listener.exitEnhancedStatementExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnhancedStatementExpression) {
			return visitor.visitEnhancedStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StatementExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_statementExpression;
	}

	public override copyFrom(ctx: StatementExpressionContext): void {
		super.copyFrom(ctx);
	}
}

export class CommandExprAltContext extends StatementExpressionContext {
	constructor(parser: GroovyParser, ctx: StatementExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public commandExpression(): CommandExpressionContext {
		return this.getTypedRuleContext(CommandExpressionContext, 0) as CommandExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandExprAlt) {
			listener.enterCommandExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandExprAlt) {
			listener.exitCommandExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCommandExprAlt) {
			return visitor.visitCommandExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PostfixExpressionContext extends GroovyParserRuleContext {
	public _op!: Token;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public pathExpression(): PathExpressionContext {
		return this.getTypedRuleContext(PathExpressionContext, 0) as PathExpressionContext;
	}

	public INC(): TerminalNode {
		return this.getToken(GroovyParser.INC, 0);
	}

	public DEC(): TerminalNode {
		return this.getToken(GroovyParser.DEC, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_postfixExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public SWITCH(): TerminalNode {
		return this.getToken(GroovyParser.SWITCH, 0);
	}

	public expressionInPar(): ExpressionInParContext {
		return this.getTypedRuleContext(ExpressionInParContext, 0) as ExpressionInParContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	public RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	public switchBlockStatementExpressionGroup_list(): SwitchBlockStatementExpressionGroupContext[] {
		return this.getTypedRuleContexts(SwitchBlockStatementExpressionGroupContext) as SwitchBlockStatementExpressionGroupContext[];
	}

	public switchBlockStatementExpressionGroup(i: number): SwitchBlockStatementExpressionGroupContext {
		return this.getTypedRuleContext(SwitchBlockStatementExpressionGroupContext, i) as SwitchBlockStatementExpressionGroupContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_switchExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchExpression) {
			listener.enterSwitchExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchExpression) {
			listener.exitSwitchExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpression) {
			return visitor.visitSwitchExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchBlockStatementExpressionGroupContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public blockStatements(): BlockStatementsContext {
		return this.getTypedRuleContext(BlockStatementsContext, 0) as BlockStatementsContext;
	}

	public switchExpressionLabel_list(): SwitchExpressionLabelContext[] {
		return this.getTypedRuleContexts(SwitchExpressionLabelContext) as SwitchExpressionLabelContext[];
	}

	public switchExpressionLabel(i: number): SwitchExpressionLabelContext {
		return this.getTypedRuleContext(SwitchExpressionLabelContext, i) as SwitchExpressionLabelContext;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_switchBlockStatementExpressionGroup;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchBlockStatementExpressionGroup) {
			listener.enterSwitchBlockStatementExpressionGroup(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchBlockStatementExpressionGroup) {
			listener.exitSwitchBlockStatementExpressionGroup(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementExpressionGroup) {
			return visitor.visitSwitchBlockStatementExpressionGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchExpressionLabelContext extends GroovyParserRuleContext {
	public _ac!: Token;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public CASE(): TerminalNode {
		return this.getToken(GroovyParser.CASE, 0);
	}

	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}

	public DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	public ARROW(): TerminalNode {
		return this.getToken(GroovyParser.ARROW, 0);
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_switchExpressionLabel;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchExpressionLabel) {
			listener.enterSwitchExpressionLabel(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchExpressionLabel) {
			listener.exitSwitchExpressionLabel(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchExpressionLabel) {
			return visitor.visitSwitchExpressionLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_expression;
	}

	public override copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}

export class PostfixExprAltContext extends ExpressionContext {
	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPostfixExprAlt) {
			listener.enterPostfixExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPostfixExprAlt) {
			listener.exitPostfixExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPostfixExprAlt) {
			return visitor.visitPostfixExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryNotExprAltContext extends ExpressionContext {
	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public BITNOT(): TerminalNode {
		return this.getToken(GroovyParser.BITNOT, 0);
	}

	public NOT(): TerminalNode {
		return this.getToken(GroovyParser.NOT, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterUnaryNotExprAlt) {
			listener.enterUnaryNotExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitUnaryNotExprAlt) {
			listener.exitUnaryNotExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitUnaryNotExprAlt) {
			return visitor.visitUnaryNotExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ShiftExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _dlOp!: Token;
	public _tgOp!: Token;
	public _dgOp!: Token;
	public _rangeOp!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public LT_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.LT);
	}

	public LT(i: number): TerminalNode {
		return this.getToken(GroovyParser.LT, i);
	}

	public GT_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.GT);
	}

	public GT(i: number): TerminalNode {
		return this.getToken(GroovyParser.GT, i);
	}

	public RANGE_INCLUSIVE(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_INCLUSIVE, 0);
	}

	public RANGE_EXCLUSIVE_LEFT(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_EXCLUSIVE_LEFT, 0);
	}

	public RANGE_EXCLUSIVE_RIGHT(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_EXCLUSIVE_RIGHT, 0);
	}

	public RANGE_EXCLUSIVE_FULL(): TerminalNode {
		return this.getToken(GroovyParser.RANGE_EXCLUSIVE_FULL, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterShiftExprAlt) {
			listener.enterShiftExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitShiftExprAlt) {
			listener.exitShiftExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitShiftExprAlt) {
			return visitor.visitShiftExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastExprAltContext extends ExpressionContext {
	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public castParExpression(): CastParExpressionContext {
		return this.getTypedRuleContext(CastParExpressionContext, 0) as CastParExpressionContext;
	}

	public castOperandExpression(): CastOperandExpressionContext {
		return this.getTypedRuleContext(CastOperandExpressionContext, 0) as CastOperandExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCastExprAlt) {
			listener.enterCastExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCastExprAlt) {
			listener.exitCastExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCastExprAlt) {
			return visitor.visitCastExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchExprAltContext extends ExpressionContext {
	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public switchExpression(): SwitchExpressionContext {
		return this.getTypedRuleContext(SwitchExpressionContext, 0) as SwitchExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSwitchExprAlt) {
			listener.enterSwitchExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSwitchExprAlt) {
			listener.exitSwitchExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSwitchExprAlt) {
			return visitor.visitSwitchExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MultipleAssignmentExprAltContext extends ExpressionContext {
	public _left!: VariableNamesContext;
	public _op!: Token;
	public _right!: StatementExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public variableNames(): VariableNamesContext {
		return this.getTypedRuleContext(VariableNamesContext, 0) as VariableNamesContext;
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	public statementExpression(): StatementExpressionContext {
		return this.getTypedRuleContext(StatementExpressionContext, 0) as StatementExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMultipleAssignmentExprAlt) {
			listener.enterMultipleAssignmentExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMultipleAssignmentExprAlt) {
			listener.exitMultipleAssignmentExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMultipleAssignmentExprAlt) {
			return visitor.visitMultipleAssignmentExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExclusiveOrExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public XOR(): TerminalNode {
		return this.getToken(GroovyParser.XOR, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterExclusiveOrExprAlt) {
			listener.enterExclusiveOrExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitExclusiveOrExprAlt) {
			listener.exitExclusiveOrExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitExclusiveOrExprAlt) {
			return visitor.visitExclusiveOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AdditiveExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public ADD(): TerminalNode {
		return this.getToken(GroovyParser.ADD, 0);
	}

	public SUB(): TerminalNode {
		return this.getToken(GroovyParser.SUB, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAdditiveExprAlt) {
			listener.enterAdditiveExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAdditiveExprAlt) {
			listener.exitAdditiveExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExprAlt) {
			return visitor.visitAdditiveExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RegexExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public REGEX_FIND(): TerminalNode {
		return this.getToken(GroovyParser.REGEX_FIND, 0);
	}

	public REGEX_MATCH(): TerminalNode {
		return this.getToken(GroovyParser.REGEX_MATCH, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterRegexExprAlt) {
			listener.enterRegexExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitRegexExprAlt) {
			listener.exitRegexExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitRegexExprAlt) {
			return visitor.visitRegexExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalExprAltContext extends ExpressionContext {
	public _con!: ExpressionContext;
	public _tb!: ExpressionContext;
	public _fb!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public QUESTION(): TerminalNode {
		return this.getToken(GroovyParser.QUESTION, 0);
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public ELVIS(): TerminalNode {
		return this.getToken(GroovyParser.ELVIS, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterConditionalExprAlt) {
			listener.enterConditionalExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitConditionalExprAlt) {
			listener.exitConditionalExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitConditionalExprAlt) {
			return visitor.visitConditionalExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PowerExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public POWER(): TerminalNode {
		return this.getToken(GroovyParser.POWER, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPowerExprAlt) {
			listener.enterPowerExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPowerExprAlt) {
			listener.exitPowerExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPowerExprAlt) {
			return visitor.visitPowerExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RelationalExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public LE(): TerminalNode {
		return this.getToken(GroovyParser.LE, 0);
	}

	public GE(): TerminalNode {
		return this.getToken(GroovyParser.GE, 0);
	}

	public GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	public LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	public IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	public NOT_IN(): TerminalNode {
		return this.getToken(GroovyParser.NOT_IN, 0);
	}

	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}

	public AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	public INSTANCEOF(): TerminalNode {
		return this.getToken(GroovyParser.INSTANCEOF, 0);
	}

	public NOT_INSTANCEOF(): TerminalNode {
		return this.getToken(GroovyParser.NOT_INSTANCEOF, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterRelationalExprAlt) {
			listener.enterRelationalExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitRelationalExprAlt) {
			listener.exitRelationalExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitRelationalExprAlt) {
			return visitor.visitRelationalExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LogicalAndExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public AND(): TerminalNode {
		return this.getToken(GroovyParser.AND, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLogicalAndExprAlt) {
			listener.enterLogicalAndExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLogicalAndExprAlt) {
			listener.exitLogicalAndExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExprAlt) {
			return visitor.visitLogicalAndExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssignmentExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: EnhancedStatementExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public enhancedStatementExpression(): EnhancedStatementExpressionContext {
		return this.getTypedRuleContext(EnhancedStatementExpressionContext, 0) as EnhancedStatementExpressionContext;
	}

	public ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ASSIGN, 0);
	}

	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ADD_ASSIGN, 0);
	}

	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.SUB_ASSIGN, 0);
	}

	public MUL_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.MUL_ASSIGN, 0);
	}

	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.DIV_ASSIGN, 0);
	}

	public AND_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.AND_ASSIGN, 0);
	}

	public OR_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.OR_ASSIGN, 0);
	}

	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.XOR_ASSIGN, 0);
	}

	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.RSHIFT_ASSIGN, 0);
	}

	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.URSHIFT_ASSIGN, 0);
	}

	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.LSHIFT_ASSIGN, 0);
	}

	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.MOD_ASSIGN, 0);
	}

	public POWER_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.POWER_ASSIGN, 0);
	}

	public ELVIS_ASSIGN(): TerminalNode {
		return this.getToken(GroovyParser.ELVIS_ASSIGN, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAssignmentExprAlt) {
			listener.enterAssignmentExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAssignmentExprAlt) {
			listener.exitAssignmentExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExprAlt) {
			return visitor.visitAssignmentExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryAddExprAltContext extends ExpressionContext {
	public _op!: Token;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public INC(): TerminalNode {
		return this.getToken(GroovyParser.INC, 0);
	}

	public DEC(): TerminalNode {
		return this.getToken(GroovyParser.DEC, 0);
	}

	public ADD(): TerminalNode {
		return this.getToken(GroovyParser.ADD, 0);
	}

	public SUB(): TerminalNode {
		return this.getToken(GroovyParser.SUB, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterUnaryAddExprAlt) {
			listener.enterUnaryAddExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitUnaryAddExprAlt) {
			listener.exitUnaryAddExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitUnaryAddExprAlt) {
			return visitor.visitUnaryAddExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MultiplicativeExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	public DIV(): TerminalNode {
		return this.getToken(GroovyParser.DIV, 0);
	}

	public MOD(): TerminalNode {
		return this.getToken(GroovyParser.MOD, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMultiplicativeExprAlt) {
			listener.enterMultiplicativeExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMultiplicativeExprAlt) {
			listener.exitMultiplicativeExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExprAlt) {
			return visitor.visitMultiplicativeExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InclusiveOrExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public BITOR(): TerminalNode {
		return this.getToken(GroovyParser.BITOR, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterInclusiveOrExprAlt) {
			listener.enterInclusiveOrExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitInclusiveOrExprAlt) {
			listener.exitInclusiveOrExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitInclusiveOrExprAlt) {
			return visitor.visitInclusiveOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LogicalOrExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public OR(): TerminalNode {
		return this.getToken(GroovyParser.OR, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLogicalOrExprAlt) {
			listener.enterLogicalOrExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLogicalOrExprAlt) {
			listener.exitLogicalOrExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExprAlt) {
			return visitor.visitLogicalOrExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EqualityExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public IDENTICAL(): TerminalNode {
		return this.getToken(GroovyParser.IDENTICAL, 0);
	}

	public NOT_IDENTICAL(): TerminalNode {
		return this.getToken(GroovyParser.NOT_IDENTICAL, 0);
	}

	public EQUAL(): TerminalNode {
		return this.getToken(GroovyParser.EQUAL, 0);
	}

	public NOTEQUAL(): TerminalNode {
		return this.getToken(GroovyParser.NOTEQUAL, 0);
	}

	public SPACESHIP(): TerminalNode {
		return this.getToken(GroovyParser.SPACESHIP, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEqualityExprAlt) {
			listener.enterEqualityExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEqualityExprAlt) {
			listener.exitEqualityExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEqualityExprAlt) {
			return visitor.visitEqualityExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AndExprAltContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;

	constructor(parser: GroovyParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}

	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}

	public BITAND(): TerminalNode {
		return this.getToken(GroovyParser.BITAND, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAndExprAlt) {
			listener.enterAndExprAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAndExprAlt) {
			listener.exitAndExprAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAndExprAlt) {
			return visitor.visitAndExprAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastOperandExpressionContext extends GroovyParserRuleContext {
	public _op!: Token;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public castParExpression(): CastParExpressionContext {
		return this.getTypedRuleContext(CastParExpressionContext, 0) as CastParExpressionContext;
	}

	public castOperandExpression(): CastOperandExpressionContext {
		return this.getTypedRuleContext(CastOperandExpressionContext, 0) as CastOperandExpressionContext;
	}

	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public BITNOT(): TerminalNode {
		return this.getToken(GroovyParser.BITNOT, 0);
	}

	public NOT(): TerminalNode {
		return this.getToken(GroovyParser.NOT, 0);
	}

	public INC(): TerminalNode {
		return this.getToken(GroovyParser.INC, 0);
	}

	public DEC(): TerminalNode {
		return this.getToken(GroovyParser.DEC, 0);
	}

	public ADD(): TerminalNode {
		return this.getToken(GroovyParser.ADD, 0);
	}

	public SUB(): TerminalNode {
		return this.getToken(GroovyParser.SUB, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_castOperandExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCastOperandExpression) {
			listener.enterCastOperandExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCastOperandExpression) {
			listener.exitCastOperandExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCastOperandExpression) {
			return visitor.visitCastOperandExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CommandExpressionContext extends GroovyParserRuleContext {
	public _expression!: ExpressionContext;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}

	public commandArgument_list(): CommandArgumentContext[] {
		return this.getTypedRuleContexts(CommandArgumentContext) as CommandArgumentContext[];
	}

	public commandArgument(i: number): CommandArgumentContext {
		return this.getTypedRuleContext(CommandArgumentContext, i) as CommandArgumentContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_commandExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandExpression) {
			listener.enterCommandExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandExpression) {
			listener.exitCommandExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCommandExpression) {
			return visitor.visitCommandExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CommandArgumentContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public commandPrimary(): CommandPrimaryContext {
		return this.getTypedRuleContext(CommandPrimaryContext, 0) as CommandPrimaryContext;
	}

	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}

	public pathElement_list(): PathElementContext[] {
		return this.getTypedRuleContexts(PathElementContext) as PathElementContext[];
	}

	public pathElement(i: number): PathElementContext {
		return this.getTypedRuleContext(PathElementContext, i) as PathElementContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_commandArgument;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandArgument) {
			listener.enterCommandArgument(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandArgument) {
			listener.exitCommandArgument(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCommandArgument) {
			return visitor.visitCommandArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PathExpressionContext extends GroovyParserRuleContext {
	public t: number = 0;
	public _pathElement!: PathElementContext;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}

	public STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	public pathElement_list(): PathElementContext[] {
		return this.getTypedRuleContexts(PathElementContext) as PathElementContext[];
	}

	public pathElement(i: number): PathElementContext {
		return this.getTypedRuleContext(PathElementContext, i) as PathElementContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_pathExpression;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPathExpression) {
			listener.enterPathExpression(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPathExpression) {
			listener.exitPathExpression(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPathExpression) {
			return visitor.visitPathExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PathElementContext extends GroovyParserRuleContext {
	public t: number = 0;

	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public DOT(): TerminalNode {
		return this.getToken(GroovyParser.DOT, 0);
	}

	public NEW(): TerminalNode {
		return this.getToken(GroovyParser.NEW, 0);
	}

	public creator(): CreatorContext {
		return this.getTypedRuleContext(CreatorContext, 0) as CreatorContext;
	}

	public namePart(): NamePartContext {
		return this.getTypedRuleContext(NamePartContext, 0) as NamePartContext;
	}

	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		return this.getTypedRuleContext(ClosureOrLambdaExpressionContext, 0) as ClosureOrLambdaExpressionContext;
	}

	public METHOD_POINTER(): TerminalNode {
		return this.getToken(GroovyParser.METHOD_POINTER, 0);
	}

	public METHOD_REFERENCE(): TerminalNode {
		return this.getToken(GroovyParser.METHOD_REFERENCE, 0);
	}

	public SPREAD_DOT(): TerminalNode {
		return this.getToken(GroovyParser.SPREAD_DOT, 0);
	}

	public SAFE_DOT(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_DOT, 0);
	}

	public SAFE_CHAIN_DOT(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_CHAIN_DOT, 0);
	}

	public AT(): TerminalNode {
		return this.getToken(GroovyParser.AT, 0);
	}

	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getTypedRuleContext(NonWildcardTypeArgumentsContext, 0) as NonWildcardTypeArgumentsContext;
	}

	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}

	public indexPropertyArgs(): IndexPropertyArgsContext {
		return this.getTypedRuleContext(IndexPropertyArgsContext, 0) as IndexPropertyArgsContext;
	}

	public namedPropertyArgs(): NamedPropertyArgsContext {
		return this.getTypedRuleContext(NamedPropertyArgsContext, 0) as NamedPropertyArgsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_pathElement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterPathElement) {
			listener.enterPathElement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitPathElement) {
			listener.exitPathElement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitPathElement) {
			return visitor.visitPathElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamePartContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}

	public dynamicMemberName(): DynamicMemberNameContext {
		return this.getTypedRuleContext(DynamicMemberNameContext, 0) as DynamicMemberNameContext;
	}

	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namePart;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamePart) {
			listener.enterNamePart(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamePart) {
			listener.exitNamePart(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamePart) {
			return visitor.visitNamePart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DynamicMemberNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public parExpression(): ParExpressionContext {
		return this.getTypedRuleContext(ParExpressionContext, 0) as ParExpressionContext;
	}

	public gstring(): GstringContext {
		return this.getTypedRuleContext(GstringContext, 0) as GstringContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_dynamicMemberName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterDynamicMemberName) {
			listener.enterDynamicMemberName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitDynamicMemberName) {
			listener.exitDynamicMemberName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitDynamicMemberName) {
			return visitor.visitDynamicMemberName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IndexPropertyArgsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	public SAFE_INDEX(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_INDEX, 0);
	}

	public LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_indexPropertyArgs;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIndexPropertyArgs) {
			listener.enterIndexPropertyArgs(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIndexPropertyArgs) {
			listener.exitIndexPropertyArgs(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIndexPropertyArgs) {
			return visitor.visitIndexPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedPropertyArgsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	public SAFE_INDEX(): TerminalNode {
		return this.getToken(GroovyParser.SAFE_INDEX, 0);
	}

	public LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	public namedPropertyArgList(): NamedPropertyArgListContext {
		return this.getTypedRuleContext(NamedPropertyArgListContext, 0) as NamedPropertyArgListContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedPropertyArgs;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedPropertyArgs) {
			listener.enterNamedPropertyArgs(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedPropertyArgs) {
			listener.exitNamedPropertyArgs(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedPropertyArgs) {
			return visitor.visitNamedPropertyArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PrimaryContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_primary;
	}

	public override copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}

export class MapPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public map(): MapContext {
		return this.getTypedRuleContext(MapContext, 0) as MapContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapPrmrAlt) {
			listener.enterMapPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapPrmrAlt) {
			listener.exitMapPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMapPrmrAlt) {
			return visitor.visitMapPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GstringPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public gstring(): GstringContext {
		return this.getTypedRuleContext(GstringContext, 0) as GstringContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterGstringPrmrAlt) {
			listener.enterGstringPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitGstringPrmrAlt) {
			listener.exitGstringPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitGstringPrmrAlt) {
			return visitor.visitGstringPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ListPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterListPrmrAlt) {
			listener.enterListPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitListPrmrAlt) {
			listener.exitListPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitListPrmrAlt) {
			return visitor.visitListPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NewPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public NEW(): TerminalNode {
		return this.getToken(GroovyParser.NEW, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public creator(): CreatorContext {
		return this.getTypedRuleContext(CreatorContext, 0) as CreatorContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNewPrmrAlt) {
			listener.enterNewPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNewPrmrAlt) {
			listener.exitNewPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNewPrmrAlt) {
			return visitor.visitNewPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LiteralPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterLiteralPrmrAlt) {
			listener.enterLiteralPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitLiteralPrmrAlt) {
			listener.exitLiteralPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitLiteralPrmrAlt) {
			return visitor.visitLiteralPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ThisPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public THIS(): TerminalNode {
		return this.getToken(GroovyParser.THIS, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterThisPrmrAlt) {
			listener.enterThisPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitThisPrmrAlt) {
			listener.exitThisPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitThisPrmrAlt) {
			return visitor.visitThisPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClosureOrLambdaExpressionPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public closureOrLambdaExpression(): ClosureOrLambdaExpressionContext {
		return this.getTypedRuleContext(ClosureOrLambdaExpressionContext, 0) as ClosureOrLambdaExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClosureOrLambdaExpressionPrmrAlt) {
			listener.enterClosureOrLambdaExpressionPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClosureOrLambdaExpressionPrmrAlt) {
			listener.exitClosureOrLambdaExpressionPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClosureOrLambdaExpressionPrmrAlt) {
			return visitor.visitClosureOrLambdaExpressionPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BuiltInTypePrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public builtInType(): BuiltInTypeContext {
		return this.getTypedRuleContext(BuiltInTypeContext, 0) as BuiltInTypeContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBuiltInTypePrmrAlt) {
			listener.enterBuiltInTypePrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBuiltInTypePrmrAlt) {
			listener.exitBuiltInTypePrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBuiltInTypePrmrAlt) {
			return visitor.visitBuiltInTypePrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIdentifierPrmrAlt) {
			listener.enterIdentifierPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIdentifierPrmrAlt) {
			listener.exitIdentifierPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPrmrAlt) {
			return visitor.visitIdentifierPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SuperPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public SUPER(): TerminalNode {
		return this.getToken(GroovyParser.SUPER, 0);
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSuperPrmrAlt) {
			listener.enterSuperPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSuperPrmrAlt) {
			listener.exitSuperPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSuperPrmrAlt) {
			return visitor.visitSuperPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParenPrmrAltContext extends PrimaryContext {
	constructor(parser: GroovyParser, ctx: PrimaryContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}

	public parExpression(): ParExpressionContext {
		return this.getTypedRuleContext(ParExpressionContext, 0) as ParExpressionContext;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterParenPrmrAlt) {
			listener.enterParenPrmrAlt(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitParenPrmrAlt) {
			listener.exitParenPrmrAlt(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitParenPrmrAlt) {
			return visitor.visitParenPrmrAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedPropertyArgPrimaryContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}

	public gstring(): GstringContext {
		return this.getTypedRuleContext(GstringContext, 0) as GstringContext;
	}

	public parExpression(): ParExpressionContext {
		return this.getTypedRuleContext(ParExpressionContext, 0) as ParExpressionContext;
	}

	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}

	public map(): MapContext {
		return this.getTypedRuleContext(MapContext, 0) as MapContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedPropertyArgPrimary;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedPropertyArgPrimary) {
			listener.enterNamedPropertyArgPrimary(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedPropertyArgPrimary) {
			listener.exitNamedPropertyArgPrimary(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedPropertyArgPrimary) {
			return visitor.visitNamedPropertyArgPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedArgPrimaryContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}

	public gstring(): GstringContext {
		return this.getTypedRuleContext(GstringContext, 0) as GstringContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedArgPrimary;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedArgPrimary) {
			listener.enterNamedArgPrimary(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedArgPrimary) {
			listener.exitNamedArgPrimary(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedArgPrimary) {
			return visitor.visitNamedArgPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CommandPrimaryContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}

	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}

	public gstring(): GstringContext {
		return this.getTypedRuleContext(GstringContext, 0) as GstringContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_commandPrimary;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCommandPrimary) {
			listener.enterCommandPrimary(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCommandPrimary) {
			listener.exitCommandPrimary(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCommandPrimary) {
			return visitor.visitCommandPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	public RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}

	public COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_list;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MapContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	public RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	public mapEntryList(): MapEntryListContext {
		return this.getTypedRuleContext(MapEntryListContext, 0) as MapEntryListContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_map;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MapEntryListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public mapEntry_list(): MapEntryContext[] {
		return this.getTypedRuleContexts(MapEntryContext) as MapEntryContext[];
	}

	public mapEntry(i: number): MapEntryContext {
		return this.getTypedRuleContext(MapEntryContext, i) as MapEntryContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_mapEntryList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapEntryList) {
			listener.enterMapEntryList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapEntryList) {
			listener.exitMapEntryList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMapEntryList) {
			return visitor.visitMapEntryList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedPropertyArgListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public namedPropertyArg_list(): NamedPropertyArgContext[] {
		return this.getTypedRuleContexts(NamedPropertyArgContext) as NamedPropertyArgContext[];
	}

	public namedPropertyArg(i: number): NamedPropertyArgContext {
		return this.getTypedRuleContext(NamedPropertyArgContext, i) as NamedPropertyArgContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedPropertyArgList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedPropertyArgList) {
			listener.enterNamedPropertyArgList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedPropertyArgList) {
			listener.exitNamedPropertyArgList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedPropertyArgList) {
			return visitor.visitNamedPropertyArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MapEntryContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public mapEntryLabel(): MapEntryLabelContext {
		return this.getTypedRuleContext(MapEntryLabelContext, 0) as MapEntryLabelContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_mapEntry;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapEntry) {
			listener.enterMapEntry(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapEntry) {
			listener.exitMapEntry(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMapEntry) {
			return visitor.visitMapEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedPropertyArgContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public namedPropertyArgLabel(): NamedPropertyArgLabelContext {
		return this.getTypedRuleContext(NamedPropertyArgLabelContext, 0) as NamedPropertyArgLabelContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedPropertyArg;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedPropertyArg) {
			listener.enterNamedPropertyArg(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedPropertyArg) {
			listener.exitNamedPropertyArg(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedPropertyArg) {
			return visitor.visitNamedPropertyArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedArgContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public namedArgLabel(): NamedArgLabelContext {
		return this.getTypedRuleContext(NamedArgLabelContext, 0) as NamedArgLabelContext;
	}

	public COLON(): TerminalNode {
		return this.getToken(GroovyParser.COLON, 0);
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public MUL(): TerminalNode {
		return this.getToken(GroovyParser.MUL, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedArg;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedArg) {
			listener.enterNamedArg(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedArg) {
			listener.exitNamedArg(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedArg) {
			return visitor.visitNamedArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MapEntryLabelContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}

	public primary(): PrimaryContext {
		return this.getTypedRuleContext(PrimaryContext, 0) as PrimaryContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_mapEntryLabel;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterMapEntryLabel) {
			listener.enterMapEntryLabel(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitMapEntryLabel) {
			listener.exitMapEntryLabel(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitMapEntryLabel) {
			return visitor.visitMapEntryLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedPropertyArgLabelContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}

	public namedPropertyArgPrimary(): NamedPropertyArgPrimaryContext {
		return this.getTypedRuleContext(NamedPropertyArgPrimaryContext, 0) as NamedPropertyArgPrimaryContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedPropertyArgLabel;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedPropertyArgLabel) {
			listener.enterNamedPropertyArgLabel(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedPropertyArgLabel) {
			listener.exitNamedPropertyArgLabel(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedPropertyArgLabel) {
			return visitor.visitNamedPropertyArgLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NamedArgLabelContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public keywords(): KeywordsContext {
		return this.getTypedRuleContext(KeywordsContext, 0) as KeywordsContext;
	}

	public namedArgPrimary(): NamedArgPrimaryContext {
		return this.getTypedRuleContext(NamedArgPrimaryContext, 0) as NamedArgPrimaryContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_namedArgLabel;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNamedArgLabel) {
			listener.enterNamedArgLabel(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNamedArgLabel) {
			listener.exitNamedArgLabel(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNamedArgLabel) {
			return visitor.visitNamedArgLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreatorContext extends GroovyParserRuleContext {
	public t: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
	}

	public createdName(): CreatedNameContext {
		return this.getTypedRuleContext(CreatedNameContext, 0) as CreatedNameContext;
	}

	public nls(): NlsContext {
		return this.getTypedRuleContext(NlsContext, 0) as NlsContext;
	}

	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}

	public anonymousInnerClassDeclaration(): AnonymousInnerClassDeclarationContext {
		return this.getTypedRuleContext(AnonymousInnerClassDeclarationContext, 0) as AnonymousInnerClassDeclarationContext;
	}

	public dim_list(): DimContext[] {
		return this.getTypedRuleContexts(DimContext) as DimContext[];
	}

	public dim(i: number): DimContext {
		return this.getTypedRuleContext(DimContext, i) as DimContext;
	}

	public arrayInitializer(): ArrayInitializerContext {
		return this.getTypedRuleContext(ArrayInitializerContext, 0) as ArrayInitializerContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_creator;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DimContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public LBRACK(): TerminalNode {
		return this.getToken(GroovyParser.LBRACK, 0);
	}

	public RBRACK(): TerminalNode {
		return this.getToken(GroovyParser.RBRACK, 0);
	}

	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_dim;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterDim) {
			listener.enterDim(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitDim) {
			listener.exitDim(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitDim) {
			return visitor.visitDim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArrayInitializerContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LBRACE(): TerminalNode {
		return this.getToken(GroovyParser.LBRACE, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public RBRACE(): TerminalNode {
		return this.getToken(GroovyParser.RBRACE, 0);
	}

	public variableInitializers(): VariableInitializersContext {
		return this.getTypedRuleContext(VariableInitializersContext, 0) as VariableInitializersContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_arrayInitializer;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AnonymousInnerClassDeclarationContext extends GroovyParserRuleContext {
	public t: number;

	constructor(parser: GroovyParser, parent: ParserRuleContext, invokingState: number, t: number) {
		super(parent, invokingState);
		this.parser = parser;
		this.t = t;
	}

	public classBody(): ClassBodyContext {
		return this.getTypedRuleContext(ClassBodyContext, 0) as ClassBodyContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_anonymousInnerClassDeclaration;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterAnonymousInnerClassDeclaration) {
			listener.enterAnonymousInnerClassDeclaration(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitAnonymousInnerClassDeclaration) {
			listener.exitAnonymousInnerClassDeclaration(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitAnonymousInnerClassDeclaration) {
			return visitor.visitAnonymousInnerClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CreatedNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public annotationsOpt(): AnnotationsOptContext {
		return this.getTypedRuleContext(AnnotationsOptContext, 0) as AnnotationsOptContext;
	}

	public primitiveType(): PrimitiveTypeContext {
		return this.getTypedRuleContext(PrimitiveTypeContext, 0) as PrimitiveTypeContext;
	}

	public qualifiedClassName(): QualifiedClassNameContext {
		return this.getTypedRuleContext(QualifiedClassNameContext, 0) as QualifiedClassNameContext;
	}

	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		return this.getTypedRuleContext(TypeArgumentsOrDiamondContext, 0) as TypeArgumentsOrDiamondContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_createdName;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NonWildcardTypeArgumentsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}

	public GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_nonWildcardTypeArguments;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeArgumentsOrDiamondContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LT(): TerminalNode {
		return this.getToken(GroovyParser.LT, 0);
	}

	public GT(): TerminalNode {
		return this.getToken(GroovyParser.GT, 0);
	}

	public typeArguments(): TypeArgumentsContext {
		return this.getTypedRuleContext(TypeArgumentsContext, 0) as TypeArgumentsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_typeArgumentsOrDiamond;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArgumentsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public LPAREN(): TerminalNode {
		return this.getToken(GroovyParser.LPAREN, 0);
	}

	public rparen(): RparenContext {
		return this.getTypedRuleContext(RparenContext, 0) as RparenContext;
	}

	public enhancedArgumentListInPar(): EnhancedArgumentListInParContext {
		return this.getTypedRuleContext(EnhancedArgumentListInParContext, 0) as EnhancedArgumentListInParContext;
	}

	public COMMA(): TerminalNode {
		return this.getToken(GroovyParser.COMMA, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_arguments;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArgumentListContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public firstArgumentListElement(): FirstArgumentListElementContext {
		return this.getTypedRuleContext(FirstArgumentListElementContext, 0) as FirstArgumentListElementContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public argumentListElement_list(): ArgumentListElementContext[] {
		return this.getTypedRuleContexts(ArgumentListElementContext) as ArgumentListElementContext[];
	}

	public argumentListElement(i: number): ArgumentListElementContext {
		return this.getTypedRuleContext(ArgumentListElementContext, i) as ArgumentListElementContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_argumentList;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EnhancedArgumentListInParContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public enhancedArgumentListElement_list(): EnhancedArgumentListElementContext[] {
		return this.getTypedRuleContexts(EnhancedArgumentListElementContext) as EnhancedArgumentListElementContext[];
	}

	public enhancedArgumentListElement(i: number): EnhancedArgumentListElementContext {
		return this.getTypedRuleContext(EnhancedArgumentListElementContext, i) as EnhancedArgumentListElementContext;
	}

	public COMMA_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.COMMA);
	}

	public COMMA(i: number): TerminalNode {
		return this.getToken(GroovyParser.COMMA, i);
	}

	public nls_list(): NlsContext[] {
		return this.getTypedRuleContexts(NlsContext) as NlsContext[];
	}

	public nls(i: number): NlsContext {
		return this.getTypedRuleContext(NlsContext, i) as NlsContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_enhancedArgumentListInPar;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedArgumentListInPar) {
			listener.enterEnhancedArgumentListInPar(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedArgumentListInPar) {
			listener.exitEnhancedArgumentListInPar(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnhancedArgumentListInPar) {
			return visitor.visitEnhancedArgumentListInPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FirstArgumentListElementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public expressionListElement(): ExpressionListElementContext {
		return this.getTypedRuleContext(ExpressionListElementContext, 0) as ExpressionListElementContext;
	}

	public namedArg(): NamedArgContext {
		return this.getTypedRuleContext(NamedArgContext, 0) as NamedArgContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_firstArgumentListElement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterFirstArgumentListElement) {
			listener.enterFirstArgumentListElement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitFirstArgumentListElement) {
			listener.exitFirstArgumentListElement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitFirstArgumentListElement) {
			return visitor.visitFirstArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArgumentListElementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public expressionListElement(): ExpressionListElementContext {
		return this.getTypedRuleContext(ExpressionListElementContext, 0) as ExpressionListElementContext;
	}

	public namedPropertyArg(): NamedPropertyArgContext {
		return this.getTypedRuleContext(NamedPropertyArgContext, 0) as NamedPropertyArgContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_argumentListElement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterArgumentListElement) {
			listener.enterArgumentListElement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitArgumentListElement) {
			listener.exitArgumentListElement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitArgumentListElement) {
			return visitor.visitArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EnhancedArgumentListElementContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public expressionListElement(): ExpressionListElementContext {
		return this.getTypedRuleContext(ExpressionListElementContext, 0) as ExpressionListElementContext;
	}

	public standardLambdaExpression(): StandardLambdaExpressionContext {
		return this.getTypedRuleContext(StandardLambdaExpressionContext, 0) as StandardLambdaExpressionContext;
	}

	public namedPropertyArg(): NamedPropertyArgContext {
		return this.getTypedRuleContext(NamedPropertyArgContext, 0) as NamedPropertyArgContext;
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_enhancedArgumentListElement;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterEnhancedArgumentListElement) {
			listener.enterEnhancedArgumentListElement(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitEnhancedArgumentListElement) {
			listener.exitEnhancedArgumentListElement(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitEnhancedArgumentListElement) {
			return visitor.visitEnhancedArgumentListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StringLiteralContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public StringLiteral(): TerminalNode {
		return this.getToken(GroovyParser.StringLiteral, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_stringLiteral;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassNameContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public CapitalizedIdentifier(): TerminalNode {
		return this.getToken(GroovyParser.CapitalizedIdentifier, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_className;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public Identifier(): TerminalNode {
		return this.getToken(GroovyParser.Identifier, 0);
	}

	public CapitalizedIdentifier(): TerminalNode {
		return this.getToken(GroovyParser.CapitalizedIdentifier, 0);
	}

	public AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	public IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	public PERMITS(): TerminalNode {
		return this.getToken(GroovyParser.PERMITS, 0);
	}

	public RECORD(): TerminalNode {
		return this.getToken(GroovyParser.RECORD, 0);
	}

	public SEALED(): TerminalNode {
		return this.getToken(GroovyParser.SEALED, 0);
	}

	public TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	public VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	public YIELD(): TerminalNode {
		return this.getToken(GroovyParser.YIELD, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_identifier;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BuiltInTypeContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public BuiltInPrimitiveType(): TerminalNode {
		return this.getToken(GroovyParser.BuiltInPrimitiveType, 0);
	}

	public VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_builtInType;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterBuiltInType) {
			listener.enterBuiltInType(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitBuiltInType) {
			listener.exitBuiltInType(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitBuiltInType) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class KeywordsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public ABSTRACT(): TerminalNode {
		return this.getToken(GroovyParser.ABSTRACT, 0);
	}

	public AS(): TerminalNode {
		return this.getToken(GroovyParser.AS, 0);
	}

	public ASSERT(): TerminalNode {
		return this.getToken(GroovyParser.ASSERT, 0);
	}

	public BREAK(): TerminalNode {
		return this.getToken(GroovyParser.BREAK, 0);
	}

	public CASE(): TerminalNode {
		return this.getToken(GroovyParser.CASE, 0);
	}

	public CATCH(): TerminalNode {
		return this.getToken(GroovyParser.CATCH, 0);
	}

	public CLASS(): TerminalNode {
		return this.getToken(GroovyParser.CLASS, 0);
	}

	public CONST(): TerminalNode {
		return this.getToken(GroovyParser.CONST, 0);
	}

	public CONTINUE(): TerminalNode {
		return this.getToken(GroovyParser.CONTINUE, 0);
	}

	public DEF(): TerminalNode {
		return this.getToken(GroovyParser.DEF, 0);
	}

	public DEFAULT(): TerminalNode {
		return this.getToken(GroovyParser.DEFAULT, 0);
	}

	public DO(): TerminalNode {
		return this.getToken(GroovyParser.DO, 0);
	}

	public ELSE(): TerminalNode {
		return this.getToken(GroovyParser.ELSE, 0);
	}

	public ENUM(): TerminalNode {
		return this.getToken(GroovyParser.ENUM, 0);
	}

	public EXTENDS(): TerminalNode {
		return this.getToken(GroovyParser.EXTENDS, 0);
	}

	public FINAL(): TerminalNode {
		return this.getToken(GroovyParser.FINAL, 0);
	}

	public FINALLY(): TerminalNode {
		return this.getToken(GroovyParser.FINALLY, 0);
	}

	public FOR(): TerminalNode {
		return this.getToken(GroovyParser.FOR, 0);
	}

	public GOTO(): TerminalNode {
		return this.getToken(GroovyParser.GOTO, 0);
	}

	public IF(): TerminalNode {
		return this.getToken(GroovyParser.IF, 0);
	}

	public IMPLEMENTS(): TerminalNode {
		return this.getToken(GroovyParser.IMPLEMENTS, 0);
	}

	public IMPORT(): TerminalNode {
		return this.getToken(GroovyParser.IMPORT, 0);
	}

	public IN(): TerminalNode {
		return this.getToken(GroovyParser.IN, 0);
	}

	public INSTANCEOF(): TerminalNode {
		return this.getToken(GroovyParser.INSTANCEOF, 0);
	}

	public INTERFACE(): TerminalNode {
		return this.getToken(GroovyParser.INTERFACE, 0);
	}

	public NATIVE(): TerminalNode {
		return this.getToken(GroovyParser.NATIVE, 0);
	}

	public NEW(): TerminalNode {
		return this.getToken(GroovyParser.NEW, 0);
	}

	public NON_SEALED(): TerminalNode {
		return this.getToken(GroovyParser.NON_SEALED, 0);
	}

	public PACKAGE(): TerminalNode {
		return this.getToken(GroovyParser.PACKAGE, 0);
	}

	public PERMITS(): TerminalNode {
		return this.getToken(GroovyParser.PERMITS, 0);
	}

	public RECORD(): TerminalNode {
		return this.getToken(GroovyParser.RECORD, 0);
	}

	public RETURN(): TerminalNode {
		return this.getToken(GroovyParser.RETURN, 0);
	}

	public SEALED(): TerminalNode {
		return this.getToken(GroovyParser.SEALED, 0);
	}

	public STATIC(): TerminalNode {
		return this.getToken(GroovyParser.STATIC, 0);
	}

	public STRICTFP(): TerminalNode {
		return this.getToken(GroovyParser.STRICTFP, 0);
	}

	public SUPER(): TerminalNode {
		return this.getToken(GroovyParser.SUPER, 0);
	}

	public SWITCH(): TerminalNode {
		return this.getToken(GroovyParser.SWITCH, 0);
	}

	public SYNCHRONIZED(): TerminalNode {
		return this.getToken(GroovyParser.SYNCHRONIZED, 0);
	}

	public THIS(): TerminalNode {
		return this.getToken(GroovyParser.THIS, 0);
	}

	public THROW(): TerminalNode {
		return this.getToken(GroovyParser.THROW, 0);
	}

	public THROWS(): TerminalNode {
		return this.getToken(GroovyParser.THROWS, 0);
	}

	public TRANSIENT(): TerminalNode {
		return this.getToken(GroovyParser.TRANSIENT, 0);
	}

	public TRAIT(): TerminalNode {
		return this.getToken(GroovyParser.TRAIT, 0);
	}

	public THREADSAFE(): TerminalNode {
		return this.getToken(GroovyParser.THREADSAFE, 0);
	}

	public TRY(): TerminalNode {
		return this.getToken(GroovyParser.TRY, 0);
	}

	public VAR(): TerminalNode {
		return this.getToken(GroovyParser.VAR, 0);
	}

	public VOLATILE(): TerminalNode {
		return this.getToken(GroovyParser.VOLATILE, 0);
	}

	public WHILE(): TerminalNode {
		return this.getToken(GroovyParser.WHILE, 0);
	}

	public YIELD(): TerminalNode {
		return this.getToken(GroovyParser.YIELD, 0);
	}

	public NullLiteral(): TerminalNode {
		return this.getToken(GroovyParser.NullLiteral, 0);
	}

	public BooleanLiteral(): TerminalNode {
		return this.getToken(GroovyParser.BooleanLiteral, 0);
	}

	public BuiltInPrimitiveType(): TerminalNode {
		return this.getToken(GroovyParser.BuiltInPrimitiveType, 0);
	}

	public VOID(): TerminalNode {
		return this.getToken(GroovyParser.VOID, 0);
	}

	public PUBLIC(): TerminalNode {
		return this.getToken(GroovyParser.PUBLIC, 0);
	}

	public PROTECTED(): TerminalNode {
		return this.getToken(GroovyParser.PROTECTED, 0);
	}

	public PRIVATE(): TerminalNode {
		return this.getToken(GroovyParser.PRIVATE, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_keywords;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitKeywords) {
			return visitor.visitKeywords(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RparenContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public RPAREN(): TerminalNode {
		return this.getToken(GroovyParser.RPAREN, 0);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_rparen;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterRparen) {
			listener.enterRparen(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitRparen) {
			listener.exitRparen(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitRparen) {
			return visitor.visitRparen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NlsContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public NL_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.NL);
	}

	public NL(i: number): TerminalNode {
		return this.getToken(GroovyParser.NL, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_nls;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterNls) {
			listener.enterNls(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitNls) {
			listener.exitNls(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitNls) {
			return visitor.visitNls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SepContext extends GroovyParserRuleContext {
	constructor(parser?: GroovyParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
		this.parser = parser;
	}

	public NL_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.NL);
	}

	public NL(i: number): TerminalNode {
		return this.getToken(GroovyParser.NL, i);
	}

	public SEMI_list(): TerminalNode[] {
		return this.getTokens(GroovyParser.SEMI);
	}

	public SEMI(i: number): TerminalNode {
		return this.getToken(GroovyParser.SEMI, i);
	}

	public get ruleIndex(): number {
		return GroovyParser.RULE_sep;
	}

	public enterRule(listener: GroovyParserListener): void {
		if (listener.enterSep) {
			listener.enterSep(this);
		}
	}

	public exitRule(listener: GroovyParserListener): void {
		if (listener.exitSep) {
			listener.exitSep(this);
		}
	}

	// @Override
	public accept<Result>(visitor: GroovyParserVisitor<Result>): Result {
		if (visitor.visitSep) {
			return visitor.visitSep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
