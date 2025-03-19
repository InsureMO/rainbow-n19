import {EmptyDimsContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of empty dims opt.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class EmptyDimsPostProcessor extends PostNodeProcessorAdapter<EmptyDimsContext> {
}