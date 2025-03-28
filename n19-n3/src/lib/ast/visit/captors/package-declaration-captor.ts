import {KwPackageNode, PackageDeclarationNode} from '../../node';
import {AstKeywords, Character} from '../chars';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

/**
 * package declaration.
 * in Groovy, there are multiple scenarios for declaring a package:
 * 1. in same line, ends with ";" or new line.
 * 2. in multiple lines, ends with ";" or new line. and lines must be connected by ML comment.
 */
export class PackageDeclarationCaptor extends AbstractCharSequenceCaptor {
	public static readonly PACKAGE_CHARS = AstKeywords.Package.split('');

	attempt(char: Char, offset: number): boolean {
		// starts with "p"
		if (char !== PackageDeclarationCaptor.PACKAGE_CHARS[0]) {
			return false;
		}
		// match keyword "package"
		const keywordMatched = PackageDeclarationCaptor.PACKAGE_CHARS.slice(1).every((char, index) => {
			return char === this.charAt(offset + index + 1);
		});
		if (!keywordMatched) {
			return false;
		}
		// next char to keyword cannot be part of java identifier
		const nextCharToWord = this.charAt(offset + PackageDeclarationCaptor.PACKAGE_CHARS.length);
		return !Character.isJavaIdentifierPart(nextCharToWord.codePointAt(0));
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(_char: Char, offset: number): boolean {
		// create node
		const node = this.createAndAppendToAst(PackageDeclarationNode, {
			text: AstKeywords.Package, startOffset: offset
		});
		// create keyword node
		this.createAndAppendToAst(KwPackageNode, {text: AstKeywords.Package, startOffset: offset});

		this.moveCursorTo(node.endOffset);
		return true;
	}
}
