import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {QuestionNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "?" */
export class QuestionCaptor extends AbstractSingleCharCaptor<QuestionNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Question, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<QuestionNode> {
		return QuestionNode;
	}
}