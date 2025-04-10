import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {CaseNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwCaseCaptor extends AbstractKeywordCaptor<CaseNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Case, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<CaseNode> {
		return CaseNode;
	}
}