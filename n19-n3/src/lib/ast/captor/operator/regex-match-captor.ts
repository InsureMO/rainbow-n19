import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {RegexMatchNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "==~" */
export class RegexMatchCaptor extends AbstractMultipleCharsCaptor<RegexMatchNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RegexMatch, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RegexMatchNode> {
		return RegexMatchNode;
	}
}