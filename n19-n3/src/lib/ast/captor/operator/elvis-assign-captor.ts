import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ElvisAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "?=" */
export class ElvisAssignCaptor extends AbstractMultipleCharsCaptor<ElvisAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.ElvisAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ElvisAssignNode> {
		return ElvisAssignNode;
	}
}