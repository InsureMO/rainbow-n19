import {TokenId} from '../../../tokens';
import {RecognizeCommonUtils} from '../recognizer-common';
import {retokenizeWithDivideHeadedDSGL} from './divide-headed';
import {retokenizeIdentifiableTextWith$AGL, retokenizeWithIdentifiableTextHeadedNSL} from './identifier-text-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a $ as headed char.
 *
 * token starts with $ must be one of following,
 * - identifier,
 * - dsgl start mark,
 * - dsgl dollar escape,
 * - dsgl slash escape (same as dsgl start mark),
 * - gstring interpolation start mark,
 * - gstring interpolation start lbrace mark.
 *
 * in NSL scenario, only identifier and dsgl start mark are possible.
 * for identifier, $ also can be start char of identifier, so it is just a special case of retokenize with identifiable text.
 * which means, just to figure out that the next node is started with / or not,
 * - if it is, create a dsgl start mark, and handle the rest text of next node,
 * - if not, call retokenize with identifiable text headed NSL and return.
 *
 * @done 20250612
 */
export const retokenizeWithDollarHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('$', recognition);

	// to find the node which can be combined with the beginning dollar
	// token starts with $, possible tokens are $/, $$, $..., ${...},
	// since $$ is only available in dollar slashy gstring literal,
	// and $..., ${...} are only available in gstring/slashy gstring/dollar slashy gstring literal,
	// which means here the $/ is the only option
	switch (Walker.currentNode?.tokenId) {
		// -> //, and an optional part
		case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
		case TokenId.Divide: // -> $/
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().finalize();
		case TokenId.DollarSlashyGStringQuotationEndMark: // -> $/ + $
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().andUse(retokenizeWithDollarHeadedDSGL).finalize();
		case TokenId.DivideAssign: // -> $/ + =
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().chars('=').finalize();
		case TokenId.SingleLineCommentStartMark: // -> $/ + /
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().chars('/').finalize();
		case TokenId.MultipleLinesCommentStartMark: // -> $/ + *
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().chars('*').finalize();
		default:
			return retokenizeWithIdentifiableTextHeadedNSL('$', recognition);
	}
};

/**
 * retokenize tokens with a $ as headed char.
 * the $ is interpolation start mark, always. difference is followed or not followed by {.
 *
 * @done 20250613
 */
export const retokenizeWithDollarHeadedGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('$', recognition);

	// to find the node which can be combined with the beginning dollar
	// token starts with $, possible tokens are ${...}
	switch (Walker.currentNode?.tokenId) {
		case TokenId.LBrace: // -> ${
			return Walker.GStringInterpolationLBraceStartMark().consumeNode().finalize();
		case TokenId.Identifier: {  // check first char
			return Walker.GStringInterpolationStartMark().andUse(recognition => {
				return retokenizeIdentifiableTextWith$AGL(TokenId.GStringLiteral, TokenId.GStringInterpolationStartMark, recognition);
			}).finalize();
		}
		default: {
			// whatever next is, it doesn't start with $, {
			if (RecognizeCommonUtils.isWord(Walker.currentNode?.tokenId, Walker.currentNode?.tokenType)) {
				// next is a word
				return Walker.GStringInterpolationStartMark().andUse(recognition => {
					return retokenizeIdentifiableTextWith$AGL(TokenId.GStringLiteral, TokenId.GStringInterpolationStartMark, recognition);
				}).finalize();
			} else {
				// not a word,
				return Walker.GStringInterpolationStartMark().finalize();
			}
		}
	}
};

/**
 * retokenize tokens with a $ as headed char.
 * $..., the ... part must be an identifier.
 * or ${...}
 *
 * @done 20250613
 */
export const retokenizeWithDollarHeadedSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('$', recognition);

	// to find the node which can be combined with the beginning dollar
	// token starts with $, possible tokens are ${...}
	switch (Walker.currentNode?.tokenId) {
		// next char is $
		case TokenId.DollarSlashyGStringQuotationStartMark:
		case TokenId.DollarSlashyGStringSlashEscape:
		case TokenId.DollarSlashyGStringDollarEscape:
		case TokenId.GStringInterpolationStartMark:
		case TokenId.GStringInterpolationLBraceStartMark: // -> $, but change nature to chars
			return Walker.chars('$').finalize();
		case TokenId.LBrace: // -> ${
			return Walker.GStringInterpolationLBraceStartMark().consumeNode().finalize();
		case TokenId.Identifier: { // check first char
			const text = Walker.currentNode.text;
			if (text.startsWith('$')) { // -> $, change nature to chars. leave next identifier handled by identifier rehydration AGL
				return Walker.chars('$').finalize();
			} else { // next is identifier and not starts with $
				return Walker.GStringInterpolationStartMark().andUse(recognition => {
					return retokenizeIdentifiableTextWith$AGL(TokenId.SlashyGStringLiteral, TokenId.GStringInterpolationStartMark, recognition);
				}).finalize();
			}
		}
		// nest char is /
		case TokenId.SlashyGStringQuotationMark: // /
		case TokenId.DollarSlashyGStringQuotationEndMark: // /$
		case TokenId.Divide: // /
		case TokenId.DivideAssign: // /=
		case TokenId.SingleLineCommentStartMark: // //
		case TokenId.MultipleLinesCommentStartMark:  // /*
			// will end the SGL.
			// it makes this $ to be a chars
			return Walker.chars('$').finalize();
		default: {
			// whatever next is, it doesn't start with $, /, {
			if (RecognizeCommonUtils.isWord(Walker.currentNode?.tokenId, Walker.currentNode?.tokenType)) {
				// next is a word
				return Walker.GStringInterpolationStartMark().andUse(recognition => {
					return retokenizeIdentifiableTextWith$AGL(TokenId.SlashyGStringLiteral, TokenId.GStringInterpolationStartMark, recognition);
				}).finalize();
			} else {
				// not a word, it makes this $ to be a chars
				return Walker.chars('$').finalize();
			}
		}
	}
};

