import {VariableInitializersContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of array initializer.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class VariableInitializersPostProcessor extends PostNodeProcessorAdapter<VariableInitializersContext> {
}