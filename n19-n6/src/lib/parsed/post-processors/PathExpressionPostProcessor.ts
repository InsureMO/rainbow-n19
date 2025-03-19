import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, PathExpressionContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: PathExpressionContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of postfix expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "STATIC" node as my first child.
 */
export class PathExpressionPostProcessor extends PostNodeProcessorAdapter<PathExpressionContext> {
	private static STATIC: TerminalNodePair = [(ctx) => ctx.STATIC(), GroovyParser.STATIC];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_pathExpression, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: PathExpressionPostProcessor.STATIC
		});
	}
}