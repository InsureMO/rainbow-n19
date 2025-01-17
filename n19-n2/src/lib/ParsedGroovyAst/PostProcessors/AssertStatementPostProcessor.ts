import {TerminalNode} from 'antlr4';
import {AssertStatementContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: AssertStatementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put an "ASSERT" node as my first child.
 */
export class AssertStatementPostProcessor extends PostNodeProcessorAdapter<AssertStatementContext> {
	private static ASSERT: TerminalNodePair = [(ctx) => ctx.ASSERT(), GroovyParser.ASSERT];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_assertStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: AssertStatementPostProcessor.ASSERT
		});
	}
}