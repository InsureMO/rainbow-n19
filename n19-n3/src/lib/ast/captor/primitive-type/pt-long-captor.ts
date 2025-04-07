import {AstNodeConstructor} from '../../ast-node';
import {LongNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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