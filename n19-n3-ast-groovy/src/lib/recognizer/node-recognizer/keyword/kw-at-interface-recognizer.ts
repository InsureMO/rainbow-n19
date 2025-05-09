import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwAtInterfaceRecognizer extends AbstractTypeDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.AT_INTERFACE;
	}

	protected getDeclarationTokenId(): TokenId {
		return TokenId.AtInterfaceClassDeclaration;
	}

	protected extra(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.AtInterface.extra(node);
	}
}
