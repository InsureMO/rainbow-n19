import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {CharNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstPrimitiveTypes} from '../util';

export class PtCharCaptor extends AbstractMultipleCharsCaptor<CharNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstPrimitiveTypes.CHAR, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<CharNode> {
		return CharNode;
	}
}