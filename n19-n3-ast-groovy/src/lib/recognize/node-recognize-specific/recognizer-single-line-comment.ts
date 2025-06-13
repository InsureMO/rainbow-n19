import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {retokenizeWithDivideHeadedNSL} from './retokenize';

export class SingleLineCommentRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split // to / and /.
	 * - 1st / ends slashy gstring literal,
	 * - 2nd / is NSL
	 * works only in slashy gstring literal.
	 *
	 * NSL: When Parent Is Not Any String Literal,
	 * SGL: When Parent Is Slashy GString Literal.
	 *
	 * @ok 20250611
	 */
	static splitStartMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with /
		node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
		// retokenize with the 2nd /, must be a divide
		const [newNodes, consumedNodeCount] = retokenizeWithDivideHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the consumed nodes and insert new node
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
