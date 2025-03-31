import {AstNode} from '../ast-node';
import {AbstractContainerAstNode} from './abstract-container-node';
import {RBraceNode, SemicolonNode} from './symbol-nodes';

/**
 * close when {@link SemicolonNode} append to me.
 */
export abstract class AbstractStatementAstNode extends AbstractContainerAstNode {
	protected abstract endBy(node: AstNode): boolean ;

	protected appendAsLastChild(node: AstNode): AstNode {
		if (node instanceof SemicolonNode) {
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
