import {TerminalNode} from 'antlr4';
import {
	ExpressionInParContext,
	GroovyParser,
	SwitchExpressionContext,
	SwitchStatementContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ExpressionInParContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromSwitchStatement = (ctx: SwitchStatementContext) => Optional<TerminalNode>;
type TerminalNodePairForSwitchStatement = [TerminalNodeGetFromSwitchStatement, SymbolIndex];
type TerminalNodeGetFromSwitchExpression = (ctx: SwitchExpressionContext) => Optional<TerminalNode>;
type TerminalNodePairForSwitchExpression = [TerminalNodeGetFromSwitchExpression, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. if else statement,<br>
 * 2. switch statement,<br>
 * 3. loop statement,<br>
 * 4. statement,<br>
 * 5. par expression,<br>
 * 6. switch expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "(" node as my first child,<br>
 * 3. find and put a "{" node after me, when parent is switch statement,<br>
 * 4. find and put a "{" node after me, when parent is switch expression.
 */
export class ExpressionInParPostProcessor extends PostNodeProcessorAdapter<ExpressionInParContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];
	private static SWITCH_STATEMENT__LBRACE: TerminalNodePairForSwitchStatement = [(ctx) => ctx.LBRACE(), GroovyParser.LBRACE];
	private static SWITCH_EXPRESSION__LBRACE: TerminalNodePairForSwitchExpression = [(ctx) => ctx.LBRACE(), GroovyParser.LBRACE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_expressionInPar, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ExpressionInParPostProcessor.LPAREN
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ExpressionInParContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof SwitchStatementContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionInParPostProcessor.SWITCH_STATEMENT__LBRACE
			});
		} else if (parentCtx instanceof SwitchExpressionContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionInParPostProcessor.SWITCH_EXPRESSION__LBRACE
			});
		}
		return [];
	}
}