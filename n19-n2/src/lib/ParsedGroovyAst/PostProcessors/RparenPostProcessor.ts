import {GroovyParser, RparenContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class RparenPostProcessor extends PostNodeProcessorAdapter<RparenContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: RparenContext): boolean {
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as RparenContext;
		const terminalNode = ctx.RPAREN();
		if (terminalNode != null) {
			decorated.setRole(GroovyParser.RPAREN, DecoratedNode.SYMBOL_ROLE);
			DecoratedNode.copyPositionAndTextFromToken(decorated, terminalNode.symbol);
		}

		return [];
	}
}