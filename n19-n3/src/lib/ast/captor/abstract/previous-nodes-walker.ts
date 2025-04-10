import {AstNode} from '../../ast-node';

export interface PreviousNodesWalker {
	/**
	 * check the given node should be grabbed or not
	 */
	shouldGrab(node: AstNode): boolean;

	/**
	 * Grab the qualified modifier nodes and modifier-concatenator nodes before the current position.
	 * The returned nodes are sorted in the order of their natural appearance.
	 * Note that only sibling nodes will be grabbed, and it will not traverse up to the parent node.
	 */
	grabModifiersAndConcatenators(): Array<AstNode>;
}
