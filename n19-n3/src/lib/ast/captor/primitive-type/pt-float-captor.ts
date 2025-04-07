import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {FloatNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtFloatCaptor extends AbstractMultipleCharsCaptor<FloatNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.FLOAT, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<FloatNode> {
		return FloatNode;
	}
}