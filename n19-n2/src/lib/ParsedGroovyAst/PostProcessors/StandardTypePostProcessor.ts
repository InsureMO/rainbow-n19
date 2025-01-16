import {StandardTypeContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of return type.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class StandardTypePostProcessor extends PostNodeProcessorAdapter<StandardTypeContext> {
}