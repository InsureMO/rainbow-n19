import {TokenId, TokenType} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithGtHeadedNSL} from './greater-than-headed';
import {retokenizeWithLteHeadedNSL} from './less-than-or-equal-headed';
import {retokenizeWithRangeInclusiveHeadedNSL} from './range-inclusive-headed';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a <.. as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithRangeExclusiveLeftHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new class extends RetokenizeNodeWalker {
		protected finalizeNodeOnInAirText(): this {
			return this;
		}

		RangeExclusiveFull(): this {
			return this.createNode(TokenId.RangeExclusiveFull, TokenType.Operator, '<..<');
		}

		RangeExclusiveRight(): this {
			return this.createNode(TokenId.RangeExclusiveRight, TokenType.Operator, '..<');
		}

		Assign(): this {
			return this.createNode(TokenId.Assign, TokenType.Operator, '=');
		}

		RangeExclusiveLeft(): this {
			return this.createNode(TokenId.RangeExclusiveLeft, TokenType.Operator, '<..');
		}
	}('<..', recognition);

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
