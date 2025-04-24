import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "non-sealed", for class */
export class NonSealedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NON_SEALED;
	}
}