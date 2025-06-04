import {AstLiterals} from '../../captor';
import {TokenId} from '../../tokens';
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
}