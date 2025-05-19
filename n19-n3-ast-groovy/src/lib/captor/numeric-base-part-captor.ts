import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {
	AstNodeCaptorCharCheck,
	AstNodeCaptorCharFuncCheck,
	AstNodeCaptorCharsCheckers,
	AstNodeCaptorCheckers
} from './captor';
import {Char} from './types';
import {AstChars} from './util';

/**
 * starts from "0-9", and following chars are "0-9", "_" or ".". "." could appear only once.
 */
export abstract class AbstractLtNumericBasePartCaptorStartsWithNumber extends AbstractAstNodeCaptor {
	private readonly _numericChecker: AstNodeCaptorCharCheck;

	protected constructor(number: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9') {
		super();
		this._numericChecker = number;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._numericChecker;
	}

	visit(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		// starts from next character
		let offset = offsetOfGiven + 1;
		let c = tokenizer.charAt(offset);
		let text = given;
		let hasDot = false;
		while (c != null) {
			if (c === AstChars.Dot) {
				if (hasDot) {
					break;
				} else {
					hasDot = true;
					const nc = tokenizer.charAt(offset + 1);
					if ('0123456789'.includes(c)) {
						offset += 2;
						text = text + AstChars.Dot + nc;
						c = tokenizer.charAt(offset);
					} else {
						// the next char after dot is not 0-9, which means the dot is a dot to get property or something
						// e.g. 1._1 means get _1 from 1, dot is not a decimal point in this case.
						break;
					}
				}
			} else if ('0123456789_'.includes(c)) {
				offset += 1;
				text = text + c;
				c = tokenizer.charAt(offset);
			} else {
				break;
			}
		}

		this.createAndAppendToAst(tokenizer, {
			tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
			text, startOffset: offsetOfGiven
		});
		// move cursor
		tokenizer.moveCursorTo(offset);
	}
}

export class LtNumericBasePartCaptorStartsWith0 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('0');
	}
}

export class LtNumericBasePartCaptorStartsWith1 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('1');
	}
}

export class LtNumericBasePartCaptorStartsWith2 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('2');
	}
}

export class LtNumericBasePartCaptorStartsWith3 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('3');
	}
}

export class LtNumericBasePartCaptorStartsWith4 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('4');
	}
}

export class LtNumericBasePartCaptorStartsWith5 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('5');
	}
}

export class LtNumericBasePartCaptorStartsWith6 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('6');
	}
}

export class LtNumericBasePartCaptorStartsWith7 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('7');
	}
}

export class LtNumericBasePartCaptorStartsWith8 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('8');
	}
}

export class LtNumericBasePartCaptorStartsWith9 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor() {
		super('9');
	}
}

/**
 * starts from ".", next char is "0-9", and following chars are "0-9" or "_".
 */
export class LtNumericBasePartCaptorStartsWithDot extends AbstractAstNodeCaptor {
	private readonly _numericChecker = (() => {
		const func: AstNodeCaptorCharFuncCheck = (char) => {
			return '0123456789'.includes(char);
		};
		func.describe = () => 'isNumeric';
		return func;
	})();
	private readonly _checkers: AstNodeCaptorCharsCheckers = [AstChars.Dot, this._numericChecker];

	checkers(): AstNodeCaptorCheckers {
		return this._checkers;
	}

	visit(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		// starts from next character
		let offset = offsetOfGiven + 1;
		let c = tokenizer.charAt(offset);
		let text = given;
		while (c != null) {
			if ('0123456789_'.includes(c)) {
				offset += 1;
			} else {
				break;
			}
			text = text + c;
			c = tokenizer.charAt(offset);
		}

		this.createAndAppendToAst(tokenizer, {
			tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
			text, startOffset: offsetOfGiven
		});
		// move cursor
		tokenizer.moveCursorTo(offset);
	}
}
