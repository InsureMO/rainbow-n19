import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a == as headed chars.
 *
 * @ok 20250613
 */
export const retokenizeWithEqualHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('==', recognition);

	// to find the node which can be combined with the beginning equal
	// token starts with ==, possible tokens are ===, ==~
	switch (Walker.currentNode?.tokenId) {
		// -> ===
		case TokenId.Assign: // -> ===
			return Walker.Identical().consumeNode().finalize();
		case TokenId.Equal: // -> === + =
			return Walker.Identical().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.Identical: // -> === + ==
			return Walker.Identical().consumeNode().andUse(retokenizeWithEqualHeadedNSL).finalize();
		case TokenId.RegexFind: // -> === + ~
			return Walker.Identical().consumeNode().Bitnot().finalize();
		case TokenId.RegexMatch: // -> === + =~
			return Walker.Identical().consumeNode().RegexFind().finalize();
		default:
			return Walker.Equal().finalize();
	}
};
