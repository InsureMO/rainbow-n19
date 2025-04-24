import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {LshiftAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<<=" */
export class LshiftAssignCaptor extends AbstractMultipleCharsCaptor<LshiftAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.LshiftAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LshiftAssignNode> {
		return LshiftAssignNode;
	}
}