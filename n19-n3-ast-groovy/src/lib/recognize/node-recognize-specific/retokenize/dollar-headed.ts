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

	switch (Walker.currentNode?.tokenId) {
		// -> //, and an optional part
		case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
		case TokenId.Divide: // -> $/
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().finalize();
		case TokenId.DollarSlashyGStringQuotationEndMark: // -> $/ + $
			return Walker.DollarSlashyGStringQuotationStartMark().consumeNode().andUse(recognition => {
				return retokenizeWithDollarHeadedDSGL(recognition);
			}).finalize();
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
 */
export const retokenizeWithDollarHeadedGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	throw 'retokenizeWithDollarHeadedGL not supported yet'; // TODO Not supported yet
};
/**
 * retokenize tokens with a $ as headed char.
 */
export const retokenizeWithDollarHeadedSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	throw 'retokenizeWithDollarHeadedSGL not supported yet'; // TODO Not supported yet
};

/**
 * retokenize tokens with a $ as headed char.
 */
export const retokenizeWithDollarHeadedDSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	throw 'retokenizeWithDollarHeadedDSGL not supported yet'; // TODO Not supported yet
};
