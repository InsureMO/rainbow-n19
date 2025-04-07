import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {XorAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "^=" */
export class XorAssignCaptor extends AbstractMultipleCharsCaptor<XorAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.XorAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<XorAssignNode> {
		return XorAssignNode;
	}
}