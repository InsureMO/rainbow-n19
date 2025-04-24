import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {NotNode} from '../../node';
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