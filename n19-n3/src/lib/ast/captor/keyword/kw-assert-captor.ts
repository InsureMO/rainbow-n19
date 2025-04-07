import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {AssertNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwAssertCaptor extends AbstractKeywordCaptor<AssertNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Assert, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AssertNode> {
		return AssertNode;
	}
}