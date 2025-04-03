import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "throw" */
export class ThrowNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THROW;
	}
}