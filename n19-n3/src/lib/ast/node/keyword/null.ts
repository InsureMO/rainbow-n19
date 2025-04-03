import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "null" */
export class NullNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NULL;
	}
}