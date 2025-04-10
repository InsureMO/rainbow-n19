import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {NotIdenticalNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "!==" */
export class NotIdenticalCaptor extends AbstractMultipleCharsCaptor<NotIdenticalNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotIdentical, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotIdenticalNode> {
		return NotIdenticalNode;
	}
}