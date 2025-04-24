import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {LessThanOrEqualNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<=" */
export class LessThanOrEqualCaptor extends AbstractMultipleCharsCaptor<LessThanOrEqualNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.LessThanOrEqual, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LessThanOrEqualNode> {
		return LessThanOrEqualNode;
	}
}