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

	static createSlashyGStringQuotationMark: RetokenizeHeadNodesWithOptionalAppointedConsumedNodeCount = (position: RetokenizeGroovyAstNodePosition, consumedNodeCount = 1): RetokenizedHeadNodes => {
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
	static retokenizeWithDivideHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		const {node} = recognition;

		// to find the node which can be combined with the beginning divide
		if (node == null) {
			return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideNode);
		}

		// token starts with /: //, /*, /$, /=
		switch (node.tokenId) {
			// -> //, and an optional part
			case TokenId.SlashyGStringQuotationMark: // not created at tokenize phase, actually never happen
			case TokenId.Divide: // -> //
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode);
			case TokenId.DollarSlashyGStringQuotationEndMark: // -> // + $
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDollarHeaded);
			case TokenId.DivideAssign: // -> // + =
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithAssignHeaded);
			case TokenId.SingleLineCommentStartMark: // -> // + /
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createSLCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDivideHeaded);
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
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createMlCommentStartMarkNode, RecognizeCommonUtils.retokenizeWithDivideHeaded);
			// -> /$, and an optional part
			case TokenId.DollarSlashyGStringQuotationStartMark: // -> /$ + /
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode, RecognizeCommonUtils.retokenizeWithDivideHeaded);
			case TokenId.DollarSlashyGStringDollarEscape: // -> /$ + $
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode, RecognizeCommonUtils.retokenizeWithDollarHeaded);
			case TokenId.GStringInterpolationLBraceStartMark: // /$ + {
				return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode, RecognizeCommonUtils.retokenizeWithLBraceHeaded);
			case TokenId.Identifier: { // check the start char, if it is $, then -> /$ + ... (optional)
				const identifierText = node.text;
				if (!identifierText.startsWith(AstLiterals.GStringInterpolationStartMark)) {
					return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDivideNode);
				} else if (identifierText.length === 1) {
					return RecognizeCommonUtils.retokenize(recognition, RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode);
				} else {
					return RecognizeCommonUtils.retokenize(recognition,
						RecognizeCommonUtils.createDollarSlashyGStringEndMarkNode,
						(recognition) => RecognizeCommonUtils.retokenizeWithMightBeIdentifiableTextHeaded(identifierText.slice(1), recognition));
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
	static retokenizeWithBackslashHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a $ as headed char.
	 */
	static retokenizeWithDollarHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an ' as headed char.
	 */
	static retokenizeWithSingleQuoteHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an ' as headed char.
	 */
	static retokenizeWithDoubleQuoteHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a = as headed char.
	 */
	static retokenizeWithAssignHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a * as headed char.
	 */
	static retokenizeWithMultipleHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a *= as headed chars.
	 */
	static retokenizeWithMultipleAssignHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a . as headed char.
	 */
	static retokenizeWithDotHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a == as headed chars.
	 */
	static retokenizeWithEqualHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a ~ as headed char.
	 */
	static retokenizeWithBitnotHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a =~ as headed chars.
	 */
	static retokenizeWithRegexFindHeaded: RetokenizeRestNodes = (recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an identifiable text as headed char(s).
	 */
	static retokenizeWithIdentifiableTextHeaded = (identifiableText: string, recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with a might be identifiable text as headed char(s).
	 */
	static retokenizeWithMightBeIdentifiableTextHeaded = (mightBeIdentifiableText: string, recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};

	/**
	 * retokenize tokens with an octal content (0-7, 00-77, 000-777) text as headed char(s).
	 */
	static retokenizeWithOctalContentHeaded = (octalContent: string, recognition: RetokenizeAstRecognition): RetokenizedRestNodes => {
		throw 'Not supported yet'; // TODO Not supported yet
	};
}
