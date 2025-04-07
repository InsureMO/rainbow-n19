import {AstNodeConstructor} from '../../ast-node';
import {DivideAssignNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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