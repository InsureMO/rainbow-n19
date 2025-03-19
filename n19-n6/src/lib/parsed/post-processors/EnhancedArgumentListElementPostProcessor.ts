import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {EnhancedArgumentListElementContext, EnhancedArgumentListInParContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: EnhancedArgumentListInParContext, index: number) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of enhanced argument list in par.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class EnhancedArgumentListElementPostProcessor extends PostNodeProcessorAdapter<EnhancedArgumentListElementContext> {
	private static ENHANCED_ARGUMENT_LIST_IN_PAR__COMMA: TerminalNodePair = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_argumentListElement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeWithIndexToArray({
			decorated: node.decorated,
			siblings: (ctx: EnhancedArgumentListInParContext) => ctx.enhancedArgumentListElement_list(),
			indexOffset: 0,
			terminal: EnhancedArgumentListElementPostProcessor.ENHANCED_ARGUMENT_LIST_IN_PAR__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}