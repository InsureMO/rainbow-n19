import {TerminalNode} from 'antlr4';
import {ArgumentsContext, EnhancedArgumentListInParContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ArgumentsContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of arguments.<br>
 * doing:<br>
 * 1. find and put a "," node after me.
 */
export class EnhancedArgumentListInParPostProcessor extends PostNodeProcessorAdapter<EnhancedArgumentListInParContext> {
	private static ARGUMENTS__COMMA: TerminalNodePair = [(ctx) => ctx.COMMA(), GroovyParser.COMMA];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: EnhancedArgumentListInParPostProcessor.ARGUMENTS__COMMA
		});
	}
}