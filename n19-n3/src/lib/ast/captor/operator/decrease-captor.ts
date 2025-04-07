import {AstNodeConstructor} from '../../ast-node';
import {DecreaseNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "--" */
export class DecreaseCaptor extends AbstractMultipleCharsCaptor<DecreaseNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Decrease, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DecreaseNode> {
		return DecreaseNode;
	}
}