import {TerminalNode} from 'antlr4';
import {IllegalArgumentException} from '../../JavaExceptions';
import {GroovyParser, LiteralContext, StringLiteralContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';

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

	get typeText(): string {
		return GroovyParser.symbolicNames[this._type];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText],
		];
	}

	static read(ctx: LiteralContext): LiteralNodeSpecification {
		const spec = new LiteralNodeSpecification();
		// there is only one child in literal context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.BooleanLiteral:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.NullLiteral:
					spec._type = child.symbol.type;
					break;
				default:
					throw new IllegalArgumentException(`The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof StringLiteralContext) {
			spec._type = LiteralNodeType.STRING;
		} else {
			throw new IllegalArgumentException(`The only child[${child.constructor.name}] is not supported yet.`);
		}
		return spec;
	}
}
