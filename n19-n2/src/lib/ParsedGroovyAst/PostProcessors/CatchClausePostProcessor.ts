import {TerminalNode} from 'antlr4';
import {CatchClauseContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: CatchClauseContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of try catch statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "CATCH" node as my first child,<br>
 * 3. find and put a "(" node as the next child.
 */
export class CatchClausePostProcessor extends PostNodeProcessorAdapter<CatchClauseContext> {
	private static CATCH: TerminalNodePair = [(ctx) => ctx.CATCH(), GroovyParser.CATCH];
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];
	private static TERMINALS = [
		CatchClausePostProcessor.CATCH,
		CatchClausePostProcessor.LPAREN
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_catchClause, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: CatchClausePostProcessor.TERMINALS,
			firstOnly: false
		});
	}
}