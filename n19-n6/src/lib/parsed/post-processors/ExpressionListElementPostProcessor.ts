import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {ExpressionListContext, ExpressionListElementContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ExpressionListElementContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromExpressionList = (ctx: ExpressionListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForExpressionList = [TerminalNodeGetFromExpressionList, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. expression list,<br>
 * 2. first argument list element,<br>
 * 3. argument list element,<br>
 * 4. enhanced argument list element.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "*" node as my first child,<br>
 * 3. find and put a "," node after me, when parent is expression list.
 */
export class ExpressionListElementPostProcessor extends PostNodeProcessorAdapter<ExpressionListElementContext> {
	private static MUL: TerminalNodePair = [(ctx) => ctx.MUL(), GroovyParser.MUL];
	private static EXPRESSION_LIST__COMMA: TerminalNodePairForExpressionList = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_expressionListElement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ExpressionListElementPostProcessor.MUL
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ExpressionListElementContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ExpressionListContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated: node.decorated,
				siblings: (ctx: ExpressionListContext) => ctx.expressionListElement_list(),
				indexOffset: 0,
				terminal: ExpressionListElementPostProcessor.EXPRESSION_LIST__COMMA,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}