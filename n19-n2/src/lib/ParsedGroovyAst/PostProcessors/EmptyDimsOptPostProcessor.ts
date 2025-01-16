import {EmptyDimsOptContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. standard type,<br>
 * 2. type.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class EmptyDimsOptPostProcessor extends PostNodeProcessorAdapter<EmptyDimsOptContext> {
}