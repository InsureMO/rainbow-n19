import {IdentifierNode} from '../../node';
import {Character} from '../chars';
import {Char} from '../types';
import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';

/**
 * accept any char, so must be the last captor.
 */
export class IdentifierCaptor extends AbstractAstNodeCaptor {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attempt(char: Char, _offset: number): boolean {
		return Character.isJavaIdentifierPartAndNotIdentifierIgnorable(char.codePointAt(0));
	}

	visit(given: Char, offsetOfGiven: number): boolean {
		// starts from next character
		const startOffset = offsetOfGiven + 1;
		let offset = startOffset;
		let c = this.charAt(offset);
		while (c != null && Character.isJavaIdentifierPartAndNotIdentifierIgnorable(c.codePointAt(0))) {
			offset += 1;
			c = this.charAt(offset);
		}

		if (offset === startOffset) {
			// no more char allowed as java identifier part found
			this.createAndAppendToAst(IdentifierNode, {text: given, startOffset: offsetOfGiven});
		} else {
			// gather all consecutive characters that are allowed to be part of java identifier.
			this.createAndAppendToAst(IdentifierNode, {
				text: this.sliceText(offsetOfGiven, offset), startOffset: offsetOfGiven
			});
		}

		// move cursor
		this.moveCursorTo(offset);
		return true;
	}
}
