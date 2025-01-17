import {TerminalNode} from 'antlr4';
import {BreakStatementContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: BreakStatementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put an "BREAK" node as my first child.
 */
export class BreakStatementPostProcessor extends PostNodeProcessorAdapter<BreakStatementContext> {
	private static BREAK: TerminalNodePair = [(ctx) => ctx.BREAK(), GroovyParser.BREAK];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_breakStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: BreakStatementPostProcessor.BREAK
		});
	}
}