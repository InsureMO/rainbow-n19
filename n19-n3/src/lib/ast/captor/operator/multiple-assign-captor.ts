import {AstNodeConstructor} from '../../ast-node';
import {MultipleAssignNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "*=" */
export class MultipleAssignCaptor extends AbstractMultipleCharsCaptor<MultipleAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.MultipleAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<MultipleAssignNode> {
		return MultipleAssignNode;
	}
}