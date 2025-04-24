import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ProtectedNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwProtectedCaptor extends AbstractKeywordCaptor<ProtectedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Protected, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ProtectedNode> {
		return ProtectedNode;
	}
}