import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class TextNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Text;
	}

	append(node: AstNode): AstNode {
		if (node instanceof TextNode) {
			// merge the given one to this
			this.appendText(node.text);
			return this;
		} else {
			return super.append(node);
		}
	}
}
