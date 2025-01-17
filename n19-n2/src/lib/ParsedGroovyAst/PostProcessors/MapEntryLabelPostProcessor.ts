import {TerminalNode} from 'antlr4';
import {GroovyParser, MapEntryContext, MapEntryLabelContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromMapEntry = (ctx: MapEntryContext) => Optional<TerminalNode>;
type TerminalNodePairForMapEntry = [TerminalNodeGetFromMapEntry, SymbolIndex];

/**
 * could be child of map entry.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a ":" node after me.
 */
export class MapEntryLabelPostProcessor extends PostNodeProcessorAdapter<MapEntryLabelContext> {
	private static COLON: TerminalNodePairForMapEntry = [(ctx) => ctx.COLON(), GroovyParser.COLON];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_mapEntryLabel, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: MapEntryLabelPostProcessor.COLON
		});
	}
}