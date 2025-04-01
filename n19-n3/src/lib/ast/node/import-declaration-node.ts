import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementEndBySemicolonAstNode} from './abstract-statement-node';

/**
 * import declaration of file
 */
export class ImportDeclarationNode extends AbstractStatementEndBySemicolonAstNode {
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
			TokenId.Asterisk,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(node.tokenId);
	}
}
