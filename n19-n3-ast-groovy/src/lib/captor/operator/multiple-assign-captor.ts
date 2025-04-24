import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {MultipleAssignNode} from '../../node';
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