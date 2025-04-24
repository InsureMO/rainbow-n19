import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {GreaterThanNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ">" */
export class GreaterThanCaptor extends AbstractSingleCharCaptor<GreaterThanNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.GreaterThan, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<GreaterThanNode> {
		return GreaterThanNode;
	}
}