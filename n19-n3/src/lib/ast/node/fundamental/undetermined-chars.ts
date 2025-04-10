import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * undetermined chars, depends on parent
 */
export class UndeterminedCharsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.UndeterminedChars;
	}

	append(node: AstNode): AstNode {
		if (node.tokenId === TokenId.UndeterminedChars) {
			// merge the given one to this
			this.appendText(node.text);
			return this;
		} else {
			return super.append(node);
		}
	}
}
