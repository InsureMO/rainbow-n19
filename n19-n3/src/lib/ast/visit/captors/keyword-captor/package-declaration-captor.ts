import {AstKeywords} from '../../chars';
import {Char} from '../../types';
import {AbstractCharSequenceCaptor} from '../abstract-char-sequence-captor';

/**
 * package declaration.
 * in Groovy, there are multiple scenarios for declaring a package:
 * 1. in same line, ends with ";" or new line.
 * 2. in multiple lines, ends with ";" or new line. and lines must be connected by ML comment.
 */
export class PackageDeclarationCaptor extends AbstractCharSequenceCaptor {
	public static readonly PACKAGE_CHARS = AstKeywords.Package.split('');

	attempt(char: Char, offset: number): boolean {
		if (char !== PackageDeclarationCaptor.PACKAGE_CHARS[0]) {
			return false;
		}
		const keywordMatched = PackageDeclarationCaptor.PACKAGE_CHARS.slice(1).every((char, index) => {
			return char === this.charAt(offset + index + 1);
		});
		if (!keywordMatched) {
			return false;
		}
		// && this.charAt(offset + PackageDeclarationCaptor.PACKAGE_CHARS.length);
	}

	visit(char: Char, offset: number): boolean {
		return true;
	}
}
