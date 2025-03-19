import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {DimContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: DimContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of creator.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "]" node as my last child.
 */
export class DimPostProcessor extends PostNodeProcessorAdapter<DimContext> {
	private static RBRACK: TerminalNodePair = [(ctx) => ctx.RBRACK(), GroovyParser.RBRACK];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_dim, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: DimPostProcessor.RBRACK
		});
	}
}