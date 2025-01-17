import {TerminalNode} from 'antlr4';
import {GroovyParser, YieldStatementContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: YieldStatementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put an "YIELD" node as my first child.
 */
export class YieldStatementPostProcessor extends PostNodeProcessorAdapter<YieldStatementContext> {
	private static YIELD: TerminalNodePair = [(ctx) => ctx.YIELD(), GroovyParser.YIELD];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_yieldStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: YieldStatementPostProcessor.YIELD
		});
	}
}