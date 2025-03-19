import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {ArgumentListContext, ArgumentListElementContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ArgumentListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of argument list.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class ArgumentListElementPostProcessor extends PostNodeProcessorAdapter<ArgumentListElementContext> {
	private static ARGUMENT_LIST__COMMA: TerminalNodePair = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_argumentListElement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeWithIndexToArray({
			decorated: node.decorated,
			siblings: (ctx: ArgumentListContext) => ctx.argumentListElement_list(),
			indexOffset: 1,
			terminal: ArgumentListElementPostProcessor.ARGUMENT_LIST__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}