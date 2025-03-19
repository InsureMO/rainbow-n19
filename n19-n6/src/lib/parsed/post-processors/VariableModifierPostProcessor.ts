import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, VariableModifierContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: VariableModifierContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of variable modifiers.<br>
 * doing:<br>
 * 1. put me as a node, when it doesn't have an annotation.
 */
export class VariableModifierPostProcessor extends PostNodeProcessorAdapter<VariableModifierContext> {
	private static FINAL: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.FINAL(), GroovyParser.FINAL];
	private static DEF: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.DEF(), GroovyParser.DEF];
	private static VAR: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.VAR(), GroovyParser.VAR];
	private static PUBLIC: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.PUBLIC(), GroovyParser.PUBLIC];
	private static PROTECTED: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.PROTECTED(), GroovyParser.PROTECTED];
	private static PRIVATE: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.PRIVATE(), GroovyParser.PRIVATE];
	private static STATIC: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.STATIC(), GroovyParser.STATIC];
	private static ABSTRACT: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.ABSTRACT(), GroovyParser.ABSTRACT];
	private static STRICTFP: TerminalNodePair = [(ctx: VariableModifierContext) => ctx.STRICTFP(), GroovyParser.STRICTFP];
	private static TERMINALS = [
		VariableModifierPostProcessor.FINAL,
		VariableModifierPostProcessor.DEF,
		VariableModifierPostProcessor.VAR,
		VariableModifierPostProcessor.PUBLIC,
		VariableModifierPostProcessor.PROTECTED,
		VariableModifierPostProcessor.PRIVATE,
		VariableModifierPostProcessor.STATIC,
		VariableModifierPostProcessor.ABSTRACT,
		VariableModifierPostProcessor.STRICTFP
	];
	private static IGNORE_TERMINAL_CHECK = (ctx: VariableModifierContext) => ctx.annotation() != null;

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodes({
			decorated,
			ignoreTerminalsCheck: VariableModifierPostProcessor.IGNORE_TERMINAL_CHECK,
			terminals: VariableModifierPostProcessor.TERMINALS,
			firstOnly: false
		});
	}
}
