import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "else" */
export class ElseNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ELSE;
	}
}