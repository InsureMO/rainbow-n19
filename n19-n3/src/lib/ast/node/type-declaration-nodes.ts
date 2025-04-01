import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementEndByRBraceAstNode} from './abstract-statement-node';
import {AnnotationDeclarationNode} from './annotation-declaration-node';
import {MultipleLinesCommentNode, SingleLineCommentNode} from './comment-node';
import {IdentifierNode} from './identifier-node';
import {
	KwAbstractNode,
	KwExtendsNode,
	KwFinalNode,
	KwImplementsNode,
	KwNonSealedNode,
	KwPrivateNode,
	KwProtectedNode,
	KwPublicNode,
	KwSealedNode,
	KwStrictfpNode
} from './keyword-nodes';
import {NewLineNode} from './new-line-node';
import {LBraceNode, RBraceNode} from './symbol-nodes';
import {TabsNode} from './tabs-node';
import {WhitespacesNode} from './whitespaces-node';

export enum TypeDeclarationBodyStatus {
	NOT_STARTED = 'not-started',
	STARTED = 'started',
	ENDED = 'ended'
}

export abstract class AbstractTypeDeclarationNode extends AbstractStatementEndByRBraceAstNode {
	private _bodyStatus: TypeDeclarationBodyStatus = TypeDeclarationBodyStatus.NOT_STARTED;

	get bodyStatus(): TypeDeclarationBodyStatus {
		return this._bodyStatus;
	}

	protected couldBeChildOfMeWhenBodyNotStarted(node: AstNode): boolean {
		// comment nodes
		return node instanceof MultipleLinesCommentNode
			|| node instanceof SingleLineCommentNode
			// new line, whitespaces and tabs
			|| node instanceof NewLineNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode
			// modifier nodes
			|| node instanceof KwPublicNode
			|| node instanceof KwProtectedNode
			|| node instanceof KwPrivateNode
			|| node instanceof KwAbstractNode
			|| node instanceof KwFinalNode
			|| node instanceof KwSealedNode
			|| node instanceof KwNonSealedNode
			|| node instanceof KwStrictfpNode
			// extends and implements
			|| node instanceof KwExtendsNode
			|| node instanceof KwImplementsNode
			|| node instanceof IdentifierNode
			// annotation
			|| node instanceof AnnotationDeclarationNode
			// start body
			|| node instanceof LBraceNode;
	}

	/**
	 * any node could be child of me
	 */
	protected couldBeChildOfMe(node: AstNode): boolean {
		switch (this._bodyStatus) {
			case TypeDeclarationBodyStatus.NOT_STARTED: {
				return this.couldBeChildOfMeWhenBodyNotStarted(node);
			}
			case TypeDeclarationBodyStatus.STARTED: {
				// any node can be child of me when body started
				return true;
			}
			case TypeDeclarationBodyStatus.ENDED:
			default: {
				// any node cannot be child of me when body ended or status undetermined
				return false;
			}
		}
	}

	protected appendAsLastChild(node: AstNode): AstNode {
		const ret = super.appendAsLastChild(node);
		if (node instanceof LBraceNode) {
			this._bodyStatus = TypeDeclarationBodyStatus.STARTED;
		} else if (node instanceof RBraceNode) {
			this._bodyStatus = TypeDeclarationBodyStatus.ENDED;
		}
		return ret;
	}
}

export class InterfaceDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.InterfaceDeclaration;
	}
}

export class ClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.ClassDeclaration;
	}
}

export class AtInterfaceDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.AtInterfaceClassDeclaration;
	}
}

export class EnumClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.EnumClassDeclaration;
	}
}

export class RecordClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.RecordClassDeclaration;
	}
}

export class TraitClassDeclarationNode extends AbstractTypeDeclarationNode {
	get tokenId(): TokenId {
		return TokenId.TraitClassDeclaration;
	}
}
