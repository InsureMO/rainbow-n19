import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {StrictfpNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwStrictfpCaptor extends AbstractKeywordCaptor<StrictfpNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Strictfp, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<StrictfpNode> {
		return StrictfpNode;
	}
}