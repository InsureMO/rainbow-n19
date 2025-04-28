import {NumericBasePartNode} from '../node';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstNodeCaptorCharFuncCheck, AstNodeCaptorCharsCheckers, AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

/**
 * accept any char, so must be the last captor.
 */
export class LtNumericBasePartCaptor extends AbstractAstNodeCaptor {
	private readonly _numericChecker = (() => {
		const func: AstNodeCaptorCharFuncCheck = (char) => {
			return '0123456789'.includes(char);
		};
		func.describe = () => 'isNumeric';
		return func;
	})();
	private readonly _checkers: AstNodeCaptorCharsCheckers = [
		[this._numericChecker],
		['.', this._numericChecker]
	];

	checkers(): AstNodeCaptorCheckers {
		return this._checkers;
	}

	visit(given: Char, offsetOfGiven: number): boolean {
		// starts from next character
		let offset = offsetOfGiven + 1;
		let c = this.charAt(offset);
		let text = given;
		let hasDot = text.includes('.');
		while (c != null) {
			if (c === '.') {
				if (hasDot) {
					break;
				} else {
					hasDot = true;
					offset += 1;
				}
			} else if ('0123456789'.includes(c)) {
				offset += 1;
			} else {
				break;
			}
			text = text + c;
			c = this.charAt(offset);
		}

		this.createAndAppendToAst(NumericBasePartNode, {text, startOffset: offsetOfGiven});
		// move cursor
		this.moveCursorTo(offset);
		return true;
	}
}
