import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "finally" */
export class FinallyNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FINALLY;
	}
}