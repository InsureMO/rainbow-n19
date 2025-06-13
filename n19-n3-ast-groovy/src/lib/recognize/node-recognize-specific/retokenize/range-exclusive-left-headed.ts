import {TokenId} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithGtHeadedNSL} from './greater-than-headed';
import {retokenizeWithLteHeadedNSL} from './less-than-or-equal-headed';
import {retokenizeWithRangeInclusiveHeadedNSL} from './range-inclusive-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a <.. as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithRangeExclusiveLeftHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('<..', recognition);

	// to find the node which can be combined with the beginning <
	// could be <..<
	switch (Walker.currentNode?.tokenId) {
		case TokenId.RangeExclusiveLeft: // -> <..< + ..
			return Walker.RangeExclusiveFull().consumeNode().andUse(retokenizeWithRangeInclusiveHeadedNSL).finalize();
		case TokenId.RangeExclusiveFull: // -> <..< + ..<
			return Walker.RangeExclusiveFull().consumeNode().RangeExclusiveRight().finalize();
		case TokenId.Spaceship: // -> <..< + = + >
			return Walker.RangeExclusiveFull().consumeNode().Assign().andUse(retokenizeWithGtHeadedNSL).finalize();
		case TokenId.LessThan: // -> <..<
			return Walker.RangeExclusiveFull().consumeNode().finalize();
		case TokenId.LessThanOrEqual: // -> <..< + =
			return Walker.RangeExclusiveFull().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.LshiftAssign: // -> <..< + <=
			return Walker.RangeExclusiveFull().consumeNode().andUse(retokenizeWithLteHeadedNSL).finalize();
		default:
			return Walker.RangeExclusiveLeft().finalize();
	}
};
