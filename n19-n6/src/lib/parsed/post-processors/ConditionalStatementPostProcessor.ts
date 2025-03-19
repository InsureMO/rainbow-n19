import {ConditionalStatementContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of statement.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ConditionalStatementPostProcessor extends PostNodeProcessorAdapter<ConditionalStatementContext> {
}