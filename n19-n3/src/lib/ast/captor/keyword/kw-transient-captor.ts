import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {TransientNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwTransientCaptor extends AbstractKeywordCaptor<TransientNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Transient, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<TransientNode> {
		return TransientNode;
	}
}