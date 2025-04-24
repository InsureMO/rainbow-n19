import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {RangeInclusiveNode} from '../../node';
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