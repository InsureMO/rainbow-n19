import {AstNodeConstructor} from '../../ast-node';
import {LessThanOrEqualNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<=" */
export class LessThanOrEqualCaptor extends AbstractMultipleCharsCaptor<LessThanOrEqualNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.LessThanOrEqual, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LessThanOrEqualNode> {
		return LessThanOrEqualNode;
	}
}