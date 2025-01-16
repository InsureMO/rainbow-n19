import {BlockStatementsOptContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. closure,<br>
 * 2. block.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class BlockStatementsOptPostProcessor extends PostNodeProcessorAdapter<BlockStatementsOptContext> {
}