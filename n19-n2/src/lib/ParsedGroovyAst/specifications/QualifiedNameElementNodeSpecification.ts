import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum QualifiedNameElementNodeType {
	IDENTIFIER = GroovyParser.Identifier,
	DEF = GroovyParser.DEF,
	IN = GroovyParser.IN,
	AS = GroovyParser.AS,
	TRAIT = GroovyParser.TRAIT,
}

export enum QualifiedNameElementNodePurpose {
	PACKAGE_DECLARATION = GroovyParser.RULE_packageDeclaration,
	IMPORT_DECLARATION = GroovyParser.RULE_importDeclaration
}

export class QualifiedNameElementNodeSpecification implements ParsedNodeSpecification {
	private _type: QualifiedNameElementNodeType;
	private _purpose: QualifiedNameElementNodePurpose;

	get type(): QualifiedNameElementNodeType {
		return this._type;
	}

	setType(type: QualifiedNameElementNodeType): void {
		this._type = type;
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	get purpose(): QualifiedNameElementNodePurpose {
		return this._purpose;
	}

	setPurpose(purpose: QualifiedNameElementNodePurpose): void {
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
		const spec = new QualifiedNameElementNodeSpecification();
		spec._type = this._type;
		spec._purpose = this._purpose;
		return spec;
	}
}
