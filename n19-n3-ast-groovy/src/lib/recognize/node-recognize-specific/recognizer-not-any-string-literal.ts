import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils} from './recognizer-common';
import {
	Retokenize,
	retokenizeWithDollarHeadedNSL,
	retokenizeWithDollarHeadedSGL,
	retokenizeWithDoubleQuoteHeadedNSL,
	retokenizeWithIdentifiableTextHeadedNSL,
	retokenizeWithIntegralTextHeadedNSL,
	retokenizeWithSingleQuoteHeadedNSL
} from './retokenize';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * AGL: When Parent is Any GString Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class NSLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split \.... to \ and .....
	 *
	 * @done 20250611
	 */
	static splitBackslashHeadedNSL = (retokenize: Retokenize): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
			// replace node with \
			node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, '\\');
			// retokenize from next node
			const [newNodes, consumedNodeCount] = retokenize({
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
				compilationUnit, astRecognizer,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			});
			// replace the original nodes
			nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
			return nodeIndex;
		};
	};

	/**
	 * split \b to \ and b, b needs check the following node.
	 *
	 * @done 20250611
	 */
	static splitBackspaceEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return retokenizeWithIdentifiableTextHeadedNSL('b', recognition);
	});

	/**
	 * split \f to \ and f, f needs check the following node.
	 *
	 * @done 20250611
	 */
	static splitFormFeedEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return retokenizeWithIdentifiableTextHeadedNSL('f', recognition);
	});

	/**
	 * split \n to \ and n, n needs check the following node.
	 *
	 * @done 20250611
	 */
	static splitNewlineEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return retokenizeWithIdentifiableTextHeadedNSL('n', recognition);
	});

	/**
	 * split \r to \ and r, r needs check the following node.
	 *
	 * @done 20250611
	 */
	static splitCarriageReturnEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return retokenizeWithIdentifiableTextHeadedNSL('r', recognition);
	});

	/**
	 * split \t to \ and t, t needs check the following node.
	 *
	 * @done 20250611
	 */
	static splitTabulationEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
		return retokenizeWithIdentifiableTextHeadedNSL('t', recognition);
	});

	/**
	 * split \' to \ and ', ' needs check the following node.
	 *
	 * @done 20250612
	 */
	static splitSingleQuoteEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL(retokenizeWithSingleQuoteHeadedNSL);

	/**
	 * split \" to \ and ", " needs check the following node.
	 *
	 * @done 20250612
	 */
	static splitDoubleQuoteEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL(retokenizeWithDoubleQuoteHeadedNSL);

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 *
	 * @done 20250612
	 */
	static splitDollarEscapeNSL: NodeRehydrateFunc = NSLRecognizeUtils.splitBackslashHeadedNSL(retokenizeWithDollarHeadedNSL);

	/**
	 * split \... to \ and ..., ... needs check the following node. ... is numbers from 0 to 7 with a length of 0 to 3 digits.
	 *
	 * @done 20250612
	 */
	static splitOctalEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node} = recognition;
		const remainText = node.text.slice(1);
		return NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
			return retokenizeWithIntegralTextHeadedNSL(remainText, recognition);
		})(recognition);
	};

	/**
	 * split \u.... to \ and u...., u.... needs check the following node. u.... is u and numbers from 0-9a-fA-F with a length of 4 digits.
	 *
	 * @done 20250612
	 */
	static splitUnicodeEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node} = recognition;
		const remainText = node.text.slice(1);
		return NSLRecognizeUtils.splitBackslashHeadedNSL((recognition) => {
			return retokenizeWithIdentifiableTextHeadedNSL(remainText, recognition);
		})(recognition);
	};

	/**
	 * split /$ to / and $, needs to check the / is start of slashy gstring literal or just a divide, and $ needs to seek more following nodes
	 *
	 * @done 20250612
	 */
	static splitDollarSlashyGStringQuotationEndMarkNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		const isSlashyGStringQuotationMark = RecognizeCommonUtils.isSlashyGStringQuotationMark(recognition);

		if (!isSlashyGStringQuotationMark) {
			// split to divide and more
			node.replaceTokenNatureAndText(TokenId.Divide, TokenType.Operator, '/');
			const [newNodes, consumedNodeCount] = retokenizeWithDollarHeadedNSL({
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
				compilationUnit, astRecognizer,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			});
			nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
			return nodeIndex;
		} else {
			// start of slashy gstring literal
			node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
			const [newNodes, consumedNodeCount] = retokenizeWithDollarHeadedSGL({
				node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
				compilationUnit, astRecognizer,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			});
			nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
			return nodeIndex;
		}
	};

	/**
	 * split \/ to \ and /, / after \ and not in any string literal, always treated as slashy gstring quotation mark
	 *
	 * @done 20250611
	 */
	static splitSlashyGStringSlashEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace node with \
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, '\\');
		// treated the 2nd / as slashy gstring quotation mark
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark, text: '/',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * seek more following nodes to combine this $$, or it is an identifier
	 *
	 * @done 20250612
	 */
	static rehydrateDollarSlashyGStringDollarEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
		const [newNodes, consumedNodeCount] = retokenizeWithIdentifiableTextHeadedNSL('$$', {
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 2, startLine: node.startLine, startColumn: node.startColumn + 2
		});
		if (consumedNodeCount === 0) {
			node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
		} else {
			nodes.splice(nodeIndex, 1 + consumedNodeCount, ...newNodes);
		}
		return nodeIndex;
	};

	/**
	 * split to $ and {,
	 *
	 * @done 20250612
	 */
	static splitGStringInterpolationLBraceStartMarkNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace node with \
		node.replaceTokenNatureAndText(TokenId.Identifier, TokenType.Identifier, '$');
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.LBrace, tokenType: TokenType.Separator,
			text: '{',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};
}
