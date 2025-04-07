import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RangeExclusiveRightNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "..<" */
export class RangeExclusiveRightCaptor extends AbstractMultipleCharsCaptor<RangeExclusiveRightNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeExclusiveRight, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeExclusiveRightNode> {
		return RangeExclusiveRightNode;
	}
}