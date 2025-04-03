import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "default", for interface default method, switch */
export class DefaultNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.DEFAULT;
	}
}