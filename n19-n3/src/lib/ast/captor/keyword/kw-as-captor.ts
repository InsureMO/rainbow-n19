import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {AsNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwAsCaptor extends AbstractKeywordCaptor<AsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.As, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AsNode> {
		return AsNode;
	}
}