import {TerminalNode} from 'antlr4';
import {GroovyParser, IdentifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedAstDebugger} from '../ParsedAstDebugger';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum IdentifierNodeType {
	IDENTIFIER = GroovyParser.Identifier,
	CAPITALIZED_IDENTIFIER = GroovyParser.CapitalizedIdentifier,
	AS = GroovyParser.AS,
	IN = GroovyParser.IN,
	PERMITS = GroovyParser.PERMITS,
	RECORD = GroovyParser.RECORD,
	SEALED = GroovyParser.SEALED,
	TRAIT = GroovyParser.TRAIT,
	VAR = GroovyParser.VAR,
	YIELD = GroovyParser.YIELD,
}

export enum IdentifierNodePurpose {
	VARIABLE_DECLARATOR = GroovyParser.RULE_variableDeclarator,
	FORMAL_PARAMETER = GroovyParser.RULE_formalParameter,
	STANDARD_LAMBDA_PARAMETERS = GroovyParser.RULE_standardLambdaParameters,
	TYPE_NAME_PAIR = GroovyParser.RULE_typeNamePair,
	VARIABLE_NAMES = GroovyParser.RULE_variableNames,
	ENHANCED_FOR_CONTROL = GroovyParser.RULE_enhancedForControl,
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration,
}

export class IdentifierNodeSpecification implements ParsedNodeSpecification {
	private _type: IdentifierNodeType;
	private _purpose: IdentifierNodePurpose;

	get type(): IdentifierNodeType {
		return this._type;
	}

	setType(type: IdentifierNodeType) {
		this._type = type;
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	get purpose(): IdentifierNodePurpose {
		return this._purpose;
	}

	setPurpose(purpose: IdentifierNodePurpose) {
		this._purpose = purpose;
	}

	get purposeText(): string {
		return GroovyParser.ruleNames[this._purpose];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText],
			['purpose', this.purpose],
			['purpose.text', this.purposeText]
		];
	}

	clone(): ParsedNodeSpecification {
		const spec = new IdentifierNodeSpecification();
		spec._type = this._type;
		spec._purpose = this._purpose;
		return spec;
	}
}
