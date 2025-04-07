import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {WhileNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwWhileCaptor extends AbstractKeywordCaptor<WhileNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.While, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<WhileNode> {
		return WhileNode;
	}
}