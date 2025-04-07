import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ForNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwForCaptor extends AbstractKeywordCaptor<ForNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.For, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ForNode> {
		return ForNode;
	}
}