import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DoubleNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtDoubleCaptor extends AbstractMultipleCharsCaptor<DoubleNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.DOUBLE, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DoubleNode> {
		return DoubleNode;
	}
}