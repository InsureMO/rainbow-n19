import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {BitnotNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "~" */
export class BitnotCaptor extends AbstractSingleCharCaptor<BitnotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Bitnot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BitnotNode> {
		return BitnotNode;
	}
}