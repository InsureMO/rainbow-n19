import {TerminalNode} from 'antlr4';
import {GroovyParser, NamedPropertyArgsContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: NamedPropertyArgsContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of path element.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "?[" node as my first child,<br>
 * 3. find and put a "[" node as my first child, when "?[" node not exists,<br>
 * 4. find and put a ":" node as my child before last child,<br>
 * 5. find and put a "]" node as my last child.
 */
export class NamedPropertyArgsPostProcessor extends PostNodeProcessorAdapter<NamedPropertyArgsContext> {
	private static SAFE_INDEX: TerminalNodePair = [(ctx) => ctx.SAFE_INDEX(), GroovyParser.SAFE_INDEX];
	private static LBRACK: TerminalNodePair = [(ctx) => ctx.LBRACK(), GroovyParser.LBRACK];
	private static START_TERMINALS = [
		NamedPropertyArgsPostProcessor.SAFE_INDEX,
		NamedPropertyArgsPostProcessor.LBRACK
	];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static RBRACK: TerminalNodePair = [(ctx) => ctx.RBRACK(), GroovyParser.RBRACK];
	private static END_TERMINALS = [
		NamedPropertyArgsPostProcessor.COLON,
		NamedPropertyArgsPostProcessor.RBRACK
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedPropertyArgs, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: NamedPropertyArgsPostProcessor.START_TERMINALS,
			firstOnly: true
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: NamedPropertyArgsPostProcessor.END_TERMINALS,
			firstOnly: false
		});
	}
}