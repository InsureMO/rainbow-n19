import {AstNodeConstructor} from '../../ast-node';
import {NotNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "!" */
export class NotCaptor extends AbstractSingleCharCaptor<NotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Not, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotNode> {
		return NotNode;
	}
}