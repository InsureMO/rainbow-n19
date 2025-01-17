import {TerminalNode} from 'antlr4';
import {CastOperandExpressionContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: CastOperandExpressionContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. expression,<br>
 * 2. cast operand expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "~" as my first child,<br>
 * 3. find and put a "!" as my first child,<br>
 * 4. find and put a "++" as my first child,<br>
 * 5. find and put a "--" as my first child,<br>
 * 6. find and put a "+" as my first child,<br>
 * 7. find and put a "-" as my first child,<br>
 */
export class CastOperandExpressionPostProcessor extends PostNodeProcessorAdapter<CastOperandExpressionContext> {
	private static BITNOT: TerminalNodePair = [(ctx) => ctx.BITNOT(), GroovyParser.BITNOT];
	private static NOT: TerminalNodePair = [(ctx) => ctx.NOT(), GroovyParser.NOT];
	private static INC: TerminalNodePair = [(ctx) => ctx.INC(), GroovyParser.INC];
	private static DEC: TerminalNodePair = [(ctx) => ctx.DEC(), GroovyParser.DEC];
	private static ADD: TerminalNodePair = [(ctx) => ctx.ADD(), GroovyParser.ADD];
	private static SUB: TerminalNodePair = [(ctx) => ctx.SUB(), GroovyParser.SUB];
	private static TERMINALS = [
		CastOperandExpressionPostProcessor.BITNOT,
		CastOperandExpressionPostProcessor.NOT,
		CastOperandExpressionPostProcessor.INC,
		CastOperandExpressionPostProcessor.DEC,
		CastOperandExpressionPostProcessor.ADD,
		CastOperandExpressionPostProcessor.SUB
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_castOperandExpression, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: CastOperandExpressionPostProcessor.TERMINALS,
			firstOnly: true
		});
	}
}