import {AstNodeCaptor} from '../../captor';
import {Char} from '../../types';
import {AstVisitor} from '../../visitor';
import {AbstractDelegateCaptor} from '../abstract-delegate-captor';

export class PKeywordCaptor extends AbstractDelegateCaptor {
	private readonly _astVisitor: AstVisitor;

	constructor(astVisitor: AstVisitor) {
		super();
		this._astVisitor = astVisitor;
	}

	attempt(char: Char): AstNodeCaptor | boolean {
		if (char === 'p') {

		} else {
			return false;
		}
	}
}
