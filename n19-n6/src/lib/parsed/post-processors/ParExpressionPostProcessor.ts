import {ParExpressionContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. dynamic member name,<br>
 * 2. primary,<br>
 * 3. named property arg primary<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ParExpressionPostProcessor extends PostNodeProcessorAdapter<ParExpressionContext> {
}