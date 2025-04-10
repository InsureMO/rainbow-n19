import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ThrowsNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwThrowsCaptor extends AbstractKeywordCaptor<ThrowsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Throws, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ThrowsNode> {
		return ThrowsNode;
	}
}