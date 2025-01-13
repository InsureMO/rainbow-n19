import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum ModifierNodeType {
	NATIVE = GroovyParser.NATIVE,
	SYNCHRONIZED = GroovyParser.SYNCHRONIZED,
	TRANSIENT = GroovyParser.TRANSIENT,
	VOLATILE = GroovyParser.VOLATILE,
	DEF = GroovyParser.DEF,
	VAR = GroovyParser.VAR,
	CLASS_OR_INTERFACE_MODIFIER = -1
}

export class ModifierNodeSpecification implements ParsedNodeSpecification {
	private _type: ModifierNodeType;

	get type(): ModifierNodeType {
		return this._type;
	}

	setType(type: ModifierNodeType) {
		this._type = type;
	}

	get typeText(): string {
		switch (this._type) {
			case ModifierNodeType.CLASS_OR_INTERFACE_MODIFIER:
				return '';
			default:
				return GroovyParser.symbolicNames[this._type];
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText]
		];
	}

	clone(): ParsedNodeSpecification {
		const spec = new ModifierNodeSpecification();
		spec._type = this._type;
		return spec;
	}
}
