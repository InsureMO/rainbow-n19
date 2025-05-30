import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {NodeAttributeOperator, OnNodeClosedFunc} from '../node-attribute';

export class SingleLineCommentPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly finalizeSingleLineCommentHighlighting: OnNodeClosedFunc = (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		// ignore the start mark
		const [, ...restNodes] = node.children;
		if (restNodes.length === 0) {
			return;
		}
		let hasCommentKeyword = false;
		let firstCharsNode: Optional<GroovyAstNode> = (void 0);
		let firstCharsNodeIndex: Optional<number> = (void 0);
		for (let index = 0, count = restNodes.length; index < count; index++) {
			const childNode = restNodes[index];
			if (childNode.tokenType === TokenType.WhitespaceOrTabs) {
				// do nothing
			} else if (!hasCommentKeyword && childNode.tokenId === TokenId.CommentKeyword) {
				// find first keyword only
				NodeAttributeOperator.SLCommentHighlightColumn.set(node, childNode.startColumn);
				hasCommentKeyword = true;
			} else if (hasCommentKeyword) {
				childNode.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
			} else if (childNode.tokenId === TokenId.Chars || childNode.tokenId === TokenId.CommentKeyword) {
				// chars and keyword (not first)
				firstCharsNode = firstCharsNode ?? childNode;
				firstCharsNodeIndex = firstCharsNodeIndex ?? index;
			}
		}

		if (hasCommentKeyword || firstCharsNode == null) {
			// has comment keyword, or no content found
			// no need to finalize highlight based on previous line
			return;
		}

		if (!astRecognizer.isMultipleLinesCommentHighlightEnabled) {
			return;
		}

		const childrenOfParent = node.parent.children;
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
		const highlightColumn = NodeAttributeOperator.SLCommentHighlightColumn.get(previousCommentsNode);
		if (highlightColumn == null) {
			// previous comment node has no highlight
			return;
		}
		NodeAttributeOperator.SLCommentHighlightColumn.set(node, highlightColumn);
		// compare the start column
		if (firstCharsNode.startColumn > highlightColumn) {
			// change all chars node to highlight
			restNodes.slice(firstCharsNodeIndex).forEach(node => {
				if (node.tokenId === TokenId.Chars) {
					node.replaceTokenNature(TokenId.CommentHighlightChars, TokenType.Chars);
				}
			});
		}
	};
}
