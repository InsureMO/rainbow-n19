import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "for" */
export class ForNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FOR;
	}
}