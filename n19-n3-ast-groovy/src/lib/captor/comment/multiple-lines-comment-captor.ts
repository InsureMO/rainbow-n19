import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '@rainbow-n19/n3-ast';
import {
	MultipleLinesCommentEndMarkNode,
	MultipleLinesCommentNode,
	MultipleLinesCommentStartMarkNode,
	MultipleNode,
	NewLineNode
} from '../../node';
import {EndMark} from '../abstract';
import {AstNodeCaptorCheckers} from '../captor';
import {Char} from '../types';
import {AstChars, AstMarks} from '../util';
import {AbstractCommentCaptor} from './abstract-comment-captor';

export class MultipleLinesCommentCaptor extends AbstractCommentCaptor {
	protected checkEndMark(char: Char, offset: number): Optional<EndMark> {
		return this.checkEndMarkIsChars(char, offset, [AstChars.Asterisk, AstChars.Slash], AstMarks.MLCommentEnd);
	}

	checkers(): AstNodeCaptorCheckers {
		return [AstChars.Slash, AstChars.Asterisk];
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
		if (line.trim().startsWith(AstChars.Asterisk)) {
			// only the first "*" will be treated as asterisk mark
			const parts = line.split(AstChars.Asterisk, 2);
			return [
				...this.visitNormalText(parts[0], startOffset, startOffset + parts[0].length),
				this.createAstNode(MultipleNode, {
					text: AstChars.Asterisk, startOffset: startOffset + parts[0].length
				}),
				...this.visitNormalText(parts[1], startOffset + parts[0].length + 1, endOffset)
			];
		} else {
			// visit as normal text
			return this.visitNormalText(line, startOffset, endOffset);
		}
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

		const node = this.createAndAppendToAst(MultipleLinesCommentNode, {startOffset: offset});
		this.createAndAppendToAst(MultipleLinesCommentStartMarkNode, {
			text: AstMarks.MLCommentStart, startOffset: offset
		});
		contentNodes.forEach(node => this.appendToAst(node));
		if (endMark != null) {
			// end mark found
			this.createAndAppendToAst(MultipleLinesCommentEndMarkNode, {
				text: AstMarks.MLCommentEnd, startOffset: startOffsetOfEndMark
			});
		}
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfAll);
		return true;
	}
}
