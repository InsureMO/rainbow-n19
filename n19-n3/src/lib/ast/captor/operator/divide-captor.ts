import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DivideNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "/" */
export class DivideCaptor extends AbstractSingleCharCaptor<DivideNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Divide, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DivideNode> {
		return DivideNode;
	}
}