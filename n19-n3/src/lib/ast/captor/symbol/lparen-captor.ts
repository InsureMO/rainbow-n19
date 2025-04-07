import {AstNodeConstructor} from '../../ast-node';
import {LParenNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "(" */
export class LParenCaptor extends AbstractSingleCharCaptor<LParenNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.LParen, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LParenNode> {
		return LParenNode;
	}
}