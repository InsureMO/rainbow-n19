import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {AssignNode} from '../../node';
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