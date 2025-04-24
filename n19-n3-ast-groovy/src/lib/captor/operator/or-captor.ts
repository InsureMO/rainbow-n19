import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {OrNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "||" */
export class OrCaptor extends AbstractMultipleCharsCaptor<OrNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Or, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<OrNode> {
		return OrNode;
	}
}