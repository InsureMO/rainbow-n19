import {AstNode} from '../ast-node';
import {AbstractContainerAstNode} from './abstract-container-node';
import {SemicolonNode} from './symbol-nodes';

/**
 * close when {@link SemicolonNode} append to me.
 */
export abstract class AbstractStatementAstNode extends AbstractContainerAstNode {
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
