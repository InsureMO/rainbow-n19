import {AstNodeConstructor} from '../../ast-node';
import {SpaceshipNode} from '../../node';
import {AstVisitor} from '../../ast-visitor';
import {AbstractMultipleCharsCaptor} from '../abstract';
import {AstOperators} from '../util';

/** "<=>" */
export class SpaceshipCaptor extends AbstractMultipleCharsCaptor<SpaceshipNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Spaceship, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SpaceshipNode> {
		return SpaceshipNode;
	}
}