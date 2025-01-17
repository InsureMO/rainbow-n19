import {ForUpdateContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of classical for control.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ForUpdatePostProcessor extends PostNodeProcessorAdapter<ForUpdateContext> {
}