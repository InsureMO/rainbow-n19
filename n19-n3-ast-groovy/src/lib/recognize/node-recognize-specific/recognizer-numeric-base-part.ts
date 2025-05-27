import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../node-recognize';
import {AbstractNodeRecognizer} from './abstract-recognizer';

interface NumericGroups {
	mark?: string;
	integral: Array<string>;
	dot?: boolean;
	fraction: Array<string>;
	exponent?: string;
	exponentSign?: string;
	exponentNumeric: Array<string>;
	suffix?: string;
}

/**
 * 1. starts with "0b" or "0B": binary literal,
 * 2. starts with "0x" or "0X": hexadecimal literal,
 * 3. starts with "0", no dot, no e/E, no suffix or suffix is one of iIlLgG: octal literal,
 * 4. decimal
 */
export abstract class NumericBasePartRecognizer extends AbstractNodeRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.NumericBasePart;
	}

	protected buildNumericGroups(node: GroovyAstNode): NumericGroups {
		const text = node.text;
		const groups: NumericGroups = {integral: [], fraction: [], exponentNumeric: []};
		let startIndex = 0;
		if (text[1] === 'b' || text[1] === 'B' || text[1] === 'x' || text[1] === 'X') {
			groups.mark = text[1];
			startIndex = 2;
		}
		let groupIndex = 0; // 0: integral, 1: fraction, 2: exponent numeric
		for (let index = startIndex, count = text.length; index < count; index++) {
			const char = text[index];
			switch (text[index]) {
				// @formatter:off
				case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': {
					// @formatter:on
					switch (groupIndex) {
						case 0: {
							groups.integral.push(char);
							break;
						}
						case 1: {
							groups.fraction.push(char);
							break;
						}
						case 2: {
							groups.exponentNumeric.push(char);
							break;
						}
						default:
							throw new Error(`Unknown numeric group index, should be one of 0, 1, 2, but got ${groupIndex}.`);
					}
					break;
				}
				case '.': {
					groupIndex = 1;
					groups.dot = true;
					break;
				}
				// @formatter:off
				case 'e': case 'E': {
					// @formatter:on
					groupIndex = 2;
					groups.exponent = char;
					break;
				}
				// @formatter:off
				case '+': case '-': {
					// @formatter:on
					groupIndex = 2;
					groups.exponentSign = char;
					break;
				}
				// iIlLfFdDgG
				default: {
					groups.suffix = char;
					break;
				}
			}
		}
		return groups;
	}

	protected appendLiteralNode(recognition: AstRecognition, tokenId: TokenId): GroovyAstNode {
		const {node, astRecognizer} = recognition;

		const literalNode = new GroovyAstNode({
			tokenId, tokenType: TokenType.NumberLiteral,
			text: '', startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		astRecognizer.appendAsCurrentParent(literalNode);

		return literalNode;
	}

	protected appendMarkPart(recognition: AstRecognition, literalNode: GroovyAstNode, tokenId: TokenId, mark: string): GroovyAstNode {
		const {node} = recognition;

		const markNode = new GroovyAstNode({
			tokenId: tokenId, tokenType: TokenType.Mark,
			text: mark, startOffset: node.startOffset,
			startLine: node.startLine, startColumn: node.startColumn
		});
		literalNode.asParentOf(markNode);

		return markNode;
	}

	protected appendIntegralPart(recognition: AstRecognition, literalNode: GroovyAstNode, groups: NumericGroups, offset: number, startIndex: number = 0): Optional<GroovyAstNode> {
		const {node} = recognition;

		if (groups.integral.length > 0) {
			const text = startIndex === 0 ? groups.integral.join('') : groups.integral.slice(startIndex).join('');

			const integralNode = new GroovyAstNode({
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text, startOffset: node.startOffset + offset,
				startLine: node.startLine, startColumn: node.startColumn + offset
			});
			literalNode.asParentOf(integralNode);

			return integralNode;
		}

		return (void 0);
	}

	protected appendSuffixPart(recognition: AstRecognition, literalNode: GroovyAstNode, groups: NumericGroups): Optional<GroovyAstNode> {
		const {node} = recognition;
		const text = node.text;

		if (groups.suffix != null) {
			const distance = text.length - 1;
			const suffixNode = new GroovyAstNode({
				tokenId: TokenId.NumericSuffixPart, tokenType: TokenType.Mark,
				text: groups.suffix, startOffset: node.startOffset + distance,
				startLine: node.startLine, startColumn: node.startColumn + distance
			});
			literalNode.asParentOf(suffixNode);

			return suffixNode;
		}

		return (void 0);
	}

	/**
	 * mark, integral, optional suffix
	 */
	protected recognizedAsBinaryOrHexadecimalLiteral(recognition: AstRecognition, groups: NumericGroups, tokenIds: [TokenId, TokenId]) {
		const [literalTokenId, markTokenId] = tokenIds;

		// literal
		const literalNode = this.appendLiteralNode(recognition, literalTokenId);
		// mark
		this.appendMarkPart(recognition, literalNode, markTokenId, '0' + groups.mark);
		// integral part
		this.appendIntegralPart(recognition, literalNode, groups, 2);
		// suffix, optional
		this.appendSuffixPart(recognition, literalNode, groups);
	}

	/**
	 * mark, integral, optional suffix
	 */
	protected recognizedAsBinaryLiteral(recognition: AstRecognition, groups: NumericGroups): void {
		this.recognizedAsBinaryOrHexadecimalLiteral(recognition, groups, [TokenId.BinaryLiteral, TokenId.BinaryStartMark]);
	}

	/**
	 * mark, integral, optional suffix
	 */
	protected recognizedAsHexadecimalLiteral(recognition: AstRecognition, groups: NumericGroups): void {
		this.recognizedAsBinaryOrHexadecimalLiteral(recognition, groups, [TokenId.HexadecimalLiteral, TokenId.HexadecimalStartMark]);
	}

	/**
	 * all parts
	 */
	protected recognizedAsDecimalLiteral(recognition: AstRecognition, groups: NumericGroups): void {
		const {node} = recognition;

		// literal
		const literalNode = this.appendLiteralNode(recognition, TokenId.DecimalLiteral);

		// integral part, optional
		const integralNode = this.appendIntegralPart(recognition, literalNode, groups, 0);
		let offset = integralNode?.text?.length ?? 0;

		// dot
		if (groups.dot) {
			const dotNode = new GroovyAstNode({
				tokenId: TokenId.Dot, tokenType: TokenType.Mark,
				text: '.', startOffset: node.startOffset + offset,
				startLine: node.startLine, startColumn: node.startColumn + offset
			});
			literalNode.asParentOf(dotNode);
			offset += 1;
		}

		// fraction part, optional
		if (groups.fraction.length > 0) {
			const fractionNode = new GroovyAstNode({
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: groups.fraction.join(''), startOffset: node.startOffset + offset,
				startLine: node.startLine, startColumn: node.startColumn + offset
			});
			literalNode.asParentOf(fractionNode);
			offset += fractionNode.text.length;
		}

		// exponent part, optional
		if (groups.exponent != null) {
			const markNode = new GroovyAstNode({
				tokenId: TokenId.DecimalExponentMark, tokenType: TokenType.Mark,
				text: groups.exponent, startOffset: node.startOffset + offset,
				startLine: node.startLine, startColumn: node.startColumn + offset
			});
			literalNode.asParentOf(markNode);
			offset += 1;

			if (groups.exponentSign != null) {
				const signNode = new GroovyAstNode({
					tokenId: TokenId.NumericSignPart, tokenType: TokenType.Mark,
					text: groups.exponentSign, startOffset: node.startOffset + offset,
					startLine: node.startLine, startColumn: node.startColumn + offset
				});
				literalNode.asParentOf(signNode);
				offset += 1;
			}

			const numericNode = new GroovyAstNode({
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: groups.exponentNumeric.join(''), startOffset: node.startOffset + offset,
				startLine: node.startLine, startColumn: node.startColumn + offset
			});
			literalNode.asParentOf(numericNode);
		}

		// suffix, optional
		this.appendSuffixPart(recognition, literalNode, groups);
	}

	/**
	 * integral, optional suffix
	 */
	protected recognizedAsIntegralLiteral(recognition: AstRecognition, groups: NumericGroups): void {
		// literal
		const literalNode = this.appendLiteralNode(recognition, TokenId.IntegralLiteral);
		// integral part
		this.appendIntegralPart(recognition, literalNode, groups, 0);
		// suffix, optional
		this.appendSuffixPart(recognition, literalNode, groups);
	}

	/**
	 * octal, optional suffix
	 */
	protected recognizedAsOctalLiteral(recognition: AstRecognition, groups: NumericGroups): void {
		// literal
		const literalNode = this.appendLiteralNode(recognition, TokenId.OctalLiteral);
		// mark
		this.appendMarkPart(recognition, literalNode, TokenId.OctalStartMark, '0');
		// integral part
		this.appendIntegralPart(recognition, literalNode, groups, 1, 1);
		// suffix, optional
		this.appendSuffixPart(recognition, literalNode, groups);
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		const groups = this.buildNumericGroups(node);

		if (groups.mark === 'b' || groups.mark === 'B') {
			// binary literal: mark, integral and suffix
			this.recognizedAsBinaryLiteral(recognition, groups);
		} else if (groups.mark === 'x' || groups.mark === 'X') {
			// binary literal: mark, integral and suffix
			this.recognizedAsHexadecimalLiteral(recognition, groups);
		} else if (!!groups.dot || groups.exponent != null) {
			// decimal literal: all parts
			this.recognizedAsDecimalLiteral(recognition, groups);
		} else if (groups.suffix === 'f' || groups.suffix === 'F' || groups.suffix === 'd' || groups.suffix === 'D') {
			// no dot, no exponent, no mark, suffix is one of fFdD
			// decimal literal: integral, suffix
			this.recognizedAsDecimalLiteral(recognition, groups);
		} else if (groups.integral[0] !== '0'
			|| groups.integral.length === 1
			|| groups.integral.some(c => c === '8' || c === '9')) {
			// no dot, no exponent, no mark, no suffix or suffix is one of iIlLgG
			// first numeric char is not 0, or only one numeric exists, or contains 8 or 9
			// integral literal: integral and suffix
			this.recognizedAsIntegralLiteral(recognition, groups);
		} else {
			// octal literal: integral and suffix
			// first numeric char is 0, and no 8 or 9
			this.recognizedAsOctalLiteral(recognition, groups);
		}

		astRecognizer.closeCurrentParent();

		return nodeIndex + 1;
	}
}
