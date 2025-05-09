import {GroovyAstNode} from '../../../node';
import {AstRecognition} from '../../types';
import {AbstractPreservableRecognizer} from './abstract-preservable-recognizer';

/**
 * If it is not completed in the two stages of rehydration and preservation,
 * create a new node using the given node and place it into the AST,
 * and then return the index value of the next node.
 */
export abstract class AbstractDeclarationCreateRecognizer extends AbstractPreservableRecognizer {
	protected abstract createDeclarationNode(node: GroovyAstNode): GroovyAstNode;

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const statementNode = this.createDeclarationNode(node);
		statementNode.asParentOf(node);
		astRecognizer.appendAsCurrentParent(statementNode);

		return nodeIndex + 1;
	}
}
