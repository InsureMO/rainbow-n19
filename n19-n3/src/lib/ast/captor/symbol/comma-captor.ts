import {AstNodeConstructor} from '../../ast-node';
import {CommaNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** "," */
export class CommaCaptor extends AbstractSingleCharCaptor<CommaNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.Comma, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<CommaNode> {
		return CommaNode;
	}
}