import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCharCheck, AstNodeCaptorCharsCheckers, AstNodeCaptorCheckers} from './captor';
import {isNumeric} from './captor-func-checkers';
import {Char} from './types';
import {AstChars} from './util';

export abstract class AbstractLtNumericBasePartCaptor extends AbstractAstNodeCaptor {
	protected cutoffTrailingUnderscoreChars(text: string): string {
		let trailingUnderscoreCount = 0;
		for (let i = text.length - 1; i > 0; i--) {
			if (text[i] === '_') {
				trailingUnderscoreCount++;
			} else {
				break;
			}
		}
		return text.slice(0, -trailingUnderscoreCount);
	}

	/**
	 * binary number starts with "0b" or "0B",
	 * 1. only 0 & 1, 3rd char must be one of 0 or 1,
	 * 2. no dot,
	 * 3. no e/E,
	 * 4. cannot end with underscore,
	 * 5. suffix is one of iIlLgG,
	 * 6. suffix cannot after underscore directly,
	 * starts from offset + 2
	 */
	protected tryToVisitAsBinary(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		const char3 = tokenizer.charAt(offsetOfGiven + 2);
		if (char3 === '0' || char3 === '1') {
			// is binary, continue to visit
			let text = given + char3;
			let offset = offsetOfGiven + 3;
			let lastChar = char3;
			let char = tokenizer.charAt(offset);
			while (true) {
				if (char3 === '0' || char3 === '1' || char3 === '_') {
					offset = offset + 1;
					text = text + char;
					lastChar = char;
					char = tokenizer.charAt(offset);
				} else if ('iIlLgG'.includes(char)) {
					if (lastChar === '_') {
						// last char is underscore, which is not allowed
						break;
					} else {
						// suffix found, end
						offset = offset + 1;
						text = text + char;
						break;
					}
				} else {
					break;
				}
			}
			text = this.cutoffTrailingUnderscoreChars(text);
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text, startOffset: offsetOfGiven
			});
			tokenizer.moveCursorTo(offset);
		} else {
			// not binary, just collect to first 0
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: given, startOffset: offsetOfGiven
			});
			tokenizer.moveCursorTo(offsetOfGiven + 1);
		}
	}

	/**
	 * hexadecimal number starts with "0x" or "0X",
	 * 1. only 0-9a-fA-F, 3rd char must be one of 0-9a-fA-F,
	 * 2. no dot,
	 * 3. no e/E,
	 * 4. cannot end with underscore,
	 * 5. suffix is one of iIlLgG,
	 * 6. suffix cannot after underscore directly,
	 * starts from offset + 2
	 */
	protected tryToVisitAsHexadecimal(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		const char3 = tokenizer.charAt(offsetOfGiven + 2);
		if ('0123456789abcdefABCDEF'.includes(char3)) {
			// is binary, continue to visit
			let text = given + char3;
			let offset = offsetOfGiven + 3;
			let lastChar = char3;
			let char = tokenizer.charAt(offset);
			while (true) {
				if ('0123456789abcdefABCDEF_'.includes(char)) {
					offset = offset + 1;
					text = text + char;
					lastChar = char;
					char = tokenizer.charAt(offset);
				} else if ('iIlLgG'.includes(char)) {
					if (lastChar === '_') {
						// last char is underscore, which is not allowed
						break;
					} else {
						// suffix found, end
						offset = offset + 1;
						text = text + char;
						break;
					}
				} else {
					break;
				}
			}
			text = this.cutoffTrailingUnderscoreChars(text);
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text, startOffset: offsetOfGiven
			});
			tokenizer.moveCursorTo(offset);
		} else {
			// not hexadecimal, just collect to first 0
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: given, startOffset: offsetOfGiven
			});
			tokenizer.moveCursorTo(offsetOfGiven + 1);
		}
	}

	/**
	 * 1. only 0-9,
	 * 2. zero or one dot,
	 * 3. zero or one e/E,
	 * 4. cannot end with dot or underscore,
	 * 5. underscore cannot around dot or e/E.
	 * 6. if there is one dot, suffix is one of fFdDgG; otherwise suffix is one of iIlLgG.
	 * starts with offset + 1
	 */
	protected tryToVisitAsDecimalOrOctal(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		let hasDot = given === AstChars.Dot;
		let hasExponent = false;

		// starts from next character
		let offset = offsetOfGiven + 1;
		let lastChar = given;
		let char = tokenizer.charAt(offset);
		let text = given;
		while (char != null) {
			if ('0123456789'.includes(char)) {
				offset += 1;
				text = text + char;
				lastChar = char;
				char = tokenizer.charAt(offset);
			} else if (char === '_') {
				if (lastChar === AstChars.Dot || lastChar === 'e' || lastChar === 'E') {
					break;
				} else {
					offset += 1;
					text = text + char;
					lastChar = char;
					char = tokenizer.charAt(offset);
				}
			} else if (char === AstChars.Dot) {
				if (hasDot) {
					break;
				} else if (lastChar === '_') {
					// last char is underscore, which is not allowed
					break;
				} else if (lastChar === 'e' || lastChar === 'E') {
					// last char is e or E, which is not allowed
					break;
				} else {
					hasDot = true;
					offset += 1;
					text = text + char;
					lastChar = char;
					char = tokenizer.charAt(offset);
				}
			} else if (char === 'e' || char === 'E') {
				if (hasExponent) {
					// has exponent already, which is not allowed
					break;
				} else if (lastChar === '_') {
					// last char is underscore, which is not allowed
					break;
				} else if (lastChar === AstChars.Dot) {
					// last char is dot, which is not allowed
					break;
				} else {
					hasExponent = true;
					offset += 1;
					text = text + char;
					lastChar = char;
					char = tokenizer.charAt(offset);
					if (char === '+' || char === '-') {
						offset += 1;
						text = text + char;
						lastChar = char;
						char = tokenizer.charAt(offset);
					}
				}
			} else if ('iIlL'.includes(char)) {
				if (lastChar === '_') {
					// last char is underscore, which is not allowed
					break;
				} else if (lastChar === AstChars.Dot) {
					// last char is dot, which is not allowed
					break;
				} else if (lastChar === 'e' || lastChar === 'E') {
					// last char is e or E, which is not allowed
					break;
				} else if (hasDot) {
					// has dot already, which is now allowed
					break;
				} else {
					// suffix found, end
					offset += 1;
					text = text + char;
					break;
				}
			} else if ('fFdDgG'.includes(char)) {
				if (lastChar === '_') {
					// last char is underscore, which is not allowed
					break;
				} else if (lastChar === AstChars.Dot) {
					// last char is dot, which is not allowed
					break;
				} else if (lastChar === 'e' || lastChar === 'E') {
					// last char is e or E, which is not allowed
					break;
				} else {
					// suffix found, end
					offset += 1;
					text = text + char;
					break;
				}
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

export abstract class AbstractLtNumericBasePartCaptorStartsWithNumber extends AbstractLtNumericBasePartCaptor {
	protected readonly _numericChecker: AstNodeCaptorCharCheck;

	protected constructor(number: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9') {
		super();
		this._numericChecker = number;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._numericChecker;
	}

	visit(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		if (given === '0') {
			const nextChar = tokenizer.charAt(offsetOfGiven + 1);
			if (nextChar === 'b' || nextChar === 'B') {
				// 0b or 0B, which is a binary number
				this.tryToVisitAsBinary(given, offsetOfGiven, tokenizer);
			} else if (nextChar === 'x' || nextChar === 'X') {
				// 0x or 0X, which is a hexadecimal number
				this.tryToVisitAsHexadecimal(given, offsetOfGiven, tokenizer);
			} else {
				this.tryToVisitAsDecimalOrOctal(given, offsetOfGiven, tokenizer);
			}
		} else {
			this.tryToVisitAsDecimalOrOctal(given, offsetOfGiven, tokenizer);
		}
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
export class LtNumericBasePartCaptorStartsWithDot extends AbstractLtNumericBasePartCaptor {
	private readonly _checkers: AstNodeCaptorCharsCheckers = [AstChars.Dot, isNumeric];

	checkers(): AstNodeCaptorCheckers {
		return this._checkers;
	}

	visit(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		this.tryToVisitAsDecimalOrOctal(given, offsetOfGiven, tokenizer);
	}
}
