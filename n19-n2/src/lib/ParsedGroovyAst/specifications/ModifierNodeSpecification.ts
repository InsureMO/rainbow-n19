import {TerminalNode} from 'antlr4';
import {ClassOrInterfaceModifierContext, GroovyParser, ModifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedAstDebugger} from '../ParsedAstDebugger';
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

	static read(ctx: ModifierContext, _debugger: ParsedAstDebugger): ModifierNodeSpecification {
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
					_debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof ClassOrInterfaceModifierContext) {
			spec._type = ModifierNodeType.CLASS_OR_INTERFACE_MODIFIER;
		} else {
			_debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
		return spec;
	}
}
