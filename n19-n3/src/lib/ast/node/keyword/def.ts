import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "def" */
export class DefNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.DEF;
	}
}