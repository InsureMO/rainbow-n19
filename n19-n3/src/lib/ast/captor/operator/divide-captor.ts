import {AstNodeConstructor} from '../../ast-node';
import {DivideNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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