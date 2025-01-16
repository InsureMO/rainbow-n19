import {ClosureOrLambdaExpressionContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. path element,<br>
 * 2. primary.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ClosureOrLambdaExpressionPostProcessor extends PostNodeProcessorAdapter<ClosureOrLambdaExpressionContext> {
}