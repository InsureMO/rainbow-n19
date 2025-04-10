import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockDeclarationNode} from '../../abstract';

export class MethodDeclarationNode extends AbstractBraceBlockDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.MethodDeclaration;
	}

	protected couldBeChildOfMeOnBlockNotStarted(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.FINAL, TokenId.STATIC, TokenId.STRICTFP,
			TokenId.SYNCHRONIZED, TokenId.NATIVE,
			// identifier
			TokenId.Identifier,
			// annotation
			TokenId.AnnotationDeclaration,
			// body block
			TokenId.MethodBody
		].includes(node.tokenId);
	}
}
