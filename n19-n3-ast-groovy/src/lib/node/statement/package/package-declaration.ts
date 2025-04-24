import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractEndBySemicolonAstNode} from '../../abstract';

/**
 * package declaration of file
 */
export class PackageDeclarationNode extends AbstractEndBySemicolonAstNode {
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
