import {TerminalNode} from 'antlr4';
import {ClassOrInterfaceModifierContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ClassOrInterfaceModifierContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. modifier,<br>
 * 2. class or interface modifiers.<br>
 * doing:<br>
 * 1. put me as a node, when it doesn't have an annotation.
 */
export class ClassOrInterfaceModifierPostProcessor extends PostNodeProcessorAdapter<ClassOrInterfaceModifierContext> {
	private static PUBLIC: TerminalNodePair = [(ctx) => ctx.PUBLIC(), GroovyParser.PUBLIC];
	private static PROTECTED: TerminalNodePair = [(ctx) => ctx.PROTECTED(), GroovyParser.PROTECTED];
	private static PRIVATE: TerminalNodePair = [(ctx) => ctx.PRIVATE(), GroovyParser.PRIVATE];
	private static STATIC: TerminalNodePair = [(ctx) => ctx.STATIC(), GroovyParser.STATIC];
	private static ABSTRACT: TerminalNodePair = [(ctx) => ctx.ABSTRACT(), GroovyParser.ABSTRACT];
	private static SEALED: TerminalNodePair = [(ctx) => ctx.SEALED(), GroovyParser.SEALED];
	private static NON_SEALED: TerminalNodePair = [(ctx) => ctx.NON_SEALED(), GroovyParser.NON_SEALED];
	private static FINAL: TerminalNodePair = [(ctx) => ctx.FINAL(), GroovyParser.FINAL];
	private static STRICTFP: TerminalNodePair = [(ctx) => ctx.STRICTFP(), GroovyParser.STRICTFP];
	private static DEFAULT: TerminalNodePair = [(ctx) => ctx.DEFAULT(), GroovyParser.DEFAULT];
	private static TERMINALS = [
		ClassOrInterfaceModifierPostProcessor.PUBLIC,
		ClassOrInterfaceModifierPostProcessor.PROTECTED,
		ClassOrInterfaceModifierPostProcessor.PRIVATE,
		ClassOrInterfaceModifierPostProcessor.STATIC,
		ClassOrInterfaceModifierPostProcessor.ABSTRACT,
		ClassOrInterfaceModifierPostProcessor.SEALED,
		ClassOrInterfaceModifierPostProcessor.NON_SEALED,
		ClassOrInterfaceModifierPostProcessor.FINAL,
		ClassOrInterfaceModifierPostProcessor.STRICTFP,
		ClassOrInterfaceModifierPostProcessor.DEFAULT
	];
	private static IGNORE_TERMINAL_CHECK = (ctx: ClassOrInterfaceModifierContext) => ctx.annotation() != null;

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodes({
			decorated,
			ignoreTerminalsCheck: ClassOrInterfaceModifierPostProcessor.IGNORE_TERMINAL_CHECK,
			terminals: ClassOrInterfaceModifierPostProcessor.TERMINALS,
			firstOnly: false
		});
	}
}