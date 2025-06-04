import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstLiterals} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';
import {StringLiteralRecognizeCommonUtils} from './recognizer-string-common';

export class StringLiteralRecognizeUtils extends StringLiteralRecognizeCommonUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		super();
	}

	static isSingleLine: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.StringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.StringQuotationMark;
	};

	static isMultipleLines: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const currentParent = recognition.astRecognizer.getCurrentParent();
		return currentParent.tokenId === TokenId.StringLiteral
			&& currentParent.children[0]?.tokenId === TokenId.StringQuotationMarkML;
	};

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
	 */
	static rehydrateStringQuotationMarkML: NodeRehydrateFunc = StringLiteralRecognizeUtils.buildRehydrateStringQuotationMarkML([TokenId.StringQuotationMark, TokenId.StringQuotationMarkML, AstLiterals.StringQuotationMark, AstLiterals.StringQuotationMarkML]);

	/**
	 * for \', \",
	 * split to \ and one of `'"`, and `'"` part will seek the next node. TODO
	 * 1. if next node is `'` for `'`, seek the next of next node,
	 * 2. if next node is `'''` for `'`,
	 * 3. if next node is `"` for `"`, seek the next of next node,
	 * 4. if next node is `"""` for `"`,
	 */
	static rehydrateQuoteEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes} = recognition;

		const {startOffset, startLine, startColumn} = node;
		// split to \ and `'"`
		node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);
		const node2 = new GroovyAstNode({
			tokenId: TokenId.Chars, tokenType: TokenType.Chars,
			text: node.text[1],
			startOffset: startOffset + 1,
			startLine, startColumn: startColumn + 1
		});
		// treated as an identifier
		nodes.splice(nodeIndex + 1, 0, node2);

		return nodeIndex;
	};

	/**
	 * for \u....
	 * 1. in any token with type is string literal, rebuild
	 * 2. otherwise, split to \ and u...., and u.... part will seek the next node.
	 *   2.1. if next node is boolean literal, primitive type, keyword, identifier, in, instanceof,
	 *        prepend the u...., and replace nature to identifier
	 *   2.2. insert a new node after \, use the u.... part as identifier.
	 */
	static rehydrateUnicodeEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenType === TokenType.StringLiteral) {
			// build Unicode escape
			node.replaceTokenNatureAndText(TokenId.StringUnicodeEscape, TokenType.StringLiteral, '');
			astRecognizer.appendAsCurrentParent(node);
			const markNode = new GroovyAstNode({
				tokenId: TokenId.StringUnicodeEscapeMark, tokenType: TokenType.Mark,
				text: '\\u', startOffset,
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
		} else {
			node.replaceTokenNatureAndText(TokenId.UndeterminedChars, TokenType.UndeterminedChars, AstChars.Backslash);
			// now there is an u...., check next node
			const nextNodeIndex = nodeIndex + 1;
			const nextNode = nodes[nextNodeIndex];
			const nextNodeTokenId = nextNode?.tokenId;
			const nextNodeTokenType = nextNode?.tokenType;
			if ([TokenId.Identifier, TokenId.IN, TokenId.INSTANCEOF].includes(nextNodeTokenId)
				|| [TokenType.BooleanLiteral, TokenType.PrimitiveType, TokenType.Keyword].includes(nextNodeTokenType)) {
				// unshift the u.... to identifier
				nodes[nextNodeIndex] = new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: node.text.slice(1) + nextNode.text,
					startOffset: startOffset + 1,
					startLine, startColumn: startColumn + 1
				});
			} else {
				const node2 = new GroovyAstNode({
					tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
					text: node.text.slice(1),
					startOffset: startOffset + 1,
					startLine, startColumn: startColumn + 1
				});
				// treated as an identifier
				nodes.splice(nodeIndex + 1, 0, node2);
			}
			return nodeIndex;
		}
	};
}