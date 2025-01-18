import {TerminalNode} from 'antlr4';
import {GroovyParser, StringLiteralContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: StringLiteralContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. method name,<br>
 * 2. literal,<br>
 * 3. name part.<br>
 * doing:<br>
 * 1. put me as a node.
 */
export class StringLiteralPostProcessor extends PostNodeProcessorAdapter<StringLiteralContext> {
	private static StringLiteral: TerminalNodePair = [(ctx) => ctx.StringLiteral(), GroovyParser.StringLiteral];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: StringLiteralPostProcessor.StringLiteral
		});
	}
}