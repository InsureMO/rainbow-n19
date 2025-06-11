import {AstChars, AstLiterals, AstMarks, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../node-recognize';

export type RetokenizeGroovyAstNodePosition = Pick<GroovyAstNode, 'startOffset' | 'startLine' | 'startColumn'>;
export type RetokenizeGroovyAstNodeNature = Pick<GroovyAstNode, 'tokenId' | 'tokenType' | 'text'>;
export type RetokenizeGroovyAstNodeNatureAndPosition = RetokenizeGroovyAstNodeNature & RetokenizeGroovyAstNodePosition;

export type RetokenizedHeadNodes = [nodes: Array<GroovyAstNode>, consumedNodeCount: number, consumedCharCount: number];
export type RetokenizeHeadNodes = (position: RetokenizeGroovyAstNodePosition) => RetokenizedHeadNodes;
export type RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount?: number) => RetokenizedHeadNodes;
export type RetokenizedRestNodes = [nodes: Array<GroovyAstNode>, consumedNodeCount: number];
export type RetokenizeAstRecognition =
	& Omit<AstRecognition, 'node'>
	& Partial<Pick<AstRecognition, 'node'>>
	& RetokenizeGroovyAstNodePosition;
export type RetokenizeRestNodes = (recognition: RetokenizeAstRecognition) => RetokenizedRestNodes;

