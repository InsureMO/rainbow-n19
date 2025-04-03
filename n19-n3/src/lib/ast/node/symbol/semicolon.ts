import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** ";" */
export class SemicolonNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Semicolon;
	}
}