import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DivideAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "/=" */
export class DivideAssignCaptor extends AbstractMultipleCharsCaptor<DivideAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.DivideAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DivideAssignNode> {
		return DivideAssignNode;
	}
}