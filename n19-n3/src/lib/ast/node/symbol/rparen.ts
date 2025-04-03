import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** ")" */
export class RParenNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RParen;
	}
}