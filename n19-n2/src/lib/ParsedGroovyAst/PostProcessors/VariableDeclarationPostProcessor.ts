import {VariableDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. field declaration,<br>
 * 2. local variable declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class VariableDeclarationPostProcessor extends PostNodeProcessorAdapter<VariableDeclarationContext> {
}