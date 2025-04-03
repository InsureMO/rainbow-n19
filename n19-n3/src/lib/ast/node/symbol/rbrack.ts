import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "]" */
export class RBrackNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RBrack;
	}
}