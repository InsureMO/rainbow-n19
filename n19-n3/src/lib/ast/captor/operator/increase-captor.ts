import {AstNodeConstructor} from '../../ast-node';
import {IncreaseNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "++" */
export class IncreaseCaptor extends AbstractMultipleCharsCaptor<IncreaseNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Increase, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IncreaseNode> {
		return IncreaseNode;
	}
}