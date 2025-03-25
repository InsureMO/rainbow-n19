import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '../../../ast-node';
import {
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode
} from '../../../node';
import {AstChars, AstTexts} from '../../chars';
import {Char} from '../../types';
import {EndMark} from '../abstract-end-marked-captor';
import {AbstractCommentCaptor} from './abstract-comment-captor';

export class MultipleLinesCommentCaptor extends AbstractCommentCaptor {
	attempt(char: Char): boolean {
		return char === AstChars.SlashMark;
	}

	protected checkEndMark(char: Char, offset: number): Optional<EndMark> {
		if (char === AstChars.AsteriskMark && this.charAt(offset + 1) === AstChars.SlashMark) {
			return {
				endMark: AstTexts.MLCommentEndMark,
				startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + 2
			};
		} else {
			return (void 0);
		}
	}

	protected visitForMultipleLinesHighlight(content: string, startOffset: number, endOffset: number): Array<AstNode> {
		// TODO
		return [];
	}

	protected visitContent(content: string, startOffset: number, endOffset: number): Array<AstNode> {
		const contentNodes: Array<AstNode> = [];
		const {minLength, available} = this.getCommentKeywords();

		const lines = content.split('\n');
		for (let index = 0, count = lines.length; index < count; index++) {
			const line = lines[index];
			const lineLength = line.length;
			let hasKeyword = false;
			const lineNodes = [];
			if (lineLength >= minLength) {

			}
			if (!hasKeyword) {
				// to check this line is the continued line of previous or not
			}
		}

		return contentNodes;
	}

	visit(_char: Char, offset: number): boolean {
		const nextChar = this.charAt(offset + 1);
		if (nextChar !== AstChars.AsteriskMark) {
			return false;
		}

		// capture any chars until a "\r" or "\n"
		const {
			content, startOffsetOfContent, endOffsetOfContent,
			endMark, startOffsetOfEndMark,
			endOffsetOfAll
		} = this.contentAndEnd(offset + 2);

		// detect highlight keywords
		const contentNodes = this.visitContent(content, startOffsetOfContent, endOffsetOfContent);

		const node = this.createAndAppendToAst(MultipleLinesCommentNode, {
			text: this.sliceText(offset, endOffsetOfAll),
			startOffset: offset
		});
		this.createAndAppendToAst(MultipleLinesCommentStartMarkNode, {
			text: AstTexts.MLCommentStartMark, startOffset: offset
		});
		contentNodes.forEach(node => this.appendToAst(node));
		if (endMark != null) {
			// end mark found
			this.createAndAppendToAst(MultipleLinesCommentEndMarkNode, {
				text: AstTexts.MLCommentEndMark, startOffset: startOffsetOfEndMark
			});
		}
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfAll);
		return true;
	}
}
