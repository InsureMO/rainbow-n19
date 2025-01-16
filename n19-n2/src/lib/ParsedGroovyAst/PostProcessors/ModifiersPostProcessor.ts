import {ModifiersContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. modifiers opt,<br>
 * 2. variable declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ModifiersPostProcessor extends PostNodeProcessorAdapter<ModifiersContext> {
}