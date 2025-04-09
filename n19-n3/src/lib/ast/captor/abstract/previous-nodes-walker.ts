import {AstNode} from '../../ast-node';

export interface PreviousNodesWalker {
	/**
	 * check given node is kind of modifier concatenator or not.
	 * direction is from closest to farthest, previously
	 */
	isModifierConcatenator(node: AstNode): boolean;
	/**
	 * check the given node is modifier or not.
	 * direction is from closest to farthest, previously.
	 */
	isModifier(node: AstNode): boolean;
	/**
	 * Grab the qualified modifier nodes and modifier-concatenator nodes before the current position.
	 * The returned nodes are sorted in the order of their natural appearance.
	 * Note that only sibling nodes will be grabbed, and it will not traverse up to the parent node.
	 */
	grabModifiersAndConcatenators(): Array<AstNode>;

	/**
	 * detach given nodes from ast. nodes are sorted in the order of their natural appearance.
	 */
	detachPreviousNodes(nodes: Array<AstNode>): void;
	/**
	 * attach given nodes from ast. nodes are sorted in the order of their natural appearance.
	 */
	attachPreviousNodes(nodes: Array<AstNode>): void;
}