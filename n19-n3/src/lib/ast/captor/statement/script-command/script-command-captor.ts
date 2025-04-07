import {Optional} from '@rainbow-n19/n2';
import {ScriptCommandNode, ScriptCommandStartMarkNode} from '../../../node';
import {AbstractEndMarkedCaptor, EndMark} from '../../abstract';
import {AstNodeCaptorCheckers} from '../../captor';
import {Char} from '../../types';
import {AstChars, AstMarks} from '../../util';

/**
 * first line of document, and starts with "#!"
 */
export class ScriptCommandCaptor extends AbstractEndMarkedCaptor {
	protected checkEndMark(char: Char, offset: number): Optional<EndMark> {
		return this.checkEndMarkIsNewLine(char, offset);
	}

	checkers(): AstNodeCaptorCheckers {
		return [AstChars.WellNumber, AstChars.Exclamation];
	}

	visit(_char: Char, offset: number): boolean {
		// capture any chars until a "\r" or "\n"
		const {content, startOffsetOfContent, endOffsetOfContent} = this.contentAndEnd(offset + 2);
		const contentNodes = this.visitNormalText(content, startOffsetOfContent, endOffsetOfContent);

		const node = this.createAndAppendToAst(ScriptCommandNode, {startOffset: offset});
		this.createAndAppendToAst(ScriptCommandStartMarkNode, {
			text: AstMarks.ScriptCommandStart, startOffset: offset
		});
		contentNodes.forEach(contentNode => this.appendToAst(contentNode));
		node.close();

		// move cursor
		this.moveCursorTo(endOffsetOfContent);
		return true;
	}
}
