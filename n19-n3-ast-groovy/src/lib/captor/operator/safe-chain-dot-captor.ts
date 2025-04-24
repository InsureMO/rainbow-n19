import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {SafeChainDotNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "??." */
export class SafeChainDotCaptor extends AbstractMultipleCharsCaptor<SafeChainDotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeChainDot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeChainDotNode> {
		return SafeChainDotNode;
	}
}