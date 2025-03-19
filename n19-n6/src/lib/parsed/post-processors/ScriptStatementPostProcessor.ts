import {ScriptStatementContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of scripts statements.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ScriptStatementPostProcessor extends PostNodeProcessorAdapter<ScriptStatementContext> {
}
