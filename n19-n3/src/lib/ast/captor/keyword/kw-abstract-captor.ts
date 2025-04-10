import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwAbstractCaptor extends AbstractKeywordCaptor<AbstractNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Abstract, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AbstractNode> {
		return AbstractNode;
	}
}