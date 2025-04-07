import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {PublicNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwPublicCaptor extends AbstractKeywordCaptor<PublicNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Public, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PublicNode> {
		return PublicNode;
	}
}