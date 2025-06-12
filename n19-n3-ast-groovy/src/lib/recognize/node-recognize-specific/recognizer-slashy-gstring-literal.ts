import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {RetokenizeAstRecognition, RetokenizedNodes, RetokenizeNodeWalker} from './recognizer-common';
import {NSLRecognizeUtils} from './recognizer-not-any-string-literal';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class SGLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * retokenize tokens with a $ as headed char.
	 */
	static retokenizeWithDollarHeadedSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		throw 'retokenizeWithDollarHeadedSGL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a \ as headed char.
	 *
	 * @ok 20250611
	 */
	static retokenizeWithBackslashHeadedSGL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		const Walker = new class extends RetokenizeNodeWalker {
			protected finalizeNodeOnInAirText(): this {
				return this;
			}

			SlashyGStringSlashEscape(): this {
				return this.createNode(TokenId.SlashyGStringSlashEscape, TokenType.Mark, '\\/');
			}

			SlashyGStringQuotationMark() {
				return this.createNode(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
			}
		}('\\', recognition);

		// to find the node which can be combined with the beginning backslash
		// in slashy gstring literal, \/ is slash escape, so find next node with / started
		// token starts with \, possible tokens are \/
		switch (Walker.currentNode?.tokenId) {
			// -> \/, and an optional part
			case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
			case TokenId.Divide: // -> \/
				return Walker.SlashyGStringSlashEscape().consumeNode().finalize();
			case TokenId.DollarSlashyGStringQuotationEndMark: // -> \/ + $
				return Walker.SlashyGStringSlashEscape().consumeNode().andUse(SGLRecognizeUtils.retokenizeWithDollarHeadedSGL).finalize();
			case TokenId.DivideAssign: // -> \/ + =
				return Walker.SlashyGStringSlashEscape().consumeNode().chars('=').finalize();
			case TokenId.SingleLineCommentStartMark: // -> \/ + /
				return Walker.SlashyGStringSlashEscape().consumeNode().SlashyGStringQuotationMark().finalize();
			case TokenId.MultipleLinesCommentStartMark: // -> \/ + *
				return Walker.SlashyGStringSlashEscape().consumeNode().chars('*').finalize();
			default: // cannot combine with the beginning \
				return Walker.Backslash().finalize();
		}
	};

	/**
	 * split \.... to \ and .....
	 *
	 * @ok 20250611
	 */
	static splitBackslashHeadedSGL = NSLRecognizeUtils.splitBackslashHeadedNSL;

	/**
	 * split \\ to \ and \, 2nd \ needs check the following node.
	 *
	 * @ok 20250611
	 */
	static splitBackslashEscapeSGL: NodeRehydrateFunc = SGLRecognizeUtils.splitBackslashHeadedSGL(SGLRecognizeUtils.retokenizeWithBackslashHeadedSGL);

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 *
	 * @ok 20250612
	 */
	static splitDollarEscapeSGL: NodeRehydrateFunc = SGLRecognizeUtils.splitBackslashHeadedSGL(SGLRecognizeUtils.retokenizeWithDollarHeadedSGL);

	/**
	 * split $/ to $ and /
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringQuotationStartMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.Chars, TokenType.Chars, '$');
		// treated the 2nd / as slashy gstring quotation mark
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark, text: '/',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * split /$ to / and $,
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringQuotationEndMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.SlashyGStringQuotationMark, TokenType.Mark, '/');
		// retokenize from next node
		const [newNodes, consumedNodeCount] = NSLRecognizeUtils.retokenizeWithDollarHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split $$ to $ and $
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringDollarEscapeSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.Chars, TokenType.Chars, '$');
		// seek more
		const [newNodes, consumedNodeCount] = SGLRecognizeUtils.retokenizeWithDollarHeadedSGL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
