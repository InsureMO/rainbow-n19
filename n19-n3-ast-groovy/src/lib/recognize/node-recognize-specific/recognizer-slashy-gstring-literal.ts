import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {IdentifierRecognizeUtils} from './recognizer-identifier';
import {NSLRecognizeUtils} from './recognizer-not-any-string-literal';
import {
	retokenizeWithBackslashHeadedSGL,
	retokenizeWithDollarHeadedNSL,
	retokenizeWithDollarHeadedSGL,
	UseUpInAirTextRetokenizeNodeWalker
} from './retokenize';

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
	static splitBackslashEscapeSGL: NodeRehydrateFunc = SGLRecognizeUtils.splitBackslashHeadedSGL(retokenizeWithBackslashHeadedSGL);

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 *
	 * @ok 20250612
	 */
	static splitDollarEscapeSGL: NodeRehydrateFunc = SGLRecognizeUtils.splitBackslashHeadedSGL(retokenizeWithDollarHeadedSGL);

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
		const [newNodes, consumedNodeCount] = retokenizeWithDollarHeadedNSL({
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
		const [newNodes, consumedNodeCount] = retokenizeWithDollarHeadedSGL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split by $
	 *
	 * for split text, there are 5 possibilities:
	 * 1. $ followed by another $, chars,
	 * 2. $ followed by identifier, gstring interpolation start,
	 * 3. $ followed by non-identifier, chars,
	 * 4. identifier
	 * 5. chars since the first char of text cannot be first char of identifier,
	 *
	 * and for last part is $, seek more.
	 *
	 * @ok 20250616
	 */
	static rehydrateIdentifierSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// will not consume any node but given one
		const Walker = new UseUpInAirTextRetokenizeNodeWalker('', {
			node, nodeIndex, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});

		const parts = IdentifierRecognizeUtils.splitWith$(node.text, (part, index, parts) => {
			if (part[1] === TokenId.GStringInterpolationStartMark) {
				const next = parts[index - 1];
				if (next.type === TokenId.Identifier) {
					// do nothing, it is a start mark
					return part;
				} else {
					// next is chars or start mark, rehydrate to chars
					return {text: part[0], type: TokenId.Chars};
				}
			} else {
				return part;
			}
		});

		for (const part of parts) {
			Walker.setInAirText(part[0]);
			if (part[1] === TokenId.GStringInterpolationStartMark) {
				Walker.GStringInterpolationStartMark();
			} else if (part[1] === TokenId.Identifier) {
				// can be identifier
				Walker.Identifier();
			} else if (part[1] === TokenId.Chars) {
				// cannot be identifier, then rehydrate to chars
				Walker.chars(part[0]);
			} else {
				Walker.andUse(retokenizeWithDollarHeadedSGL);
				Walker.clearInAirText();
				break;
			}
		}

		const [newNodes, consumedNodeCount] = Walker.finalize();
		// replace node
		node.replaceTokenNatureAndText(newNodes[0].tokenId, newNodes[0].tokenType, newNodes[0].text);
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...(newNodes.slice(1)));
		return nodeIndex;
	};
}
