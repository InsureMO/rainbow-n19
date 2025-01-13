import {TerminalNode} from 'antlr4';
import {
	ClassOrInterfaceModifierContext,
	GroovyParser,
	GroovyParserRuleContext
} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {ModifierNodeSpecification, ModifierNodeType} from '../specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ModifierPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}

	needCopyTextOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	needReadSpecificationOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: GroovyParserRuleContext): void {
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
		node.setSpecification(spec);
	}

	shouldCollectToAtomicNodeOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
