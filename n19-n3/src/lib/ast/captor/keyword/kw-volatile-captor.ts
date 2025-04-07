import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {VolatileNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwVolatileCaptor extends AbstractKeywordCaptor<VolatileNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Volatile, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<VolatileNode> {
		return VolatileNode;
	}
}