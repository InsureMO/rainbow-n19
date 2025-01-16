import {VariableDeclaratorsContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of variable declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class VariableDeclaratorsPostProcessor extends PostNodeProcessorAdapter<VariableDeclaratorsContext> {
}