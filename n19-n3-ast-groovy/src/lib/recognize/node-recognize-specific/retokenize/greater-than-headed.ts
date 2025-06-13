import {TokenId, TokenType} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithBitnotHeadedNSL} from './bitnot-headed';
import {retokenizeWithEqualHeadedNSL} from './equal-headed';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a > as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithGtHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new class extends RetokenizeNodeWalker {
		protected finalizeNodeOnInAirText(): this {
			return this;
		}

		GreaterThanOrEqual(): this {
			return this.createNode(TokenId.GreaterThanOrEqual, TokenType.Operator, '>=');
		}

		RegexFind(): this {
			return this.createNode(TokenId.RegexFind, TokenType.Operator, '=~');
		}

		Rshift(): this {
			return this.createNode(TokenId.Rshift, TokenType.Operator, '>>');
		}

		RshiftAssign(): this {
			return this.createNode(TokenId.RshiftAssign, TokenType.Operator, '>>=');
		}

		UrshiftAssign(): this {
			return this.createNode(TokenId.UrshiftAssign, TokenType.Operator, '>>>=');
		}

		Urshift(): this {
			return this.createNode(TokenId.Urshift, TokenType.Operator, '>>>');
		}

		GreaterThan(): this {
			return this.createNode(TokenId.GreaterThan, TokenType.Operator, '>');
		}

	}('>', recognition);

	// to find the node which can be combined with the beginning <
	// could be >=, >>, >>=, >>>, >>>=
	switch (Walker.currentNode?.tokenId) {
		// -> >=
		case TokenId.RegexFind: // -> >= + ~
			return Walker.GreaterThanOrEqual().consumeNode().andUse(retokenizeWithBitnotHeadedNSL).finalize();
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
