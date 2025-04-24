import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "void" */
export class VoidNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.VOID;
	}
}