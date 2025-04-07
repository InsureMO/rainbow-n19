import {AstNodeConstructor} from '../../ast-node';
import {SafeIndexCloseNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "]" */
export class SafeIndexCloseCaptor extends AbstractMultipleCharsCaptor<SafeIndexCloseNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeIndexClose, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeIndexCloseNode> {
		return SafeIndexCloseNode;
	}
}