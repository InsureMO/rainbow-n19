import {VariableModifiersContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of variable modifiers opt.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class VariableModifiersPostProcessor extends PostNodeProcessorAdapter<VariableModifiersContext> {
}