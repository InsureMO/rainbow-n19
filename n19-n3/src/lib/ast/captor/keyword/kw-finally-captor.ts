import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {FinallyNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwFinallyCaptor extends AbstractKeywordCaptor<FinallyNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Finally, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<FinallyNode> {
		return FinallyNode;
	}
}