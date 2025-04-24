import {TokenId} from '../../tokens';
import {AbstractPreviousNodesWalker} from '../abstract';

export class LBraceNodeWalker extends AbstractPreviousNodesWalker {
	private _grabbedTokenIds: Array<TokenId> = [
		...this._defaultGrabbedTokenIds,
		// type, constructor, method, field
		TokenId.PUBLIC, TokenId.PROTECTED, TokenId.PRIVATE,
		// type, method
		TokenId.ABSTRACT,
		// type, method, field
		TokenId.STATIC, TokenId.FINAL,
		// type, constructor, method, field
		TokenId.STRICTFP,
		// method in interface
		TokenId.DEFAULT,
		// type, constructor, method, field
		TokenId.AnnotationDeclaration, TokenId.GenericTypeDeclaration
	];

	protected getGrabbedTokenIds(): Array<TokenId> {
		return this._grabbedTokenIds;
	}
}
