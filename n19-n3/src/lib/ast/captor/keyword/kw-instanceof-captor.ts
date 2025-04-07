import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {InstanceofNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwInstanceofCaptor extends AbstractKeywordCaptor<InstanceofNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Instanceof, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<InstanceofNode> {
		return InstanceofNode;
	}
}