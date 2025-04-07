import {AstNodeConstructor} from '../../ast-node';
import {AssignNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "=" */
export class AssignCaptor extends AbstractSingleCharCaptor<AssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Assign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AssignNode> {
		return AssignNode;
	}
}