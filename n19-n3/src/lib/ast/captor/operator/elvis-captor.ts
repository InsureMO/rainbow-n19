import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ElvisNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "?:" */
export class ElvisCaptor extends AbstractMultipleCharsCaptor<ElvisNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Elvis, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ElvisNode> {
		return ElvisNode;
	}
}