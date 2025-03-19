import {ExpressionListContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. for init,<br>
 * 2. for update,<br>
 * 3. switch expression label,<br>
 * 4. index property args,<br>
 * 5. list.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ExpressionListPostProcessor extends PostNodeProcessorAdapter<ExpressionListContext> {
}