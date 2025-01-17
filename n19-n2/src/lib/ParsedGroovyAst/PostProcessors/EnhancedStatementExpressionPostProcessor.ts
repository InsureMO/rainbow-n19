import {EnhancedStatementExpressionContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. variable initializer,<br>
 * 2. expression in par,<br>
 * 3. expression.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class EnhancedStatementExpressionPostProcessor extends PostNodeProcessorAdapter<EnhancedStatementExpressionContext> {
}