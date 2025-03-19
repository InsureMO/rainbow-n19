import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {ContinueStatementContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ContinueStatementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put an "CONTINUE" node as my first child.
 */
export class ContinueStatementPostProcessor extends PostNodeProcessorAdapter<ContinueStatementContext> {
	private static CONTINUE: TerminalNodePair = [(ctx) => ctx.CONTINUE(), GroovyParser.CONTINUE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_continueStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ContinueStatementPostProcessor.CONTINUE
		});
	}
}