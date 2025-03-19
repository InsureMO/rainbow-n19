import {ForUpdateContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of classical for control.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ForUpdatePostProcessor extends PostNodeProcessorAdapter<ForUpdateContext> {
}