import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {AddAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "+=" */
export class AddAssignCaptor extends AbstractMultipleCharsCaptor<AddAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.AddAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AddAssignNode> {
		return AddAssignNode;
	}
}