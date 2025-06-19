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
			TokenId.Whitespaces, TokenId.Tabs, TokenId.Newline,
			TokenId.ScriptCommand
		].includes(node.tokenId));
	}
}
