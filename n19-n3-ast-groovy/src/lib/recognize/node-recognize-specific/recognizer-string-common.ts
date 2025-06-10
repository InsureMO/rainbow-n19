import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstLiterals, AstOperators, isJavaIdentifierStartAndNotIdentifierIgnorable} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';
import {RecognizeCommonUtils, RetokenizedHeadNodes, RetokenizeRestNodes} from './recognizer-common';

/**
 * NSL: When Parent Is Not Any String Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 *
 */
export class StringLiteralRecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

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
	 * parameter is `'` and `'''`, or `"` and `"""`
	 */
	static buildRehydrateStringQuotationMarkML = (
		params:
			| [slTokenId: TokenId.StringQuotationMark, mlTokenId: TokenId.StringQuotationMarkML, slMark: AstLiterals.StringQuotationMark, mlMark: AstLiterals.StringQuotationMarkML]
			| [slTokenId: TokenId.GStringQuotationMark, mlTokenId: TokenId.GStringQuotationMarkML, slMark: AstLiterals.GStringQuotationMark, mlMark: AstLiterals.GStringQuotationMarkML]
	): NodeRehydrateFunc => {
		const [slTokenId, mlTokenId, slMark, mlMark] = params;

		// in following comments, `'` could be `"`, depends on the given parameter values
		return (recognition: AstRecognition): Optional<number> => {
			const {node, nodeIndex, nodes} = recognition;

			// use the first `'` as quotation mark, now there is a `''` left
			node.replaceTokenNatureAndText(slTokenId, TokenType.Mark, slMark);

			const {startOffset, startLine, startColumn} = node;

			let followingNodeIndex = nodeIndex + 1;
			let followingNode = nodes[followingNodeIndex];
			let followingNodeTokenId = followingNode?.tokenId;
			// a `'` was consumed, so offset and column both plus 1
			const pos = {startOffset: startOffset + 1, startLine, startColumn: startColumn + 1};
			// eslint-disable-next-line no-constant-condition
			while (true) {
				if (followingNodeTokenId !== slTokenId && followingNodeTokenId !== mlTokenId) {
					// following node is the last one, or not `'`, `'''`
					// split left `''` to two `'`
					const node2 = GroovyAstNode.createAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark, ...pos
					});
					const node3 = GroovyAstNode.createAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark,
						startOffset: pos.startOffset + 1, startLine, startColumn: pos.startColumn + 1
					});
					// insert two `'` after next node
					nodes.splice(followingNodeIndex, 0, node2, node3);
					break;
				} else if (followingNodeTokenId === slTokenId) {
					// following node is `'`
					// collect the `'`, and append to the left `''`, to `'''`
					// replace the original following node
					nodes[followingNodeIndex] = new GroovyAstNode({
						tokenId: mlTokenId, tokenType: TokenType.Mark, text: mlMark, ...pos
					});
					break;
				} else if (followingNodeTokenId === mlTokenId) {
					// following node is `'''`
					// collect the first `'`, and append to the left `''`, to `'''`
					// replace the original following node
					nodes[followingNodeIndex] = GroovyAstNode.createAstNode({
						tokenId: mlTokenId, tokenType: TokenType.Mark, text: mlMark, ...pos
					});
					// now there is a `''` left, continue check following nodes
					followingNodeIndex = followingNodeIndex + 1;
					followingNode = nodes[followingNodeIndex];
					followingNodeTokenId = followingNode?.tokenId;
					pos.startOffset = pos.startOffset + 3;
					pos.startColumn = pos.startColumn + 3;
				} else {
					throw new Error(`Unexpected token[text=${node.text}, line=${followingNode.startLine}, column=${followingNode.startColumn}].`);
				}
			}
			return nodeIndex;
		};
	};

	/**
	 * split \.... to \ and ....
	 */
	private static splitBackslashHeadedToBackslashAndMore = (retokenizeRest: RetokenizeRestNodes): NodeRehydrateFunc => {
		return (recognition: AstRecognition): Optional<number> => {
			const {node, nodeIndex, nodes} = recognition;
			const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
					...recognition,
					startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
				},
				RecognizeCommonUtils.createBackslashNode,
				(recognition) => retokenizeRest(recognition));
			// replace the original nodes
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
			return nodeIndex;
		};
	};

	/**
	 * 1. split \b, \f, \n, \r, \t to \ and bfnrt, bfnrt needs check the following node.
	 * 2. split \u.... to \ and u...., u.... needs check the following node. u.... is u and numbers from 0-9a-fA-F with a length of 4 digits.
	 *
	 * both works when parent is not any string literal
	 */
	private static splitBackslashAndBFNRTUToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node} = recognition;
		return StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore((recognition) => {
			return RecognizeCommonUtils.retokenizeWithIdentifiableTextHeaded(node.text.slice(1), recognition);
		})(recognition);
	};

	/**
	 * split \b to \ and b, b needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitBackspaceEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashAndBFNRTUToBackslashAndMore;

	/**
	 * split \f to \ and f, f needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitFormFeedEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashAndBFNRTUToBackslashAndMore;

	/**
	 * split \n to \ and n, n needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitNewlineEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashAndBFNRTUToBackslashAndMore;

	/**
	 * split \r to \ and r, r needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitCarriageReturnEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashAndBFNRTUToBackslashAndMore;

	/**
	 * split \t to \ and t, t needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitTabulationEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashAndBFNRTUToBackslashAndMore;

	/**
	 * split \\ to \ and \, 2nd \ needs check the following node.
	 * works only in slashy gstring literal
	 */
	static splitBackslashEscapeSGL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore(RecognizeCommonUtils.retokenizeWithBackslashHeaded);

	/**
	 * split \\ to \ and \
	 */
	static splitBackslashEscapeDSGL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore((recognition) => {
		const {startOffset, startLine, startColumn} = recognition;
		const [nodes, consumedNodeCount] = RecognizeCommonUtils.createBackslashNode({
			startOffset, startLine, startColumn
		}, 0);
		return [nodes, consumedNodeCount];
	});

	/**
	 * split \\ to \ and \
	 */
	static splitBackslashEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashEscapeDSGL;

	/**
	 * split \' to \ and ', ' needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitSingleQuoteEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore(RecognizeCommonUtils.retokenizeWithSingleQuoteHeaded);

	/**
	 * split \" to \ and ", " needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitDoubleQuoteEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore(RecognizeCommonUtils.retokenizeWithDoubleQuoteHeaded);

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 * works when parent is slashy gstring literal or dollar slashy gstring literal
	 */
	static splitDollarEscapeSGLAndDSGL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore(RecognizeCommonUtils.retokenizeWithDollarHeaded);

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitDollarEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitDollarEscapeSGLAndDSGL;

	/**
	 * for octal escape \..., rebuild it.
	 */
	static rebuildOctalEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		// build octal escape
		node.replaceTokenNatureAndText(TokenId.StringOctalEscape, TokenType.Mark, '');
		astRecognizer.appendAsCurrentParent(node);
		const markNode = new GroovyAstNode({
			tokenId: TokenId.StringOctalEscapeMark, tokenType: TokenType.Mark,
			text: AstChars.Backslash, startOffset,
			startLine, startColumn
		});
		node.asParentOf(markNode);
		const contentNode = new GroovyAstNode({
			tokenId: TokenId.StringOctalEscapeContent, tokenType: TokenType.StringLiteral,
			text: text.slice(1), startOffset: startOffset + 1,
			startLine, startColumn: startColumn + 1
		});
		node.asParentOf(contentNode);
		astRecognizer.closeCurrentParent();
		return nodeIndex + 1;
	};

	/**
	 * split \... to \ and ..., ... needs check the following node. ... is numbers from 0 to 7 with a length of 0 to 3 digits.
	 * works when parent is not any string literal
	 */
	static splitOctalEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node} = recognition;
		return StringLiteralRecognizeCommonUtils.splitBackslashHeadedToBackslashAndMore((recognition) => {
			return RecognizeCommonUtils.retokenizeWithOctalContentHeaded(node.text.slice(1), recognition);
		})(recognition);
	};

	/**
	 * for \u...., rebuild it.
	 */
	static rebuildUnicodeEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		// build Unicode escape
		node.replaceTokenNatureAndText(TokenId.StringUnicodeEscape, TokenType.Mark, '');
		astRecognizer.appendAsCurrentParent(node);
		const markNode = new GroovyAstNode({
			tokenId: TokenId.StringUnicodeEscapeMark, tokenType: TokenType.Mark,
			text: AstLiterals.StringUnicodeEscapeMark, startOffset,
			startLine, startColumn
		});
		node.asParentOf(markNode);
		const contentNode = new GroovyAstNode({
			tokenId: TokenId.StringUnicodeEscapeContent, tokenType: TokenType.StringLiteral,
			text: text.slice(2), startOffset: startOffset + 2,
			startLine, startColumn: startColumn + 2
		});
		node.asParentOf(contentNode);
		astRecognizer.closeCurrentParent();
		return nodeIndex + 1;
	};

	/**
	 * split \u.... to \ and u...., u.... needs check the following node. u.... is u and numbers from 0-9a-fA-F with a length of 4 digits.
	 * works when parent is not any string literal
	 */
	static splitUnicodeEscapeNSL: NodeRehydrateFunc = StringLiteralRecognizeCommonUtils.splitBackslashAndBFNRTUToBackslashAndMore;

	/**
	 * split $/ to $ and /,
	 * works only in gstring literal
	 */
	static splitDollarSlashyGStringQuotationStartMarkGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace the original nodes
		nodes.splice(nodeIndex, 1, new GroovyAstNode({
			tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		}), new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: AstOperators.Divide,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		}));
		return nodeIndex;
	};

	/**
	 * split $/ to $ and /
	 * works only in slashy gstring literal
	 */
	static splitDollarSlashyGStringQuotationStartMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace the original nodes
		nodes.splice(nodeIndex, 1, new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		}), new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * split /$ to / and $,
	 * works only in gstring literal
	 */
	static splitDollarSlashyGStringQuotationEndMarkGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			(position) => RecognizeCommonUtils.createCharsNode(AstOperators.Divide, position),
			RecognizeCommonUtils.retokenizeWithDollarHeaded);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split /$ to / and $,
	 * works only in slashy gstring literal
	 */
	static splitDollarSlashyGStringQuotationEndMarkSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			RecognizeCommonUtils.createSlashyGStringQuotationMark,
			RecognizeCommonUtils.retokenizeWithDollarHeaded);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split /$ to / and $, needs to check the / is start of slashy gstring literal or just a divide, and $ needs to seek more following nodes
	 * works only when parent is not any string literal
	 */
	static splitDollarSlashyGStringQuotationEndMarkNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const [nearestUnignorableNode, nearestUnignorableNodeIndex] = RecognizeCommonUtils.getNearestPreviousUnignorableNode(recognition);
		if (nearestUnignorableNodeIndex !== -1
			&& nearestUnignorableNode.startLine === node.startLine
			&& nearestUnignorableNode.tokenId !== TokenId.Dot
			&& nearestUnignorableNode.tokenType !== TokenType.Operator) {
			// has node in same line, before me
			// the previous unignorable node is not dot or any operator
			// split to divide and more
			const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
					...recognition,
					startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
				},
				(position) => RecognizeCommonUtils.createDivideNode(position, 1),
				RecognizeCommonUtils.retokenizeWithDollarHeaded);
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
			return nodeIndex;
		} else {
			// start of slashy gstring literal
			const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
					...recognition,
					startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
				},
				RecognizeCommonUtils.createSlashyGStringQuotationMark,
				RecognizeCommonUtils.retokenizeWithDollarHeaded);
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
			return nodeIndex;
		}
	};

	/**
	 * split \/ to \ and /
	 * works only when parent is string literal or gstring literal
	 */
	static splitSlashyGStringSlashEscapeSLAndGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// replace the original nodes
		nodes.splice(nodeIndex, 1, new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		}), new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: AstOperators.Divide,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * split \/ to \ and /, needs to check the / is start of slashy gstring literal or just a divide
	 * works only when parent is not any string literal
	 */
	static splitSlashyGStringSlashEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			(position) => RecognizeCommonUtils.createUndeterminedCharsNode(AstChars.Backslash, position),
			RecognizeCommonUtils.retokenizeWithDivideHeaded);
		// replace the original nodes
		nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split $$ to $ and $,
	 * works only in gstring literal
	 */
	static splitDollarSlashyGStringDollarEscapeGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const nextNodeText = nodes[nodeIndex + 1]?.text;
		if (nextNodeText.startsWith(AstChars.LBrace)) {
			const {node, nodeIndex, nodes} = recognition;
			const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
					...recognition,
					startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
				},
				RecognizeCommonUtils.createGStringInterpolationStartMarkNode,
				RecognizeCommonUtils.retokenizeWithDollarHeaded);
			// replace the original nodes
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		} else {
			// replace the original nodes
			nodes.splice(nodeIndex, 1, new GroovyAstNode({
				tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
				text: AstLiterals.GStringInterpolationStartMark,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			}), new GroovyAstNode({
				tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
				text: AstLiterals.GStringInterpolationStartMark,
				startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
			}));
		}
		return nodeIndex;
	};

	/**
	 * split $$ to $ and $, could be chars only, depend on seeking more following nodes for 2nd $,
	 * works only in slashy gstring literal
	 */
	static rehydrateOrSplitDollarSlashyGStringDollarEscapeSGL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const nextNodeText = nodes[nodeIndex + 1]?.text;
		if (nextNodeText.startsWith(AstChars.LBrace)) {
			const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
					...recognition,
					startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
				},
				(position) => RecognizeCommonUtils.createCharsNode(AstLiterals.GStringInterpolationStartMark, position),
				RecognizeCommonUtils.retokenizeWithDollarHeaded);
			// replace the original nodes
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
			return nodeIndex;
		}

		const firstCharOfNextNodeText = nextNodeText[0];
		// never mind the 2nd parameter, which is null, it is unused in function
		if (firstCharOfNextNodeText !== AstLiterals.GStringInterpolationStartMark && isJavaIdentifierStartAndNotIdentifierIgnorable(firstCharOfNextNodeText, null)) {
			const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
					...recognition,
					startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
				},
				(position) => RecognizeCommonUtils.createCharsNode(AstLiterals.GStringInterpolationStartMark, position),
				RecognizeCommonUtils.retokenizeWithDollarHeaded);
			// replace the original nodes
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
			return nodeIndex;
		}

		// chars only
		node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
		return nodeIndex;
	};

	/**
	 * seek more following nodes to combine this $$, or it is an identifier
	 */
	static rehydrateDollarSlashyGStringDollarEscapeNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const [newNodes, consumedNodeCount] = RecognizeCommonUtils.retokenize({
				...recognition,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			},
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			(_position): RetokenizedHeadNodes => [[], 1, 0],
			(recognition) => RecognizeCommonUtils.retokenizeWithIdentifiableTextHeaded('$$', recognition));
		if (consumedNodeCount === 1) {
			node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
		} else {
			nodes.splice(nodeIndex, consumedNodeCount, ...newNodes);
		}
		return nodeIndex;
	};

	/**
	 * split to $ and {,
	 * works only when parent is not any string literal
	 */
	static splitGStringInterpolationLBraceStartMarkNSL: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		nodes.splice(nodeIndex, 1, new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		}), new GroovyAstNode({
			tokenId: TokenId.LBrace, tokenType: TokenType.Separator,
			text: AstChars.LBrace,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		}));
		return nodeIndex;
	};

	/**
	 * return true when,
	 * 1. current node text is backslash,
	 * 2. in ml string literal, or ml gstring literal, or slashy gstring literal, or in dollar gstring literal,
	 * 3. next node is newline.
	 */
	static backslashAtLineEndAndParentTokenTypeIsMLStringLiteral: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		if (node.text !== AstChars.Backslash) {
			return false;
		}

		const currentParent = astRecognizer.getCurrentParent();
		const parentTokenId = currentParent.tokenId;
		switch (parentTokenId) {
			case TokenId.StringLiteral:
				if (currentParent.children?.[0]?.tokenId === TokenId.StringQuotationMark) {
					return false;
				}
				break;
			case TokenId.GStringLiteral:
				if (currentParent.children?.[0]?.tokenId === TokenId.GStringQuotationMark) {
					return false;
				}
				break;
			case TokenId.SlashyGStringLiteral:
			case TokenId.DollarSlashyGStringLiteral:
				break;
			default:
				return false;
		}

		return nodes[nodeIndex]?.tokenId === TokenId.NewLine;
	};
}