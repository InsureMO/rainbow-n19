import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwInterfaceRecognizer extends AbstractTypeDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.INTERFACE;
	}

	protected getDeclarationTokenId(): TokenId {
		return TokenId.InterfaceDeclaration;
	}

	protected extra(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Interface.extra(node);
	}
}
