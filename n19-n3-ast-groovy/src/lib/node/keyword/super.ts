import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "super" */
export class SuperNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SUPER;
	}
}