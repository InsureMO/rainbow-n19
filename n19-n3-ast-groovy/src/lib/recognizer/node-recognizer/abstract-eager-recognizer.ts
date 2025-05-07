import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {NodeReviseFunc, NodeReviseResult, NodeReviseSituation} from './abstract-recognizer';
import {AbstractSceneBasedRecognizer} from './abstract-scene-based-recognizer';

/**
 * Collect nodes eagerly until the specified node appears.
 */
export abstract class AbstractEagerRecognizer extends AbstractSceneBasedRecognizer {
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
	 * Note that the created statement node has been closed, and it no longer accepts new child nodes.
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
		astRecognizer.appendAsCurrentParent(statementNode);
		statementNode.asParentOf(node);
		situation.grabbedNodes.push(node);
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
					latestNode = AbstractEagerRecognizer.appendToPreviousSibling(node, latestNode);
					situation.grabbedNodes.push(node);
				});
				nextNodeIndex = nextNodeIndex + revisedResult.consumedNodeCount;
				nextNode = nodes[nextNodeIndex];
			} else {
				if (includeTillToken) {
					AbstractEagerRecognizer.appendToPreviousSibling(nextNode, latestNode);
					nextNodeIndex++;
				}
				break;
			}
		}
		astRecognizer.closeCurrentParent();
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
}