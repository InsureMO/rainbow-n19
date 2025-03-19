import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {ElementValuePairContext, ElementValuePairNameContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromElementValuePair = (ctx: ElementValuePairContext) => Optional<TerminalNode>;
type TerminalNodePairForElementValuePair = [TerminalNodeGetFromElementValuePair, SymbolIndex];

/**
 * could be child of element value pair.<br>
 * <br>
 * 1. find and put a "=" node after me.
 */
export class ElementValuePairNamePostProcessor extends PostNodeProcessorAdapter<ElementValuePairNameContext> {
	private static ELEMENT_VALUE_PAIR__ASSIGN: TerminalNodePairForElementValuePair = [(ctx: ElementValuePairContext) => ctx.ASSIGN(), GroovyParser.ASSIGN];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: ElementValuePairNamePostProcessor.ELEMENT_VALUE_PAIR__ASSIGN
		});
	}
}
