import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementEndBySemicolonAstNode} from './abstract-statement-node';

/**
 * package declaration of file
 */
export class PackageDeclarationNode extends AbstractStatementEndBySemicolonAstNode {
	get tokenId(): TokenId {
		return TokenId.PackageDeclaration;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.PACKAGE,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Dot,
			TokenId.Identifier,
			TokenId.Semicolon,
			TokenId.MultipleLinesComment
		].includes(node.tokenId);
	}
}
