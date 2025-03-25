import {ScriptCommandNode, ScriptCommandStartMarkNode} from '../../node';
import {AstChars, AstMarks} from '../chars';
import {Char} from '../types';
import {AbstractEndMarkedWithNewLineCaptor} from './abstract-end-marked-captor';

/**
 * first line of document, and starts with "#!"
 */
export class ScriptCommandCaptor extends AbstractEndMarkedWithNewLineCaptor {
	attempt(char: Char): boolean {
		return char === AstChars.WellNumberMark;
	}

	visit(_char: Char, offset: number): boolean {
		if (offset !== 0) {
			return false;
		}
		const nextChar = this.charAt(offset + 1);
		if (nextChar !== AstChars.ExclamationMark) {
			return false;
		}

		// capture any chars until a "\r" or "\n"
		const {content, startOffsetOfContent, endOffsetOfContent} = this.contentAndEnd(offset + 2);
		const contentNodes = this.visitNormalText(content, startOffsetOfContent, endOffsetOfContent);

		const node = this.createAndAppendToAst(ScriptCommandNode, {
			text: this.sliceText(offset, endOffsetOfContent),
			startOffset: offset
		});
		this.createAndAppendToAst(ScriptCommandStartMarkNode, {
			text: AstMarks.ScriptCommandStartMark, startOffset: offset
		});
		contentNodes.forEach(contentNode => this.appendToAst(contentNode));
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfContent);
		return true;
	}
}
