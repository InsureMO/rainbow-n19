import {ScriptStatementsContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of compilation unit.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class ScriptStatementsPostProcessor extends PostNodeProcessorAdapter<ScriptStatementsContext> {
}
