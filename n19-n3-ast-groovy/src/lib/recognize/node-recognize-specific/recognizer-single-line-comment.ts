import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';

export class SingleLineCommentRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split // to / and /, 2nd / needs check the following node.
	 * works only in slashy gstring literal
	 */
	static splitStartMarkToSlashGStringQuotationMarkAnMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			RecognizeCommonUtils.createSlashyGStringQuotationMark,
			RecognizeCommonUtils.retokenizeWithDivideHeaded);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
