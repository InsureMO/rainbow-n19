import {AstNodeConstructor} from '../../ast-node';
import {RangeExclusiveLeftNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<.." */
export class RangeExclusiveLeftCaptor extends AbstractMultipleCharsCaptor<RangeExclusiveLeftNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeExclusiveLeft, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeExclusiveLeftNode> {
		return RangeExclusiveLeftNode;
	}
}