import {ModifiersOptContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. member declaration,<br>
 * 2. method declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ModifiersOptPostProcessor extends PostNodeProcessorAdapter<ModifiersOptContext> {
}