import {AstNodeConstructor} from '../../ast-node';
import {IdenticalNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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