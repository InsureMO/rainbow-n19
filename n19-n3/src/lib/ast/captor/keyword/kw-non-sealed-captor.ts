import {AstNodeConstructor} from '../../ast-node';
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