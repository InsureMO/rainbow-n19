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

	protected finalizeHighlightCharsSegments(statementNode: GroovyAstNode, astRecognizer: AstRecognizer): void {
		if (!astRecognizer.isMultipleLinesCommentHighlightEnabled) {
			return;
		}
		// ignore the start mark
		const [, ...restNodes] = statementNode.children;
		if (restNodes.length === 0) {
			return;
		}
		let hasCommentKeyword = false;
		let firstCharsNode: Optional<GroovyAstNode> = (void 0);
		let firstCharsNodeIndex: Optional<number> = (void 0);
		for (let index = 0, count = restNodes.length; index < count; index++) {
			const node = restNodes[index];
			if (node.tokenId === TokenId.CommentKeyword) {
				statementNode.attrs('highlightColumn', node.startColumn);
				hasCommentKeyword = true;
				break;
			} else if (node.tokenId === TokenId.Chars) {
				firstCharsNode = firstCharsNode ?? node;
				firstCharsNodeIndex = firstCharsNodeIndex ?? index;
			}
		}

		if (hasCommentKeyword || firstCharsNode == null) {
			// has comment keyword, or no content found
			// no need to finalize highlight based on previous line
			return;
		}

		const childrenOfParent = statementNode.parent.children;
		let detectedNewLineCount = 0;
		let previousCommentsNode: Optional<GroovyAstNode> = (void 0);
		for (let index = childrenOfParent.length - 2; index >= 0; index--) {
			const previousNode = childrenOfParent[index];
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
		if (previousCommentsNode == null) {
			// no clingy comment node from previous siblings, do nothing
			return;
		}
		const highlightColumn = previousCommentsNode.attr<number>('highlightColumn');
		if (highlightColumn == null) {
			// previous comment node has no highlight
			return;
		}
		statementNode.attrs('highlightColumn', highlightColumn);
		// compare the start column
		if (firstCharsNode.startColumn > highlightColumn) {
			// change all chars node to highlight
			restNodes.slice(firstCharsNodeIndex).forEach(node => {
				if (node.tokenId === TokenId.Chars) {
					node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
				}
			});
		}
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {astRecognizer} = recognition;
		const [statementNode, nextNodeIndex] = this.createStatementAndGrabNodesTillNewLine(
			TokenId.SingleLineComment, TokenType.Comments,
			recognition, this.createNodeReviser(astRecognizer));
		this.finalizeHighlightCharsSegments(statementNode, astRecognizer);
		return nextNodeIndex;
	}
}
