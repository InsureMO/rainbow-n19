import {AstNodeConstructor} from '../../ast-node';
import {GreaterThanOrEqualNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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