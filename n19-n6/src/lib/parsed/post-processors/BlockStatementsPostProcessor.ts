import {BlockStatementsContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. block statements opt,<br>
 * 2. switch block statement group,<br>
 * 3. switch block statement expression group.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class BlockStatementsPostProcessor extends PostNodeProcessorAdapter<BlockStatementsContext> {
}