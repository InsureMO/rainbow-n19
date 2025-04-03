import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "," */
export class CommaNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Comma;
	}
}