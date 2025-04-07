import {AstNodeConstructor} from '../../ast-node';
import {AstVisitor} from '../../ast-visitor';
import {PowerNode} from '../../node';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "**" */
export class PowerCaptor extends AbstractMultipleCharsCaptor<PowerNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Power, astVisitor);
	}

	/**
	 * check is not {@link TokenId.PowerAssign}
	 */
	protected checkFollowingChars(offset: number): boolean {
		return this.charAt(offset) !== AstOperators.Assign;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PowerNode> {
		return PowerNode;
	}
}