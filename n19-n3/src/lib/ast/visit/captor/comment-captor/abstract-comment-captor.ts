import {AstNode} from '../../../ast-node';
import {CommentHighlightContentNode, CommentHighlightKeywordNode, TextNode} from '../../../node';
import {AbstractEndMarkedWithNewLineCaptor} from '../abstract-end-marked-captor';

export abstract class AbstractCommentCaptor extends AbstractEndMarkedWithNewLineCaptor {
	/**
	 * returns empty array when no keyword determined.
	 * line must not include \r or \n
	 */
	protected visitLineForKeyword(line: string, startOffset: number, endOffset: number): Array<AstNode> {
		const length = line.length;
		const {minLength, available} = this.getCommentKeywords();
		if (length < minLength) {
			return [];
		}

		const nodes: Array<AstNode> = [];

		// get available keywords
		const keywords = available(length);
		// find first matched keyword
		for (const {pattern, keywordLength} of keywords) {
			const matched = pattern.exec(line);
			if (matched != null) {
				const index = matched.index;
				if (index !== 0) {
					// text before keyword
					nodes.push(this.createAstNode(TextNode, {text: line.slice(0, index), startOffset: startOffset}));
				}
				// highlight keyword
				nodes.push(this.createAstNode(CommentHighlightKeywordNode, {
					text: line.slice(index, index + keywordLength), startOffset: startOffset + index
				}));
				// highlight content
				if (startOffset + index + keywordLength < endOffset) {
					nodes.push(this.createAstNode(CommentHighlightContentNode, {
						text: line.slice(index + keywordLength), startOffset: startOffset + index + keywordLength
					}));
				}
				// break for loop, only one keyword for a single line
				break;
			}
		}

		return nodes;
	}

	protected abstract visitForMultipleLinesHighlight(content: string, startOffset: number, endOffset: number): Array<AstNode>;
}
