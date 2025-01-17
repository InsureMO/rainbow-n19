import {TerminalNode} from 'antlr4';
import {GroovyParser, IndexPropertyArgsContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: IndexPropertyArgsContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of path element.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "?[" node as my first child,<br>
 * 3. find and put a "[" node as my first child, when "?[" node not exists,<br>
 * 4. find and put a "]" node as my last child.
 */
export class IndexPropertyArgsPostProcessor extends PostNodeProcessorAdapter<IndexPropertyArgsContext> {
	private static SAFE_INDEX: TerminalNodePair = [(ctx) => ctx.SAFE_INDEX(), GroovyParser.SAFE_INDEX];
	private static LBRACK: TerminalNodePair = [(ctx) => ctx.LBRACK(), GroovyParser.LBRACK];
	private static TERMINALS = [
		IndexPropertyArgsPostProcessor.SAFE_INDEX,
		IndexPropertyArgsPostProcessor.LBRACK
	];
	private static RBRACK: TerminalNodePair = [(ctx) => ctx.RBRACK(), GroovyParser.RBRACK];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		return super.shouldCountIntoHierarchy(node);
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: IndexPropertyArgsPostProcessor.TERMINALS,
			firstOnly: true
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: IndexPropertyArgsPostProcessor.RBRACK
		});
	}
}