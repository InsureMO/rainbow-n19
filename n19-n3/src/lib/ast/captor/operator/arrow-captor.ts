import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ArrowNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "->" */
export class ArrowCaptor extends AbstractMultipleCharsCaptor<ArrowNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Arrow, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ArrowNode> {
		return ArrowNode;
	}
}