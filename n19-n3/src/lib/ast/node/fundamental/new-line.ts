import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * "\r", "\n" or "\r\n".
 */
export class NewLineNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.NewLine;
	}
}
