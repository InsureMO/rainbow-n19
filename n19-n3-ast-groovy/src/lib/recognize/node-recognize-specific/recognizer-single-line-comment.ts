import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';

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
	 */
	static splitStartMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			RecognizeCommonUtils.createSlashyGStringQuotationMarkNode,
			RecognizeCommonUtils.retokenizeWithDivideHeadedNSL);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
