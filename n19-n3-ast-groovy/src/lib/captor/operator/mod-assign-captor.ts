import {AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {AstVisitor} from '../../ast-visitor';
import {ModAssignNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "%=" */
export class ModAssignCaptor extends AbstractMultipleCharsCaptor<ModAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.ModAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ModAssignNode> {
		return ModAssignNode;
	}
}