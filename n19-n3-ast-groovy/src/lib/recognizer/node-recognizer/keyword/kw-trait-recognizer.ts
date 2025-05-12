import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwTraitRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.TRAIT;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.TraitClassDeclaration, TokenType.TypeDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Trait.extra(node);
	}
}
