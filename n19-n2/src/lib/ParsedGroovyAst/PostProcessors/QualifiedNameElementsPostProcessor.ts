import {QualifiedNameElementsContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. qualified class name,<br>
 * 2. qualified standard class name.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class QualifiedNameElementsPostProcessor extends PostNodeProcessorAdapter<QualifiedNameElementsContext> {
}
