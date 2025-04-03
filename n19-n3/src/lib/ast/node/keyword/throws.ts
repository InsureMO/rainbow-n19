import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "throws" */
export class ThrowsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THROWS;
	}
}