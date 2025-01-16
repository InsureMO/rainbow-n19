import {TerminalNode} from 'antlr4';
import {ElementValuePairContext, ElementValuePairNameContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromElementValuePair = (ctx: ElementValuePairContext) => Optional<TerminalNode>;
type TerminalNodePairForElementValuePair = [TerminalNodeGetFromElementValuePair, SymbolIndex];

/**
 * could be child of element value pair.<br>
 * <br>
 * 1. find and put a "=" node after itself.
 */
export class ElementValuePairNamePostProcessor extends PostNodeProcessorAdapter<ElementValuePairNameContext> {
	private static ASSIGN: TerminalNodePairForElementValuePair = [(ctx: ElementValuePairContext) => ctx.ASSIGN(), GroovyParser.ASSIGN];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: ElementValuePairNamePostProcessor.ASSIGN
		});
	}
}
