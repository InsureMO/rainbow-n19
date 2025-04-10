import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractPreviousNodesWalker} from '../../abstract';

export class TypeNodeWalker extends AbstractPreviousNodesWalker {
	protected shouldGrab(node: AstNode): boolean {
		return [
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.FINAL, TokenId.STATIC,
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.STRICTFP,
			// concatenators
			...this.getConcatenatorTokenIds(),
			TokenId.AnnotationDeclaration
		].includes(node.tokenId);
	}
}
