import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {AndNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "&&" */
export class AndCaptor extends AbstractMultipleCharsCaptor<AndNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.And, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AndNode> {
		return AndNode;
	}
}