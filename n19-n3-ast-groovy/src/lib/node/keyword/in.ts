import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "in" */
export class InNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IN;
	}
}