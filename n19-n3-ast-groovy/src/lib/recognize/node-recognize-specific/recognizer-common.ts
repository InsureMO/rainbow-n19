import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../node-recognize';

export class RecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * Check whether, among the currently recognized nodes,
	 * there are nodes other than newline, whitespaces, tabs, and comments nodes
	 * after the closest unignorable node among all the child nodes of the current parent node.
	 * If there is such node, return it and its index of children.
	 * If there is no such node among these nodes, also return [undefined, -1].
	 *
	 * That is to say, if there is such unignorable node,
	 * then nodes between such node and current node must be newline, whitespaces, tabs or comments.
	 */
	static getNearestPreviousUnignorableNode(recognition: AstRecognition): [GroovyAstNode, number] | [undefined, -1] {
		const {astRecognizer} = recognition;
		const currentParent = astRecognizer.getCurrentParent();
		const children = currentParent.children;
		for (let index = children.length - 1; index >= 0; --index) {
			const previousSiblingNode = children[index];
			const {tokenId: previousSiblingTokenId, tokenType: previousSiblingTokenType} = previousSiblingNode;
			if (previousSiblingTokenId === TokenId.Newline
				|| previousSiblingTokenType === TokenType.WhitespaceOrTabs
				|| previousSiblingTokenType === TokenType.Comments) {
				continue;
			}
			return [previousSiblingNode, index];
		}

		// no previous sibling or all siblings are newline, whitespaces, tabs or comments
		return [(void 0), -1];
	}

	/**
	 * nodes between the dot before me and me, includes newline, whitespaces, tabs, sl/ml comments only
	 */
	static isAfterDot(recognition: AstRecognition): boolean {
		const [node, nodeIndex] = RecognizeCommonUtils.getNearestPreviousUnignorableNode(recognition);
		return nodeIndex !== -1 && node.tokenId === TokenId.Dot;
	}

	/**
	 * only works when current node is {@link TokenId.Divide}, {@link Token.DivideAssign} or {@link TokenId.DollarSlashyGStringQuotationEndMark}.
	 * and the node is not in any string literal.
	 *
	 * no like other operators, when no unignorable node before divide operator in the same line,
	 * means the divide operator is slashy gstring start mark
	 * e.g. the following statements are assign 1 to x and a slashy gstring literal which not ended
	 * def x = 1
	 *     / 2
	 * e.g. the following statement is assign 2 to x
	 * def x = 1
	 *     * 2
	 * basically, the divide operator will be treated as slashy gstring start mark when
	 * 1. unignorable node is not in same line,
	 * 2. unignorable node is a dot, such as this./x/ is to visit the x of this,
	 * 3. unignorable node is any operator, such as this * /x/ is this multiple a slashy gstring literal
	 */
	static isSlashyGStringQuotationMark(recognition: AstRecognition): boolean {
		const {node, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenType === TokenType.StringLiteral) {
			return false;
		}

		const [nearestUnignorableNode, nearestUnignorableNodeIndex] = RecognizeCommonUtils.getNearestPreviousUnignorableNode(recognition);
		if (nearestUnignorableNodeIndex === -1) {
			// no unignorable node in front of me
			return true;
		}
		if (nearestUnignorableNode.startLine !== node.startLine) {
			// unignorable node is not at same line with current node
			return true;
		}
		if (nearestUnignorableNode.tokenId === TokenId.Dot) {
			// after dot, should be some property/field/method which use string to present name
			// which means it is start of slashy gstring literal
			return true;
		}
		// noinspection RedundantIfStatementJS
		if (nearestUnignorableNode.tokenType === TokenType.Operator) {
			// after some operator, means it is not an operator anymore
			// which means it is start of slashy gstring literal
			return true;
		}

		return false;
	}

	/**
	 * 8 primitive types, keyword, 2 boolean literal, in, instanceof
	 */
	static isWord(tokenId: TokenId, tokenType: TokenType): boolean {
		return [TokenType.PrimitiveType, TokenType.Keyword, TokenType.BooleanLiteral].includes(tokenType)
			|| [TokenId.IN, TokenId.INSTANCEOF].includes(tokenId);
	}

	/**
	 * identifier, or {@link RecognizeCommonUtils.isWord}
	 */
	static isWordAndIdentifiable(tokenId: TokenId, tokenType: TokenType): boolean {
		return TokenId.Identifier === tokenId || RecognizeCommonUtils.isWord(tokenId, tokenType);
	}
}
