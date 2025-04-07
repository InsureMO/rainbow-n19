import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SpreadDotNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "*." */
export class SpreadDotCaptor extends AbstractMultipleCharsCaptor<SpreadDotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SpreadDot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SpreadDotNode> {
		return SpreadDotNode;
	}
}