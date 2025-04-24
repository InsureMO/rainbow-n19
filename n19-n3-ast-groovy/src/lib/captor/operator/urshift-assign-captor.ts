import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {UrshiftAssignNode} from '../../node';
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