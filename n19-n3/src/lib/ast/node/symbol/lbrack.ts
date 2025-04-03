import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "[" */
export class LBrackNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LBrack;
	}
}