import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {DoNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwDoCaptor extends AbstractKeywordCaptor<DoNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Do, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DoNode> {
		return DoNode;
	}
}