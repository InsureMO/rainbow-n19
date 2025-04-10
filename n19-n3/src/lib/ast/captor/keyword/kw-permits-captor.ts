import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {PermitsNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwPermitsCaptor extends AbstractKeywordCaptor<PermitsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Permits, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PermitsNode> {
		return PermitsNode;
	}
}