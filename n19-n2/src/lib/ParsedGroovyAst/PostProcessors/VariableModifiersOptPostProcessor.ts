import {VariableModifiersOptContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. formal parameter,<br>
 * 2. catch clause,<br>
 * 3. enhanced for control.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class VariableModifiersOptPostProcessor extends PostNodeProcessorAdapter<VariableModifiersOptContext> {
}