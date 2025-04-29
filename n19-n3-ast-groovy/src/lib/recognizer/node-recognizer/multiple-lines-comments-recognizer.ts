import {Optional} from '@rainbow-n19/n3-ast';
import {AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from '../types';
import {AbstractCommentsRecognizer, CommentsReviseSituation} from './abstract-comments-recognizer';
import {NodeReviseFunc, NodeReviseResult} from './abstract-recognizer';

export class MultipleLinesCommentsRecognizer extends AbstractCommentsRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.MultipleLinesCommentStartMark;
	}

	private splitStrToAsterisksAnd(str: string): [string, string] {
		const length = str.length;
		let index = 0;
		while (index < length && str[index] === AstOperators.Multiple) {
			index++;
		}
		return [str.slice(0, index), str.slice(index)];
	}

	protected tryToReviseToHeadAsterisks(situation: CommentsReviseSituation): Optional<NodeReviseResult> {
		const {grabbedNodes, node} = situation;

		let isFirstOfLine = true;
		const startLine = node.startLine;
		for (let index = grabbedNodes.length - 1; index >= 0; --index) {
			const previousNode = grabbedNodes[index];
			if (previousNode.startLine === startLine) {
				if (previousNode.tokenType !== TokenType.WhitespaceOrTabs) {
					isFirstOfLine = false;
					break;
				}
			} else {
				break;
			}
		}
		if (!isFirstOfLine) {
			return (void 0);
		}

		// and it is the first node of current line.
		// check the first char starts with "*" or not.
		// if starts with "*", split it and append a multiple node into statement
		const {text: nodeText} = node;
		if (!nodeText.startsWith(AstOperators.Multiple)) {
			return (void 0);
		}
		if (nodeText.length === 1 || node.tokenId === TokenId.Power) {
			// only asterisks in text, continue finding trailing nodes
			node.replaceTokenNature(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Comments);
			const revisedNodes = [node];
			let consumedNodeCount = 1;
			let nextNodeIndex = situation.nodeIndex + 1;
			let nextNode = situation.nodes[nextNodeIndex];
			let nextNodeText = nextNode?.text;
			while (nextNode != null && nextNodeText.startsWith(AstOperators.Multiple)) {
				consumedNodeCount++;
				if (nextNodeText.length === 1 || node.tokenId === TokenId.Power) {
					node.appendText(nextNodeText);
					// continue find next node
					nextNodeIndex++;
					nextNode = situation.nodes[nextNodeIndex];
					nextNodeText = nextNode?.text;
				} else {
					const [asterisks, leftStr] = this.splitStrToAsterisksAnd(nextNodeText);
					node.appendText(asterisks);
					revisedNodes.push(new GroovyAstNode({
						tokenId: TokenId.Chars, tokenType: TokenType.Chars,
						text: leftStr,
						startOffset: node.endOffset + 1, startLine: node.startLine
					}));
					break;
				}
			}

			return {revisedNodes, consumedNodeCount};
		}

		// text starts with asterisk, and ends with others
		// split to 2 nodes
		const [asterisks, leftStr] = this.splitStrToAsterisksAnd(nodeText);
		if (leftStr.length === 0) {
			node.replaceTokenNature(TokenId.MultipleLinesCommentsHeadAsterisks, TokenType.Comments);
			return {revisedNodes: [node], consumedNodeCount: 1};
		} else {
			// split to asterisks and chars, create 2 new node
			return {
				revisedNodes: [
					new GroovyAstNode({
						tokenId: TokenId.MultipleLinesCommentsHeadAsterisks, tokenType: TokenType.Comments,
						text: asterisks, startOffset: node.startOffset, startLine: node.startLine
					}),
					new GroovyAstNode({
						tokenId: TokenId.Chars, tokenType: TokenType.Chars,
						text: leftStr,
						startOffset: node.startOffset + asterisks.length, startLine: node.startLine
					})
				], consumedNodeCount: 1
			};
		}
	}

	protected createNodeReviser(astRecognizer: AstRecognizer): NodeReviseFunc {
		return (situation: CommentsReviseSituation): NodeReviseResult => {
			const {grabbedNodes, node} = situation;
			if (grabbedNodes.length !== 0 && grabbedNodes[grabbedNodes.length - 1].startLine !== node.startLine) {
				// line changed, reset keyword
				situation.keywordFound = false;
			}
			if (situation.keywordFound !== true) {
				const result = this.tryToReviseToHeadAsterisks(situation);
				if (result != null) {
					return result;
				}
			}
			const {tokenType} = node;
			if (tokenType === TokenType.WhitespaceOrTabs || tokenType === TokenType.NewLine) {
				return {revisedNodes: [node], consumedNodeCount: 1};
			}
			// ignore keyword except first one
			if (situation.keywordFound === true) {
				node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
				return {revisedNodes: [node], consumedNodeCount: 1};
			}

			return this.matchCommentKeyword(situation, astRecognizer);
		};
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;
		const [, nextNodeIndex] = this.createStatementAndGrabNodesTill(
			TokenId.MultipleLinesComment, TokenType.Comments,
			node, nodeIndex, nodes,
			astRecognizer, TokenId.MultipleLinesCommentEndMark, true, this.createNodeReviser(astRecognizer));
		return nextNodeIndex;
	}
}
