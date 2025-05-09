import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwTraitRecognizer extends AbstractTypeDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.TRAIT;
	}

	protected getDeclarationTokenId(): TokenId {
		return TokenId.TraitClassDeclaration;
	}

	protected extra(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Trait.extra(node);
	}
}
