import {TokenId, TokenType} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithDotHeadedNSL} from './dot-headed';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a * as headed char.
 *
 * @ok 20250612
 */
export const retokenizeWithMultipleHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new class extends RetokenizeNodeWalker {
		protected finalizeNodeOnInAirText(): this {
			return this;
		}

		SpreadDot(): this {
			return this.createNode(TokenId.SpreadDot, TokenType.Operator, '*.');
		}

		Power(): this {
			return this.createNode(TokenId.Power, TokenType.Operator, '**');
		}

		MultipleAssign(): this {
			return this.createNode(TokenId.MultipleAssign, TokenType.Operator, '*=');
		}

		Multiple(): this {
			return this.createNode(TokenId.Multiple, TokenType.Operator, '*');
		}

		SlashyGStringQuotationMark(): this {
			return this.createNode(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
		}
	}('*', recognition);

	// to find the node which can be combined with the beginning multiple
	switch (Walker.currentNode?.tokenId) {
		case TokenId.Dot: // -> *.
			return Walker.SpreadDot().consumeNode().finalize();
		case TokenId.SpreadDot: // -> ** + .
			return Walker.Power().consumeNode().andUse(retokenizeWithDotHeadedNSL).finalize();
		case TokenId.Power: // -> ** + *
			return Walker.Power().consumeNode().andUse(retokenizeWithMultipleHeadedNSL).finalize();
		case TokenId.PowerAssign: // -> ** + *=
			return Walker.Power().consumeNode().MultipleAssign().finalize();
		case TokenId.Multiple: // -> **
			return Walker.Power().consumeNode().finalize();
		case TokenId.MultipleAssign: // -> ** + =
			return Walker.Power().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		case TokenId.MultipleLinesCommentEndMark: // -> ** + /
			return Walker.Power().consumeNode().SlashyGStringQuotationMark().finalize();
		case TokenId.Divide: // -> * + /, / should be treated as slashy gstring quotation mark
			return Walker.Multiple().finalize();
		case TokenId.Assign: // -> *=
			return Walker.MultipleAssign().consumeNode().finalize();
		case TokenId.NumericBasePart: {// if starts with ., then -> *. + ....
			const text = Walker.currentNode.text;
			if (text.startsWith('.')) {
				// a decimal literal, move the . to
				return Walker.SpreadDot().consumeNode().NumericBasePart(text.slice(1)).finalize();
			} else {
				return Walker.Multiple().finalize();
			}
		}
		default:
			return Walker.Multiple().finalize();
	}
};
