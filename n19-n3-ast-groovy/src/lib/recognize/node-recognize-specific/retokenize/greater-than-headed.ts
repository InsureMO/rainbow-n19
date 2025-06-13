import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithEqualHeadedNSL} from './equal-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a > as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithGtHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('>', recognition);

	// to find the node which can be combined with the beginning <
	// token starts with >, possible tokens are >=, >>, >>=, >>>, >>>=
	switch (Walker.currentNode?.tokenId) {
		// -> >=
		case TokenId.RegexFind: // -> >= + ~
			return Walker.GreaterThanOrEqual().consumeNode().Bitnot().finalize();
		case TokenId.RegexMatch: // -> >= + =~
			return Walker.GreaterThanOrEqual().consumeNode().RegexFind().finalize();
		case TokenId.Identical: // -> >= + ==
			return Walker.GreaterThanOrEqual().consumeNode().andUse(retokenizeWithEqualHeadedNSL).finalize();
		case TokenId.Equal: // -> >= + =
			return Walker.GreaterThanOrEqual().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.Assign: // -> >=
			return Walker.GreaterThanOrEqual().consumeNode().finalize();
		// -> >>
		case TokenId.GreaterThan:  // -> >>
			return Walker.Rshift().consumeNode().finalize();
		// -> >>=
		case TokenId.GreaterThanOrEqual: // -> >>=
			return Walker.RshiftAssign().consumeNode().finalize();
		// -> >>>
		case TokenId.Rshift: // -> >>>
			return Walker.Urshift().consumeNode().finalize();
		case TokenId.Urshift: // -> >>> + >
			return Walker.Urshift().consumeNode().andUse(retokenizeWithGtHeadedNSL).finalize();
		case TokenId.UrshiftAssign: // -> >>> + >=
			return Walker.Urshift().consumeNode().GreaterThanOrEqual().finalize();
		// -> >>>=
		case TokenId.RshiftAssign: // -> >>>=
			return Walker.UrshiftAssign().consumeNode().finalize();
		default:
			return Walker.GreaterThan().finalize();
	}
};
