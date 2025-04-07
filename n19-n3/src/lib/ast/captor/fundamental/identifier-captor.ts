import {IdentifierNode} from '../../node';
import {AbstractAstNodeCaptor} from '../abstract';
import {AstNodeCaptorCharFuncCheck, AstNodeCaptorCheckers} from '../captor';
import {Character} from '../character';
import {Char} from '../types';

/**
 * accept any char, so must be the last captor.
 */
export class IdentifierCaptor extends AbstractAstNodeCaptor {
	private readonly _checker: AstNodeCaptorCharFuncCheck = (char) => {
		return Character.isJavaIdentifierPartAndNotIdentifierIgnorable(char.codePointAt(0));
	};

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
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
