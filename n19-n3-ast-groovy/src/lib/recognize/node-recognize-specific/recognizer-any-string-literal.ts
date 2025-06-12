import {Optional} from '@rainbow-n19/n3-ast';
import {AstChars, AstLiterals} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition, DoRehydrateWhen, NodeRehydrateFunc} from '../node-recognize';

/**
 * NSL: When Parent Is Not Any String Literal,
 * ASL: When Parent Is Any String Literal,
 * SL: When Parent Is String Literal,
 * GL: When Parent Is GString Literal,
 * SGL: When Parent Is Slashy GString Literal,
 * DSGL: When Parent Is Dollar Slashy GString Literal,
 */
export class ASLRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * for octal escape \..., rebuild it.
	 */
	static rebuildOctalEscape: NodeRehydrateFunc = (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn, text} = node;

		// build octal escape
		node.replaceTokenNatureAndText(TokenId.StringOctalEscape, TokenType.Mark, '');
		astRecognizer.appendAsCurrentParent(node);
		const markNode = GroovyAstNode.createAstNode({
			tokenId: TokenId.StringOctalEscapeMark, tokenType: TokenType.Mark,
			text: AstChars.Backslash, startOffset,
			startLine, startColumn
		});
		node.asParentOf(markNode);
		const contentNode = GroovyAstNode.createAstNode({
			tokenId: TokenId.StringOctalEscapeContent, tokenType: TokenType.StringLiteral,
			text: text.slice(1), startOffset: startOffset + 1,
			startLine, startColumn: startColumn + 1
		});
		node.asParentOf(contentNode);
		astRecognizer.closeCurrentParent();
		return nodeIndex + 1;
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
		const markNode = GroovyAstNode.createAstNode({
			tokenId: TokenId.StringUnicodeEscapeMark, tokenType: TokenType.Mark,
			text: AstLiterals.StringUnicodeEscapeMark, startOffset,
			startLine, startColumn
		});
		node.asParentOf(markNode);
		const contentNode = GroovyAstNode.createAstNode({
			tokenId: TokenId.StringUnicodeEscapeContent, tokenType: TokenType.StringLiteral,
			text: text.slice(2), startOffset: startOffset + 2,
			startLine, startColumn: startColumn + 2
		});
		node.asParentOf(contentNode);
		astRecognizer.closeCurrentParent();
		return nodeIndex + 1;
	};

	/**
	 * return true when,
	 * 1. current node text is backslash,
	 * 2. in ml string literal, or ml gstring literal, or slashy gstring literal, or in dollar gstring literal,
	 * 3. next node is newline.
	 *
	 * ML: Multiple Lines
	 */
	static isBackslashAtLineEndAndIsML: DoRehydrateWhen = (recognition: AstRecognition): boolean => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		if (node.text !== AstChars.Backslash) {
			return false;
		}
		if (nodes[nodeIndex + 1]?.tokenId !== TokenId.NewLine) {
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

		return true;
	};
}