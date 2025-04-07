import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {WhitespacesNode} from '../../node';
import {AbstractSameCharsCaptor} from '../abstract';
import {AstChars} from '../util';

/**
 * starts from a whitespace, and capture util character is not whitespace
 */
export class WhitespacesCaptor extends AbstractSameCharsCaptor<WhitespacesNode> {

	constructor(astVisitor: AstVisitor) {
		super(AstChars.Whitespace, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<WhitespacesNode> {
		return WhitespacesNode;
	}
}
