import {TerminalNode} from 'antlr4';
import {GroovyParser, VariableNamesContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: VariableNamesContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "(" node as my first child.
 */
export class VariableNamesPostProcessor extends PostNodeProcessorAdapter<VariableNamesContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];

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
}