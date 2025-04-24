import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {LongNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtLongCaptor extends AbstractMultipleCharsCaptor<LongNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.LONG, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LongNode> {
		return LongNode;
	}
}