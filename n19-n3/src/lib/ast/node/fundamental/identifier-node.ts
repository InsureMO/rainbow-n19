import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * identifier contains chars which is {@link Character#isJavaIdentifierPart}
 */
export class IdentifierNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Identifier;
	}
}
