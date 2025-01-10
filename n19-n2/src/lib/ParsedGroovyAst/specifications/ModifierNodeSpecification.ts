import {TerminalNode} from 'antlr4';
import {IllegalArgumentException} from '../../JavaExceptions';
import {ClassOrInterfaceModifierContext, GroovyParser, ModifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNodeSpecification} from '../NodeSpecification';

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

	get text(): string {
		switch (this._type) {
			case ModifierNodeType.CLASS_OR_INTERFACE_MODIFIER:
				return '';
			default:
				return GroovyParser.symbolicNames[this._type];
		}
	}

	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['text', this.text]
		];
	}

	static read(ctx: ModifierContext): ModifierNodeSpecification {
		const spec = new ModifierNodeSpecification();
		// there is only one child in modifier context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.NATIVE:
				case GroovyParser.SYNCHRONIZED:
				case GroovyParser.TRANSIENT:
				case GroovyParser.VOLATILE:
				case GroovyParser.DEF:
				case GroovyParser.VAR:
					spec._type = child.symbol.type;
					break;
				default:
					throw new IllegalArgumentException(`The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof ClassOrInterfaceModifierContext) {
			spec._type = ModifierNodeType.CLASS_OR_INTERFACE_MODIFIER;
		} else {
			throw new IllegalArgumentException(`The only child[${child.constructor.name}] is not supported yet.`);
		}
		return spec;
	}
}
