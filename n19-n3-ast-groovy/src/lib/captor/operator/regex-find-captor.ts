import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
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