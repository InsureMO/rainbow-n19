import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {IdenticalNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "===" */
export class IdenticalCaptor extends AbstractMultipleCharsCaptor<IdenticalNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Identical, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IdenticalNode> {
		return IdenticalNode;
	}
}