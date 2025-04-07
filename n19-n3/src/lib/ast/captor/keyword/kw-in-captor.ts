import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {InNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwInCaptor extends AbstractKeywordCaptor<InNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.In, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<InNode> {
		return InNode;
	}
}