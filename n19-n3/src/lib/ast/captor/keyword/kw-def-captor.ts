import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DefNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwDefCaptor extends AbstractKeywordCaptor<DefNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Def, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DefNode> {
		return DefNode;
	}
}