import {AstNodeConstructor} from '../../ast-node';
import {BitorNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "|" */
export class BitorCaptor extends AbstractSingleCharCaptor<BitorNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Bitor, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BitorNode> {
		return BitorNode;
	}
}