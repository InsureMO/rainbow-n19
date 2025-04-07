import {AstNodeConstructor} from '../../ast-node';
import {MultipleNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "*" */
export class MultipleCaptor extends AbstractSingleCharCaptor<MultipleNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Multiple, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<MultipleNode> {
		return MultipleNode;
	}
}