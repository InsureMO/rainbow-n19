import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class UndeterminedTextNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.UndeterminedText;
	}

	append(node: AstNode): AstNode {
		if (node instanceof UndeterminedTextNode) {
			// merge the given one to this
			this.appendText(node.text);
			return this;
		} else {
			return super.append(node);
		}
	}
}
