import {TerminalNode} from 'antlr4';
import {ElementValuePairContext, ElementValuePairsContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromElementValuePairs = (ctx: ElementValuePairsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForElementValuePairs = [TerminalNodeGetFromElementValuePairs, SymbolIndex];

/**
 * could be child of element value pairs.<br>
 * doing:<br>
 * 1. put a "," node before itself, when itself is not the first child of parent,<br>
 * 2. put me as a container node,<br>
 */
export class ElementValuePairPostProcessor extends PostNodeProcessorAdapter<ElementValuePairContext> {
	private static COMMA: TerminalNodePairForElementValuePairs = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		const decorated = node.decorated;
		decorated.setRole(GroovyParser.RULE_elementValuePair, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeWithIndexToArray({
			decorated,
			siblings: (ctx: ElementValuePairsContext) => ctx.elementValuePair_list(),
			indexOffset: 0,
			terminal: ElementValuePairPostProcessor.COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}
