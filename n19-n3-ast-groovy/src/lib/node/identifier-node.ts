import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

/**
 * identifier contains chars which is {@link Character#isJavaIdentifierPart}
 */
export class IdentifierNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Identifier;
	}
}
