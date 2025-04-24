import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "volatile", for field */
export class VolatileNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.VOLATILE;
	}
}