import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, SwitchExpressionContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: SwitchExpressionContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "SWITCH" node as my first child,<br>
 * 3. find and put a "}" node as my last child.
 */
export class SwitchExpressionPostProcessor extends PostNodeProcessorAdapter<SwitchExpressionContext> {
	private static SWITCH: TerminalNodePair = [(ctx) => ctx.SWITCH(), GroovyParser.SWITCH];
	private static RBRACE: TerminalNodePair = [(ctx) => ctx.RBRACE(), GroovyParser.RBRACE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_switchExpression, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: SwitchExpressionPostProcessor.SWITCH
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: SwitchExpressionPostProcessor.RBRACE
		});
	}
}