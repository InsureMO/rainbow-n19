import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, TypeArgumentsOrDiamondContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: TypeArgumentsOrDiamondContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of created name.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "<" node as my first child,<br>
 * 3. find and put a ">" node as my last child.
 */
export class TypeArgumentsOrDiamondPostProcessor extends PostNodeProcessorAdapter<TypeArgumentsOrDiamondContext> {
	private static LT: TerminalNodePair = [(ctx) => ctx.LT(), GroovyParser.LT];
	private static GT: TerminalNodePair = [(ctx) => ctx.GT(), GroovyParser.GT];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeArgumentsOrDiamond, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: TypeArgumentsOrDiamondPostProcessor.LT
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: TypeArgumentsOrDiamondPostProcessor.GT
		});
	}
}