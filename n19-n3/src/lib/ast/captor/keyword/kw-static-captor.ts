import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {StaticNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwStaticCaptor extends AbstractKeywordCaptor<StaticNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Static, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<StaticNode> {
		return StaticNode;
	}
}