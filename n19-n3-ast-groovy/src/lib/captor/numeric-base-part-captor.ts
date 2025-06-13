import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {
	AstNodeCaptorCharCheck,
	AstNodeCaptorCharsCheckers,
	AstNodeCaptorCheckers,
	AstNodeCaptorDescription
} from './captor';
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
		return trailingUnderscoreCount === 0 ? text : text.slice(0, -trailingUnderscoreCount);
	}

	protected cutoffTrailingDotExponentUnderscorePlusMinusChars(text: string): string {
		let trailingCharCount = 0;
		for (let i = text.length - 1; i > 0; i--) {
			let breakFor = false;
			switch (text[i]) {
				// @formatter:off
				case '_': case '.': case 'e': case 'E': case '+': case '-': {
					// @formatter:on
					trailingCharCount++;
					break;
				}
				default:
					breakFor = true;
					break;
			}
			if (breakFor) {
				break;
			}
		}

		return trailingCharCount === 0 ? text : text.slice(0, -trailingCharCount);
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
	protected tryToVisitAsBinary(given: Char, next: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		const char3 = tokenizer.charAt(offsetOfGiven + 2);
		if (char3 === '0' || char3 === '1') {
			// is binary, continue to visit
			let text = given + next + char3;
			let offset = offsetOfGiven + 3;
			let lastChar = char3;
			let char = tokenizer.charAt(offset);
			// eslint-disable-next-line no-constant-condition
			while (true) {
				let breakWhile = false;
				switch (char) {
					// @formatter:off
					case '0': case '1': case '_': {
						// @formatter:on
						offset = offset + 1;
						text = text + char;
						lastChar = char;
						char = tokenizer.charAt(offset);
						break;
					}
					// @formatter:off
					case 'i': case 'I': case 'l': case 'L': case 'g': case 'G': {
						// @formatter:on
						breakWhile = true;
						// last char is underscore, which is not allowed
						if (lastChar !== '_') {
							// suffix found, end
							offset = offset + 1;
							text = text + char;
						}
						break;
					}
					default: {
						breakWhile = true;
						break;
					}
				}
				if (breakWhile) {
					break;
				}
			}
			text = this.cutoffTrailingUnderscoreChars(text);
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text, startOffset: offsetOfGiven
			});
			tokenizer.moveCursorTo(offsetOfGiven + text.length);
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
	protected tryToVisitAsHexadecimal(given: Char, next: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		const char3 = tokenizer.charAt(offsetOfGiven + 2);
		switch (char3) {
			// 0-9, a-f, A-F @formatter:off
			case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
			case 'a': case 'b': case 'c': case 'd': case 'e': case 'f':
			case 'A': case 'B': case 'C': case 'D': case 'E': case 'F': {
				// @formatter:on
				// is binary, continue to visit
				let text = given + next + char3;
				let offset = offsetOfGiven + 3;
				let lastChar: string = char3;
				let char = tokenizer.charAt(offset);
				// eslint-disable-next-line no-constant-condition
				while (true) {
					let breakWhile = false;
					switch (char) {
						// @formatter:off
						case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
						case 'a': case 'b': case 'c': case 'd': case 'e': case 'f':
						case 'A': case 'B': case 'C': case 'D': case 'E': case 'F':
						case '_': {
							// @formatter:on
							offset = offset + 1;
							text = text + char;
							lastChar = char;
							char = tokenizer.charAt(offset);
							break;
						}
						// @formatter:off
						case 'i': case 'I': case 'l': case 'L': case 'g': case 'G': {
							// @formatter:on
							breakWhile = true;
							// last char is underscore, which is not allowed
							if (lastChar !== '_') {
								// suffix found, end
								offset = offset + 1;
								text = text + char;
							}
							break;
						}
						default: {
							breakWhile = true;
							break;
						}
					}
					if (breakWhile) {
						break;
					}
				}
				text = this.cutoffTrailingUnderscoreChars(text);
				this.createAndAppendToAst(tokenizer, {
					tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
					text, startOffset: offsetOfGiven
				});
				tokenizer.moveCursorTo(offsetOfGiven + text.length);
				break;
			}
			default: {
				// not hexadecimal, just collect to first 0
				this.createAndAppendToAst(tokenizer, {
					tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
					text: given, startOffset: offsetOfGiven
				});
				tokenizer.moveCursorTo(offsetOfGiven + 1);
				break;
			}
		}
	}

	/**
	 * 1. only 0-9,
	 * 2. zero or one dot,
	 * 3. zero or one e/E,
	 * 4. cannot end with dot, underscore or e/E,
	 * 5. char around dot must be 0-9,
	 * 6. char around underscore must be 0-9 or underscore,
	 * 7. char before e/E must be 0-9, after it must be 0-9 or +/-,
	 * 8. char before suffix must be 0-9,
	 * 9. if there is one dot, suffix is one of fFdDgG; otherwise suffix is one of iIlLgG.
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
			let breakWhile = false;
			switch (char) {
				// @formatter:off
				case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': {
					// @formatter:on
					offset += 1;
					text = text + char;
					lastChar = char;
					char = tokenizer.charAt(offset);
					break;
				}
				case '_': {
					const codepointOfLastChar = lastChar.codePointAt(0);
					// 0-9, _
					if (codepointOfLastChar >= 48 && codepointOfLastChar <= 57 || codepointOfLastChar === 95) {
						offset += 1;
						text = text + char;
						lastChar = char;
						char = tokenizer.charAt(offset);
					} else {
						// char before underscore is not 0-9 or underscore, which is not allowed
						breakWhile = true;
					}
					break;
				}
				case '.': {
					if (hasDot || hasExponent) {
						// has dot or exponent already, which is not allowed
						breakWhile = true;
						break;
					}
					const codepointOfLastChar = lastChar.codePointAt(0);
					if (codepointOfLastChar < 48 || codepointOfLastChar > 57) {
						// char before dot is not 0-9, which is not allowed
						breakWhile = true;
					} else {
						hasDot = true;
						offset += 1;
						text = text + char;
						lastChar = char;
						char = tokenizer.charAt(offset);
					}
					break;
				}
				// @formatter:off
				case 'e': case 'E': {
					// @formatter:on
					if (hasExponent) {
						// has exponent already, which is not allowed
						breakWhile = true;
						break;
					}
					const codepointOfLastChar = lastChar.codePointAt(0);
					if (codepointOfLastChar < 48 || codepointOfLastChar > 57) {
						// char before exponent is not 0-9, which is not allowed
						breakWhile = true;
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
					break;
				}
				// @formatter:off
				case 'i': case 'I': case 'l': case 'L': {
					// @formatter:on
					breakWhile = true;
					if (hasDot || hasExponent) {
						// has dot or exponent already, which is not allowed
						break;
					}
					const codepointOfLastChar = lastChar.codePointAt(0);
					// char before suffix is not 0-9, which is not allowed
					if (codepointOfLastChar >= 48 && codepointOfLastChar <= 57) {
						// suffix found, end
						offset += 1;
						text = text + char;
					}
					break;
				}
				// @formatter:off
				case 'f': case 'F': case 'd': case 'D': case 'g': case 'G': {
					// @formatter:on
					breakWhile = true;
					const codepointOfLastChar = lastChar.codePointAt(0);
					// char before suffix is not 0-9, which is not allowed
					if (codepointOfLastChar >= 48 && codepointOfLastChar <= 57) {
						// suffix found, end
						offset += 1;
						text = text + char;
					}
					break;
				}
				default: {
					breakWhile = true;
					break;
				}
			}
			if (breakWhile) {
				break;
			}
		}

		text = this.cutoffTrailingDotExponentUnderscorePlusMinusChars(text);
		this.createAndAppendToAst(tokenizer, {
			tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
			text, startOffset: offsetOfGiven
		});

		// move cursor
		tokenizer.moveCursorTo(offsetOfGiven + text.length);
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
			switch (nextChar) {
				// @formatter:off
				case 'b': case 'B': {
					// 0b or 0B, which is a binary number
					this.tryToVisitAsBinary(given,nextChar, offsetOfGiven, tokenizer);
					break;
				}
				case 'x': case 'X': {
					// 0x or 0X, which is a hexadecimal number
					this.tryToVisitAsHexadecimal(given,nextChar, offsetOfGiven, tokenizer);
					break;
				}
				default: {
					this.tryToVisitAsDecimalOrOctal(given, offsetOfGiven, tokenizer);
					break;
				}
			}
		} else {
			this.tryToVisitAsDecimalOrOctal(given, offsetOfGiven, tokenizer);
		}
	}
	describe(): AstNodeCaptorDescription {
		return {
			text: `\`${this._numericChecker}...\``,
			tokenId: TokenId.NumericBasePart,
			tokenType: TokenType.NumberLiteral,
			rule: `Groovy numeric, starts with \`${this._numericChecker}\`.`
		};
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

	describe(): AstNodeCaptorDescription {
		return {
			text: '`....`',
			tokenId: TokenId.NumericBasePart,
			tokenType: TokenType.NumberLiteral,
			rule: `Groovy decimal, starts with \`.\`.`
		};
	}
}
