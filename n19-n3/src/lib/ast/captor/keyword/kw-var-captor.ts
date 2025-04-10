import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {VarNode} from '../../node';
import {AstKeywords} from '../util';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export class KwVarCaptor extends AbstractKeywordCaptor<VarNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Var, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<VarNode> {
		return VarNode;
	}
}