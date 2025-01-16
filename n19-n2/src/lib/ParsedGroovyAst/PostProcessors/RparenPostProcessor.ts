import {GroovyParser, RparenContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:
 * 1. formal parameters,<br>
 * 2. annotation,<br>
 * 3. type name pairs,<br>
 * 4. variable names,<br>
 * 5. loop statement,<br>
 * 6. catch clause,<br>
 * 7. resources,<br>
 * 8. cast par expression,<br>
 * 9. expression in par,<br>
 * 10. arguments.<br>
 * doing:<br>
 * 1. put me as a node.
 */
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
			return [decorated];
		}

		return [];
	}
}