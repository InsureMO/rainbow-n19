import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "public", for class, constructor, method, and field */
export class PublicNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PUBLIC;
	}
}