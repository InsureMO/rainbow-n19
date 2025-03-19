import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {BuiltInTypeContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: BuiltInTypeContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of primary.<br>
 * doing:<br>
 * 1. put me as a node.
 */
export class BuiltInTypePostProcessor extends PostNodeProcessorAdapter<BuiltInTypeContext> {
	private static BuiltInPrimitiveType: TerminalNodePair = [(ctx) => ctx.BuiltInPrimitiveType(), GroovyParser.BuiltInPrimitiveType];
	private static VOID: TerminalNodePair = [(ctx) => ctx.VOID(), GroovyParser.VOID];
	private static TERMINALS = [
		BuiltInTypePostProcessor.BuiltInPrimitiveType,
		BuiltInTypePostProcessor.VOID
	];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: BuiltInTypePostProcessor.TERMINALS,
			firstOnly: true
		});
	}
}