import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstLiterals, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, NodeRehydrateFunc} from '../node-recognize';

export abstract class StringLiteralRecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	protected constructor() {
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

	private static collectIdentifiableContentForwardMaximally = (
		initIdentifierText: string, startNodeIndex: number,
		startOffsetOfIdentifier: number, startLineOfIdentifier: number, startColumnOfIdentifier: number,
		nodes: Array<GroovyAstNode>
	): void => {
		let newNodeText = initIdentifierText;
		let removeNodeCount = 0;
		let followingNodeIndex = startNodeIndex;
		let followingNode = nodes[followingNodeIndex];
		let followingNodeTokenId = followingNode?.tokenId;
		let followingNodeTokenType = followingNode?.tokenType;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if ([TokenId.Identifier, TokenId.IN, TokenId.INSTANCEOF].includes(followingNodeTokenId)
				|| [TokenType.BooleanLiteral, TokenType.PrimitiveType, TokenType.Keyword].includes(followingNodeTokenType)) {
				removeNodeCount++;
				// unshift the new node text to identifier
				nodes.splice(startNodeIndex, removeNodeCount, new GroovyAstNode({
					tokenId: TokenId.Identifier,
					tokenType: TokenType.Identifier,
					text: newNodeText + followingNode.text,
					startOffset: startOffsetOfIdentifier,
					startLine: startLineOfIdentifier, startColumn: startColumnOfIdentifier
				}));
				break;
			} else if (followingNodeTokenId === TokenId.NumericBasePart) {
				removeNodeCount++;
				const numericBasePartText = followingNode.text;
				const dotIndex = numericBasePartText.indexOf(AstChars.Dot);
				if (dotIndex !== -1) {
					const identifierNodeText = newNodeText + numericBasePartText.slice(0, dotIndex);
					nodes.splice(startNodeIndex, removeNodeCount, new GroovyAstNode({
						tokenId: TokenId.Identifier,
						tokenType: TokenType.Identifier,
						text: identifierNodeText,
						startOffset: startOffsetOfIdentifier,
						startLine: startLineOfIdentifier, startColumn: startColumnOfIdentifier
					}), new GroovyAstNode({
						tokenId: TokenId.NumericBasePart,
						tokenType: TokenType.NumberLiteral,
						text: numericBasePartText.slice(dotIndex),
						startOffset: startOffsetOfIdentifier + identifierNodeText.length,
						startLine: startLineOfIdentifier,
						startColumn: startColumnOfIdentifier + identifierNodeText.length
					}));
					break;
				}
				let exponentSignIndex = numericBasePartText.indexOf(AstOperators.Add);
				exponentSignIndex = exponentSignIndex === -1 ? numericBasePartText.indexOf(AstOperators.Subtract) : exponentSignIndex;
				if (exponentSignIndex !== -1) {
					const identifierNodeText = newNodeText + numericBasePartText.slice(0, exponentSignIndex);
					const signText = numericBasePartText.slice(exponentSignIndex, exponentSignIndex + 1);
					nodes.splice(startNodeIndex, removeNodeCount, new GroovyAstNode({
						tokenId: TokenId.Identifier,
						tokenType: TokenType.Identifier,
						text: identifierNodeText,
						startOffset: startOffsetOfIdentifier,
						startLine: startLineOfIdentifier, startColumn: startColumnOfIdentifier
					}), new GroovyAstNode({
						tokenId: signText === AstOperators.Add ? TokenId.Add : TokenId.Subtract,
						tokenType: TokenType.Operator,
						text: signText,
						startOffset: startOffsetOfIdentifier + identifierNodeText.length,
						startLine: startLineOfIdentifier,
						startColumn: startColumnOfIdentifier + identifierNodeText.length
					}), new GroovyAstNode({
						tokenId: TokenId.NumericBasePart,
						tokenType: TokenType.NumberLiteral,
						text: numericBasePartText.slice(exponentSignIndex + 1),
						startOffset: startOffsetOfIdentifier + identifierNodeText.length + 1,
						startLine: startLineOfIdentifier,
						startColumn: startColumnOfIdentifier + identifierNodeText.length + 1
					}));
					break;
				}
				// no dot, no exponent sign, collect whole part since all of these chars can be part of identifier
				newNodeText = newNodeText + numericBasePartText;
				followingNodeIndex = followingNodeIndex + 1;
				followingNode = nodes[followingNodeIndex];
				followingNodeTokenId = followingNode?.tokenId;
				followingNodeTokenType = followingNode?.tokenType;
			} else {
				// treated as an identifier
				nodes.splice(startNodeIndex, removeNodeCount, new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: newNodeText,
					startOffset: startOffsetOfIdentifier,
					startLine: startLineOfIdentifier, startColumn: startColumnOfIdentifier
				}));
				break;
			}
		}
	};

	/**
	 * for \b, \f, \n, \r, \t, and \u....
	 * split to \ and BFNRT char or u...., then the BFNRT part or u.... will seek the next node.
	 * cache the BFNRT char or u.... part as new node text,
	 *
	 * 1. if next node is boolean literal, primitive type, keyword, in, instanceof, identifier,
	 *    unshift the new node text, and replace to identifier
	 * 2. if next node is numeric base part, check
	 * 2.1. if it contains dot, collect part before dot, unshift the new node text, and create an identifier node, insert after \,
	 *      change the original numeric base part starts from dot,
	 * 2.2. if it contains exponent sign, collect part before sign, unshift the new node text, and create an identifier node, insert after \,
	 *      split the original numeric base part to add/subtract and make original exponent numeric (suffix) part to a new numeric base part
	 * 2.3. otherwise, collect all numeric basic part, unshift the new node text, and cache, and back to step 1,
	 * 3. use the new node text as an identifier node, insert after \.
	 */
	static splitEscapeBFNRTAndUnicode: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {text, startOffset, startLine, startColumn} = node;
		// split to \, and BFNRT char or u....
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);

		// now there is a BFNRT char or u...., check following node
		StringLiteralRecognizeCommonUtils.collectIdentifiableContentForwardMaximally(
			text.slice(1), nodeIndex + 1,
			startOffset + 1, startLine, startColumn + 1,
			nodes
		);

		return nodeIndex;
	};

	/**
	 * for \u...., rebuild it.
	 */
	static rehydrateUnicodeEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
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
	 * for octal escape \..., rebuild it.
	 */
	static rehydrateOctalEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
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

	static splitOctalEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
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
			StringLiteralRecognizeCommonUtils.collectIdentifiableContentForwardMaximally(
				nextNodeText.slice(1), nodeIndex + 2,
				startOffset + 1 + text.length, startLine, startColumn + 1 + text.length,
				nodes
			);
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
	 * for \', \",
	 * split to \ and one of `'"`, and `'"` part will seek the following nodes.
	 * cache the `'"` part to init node text.
	 *
	 * 1. when the following node is ml mark of `'"`, collect the first 1 or 2 chars to create as a ml mark,
	 *    in this case, there is still 1 or 2 chars left, cache to init node text (actually it is same as the original init node text),
	 *    back to step 1,
	 * 2. when the following node is sl mark of `'"`,
	 * 2.1. when init node text's length is 1, double the init node text, therefore now length of it is 2,
	 *      back to step 1,
	 * 2.2. when init node text's length is 2, collect the following node, and unshift the init node text to create a ml mark,
	 * 3. the following node is not one of sl or ml mark,
	 * 3.1. when init node text's length is 1, create a sl mark,
	 * 3.2. when init node text's length is 2, create 2 sl marks.
	 */
	static splitQuoteEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {text, startOffset, startLine, startColumn} = node;
		// split to \ and `'"`
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);

		const newNodes: Array<GroovyAstNode> = [];
		let initNodeText = text.slice(1);
		const [slTokenId, mlTokenId, slMark, mlMark] = initNodeText === AstLiterals.StringQuotationMark
			? [TokenId.StringQuotationMark, TokenId.StringQuotationMarkML, AstLiterals.StringQuotationMark, AstLiterals.StringQuotationMarkML]
			: [TokenId.GStringQuotationMark, TokenId.GStringQuotationMarkML, AstLiterals.GStringQuotationMark, AstLiterals.GStringQuotationMarkML];
		let removeNodeCount = 0;
		let newNodeStartOffset = startOffset + 1;
		let newNodeStartColumn = startColumn + 1;
		// now there is a `'` or `"`, check the following nodes
		let followingNodeIndex = nodeIndex + 1;
		let followingNode = nodes[followingNodeIndex];
		let followingNodeTokenId = followingNode?.tokenId;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if (followingNodeTokenId === mlTokenId) {
				// next is `'''`,
				// when init node text is `'`, collect first `''` to be a new `'''`, and there is a `'` left
				// or init node text is `''`, collect first `'` to be a new `'''`, and there is a `''` left
				removeNodeCount++;
				newNodes.push(new GroovyAstNode({
					tokenId: mlTokenId, tokenType: TokenType.Mark, text: mlMark,
					startOffset: newNodeStartOffset, startLine, startColumn: newNodeStartColumn
				}));
				// continue
				// init node text is same, no need to change
				newNodeStartOffset = newNodeStartOffset + 3;
				newNodeStartColumn = newNodeStartColumn + 3;
				followingNodeIndex = followingNodeIndex + 1;
				followingNode = nodes[followingNodeIndex];
				followingNodeTokenId = followingNode?.tokenId;
			} else if (initNodeText.length === 1) {
				if (followingNodeTokenId === slTokenId) {
					// next is `'`, now there is a `''`, check the following nodes
					removeNodeCount++;
					// continue
					initNodeText = initNodeText + initNodeText;
					followingNodeIndex = followingNodeIndex + 1;
					followingNode = nodes[followingNodeIndex];
					followingNodeTokenId = followingNode?.tokenId;
				} else {
					newNodes.push(new GroovyAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark,
						startOffset: newNodeStartOffset, startLine, startColumn: newNodeStartColumn
					}));
					break;
				}
			} else {
				// length is 2
				if (followingNodeTokenId === slTokenId) {
					// next is `'`, now there is a `'''`
					removeNodeCount++;
					newNodes.push(new GroovyAstNode({
						tokenId: mlTokenId, tokenType: TokenType.Mark, text: mlMark,
						startOffset: newNodeStartOffset, startLine, startColumn: newNodeStartColumn
					}));
					break;
				} else {
					newNodes.push(new GroovyAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark,
						startOffset: newNodeStartOffset, startLine, startColumn: newNodeStartColumn
					}), new GroovyAstNode({
						tokenId: slTokenId, tokenType: TokenType.Mark, text: slMark,
						startOffset: newNodeStartOffset + 1, startLine, startColumn: newNodeStartColumn + 1
					}));
					break;
				}
			}
		}
		// manufacture nodes
		nodes.splice(nodeIndex + 1, removeNodeCount, ...newNodes);

		return nodeIndex;
	};

	private static createBackslashNode = (
		nodes: Array<GroovyAstNode>, replaceNodeIndex: number,
		startOffsetOfBackslash: number, startLineOfBackslash: number, startColumnOfBackslash: number
	): void => {
		nodes.splice(replaceNodeIndex, 0, new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: startOffsetOfBackslash, startLine: startLineOfBackslash, startColumn: startColumnOfBackslash
		}));
	};

	private static replaceOneNodeAndInsertASlashyGStringSlashEscapeAnd = (
		nodes: Array<GroovyAstNode>, replaceNodeIndex: number,
		startOffsetOfEscape: number, startLineOfEscape: number, startColumnOfEscape: number,
		moreNode?: { tokenId: TokenId, tokenType: TokenType, text: string }
	): void => {
		const newNodes = [
			new GroovyAstNode({
				tokenId: TokenId.SlashyGStringSlashEscape, tokenType: TokenType.Mark,
				text: AstLiterals.SlashyGStringSlashEscape,
				startOffset: startOffsetOfEscape, startLine: startLineOfEscape, startColumn: startColumnOfEscape
			})
		];
		if (moreNode != null) {
			newNodes.push(new GroovyAstNode({
				...moreNode,
				startOffset: startOffsetOfEscape + 2, startLine: startLineOfEscape, startColumn: startColumnOfEscape + 2
			}));
		}
		nodes.splice(replaceNodeIndex, 1, ...newNodes);
	};

	/**
	 * for \\, split to \ and \,
	 * when parent is slashy gstring literal or dollar gstring literal, the 2nd \ might be combined with following nodes.
	 * otherwise just create a new \ node.
	 */
	static splitBackslashEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		// split to \ and `'"`
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenId = currentParent.tokenId;
		if (currentParentTokenId === TokenId.SlashyGStringLiteral) {
			// \/ and \u.... are available
			const nextNodeIndex = nodeIndex + 1;
			const nextNode = nodes[nextNodeIndex];
			const nextNodeTokenId = nextNode?.tokenId;
			switch (nextNodeTokenId) {
				case TokenId.Divide: {
					// merge as \/
					StringLiteralRecognizeCommonUtils.replaceOneNodeAndInsertASlashyGStringSlashEscapeAnd(
						nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1);
					break;
				}
				case TokenId.DivideAssign: {
					// merge as \/, and a =
					StringLiteralRecognizeCommonUtils.replaceOneNodeAndInsertASlashyGStringSlashEscapeAnd(
						nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1, {
							tokenId: TokenId.Assign, tokenType: TokenType.Operator, text: AstOperators.Assign
						});
					break;
				}
				case TokenId.SingleLineCommentStartMark: {
					// merge as \/, and a /
					StringLiteralRecognizeCommonUtils.replaceOneNodeAndInsertASlashyGStringSlashEscapeAnd(
						nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1, {
							tokenId: TokenId.Divide, tokenType: TokenType.Operator, text: AstOperators.Divide
						});
					break;
				}
				case TokenId.MultipleLinesCommentStartMark: {
					// merge as \/, and a *
					StringLiteralRecognizeCommonUtils.replaceOneNodeAndInsertASlashyGStringSlashEscapeAnd(
						nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1, {
							tokenId: TokenId.Multiple, tokenType: TokenType.Operator, text: AstOperators.Multiple
						});
					break;
				}
				case TokenId.DollarSlashyGStringQuotationEndMark: {
					// merge as \/, and a $
					StringLiteralRecognizeCommonUtils.replaceOneNodeAndInsertASlashyGStringSlashEscapeAnd(
						nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1, {
							tokenId: TokenId.Identifier,
							tokenType: TokenType.Identifier,
							text: AstLiterals.GStringInterpolationStartMark
						});
					break;
				}
				case TokenId.Identifier: {
					// TODO if anything starts with "u", must be an identifier
					break;
				}
				default: {
					// no keyword starts with U,
					// and other escapes which starts with backslash are not available for slashy gstring literal
					// so insert a \ node
					StringLiteralRecognizeCommonUtils.createBackslashNode(
						nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1);
				}
			}
		} else if (currentParentTokenId === TokenId.DollarSlashyGStringLiteral) {
			// TODO
			// \u.... is available
			const nextNodeIndex = nodeIndex + 1;
			const nextNode = nodes[nextNodeIndex];
			const nextNodeTokenId = nextNode?.tokenId;
			if (nextNodeTokenId === TokenId.Identifier) {
				// TODO if anything starts with "u", must be an identifier
			} else {
				// no keyword starts with U,
				// and other escapes which starts with backslash are not available for slashy gstring literal
				// so insert a \ node
				StringLiteralRecognizeCommonUtils.createBackslashNode(
					nodes, nextNodeIndex, startOffset + 1, startLine, startColumn + 1);
			}
		} else {
			// insert a \ node
			StringLiteralRecognizeCommonUtils.createBackslashNode(
				nodes, nodeIndex + 1, startOffset + 1, startLine, startColumn + 1);
		}
		return nodeIndex;
	};
}