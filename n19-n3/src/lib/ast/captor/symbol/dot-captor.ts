import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DotNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "." */
export class DotCaptor extends AbstractSingleCharCaptor<DotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.Dot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DotNode> {
		return DotNode;
	}
}