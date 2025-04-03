import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndByRBraceAstNode} from '../../abstract';
import {TypeDeclarationBodyStatus} from './type-declaration-body-status';

export abstract class AbstractTypeDeclarationNode extends AbstractEndByRBraceAstNode {
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
