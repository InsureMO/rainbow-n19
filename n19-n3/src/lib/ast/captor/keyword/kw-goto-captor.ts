import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {GotoNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

/**
 * reserved
 */
export class KwGotoCaptor extends AbstractKeywordCaptor<GotoNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Goto, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<GotoNode> {
		return GotoNode;
	}
}