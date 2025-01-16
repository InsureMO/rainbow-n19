import {TerminalNode} from 'antlr4';
import {FormalParametersContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: FormalParametersContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. method declaration,<br>
 * 3. lambda parameters,<br>
 * 4. standard lambda parameters.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. put a "(" node as my first child.
 */
export class FormalParametersPostProcessor extends PostNodeProcessorAdapter<FormalParametersContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_formalParameters, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: FormalParametersPostProcessor.LPAREN
		});
	}
}