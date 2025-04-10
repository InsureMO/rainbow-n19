import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RParenNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** ")" */
export class RParenCaptor extends AbstractSingleCharCaptor<RParenNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.RParen, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RParenNode> {
		return RParenNode;
	}
}