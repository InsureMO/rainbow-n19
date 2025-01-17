import {TerminalNode} from 'antlr4';
import {FinallyBlockContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: FinallyBlockContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of try catch statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "FINALLY" node as my first child.
 */
export class FinallyBlockPostProcessor extends PostNodeProcessorAdapter<FinallyBlockContext> {
	private static FINALLY: TerminalNodePair = [(ctx) => ctx.FINALLY(), GroovyParser.FINALLY];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_finallyBlock, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: FinallyBlockPostProcessor.FINALLY
		});
	}
}