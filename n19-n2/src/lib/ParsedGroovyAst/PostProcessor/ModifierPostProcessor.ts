import {TerminalNode} from 'antlr4';
import {ClassOrInterfaceModifierContext, GroovyParser, ModifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {ModifierNodeSpecification, ModifierNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ModifierPostProcessor extends PostNodeProcessorAdapter<ModifierContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: ModifierContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needReadSpecificationOnToParsed(_ctx: ModifierContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: ModifierContext): void {
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
					spec.setType(child.symbol.type);
					break;
				default:
					node.debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
			}
		} else if (child instanceof ClassOrInterfaceModifierContext) {
			spec.setType(ModifierNodeType.CLASS_OR_INTERFACE_MODIFIER);
		} else {
			node.debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
		// TODO set purpose of this modifier
		// spec.setPurpose(ModifierNodePurpose.VARIABLE_DECLARATOR_ID)
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
