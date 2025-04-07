import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RBraceNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "}" */
export class RBraceCaptor extends AbstractSingleCharCaptor<RBraceNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.RBrace, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RBraceNode> {
		return RBraceNode;
	}
}