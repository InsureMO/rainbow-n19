import {TerminalNode} from 'antlr4';
import {GroovyParser, GstringContext, GstringValueContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromGstring = (ctx: GstringContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForGstring = [TerminalNodeGetFromGstring, SymbolIndex];

/**
 * could be child of gstring.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "$" node after me.
 */
export class GstringValuePostProcessor extends PostNodeProcessorAdapter<GstringValueContext> {
	private static GStringPart: TerminalNodePairForGstring = [(ctx, index) => ctx.GStringPart(index), GroovyParser.GStringPart];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_gstringValue, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeWithIndexToArray({
			decorated: node.decorated,
			siblings: (ctx: GstringContext) => ctx.gstringValue_list(),
			indexOffset: 0,
			terminal: GstringValuePostProcessor.GStringPart,
			parentDecorated: node.parent.decorated
		});
	}
}