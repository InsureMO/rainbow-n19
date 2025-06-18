import {TokenId} from '../../../tokens';
import {retokenizeWithBitandHeadedNSL} from './bitand-headed';
import {retokenizeWithDotHeadedNSL} from './dot-headed';
import {retokenizeWithLteHeadedNSL} from './less-than-or-equal-headed';
import {retokenizeWithRangeExclusiveLeftHeadedNSL} from './range-exclusive-left-headed';
import {retokenizeWithRangeInclusiveHeadedNSL} from './range-inclusive-headed';
import {UseUpInAirTextRetokenizeNodeWalker} from './retokenize-node-walker';
import {RetokenizeAstRecognition, RetokenizedNodes} from './types';

/**
 * retokenize tokens with a < as headed char.
 *
 * @done 20250613
 */
export const retokenizeWithLtHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('<', recognition);

	// to find the node which can be combined with the beginning <
	// could be <<, <<=, <.., <..<, <=>, <=,
	switch (Walker.currentNode?.tokenId) {
		// -> <<
		case TokenId.LessThan: // -> <<
			return Walker.Lshift().consumeNode().finalize();
		// -> <<=
		case TokenId.LessThanOrEqual: // -> <<=
			return Walker.LshiftAssign().consumeNode().finalize();
		// -> <..<
		case TokenId.RangeExclusiveRight: // -> <..<
			return Walker.RangeExclusiveFull().consumeNode().finalize();
		// -> <..
		case TokenId.RangeInclusive: { // -> <.., seek more
			const [newNodes, consumeNodeCount] = retokenizeWithRangeExclusiveLeftHeadedNSL({
				node: recognition.nodes[recognition.nodeIndex + 1], nodeIndex: recognition.nodeIndex + 1,
				nodes: recognition.nodes,
				compilationUnit: recognition.compilationUnit, astRecognizer: recognition.astRecognizer,
				startOffset: recognition.startOffset + 1,
				startLine: recognition.startLine, startColumn: recognition.startColumn + 1
			});
			// the dot node is consumed anyway
			return [newNodes, consumeNodeCount + 1];
		}
		case TokenId.Dot: { // -> <., seek more
			const [newNodes, consumeNodeCount] = retokenizeWithLtAndDotHeadedNSL({
				node: recognition.nodes[recognition.nodeIndex + 1], nodeIndex: recognition.nodeIndex + 1,
				nodes: recognition.nodes,
				compilationUnit: recognition.compilationUnit, astRecognizer: recognition.astRecognizer,
				startOffset: recognition.startOffset + 1,
				startLine: recognition.startLine, startColumn: recognition.startColumn + 1
			});
			// the dot node is consumed anyway
			return [newNodes, consumeNodeCount + 1];
		}
		case TokenId.Ellipsis: // -> <.. + .
			return Walker.RangeExclusiveLeft().consumeNode().andUse(retokenizeWithDotHeadedNSL).finalize();
		// -> <=>, <=
		case TokenId.Assign: { // -> <=, seek more
			const [newNodes, consumeNodeCount] = retokenizeWithLteHeadedNSL({
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
			return Walker.LessThan().finalize();
	}
};

/**
 * retokenize tokens with a <. as headed chars.
 *
 * @done 20250613
 */
export const retokenizeWithLtAndDotHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
	const Walker = new UseUpInAirTextRetokenizeNodeWalker('<.', recognition);

	// to find the node which can be combined with the beginning <
	// token starts with <., possible tokens are <.., <..<
	switch (Walker.currentNode?.tokenId) {
		// -> <..
		case TokenId.RangeInclusive: // -> <.. + .
			return Walker.RangeExclusiveLeft().consumeNode().andUse(retokenizeWithDotHeadedNSL).finalize();
		case TokenId.RangeExclusiveRight: // -> <.. + . + <
			return Walker.RangeExclusiveLeft().consumeNode().Dot().andUse(retokenizeWithLtHeadedNSL).finalize();
		case TokenId.MethodPointer: // -> <.. + &
			return Walker.RangeExclusiveLeft().consumeNode().andUse(retokenizeWithBitandHeadedNSL).finalize();
		case TokenId.Ellipsis: // -> <.. + ..
			return Walker.RangeExclusiveLeft().consumeNode().andUse(retokenizeWithRangeInclusiveHeadedNSL).finalize();
		// -> <.., <..<
		case TokenId.Dot: { // seek more nodes
			const [newNodes, consumedNodeCount] = retokenizeWithRangeExclusiveLeftHeadedNSL({
				node: recognition.nodes[recognition.nodeIndex + 1], nodeIndex: recognition.nodeIndex + 1,
				nodes: recognition.nodes,
				compilationUnit: recognition.compilationUnit, astRecognizer: recognition.astRecognizer,
				startOffset: recognition.startOffset + 1,
				startLine: recognition.startLine, startColumn: recognition.startColumn + 1
			});
			return [newNodes, 1 + consumedNodeCount];
		}
		default:
			return Walker.LessThan().andUse(retokenizeWithDotHeadedNSL).finalize();
	}
};
