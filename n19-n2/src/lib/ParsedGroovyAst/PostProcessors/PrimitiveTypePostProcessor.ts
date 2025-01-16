import {TerminalNode} from 'antlr4';
import {GroovyParser, PrimitiveTypeContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: PrimitiveTypeContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. standard type,<br>
 * 2. type,<br>
 * 3. created name.<br>
 * doing:<br>
 * 1. put me as a node.
 */
export class PrimitiveTypePostProcessor extends PostNodeProcessorAdapter<PrimitiveTypeContext> {
	private static BuiltInPrimitiveType: TerminalNodePair = [(ctx) => ctx.BuiltInPrimitiveType(), GroovyParser.BuiltInPrimitiveType];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: PrimitiveTypePostProcessor.BuiltInPrimitiveType
		});
	}
}