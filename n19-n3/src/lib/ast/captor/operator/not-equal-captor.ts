import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {NotEqualNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "!=" */
export class NotEqualCaptor extends AbstractMultipleCharsCaptor<NotEqualNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotEqual, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotEqualNode> {
		return NotEqualNode;
	}
}