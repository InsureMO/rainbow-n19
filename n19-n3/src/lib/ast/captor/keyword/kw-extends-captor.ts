import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ExtendsNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwExtendsCaptor extends AbstractKeywordCaptor<ExtendsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Extends, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ExtendsNode> {
		return ExtendsNode;
	}
}