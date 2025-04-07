import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SafeDotNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "?." */
export class SafeDotCaptor extends AbstractMultipleCharsCaptor<SafeDotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeDot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeDotNode> {
		return SafeDotNode;
	}
}