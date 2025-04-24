import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {EllipsisNode} from '../../node';
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