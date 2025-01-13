import {GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export enum LiteralNodeType {
	BOOLEAN = GroovyParser.BooleanLiteral,
	INTEGER = GroovyParser.IntegerLiteral,
	FLOAT = GroovyParser.FloatingPointLiteral,
	NULL = GroovyParser.NullLiteral,
	STRING = GroovyParser.StringLiteral
}

export class LiteralNodeSpecification implements ParsedNodeSpecification {
	private _type: LiteralNodeType;

	get type(): LiteralNodeType {
		return this._type;
	}

	setType(type: LiteralNodeType): void {
		this._type = type;
	}

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText]
		];
	}

	clone(): ParsedNodeSpecification {
		const spec = new LiteralNodeSpecification();
		spec._type = this._type;
		return spec;
	}
}
