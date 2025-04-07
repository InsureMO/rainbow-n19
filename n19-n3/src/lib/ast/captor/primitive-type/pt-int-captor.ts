import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {IntNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtIntCaptor extends AbstractMultipleCharsCaptor<IntNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.INT, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IntNode> {
		return IntNode;
	}
}