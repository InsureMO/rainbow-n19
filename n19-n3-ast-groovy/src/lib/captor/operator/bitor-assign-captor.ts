import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {BitorAssignNode} from '../../node';
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