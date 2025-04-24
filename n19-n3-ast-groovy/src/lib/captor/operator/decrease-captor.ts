import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {DecreaseNode} from '../../node';
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