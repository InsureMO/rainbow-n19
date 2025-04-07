import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DefaultNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwDefaultCaptor extends AbstractKeywordCaptor<DefaultNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Default, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DefaultNode> {
		return DefaultNode;
	}
}