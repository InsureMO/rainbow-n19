import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "continue" */
export class ContinueNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CONTINUE;
	}
}