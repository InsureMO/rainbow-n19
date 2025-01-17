import {TerminalNode} from 'antlr4';
import {ClassBodyContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClassBodyContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. anonymous inner class declaration.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "{" node as my first child,<br>
 * 3. find and put a "}" node as my last child.
 */
export class ClassBodyPostProcessor extends PostNodeProcessorAdapter<ClassBodyContext> {
	private static LBRACE: TerminalNodePair = [(ctx) => ctx.LBRACE(), GroovyParser.LBRACE];
	private static RBRACE: TerminalNodePair = [(ctx) => ctx.RBRACE(), GroovyParser.RBRACE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_classBody, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: ClassBodyPostProcessor.LBRACE});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: ClassBodyPostProcessor.RBRACE});
	}
}