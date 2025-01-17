import {TerminalNode} from 'antlr4';
import {ClassicalForControlContext, ForInitContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClassicalForControlContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of classical for control.<br>
 * doing:<br>
 * 1. find and put a ";" node after me.
 */
export class ForInitPostProcessor extends PostNodeProcessorAdapter<ForInitContext> {
	private static CLASSICAL_FOR_CONTROL__SEMI: TerminalNodePair = [(ctx) => ctx.SEMI(0), GroovyParser.SEMI];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: ForInitPostProcessor.CLASSICAL_FOR_CONTROL__SEMI
		});
	}
}