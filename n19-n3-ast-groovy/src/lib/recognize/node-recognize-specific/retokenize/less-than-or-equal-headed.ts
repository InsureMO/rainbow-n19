import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithGtHeadedNSL} from './greater-than-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {retokenizeWithRshiftHeadedNSL} from './rshift-headed';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with an <= as headed char(s).
 *
 * @ok 20250613
 */
export const retokenizeWithLteHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('<=', recognition);

	// to find the node which can be combined with the beginning equal
	// token starts with <=, possible tokens are  <=>
	switch (Walker.currentNode?.tokenId) {
		// -> <=>
		case TokenId.GreaterThan: // -> <=>
			return Walker.Spaceship().consumeNode().finalize();
		case TokenId.GreaterThanOrEqual: // -> <=> + =
			return Walker.Spaceship().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.Rshift: // -> <=> + >
			return Walker.Spaceship().consumeNode().andUse(retokenizeWithGtHeadedNSL).finalize();
		case TokenId.Urshift: // -> <=> + >>
			return Walker.Spaceship().consumeNode().andUse(retokenizeWithRshiftHeadedNSL).finalize();
		case TokenId.RshiftAssign: // -> <=> + >=
			return Walker.Spaceship().consumeNode().GreaterThanOrEqual().finalize();
		case TokenId.UrshiftAssign: // -> <=> + >>=
			return Walker.Spaceship().consumeNode().RshiftAssign().finalize();
		default:
			return Walker.LessThanOrEqual().finalize();
	}
};
