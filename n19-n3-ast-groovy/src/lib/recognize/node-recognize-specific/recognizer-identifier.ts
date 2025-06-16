import {Character} from '../../captor';
import {TokenId} from '../../tokens';

export const SplitIdentifierPartAtLast = -1;
export const SplitIdentifierPartIgnored = -2;
export type SplitIdentifierPartType =
	| TokenId.DollarSlashyGStringDollarEscape
	| TokenId.GStringInterpolationStartMark
	| TokenId.Identifier
	| TokenId.Chars

export interface SplitIdentifierPart {
	text: string;
	type: SplitIdentifierPartType;
}

export interface RetypedSplitIdentifierPart {
	text: string;
	type: SplitIdentifierPartType | -2;
}

export type RetypeSplitIdentifierPart = (part: SplitIdentifierPart, index: number, parts: Array<SplitIdentifierPart>) => RetypedSplitIdentifierPart

export class IdentifierRecognizeUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	/**
	 * split given identifier text with $,
	 * and use given retype function to retype each part, except the last part is a {@link TokenId.GStringInterpolationStartMark}.
	 */
	static splitWith$ = (identifierText: string, retypeExceptLastOne: RetypeSplitIdentifierPart): Array<SplitIdentifierPart> => {
		return identifierText.split(/(\$)/)
			.filter(p => p.length !== 0)
			// transform to start mark/identifier/chars
			.map<SplitIdentifierPart>(text => {
				if (text === '$') {
					return {text, type: TokenId.GStringInterpolationStartMark};
				} else if (Character.isJavaIdentifierPartAndNotIdentifierIgnorable(text.codePointAt(0))) {
					return {text, type: TokenId.Identifier};
				} else {
					return {text, type: TokenId.Chars};
				}
			})
			.reverse()
			.map((part, index, parts) => {
				if (part.type === TokenId.GStringInterpolationStartMark && index === 0) {
					return {text: part.text, type: SplitIdentifierPartAtLast};
				} else {
					return retypeExceptLastOne(part, index, parts);
				}
			})
			.filter(({type}) => type !== SplitIdentifierPartIgnored)
			.reverse();
	};
}
