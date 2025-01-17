import {TerminalNode} from 'antlr4';
import {GroovyParser, PostfixExpressionContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: PostfixExpressionContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following;<br>
 * 1. expression,<br>
 * 2. cast operand expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "++" node as my last child,<br>
 * 3. find and put a "--" node as my last child, when "++" not exists.
 */
export class PostfixExpressionPostProcessor extends PostNodeProcessorAdapter<PostfixExpressionContext> {
	private static INC: TerminalNodePair = [(ctx) => ctx.INC(), GroovyParser.INC];
	private static DEC: TerminalNodePair = [(ctx) => ctx.DEC(), GroovyParser.DEC];
	private static TERMINALS = [
		PostfixExpressionPostProcessor.INC,
		PostfixExpressionPostProcessor.DEC
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_postfixExpression, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: PostfixExpressionPostProcessor.TERMINALS,
			firstOnly: true
		});
	}
}