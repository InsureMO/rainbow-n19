import {TokenId} from '../../../tokens';
import {retokenizeWithDollarHeadedSGL} from './dollar-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a \ as headed char.
 *
 * @done 20250611
 */
export const retokenizeWithBackslashHeadedSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('\\', recognition);

	// to find the node which can be combined with the beginning backslash
	// in slashy gstring literal, \/ is slash escape, so find next node with / started
	// token starts with \, possible tokens is \/
	switch (Walker.currentNode?.tokenId) {
		// -> \/, and an optional part
		case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
		case TokenId.Divide: // -> \/
			return Walker.SlashyGStringSlashEscape().consumeNode().finalize();
		case TokenId.DollarSlashyGStringQuotationEndMark: // -> \/ + $
			return Walker.SlashyGStringSlashEscape().consumeNode().andUse(retokenizeWithDollarHeadedSGL).finalize();
		case TokenId.DivideAssign: // -> \/ + =
			return Walker.SlashyGStringSlashEscape().consumeNode().chars('=').finalize();
		case TokenId.SingleLineCommentStartMark: // -> \/ + /
			return Walker.SlashyGStringSlashEscape().consumeNode().SlashyGStringQuotationMark().finalize();
		case TokenId.MultipleLinesCommentStartMark: // -> \/ + *
			return Walker.SlashyGStringSlashEscape().consumeNode().chars('*').finalize();
		default: // cannot combine with the beginning \
			return Walker.Backslash().finalize();
	}
};
