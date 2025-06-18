import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';
import {retokenizeWithAssignHeadedNSL} from './retokenize';

export class DivideAssignRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split /= to / and =.
	 * - 1st / ends slashy gstring literal,
	 * - 2nd =, seek more
	 * works only in slashy gstring literal.
	 *
	 * SGL: When Parent Is Slashy GString Literal.
	 *
	 * @done 20250613
	 */
	static splitSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with /
		node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
		// retokenize with the 2nd /, must be a divide
		const [newNodes, consumedNodeCount] = retokenizeWithAssignHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the consumed nodes and insert new node
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split to / and =
	 * 1. 1st / starts slashy gstring literal,
	 * 2. 2nd =, chars
	 *
	 * @done 20250616
	 */
	static splitNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const isSlashyGStringQuotationMark = RecognizeCommonUtils.isSlashyGStringQuotationMark(recognition);

		if (isSlashyGStringQuotationMark) {
			node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
			nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
				tokenId: TokenId.Chars, tokenType: TokenType.Chars, text: '=',
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			}));
			return nodeIndex;
		} else {
			return (void 0);
		}
	};
}
