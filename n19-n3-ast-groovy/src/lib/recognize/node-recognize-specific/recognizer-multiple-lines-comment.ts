import {Optional} from '@rainbow-n19/n3-ast';
import {AstLiterals, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';

export class MultipleLinesCommentRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split /* to / and *.
	 * - / ends slashy gstring literal,
	 * - * is NSL
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
			RecognizeCommonUtils.retokenizeWithMultipleHeaded);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split * / (no blank actually) to * and /.
	 * - * is SGL
	 * - / ends slashy gstring literal,
	 * works only in slashy gstring literal.
	 *
	 * SGL: When Parent Is Slashy GString Literal.
	 */
	static splitEndMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace the original nodes
		node.replaceTokenNatureAndText(TokenId.Multiple, TokenType.Operator, AstOperators.Multiple);
		nodes.splice(nodeIndex + 1, 0, new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};
}
