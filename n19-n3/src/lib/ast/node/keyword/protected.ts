import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "protected", for class, constructor, method, and field */
export class ProtectedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PROTECTED;
	}
}