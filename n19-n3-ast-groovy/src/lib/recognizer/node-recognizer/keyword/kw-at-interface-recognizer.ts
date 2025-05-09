import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwAtInterfaceRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.AT_INTERFACE;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.AtInterfaceClassDeclaration, TokenType.TypeDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.AtInterface.extra(node);
	}
}
