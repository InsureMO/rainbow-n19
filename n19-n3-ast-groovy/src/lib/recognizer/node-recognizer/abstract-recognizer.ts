import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRecognizer} from '../types';

export interface NodeReviseSituation {
	/* grabbed nodes, already appended to statement */
	grabbedNodes: Array<GroovyAstNode>;
	/** node to revise */
	node: GroovyAstNode;
	/** index of node to revise */
	nodeIndex: number;
	/** origin nodes */
	nodes: Array<GroovyAstNode>;
}

export interface NodeReviseResult {
	/** revised nodes by given node */
	revisedNodes: Array<GroovyAstNode>;
	/* consumed nodes count. default consume given node */
	consumedNodeCount: number;
}

export type NodeReviseFunc = (situation: NodeReviseSituation) => NodeReviseResult;

export abstract class AbstractRecognizer implements NodeRecognizer {
	abstract acceptTokenId(): TokenId;

	abstract recognize(recognition: AstRecognition): number;

	/**
	 * When both the given node and the previous sibling node are of type {@link TokenId.Chars},
	 * or both are of type {@link TokenId.UndeterminedChars},
	 * the given node is merged into the previous sibling node, and the previous sibling node is returned.
	 * Otherwise, the given node is set as the next node of the previous sibling node, and the given node is returned.
	 */
	protected appendToPreviousSibling(node: GroovyAstNode, previousSiblingNode: GroovyAstNode): GroovyAstNode {
		const {tokenId: previousSiblingTokenId} = previousSiblingNode;
		if (previousSiblingTokenId !== node.tokenId) {
			previousSiblingNode.parent.asParentOf(node);
			return node;
		} else if (previousSiblingTokenId === TokenId.Chars
			|| previousSiblingTokenId === TokenId.UndeterminedChars) {
			previousSiblingNode.appendText(node.text);
			return previousSiblingNode;
		} else {
			previousSiblingNode.parent.asParentOf(node);
			return node;
		}
	}

	/**
	 * Check whether, among the currently recognized nodes,
	 * there are nodes other than newline, whitespaces, tabs, and comments nodes
	 * after the closest dot node among all the child nodes of the current parent node.
	 * If there are such nodes, return false. If there is no dot node among these nodes, also return -1.
	 *
	 * That is to say, there is only one situation returns index of dot node where there is a dot node among these nodes,
	 * and there are no nodes after the dot node, or all the nodes after it are newline, whitespace, tab, or comment nodes.
	 *
	 * @return [current parent node, dot node index], or [current parent node, -1] when not after dot directly
	 */
	protected isAfterDotDirectly(recognition: AstRecognition): [GroovyAstNode, number] {
		const {astRecognizer} = recognition;
		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		for (let index = children.length - 1; index >= 0; --index) {
			const previousSiblingNode = children[index];
			const {tokenId: previousSiblingTokenId, tokenType: previousSiblingTokenType} = previousSiblingNode;
			if (previousSiblingTokenId === TokenId.NewLine
				|| previousSiblingTokenType === TokenType.WhitespaceOrTabs
				|| previousSiblingTokenType === TokenType.Comments) {
				continue;
			}
			if (previousSiblingTokenId === TokenId.Dot) {
				return [currentParent, index];
			}
		}

		// no previous sibling or all siblings are newline, whitespaces, tabs or comments
		return [currentParent, -1];
	}
}
