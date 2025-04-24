import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "if" */
export class IfNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IF;
	}
}