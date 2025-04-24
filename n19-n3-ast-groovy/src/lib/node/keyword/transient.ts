import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "transient", for field */
export class TransientNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRANSIENT;
	}
}
