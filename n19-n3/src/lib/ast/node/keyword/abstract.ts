import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "abstract", for class, constructor, method */
export class AbstractNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ABSTRACT;
	}
}