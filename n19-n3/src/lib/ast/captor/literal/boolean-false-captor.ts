import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {BooleanLiteralNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstLiterals} from '../util';

export class LtBooleanFalseCaptor extends AbstractMultipleCharsCaptor<BooleanLiteralNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstLiterals.FALSE, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BooleanLiteralNode> {
		return BooleanLiteralNode;
	}
}