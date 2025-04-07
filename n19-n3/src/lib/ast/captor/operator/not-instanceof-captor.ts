import {AstNodeConstructor} from '../../ast-node';
import {NotInstanceofNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "!instanceof" */
export class NotInstanceofCaptor extends AbstractMultipleCharsCaptor<NotInstanceofNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotInstanceof, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotInstanceofNode> {
		return NotInstanceofNode;
	}
}