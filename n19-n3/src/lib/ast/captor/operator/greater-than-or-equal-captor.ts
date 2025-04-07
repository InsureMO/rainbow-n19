import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {GreaterThanOrEqualNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ">=" */
export class GreaterThanOrEqualCaptor extends AbstractMultipleCharsCaptor<GreaterThanOrEqualNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.GreaterThanOrEqual, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<GreaterThanOrEqualNode> {
		return GreaterThanOrEqualNode;
	}
}