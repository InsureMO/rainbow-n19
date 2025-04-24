import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "yield" */
export class YieldNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.YIELD;
	}
}