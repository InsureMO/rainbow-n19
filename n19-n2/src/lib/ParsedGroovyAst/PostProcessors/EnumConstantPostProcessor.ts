import {TerminalNode} from 'antlr4';
import {EnumConstantContext, EnumConstantsContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromEnumConstants = (ctx: EnumConstantsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForEnumConstants = [TerminalNodeGetFromEnumConstants, SymbolIndex];

/**
 * could be child of enum constants.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put "," node after me.
 */
export class EnumConstantPostProcessor extends PostNodeProcessorAdapter<EnumConstantContext> {
	private static ENUM_CONSTANTS__COMMA: TerminalNodePairForEnumConstants = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeWithIndexToArray({
			decorated,
			siblings: (ctx: EnumConstantsContext) => ctx.enumConstant_list(),
			indexOffset: 0,
			terminal: EnumConstantPostProcessor.ENUM_CONSTANTS__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}