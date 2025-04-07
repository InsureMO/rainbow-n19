import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ReturnNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwReturnCaptor extends AbstractKeywordCaptor<ReturnNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Return, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ReturnNode> {
		return ReturnNode;
	}
}