import {TokenId} from '../../tokens';
import {AbstractSymbolNode} from './abstract-symbol';

/** "{" */
export class LBraceNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LBrace;
	}
}