/**
 * NSL: When Parent Is Not Any String Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class RecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * Check whether, among the currently recognized nodes,
	 * there are nodes other than newline, whitespaces, tabs, and comments nodes
	 * after the closest dot node among all the child nodes of the current parent node.
	 * If there are such nodes, return false. If there is no dot node among these nodes, also return -1.
	 *
	 * That is to say, there is only one situation returns index of dot node where there is a dot node among these nodes,
	 * and there are no nodes after the dot node, or all the nodes after it are newline, whitespace, tab, or sl/ml comment nodes.
	 *
	 * @return [current parent node, dot node index], or [current parent node, -1] when not after dot directly
	 */
	static getNearestPreviousUnignorableNode = (recognition: AstRecognition): [GroovyAstNode, number] => {
		const {astRecognizer} = recognition;
		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		for (let index = children.length - 1; index >= 0; --index) {
			const previousSiblingNode = children[index];
			const {tokenId: previousSiblingTokenId, tokenType: previousSiblingTokenType} = previousSiblingNode;
			if (previousSiblingTokenId === TokenId.NewLine
				|| previousSiblingTokenType === TokenType.WhitespaceOrTabs
				|| previousSiblingTokenType === TokenType.Comments) {
				continue;
			}
			return [currentParent, index];
		}

		// no previous sibling or all siblings are newline, whitespaces, tabs or comments
		return [currentParent, -1];
	};

	/**
	 * nodes between the dot before me and me, includes newline, whitespaces, tabs, sl/ml comments only
	 */
	static isAfterDot = (recognition: AstRecognition): boolean => {
		const [node, nodeIndex] = RecognizeCommonUtils.getNearestPreviousUnignorableNode(recognition);
		return nodeIndex !== -1 && node.tokenId === TokenId.Dot;
	};

	private static createNode = (natureAndPosition: RetokenizeGroovyAstNodeNatureAndPosition): GroovyAstNode => {
		return new GroovyAstNode(natureAndPosition);
	};

	static createCharsNode = (text: string, position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({tokenId: TokenId.Chars, tokenType: TokenType.Chars, text, ...position})],
			consumedNodeCount, text.length
		];
	};
	static createUndeterminedCharsNode = (text: string, position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars, text, ...position
			})],
			consumedNodeCount, text.length
		];
	};

	static createAddNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 0): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.Add, tokenType: TokenType.Operator, text: AstOperators.Add, ...position
			})],
			consumedNodeCount, 1
		];
	};

	static createSubtractNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 0): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.Subtract, tokenType: TokenType.Operator, text: AstOperators.Subtract, ...position
			})],
			consumedNodeCount, 1
		];
	};

	static createDivideNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 0): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.Divide, tokenType: TokenType.Operator, text: AstOperators.Divide, ...position
			})],
			consumedNodeCount, 1
		];
	};

	static createDivideAssignNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.DivideAssign, tokenType: TokenType.Operator, text: AstOperators.DivideAssign,
				...position
			})],
			consumedNodeCount, 2
		];
	};

	static createMultipleNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 0): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.Multiple, tokenType: TokenType.Operator, text: AstOperators.Multiple, ...position
			})],
			consumedNodeCount, 1
		];
	};

	static createBackslashNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars, text: AstChars.Backslash,
				...position
			})],
			consumedNodeCount, 1
		];
	};

	private static createSLCommentStartMarkNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.SingleLineCommentStartMark, tokenType: TokenType.Mark, text: AstMarks.SLCommentStart,
				...position
			})],
			consumedNodeCount, 2
		];
	};

	private static createMlCommentStartMarkNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.MultipleLinesCommentStartMark, tokenType: TokenType.Mark,
				text: AstMarks.MLCommentStart,
				...position
			})],
			consumedNodeCount, 2
		];
	};

	static createGStringInterpolationStartMarkNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.GStringInterpolationStartMark, tokenType: TokenType.Mark,
				text: AstLiterals.GStringInterpolationStartMark,
				...position
			})],
			consumedNodeCount, 1
		];
	};

	static createSlashyGStringQuotationMarkNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.SlashyGStringQuotationMark, tokenType: TokenType.Mark,
				text: AstLiterals.SlashyGStringQuotationMark,
				...position
			})],
			consumedNodeCount, 1
		];
	};

	private static createDollarSlashyGStringEndMarkNode: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
		return [
			[RecognizeCommonUtils.createNode({
				tokenId: TokenId.DollarSlashyGStringQuotationEndMark, tokenType: TokenType.Mark,
				text: AstLiterals.DollarSlashyGStringQuotationEndMark,
				...position
			})],
			consumedNodeCount, 2
		];
	};

	static createIdentifierNode = (text: string, position: RetokenizeGroovyAstNodePosition): GroovyAstNode => {
		return RecognizeCommonUtils.createNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier, text, ...position
		});
	};

	static buildCreateIdentifierNode = (text: string, consumedNodeCount = 0): RetokenizeHeadNodes => {
		return (position: RetokenizeGroovyAstNodePosition): RetokenizedHeadNodes => {
			return [[RecognizeCommonUtils.createIdentifierNode(text, position)], consumedNodeCount, 1];
		};
	};

	static createNumericBasePartNode = (text: string, position: RetokenizeGroovyAstNodePosition): GroovyAstNode => {
		return RecognizeCommonUtils.createNode({
			tokenId: TokenId.NumericBasePart, tokenType: TokenType.NumberLiteral, text, ...position
		});
	};

	static retokenize = (recognition: RetokenizeAstRecognition, retokenizeHead: RetokenizeHeadNodes, retokenizeRest?: RetokenizeRestNodes): RetokenizedRestNodes => {
		const {startOffset, startLine, startColumn} = recognition;
		const [
			headNodes, consumedNodeCountForRetokenizeHead, consumedCharCountForRetokenizeHead
		] = retokenizeHead({startOffset, startLine, startColumn});

		if (retokenizeRest == null) {
			return [headNodes, consumedNodeCountForRetokenizeHead];
		}

		const {nodeIndex, nodes, compilationUnit, astRecognizer} = recognition;
		const [restNodes, consumedNodeCountForRetokenizeRest] = retokenizeRest({
			node: nodes[nodeIndex + consumedNodeCountForRetokenizeHead],
			nodeIndex: nodeIndex + consumedNodeCountForRetokenizeHead,
			nodes, compilationUnit, astRecognizer,
			startOffset: startOffset + consumedCharCountForRetokenizeHead,
			startLine: startLine,
			startColumn: startColumn + consumedCharCountForRetokenizeHead
		});
		return [[...headNodes, ...restNodes], consumedNodeCountForRetokenizeHead + consumedNodeCountForRetokenizeRest];
	};

	/**
	 * retokenize tokens with a / as headed char.
	 */
	static retokenizeWithDivideHeadedNSL: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		const {node} = recognition;

		// to find the node which can be combined with the beginning divide
		if (node == null) {
			// TODO need check the previous node?
			return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideNode);
		}

		// token starts with /: //, /*, /$, /=
		switch (node.tokenId) {
			// -> //, and an optional part
			case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
			case TokenId.Divide: // -> //
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode);
			case TokenId.DollarSlashyGStringQuotationEndMark: // -> // + $
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDollarHeadedNSL);
			case TokenId.DivideAssign: // -> // + =
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithAssignHeaded);
			case TokenId.SingleLineCommentStartMark: // -> // + /
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDivideHeadedNSL);
			case TokenId.MultipleLinesCommentStartMark: // -> // + *
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithMultipleHeaded);
			// -> /*, and an optional part
			case TokenId.SpreadDot: // -> /* + .
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDotHeaded);
			case TokenId.Power: // -> /* + *
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithMultipleHeaded);
			case TokenId.PowerAssign: // -> /* + *=
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithMultipleAssignHeaded);
			case TokenId.Multiple: // -> /*
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode);
			case TokenId.MultipleAssign: // -> /* + =
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithAssignHeaded);
			case TokenId.MultipleLinesCommentEndMark: // -> /* + /
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDivideHeadedNSL);
			// -> /$, and an optional part
			case TokenId.DollarSlashyGStringQuotationStartMark: // -> /$ + /
				// TODO need check the previous node?
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode, RecognizeCommonUtils.retokenizeWithDivideHeadedNSL);
			case TokenId.DollarSlashyGStringDollarEscape: // -> /$ + $
				// TODO need check the previous node?
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode, RecognizeCommonUtils.retokenizeWithDollarHeadedNSL);
			case TokenId.GStringInterpolationLBraceStartMark: // /$ + {
				// TODO need check the previous node?
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode, RecognizeCommonUtils.retokenizeWithLBraceHeaded);
			case TokenId.Identifier: { // check the start char, if it is $, then -> /$ + ... (optional)
				// TODO need check the previous node?
				const identifierText = node.text;
				if (!identifierText.startsWith(AstLiterals.GStringInterpolationStartMark)) {
					return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideNode);
				} else if (identifierText.length === 1) {
					return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode);
				} else {
					return RecognizeCommonUtils.retokenize(recognition,
						RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode,
						(recognition) => RecognizeCommonUtils.retokenizeWithMightBeIdentifiableTextHeadedNSL(identifierText.slice(1), recognition));
				}
			}
			// -> /=, and an optional part
			case TokenId.Assign: // -> /=
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideAssignNode);
			case TokenId.Equal: // -> /= + =
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideAssignNode, RecognizeCommonUtils.retokenizeWithAssignHeaded);
			case TokenId.Identical: // -> /= + ==
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideAssignNode, RecognizeCommonUtils.retokenizeWithEqualHeaded);
			case TokenId.RegexFind: // -> /= + ~
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideAssignNode, RecognizeCommonUtils.retokenizeWithBitnotHeaded);
			case TokenId.RegexMatch: // -> /= + =~
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideAssignNode, RecognizeCommonUtils.retokenizeWithRegexFindHeaded);
			default: // cannot combine with the beginning /
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideNode);
		}
	};

	/**
	 * retokenize tokens with a { as headed char.
	 */
	static retokenizeWithLBraceHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		const {startOffset, startLine, startColumn} = recognition;
		return [
			[new GroovyAstNode({
				tokenId: TokenId.LBrace, tokenType: TokenType.Separator, text: AstChars.LBrace,
				startOffset, startLine, startColumn
			})],
			0
		];
	};

	/**
	 * retokenize tokens with a \ as headed char.
	 */
	static retokenizeWithBackslashHeadedSGL: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithBackslashHeadedSGL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a $ as headed char.
	 */
	static retokenizeWithDollarHeadedNSL: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithDollarHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an ' as headed char.
	 */
	static retokenizeWithSingleQuoteHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithSingleQuoteHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an ' as headed char.
	 */
	static retokenizeWithDoubleQuoteHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithDoubleQuoteHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a = as headed char.
	 */
	static retokenizeWithAssignHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithAssignHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a * as headed char.
	 */
	static retokenizeWithMultipleHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithMultipleHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a *= as headed chars.
	 */
	static retokenizeWithMultipleAssignHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithMultipleAssignHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a . as headed char.
	 */
	static retokenizeWithDotHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithDotHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a == as headed chars.
	 */
	static retokenizeWithEqualHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithEqualHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a ~ as headed char.
	 */
	static retokenizeWithBitnotHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithBitnotHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a =~ as headed chars.
	 */
	static retokenizeWithRegexFindHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithRegexFindHeaded not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an identifiable text as headed char(s).
	 * works only when parent is not any string literal
	 */
	static retokenizeWithIdentifiableTextHeadedNSL = (identifiableText: string, recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		const {node, nodeIndex, nodes, startOffset, startLine, startColumn} = recognition;

		let identifierPosition = {startOffset, startLine, startColumn};

		// to find the node which can be combined with the beginning divide
		if (node == null) {
			return [[RecognizeCommonUtils.createIdentifierNode(identifiableText, identifierPosition)], 0];
		}

		let text = identifiableText;
		let consumeNodeIndex = nodeIndex;
		let consumeNode = node;

		let createdNodes: Array<GroovyAstNode> = [];
		let consumedNodeCount = 0;

		while (consumeNode != null) {
			if ([TokenType.Identifier, TokenType.Keyword, TokenType.BooleanLiteral].includes(consumeNode.tokenType)
				|| [TokenId.IN, TokenId.INSTANCEOF].includes(consumeNode.tokenId)) {
				// combine with given identifier text, continue
				consumeNodeIndex += 1;
				consumedNodeCount += 1;

				// accumulate text, and move to next node
				text += consumeNode.text;
				consumeNode = nodes[consumeNodeIndex];
			} else if (TokenId.NumericBasePart === consumeNode.tokenId) {
				const nodeText = consumeNode.text;
				const dotIndex = nodeText.indexOf(AstChars.Dot);
				if (dotIndex === 0) {
					// dot is first char, cannot combine with given identifier text
					createdNodes.push(RecognizeCommonUtils.createIdentifierNode(text, identifierPosition));
					break;
				}

				consumeNodeIndex += 1;
				consumedNodeCount += 1;

				if (dotIndex !== -1) {
					// dot is not first char, and according to the capture logic, dot will not be the last char
					const textBeforeDot = nodeText.slice(0, dotIndex);
					text += textBeforeDot;
					const movement = text.length;
					createdNodes.push(
						RecognizeCommonUtils.createIdentifierNode(text, identifierPosition),
						RecognizeCommonUtils.createNumericBasePartNode(nodeText.slice(dotIndex), {
							startOffset: identifierPosition.startOffset + movement,
							startLine: identifierPosition.startLine,
							startColumn: identifierPosition.startColumn + movement
						})
					);
					break;
				} else {
					let exponentSignIndex = nodeText.indexOf(AstOperators.Add);
					if (exponentSignIndex === -1) {
						exponentSignIndex = nodeText.indexOf(AstOperators.Subtract);
					}
					if (exponentSignIndex === -1) {
						// no dot, no exponent sign, combine with given identifier text
						// accumulate text, and move to next node
						text += consumeNode.text;
						consumeNode = nodes[consumeNodeIndex];
					} else {
						const textBeforeExponentSign = nodeText.slice(0, exponentSignIndex);
						text += textBeforeExponentSign;
						const exponentSign = nodeText.slice(exponentSignIndex, exponentSignIndex + 1);
						const operatorTokenId = exponentSign === AstOperators.Add ? TokenId.Add : TokenId.Subtract;
						const movement = textBeforeExponentSign.length;
						// identifier, add/subtract, numeric base part,
						createdNodes.push(
							RecognizeCommonUtils.createIdentifierNode(text, identifierPosition),
							RecognizeCommonUtils.createNode({
								tokenId: operatorTokenId, tokenType: TokenType.Operator, text: exponentSign,
								startOffset: identifierPosition.startOffset + movement,
								startLine: identifierPosition.startLine,
								startColumn: identifierPosition.startColumn + movement
							})
						);
						// check has number suffix or not
						const lastChar = nodeText[nodeText.length - 1];
						const lastCharCodePoint = lastChar.codePointAt(0);
						// 0 -> 48, 9 -> 57
						if (lastCharCodePoint < 48 || lastCharCodePoint > 57) {
							// it is suffix char, -> identifier, add/subtract, numeric base part, and a suffix char
							const numericText = nodeText.slice(exponentSignIndex + 1, nodeText.length - 1);
							createdNodes.push(RecognizeCommonUtils.createNumericBasePartNode(numericText, {
								startOffset: identifierPosition.startOffset + movement + 1,
								startLine: identifierPosition.startLine,
								startColumn: identifierPosition.startColumn + movement + 1
							}));
							// reset identifier text and position, and move to next node
							text = lastChar;
							identifierPosition = {
								startOffset: identifierPosition.startOffset + movement + 1 + numericText.length,
								startLine: identifierPosition.startLine,
								startColumn: identifierPosition.startColumn + movement + 1 + numericText.length
							};
							consumeNode = nodes[consumeNodeIndex];
						} else {
							// no suffix char, -> identifier, add/subtract, numeric base part
							createdNodes.push(RecognizeCommonUtils.createNumericBasePartNode(nodeText.slice(exponentSignIndex + 1), {
								startOffset: identifierPosition.startOffset + movement + 1,
								startLine: identifierPosition.startLine,
								startColumn: identifierPosition.startColumn + movement + 1
							}));
							break;
						}
					}
				}
			} else {
				// cannot combine with given identifier text
				createdNodes.push(RecognizeCommonUtils.createIdentifierNode(text, identifierPosition));
				break;
			}

			// no node following
			if (consumeNode == null) {
				createdNodes.push(RecognizeCommonUtils.createIdentifierNode(text, identifierPosition));
				break;
			}
		}
		return [createdNodes, consumedNodeCount];
	};

	/**
	 * retokenize tokens with a might be identifiable text as headed char(s).
	 */
	static retokenizeWithMightBeIdentifiableTextHeadedNSL = (mightBeIdentifiableText: string, recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithMightBeIdentifiableTextHeadedNSL not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an octal content (0-7, 00-77, 000-777) text as headed char(s).
	 */
	static retokenizeWithOctalContentHeaded = (octalContent: string, recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'retokenizeWithOctalContentHeaded not supported yet'; // TODO Not supported yet
	};
}
