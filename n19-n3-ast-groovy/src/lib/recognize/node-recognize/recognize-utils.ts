import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from './recognizer';

export class NodeRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static isSealedKeywordNotSupported(recognition: AstRecognition): boolean {
		return !recognition.astRecognizer.isSealedClassSupported;
	}

	static isRecordKeywordNotSupported(recognition: AstRecognition): boolean {
		return !recognition.astRecognizer.isRecordClassSupported;
	}

	static isNonSealedKeywordNotSupported(recognition: AstRecognition): boolean {
		return !recognition.astRecognizer.isNonSealedKeywordSupported;
	}

	static parentTokenTypeIsStringLiteral(recognition: AstRecognition): boolean {
		return recognition.astRecognizer.getCurrentParent().tokenType === TokenType.StringLiteral;
	}

	static parentIsOneOfTokenIds(tokenId: TokenId, ...tokenIds: Array<TokenId>): ((recognition: AstRecognition) => boolean) {
		return (recognition: AstRecognition): boolean => {
			const parentTokenId = recognition.astRecognizer.getCurrentParent().tokenId;
			return tokenId === parentTokenId || tokenIds.includes(parentTokenId);
		};
	}

	static parentIsOneOfTokenTypes(tokenType: TokenType, ...tokenTypes: Array<TokenType>): ((recognition: AstRecognition) => boolean) {
		return (recognition: AstRecognition): boolean => {
			const parentTokenType = recognition.astRecognizer.getCurrentParent().tokenType;
			return tokenType === parentTokenType || tokenTypes.includes(parentTokenType);
		};
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
	static getNearestPreviousDotNode(recognition: AstRecognition): [GroovyAstNode, number] {
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
			if (previousSiblingTokenId === TokenId.Dot) {
				return [currentParent, index];
			} else {
				break;
			}
		}

		// no previous sibling or all siblings are newline, whitespaces, tabs or comments
		return [currentParent, -1];
	}

	/**
	 * nodes between the dot before me and me, includes newline, whitespaces, tabs, sl/ml comments only
	 */
	static isAfterDot(recognition: AstRecognition): boolean {
		const [, dotNodeIndex] = NodeRecognizeUtils.getNearestPreviousDotNode(recognition);
		return dotNodeIndex !== -1;
	}

	/**
	 * return true when
	 * 1. script command not enabled,
	 * 2. current parent is not compilation unit,
	 * 3. previous siblings has token rather than script command, whitespaces, tabs or newline.
	 */
	static isScriptCommandNotAllowed(recognition: AstRecognition): boolean {
		if (!recognition.astRecognizer.isScriptCommandEnabled) {
			return false;
		}
		const currentParent = recognition.astRecognizer.getCurrentParent();
		if (currentParent.tokenId !== TokenId.COMPILATION_UNIT) {
			return false;
		}
		const previousSiblings = currentParent.children;
		return previousSiblings.some(node => ![
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			TokenId.ScriptCommand
		].includes(node.tokenId));
	}
}
