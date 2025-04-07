import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {PrivateNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwPrivateCaptor extends AbstractKeywordCaptor<PrivateNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Private, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PrivateNode> {
		return PrivateNode;
	}
}