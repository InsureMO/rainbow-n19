import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';

export class MultipleLinesCommentRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split /* to / and *, * needs check the following node.
	 * works only in slashy gstring literal
	 */
	static splitStartMarkToSlashyGStringQuotationMarkAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			RecognizeCommonUtils.createSlashyGStringQuotationMark,
			RecognizeCommonUtils.retokenizeWithMultipleHeaded);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split * / (no blank actually) to * and /,
	 * works only in slashy gstring literal
	 */
	static splitEndMarkToMultipleAndSlashyGStringQuotationMark: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			(position) => RecognizeCommonUtils.createMultipleNode(position, 1),
			(recognition) => {
				const {startOffset, startLine, startColumn} = recognition;
				const [nodes, consumedNodeCount] = RecognizeCommonUtils.createSlashyGStringQuotationMark({
					startOffset, startLine, startColumn
				}, 0);
				return [nodes, consumedNodeCount];
			});
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
