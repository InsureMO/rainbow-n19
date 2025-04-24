import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "}" */
export class RBraceNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RBrace;
	}
}