import {QualifiedClassNameListContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of method declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class QualifiedClassNameListPostProcessor extends PostNodeProcessorAdapter<QualifiedClassNameListContext> {
}