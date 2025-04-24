import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {BreakNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwBreakCaptor extends AbstractKeywordCaptor<BreakNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Break, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<BreakNode> {
		return BreakNode;
	}
}