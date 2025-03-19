import {CatchTypeContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of catch clause.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class CatchTypePostProcessor extends PostNodeProcessorAdapter<CatchTypeContext> {
}