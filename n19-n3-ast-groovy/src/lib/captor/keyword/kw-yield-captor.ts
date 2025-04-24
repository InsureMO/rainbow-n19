import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {YieldNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwYieldCaptor extends AbstractKeywordCaptor<YieldNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Yield, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<YieldNode> {
		return YieldNode;
	}
}