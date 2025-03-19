import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, VariableInitializerContext, VariableInitializersContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromVariableInitializers = (ctx: VariableInitializersContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForVariableInitializers = [TerminalNodeGetFromVariableInitializers, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. variable declarator,<br>
 * 2. variable initializers,<br>
 * 3. variable declaration.<br>
 * doing:<br>
 * 1. find and put a "," node after me, when parent is variable initializers.
 */
export class VariableInitializerPostProcessor extends PostNodeProcessorAdapter<VariableInitializerContext> {
	private static VARIABLE_INITIALIZERS__COMMA: TerminalNodePairForVariableInitializers = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as VariableInitializerContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof VariableInitializersContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: VariableInitializersContext) => ctx.variableInitializer_list(),
				indexOffset: 0,
				terminal: VariableInitializerPostProcessor.VARIABLE_INITIALIZERS__COMMA,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}