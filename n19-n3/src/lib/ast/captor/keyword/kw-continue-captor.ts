import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ContinueNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwContinueCaptor extends AbstractKeywordCaptor<ContinueNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Continue, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ContinueNode> {
		return ContinueNode;
	}
}