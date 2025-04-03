import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "return" */
export class ReturnNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.RETURN;
	}
}