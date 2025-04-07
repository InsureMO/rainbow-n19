import {AstNodeConstructor} from '../../ast-node';
import {ModAssignNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
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