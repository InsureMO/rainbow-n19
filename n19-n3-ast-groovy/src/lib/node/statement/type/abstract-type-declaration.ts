import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockDeclarationNode} from '../../abstract';

export abstract class AbstractTypeDeclarationNode extends AbstractBraceBlockDeclarationNode {
	protected couldBeChildOfMeOnBlockNotStarted(node: AstNode): boolean {
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.FINAL, TokenId.STATIC,
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.STRICTFP,
			// type keywords
			TokenId.INTERFACE, TokenId.CLASS, TokenId.AT_INTERFACE, TokenId.ENUM,
			TokenId.RECORD, TokenId.TRAIT,
			TokenId.PERMITS,
			// identifier
			TokenId.Dot, TokenId.Identifier,
			// extends and implements
			TokenId.EXTENDS, TokenId.IMPLEMENTS,
			// annotation
			TokenId.AnnotationDeclaration,
			// body block
			TokenId.ClassBody
		].includes(node.tokenId);
	}
}
