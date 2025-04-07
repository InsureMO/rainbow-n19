import {AstNodeConstructor} from '../../ast-node';
import {ShortNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtShortCaptor extends AbstractMultipleCharsCaptor<ShortNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.SHORT, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ShortNode> {
		return ShortNode;
	}
}