import {AstNodeConstructor} from '../../ast-node';
import {EllipsisNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "..." */
export class EllipsisCaptor extends AbstractMultipleCharsCaptor<EllipsisNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Ellipsis, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<EllipsisNode> {
		return EllipsisNode;
	}
}