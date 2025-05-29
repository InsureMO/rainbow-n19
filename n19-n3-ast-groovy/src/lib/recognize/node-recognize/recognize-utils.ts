import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from './recognizer';
import {NodeAsParentDeclaration, NodeAsParentDeclarations, NodeAsParentsDeclaration} from './types';

export const NodeDeclareAsParent = {
	isNodeAsParentDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentDeclaration => {
		return !Array.isArray(d[0]);
	},
	isNodeAsParentsDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentsDeclaration => {
		return Array.isArray(d[0]);
	}
} as const;

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

export interface DeclareAsParentAndGrabNodesTillOptions {
	/** token id of parent node to create */
	parentTokenId: TokenId;
	/** token type of parent node to create */
	parentTokenType: TokenType;
	/** grab original nodes till this token id appears */
	tillTokenId: TokenId;
	/** grab till token node or not */
	includeTillToken: boolean;
	/** function to revise grabbed nodes, from node starts from nodeIndex + 1 (include), ends by till token node (exclude) */
	reviseGrabbedNode?: NodeReviseFunc;
	recognition: AstRecognition;
}

export interface CommentsNodeReviseSituation extends NodeReviseSituation {
	keywordFound?: boolean;
}

export class NodeRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static isSealedKeywordNotSupported(recognition: AstRecognition): boolean {
		return !recognition.astRecognizer.isSealedClassSupported;
	}

	static isRecordKeywordNotSupported(recognition: AstRecognition): boolean {
		return !recognition.astRecognizer.isRecordClassSupported;
	}

	static isNonSealedKeywordNotSupported(recognition: AstRecognition): boolean {
		return !recognition.astRecognizer.isNonSealedKeywordSupported;
	}

	static parentTokenTypeIsStringLiteral(recognition: AstRecognition): boolean {
		return recognition.astRecognizer.getCurrentParent().tokenType === TokenType.StringLiteral;
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
	static getNearestPreviousDotNode(recognition: AstRecognition): [GroovyAstNode, number] {
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

	static isDirectAfterDot(recognition: AstRecognition): boolean {
		const [, dotNodeIndex] = NodeRecognizeUtils.getNearestPreviousDotNode(recognition);
		return dotNodeIndex !== -1;
	}

	static reviseNodeToCharsWhenNotWhitespacesOrTabsBeforeAppendToParent(situation: NodeReviseSituation): NodeReviseResult {
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
	 */
	static createParentAndGrabNodesTill(options: DeclareAsParentAndGrabNodesTillOptions): [GroovyAstNode, number] {
		const {parentTokenId, parentTokenType, tillTokenId, includeTillToken, reviseGrabbedNode, recognition} = options;
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const situation: Partial<NodeReviseSituation> = {grabbedNodes: [], nodes};
		const statementNode = new GroovyAstNode({
			tokenId: parentTokenId, tokenType: parentTokenType,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		astRecognizer.appendAsCurrentParent(statementNode);
		statementNode.asParentOf(node);
		situation.grabbedNodes.push(node);
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
					astRecognizer.appendAsLeafAndTryToMerge(node);
					situation.grabbedNodes.push(node);
				});
				nextNodeIndex = nextNodeIndex + revisedResult.consumedNodeCount;
				nextNode = nodes[nextNodeIndex];
			} else {
				if (includeTillToken) {
					astRecognizer.appendAsLeafAndTryToMerge(nextNode);
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
	 */
	static createParentAndGrabNodesTillNewLine(options: Omit<DeclareAsParentAndGrabNodesTillOptions, 'tillTokenId' | 'includeTillToken'>): [GroovyAstNode, number] {
		const {parentTokenId, parentTokenType, reviseGrabbedNode, recognition} = options;
		return this.createParentAndGrabNodesTill({
			parentTokenId, parentTokenType,
			tillTokenId: TokenId.NewLine, includeTillToken: false,
			reviseGrabbedNode,
			recognition
		});
	}

	static matchCommentKeyword(situation: CommentsNodeReviseSituation, astRecognizer: AstRecognizer): ReturnType<NodeReviseFunc> {
		const {node} = situation;
		const {minLength, available} = astRecognizer.commentKeywords;

		const {text} = node;
		const textLength = text.length;
		if (textLength < minLength) {
			// not a comment keyword
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return {revisedNodes: [node], consumedNodeCount: 1};
		}
		let matched = false;
		const keywords = available(textLength);
		for (const {keyword, caseSensitive} of keywords) {
			matched = caseSensitive ? (keyword === text) : (keyword === text.toLowerCase());
			if (matched) {
				break;
			}
		}
		if (matched) {
			node.replaceTokenNature(TokenId.CommentKeyword, TokenType.Chars);
			situation.keywordFound = true;
		} else {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
		}
		return {revisedNodes: [node], consumedNodeCount: 1};
	}
}
