import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndBySemicolonAstNode} from '../../abstract';

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
			TokenId.Multiple, // asterisk
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(node.tokenId);
	}
}
