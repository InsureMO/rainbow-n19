import {TokenId} from '../../../tokens';
import {retokenizeWithIdentifiableTextHeadedNSL} from './identifier-text-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with an integral text as headed char(s).
 *
 * @done 20250613
 */
export const retokenizeWithIntegralTextHeadedNSL = (integralText: string, recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker(integralText, recognition);

	if (Walker.currentNode?.tokenId === TokenId.NumericBasePart) {
		const text = Walker.currentNode.text;
		// don't care the length, char 2 is undefined when length is 1
		// will not impact the check
		const char2 = text[1];
		if ('bBxX'.includes(char2)) {
			// binary or hexadecimal
			return Walker.NumericBasePart(integralText + '0').consumeNode().andUse(recognition => {
				return retokenizeWithIdentifiableTextHeadedNSL(text.slice(1), recognition);
			}).finalize();
		} else {
			// integral, decimal, octal, with or without dot, exponent mark, exponent sign, suffix
			// doesn't matter
			return Walker.NumericBasePart(integralText + text).consumeNode().finalize();
		}
	} else {
		return Walker.NumericBasePart(integralText).finalize();
	}
};
