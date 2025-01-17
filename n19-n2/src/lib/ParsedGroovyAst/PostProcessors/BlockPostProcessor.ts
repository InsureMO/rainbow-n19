import {TerminalNode} from 'antlr4';
import {BlockContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: BlockContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class body declaration,<br>
 * 2. method body,<br>
 * 3. lambda body,<br>
 * 4. try catch statement,<br>
 * 5. statement,<br>
 * 6. catch clause,<br>
 * 7. finally block.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "{" node as my first child,<br>
 * 3. find and put a "}" node as my last child.
 */
export class BlockPostProcessor extends PostNodeProcessorAdapter<BlockContext> {
	private static LBRACE: TerminalNodePair = [(ctx) => ctx.LBRACE(), GroovyParser.LBRACE];
	private static RBRACE: TerminalNodePair = [(ctx) => ctx.RBRACE(), GroovyParser.RBRACE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_block, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: BlockPostProcessor.LBRACE
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: BlockPostProcessor.RBRACE
		});
	}
}