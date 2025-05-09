import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwTraitRecognizer extends AbstractCscmfDeclarationRecognizer {
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
