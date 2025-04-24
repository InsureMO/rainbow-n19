import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ColonNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** ":" */
export class ColonCaptor extends AbstractSingleCharCaptor<ColonNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Colon, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ColonNode> {
		return ColonNode;
	}
}