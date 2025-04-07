import {AstNodeConstructor} from '../../ast-node';
import {BitandNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "&" */
export class BitandCaptor extends AbstractSingleCharCaptor<BitandNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Bitand, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BitandNode> {
		return BitandNode;
	}
}