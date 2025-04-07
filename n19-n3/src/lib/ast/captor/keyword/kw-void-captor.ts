import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {VoidNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwVoidCaptor extends AbstractKeywordCaptor<VoidNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Void, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<VoidNode> {
		return VoidNode;
	}
}