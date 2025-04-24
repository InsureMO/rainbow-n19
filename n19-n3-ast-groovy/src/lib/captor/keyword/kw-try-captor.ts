import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {TryNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwTryCaptor extends AbstractKeywordCaptor<TryNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Try, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TryNode> {
		return TryNode;
	}
}