import {AstNode} from '../../ast-node';
import {AbstractPreviousNodesWalker} from '../abstract';

export class LBraceNodeWalker extends AbstractPreviousNodesWalker {
	/**
	 * could be any kind, returns true
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	isModifier(_node: AstNode): boolean {
		return true;
	}
}