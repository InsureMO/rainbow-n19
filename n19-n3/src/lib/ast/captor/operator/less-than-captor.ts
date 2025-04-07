import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {LessThanNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<" */
export class LessThanCaptor extends AbstractSingleCharCaptor<LessThanNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.LessThan, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LessThanNode> {
		return LessThanNode;
	}
}