import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ThisNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwThisCaptor extends AbstractKeywordCaptor<ThisNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.This, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ThisNode> {
		return ThisNode;
	}
}