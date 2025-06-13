import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithEqualHeadedNSL} from './equal-headed';
import {retokenizeWithGtHeadedNSL} from './greater-than-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with an >> as headed char(s).
 *
 * @ok 20250613
 */
export const retokenizeWithRshiftHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('>>', recognition);

	// to find the node which can be combined with the beginning equal
	// token starts with >>, possible tokens are >>>, >>=, >>>=
	switch (Walker.currentNode?.tokenId) {
		// -> >>>
		case TokenId.GreaterThan: // -> >>>
			return Walker.Urshift().consumeNode().finalize();
		case TokenId.Rshift: // -> >>> + >
			return Walker.Urshift().consumeNode().andUse(retokenizeWithGtHeadedNSL).finalize();
		case TokenId.Urshift: // -> >>> + >>
			return Walker.Urshift().consumeNode().andUse(retokenizeWithRshiftHeadedNSL).finalize();
		case TokenId.RshiftAssign: // -> >>> + >=
			return Walker.Urshift().consumeNode().GreaterThanOrEqual().finalize();
		case TokenId.UrshiftAssign: // -> >>> + >>=
			return Walker.Urshift().consumeNode().RshiftAssign().finalize();
		// -> >>=
		case TokenId.RegexFind: // -> >>= + ~
			return Walker.RshiftAssign().consumeNode().Bitnot().finalize();
		case TokenId.RegexMatch: // -> >>= + =~
			return Walker.RshiftAssign().consumeNode().RegexFind().finalize();
		case TokenId.Identical: // -> >>= + ==
			return Walker.RshiftAssign().consumeNode().andUse(retokenizeWithEqualHeadedNSL).finalize();
		case TokenId.Equal: // -> >>= + =
			return Walker.RshiftAssign().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.Assign: // -> >>=
			return Walker.RshiftAssign().consumeNode().finalize();
		// -> >>>=
		case TokenId.GreaterThanOrEqual: // -> >>>=
			return Walker.UrshiftAssign().consumeNode().finalize();
		default:
			return Walker.Rshift().finalize();
	}
};
