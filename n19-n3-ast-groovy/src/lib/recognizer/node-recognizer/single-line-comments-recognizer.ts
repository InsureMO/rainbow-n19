import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {AstRecognition} from '../types';
import {AbstractCommentsRecognizer, CommentsReviseSituation} from './abstract-comments-recognizer';
import {NodeReviseFunc, NodeReviseResult} from './abstract-recognizer';

export class SingleLineCommentsRecognizer extends AbstractCommentsRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.SingleLineCommentStartMark;
	}

	protected createNodeReviser(astRecognizer: AstRecognizer): NodeReviseFunc {
		return (situation: CommentsReviseSituation): NodeReviseResult => {
			const {node} = situation;
			if (node.tokenType === TokenType.WhitespaceOrTabs) {
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

	protected finalizeHighlightCharsSegments(statementNode: GroovyAstNode): void {
		// ignore the start mark
		const [, ...restNodes] = statementNode.children;
		if (restNodes.length === 0) {
			return;
		}
		let hasCommentKeyword = false;
		let firstCharsNode: Optional<GroovyAstNode>;
		let firstCharsNodeIndex: number = -1;
		for (let index = 0, count = restNodes.length; index < count; index++) {
			const node = restNodes[index];
			if (node.tokenId === TokenId.CommentKeyword) {
				hasCommentKeyword = true;
				break;
			} else if (node.tokenId === TokenId.Chars) {
				firstCharsNode = node;
				firstCharsNodeIndex = index;
			}
		}
		if (hasCommentKeyword) {
			// has comment keyword, no need to finalize highlight based on previous line
			return;
		}

		const previousSiblingsOfStatementNode = statementNode.previousSiblings;
		let detectedNewLineCount = 0;
		let previousCommentsNode: Optional<GroovyAstNode>;
		for (let index = previousSiblingsOfStatementNode.length - 1; index >= 0; index--) {
			const previousNode = previousSiblingsOfStatementNode[index];
			if (previousNode.tokenId === TokenId.SingleLineComment) {
				previousCommentsNode = previousNode;
				break;
			} else if (previousNode.tokenId === TokenId.NewLine) {
				detectedNewLineCount += 1;
				if (detectedNewLineCount === 2) {
					break;
				}
			}
		}
		if (detectedNewLineCount === 2) {
			// no comment node on previous line, do nothing
			return;
		}
		if (previousCommentsNode == null) {
			// no comment node from previous siblings, do nothing
			return;
		}
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;
		const [statementNode, nextNodeIndex] = this.createStatementAndGrabNodesTillNewLine(
			TokenId.SingleLineComment, TokenType.Comments,
			node, nodeIndex, nodes,
			astRecognizer, this.createNodeReviser(astRecognizer));
		this.finalizeHighlightCharsSegments(statementNode);
		return nextNodeIndex;
	}
}
