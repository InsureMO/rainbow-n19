import {TerminalNode} from 'antlr4';
import {GroovyParser, NamedArgContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: NamedArgContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of first argument list element.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "*" node as my first node,<br>
 * 3. find and put a ":" node as my second node, when "*" exists.
 */
export class NamedArgPostProcessor extends PostNodeProcessorAdapter<NamedArgContext> {
	private static MUL: TerminalNodePair = [(ctx) => ctx.MUL(), GroovyParser.MUL];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedArg, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes = this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: NamedArgPostProcessor.MUL
		});
		if (nodes.length === 1) {
			const colonNode = this.collectTerminalNode({
				decorated: node.decorated,
				terminal: NamedArgPostProcessor.COLON
			});
			if (colonNode != null) {
				nodes.push(colonNode);
			}
		}
		return nodes;
	}
}