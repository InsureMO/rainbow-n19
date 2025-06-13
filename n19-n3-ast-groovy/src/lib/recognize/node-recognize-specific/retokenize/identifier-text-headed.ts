import {Char} from '../../../captor';
import {TokenId, TokenType} from '../../../tokens';
import {retokenizeWithIntegralTextHeadedNSL} from './integral-text-headed';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with an identifiable text as headed char(s).
 *
 * seek following nodes, when
 * 1. token type is identifier, keyword, boolean literal, primitive types, append to given identifier text, and seek more,
 * 2. token id is in, instanceof, append to given identifier text, and seek more,
 * 3. token id is numeric base part,
 * 3.1. first char of numeric is a dot, end and use in-air identifier text to create an identifier node,
 * 3.2. has dot,
 * 3.2.1. append part before dot to given identifier text, and use it to create an identifier node,
 * 3.2.2. and use part starts with dot to create a new numeric base node,
 * 3.3. no dot and has exponent sign,
 * 3.3.1. append part before exponent sign to given identifier text, and use it to create an identifier node,
 * 3.3.2. and use the exponent sign to create a new operator node,
 * 3.3.3. when has suffix,
 * 3.3.3.1. and use part after the exponent sign and before suffix, to create a new numeric base part node,
 * 3.3.3.2. and set identifier text to suffix, and seek more,
 * 3.3.4. when no suffix, call retokenize with integral headed NSL, and return the combined result.
 * 3.4. no dot and no exponent sign, append to given identifier text, and seek more,
 * 4. end and use in-air identifier text to create an identifier node,
 *
 * @ok 20250611
 */
export const retokenizeWithIdentifiableTextHeadedNSL = (identifiableText: string, recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new class extends RetokenizeNodeWalker {
		protected finalizeNodeOnInAirText(): this {
			return this.Identifier();
		}

		Operator(operator: Char): this {
			return operator === '+' ? this.Add() : this.Subtract();
		}
	}(identifiableText, recognition);

	while (Walker.hasAvailableNode) {
		if ([TokenType.Identifier, TokenType.PrimitiveType, TokenType.Keyword, TokenType.BooleanLiteral].includes(Walker.currentNode.tokenType)
			|| [TokenId.IN, TokenId.INSTANCEOF].includes(Walker.currentNode.tokenId)) {
			// combine with given identifier text, continue
			Walker.consumeNodeAndText();
		} else if (TokenId.NumericBasePart === Walker.currentNode.tokenId) {
			const nodeText = Walker.currentNode.text;
			const dotIndex = nodeText.indexOf('.');
			if (dotIndex === 0) {
				// dot is first char, cannot combine with given identifier text
				Walker.Identifier();
				break;
			}

			if (dotIndex !== -1) {
				// dot is not first char, and according to the capture logic, dot will not be the last char
				Walker.Identifier(nodeText.slice(0, dotIndex));
				Walker.NumericBasePart(nodeText.slice(dotIndex));
				break;
			} else {
				let exponentSignIndex = nodeText.indexOf('+');
				if (exponentSignIndex === -1) {
					exponentSignIndex = nodeText.indexOf('-');
				}
				if (exponentSignIndex === -1) {
					// no dot, no exponent sign, combine with given identifier text
					// accumulate text, and move to next node
					Walker.consumeNodeAndText();
				} else {
					Walker.Identifier(nodeText.slice(0, exponentSignIndex));
					Walker.Operator(nodeText.slice(exponentSignIndex, exponentSignIndex + 1));
					// check has number suffix or not
					const lastChar = nodeText[nodeText.length - 1];
					const lastCharCodePoint = lastChar.codePointAt(0);
					// 0 -> 48, 9 -> 57
					if (lastCharCodePoint < 48 || lastCharCodePoint > 57) {
						// it is suffix char
						Walker.NumericBasePart(nodeText.slice(exponentSignIndex + 1, nodeText.length - 1));
						// reset identifier text and position, and move to next node
						Walker.setInAirText(lastChar);
						Walker.consumeNode();
					} else {
						// no suffix
						Walker.consumeNode().andUse(recognition => {
							return retokenizeWithIntegralTextHeadedNSL(nodeText.slice(exponentSignIndex + 1), recognition);
						});
						break;
					}
				}
			}
		} else {
			// cannot combine with given identifier text
			Walker.Identifier();
			break;
		}
	}
	return Walker.finalize();
};
