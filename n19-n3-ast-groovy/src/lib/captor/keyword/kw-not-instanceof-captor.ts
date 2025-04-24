import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {NotInstanceofNode} from '../../node';
import {AstOperators} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/** "!instanceof" */
export class KwNotInstanceofCaptor extends AbstractKeywordCaptor<NotInstanceofNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotInstanceof, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotInstanceofNode> {
		return NotInstanceofNode;
	}
}