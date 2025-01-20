import {TerminalNode} from 'antlr4';
import {GroovyParser, ModifierContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ModifierContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of modifiers.<br>
 * doing:<br>
 * 1. put me as a node, when it doesn't have a class or interface modifier.
 */
export class ModifierPostProcessor extends PostNodeProcessorAdapter<ModifierContext> {
	private static NATIVE: TerminalNodePair = [(ctx: ModifierContext) => ctx.NATIVE(), GroovyParser.NATIVE];
	private static SYNCHRONIZED: TerminalNodePair = [(ctx: ModifierContext) => ctx.SYNCHRONIZED(), GroovyParser.SYNCHRONIZED];
	private static TRANSIENT: TerminalNodePair = [(ctx: ModifierContext) => ctx.TRANSIENT(), GroovyParser.TRANSIENT];
	private static VOLATILE: TerminalNodePair = [(ctx: ModifierContext) => ctx.VOLATILE(), GroovyParser.VOLATILE];
	private static DEF: TerminalNodePair = [(ctx: ModifierContext) => ctx.DEF(), GroovyParser.DEF];
	private static VAR: TerminalNodePair = [(ctx: ModifierContext) => ctx.VAR(), GroovyParser.VAR];
	private static TERMINALS = [
		ModifierPostProcessor.NATIVE,
		ModifierPostProcessor.SYNCHRONIZED,
		ModifierPostProcessor.TRANSIENT,
		ModifierPostProcessor.VOLATILE,
		ModifierPostProcessor.DEF,
		ModifierPostProcessor.VAR
	];
	private static IGNORE_TERMINAL_CHECK = (ctx: ModifierContext) => ctx.classOrInterfaceModifier() != null;

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodes({
			decorated,
			ignoreTerminalsCheck: ModifierPostProcessor.IGNORE_TERMINAL_CHECK,
			terminals: ModifierPostProcessor.TERMINALS,
			firstOnly: false
		});
	}
}