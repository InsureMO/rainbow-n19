import {TerminalNode} from 'antlr4';
import {GroovyParser, PathElementContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: PathElementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. command argument,<br>
 * 2. path expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "." node as my first child,<br>
 * 3. find and put a "NEW" node as next child after ".",<br>
 * 4. find and put a "*." node as my first child,<br>
 * 5. find and put a "?." node as my first child,<br>
 * 6. find and put a "??." node as my first child,<br>
 * 7. find and put a "@" node as next child after "*."/"?."/"??.",<br>
 * 8. find and put a ".&" node as my first child,<br>
 * 9. find and put a "::" node as my first child.
 */
export class PathElementPostProcessor extends PostNodeProcessorAdapter<PathElementContext> {
	private static DOT: TerminalNodePair = [(ctx) => ctx.DOT(), GroovyParser.DOT];
	private static SPREAD_DOT: TerminalNodePair = [(ctx) => ctx.SPREAD_DOT(), GroovyParser.SPREAD_DOT];
	private static SAFE_DOT: TerminalNodePair = [(ctx) => ctx.SAFE_DOT(), GroovyParser.SAFE_DOT];
	private static SAFE_CHAIN_DOT: TerminalNodePair = [(ctx) => ctx.SAFE_CHAIN_DOT(), GroovyParser.SAFE_CHAIN_DOT];
	private static METHOD_POINTER: TerminalNodePair = [(ctx) => ctx.METHOD_POINTER(), GroovyParser.METHOD_POINTER];
	private static METHOD_REFERENCE: TerminalNodePair = [(ctx) => ctx.METHOD_REFERENCE(), GroovyParser.METHOD_REFERENCE];
	private static TERMINALS_R1 = [
		PathElementPostProcessor.DOT,
		PathElementPostProcessor.SPREAD_DOT,
		PathElementPostProcessor.SAFE_DOT,
		PathElementPostProcessor.SAFE_CHAIN_DOT,
		PathElementPostProcessor.METHOD_POINTER,
		PathElementPostProcessor.METHOD_REFERENCE
	];
	private static NEW: TerminalNodePair = [(ctx) => ctx.NEW(), GroovyParser.NEW];
	private static AT: TerminalNodePair = [(ctx) => ctx.AT(), GroovyParser.AT];
	private static TERMINALS_R2 = [
		PathElementPostProcessor.NEW,
		PathElementPostProcessor.AT
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_pathElement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes = this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: PathElementPostProcessor.TERMINALS_R1,
			firstOnly: true
		});
		if (nodes.length === 1) {
			if (nodes[0].role === GroovyParser.DOT) {
				return [
					nodes[0],
					...this.collectTerminalNodes({
						decorated: node.decorated,
						terminals: PathElementPostProcessor.TERMINALS_R2,
						firstOnly: true
					})
				];
			}
		}
		return nodes;
	}
}