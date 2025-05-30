import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OneOfChildAcceptableCheckFunc} from '../node-attribute';

export class StringLiteralPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly isSingleLine: OneOfChildAcceptableCheckFunc = (_mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.StringQuotationMark;
	};
}
