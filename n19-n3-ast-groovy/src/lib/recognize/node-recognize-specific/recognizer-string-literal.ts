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
}