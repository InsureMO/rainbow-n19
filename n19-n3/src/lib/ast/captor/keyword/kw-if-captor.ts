import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {IfNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwIfCaptor extends AbstractKeywordCaptor<IfNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.If, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IfNode> {
		return IfNode;
	}
}