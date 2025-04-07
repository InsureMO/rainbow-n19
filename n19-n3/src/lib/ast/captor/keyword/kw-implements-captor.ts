import {AstNodeConstructor} from '../../ast-node';
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