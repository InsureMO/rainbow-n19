import {TerminalNode} from 'antlr4';
import {GroovyParser, LambdaExpressionContext, LambdaParametersContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
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
	private static ARROW: TerminalNodePairForLambdaExpression = [(ctx) => ctx.ARROW(), GroovyParser.ARROW];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: LambdaParametersPostProcessor.ARROW
		});
	}
}
