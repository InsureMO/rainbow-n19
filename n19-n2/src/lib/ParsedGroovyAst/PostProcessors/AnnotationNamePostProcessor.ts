import {AnnotationNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of annotation.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class AnnotationNamePostProcessor extends PostNodeProcessorAdapter<AnnotationNameContext> {
}
