import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "break" */
export class BreakNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.BREAK;
	}
}