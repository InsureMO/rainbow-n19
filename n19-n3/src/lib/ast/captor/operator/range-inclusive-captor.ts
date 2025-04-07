import {AstNodeConstructor} from '../../ast-node';
import {RangeInclusiveNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ".." */
export class RangeInclusiveCaptor extends AbstractMultipleCharsCaptor<RangeInclusiveNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeInclusive, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeInclusiveNode> {
		return RangeInclusiveNode;
	}
}