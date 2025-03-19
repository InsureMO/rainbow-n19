import {ClassOrInterfaceTypeContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * No parent found, the definition specifies that it is the base for general class or interface type and standard class or interface type.
 * <br>
 * nothing needs to proceed on this level.
 */
export class ClassOrInterfaceTypePostProcessor extends PostNodeProcessorAdapter<ClassOrInterfaceTypeContext> {
}