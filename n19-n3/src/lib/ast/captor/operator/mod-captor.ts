import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {ModNode} from '../../node';
import {AbstractSingleCharCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "%" */
export class ModCaptor extends AbstractSingleCharCaptor<ModNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Mod, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ModNode> {
		return ModNode;
	}
}