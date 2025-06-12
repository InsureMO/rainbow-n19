import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';
import {
	RecognizeCommonUtils,
	RetokenizeAstRecognition,
	RetokenizedNodes,
	RetokenizeNodeWalker
} from './recognizer-common';
import {NSLRecognizeUtils} from './recognizer-not-any-string-literal';

export class SingleLineCommentRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * retokenize tokens with a / as headed char.
	 * works only when parent is not any string literal.
	 *
	 * the previous node is slashy gstring literal
	 *
	 * @ok 20250611
	 */
	private static retokenizeWithDivideHeadedNSL = (recognition: RetokenizeAstRecognition): RetokenizedNodes => {
		const Walker = new class extends RetokenizeNodeWalker {
			protected finalizeNodeOnInAirText(): this {
				return this;
			}

			Divide(): this {
				return this.createNode(TokenId.Divide, TokenType.Operator, '/');
			}

			SLCommentStartMark(): this {
				return this.createNode(TokenId.SingleLineCommentStartMark, TokenType.Mark, '//');
			}

			MLCommentStartMark(): this {
				return this.createNode(TokenId.MultipleLinesCommentStartMark, TokenType.Mark, '/*');
			}

			DivideAssign(): this {
				return this.createNode(TokenId.DivideAssign, TokenType.Operator, '/=');
			}
		}('/', recognition);

		// to find the node which can be combined with the beginning divide
		// token starts with /, possible tokens are //, /*, /$, /=
		switch (Walker.currentNode?.tokenId) {
			// -> //, and an optional part
			case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
			case TokenId.Divide: // -> //
				return Walker.SLCommentStartMark().consumeNode().finalize();
			case TokenId.DollarSlashyGStringQuotationEndMark: // -> // + $
				return Walker.SLCommentStartMark().consumeNode().chars('$').finalize();
			case TokenId.DivideAssign: // -> // + =
				return Walker.SLCommentStartMark().consumeNode().chars('=').finalize();
			case TokenId.SingleLineCommentStartMark: // -> // + /
				return Walker.SLCommentStartMark().consumeNode().chars('/').finalize();
			case TokenId.MultipleLinesCommentStartMark: // -> // + *
				return Walker.SLCommentStartMark().consumeNode().chars('*').finalize();
			// -> /*, and an optional part
			case TokenId.SpreadDot: // -> /* + .
				return Walker.MLCommentStartMark().consumeNode().chars('.').finalize();
			case TokenId.Power: // -> /* + *
				return Walker.MLCommentStartMark().consumeNode().chars('*').finalize();
			case TokenId.PowerAssign: // -> /* + *=
				return Walker.MLCommentStartMark().consumeNode().chars('*=').finalize();
			case TokenId.Multiple: // -> /*
				return Walker.MLCommentStartMark().consumeNode().finalize();
			case TokenId.MultipleAssign: // -> /* + =
				return Walker.MLCommentStartMark().consumeNode().chars('=').finalize();
			case TokenId.MultipleLinesCommentEndMark: // -> /* + /
				return Walker.MLCommentStartMark().consumeNode().chars('/').finalize();
			// -> /$, and an optional part
			case TokenId.DollarSlashyGStringQuotationStartMark: // -> /+ $/
			case TokenId.DollarSlashyGStringDollarEscape: // -> / + $$
			case TokenId.GStringInterpolationLBraceStartMark: // / + ${
			case TokenId.Identifier: // / + identifier
				// in-air / is after slashy gstring literal, insist on what it is. which means the in-air / is a divide
				return Walker.Divide().finalize();
			// -> /=, and an optional part
			case TokenId.Assign: // -> /=
				return Walker.DivideAssign().consumeNode().finalize();
			case TokenId.Equal: // -> /= + =
				return Walker.DivideAssign().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithAssignHeadedNSL).finalize();
			case TokenId.Identical:  // -> /= + ==
				return Walker.DivideAssign().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithEqualHeadedNSL).finalize();
			case TokenId.RegexFind:  // -> /= + ~
				return Walker.DivideAssign().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithBitnotHeadedNSL).finalize();
			case TokenId.RegexMatch:  // -> /= + =~
				return Walker.DivideAssign().consumeNode().andUse(NSLRecognizeUtils.retokenizeWithRegexFindHeadedNSL).finalize();
			default: // cannot combine with the beginning /
				return Walker.Divide().finalize();
		}
	};

	/**
	 * split // to / and /.
	 * - 1st / ends slashy gstring literal,
	 * - 2nd / is NSL
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
		// retokenize with the 2nd /, must be a divide
		const [newNodes, consumedNodeCount] = SingleLineCommentRecognizeUtils.retokenizeWithDivideHeadedNSL({
			node: nodes[nodeIndex + 1], nodeIndex: nodeIndex + 1, nodes,
			compilationUnit, astRecognizer,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the consumed nodes and insert new node
		nodes.splice(nodeIndex + 1, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};
}
