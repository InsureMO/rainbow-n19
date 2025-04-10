import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RangeExclusiveFullNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<..<" */
export class RangeExclusiveFullCaptor extends AbstractMultipleCharsCaptor<RangeExclusiveFullNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeExclusiveFull, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeExclusiveFullNode> {
		return RangeExclusiveFullNode;
	}
}