import {TokenId, TokenType} from '../../../tokens';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

const buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize = (headText: string) => {
	const defs = headText[0] === '\''
		? {c1: '\'', c2: '\'\'', c3: '\'\'\'', sl: TokenId.StringQuotationMark, ml: TokenId.StringQuotationMarkML}
		: {c1: '"', c2: '""', c3: '"""', sl: TokenId.GStringQuotationMark, ml: TokenId.GStringQuotationMarkML};

	return (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		const Walker = new class extends RetokenizeNodeWalker {
			protected finalizeNodeOnInAirText(): this {
				switch (this.inAirText) {
					case defs.c1:
						return this.SLMark();
					case defs.c2:
						return this.SLMark().SLMark();
					default:
						throw new Error(`In-air text[${this.inAirText}] is not supported.`);
				}
			}

			SLMark(): this {
				return this.createNode(defs.sl, TokenType.Mark, defs.c1);
			}

			MLMark() {
				return this.createNode(defs.ml, TokenType.Mark, defs.c3);
			}
		}(headText, recognition);

		// to find the node which can be combined with the beginning quotation mark
		while (Walker.hasAvailableNode) {
			const currentNodeTokenId = Walker.currentNode.tokenId;
			if (currentNodeTokenId === defs.sl) {
				if (Walker.inAirText === defs.c2) {
					Walker.MLMark();
				} else {
					// in-air text is '
					Walker.appendToInAirText(defs.c1);
				}
				Walker.consumeNode();
			} else if (currentNodeTokenId === defs.ml) {
				Walker.MLMark();
				// in-air text not change
				Walker.consumeNode();
			} else {
				break;
			}
		}

		return Walker.finalize();
	};
};

/**
 * retokenize tokens with an ' as headed char.
 *
 * @ok 20250612
 */
export const retokenizeWithSingleQuoteHeadedNSL = buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('\'');

/**
 * retokenize tokens with an '' as headed chars.
 *
 * @ok 20250612
 */
export const retokenizeWith2SingleQuotesHeadedNSL = buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('\'\'');

/**
 * retokenize tokens with an " as headed char.
 *
 * @ok 20250612
 */
export const retokenizeWithDoubleQuoteHeadedNSL = buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('"');

/**
 * retokenize tokens with an "" as headed chars.
 *
 * @ok 20250612
 */
export const retokenizeWith2DoubleQuotesHeadedNSL = buildWithOneOrTwoSingleOrDoubleQuoteHeadedNSLRetokenize('""');
