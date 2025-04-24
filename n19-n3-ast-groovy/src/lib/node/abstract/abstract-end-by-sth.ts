import {AstNode} from '@rainbow-n19/n3-ast';
import {AbstractContainerAstNode} from './abstract-container';

/**
 * close when a node, which pass the {@link #endBy} check, is appended to me.
 */
export abstract class AbstractEndBySthAstNode extends AbstractContainerAstNode {
	/**
	 * check the given node is the end of me or not.
	 */
	protected abstract endBy(node: AstNode): boolean;

	/**
	 * if the given node pass the {@link #endBy} check, then do append given one as last child and close me.
	 */
	protected appendAsLastChild(node: AstNode): AstNode {
		if (this.endBy(node)) {
			super.appendAsLastChild(node);
			this.close();
			return this.parent;
		} else {
			return super.appendAsLastChild(node);
		}
	}
}
