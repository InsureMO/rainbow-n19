import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {SafeIndexNode} from '../../node';
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