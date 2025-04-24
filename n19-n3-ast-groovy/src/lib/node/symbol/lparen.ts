import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "(" */
export class LParenNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LParen;
	}
}