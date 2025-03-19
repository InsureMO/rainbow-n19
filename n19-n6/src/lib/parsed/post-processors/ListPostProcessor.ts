import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, ListContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ListContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. primary,<br>
 * 2. named property arg primary.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "[" node as my first child,<br>
 * 3. find and put a "," node as my child before last child,<br>
 * 4. find and put a "]" node as my last child.
 */
export class ListPostProcessor extends PostNodeProcessorAdapter<ListContext> {
	private static LBRACK: TerminalNodePair = [(ctx) => ctx.LBRACK(), GroovyParser.LBRACK];
	private static COMMA: TerminalNodePair = [(ctx) => ctx.COMMA(), GroovyParser.COMMA];
	private static RBRACK: TerminalNodePair = [(ctx) => ctx.RBRACK(), GroovyParser.RBRACK];
	private static END_TERMINALS = [
		ListPostProcessor.COMMA,
		ListPostProcessor.RBRACK
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_list, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ListPostProcessor.LBRACK
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: ListPostProcessor.END_TERMINALS,
			firstOnly: false
		});
	}
}