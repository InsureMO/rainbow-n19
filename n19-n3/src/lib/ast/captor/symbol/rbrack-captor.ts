import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RBrackNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "]" */
export class RBrackCaptor extends AbstractSingleCharCaptor<RBrackNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.RBrack, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RBrackNode> {
		return RBrackNode;
	}
}