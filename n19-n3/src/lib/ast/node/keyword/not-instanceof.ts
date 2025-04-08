import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "!instanceof" */
export class NotInstanceofNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NOT_INSTANCEOF;
	}
}