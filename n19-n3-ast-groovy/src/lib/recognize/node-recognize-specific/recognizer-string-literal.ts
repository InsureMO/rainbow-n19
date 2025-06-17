import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';
import {retokenizeWith2SingleQuotesHeadedNSL} from './retokenize';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * AGL: When Parent is Any GString Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class SLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static isSingleLine: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.StringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.StringQuotationMark;
	};

	static isMultipleLines: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.StringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.StringQuotationMarkML;
	};

	/**
	 * 1. split to one `'` and two `''`, and check the next token,
	 * 2. if next is not one of `'`, `'''`, split the `''` to two `'`,
	 * 2. if next is `'`, collect it and merge to `'''`,
	 * 3. if next is `'''`, back to step 1.
	 *
	 * e.g.
	 * 1. when `'''a`, split to `'`, `'`, `'`, `a`,
	 * 2. when `''''a`, split to `'`, `'''`, `a`,
	 * 3. when `''''''a`, split to `'`, `'''`, `'`, `'`, `a`.
	 *
	 * @ok 20250612
	 */
	static splitStringQuotationMarkML: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
		// replace node with \
		node.replaceTokenNatureAndText(TokenId.StringQuotationMark, TokenType.Mark, '\'');
		// retokenize from next node
		const [newNodes, consumedNodeCount] = retokenizeWith2SingleQuotesHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \/ to \ and /
	 *
	 * @ok 20250612
	 */
	static splitSlashyGStringSlashEscapeSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, '\\');
		// treated the 2nd / as slashy gstring quotation mark
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars, text: '/',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};
}