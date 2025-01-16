import {TerminalNode} from 'antlr4';
import {GroovyParser, GstringContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: GstringContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. dynamic member name,<br>
 * 2. primary,<br>
 * 3. named property arg primary,<br>
 * 4. named arg primary,<br>
 * 5. command primary.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a '"' node as my first child,<br>
 * 3. find and put a '"' node as my last child.
 */
export class GstringPostProcessor extends PostNodeProcessorAdapter<GstringContext> {
	private static GStringBegin: TerminalNodePair = [(ctx) => ctx.GStringBegin(), GroovyParser.GStringBegin];
	private static GStringEnd: TerminalNodePair = [(ctx) => ctx.GStringEnd(), GroovyParser.GStringEnd];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_gstring, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: GstringPostProcessor.GStringBegin
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: GstringPostProcessor.GStringEnd
		});
	}
}