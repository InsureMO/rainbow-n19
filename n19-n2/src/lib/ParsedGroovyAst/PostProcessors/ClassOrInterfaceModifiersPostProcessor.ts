import {ClassOrInterfaceModifiersContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of class or interface modifiers opt.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ClassOrInterfaceModifiersPostProcessor extends PostNodeProcessorAdapter<ClassOrInterfaceModifiersContext> {
}