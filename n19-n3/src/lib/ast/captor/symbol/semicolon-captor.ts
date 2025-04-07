import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {SemicolonNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstChars} from '../util';

/** ";" */
export class SemicolonCaptor extends AbstractSingleCharCaptor<SemicolonNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstChars.Semicolon, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SemicolonNode> {
		return SemicolonNode;
	}
}