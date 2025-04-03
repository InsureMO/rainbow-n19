import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "const", reserved */
export class ConstNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CONST;
	}
}