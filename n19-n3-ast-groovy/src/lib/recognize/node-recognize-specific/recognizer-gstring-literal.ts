import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';
import {IdentifierRecognizeUtils} from './recognizer-identifier';
import {SLRecognizeUtils} from './recognizer-string-literal';
import {
	retokenizeWith2DoubleQuotesHeadedNSL,
	retokenizeWithDollarHeadedGL,
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
export class GLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static isSingleLine: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.GStringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.GStringQuotationMark;
	};

	static isMultipleLines: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.GStringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.GStringQuotationMarkML;
	};

	/**
	 * 1. split to one `"` and two `""`, and check the next token,
	 * 2. if next is not one of `"`, `"""`, split the `""` to two `"`,
	 * 2. if next is `"`, collect it and merge to `"""`,
	 * 3. if next is `"""`, back to step 1.
	 *
	 * e.g.
	 * 1. when `"""a`, split to `"`, `"`, `"`, `a`,
	 * 2. when `""""a`, split to `"`, `"""`, `a`,
	 * 3. when `"""""""a`, split to `"`, `"""`, `"`, `"`, `a`.
	 *
	 * @ok 20250612
	 */
	static rehydrateGStringQuotationMarkML: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
		// replace node with \
		node.replaceTokenNatureAndText(TokenId.GStringQuotationMark, TokenType.Mark, '"');
		// retokenize from next node
		const [newNodes, consumedNodeCount] = retokenizeWith2DoubleQuotesHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split $/ to $ and /,
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringQuotationStartMarkGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.GStringInterpolationStartMark, TokenType.Mark, '$');
		// treated the 2nd / as chars
		// insert new node
		nodes.splice(nodeIndex + 1, 0, GroovyAstNode.createAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Mark, text: '/',
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * split /$ to / and $,
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringQuotationEndMarkGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.Chars, TokenType.Chars, '/');
		// seek more
		const [newNodes, consumedNodeCount] = retokenizeWithDollarHeadedGL({
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
	static splitSlashyGStringSlashEscapeGL: NodeRehydrateFunc = SLRecognizeUtils.splitSlashyGStringSlashEscapeSL;

	/**
	 * split $$ to $ and $,
	 *
	 * @ok 20250612
	 */
	static splitDollarSlashyGStringDollarEscapeGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// replace node with $
		node.replaceTokenNatureAndText(TokenId.GStringInterpolationStartMark, TokenType.Mark, '$');
		// seek more
		const [newNodes, consumedNodeCount] = retokenizeWithDollarHeadedGL({
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
	 * for split text, there are 3 possibilities:
	 * 1. $,
	 * 2. identifier
	 * 3. chars since the first char of text cannot be first char of identifier,
	 *
	 * and for last part is $, seek more.
	 *
	 * @ok 20250616
	 */
	static rehydrateIdentifierGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;

		// will not consume any node but given one
		const Walker = new UseUpInAirTextRetokenizeNodeWalker('', {
			node, nodeIndex, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});

		const parts = IdentifierRecognizeUtils.splitWith$(node.text, (part) => part);

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
				Walker.andUse(retokenizeWithDollarHeadedGL);
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