import {AstNodeConstructor} from '../../ast-node';
import {SafeIndexNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "?[" */
export class SafeIndexCaptor extends AbstractMultipleCharsCaptor<SafeIndexNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeIndex, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeIndexNode> {
		return SafeIndexNode;
	}
}