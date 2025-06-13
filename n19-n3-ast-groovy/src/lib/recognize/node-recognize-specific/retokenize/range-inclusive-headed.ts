import {TokenId, TokenType} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithBitandHeadedNSL} from './bitand-headed';
import {retokenizeWithDotHeadedNSL} from './dot-headed';
import {retokenizeWithGtHeadedNSL} from './greater-than-headed';
import {retokenizeWithLtHeadedNSL} from './less-than-headed';
import {retokenizeWithLteHeadedNSL} from './less-than-or-equal-headed';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a .. as headed chars.
 *
 * @ok 20250613
 */
export const retokenizeWithRangeInclusiveHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new class extends RetokenizeNodeWalker {
		protected finalizeNodeOnInAirText(): this {
			return this;
		}

		Ellipsis(): this {
			return this.createNode(TokenId.Ellipsis, TokenType.Operator, '...');
		}

		Dot(): this {
			return this.createNode(TokenId.Dot, TokenType.Separator, '.');
		}

		RangeExclusiveRight(): this {
			return this.createNode(TokenId.RangeExclusiveRight, TokenType.Operator, '..<');
		}

		Assign(): this {
			return this.createNode(TokenId.Assign, TokenType.Operator, '=');
		}

		RangeInclusive(): this {
			return this.createNode(TokenId.RangeInclusive, TokenType.Operator, '..');
		}
	}('..', recognition);

	// to find the node which can be combined with the beginning 2 dots
	// could be ..., ..<
	switch (Walker.currentNode?.tokenId) {
		// -> ...
		case TokenId.Dot: // -> ...
			return Walker.Ellipsis().consumeNode().finalize();
		case TokenId.RangeInclusive: // -> ... + .
			return Walker.Ellipsis().consumeNode().andUse(retokenizeWithDotHeadedNSL).finalize();
		case TokenId.RangeExclusiveRight: // -> ... + . + <
			return Walker.Ellipsis().consumeNode().Dot().andUse(retokenizeWithLtHeadedNSL).finalize();
		case TokenId.MethodPointer: // -> ... + &
			return Walker.Ellipsis().consumeNode().andUse(retokenizeWithBitandHeadedNSL).finalize();
		case TokenId.Ellipsis: // -> ... + ..
			return Walker.Ellipsis().consumeNode().andUse(retokenizeWithRangeInclusiveHeadedNSL).finalize();
		// -> ..<
		case TokenId.RangeExclusiveLeft: // -> ..< + ..
			return Walker.RangeExclusiveRight().consumeNode().andUse(retokenizeWithRangeInclusiveHeadedNSL).finalize();
		case TokenId.RangeExclusiveFull: // -> ..< + ..<
			return Walker.RangeExclusiveRight().consumeNode().RangeExclusiveRight().finalize();
		case TokenId.Spaceship: // -> ..< + = + >
			return Walker.RangeExclusiveRight().consumeNode().Assign().andUse(retokenizeWithGtHeadedNSL).finalize();
		case TokenId.LessThan: // -> ..<
			return Walker.RangeExclusiveRight().consumeNode().finalize();
		case TokenId.LessThanOrEqual: // -> ..< + =
			return Walker.RangeExclusiveRight().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.LshiftAssign: // -> ..< + <=
			return Walker.RangeExclusiveRight().consumeNode().andUse(retokenizeWithLteHeadedNSL).finalize();
		default: // remain range inclusive
			return Walker.RangeInclusive().finalize();
	}
};
