import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "synchronized", for method */
export class SynchronizedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SYNCHRONIZED;
	}
}