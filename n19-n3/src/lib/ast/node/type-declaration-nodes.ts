import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementEndByRBraceAstNode} from './abstract-statement-node';

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
		return [
			// comment nodes
			TokenId.MultipleLinesComment, TokenId.SingleLineComment,
			// new line, whitespaces and tabs
			TokenId.NewLine, TokenId.Whitespaces, TokenId.Tabs,
			// modifier nodes
			TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
			TokenId.ABSTRACT, TokenId.FINAL, TokenId.STATIC,
			TokenId.SEALED, TokenId.NON_SEALED, TokenId.STRICTFP,
			// type keywords
			TokenId.INTERFACE, TokenId.CLASS, TokenId.AT_INTERFACE, TokenId.ENUM,
			TokenId.RECORD, TokenId.TRAIT,
			TokenId.PERMITS,
			// identifier
			TokenId.Dot, TokenId.Identifier,
			// extends and implements
			TokenId.EXTENDS, TokenId.IMPLEMENTS,
			// annotation
			TokenId.AnnotationDeclaration,
			// start body
			TokenId.LBrace
		].includes(node.tokenId);
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
		if (node.tokenId === TokenId.LBrace) {
			this._bodyStatus = TypeDeclarationBodyStatus.STARTED;
		} else if (node.tokenId === TokenId.RBrace) {
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
