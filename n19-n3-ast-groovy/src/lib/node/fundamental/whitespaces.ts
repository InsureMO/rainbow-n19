import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * one or more " ".
 */
export class WhitespacesNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Whitespaces;
	}
}
