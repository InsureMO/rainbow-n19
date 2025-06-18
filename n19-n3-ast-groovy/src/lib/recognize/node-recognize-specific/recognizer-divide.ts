import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {
	retokenizeWithDivideHeadedNSL,
	retokenizeWithDollarHeadedNSL,
	UseUpInAirTextRetokenizeNodeWalker
} from './retokenize';

export class DivideRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * current is /, seek more
	 *
	 * DSGL: When Parent Is Dollar Slashy GString Literal.
	 *
	 * @done 20250617
	 */
	static rehydrateDivideDSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		const Walker = new UseUpInAirTextRetokenizeNodeWalker('', {
			node, nodeIndex, nodes, compilationUnit, astRecognizer,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});

		// consume the / anyway
		Walker.consumeNode();

		// to find the node which can be combined with the beginning divide
		// token starts with $, possible tokens are $/, $$, $..., ${...},
		switch (Walker.currentNode?.tokenId) {
			// -> /$
			case TokenId.DollarSlashyGStringQuotationStartMark:
			case TokenId.DollarSlashyGStringSlashEscape: { // -> /$ + /
				const [newNodes, consumedNodeCount] = Walker.DollarSlashyGStringQuotationEndMark().consumeNode().andUse(retokenizeWithDivideHeadedNSL).finalize();
				nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
				break;
			}
			case TokenId.DollarSlashyGStringDollarEscape: { // -> /$ + $
				const [newNodes, consumedNodeCount] = Walker.DollarSlashyGStringQuotationEndMark().consumeNode().andUse(retokenizeWithDollarHeadedNSL).finalize();
				nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
				break;
			}
			case TokenId.GStringInterpolationStartMark: { // -> /$
				const [newNodes, consumedNodeCount] = Walker.DollarSlashyGStringQuotationEndMark().consumeNode().finalize();
				nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
				break;
			}
			case TokenId.GStringInterpolationLBraceStartMark: { // -> /$ + {
				const [newNodes, consumedNodeCount] = Walker.DollarSlashyGStringQuotationEndMark().consumeNode().LBrace().finalize();
				nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
				break;
			}
			default: {
				// replace node token nature
				node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
				break;
			}
		}
		return nodeIndex;
	};
}
