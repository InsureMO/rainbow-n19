import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, MapEntryContext, MapEntryListContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: MapEntryContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromMapEntryList = (ctx: MapEntryListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForMapEntryList = [TerminalNodeGetFromMapEntryList, SymbolIndex];

/**
 * could be child of map entry list.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "*" node as my first node,<br>
 * 3. find and put a ":" node as my second node, when "*" exists,<br>
 * 4. find and put a "," node after me.
 */
export class MapEntryPostProcessor extends PostNodeProcessorAdapter<MapEntryContext> {
	private static MUL: TerminalNodePair = [(ctx) => ctx.MUL(), GroovyParser.MUL];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static MAP_ENTRY_LIST__COMMA: TerminalNodePairForMapEntryList = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_mapEntry, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes = this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: MapEntryPostProcessor.MUL
		});
		if (nodes.length === 1) {
			const colonNode = this.collectTerminalNode({
				decorated: node.decorated,
				terminal: MapEntryPostProcessor.COLON
			});
			if (colonNode != null) {
				nodes.push(colonNode);
			}
		}
		return nodes;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeWithIndexToArray({
			decorated: node.decorated,
			siblings: (ctx: MapEntryListContext) => ctx.mapEntry_list(),
			indexOffset: 0,
			terminal: MapEntryPostProcessor.MAP_ENTRY_LIST__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}