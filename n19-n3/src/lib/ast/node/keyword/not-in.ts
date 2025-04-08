import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "!in" */
export class NotInNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NOT_IN;
	}
}