import {TerminalNode} from 'antlr4';
import {GroovyParser, SwitchStatementContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: SwitchStatementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of conditional statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put an "SWITCH" node as my first child,<br>
 * 3. find and put a "}" node as my last child.
 */
export class SwitchStatementPostProcessor extends PostNodeProcessorAdapter<SwitchStatementContext> {
	private static SWITCH: TerminalNodePair = [(ctx) => ctx.SWITCH(), GroovyParser.SWITCH];
	private static RBRACE: TerminalNodePair = [(ctx) => ctx.RBRACE(), GroovyParser.RBRACE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_switchStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: SwitchStatementPostProcessor.SWITCH
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: SwitchStatementPostProcessor.RBRACE
		});
	}
}