import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SealedNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwSealedCaptor extends AbstractKeywordCaptor<SealedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Sealed, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SealedNode> {
		return SealedNode;
	}
}