import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

export class FieldDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.FieldDeclaration;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.FINAL, TokenId.STATIC, TokenId.STRICTFP,
			TokenId.TRANSIENT, TokenId.VOLATILE,
			// identifier
			TokenId.Identifier,
			// annotation
			TokenId.AnnotationDeclaration
		].includes(node.tokenId);
	}
}
