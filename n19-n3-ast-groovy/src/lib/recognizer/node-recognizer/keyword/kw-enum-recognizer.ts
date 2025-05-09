import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwEnumRecognizer extends AbstractTypeDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ENUM;
	}

	protected getDeclarationTokenId(): TokenId {
		return TokenId.EnumClassDeclaration;
	}

	protected extra(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Enum.extra(node);
	}
}
