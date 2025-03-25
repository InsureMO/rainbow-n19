import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

/**
 * unexpected chars, depends on parent
 */
export class UnexpectedCharsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.UnexpectedChars;
	}

	append(node: AstNode): AstNode {
		if (node instanceof UnexpectedCharsNode) {
			// merge the given one to this
			this.appendText(node.text);
			return this;
		} else {
			return super.append(node);
		}
	}
}
