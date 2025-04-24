import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "while" */
export class WhileNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.WHILE;
	}
}