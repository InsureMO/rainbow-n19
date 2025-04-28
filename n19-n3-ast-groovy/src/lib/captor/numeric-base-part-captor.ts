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

	protected constructor(number: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9', tokenizer: AstTokenizer) {
		super(tokenizer);
		this._numericChecker = number;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._numericChecker;
	}

	visit(given: Char, offsetOfGiven: number): void {
		// starts from next character
		let offset = offsetOfGiven + 1;
		let c = this.charAt(offset);
		let text = given;
		let hasDot = text.includes(AstChars.Dot);
		while (c != null) {
			if (c === AstChars.Dot) {
				if (hasDot) {
					break;
				} else {
					hasDot = true;
					offset += 1;
				}
			} else if ('0123456789_'.includes(c)) {
				offset += 1;
			} else {
				break;
			}
			text = text + c;
			c = this.charAt(offset);
		}

		this.createAndAppendToAst({
			tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
			text, startOffset: offsetOfGiven
		});
		// move cursor
		this.moveCursorTo(offset);
	}
}

export class LtNumericBasePartCaptorStartsWith0 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('0', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith1 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('1', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith2 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('2', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith3 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('3', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith4 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('4', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith5 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('5', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith6 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('6', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith7 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('7', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith8 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('8', tokenizer);
	}
}

export class LtNumericBasePartCaptorStartsWith9 extends AbstractLtNumericBasePartCaptorStartsWithNumber {
	constructor(tokenizer: AstTokenizer) {
		super('9', tokenizer);
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

	visit(given: Char, offsetOfGiven: number): void {
		// starts from next character
		let offset = offsetOfGiven + 1;
		let c = this.charAt(offset);
		let text = given;
		while (c != null) {
			if ('0123456789_'.includes(c)) {
				offset += 1;
			} else {
				break;
			}
			text = text + c;
			c = this.charAt(offset);
		}

		this.createAndAppendToAst({
			tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
			text, startOffset: offsetOfGiven
		});
		// move cursor
		this.moveCursorTo(offset);
	}
}
