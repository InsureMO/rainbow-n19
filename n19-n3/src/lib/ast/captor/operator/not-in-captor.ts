import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {NotInNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "!in" */
export class NotInCaptor extends AbstractMultipleCharsCaptor<NotInNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotIn, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotInNode> {
		return NotInNode;
	}
}