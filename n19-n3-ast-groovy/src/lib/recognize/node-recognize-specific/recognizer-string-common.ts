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

	/**
	 * to collect the following content which can be identifier.
	 *
	 * 1. when the following node is one of:
	 *   - identifier,
	 *   - operator in,
	 *   - operator instanceof,
	 *   - boolean literal (true/false),
	 *   - primitive type (8 types),
	 *   - any keyword
	 *   collect whole text of following node, append to identifier text, create an identifier node,
	 * 2. is numeric base part,
	 * 2.1. has dot, so this must be a decimal literal,
	 *   - append the text before dot to identifier text, create an identifier node,
	 *   - use the left part (starts from dot), to create a new numeric base part node,
	 * 2.2. has exponent sign (+/-), so this must be a decimal literal,
	 *   - append the text before exponent sign to identifier text, create an identifier node,
	 *   - use the exponent sign to create a new add/divide node,
	 *   - use the left part (after the exponent sign), to create a new numeric base part node,
	 *     the new node only contains numeric chars and an optional suffix,
	 * 2.3. collect whole text of following node, append to identifier text, and back to step 1, to check following nodes,
	 * 3. use the identifier text to create an identifier node.
	 *
	 * nodes retrieved from original array in step 1 and 2, will be removed.
	 * and created new nodes will insert at given node index of first following node.
	 * node retrieved from original array in step 3 is kept.
	 *
	 * @param initIdentifierText initial identifier text, on air now
	 * @param nodes original nodes
	 * @param nodeIndexOfFirstFollowingNode node index of first following node
	 * @param startOffsetOfIdentifier the start offset of collected identifier
	 * @param startLineOfIdentifier the start line of collected identifier
	 * @param startColumnOfIdentifier ths start column of collected identifier
	 */
	static collectIdentifiableContentForwardMaximally = (
		initIdentifierText: string, nodes: Array<GroovyAstNode>,
		nodeIndexOfFirstFollowingNode: number, startOffsetOfIdentifier: number, startLineOfIdentifier: number,
		startColumnOfIdentifier: number
	): void => {
		let newNodeText = initIdentifierText;
		let removeNodeCount = 0;
		let followingNodeIndex = nodeIndexOfFirstFollowingNode;
		let followingNode = nodes[followingNodeIndex];
		let followingNodeTokenId = followingNode?.tokenId;
		let followingNodeTokenType = followingNode?.tokenType;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			if ([TokenId.Identifier, TokenId.IN, TokenId.INSTANCEOF].includes(followingNodeTokenId)
				|| [TokenType.BooleanLiteral, TokenType.PrimitiveType, TokenType.Keyword].includes(followingNodeTokenType)) {
				removeNodeCount++;
				// unshift the new node text to identifier
				nodes.splice(nodeIndexOfFirstFollowingNode, removeNodeCount, new GroovyAstNode({
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
					nodes.splice(nodeIndexOfFirstFollowingNode, removeNodeCount, new GroovyAstNode({
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
					nodes.splice(nodeIndexOfFirstFollowingNode, removeNodeCount, new GroovyAstNode({
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
				nodes.splice(nodeIndexOfFirstFollowingNode, removeNodeCount, new GroovyAstNode({
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
		StringLiteralRecognizeCommonUtils.collectIdentifiableContentForwardMaximally(text.slice(1), nodes, nodeIndex + 1, startOffset + 1, startLine, startColumn + 1);

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

	/**
	 * create a backslash node, and insert at given node index of insert
	 */
	private static createBackslashNode = (
		nodes: Array<GroovyAstNode>, nodeIndexOfInsert: number,
		startOffsetOfBackslash: number, startLineOfBackslash: number, startColumnOfBackslash: number
	): void => {
		nodes.splice(nodeIndexOfInsert, 0, new GroovyAstNode({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: AstChars.Backslash,
			startOffset: startOffsetOfBackslash, startLine: startLineOfBackslash, startColumn: startColumnOfBackslash
		}));
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
}