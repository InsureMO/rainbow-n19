import {TerminalNode} from 'antlr4';
import {
	GroovyParser,
	StandardLambdaExpressionContext,
	StandardLambdaParametersContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromStandardLambdaExpression = (ctx: StandardLambdaExpressionContext) => Optional<TerminalNode>;
type TerminalNodePairForStandardLambdaExpression = [TerminalNodeGetFromStandardLambdaExpression, SymbolIndex];

/**
 * could be child of standard lambda expression.<br>
 * doing:<br>
 * 1. find and put a "->" node after me.
 */
export class StandardLambdaParametersPostProcessor extends PostNodeProcessorAdapter<StandardLambdaParametersContext> {
	private static STANDARD_LAMBDA_EXPRESSION__ARROW: TerminalNodePairForStandardLambdaExpression = [(ctx) => ctx.ARROW(), GroovyParser.ARROW];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: StandardLambdaParametersPostProcessor.STANDARD_LAMBDA_EXPRESSION__ARROW
		});
	}
}