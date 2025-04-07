import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ThrowNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwThrowCaptor extends AbstractKeywordCaptor<ThrowNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Throw, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ThrowNode> {
		return ThrowNode;
	}
}