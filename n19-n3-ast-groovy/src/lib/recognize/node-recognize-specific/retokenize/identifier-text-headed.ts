import {Char, Character} from '../../../captor';
import {TokenId} from '../../../tokens';
import {RecognizeCommonUtils} from '../recognizer-common';
import {
	retokenizeWithDollarHeadedDSGL,
	retokenizeWithDollarHeadedGL,
	retokenizeWithDollarHeadedSGL
} from './dollar-headed';
import {retokenizeWithIntegralTextHeadedNSL} from './integral-text-headed';
import {RetokenizeNodeWalker, UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
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
		if (RecognizeCommonUtils.isWordAndIdentifiable(Walker.currentNode.tokenId, Walker.currentNode.tokenType)) {
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

/**
 * retokenize an identifier which might contains $,
 * only when parent is any gstring literal, or gstring interpolation.
 *
 * the node could be {@link RecognizeCommonUtils.isWordAndIdentifiable}
 *
 * @ok 20250617
 */
export const retokenizeIdentifiableTextWith$AGL = (literalTokenId: TokenId, previousTokenId: TokenId, recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

	const First$ = -1;
	const Last$ = -2;
	const Ignored$ = -3;
	type SplitPart = {
		text: string;
		type: TokenId.GStringInterpolationStartMark | TokenId.DollarSlashyGStringDollarEscape | TokenId.Identifier | TokenId.Chars | -1 | -2 | -3;
	}

	const text = node.text;

	const Walker = new UseUpInAirTextRetokenizeNodeWalker('', {
		node, nodeIndex, nodes,
		compilationUnit, astRecognizer,
		startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
	});

	text.split(/(\$)/)
		.filter(p => p.length !== 0)
		.map<SplitPart>((text, index, parts) => {
			if (text === '$') {
				if (index === 0) {
					return {text, type: First$};
				} else if (index === parts.length - 1) {
					return {text, type: Last$};
				} else {
					return {text, type: TokenId.GStringInterpolationStartMark};
				}
			} else if (Character.isJavaIdentifierPartAndNotIdentifierIgnorable(text.codePointAt(0))) {
				return {text, type: TokenId.Identifier};
			} else {
				return {text, type: TokenId.Chars};
			}
		})
		.map(({text, type}, index, parts) => {
			switch (type) {
				case TokenId.Identifier: {
					if (index === 0) {
						if ([TokenId.GStringInterpolationStartMark, TokenId.GStringInterpolationLBraceStartMark].includes(previousTokenId)) {
							return {text, type};
						} else {
							// identifier at index 0, rehydrate to chars
							// since if previous is some gstring interpolation start mark, parent should be gstring interpolation
							return {text, type: TokenId.Chars};
						}
					} else if (parts[index - 1].type === Ignored$) {
						// previous part is ignored, which means previous is a dollar escape in dollar slashy gstring literal
						// rehydrate to chars
						return {text, type: TokenId.Chars};
					} else if (parts[index - 1].type === TokenId.Chars) {
						// previous part is chars, which means previous is a dollar after dollar escape or slash escape
						// and parent is dollar slashy gstring literal,
						// rehydrate to chars
						return {text, type: TokenId.Chars};
					} else {
						return {text, type};
					}
				}
				// @formatter:off
				case Last$:	case Ignored$:case  TokenId.Chars:  {
					// @formatter:on
					// do nothing
					return {text, type};
				}
				// @formatter:off
				case First$: case TokenId.GStringInterpolationStartMark: {
					// @formatter:on
					switch (literalTokenId) {
						case TokenId.GStringLiteral: {
							// in gstring literal, single $ always be gstring interpolation start mark
							return {text, type: TokenId.GStringInterpolationStartMark};
						}
						case TokenId.SlashyGStringLiteral: {
							// in slashy gstring literal, $ is start mark only when it follows an identifier
							if (parts[index + 1].type === TokenId.Identifier) {
								// keep it
								return {text, type: TokenId.GStringInterpolationStartMark};
							} else {
								// not follows an identifier, rehydrate to chars
								return {text, type: TokenId.Chars};
							}
						}
						case TokenId.DollarSlashyGStringLiteral: {
							// in dollar slashy gstring literal, $ is start mark only when it follows an identifier
							// and if it follows another $, it is a dollar escape
							if (parts[index + 1]?.type === TokenId.GStringInterpolationStartMark) {
								// set next part as ignored
								parts[index + 1].type = Ignored$;
								return {text: '$$', type: TokenId.DollarSlashyGStringDollarEscape};
							}
							if (type === First$) {
								if ([TokenId.DollarSlashyGStringDollarEscape, TokenId.DollarSlashyGStringSlashEscape].includes(previousTokenId)) {
									// $ after $/ and $$ still is $, rehydrate to chars
									return {text, type: TokenId.Chars};
								}
							} else if (parts[index - 1].type === Ignored$) {
								// previous is $$, and $ after $$ still is $, rehydrate to chars
								return {text, type: TokenId.Chars};
							}
							if (parts[index + 1].type === TokenId.Identifier) {
								// keep it
								return {text, type};
							} else {
								// not follows an identifier, rehydrate to chars
								return {text, type: TokenId.Chars};
							}
						}
						default: {
							throw new Error(`Parent[${literalTokenId.toString()}] is not supported.`);
						}
					}
				}
				default: {
					throw new Error(`Part type[text=${text}, type=${type}] is not supported.`);
				}
			}
		})
		.forEach(({text, type}, index) => {
			if (index === 0) {
				// consume node at first round
				Walker.consumeNode();
			}
			Walker.setInAirText(text);
			switch (type) {
				case TokenId.Identifier: {
					Walker.Identifier();
					break;
				}
				case TokenId.GStringInterpolationStartMark: {
					Walker.GStringInterpolationStartMark();
					break;
				}
				case TokenId.DollarSlashyGStringDollarEscape: {
					Walker.DollarSlashyGStringDollarEscape();
					break;
				}
				case TokenId.Chars: {
					Walker.chars(text);
					break;
				}
				case Last$: {
					switch (literalTokenId) {
						case TokenId.GStringLiteral: {
							Walker.andUse(retokenizeWithDollarHeadedGL);
							break;
						}
						case TokenId.SlashyGStringLiteral: {
							Walker.andUse(retokenizeWithDollarHeadedSGL);
							break;
						}
						case TokenId.DollarSlashyGStringLiteral: {
							Walker.andUse(retokenizeWithDollarHeadedDSGL);
							break;
						}
						default: {
							throw new Error(`Parent[${literalTokenId.toString()}] is not supported.`);
						}
					}
					break;
				}
				case Ignored$: {
					// do nothing
					break;
				}
				default: {
					throw new Error(`Part type[text=${text}, type=${type}] is not supported.`);
				}
			}
		});

	return Walker.finalize();
}
