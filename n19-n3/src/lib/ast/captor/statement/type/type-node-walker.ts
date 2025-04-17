import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractPreviousNodesWalker} from '../../abstract';
import {AstNodeCaptor} from '../../captor';

export class TypeNodeWalker extends AbstractPreviousNodesWalker {
	protected shouldGrab(node: AstNode): boolean {
		return super.shouldGrab(node) || [
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.FINAL, TokenId.STATIC,
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.STRICTFP,
			// annotation
			TokenId.AnnotationDeclaration
		].includes(node.tokenId);
	}
}
