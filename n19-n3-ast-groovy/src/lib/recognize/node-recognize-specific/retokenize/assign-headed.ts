import {TokenId} from '../../../tokens';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a = as headed char.
 *
 * @done 20250613
 */
export const retokenizeWithAssignHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('=', recognition);

	// to find the node which can be combined with the beginning assign
	// token starts with =, possible tokens are =~, ==~, ===, ==
	switch (Walker.currentNode?.tokenId) {
		// -> =~
		case TokenId.Bitnot: // -> =~
			return Walker.RegexFind().consumeNode().finalize();
		// -> ==~
		case TokenId.RegexFind: // -> =~
			return Walker.RegexMatch().consumeNode().finalize();
		// -> ===
		case TokenId.Equal: // -> ===
			return Walker.Identical().consumeNode().finalize();
		case TokenId.Identical: // -> === + =
			return Walker.Identical().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.RegexMatch: // -> === + ~
			return Walker.Identical().consumeNode().Bitnot().finalize();
		// -> ==
		case TokenId.Assign: // -> ==
			return Walker.Equal().consumeNode().finalize();
		default:
			return Walker.Assign().finalize();
	}
};
