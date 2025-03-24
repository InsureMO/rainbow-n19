import {AstNode} from '../ast-node';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractContainerAstNode extends AbstractAstNode {
	private _closed: boolean = false;

	/**
	 * check given node could be child of me or not
	 */
	protected abstract couldBeChildOfMe(node: AstNode): boolean;

	/**
	 * close me and do not accept child anymore
	 */
	close(): void {
		this._closed = true;
	}

	get closed(): boolean {
		return this._closed;
	}

	/**
	 * accept node which pass the {@link couldBeChildOfMe} as child,
	 * otherwise call super.
	 */
	append(node: AstNode): AstNode {
		if (!this.closed && this.couldBeChildOfMe(node)) {
			node.asLastChildOf(this);
			return this;
		} else {
			const ret = super.append(node);
			// once a node is appended as next sibling, close me.
			this.close();
			return ret;
		}
	}
}
