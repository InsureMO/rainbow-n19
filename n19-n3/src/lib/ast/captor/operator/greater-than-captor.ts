import {AstNodeConstructor} from '../../ast-node';
import {GreaterThanNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ">" */
export class GreaterThanCaptor extends AbstractSingleCharCaptor<GreaterThanNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.GreaterThan, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<GreaterThanNode> {
		return GreaterThanNode;
	}
}