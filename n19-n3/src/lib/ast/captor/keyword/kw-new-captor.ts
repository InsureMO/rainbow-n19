import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {NewNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwNewCaptor extends AbstractKeywordCaptor<NewNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.New, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NewNode> {
		return NewNode;
	}
}