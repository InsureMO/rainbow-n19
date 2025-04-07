import {AstNodeConstructor} from '../../ast-node';
import {AddNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "+" */
export class AddCaptor extends AbstractSingleCharCaptor<AddNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Add, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AddNode> {
		return AddNode;
	}
}