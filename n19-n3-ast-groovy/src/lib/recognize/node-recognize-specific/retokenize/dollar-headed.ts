import {TokenId} from '../../../tokens';
import {retokenizeWithIdentifiableTextHeadedNSL} from './identifier-text-headed';
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
 * @ok 20250612
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
 * @ok 20250613
 */
export const retokenizeWithDollarHeadedGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('$', recognition);

	// to find the node which can be combined with the beginning dollar
	// token starts with $, possible tokens are ${...}
	switch (Walker.currentNode?.tokenId) {
		case TokenId.LBrace: // -> ${
			return Walker.GStringInterpolationLBraceStartMark().consumeNode().finalize();
		default: // remain $
			return Walker.GStringInterpolationStartMark().finalize();
	}
};
/**
 * retokenize tokens with a $ as headed char.
 * $..., the ... part must be an identifier.
 * or ${...}
 *
 * @ok 20250613
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
			if (text.startsWith('$')) {
				return Walker.chars('$').finalize();
			} else {
				return Walker.GStringInterpolationStartMark().finalize();
			}
		}
		default: // remain $
			return Walker.GStringInterpolationStartMark().finalize();
	}
};

/**
 * retokenize tokens with a $ as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithDollarHeadedDSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('$', recognition);

	// to find the node which can be combined with the beginning dollar
	// token starts with $, possible tokens are ${...}, $$, $/
	switch (Walker.currentNode?.tokenId) {
		// -> $$
		case TokenId.DollarSlashyGStringQuotationStartMark: // -> $$ + /
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars('/').finalize();
		case TokenId.DollarSlashyGStringSlashEscape:
		case TokenId.DollarSlashyGStringDollarEscape: // -> $$ + $
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().andUse(retokenizeWithDollarHeadedDSGL).finalize();
		case TokenId.GStringInterpolationStartMark: // -> $$
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().finalize();
		case TokenId.GStringInterpolationLBraceStartMark: // -> $$ + {
			return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars('{').finalize();
		case TokenId.LBrace: // -> ${
			return Walker.GStringInterpolationLBraceStartMark().consumeNode().finalize();
		case TokenId.Identifier: { // check first char
			const text = Walker.currentNode.text;
			if (text.startsWith('$')) {
				// to find $, and split to before $, $, after $
				// part before $ change nature to chars, and call dollar headed again
				const indexOf2nd$ = text.indexOf('$', 1);
				if (indexOf2nd$ !== -1) {
					// no $ after first $
					return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars(text.slice(1)).finalize();
				}
				const before$ = text.slice(1, indexOf2nd$);
				const $AndAfter = text.slice(indexOf2nd$);
				if ($AndAfter.length === 1) {
					return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars(before$).andUse(retokenizeWithDollarHeadedDSGL).finalize();
				} else {
					return Walker.DollarSlashyGStringDollarEscape().consumeNode().chars(before$).Identifier($AndAfter).finalize();
				}
			} else {
				return Walker.GStringInterpolationStartMark().finalize();
			}
		}
		default: // remain $
			return Walker.GStringInterpolationStartMark().finalize();
	}
};
