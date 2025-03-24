import {AstNode} from '../ast-node';
import {AbstractAstNode} from './abstract-node';

export abstract class SimpleContainerAstNode extends AbstractAstNode {
	/**
	 * check given node could be child of me or not
	 */
	protected abstract couldBeChildOfMe(node: AstNode): boolean;

	/**
	 * accept node which pass the {@link couldBeChildOfMe} as child,
	 * otherwise call super.
	 */
	append(node: AstNode): AstNode {
		if (this.couldBeChildOfMe(node)) {
			node.asLastChildOf(this);
			return this;
		} else {
			return super.append(node);
		}
	}
}
