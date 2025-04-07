import {AstNodeConstructor} from '../../ast-node';
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