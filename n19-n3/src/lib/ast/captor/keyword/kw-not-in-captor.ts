import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {NotInNode} from '../../node';
import {AstOperators} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/** "!in" */
export class KwNotInCaptor extends AbstractKeywordCaptor<NotInNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotIn, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotInNode> {
		return NotInNode;
	}
}