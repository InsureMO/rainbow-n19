import {AstNodeConstructor} from '../../ast-node';
import {EqualNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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