import {AstNodeConstructor} from '../../ast-node';
import {ElvisNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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