import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {NullNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwNullCaptor extends AbstractKeywordCaptor<NullNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Null, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NullNode> {
		return NullNode;
	}
}