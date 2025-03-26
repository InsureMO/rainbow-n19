import {ScriptCommandNode, ScriptCommandStartMarkNode} from '../../node';
import {AstChars, AstMarks} from '../chars';
import {Char} from '../types';
import {AbstractEndMarkedWithNewLineCaptor} from './abstract-end-marked-captor';

/**
 * first line of document, and starts with "#!"
 */
export class ScriptCommandCaptor extends AbstractEndMarkedWithNewLineCaptor {
	attempt(char: Char, offset: number): boolean {
		return offset === 0 && char === AstChars.WellNumberMark && this.charAt(offset + 1) === AstChars.ExclamationMark;
	}

	visit(_char: Char, offset: number): boolean {
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
