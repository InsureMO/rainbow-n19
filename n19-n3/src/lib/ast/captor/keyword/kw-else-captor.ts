import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ElseNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwElseCaptor extends AbstractKeywordCaptor<ElseNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Else, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ElseNode> {
		return ElseNode;
	}
}