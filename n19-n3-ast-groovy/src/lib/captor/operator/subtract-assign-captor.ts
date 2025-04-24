import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {SubtractAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "-=" */
export class SubtractAssignCaptor extends AbstractMultipleCharsCaptor<SubtractAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SubtractAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SubtractAssignNode> {
		return SubtractAssignNode;
	}
}