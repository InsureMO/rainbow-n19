import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {LBrackNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "[" */
export class LBrackCaptor extends AbstractSingleCharCaptor<LBrackNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrack, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBrackNode> {
		return LBrackNode;
	}
}