import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {MethodPointerNode} from '../../node';
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