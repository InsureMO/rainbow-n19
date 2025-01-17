import {ForControlContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of loop statement.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ForControlPostProcessor extends PostNodeProcessorAdapter<ForControlContext> {
}