import {AstNode} from '../../ast-node';
import {AbstractPreviousNodesWalker, PreviousNodesWalkerAndVisitor} from '../abstract';
import {Char} from '../types';

/**
 * When encountering {@link LBraceNode}, there are multiple scenarios, and it is necessary to determine how to capture it based on the previous nodes.
 * Consider the following scenarios:
 * - {@link ClassBodyNode},
 * - {@link StaticBlockBodyNode},
 * - {@link MethodBodyNode},
 * - {@link ClosureNode},
 * - {@link LambdaBodyNode},
 * - {@link IfIfBodyNode}, {@link IfElseIfBodyNode} and {@link IfElseBodyNode},
 * - {@link WhileBodyNode}, {@link DoWhileBodyNode},
 * - {@link ForBodyNode},
 * - {@link TryBodyNode}, {@link CatchBodyNode}, {@link FinallyBodyNode},
 * - {@link CodeBlock},
 * - {@link ArrayInitializer}
 */
export class LBraceNodeWalker extends AbstractPreviousNodesWalker implements PreviousNodesWalkerAndVisitor {
	/**
	 * could be any kind, returns true
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	isModifier(_node: AstNode): boolean {
		return true;
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