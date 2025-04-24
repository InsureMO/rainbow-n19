import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {BooleanNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtBooleanCaptor extends AbstractMultipleCharsCaptor<BooleanNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.BOOLEAN, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BooleanNode> {
		return BooleanNode;
	}
}