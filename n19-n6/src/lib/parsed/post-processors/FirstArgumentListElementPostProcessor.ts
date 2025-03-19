import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {ArgumentListContext, FirstArgumentListElementContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ArgumentListContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of argument list.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class FirstArgumentListElementPostProcessor extends PostNodeProcessorAdapter<FirstArgumentListElementContext> {
	private static ARGUMENT_LIST__COMMA: TerminalNodePair = [(ctx) => ctx.COMMA(0), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_firstArgumentListElement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: FirstArgumentListElementPostProcessor.ARGUMENT_LIST__COMMA
		});
	}
}