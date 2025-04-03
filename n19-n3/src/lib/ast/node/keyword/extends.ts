import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "extends", for class */
export class ExtendsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.EXTENDS;
	}
}