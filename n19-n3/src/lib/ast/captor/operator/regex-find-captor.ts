import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RegexFindNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "=~" */
export class RegexFindCaptor extends AbstractMultipleCharsCaptor<RegexFindNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RegexFind, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RegexFindNode> {
		return RegexFindNode;
	}
}