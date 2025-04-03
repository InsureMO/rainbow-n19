import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "permits", for class */
export class PermitsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PERMITS;
	}
}