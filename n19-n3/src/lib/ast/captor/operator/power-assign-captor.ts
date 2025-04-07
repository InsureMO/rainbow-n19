import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {PowerAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "**=" */
export class PowerAssignCaptor extends AbstractMultipleCharsCaptor<PowerAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.PowerAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PowerAssignNode> {
		return PowerAssignNode;
	}
}