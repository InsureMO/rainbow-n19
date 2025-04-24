import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {NonSealedNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwNonSealedCaptor extends AbstractKeywordCaptor<NonSealedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.NonSealed, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NonSealedNode> {
		return NonSealedNode;
	}
}