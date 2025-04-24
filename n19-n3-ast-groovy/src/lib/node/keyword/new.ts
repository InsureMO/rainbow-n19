import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "new" */
export class NewNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NEW;
	}
}