import {AstNodeConstructor} from '../../ast-node';
import {UrshiftAssignNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ">>>=" */
export class UrshiftAssignCaptor extends AbstractMultipleCharsCaptor<UrshiftAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.UrshiftAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<UrshiftAssignNode> {
		return UrshiftAssignNode;
	}
}