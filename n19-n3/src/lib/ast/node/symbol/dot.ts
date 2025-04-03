import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "." */
export class DotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Dot;
	}
}