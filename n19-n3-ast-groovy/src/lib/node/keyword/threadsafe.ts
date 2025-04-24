import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "@Threadsafe" */
export class ThreadsafeNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THREADSAFE;
	}
}