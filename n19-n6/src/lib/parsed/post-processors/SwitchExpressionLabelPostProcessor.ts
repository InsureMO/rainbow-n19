import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, SwitchExpressionLabelContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: SwitchExpressionLabelContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of switch block statement expression group.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "CASE" node as my first child,<br>
 * 3. find and put a "DEFAULT" node as my first child, when "CASE" node not exists,<br>
 * 4. find and put a "->" node as my last first child,<br>
 * 5. find and put a ":" node as my last first child, when "->" node not exists.
 */
export class SwitchExpressionLabelPostProcessor extends PostNodeProcessorAdapter<SwitchExpressionLabelContext> {
	private static CASE: TerminalNodePair = [(ctx) => ctx.CASE(), GroovyParser.CASE];
	private static DEFAULT: TerminalNodePair = [(ctx) => ctx.DEFAULT(), GroovyParser.DEFAULT];
	private static ENTERING_TERMINALS = [
		SwitchExpressionLabelPostProcessor.DEFAULT,
		SwitchExpressionLabelPostProcessor.CASE
	];
	private static ARROW: TerminalNodePair = [(ctx) => ctx.ARROW(), GroovyParser.ARROW];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static EXITING_TERMINALS = [
		SwitchExpressionLabelPostProcessor.ARROW,
		SwitchExpressionLabelPostProcessor.COLON
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_switchExpressionLabel, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: SwitchExpressionLabelPostProcessor.ENTERING_TERMINALS,
			firstOnly: true
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: SwitchExpressionLabelPostProcessor.EXITING_TERMINALS,
			firstOnly: true
		});
	}
}