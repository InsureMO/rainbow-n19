import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "this" */
export class ThisNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THIS;
	}
}