import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {EqualNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "==" */
export class EqualCaptor extends AbstractMultipleCharsCaptor<EqualNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Equal, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<EqualNode> {
		return EqualNode;
	}
}