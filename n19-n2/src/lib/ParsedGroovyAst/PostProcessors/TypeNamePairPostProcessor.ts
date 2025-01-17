import {TerminalNode} from 'antlr4';
import {GroovyParser, TypeNamePairContext, TypeNamePairsContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromTypeNamePairs = (ctx: TypeNamePairsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForTypeNamePairs = [TerminalNodeGetFromTypeNamePairs, SymbolIndex];

/**
 * could be child of type name pairs.<br>
 * doing:<br>
 * 1. find and put a "," node after me.
 */
export class TypeNamePairPostProcessor extends PostNodeProcessorAdapter<TypeNamePairContext> {
	private static TYPE_NAME_PAIRS__COMMA: TerminalNodePairForTypeNamePairs = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeWithIndexToArray({
			decorated: node.decorated,
			siblings: (ctx: TypeNamePairsContext) => ctx.typeNamePair_list(),
			indexOffset: 0,
			terminal: TypeNamePairPostProcessor.TYPE_NAME_PAIRS__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}