import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndBySemicolonAstNode} from '../../abstract';
import {MultipleNode} from '../../operator';
import {ImportAllMarkNode} from './import-all-mark';

/**
 * import declaration of file
 */
export class ImportDeclarationNode extends AbstractEndBySemicolonAstNode {
	get tokenId(): TokenId {
		return TokenId.ImportDeclaration;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.IMPORT,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Dot,
			TokenId.STATIC,
			TokenId.Identifier,
			TokenId.AS,
			// TokenId.ImportAllMark, this check occurs at #append, so node is Multiple.
			TokenId.Multiple,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(node.tokenId);
	}

	protected appendAsLastChild(node: AstNode): AstNode {
		if (node instanceof MultipleNode) {
			// replace to import all mark node
			return super.appendAsLastChild(new ImportAllMarkNode({
				text: node.text, startOffset: node.startOffset, startLine: node.startLine
			}));
		} else {
			return super.appendAsLastChild(node);
		}
	}
}
