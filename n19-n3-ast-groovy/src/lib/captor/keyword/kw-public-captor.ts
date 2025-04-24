import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
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