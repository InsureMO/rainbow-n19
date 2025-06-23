import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';

export class GStringLiteralPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static isSingleLine(_mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringQuotationMark;
	}
}
