import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockDeclarationNode} from '../../abstract';

export class ConstructorDeclarationNode extends AbstractBraceBlockDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.ConstructorDeclaration;
	}

	protected couldBeChildOfMeOnBlockNotStarted(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.STRICTFP,
			// identifier
			TokenId.Identifier,
			// annotation
			TokenId.AnnotationDeclaration,
			// body block
			TokenId.ConstructorBody
		].includes(node.tokenId);
	}
}
