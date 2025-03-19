import {MemberDeclarationContext} from '../../parser';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of class body declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class MemberDeclarationPostProcessor extends PostNodeProcessorAdapter<MemberDeclarationContext> {
}