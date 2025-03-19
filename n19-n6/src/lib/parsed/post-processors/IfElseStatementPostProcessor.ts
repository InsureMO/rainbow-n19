import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, IfElseStatementContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: IfElseStatementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of conditional statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put an "IF" node as my first child.
 */
export class IfElseStatementPostProcessor extends PostNodeProcessorAdapter<IfElseStatementContext> {
	private static IF: TerminalNodePair = [(ctx) => ctx.IF(), GroovyParser.IF];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_ifElseStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: IfElseStatementPostProcessor.IF
		});
	}
}