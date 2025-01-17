import {TerminalNode} from 'antlr4';
import {GroovyParser, MultipleAssignmentExprAltContext, VariableNamesContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: VariableNamesContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromExpression = (ctx: MultipleAssignmentExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForExpression = [TerminalNodeGetFromExpression, SymbolIndex];

/**
 * could be child of expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "(" node as my first child,<br>
 * 3. find and put a "=" node after me, when parent is expression (multiple assignment expr alt)
 */
export class VariableNamesPostProcessor extends PostNodeProcessorAdapter<VariableNamesContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];
	private static EXPRESSION__ASSIGN: TerminalNodePairForExpression = [(ctx) => ctx.ASSIGN(), GroovyParser.ASSIGN];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_variableNames, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: VariableNamesPostProcessor.LPAREN
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: VariableNamesPostProcessor.EXPRESSION__ASSIGN
		});
	}
}