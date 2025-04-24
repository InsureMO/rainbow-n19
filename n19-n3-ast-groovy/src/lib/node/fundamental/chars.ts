import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * chars not includes whitespace, new lines, tabs.
 * and neither undetermined nor unexpected chars.
 */
export class CharsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Chars;
	}

	append(node: AstNode): AstNode {
		if (node.tokenId === TokenId.Chars) {
			// merge the given one to this
			this.appendText(node.text);
			return this;
		} else {
			return super.append(node);
		}
	}
}
