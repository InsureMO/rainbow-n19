import {TerminalNode} from 'antlr4';
import {GroovyParser, LiteralContext, StringLiteralContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {ParsedNode} from '../ParsedNode';
import {LiteralNodeSpecification, LiteralNodeType} from '../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class LiteralPostProcessor extends PostNodeProcessorAdapter<LiteralContext> {
	needCopyTextOnToParsed(_ctx: LiteralContext): boolean {
		return true;
	}

	needReadSpecificationOnToParsed(_ctx: LiteralContext): boolean {
		return true;
	}

	readSpecificationOnToParsed(node: ParsedNode, ctx: LiteralContext): void {
		const spec = new LiteralNodeSpecification();
		// there is only one child in literal context
		const child = ctx.getChild(0);
		if (child instanceof TerminalNode) {
			switch (child.symbol.type) {
				case GroovyParser.BooleanLiteral:
				case GroovyParser.IntegerLiteral:
				case GroovyParser.FloatingPointLiteral:
				case GroovyParser.NullLiteral:
					spec.setType(child.symbol.type);
					break;
				default:
					node.debugger.addMissedLogics(() => `The only terminal child symbol type[${child.symbol.type}] is not supported yet.`);
					break;
			}
		} else if (child instanceof StringLiteralContext) {
			spec.setType(LiteralNodeType.STRING);
		} else {
			node.debugger.addMissedLogics(() => `The only child[${child.constructor.name}] is not supported yet.`);
		}
		node.setSpecification(spec);
	}

	shouldCollectToAtomicNodeOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
