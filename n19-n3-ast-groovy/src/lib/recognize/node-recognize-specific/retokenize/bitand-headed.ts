import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithEqualHeadedNSL} from './equal-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a & as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithBitandHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('&', recognition);

	// to find the node which can be combined with the beginning and
	// token starts with &, possible tokens are &&, &=
	switch (Walker.currentNode?.tokenId) {
		// -> &&
		case TokenId.Bitand: // -> &&
			return Walker.And().consumeNode().finalize();
		case TokenId.BitandAssign: // -> && + =
			return Walker.And().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.And: // -> && + &
			return Walker.And().consumeNode().andUse(retokenizeWithBitandHeadedNSL).finalize();
		// -> &=
		case TokenId.RegexFind: // -> &= + ~
			return Walker.BitandAssign().consumeNode().Bitnot().finalize();
		case TokenId.RegexMatch: // -> &= + =~
			return Walker.BitandAssign().consumeNode().RegexFind().finalize();
		case TokenId.Identical: // -> &= + ==
			return Walker.BitandAssign().consumeNode().andUse(retokenizeWithEqualHeadedNSL).finalize();
		case TokenId.Assign: // -> &=
			return Walker.BitandAssign().consumeNode().finalize();
		case TokenId.Equal: // -> &= + =
			return Walker.BitandAssign().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		default:
			return Walker.Bitand().finalize();
	}
};
