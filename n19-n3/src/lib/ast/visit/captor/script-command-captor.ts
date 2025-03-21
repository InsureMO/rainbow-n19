import {Optional} from '@rainbow-n19/n2';
import {ScriptCommandContentNode, ScriptCommandHeadNode, ScriptCommandNode} from '../../node';
import {AstChars} from '../chars';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

/**
 * first line of document, and starts with "#!"
 */
export class ScriptCommandCaptor extends AbstractCharSequenceCaptor {
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

		const headNode = new ScriptCommandHeadNode({text: '#!', startOffset: offset});

		// capture any chars until a "\r" or "\n"
		const contentStartOffset = offset + 2;
		let contentCharOffset = contentStartOffset;
		let contentChar = this.charAt(contentCharOffset);
		while (contentChar !== AstChars.NewLine && contentChar !== AstChars.CarriageReturn) {
			contentCharOffset += 1;
			contentChar = this.charAt(contentCharOffset);
		}

		let contentNode: Optional<ScriptCommandContentNode> = (void 0);
		if (contentCharOffset === contentStartOffset) {
			// no content
		} else {
			contentNode = new ScriptCommandContentNode({
				text: this.sliceText(contentStartOffset, contentCharOffset),
				startOffset: contentStartOffset
			});
		}

		const node = new ScriptCommandNode({text: this.sliceText(offset, contentCharOffset), startOffset: offset});
		this.appendToAst(node);
		this.appendToAst(headNode);
		this.appendToAst(contentNode);

		// move cursor
		this.moveCursorTo(contentCharOffset);
		return true;
	}
}