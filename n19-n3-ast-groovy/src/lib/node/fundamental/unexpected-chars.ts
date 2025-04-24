import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * unexpected chars, depends on parent
 */
export class UnexpectedCharsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.UnexpectedChars;
	}

	append(node: AstNode): AstNode {
		if (node.tokenId === TokenId.UnexpectedChars) {
			// merge the given one to this
			this.appendText(node.text);
			return this;
		} else {
			return super.append(node);
		}
	}
}
