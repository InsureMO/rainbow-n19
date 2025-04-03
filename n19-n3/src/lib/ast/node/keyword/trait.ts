import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "trait", for class */
export class TraitNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRAIT;
	}
}