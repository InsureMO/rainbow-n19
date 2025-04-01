import {AstNode} from '../ast-node';
import {AbstractContainerAstNode} from './abstract-container-node';
import {RBraceNode, SemicolonNode} from './symbol-nodes';

/**
 * close when a node, which pass the {@link #endBy} check, is appended to me.
 */
export abstract class AbstractStatementAstNode extends AbstractContainerAstNode {
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

/** statement end by semicolon */
export abstract class AbstractStatementEndBySemicolonAstNode extends AbstractStatementAstNode {
	protected endBy(node: AstNode): boolean {
		return node instanceof SemicolonNode;
	}
}

/** statement end by rbrace */
export abstract class AbstractStatementEndByRBraceAstNode extends AbstractStatementAstNode {
	protected endBy(node: AstNode): boolean {
		return node instanceof RBraceNode;
	}
}
