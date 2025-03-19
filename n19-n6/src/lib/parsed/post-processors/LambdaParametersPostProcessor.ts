import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, LambdaExpressionContext, LambdaParametersContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromLambdaExpression = (ctx: LambdaExpressionContext) => Optional<TerminalNode>;
type TerminalNodePairForLambdaExpression = [TerminalNodeGetFromLambdaExpression, SymbolIndex];

/**
 * could be child of lambda expression.<br>
 * doing:<br>
 * 1. find and put a "->" node after me.
 */
export class LambdaParametersPostProcessor extends PostNodeProcessorAdapter<LambdaParametersContext> {
	private static LAMBDA_EXPRESSION__ARROW: TerminalNodePairForLambdaExpression = [(ctx) => ctx.ARROW(), GroovyParser.ARROW];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: LambdaParametersPostProcessor.LAMBDA_EXPRESSION__ARROW
		});
	}
}
