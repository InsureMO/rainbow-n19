import {TerminalNode} from 'antlr4';
import {ClosureContext, FormalParameterListContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromClosure = (ctx: ClosureContext) => Optional<TerminalNode>;
type TerminalNodePairForClosure = [TerminalNodeGetFromClosure, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. formal parameters,<br>
 * 2. closure.<br>
 * doing:<br>
 * 1. find and put a "->" node after me, when parent is closure.
 */
export class FormalParameterListPostProcessor extends PostNodeProcessorAdapter<FormalParameterListContext> {
	private static ARROW: TerminalNodePairForClosure = [(ctx) => ctx.ARROW(), GroovyParser.ARROW];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: FormalParameterListPostProcessor.ARROW
		});
	}
}