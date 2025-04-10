import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractPreviousNodesWalker, PreviousNodesWalkerAndVisitor} from '../../abstract';
import {Char} from '../../types';

/**
 * if the type keywords are not found, then it will be captured by type captor.
 * but sometimes the previous text are something like "public abstract {", then it also will be predicted as a class.
 * and if the previous text are something like "public abstract synchronized class {",
 * then it will not be predicted as a class, since the keyword "synchronized" is for method only.
 *
 * e.g.
 * - public sealed {}: class, lack of class name,
 * - public final static {}: class, lack of class name,
 * - public permits {}: class, lack of class name, permits class names,
 * - private synchronized {}: method, lack of method name,
 * - transient {}: field, lack of field name, assign operator. since {} could be a closure in groovy.
 *
 * and, if there is conflict, split to parts, e.g.
 * - public sealed transient {}:
 *   - public sealed: class, lack of class name, class body,
 *   - transient {}: field, lack of field name, assign operator.
 */
export class PredictedClassOrMethodOrFieldDeclarationNodeWalker extends AbstractPreviousNodesWalker implements PreviousNodesWalkerAndVisitor {
	protected additionalModifierConcatenatorTokenIds(): Array<TokenId> {
		return [TokenId.AnnotationDeclaration];
	}

	isModifier(node: AstNode): boolean {
		return [
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.STATIC,
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.STRICTFP,
			// not for interface
			TokenId.FINAL,
			// for class only
			TokenId.EXTENDS, TokenId.IMPLEMENTS, TokenId.PERMITS,
			// for method only
			TokenId.SYNCHRONIZED, TokenId.NATIVE,
			// for field only
			TokenId.TRANSIENT | TokenId.VOLATILE
		].includes(node.tokenId);
	}

	visit(char: Char, offset: number): boolean {
		// TODO
		return false;
	}
}