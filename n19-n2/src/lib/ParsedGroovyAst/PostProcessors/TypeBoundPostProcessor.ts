import {TypeBoundContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of type parameter.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class TypeBoundPostProcessor extends PostNodeProcessorAdapter<TypeBoundContext> {
}