import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ImplementsNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwImplementsCaptor extends AbstractKeywordCaptor<ImplementsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Implements, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ImplementsNode> {
		return ImplementsNode;
	}
}