import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {XorNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "^" */
export class XorCaptor extends AbstractSingleCharCaptor<XorNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Xor, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<XorNode> {
		return XorNode;
	}
}