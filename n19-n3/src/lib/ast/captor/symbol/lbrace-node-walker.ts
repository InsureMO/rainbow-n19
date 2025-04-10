import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractPreviousNodesWalker, PreviousNodesWalkerAndVisitor} from '../abstract';
import {Char} from '../types';

/**
 * When encountering {@link LBraceNode}, there are multiple scenarios, and it is necessary to determine how to capture it based on the previous nodes.
 * Consider the following scenarios:
 * - {@link ClassBodyNode},
 * - {@link StaticBlockBodyNode},
 * - {@link MethodBodyNode},
 * - closure
 * - lambda body block
 * - switch body block
 * - code block
 * - array initializer block
 */
export class LBraceNodeWalker extends AbstractPreviousNodesWalker implements PreviousNodesWalkerAndVisitor {
	protected additionalModifierConcatenatorTokenIds(): Array<TokenId> {
		return [
			// identifier
			TokenId.Dot, TokenId.Identifier,
			// annotation
			TokenId.AnnotationDeclaration
		];
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
			TokenId.TRANSIENT | TokenId.VOLATILE,
			// for lambda
			TokenId.Arrow,
			// for switch
			TokenId.SWITCH
		].includes(node.tokenId);
	}

	visit(char: Char, offset: number): boolean {
		const modifierNodes = this.grabModifiersAndConcatenators();
		if (modifierNodes.length === 0) {
			// no modifiers
			return false;
		}
		// if (modifierNodes.length !== 0 && modifierNodes.some(node => this.isModifier(node))) {
		// 	const captor = this.captor;
		// 	this.detachPreviousNodes(modifierNodes);
		// 	captor.createAndAppendToAst(StaticBlockDeclarationNode, {
		// 		startOffset: modifierNodes[0].startOffset
		// 	});
		// 	this.attachPreviousNodes(modifierNodes);
		// 	// append a block body node
		// 	captor.createAndAppendToAst(StaticBlockBodyNode, {startOffset: offset});
		// 	// append a lbrace node
		// 	captor.createAndAppendToAst(LBraceNode, {text: char, startOffset: offset});
		// 	captor.moveCursorTo(offset + 1);
		// 	return true;
		// }

		return false;
	}
}