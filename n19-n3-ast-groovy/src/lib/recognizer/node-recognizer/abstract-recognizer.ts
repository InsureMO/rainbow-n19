import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
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
	 * the given node will be appended as first child of created statement node.
	 * all following nodes, except whitespace and tab, token nature will be reset to {@link TokenId.Chars}.
	 * returns the created statement node, and node index of the next node waiting to be processed.
	 */
	protected createStatementAndGrabNodesTill(
		statementTokenId: TokenId, statementTokenType: TokenType,
		node: GroovyAstNode, nodeIndex: number, nodes: Array<GroovyAstNode>,
		astRecognizer: AstRecognizer,
		tillTokenId: TokenId, includeTillToken: boolean,
		reviseGrabbedNode?: NodeReviseFunc): [GroovyAstNode, number] {
		const situation: Partial<NodeReviseSituation> = {grabbedNodes: [], nodes};
		const statementNode = new GroovyAstNode({
			tokenId: statementTokenId, tokenType: statementTokenType,
			text: '', startOffset: node.startOffset, startLine: node.startLine
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
	 * create statement node, grab following nodes till new line.
	 * the given node will be appended as first child of created statement node.
	 * all following nodes, except whitespace and tab, token nature will be reset to {@link TokenId.Chars}.
	 * returns the created statement node, and node index of the next node waiting to be processed.
	 */
	protected createStatementAndGrabNodesTillNewLine(
		statementTokenId: TokenId, statementTokenType: TokenType,
		node: GroovyAstNode, nodeIndex: number, nodes: Array<GroovyAstNode>,
		astRecognizer: AstRecognizer,
		reviseGrabbedNode?: NodeReviseFunc): [GroovyAstNode, number] {
		return this.createStatementAndGrabNodesTill(statementTokenId, statementTokenType, node, nodeIndex, nodes, astRecognizer, TokenId.NewLine, false, reviseGrabbedNode);
	}
}
