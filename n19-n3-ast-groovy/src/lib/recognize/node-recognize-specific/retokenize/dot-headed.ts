import {TokenId, TokenType} from '../../../tokens';
import {retokenizeWithAssignHeadedNSL} from './assign-headed';
import {retokenizeWithBitandHeadedNSL} from './bitand-headed';
import {retokenizeWithNumericBasePartHeadedNSL} from './numeric-base-part-headed';
import {retokenizeWithRangeInclusiveHeadedNSL} from './range-inclusive-headed';
import {RetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a . as headed char.
 *
 * @ok 20250613
 */
export const retokenizeWithDotHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new class extends RetokenizeNodeWalker {
		protected finalizeNodeOnInAirText(): this {
			return this;
		}

		MethodPointer(): this {
			return this.createNode(TokenId.MethodPointer, TokenType.Operator, '.&');
		}

		RangeInclusive(): this {
			return this.createNode(TokenId.RangeInclusive, TokenType.Operator, '..');
		}

		Ellipsis(): this {
			return this.createNode(TokenId.Ellipsis, TokenType.Operator, '...');
		}

		Dot(): this {
			return this.createNode(TokenId.Dot, TokenType.Separator, '.');
		}
	}('.', recognition);

	// to find the node which can be combined with the beginning dot
	// could be .&, .., ..., ..<
	switch (Walker.currentNode?.tokenId) {
		// -> .&
		case TokenId.Bitand: // -> .&
			return Walker.MethodPointer().consumeNode().finalize();
		case TokenId.And: // -> .& + &
			return Walker.MethodPointer().consumeNode().andUse(retokenizeWithBitandHeadedNSL).finalize();
		case TokenId.BitandAssign: // -> .& + =
			return Walker.MethodPointer().consumeNode().andUse(retokenizeWithAssignHeadedNSL).finalize();
		// -> ..
		case TokenId.NumericBasePart: {
			const text = Walker.currentNode.text;
			if (text.startsWith('.')) { // -> .. + numeric, seek more
				return Walker.RangeInclusive().consumeNode().andUse(recognition => {
					return retokenizeWithNumericBasePartHeadedNSL(text.slice(1), recognition);
				}).finalize();
			} else { // -> remain dot
				return Walker.Dot().finalize();
			}
		}
		// -> ...
		case TokenId.Ellipsis: // -> ... + .
			return Walker.Ellipsis().consumeNode().andUse(retokenizeWithDotHeadedNSL).finalize();
		// -> .., ..., ..<
		case TokenId.Dot: { // seek more by 2 dots
			const [newNodes, consumeNodeCount] = retokenizeWithRangeInclusiveHeadedNSL({
				node: recognition.nodes[recognition.nodeIndex + 1], nodeIndex: recognition.nodeIndex + 1,
				nodes: recognition.nodes,
				compilationUnit: recognition.compilationUnit, astRecognizer: recognition.astRecognizer,
				startOffset: recognition.startOffset + 1,
				startLine: recognition.startLine, startColumn: recognition.startColumn + 1
			});
			// the dot node is consumed anyway
			return [newNodes, consumeNodeCount + 1];
		}
		default:
			return Walker.Dot().finalize();
	}
};
