import {CommandExpressionContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of statement expression.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class CommandExpressionPostProcessor extends PostNodeProcessorAdapter<CommandExpressionContext> {
}