import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {FinalNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwFinalCaptor extends AbstractKeywordCaptor<FinalNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Final, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<FinalNode> {
		return FinalNode;
	}
}