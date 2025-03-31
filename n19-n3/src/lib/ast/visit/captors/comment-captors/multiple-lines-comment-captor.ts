import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '../../../ast-node';
import {
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	NewLineNode
} from '../../../node';
import {AstChars, AstMarks} from '../../chars';
import {Char} from '../../types';
import {EndMark} from '../abstract-end-marked-captor';
import {AbstractCommentCaptor} from './abstract-comment-captor';

export class MultipleLinesCommentCaptor extends AbstractCommentCaptor {
	attempt(char: Char, offset: number): boolean {
		return char === AstChars.SlashMark && this.charAt(offset + 1) === AstChars.AsteriskMark;
	}

	protected checkEndMark(char: Char, offset: number): Optional<EndMark> {
		if (char === AstChars.AsteriskMark && this.charAt(offset + 1) === AstChars.SlashMark) {
			return {
				endMark: AstMarks.MLCommentEndMark,
				startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + 2
			};
		} else {
			return (void 0);
		}
	}

	/**
	 * create a new line node, and return modified line content when the last char is "\r"
	 */
	protected createNewLineNode(line: string, presumptiveStartOffsetOfNewLine: number): [string, NewLineNode] {
		const lastChar = line[line.length - 1];
		if (lastChar === AstChars.CarriageReturn) {
			return [line.slice(0, -1), this.createAstNode(NewLineNode, {
				text: AstMarks.CarriageReturnNewLine, startOffset: presumptiveStartOffsetOfNewLine - 1
			})];
		} else {
			return [line, this.createAstNode(NewLineNode, {
				text: AstChars.NewLine, startOffset: presumptiveStartOffsetOfNewLine
			})];
		}
	}

	protected visitLine(line: string, startOffset: number, endOffset: number): Array<AstNode> {
		// check keyword
		const lineNodes = this.visitLineForKeyword(line, startOffset, endOffset);
		if (lineNodes.length !== 0) {
			return lineNodes;
		}
		// visit as normal text
		return this.visitNormalText(line, startOffset, endOffset);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected visitContent(content: string, startOffset: number, _endOffset: number): Array<AstNode> {
		const nodes: Array<AstNode> = [];

		let startOffsetOfLine = startOffset;
		const lines = content.split(AstChars.NewLine);
		for (let index = 0, count = lines.length; index < count; index++) {
			const line = lines[index];
			// no new line node for last line
			const [lineContent, newLineNode] = index === count - 1 ? [line, (void 0)] : this.createNewLineNode(line, startOffsetOfLine + line.length);
			// visit line content
			// line still might contains "\r"
			let startOffsetOfPart = startOffsetOfLine;
			const lineContents = lineContent.split(AstChars.CarriageReturn);
			for (let partIndex = 0, partCount = lineContents.length; partIndex < partCount; partIndex++) {
				const partOfLine = lineContents[partIndex];
				nodes.push(...this.visitLine(partOfLine, startOffsetOfPart, startOffsetOfPart + partOfLine.length));
				if (partIndex !== partCount - 1) {
					nodes.push(this.createAstNode(NewLineNode, {
						text: AstChars.CarriageReturn, startOffset: startOffsetOfPart + partOfLine.length
					}));
					// treat single carriage return as a new line, not just move cursor to head of line
					this.moveToNextLine();
				}
				startOffsetOfPart = startOffsetOfPart + partOfLine.length + 1;
			}

			if (newLineNode != null) {
				nodes.push(newLineNode);
				this.moveToNextLine();
			}
			startOffsetOfLine = startOffsetOfLine + line.length + 1;
		}

		return nodes;
	}

	visit(_char: Char, offset: number): boolean {
		// capture any chars until a "\r" or "\n"
		const {
			content, startOffsetOfContent, endOffsetOfContent,
			endMark, startOffsetOfEndMark,
			endOffsetOfAll
		} = this.contentAndEnd(offset + 2);

		// detect keywords
		const contentNodes = this.visitContent(content, startOffsetOfContent, endOffsetOfContent);

		const node = this.createAndAppendToAst(MultipleLinesCommentNode, {
			text: this.sliceText(offset, endOffsetOfAll), startOffset: offset
		});
		this.createAndAppendToAst(MultipleLinesCommentStartMarkNode, {
			text: AstMarks.MLCommentStartMark, startOffset: offset
		});
		contentNodes.forEach(node => this.appendToAst(node));
		if (endMark != null) {
			// end mark found
			this.createAndAppendToAst(MultipleLinesCommentEndMarkNode, {
				text: AstMarks.MLCommentEndMark, startOffset: startOffsetOfEndMark
			});
		}
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfAll);
		return true;
	}
}
