import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ShortNode} from '../../node';
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