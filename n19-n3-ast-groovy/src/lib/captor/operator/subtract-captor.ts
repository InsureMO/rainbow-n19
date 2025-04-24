import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {SubtractNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "-" */
export class SubtractCaptor extends AbstractSingleCharCaptor<SubtractNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Subtract, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SubtractNode> {
		return SubtractNode;
	}
}