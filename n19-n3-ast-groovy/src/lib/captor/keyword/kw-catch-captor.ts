import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {CatchNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwCatchCaptor extends AbstractKeywordCaptor<CatchNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Catch, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<CatchNode> {
		return CatchNode;
	}
}