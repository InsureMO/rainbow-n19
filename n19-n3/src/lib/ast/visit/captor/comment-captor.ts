import {AstNode} from '../../ast-node';
import {
	CommentHighlightContentNode,
	CommentHighlightKeywordNode,
	SingleLineCommentNode,
	SingleLineCommentStartMarkNode,
	TextNode
} from '../../node';
import {AstChars} from '../chars';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

export class SingleLineCommentCaptor extends AbstractCharSequenceCaptor {
	attempt(char: Char): boolean {
		return char === AstChars.SlashMark;
	}

	visit(_char: Char, offset: number): boolean {
		const nextChar = this.charAt(offset + 1);
		if (nextChar !== AstChars.SlashMark) {
			return false;
		}

		const startMarkNode = new SingleLineCommentStartMarkNode({text: '//', startOffset: offset});

		// capture any chars until a "\r" or "\n"
		const contentStartOffset = offset + 2;
		let contentCharOffset = contentStartOffset;
		let contentChar = this.charAt(contentCharOffset);
		while (!this.endOfLine(contentChar)) {
			contentCharOffset += 1;
			contentChar = this.charAt(contentCharOffset);
		}
		const content = this.sliceText(contentStartOffset, contentCharOffset);
		const contentLength = content.length;

		// detect highlight keywords
		const contentNodes: Array<AstNode> = [];
		const {minLength, available} = this.getCommentKeywords();
		if (contentLength >= minLength) {
			const keywords = available(contentLength);
			for (const {pattern, keywordLength} of keywords) {
				const matched = pattern.exec(content);
				if (matched != null) {
					const index = matched.index;
					if (index !== 0) {
						// text before keyword
						contentNodes.push(new TextNode({
							text: content.slice(0, index),
							startOffset: contentStartOffset
						}));
					}
					// highlight keyword
					contentNodes.push(new CommentHighlightKeywordNode({
						text: content.slice(index, index + keywordLength),
						startOffset: contentStartOffset + index
					}));
					// highlight content
					if (contentStartOffset + index + keywordLength < contentCharOffset) {
						contentNodes.push(new CommentHighlightContentNode({
							text: content.slice(index + keywordLength),
							startOffset: contentStartOffset + index + keywordLength
						}));
					}
					// break for loop, only one keyword for a single line
					break;
				}
			}
		}

		const node = new SingleLineCommentNode({text: this.sliceText(offset, contentCharOffset), startOffset: offset});
		this.appendToAst(node);
		this.appendToAst(startMarkNode);
		contentNodes.forEach(node => this.appendToAst(node));

		// move cursor
		this.moveCursorTo(contentCharOffset);
		return true;
	}
}
