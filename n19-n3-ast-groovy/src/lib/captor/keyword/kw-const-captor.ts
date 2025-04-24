import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ConstNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * reserved
 */
export class KwConstCaptor extends AbstractKeywordCaptor<ConstNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Const, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ConstNode> {
		return ConstNode;
	}
}