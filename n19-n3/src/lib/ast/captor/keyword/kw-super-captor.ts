import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SuperNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwSuperCaptor extends AbstractKeywordCaptor<SuperNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Super, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SuperNode> {
		return SuperNode;
	}
}