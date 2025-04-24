import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "sealed", for class */
export class SealedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SEALED;
	}
}