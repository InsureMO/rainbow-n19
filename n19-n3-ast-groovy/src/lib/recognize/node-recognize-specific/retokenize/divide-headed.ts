import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithEqualHeadedNSL} from './equal-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a / as headed char.
 * works only when parent is not any string literal.
 *
 * the previous node is slashy gstring literal
 *
 * @ok 20250611
 */
export const retokenizeWithDivideHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('/', recognition);

	// to find the node which can be combined with the beginning divide
	// token starts with /, possible tokens are //, /*, /$, /=
	switch (Walker.currentNode?.tokenId) {
		// -> //, and an optional part
		case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
		case TokenId.Divide: // -> //
			return Walker.SLCommentStartMark().consumeNode().finalize();
		case TokenId.DollarSlashyGStringQuotationEndMark: // -> // + $
			return Walker.SLCommentStartMark().consumeNode().chars('$').finalize();
		case TokenId.DivideAssign: // -> // + =
			return Walker.SLCommentStartMark().consumeNode().chars('=').finalize();
		case TokenId.SingleLineCommentStartMark: // -> // + /
			return Walker.SLCommentStartMark().consumeNode().chars('/').finalize();
		case TokenId.MultipleLinesCommentStartMark: // -> // + *
			return Walker.SLCommentStartMark().consumeNode().chars('*').finalize();
		// -> /*, and an optional part
		case TokenId.SpreadDot: // -> /* + .
			return Walker.MLCommentStartMark().consumeNode().chars('.').finalize();
		case TokenId.Power: // -> /* + *
			return Walker.MLCommentStartMark().consumeNode().chars('*').finalize();
		case TokenId.PowerAssign: // -> /* + *=
			return Walker.MLCommentStartMark().consumeNode().chars('*=').finalize();
		case TokenId.Multiple: // -> /*
			return Walker.MLCommentStartMark().consumeNode().finalize();
		case TokenId.MultipleAssign: // -> /* + =
			return Walker.MLCommentStartMark().consumeNode().chars('=').finalize();
		case TokenId.MultipleLinesCommentEndMark: // -> /* + /
			return Walker.MLCommentStartMark().consumeNode().chars('/').finalize();
		// -> /$, and an optional part
		case TokenId.DollarSlashyGStringQuotationStartMark: // -> /+ $/
		case TokenId.DollarSlashyGStringDollarEscape: // -> / + $$
		case TokenId.GStringInterpolationLBraceStartMark: // / + ${
		case TokenId.Identifier: // / + identifier
			// in-air / is after slashy gstring literal, insist on what it is. which means the in-air / is a divide
			return Walker.Divide().finalize();
		// -> /=, and an optional part
		case TokenId.Assign: // -> /=
			return Walker.DivideAssign().consumeNode().finalize();
		case TokenId.Equal: // -> /= + =
			return Walker.DivideAssign().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.Identical:  // -> /= + ==
			return Walker.DivideAssign().consumeNode().andUse(retokenizeWithEqualHeadedNSL).finalize();
		case TokenId.RegexFind:  // -> /= + ~
			return Walker.DivideAssign().consumeNode().Bitnot().finalize();
		case TokenId.RegexMatch:  // -> /= + =~
			return Walker.DivideAssign().consumeNode().RegexFind().finalize();
		default: // cannot combine with the beginning /
			return Walker.Divide().finalize();
	}
};
