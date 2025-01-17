import {TerminalNode} from 'antlr4';
import {ClosureContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClosureContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. gstring value,<br>
 * 2. closure or lambada expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "{" node as my first child of me,<br>
 * 3. find and put a "->" node as next child of me, when formal parameter list not exists,<br>
 * 4. find and put a "}" node as my last child of me.
 */
export class ClosurePostProcessor extends PostNodeProcessorAdapter<ClosureContext> {
	private static LBRACE: TerminalNodePair = [(ctx) => ctx.LBRACE(), GroovyParser.LBRACE];
	private static ARROW: TerminalNodePair = [(ctx) => ctx.ARROW(), GroovyParser.ARROW];
	private static RBRACE: TerminalNodePair = [(ctx) => ctx.RBRACE(), GroovyParser.RBRACE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_closure, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes: Array<DecoratedNode> = [];
		const decorated = node.decorated;
		const lbraceNode = this.collectTerminalNode({
			decorated,
			terminal: ClosurePostProcessor.LBRACE
		});
		if (lbraceNode != null) {
			nodes.push(lbraceNode);
		}

		const ctx = decorated.parsed.groovyParserRuleContext as ClosureContext;
		if (ctx.formalParameterList() == null) {
			const arrowNode = this.collectTerminalNode({
				decorated,
				terminal: ClosurePostProcessor.ARROW
			});
			if (arrowNode != null) {
				nodes.push(arrowNode);
			}
		}

		return nodes;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ClosurePostProcessor.RBRACE
		});
	}
}