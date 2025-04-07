import {AstNodeConstructor} from '../../ast-node';
import {BitorAssignNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "|=" */
export class BitorAssignCaptor extends AbstractMultipleCharsCaptor<BitorAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.BitorAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BitorAssignNode> {
		return BitorAssignNode;
	}
}