import {StatementExpressionContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. lambda body,<br>
 * 2. statement,<br>
 * 3. enhanced statement expression,<br>
 * 4. expression.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class StatementExpressionPostProcessor extends PostNodeProcessorAdapter<StatementExpressionContext> {
}