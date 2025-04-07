import {AstNodeConstructor} from '../../ast-node';
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