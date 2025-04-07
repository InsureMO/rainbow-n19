import {AstNodeConstructor} from '../../ast-node';
import {MethodReferenceNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "::" */
export class MethodReferenceCaptor extends AbstractMultipleCharsCaptor<MethodReferenceNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.MethodReference, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<MethodReferenceNode> {
		return MethodReferenceNode;
	}
}