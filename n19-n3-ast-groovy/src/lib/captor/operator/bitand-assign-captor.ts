import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {BitandAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "&=" */
export class BitandAssignCaptor extends AbstractMultipleCharsCaptor<BitandAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.BitandAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BitandAssignNode> {
		return BitandAssignNode;
	}
}