import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {BooleanLiteralNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstLiterals} from '../util';

export class LtBooleanTrueCaptor extends AbstractMultipleCharsCaptor<BooleanLiteralNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstLiterals.TRUE, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BooleanLiteralNode> {
		return BooleanLiteralNode;
	}
}