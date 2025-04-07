import {AstNodeConstructor} from '../../ast-node';
import {MethodPointerNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ".&" */
export class MethodPointerCaptor extends AbstractMultipleCharsCaptor<MethodPointerNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.MethodPointer, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<MethodPointerNode> {
		return MethodPointerNode;
	}
}