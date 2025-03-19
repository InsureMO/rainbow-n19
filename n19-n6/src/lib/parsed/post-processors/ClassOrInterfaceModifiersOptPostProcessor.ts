import {ClassOrInterfaceModifiersOptContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of type declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ClassOrInterfaceModifiersOptPostProcessor extends PostNodeProcessorAdapter<ClassOrInterfaceModifiersOptContext> {
}