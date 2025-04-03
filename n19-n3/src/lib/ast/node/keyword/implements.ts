import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "implements", for class */
export class ImplementsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IMPLEMENTS;
	}
}