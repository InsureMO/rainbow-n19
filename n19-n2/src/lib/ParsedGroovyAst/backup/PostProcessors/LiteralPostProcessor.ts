import {TerminalNode} from 'antlr4';
import {GroovyParser, LiteralContext, StringLiteralContext} from '../../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../../DecorableParsedNode';
import {ParsedNode} from '../../ParsedNode';
import {LiteralNodePurpose, LiteralNodeSpecification, LiteralNodeType} from '../../Specifications';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class LiteralPostProcessor extends PostNodeProcessorAdapter<LiteralContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: LiteralContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		spec.setPurpose(LiteralNodePurpose.LITERAL);
		node.setSpecification(spec);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
