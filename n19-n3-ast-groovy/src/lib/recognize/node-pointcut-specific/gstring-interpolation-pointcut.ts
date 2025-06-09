import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OneOfChildAcceptableCheckFunc} from '../node-attribute';

export class GStringInterpolationPointcuts {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly startsWithLBrace: OneOfChildAcceptableCheckFunc = (_mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringInterpolationLBraceStartMark;
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly notStartsWithLBrace: OneOfChildAcceptableCheckFunc = (_mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		return astRecognizer.getCurrentParent().children[0].tokenId === TokenId.GStringInterpolationStartMark;
	};
}
