import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RshiftAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ">>=" */
export class RshiftAssignCaptor extends AbstractMultipleCharsCaptor<RshiftAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RshiftAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RshiftAssignNode> {
		return RshiftAssignNode;
	}
}