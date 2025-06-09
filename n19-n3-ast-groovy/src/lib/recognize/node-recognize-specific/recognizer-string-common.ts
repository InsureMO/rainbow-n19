import {Optional} from '@rainbow-n19/n3-ast';
import {
	AstChars,
	AstLiterals,
	AstOperators,
	AstTokenizer,
	isHexadecimalNumeric,
	isJavaIdentifierStartAndNotIdentifierIgnorable
} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';

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
	 * try to collect following node, to combine as a unicode escape and more, currently in memory there is a $ in air.
	 * the next node must be an identifier, and then check it,
	 * 1. next node starts with char "u", next 4 chars are 0-9a-fA-F,
	 * 1.1. replace next node as a unicode escape node,
	 * 1.2. when there has rest text of next node after u.... part, to collect chars which cannot be first char of identifier,
	 * 1.2.1. char cannot be first char of identifier collected, split them to numeric base part and undetermined chars (not just 2, might more than 2 nodes),
	 *        insert after the escape node. and if not all rest text are consumed, use the rest part of rest text to collect identifier forward maximally,
	 * 1.2.2. when first char of rest text can be first char of identifier, use the rest text to collect identifier forward maximally,
	 * 2. simply create a backslash node.
	 * TODO
	 */
	private static tryToCollectUnicodeAndHandleFollowing = (
		nodes: Array<GroovyAstNode>,
		nextNode: GroovyAstNode, nextNodeIndex: number,
		startOffsetOfBackslash: number, startLineOfBackslash: number, startColumnOfBackslash: number
	): void => {
		// if anything starts with "u", must be an identifier
		const nextNodeText = nextNode.text;
		// never mind the 2nd parameter, which is null, it is unused in function
		if (nextNodeText.length >= 5 && nextNodeText[0] === 'u' && [1, 2, 3, 4].every(index => isHexadecimalNumeric(nextNodeText[index], null as AstTokenizer))) {
			const unicodeText = nextNodeText.slice(0, 5);
			const restText = nextNodeText.slice(5);
			// create a unicode escape
			nodes[nextNodeIndex] = new GroovyAstNode({
				tokenId: TokenId.StringUnicodeEscape, tokenType: TokenType.StringLiteral,
				text: '\\' + unicodeText,
				startOffset: startOffsetOfBackslash,
				startLine: startLineOfBackslash, startColumn: startColumnOfBackslash
			});
			if (restText.length !== 0) {
				// more text after the unicode
				// check the heading chars can be start of identifier or not
				let charIndex = 0;
				// eslint-disable-next-line no-constant-condition
				while (true) {
					// never mind the 2nd parameter, which is null, it is unused in function
					if (!isJavaIdentifierStartAndNotIdentifierIgnorable(restText[charIndex], null as AstTokenizer)) {
						charIndex++;
					} else {
						break;
					}
				}
				if (charIndex === 0) {
					// the rest text is an identifier
					StringLiteralRecognizeCommonUtils.collectIdentifiableContentForwardMaximally(
						restText, nodes, nextNodeIndex + 1, startOffsetOfBackslash + 6, startLineOfBackslash, startColumnOfBackslash + 6);
				} else {
					const headText = restText.slice(0, charIndex);
					// chars in head text can not be first char of identifier,
					// they might be 0-9 or some unicode, such as emoji.
					// split them to numeric base part and undetermined chars
					const parts: Array<[string, 'number' | 'undetermined']> = [];
					let startTextIndex = 0;
					let currentType: Optional<'number' | 'undetermined'> = (void 0);
					for (let textIndex = 0, textCount = headText.length; textIndex < textCount; textIndex++) {
						const char = headText[textIndex];
						const codepoint = char.codePointAt(0);
						// 0 -> 48, 9 -> 57
						if (48 <= codepoint || codepoint >= 57) {
							// not 0-9
							if (currentType == null) {
								currentType = 'undetermined';
							} else if (currentType === 'number') {
								// type changed
								parts.push([headText.slice(startTextIndex, textIndex), 'number']);
								startTextIndex = textIndex;
							}
						} else {
							// 0-9
							if (currentType == null) {
								currentType = 'number';
							} else if (currentType === 'undetermined') {
								// type changed
								parts.push([headText.slice(startTextIndex, textIndex), 'undetermined']);
								startTextIndex = textIndex;
							}
						}
					}
					let startOffsetOfNewNodes = startOffsetOfBackslash + 6;
					let startColumnOfNewNodes = startColumnOfBackslash + 6;
					parts.push([headText.slice(startTextIndex), currentType]);
					const newNodes = parts.map(([text, type]) => {
						let node: GroovyAstNode;
						if (type === 'number') {
							node = new GroovyAstNode({
								tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
								text,
								startOffset: startOffsetOfNewNodes,
								startLine: startLineOfBackslash, startColumn: startColumnOfNewNodes
							});
						} else {
							node = new GroovyAstNode({
								tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
								text,
								startOffset: startOffsetOfNewNodes,
								startLine: startLineOfBackslash, startColumn: startColumnOfNewNodes
							});
						}
						startOffsetOfNewNodes += text.length;
						startColumnOfNewNodes += text.length;
						return node;
					});
					nodes.splice(nextNodeIndex + 1, 0, ...newNodes);

					const identifierText = restText.slice(charIndex);
					if (identifierText.length !== 0) {
						StringLiteralRecognizeCommonUtils.collectIdentifiableContentForwardMaximally(
							restText, nodes, nextNodeIndex + 1 + newNodes.length, startOffsetOfNewNodes, startLineOfBackslash, startColumnOfNewNodes);
					}
				}
			}
		} else {
			// the following node not starts with u....,
			// so insert a \ node
			StringLiteralRecognizeCommonUtils.createBackslashNode(
				nodes, nextNodeIndex, startOffsetOfBackslash, startLineOfBackslash, startColumnOfBackslash);
		}
	};

	/**
	 * split /* to / and *, * needs check the following node.
	 * works only in slashy gstring literal
	 */
	static splitMlCommentStartMarkToSlashyGStringQuotationMarkAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const markNode = new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a * remained
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithMultiple(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, markNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split * / (no blank actually) to * and /,
	 * works only in slashy gstring literal
	 */
	static splitMlCommentEndMarkToMultipleAndSlashyGStringQuotationMark: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const multipleNode = new GroovyAstNode({
			tokenId: TokenId.Multiple, tokenType: TokenType.Operator,
			text: AstOperators.Multiple,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		const markNode = new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex, 1, multipleNode, markNode);
		return nodeIndex;
	};

	/**
	 * split \b to \ and b, b needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitBackspaceEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a b remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithB(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \f to \ and f, f needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitFormFeedEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have an f remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithF(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \n to \ and n, n needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitNewlineEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have an n remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithN(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \r to \ and r, r needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitCarriageReturnEscapeToBackslashAndMore = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have an r remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithR(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \t to \ and t, t needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitTabulationEscapeToBackslashAndMore = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a t remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithT(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \\ to \ and \, 2nd \ needs check the following node.
	 * works only in slashy gstring literal
	 */
	static splitBackslashEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a \ remained.
		// since in slashy gstring literal, the only next char which concerned is /, and they can combine to a \/
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithBackslash(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \\ to \ and \
	 */
	static splitBackslashEscapeTo2Backslashes: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const firstNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		const secondNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex, 1, firstNode, secondNode);
		return nodeIndex;
	};

	/**
	 * split \' to \ and ', ' needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitSingleQuoteEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a ' remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithSingleQuote(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \" to \ and ", " needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitDoubleQuoteEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a " remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDoubleQuote(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 * works when parent is slashy gstring literal or dollar slashy gstring literal
	 */
	static splitDollarEscapeToBackslashAndMoreWhenParentIsSlashyOrDollarSlashyGString: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a $ remained.

		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenId === TokenId.SlashyGStringLiteral) {
			const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsSlashyGString(recognition);
			// replace the original nodes
			nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		} else {
			const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsDollarSlashyGString(recognition);
			// replace the original nodes
			nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		}
		return nodeIndex;
	};

	/**
	 * split \$ to \ and $, $ needs check the following node.
	 * works when parent is not any string literal
	 */
	static splitDollarEscapeToBackslashAndMoreWhenParentIsNotString: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a $ remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsNotString(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * for octal escape \..., rebuild it.
	 */
	static rebuildOctalEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		// build octal escape
		node.replaceTokenNatureAndText(TokenId.StringOctalEscape, TokenType.StringLiteral, '');
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
	static splitOctalEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {text, startOffset, startLine, startColumn} = node;
		// split to \, and 1 - 3 digits 0 - 7
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);

		const nextNodeIndex = nodeIndex + 1;
		const nextNode = nodes[nextNodeIndex];
		const nextNodeTokenId = nextNode?.tokenId;
		const nextNodeText = nextNode?.text;
		if (nextNodeTokenId !== TokenId.NumericBasePart) {
			// create a new numeric base part node, append after \
			nodes.splice(nodeIndex + 1, 0, new GroovyAstNode({
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: text.slice(1),
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			}));
			return nodeIndex;
		}
		if (['b', 'B', 'x', 'X'].includes(nextNodeText[1])) {
			// it is a binary or hexadecimal literal
			const newNode = new GroovyAstNode({
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: text.slice(1) + '0', // 0 is from 0b/0B/0x/0X
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			});
			nodes.splice(nodeIndex + 1, 1, newNode);
			// the rest part of next node is an identifier now
			// check following nodes
			StringLiteralRecognizeCommonUtils.collectIdentifiableContentForwardMaximally(nextNodeText.slice(1), nodes, nodeIndex + 2, startOffset + 1 + text.length, startLine, startColumn + 1 + text.length);
		} else {
			// it is an octal, integral, decimal literal
			// replace the next node with new one
			nodes.splice(nodeIndex + 1, 1, new GroovyAstNode({
				tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral,
				text: text.slice(1) + nextNodeText,
				startOffset: startOffset + 1, startLine, startColumn: startColumn + 1
			}));
		}
		return nodeIndex;
	};

	/**
	 * for \u...., rebuild it.
	 */
	static buildUnicodeEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		// build Unicode escape
		node.replaceTokenNatureAndText(TokenId.StringUnicodeEscape, TokenType.StringLiteral, '');
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
	static splitUnicodeEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		return nodeIndex;
	};

	/**
	 * split $/ to $ and /,
	 * works only in gstring literal
	 */
	static splitDollarSlashyGStringQuotationStartMarkToGStringInterpolationStartMarkAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const markNode = new GroovyAstNode({
			tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a / remained.
		const divideNode = new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: AstOperators.Divide,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// replace the original nodes
		nodes.splice(nodeIndex, 1, markNode, divideNode);

		return nodeIndex;
	};

	/**
	 * split $/ to $ and /
	 * works only in slashy gstring literal
	 */
	static splitDollarSlashyGStringQuotationStartMarkToDollarAndSlashyGStringQuotationMark: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const multipleNode = new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		const markNode = new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex, 1, multipleNode, markNode);
		return nodeIndex;
	};

	/**
	 * split /$ to / and $,
	 * works only in gstring literal
	 */
	static splitDollarSlashyGStringQuotationEndMarkToSlashAndMoreWhenParentIsGString: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const slashNode = new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: AstOperators.Divide,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a $ remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsGString(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, slashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split /$ to / and $,
	 * works only in slashy gstring literal
	 */
	static splitDollarSlashyGStringQuotationEndMarkToSlashyGStringQuotationMarkAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const markNode = new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a $ remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsNotString(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, markNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split /$ to / and $, needs to check the / is start of slashy gstring literal or just a divide, and $ needs to seek more following nodes
	 * works only when parent is not any string literal
	 */
	static splitDollarSlashyGStringQuotationEndMarkToSlashAndMoreWhenParentIsNotString: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// TODO the / is a mark or a divide?
		const slashNode = new GroovyAstNode({
			tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
			text: AstLiterals.SlashyGStringQuotationMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a $ remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsNotString(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, slashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split \/ to \ and /
	 * works only when parent is string literal or gstring literal
	 */
	static splitSlashyGStringSlashEscapeToBackslashAndSlash: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const multipleNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		const slashNode = new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: AstOperators.Divide,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex, 1, multipleNode, slashNode);
		return nodeIndex;
	};

	/**
	 * split \/ to \ and /, needs to check the / is start of slashy gstring literal or just a divide
	 * works only when parent is not any string literal
	 */
	static splitSlashyGStringSlashEscapeToBackslashAndMore: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		const backslashNode = new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a / remained.
		const [newNodes, removeCount] = StringLiteralRecognizeCommonUtils.retokenizeWithSlash(recognition);
		// replace the original nodes
		nodes.splice(nodeIndex, removeCount + 1, backslashNode, ...newNodes);
		return nodeIndex;
	};

	/**
	 * split $$ to $ and $,
	 * works only in gstring literal
	 */
	static splitDollarSlashyGStringDollarEscapeTo2GStringInterpolationStartMarks: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const firstNode = new GroovyAstNode({
			tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
		});
		// now have a $ remained.
		const secondNode = new GroovyAstNode({
			tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
			text: AstLiterals.GStringInterpolationStartMark,
			startOffset: node.startOffset + 1, startLine: node.startLine, startColumn: node.startColumn + 1
		});
		// replace the original nodes
		nodes.splice(nodeIndex, 1, firstNode, secondNode);

		return nodeIndex;
	};

	/**
	 * split $$ to $ and $,  could be chars only, otherwise 2nd $ needs to seek more following nodes,
	 * works only in slashy gstring literal
	 */
	static rehydrateOrSplitDollarSlashyGStringDollarEscapeTo2GStringInterpolationStartMarks: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const nextNodeText = nodes[nodeIndex + 1]?.text;
		if (nextNodeText.startsWith(AstChars.LBrace)) {
			const firstNode = new GroovyAstNode({
				tokenId: TokenId.Chars, tokenType: TokenType.Chars,
				text: AstLiterals.GStringInterpolationStartMark,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			});
			const newNodes = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsGString(recognition);
			// replace the original nodes
			nodes.splice(nodeIndex, 1, firstNode, ...newNodes);
			return nodeIndex;
		}
		const firstCharOfNextNodeText = nextNodeText[0];
		// never mind the 2nd parameter, which is null, it is unused in function
		if (firstCharOfNextNodeText !== AstLiterals.GStringInterpolationStartMark && isJavaIdentifierStartAndNotIdentifierIgnorable(firstCharOfNextNodeText, null)) {
			const firstNode = new GroovyAstNode({
				tokenId: TokenId.Chars, tokenType: TokenType.Chars,
				text: AstLiterals.GStringInterpolationStartMark,
				startOffset: node.startOffset, startLine: node.startLine, startColumn: node.startColumn
			});
			const newNodes = StringLiteralRecognizeCommonUtils.retokenizeWithDollarWhenParentIsGString(recognition);
			// replace the original nodes
			nodes.splice(nodeIndex, 1, firstNode, ...newNodes);
			return nodeIndex;
		}

		// chars only
		node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
		return nodeIndex;
	};

	/**
	 * check around to combine this $$, or it is an identifier
	 */
	static rehydrateDollarSlashyGStringDollarEscapeWithAround: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// TODO
		return nodeIndex;
	};

	/**
	 * split to $ and {,
	 * works only when parent is not any string literal
	 */
	static splitGStringInterpolationLBraceStartMarkToDollarAndLBrace: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;
		// TODO
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