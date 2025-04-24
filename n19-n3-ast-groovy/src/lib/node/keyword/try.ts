import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "try" */
export class TryNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRY;
	}
}