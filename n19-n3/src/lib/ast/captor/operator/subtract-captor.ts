import {AstNodeConstructor} from '../../ast-node';
import {SubtractNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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