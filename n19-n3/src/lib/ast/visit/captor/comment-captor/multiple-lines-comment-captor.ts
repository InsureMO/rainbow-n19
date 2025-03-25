import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '../../../ast-node';
import {
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	NewLineNode
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

	protected visitContent(content: string, startOffset: number, endOffset: number): Array<AstNode> {
		const nodes: Array<AstNode> = [];

		let startOffsetOfLine = startOffset;
		const lines = content.split(AstChars.NewLine);
		for (let index = 0, count = lines.length; index < count; index++) {
			let lastNode: Optional<NewLineNode>;
			let line = lines[index];
			let lengthOfLine = line.length;
			let endOffsetOfLine = startOffsetOfLine + lengthOfLine + 1;
			// check the last char of line
			if (line[lengthOfLine - 1] === AstChars.CarriageReturn) {
				lastNode = this.createAstNode(NewLineNode, {
					text: (index === count - 1) ? AstChars.CarriageReturn : AstTexts.CarriageReturnNewLine,
					startOffset: endOffsetOfLine - ((index === count - 1) ? 1 : 2)
				});
				line = line.slice(0, -1);
				lengthOfLine = lengthOfLine - 1;
			} else if (index !== count - 1) {
				lastNode = this.createAstNode(NewLineNode, {
					text: AstChars.NewLine,
					startOffset: endOffsetOfLine - 1
				});
			}

			// check keyword
			let lineNodes = this.visitLineForKeyword(content, startOffset, endOffset);
			if (lineNodes.length === 0) {
				// visit as normal text
				lineNodes = this.visitNormalText(content, startOffset, endOffset);
			}
			nodes.push(...lineNodes);
			if (lastNode != null) {
				nodes.push(lastNode);
				this.increaseLine();
			}
		}

		return nodes;
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

		// detect keywords
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
