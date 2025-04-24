import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "private", for class, constructor, method, and field */
export class PrivateNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PRIVATE;
	}
}