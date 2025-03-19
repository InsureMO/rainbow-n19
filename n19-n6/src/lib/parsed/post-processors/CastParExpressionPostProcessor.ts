import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {CastParExpressionContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: CastParExpressionContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. expression,<br>
 * 2. cast operand expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "(" node as my first child.
 */
export class CastParExpressionPostProcessor extends PostNodeProcessorAdapter<CastParExpressionContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_castParExpression, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: CastParExpressionPostProcessor.LPAREN
		});
	}
}