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

	static reviseNodeToCharsWhenNotWhitespacesOrTabsBeforeAppendToStatement(situation: NodeReviseSituation): NodeReviseResult {
		const {node} = situation;
		if (node.tokenType !== TokenType.WhitespaceOrTabs) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
		}
		return {revisedNodes: [node], consumedNodeCount: 1};
	}

	/**
	 * create statement node, grab following nodes till new line.
	 * The given original node and the nodes following it till node with given till token id,
	 * are processed by the revise function and then added to the created statement node.
	 * returns the created statement node, and node index of the next node waiting to be processed.
	 *
	 * @param statementTokenId token id of statement to create
	 * @param statementTokenType token type of statement to create
	 * @param recognition ast recognition
	 * @param tillTokenId grab original node till this token id appears
	 * @param includeTillToken grab till token node or not
	 * @param reviseGrabbedNode function to revise grabbed nodes, from node starts from nodeIndex + 1 (include), ends by till token node (exclude)
	 */
	protected createStatementAndGrabNodesTill(
		statementTokenId: TokenId, statementTokenType: TokenType,
		recognition: AstRecognition,
		tillTokenId: TokenId, includeTillToken: boolean,
		reviseGrabbedNode?: NodeReviseFunc): [GroovyAstNode, number] {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const situation: Partial<NodeReviseSituation> = {grabbedNodes: [], nodes};
		const statementNode = new GroovyAstNode({
			tokenId: statementTokenId, tokenType: statementTokenType,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		statementNode.asParentOf(node);
		situation.grabbedNodes.push(node);
		astRecognizer.createParent(statementNode);
		let latestNode = node;
		let nextNodeIndex = nodeIndex + 1;
		let nextNode = nodes[nextNodeIndex];
		while (nextNode != null) {
			if (nextNode.tokenId !== tillTokenId) {
				situation.node = nextNode;
				situation.nodeIndex = nextNodeIndex;
				const revisedResult = reviseGrabbedNode == null
					? {revisedNodes: [nextNode], consumedNodeCount: 1} as NodeReviseResult
					: reviseGrabbedNode(situation as NodeReviseSituation);
				revisedResult.revisedNodes.forEach(node => {
					latestNode = latestNode.append(node);
					situation.grabbedNodes.push(node);
				});
				nextNodeIndex = nextNodeIndex + revisedResult.consumedNodeCount;
				nextNode = nodes[nextNodeIndex];
			} else {
				if (includeTillToken) {
					latestNode.append(nextNode);
					nextNodeIndex++;
				}
				break;
			}
		}
		astRecognizer.closeParent();
		return [statementNode, nextNodeIndex];
	}

	/**
	 * create statement node,
	 * The given original node and the nodes following it till new line node,
	 * are processed by the revise function and then added to the created statement node.
	 * returns the created statement node, and node index of the next node waiting to be processed.
	 *
	 * @param statementTokenId token id of statement to create
	 * @param statementTokenType token type of statement to create
	 * @param recognition ast recognition
	 * @param reviseGrabbedNode function to revise grabbed nodes, from node starts from nodeIndex + 1 (include), ends by new line node (exclude)
	 */
	protected createStatementAndGrabNodesTillNewLine(
		statementTokenId: TokenId, statementTokenType: TokenType,
		recognition: AstRecognition,
		reviseGrabbedNode?: NodeReviseFunc): [GroovyAstNode, number] {
		return this.createStatementAndGrabNodesTill(statementTokenId, statementTokenType, recognition, TokenId.NewLine, false, reviseGrabbedNode);
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