/**
 * retokenize tokens with a $ as headed char.
 *
 * @done 20250613
 */
export const retokenizeWithDollarHeadedDSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('$', recognition);

	// to find the node which can be combined with the beginning dollar
	// token starts with $, possible tokens are ${...}, $$, $/
	switch (Walker.currentNode?.tokenId) {
		// -> $$
		case TokenId.DollarSlashyGStringQuotationStartMark:
		case TokenId.DollarSlashyGStringSlashEscape: // -> $$ + /
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars('/').finalize();
		case TokenId.DollarSlashyGStringDollarEscape: // -> $$ + $, let the $ to be an identifier
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().clearInAirText().Identifier('$').finalize();
		case TokenId.GStringInterpolationStartMark: // -> $$
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().finalize();
		case TokenId.GStringInterpolationLBraceStartMark: // -> $$ + {
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars('{').finalize();
		case TokenId.Identifier: { // check first char
			const text = Walker.currentNode.text;
			if (text.startsWith('$')) { // -> $$ + ...
				// to find $, and split to before $, $, after $
				// part before $ change nature to chars, and call dollar headed again
				const indexOf2nd$ = text.indexOf('$', 1);
				if (indexOf2nd$ === -1) {
					// no $ after first $ -> $$ + chars
					return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars(text.slice(1)).finalize();
				} else if (indexOf2nd$ === 1) {
					// second $ is directly after first $ -> $$ + identifier with $ started
					return Walker.DollarSlashyGStringDollarEscape().consumeNode().clearInAirText().Identifier(text.slice(1)).finalize();
				} else {
					// second $ is not directly after first $ -> $$ + chars + identifier with $ started ($ is second $)
					const before$ = text.slice(1, indexOf2nd$);
					const $AndAfter = text.slice(indexOf2nd$);
					return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars(before$).clearInAirText().Identifier($AndAfter).finalize();
				}
			} else { // next is identifier and not starts with $
				return Walker.GStringInterpolationStartMark().andUse(recognition => {
					return retokenizeIdentifiableTextWith$AGL(TokenId.DollarSlashyGStringLiteral, TokenId.GStringInterpolationStartMark, recognition);
				}).finalize();
			}
		}
		// -> $/
		case TokenId.Divide:
		case TokenId.SlashyGStringQuotationMark: // -> $/
			return Walker.DollarSlashyGStringSlashEscape().consumeNode().finalize();
		case TokenId.DivideAssign: // -> $/ + =
			return Walker.DollarSlashyGStringSlashEscape().consumeNode().chars('=').finalize();
		case TokenId.SingleLineCommentStartMark: // -> $/ + /
			return Walker.DollarSlashyGStringSlashEscape().consumeNode().andUse(retokenizeWithDivideHeadedDSGL).finalize();
		case TokenId.MultipleLinesCommentStartMark: // -> $/ + *
			return Walker.DollarSlashyGStringSlashEscape().consumeNode().chars('*').finalize();
		case TokenId.DollarSlashyGStringQuotationEndMark: // -> $/ + $
			return Walker.DollarSlashyGStringSlashEscape().consumeNode().andUse(retokenizeWithDollarHeadedDSGL).finalize();
		// -> ${
		case TokenId.LBrace: // -> ${
			return Walker.GStringInterpolationLBraceStartMark().consumeNode().finalize();
		default: {
			// whatever next is, it doesn't start with $, /, {
			if (RecognizeCommonUtils.isWord(Walker.currentNode?.tokenId, Walker.currentNode?.tokenType)) {
				// next is a word
				return Walker.GStringInterpolationStartMark().andUse(recognition => {
					return retokenizeIdentifiableTextWith$AGL(TokenId.DollarSlashyGStringLiteral, TokenId.GStringInterpolationStartMark, recognition);
				}).finalize();
			} else {
				// not a word, it makes this $ to be a chars
				return Walker.chars('$').finalize();
			}
		}
	}
};
