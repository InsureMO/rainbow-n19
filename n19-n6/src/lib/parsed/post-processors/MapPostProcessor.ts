import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, MapContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: MapContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. primary,<br>
 * 2. named property arg primary.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "[" node as my first child,<br>
 * 3. find and put a "," node as my child before last child,<br>
 * 3. find and put a ":" node as my child before last child,<br>
 * 5. find and put a "]" node as my last child.
 */
export class MapPostProcessor extends PostNodeProcessorAdapter<MapContext> {
	private static LBRACK: TerminalNodePair = [(ctx) => ctx.LBRACK(), GroovyParser.LBRACK];
	private static COMMA: TerminalNodePair = [(ctx) => ctx.COMMA(), GroovyParser.COMMA];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static RBRACK: TerminalNodePair = [(ctx) => ctx.RBRACK(), GroovyParser.RBRACK];
	private static BEFORE_END_TERMINALS = [
		MapPostProcessor.COMMA,
		MapPostProcessor.COLON
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_map, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: MapPostProcessor.LBRACK
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes = this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: MapPostProcessor.BEFORE_END_TERMINALS,
			firstOnly: true
		});
		const rbrackNode = this.collectTerminalNode({
			decorated: node.decorated,
			terminal: MapPostProcessor.RBRACK
		});
		if (rbrackNode != null) {
			nodes.push(rbrackNode);
		}
		return nodes;
	}
}