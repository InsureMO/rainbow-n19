import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {retokenizeWithDivideHeadedDSGL, retokenizeWithMultipleHeadedNSL} from './retokenize';

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
	 *
	 * @ok 20250611
	 */
	static splitStartMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with /
		node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
		// retokenize with the 2nd *
		const [newNodes, consumedNodeCount] = retokenizeWithMultipleHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the consumed nodes and insert new node
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split * / (no blank actually) to * and /.
	 * - * is SGL
	 * - / ends slashy gstring literal,
	 * works only in slashy gstring literal.
	 *
	 * SGL: When Parent Is Slashy GString Literal.
	 *
	 * @ok 20250611
	 */
	static splitEndMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace node with *
		node.replaceTokenNatureAndText(TokenId.Multiple, TokenType.Operator, '*');
		// treated the 2nd / as slashy gstring quotation mark
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark, text: '/',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * split * / (no blank actually)  to * and /.
	 * - 1st * to chars,
	 * - 2nd / to seek more
	 * works only in dollar slashy gstring literal.
	 *
	 * DSGL: When Parent Is Dollar Slashy GString Literal.
	 *
	 * @ok 20250617
	 */
	static splitEndMarkDSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
		// replace node with *
		node.replaceTokenNatureAndText(TokenId.Multiple, TokenType.Operator, '*');
		// retokenize with the 2nd /, seek more
		const [newNodes, consumedNodeCount] = retokenizeWithDivideHeadedDSGL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the consumed nodes and insert new node
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
