import {TerminalNode} from 'antlr4';
import {
	BooleanLiteralAltContext,
	FloatingPointLiteralAltContext,
	GroovyParser,
	IntegerLiteralAltContext,
	LiteralContext,
	NullLiteralAltContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetInteger = (ctx: IntegerLiteralAltContext) => Optional<TerminalNode>;
type TerminalNodePairForInteger = [TerminalNodeGetInteger, SymbolIndex];
type TerminalNodeGetFloat = (ctx: FloatingPointLiteralAltContext) => Optional<TerminalNode>;
type TerminalNodePairForFloat = [TerminalNodeGetFloat, SymbolIndex];
type TerminalNodeGetBoolean = (ctx: BooleanLiteralAltContext) => Optional<TerminalNode>;
type TerminalNodePairForBoolean = [TerminalNodeGetBoolean, SymbolIndex];
type TerminalNodeGetNull = (ctx: NullLiteralAltContext) => Optional<TerminalNode>;
type TerminalNodePairForNull = [TerminalNodeGetNull, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. primary,<br>
 * 2. named property arg primary,<br>
 * 3. named arg primary,<br>
 * 4. command primary.<br>
 * doing:<br>
 * 1. put me as a node, when it is not a string literal alt context.
 */
export class LiteralPostProcessor extends PostNodeProcessorAdapter<LiteralContext> {
	private static IntegerLiteral: TerminalNodePairForInteger = [(ctx) => ctx.IntegerLiteral(), GroovyParser.IntegerLiteral];
	private static FloatingPointLiteral: TerminalNodePairForFloat = [(ctx) => ctx.FloatingPointLiteral(), GroovyParser.FloatingPointLiteral];
	private static BooleanLiteral: TerminalNodePairForBoolean = [(ctx) => ctx.BooleanLiteral(), GroovyParser.BooleanLiteral];
	private static NullLiteral: TerminalNodePairForNull = [(ctx) => ctx.NullLiteral(), GroovyParser.NullLiteral];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as LiteralContext;
		if (ctx instanceof IntegerLiteralAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: LiteralPostProcessor.IntegerLiteral
			});
		} else if (ctx instanceof FloatingPointLiteralAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: LiteralPostProcessor.FloatingPointLiteral
			});
		} else if (ctx instanceof BooleanLiteralAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: LiteralPostProcessor.BooleanLiteral
			});
		} else if (ctx instanceof NullLiteralAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: LiteralPostProcessor.NullLiteral
			});
		}
		return [];
	}
}