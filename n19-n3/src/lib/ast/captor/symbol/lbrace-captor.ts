import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {LBraceNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "{" */
export class LBraceCaptor extends AbstractSingleCharCaptor<LBraceNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.LBrace, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}
}
