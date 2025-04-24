import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "goto", reserved */
export class GotoNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.GOTO;
	}
}