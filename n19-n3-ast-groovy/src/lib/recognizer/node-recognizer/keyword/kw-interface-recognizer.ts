import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwInterfaceRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.INTERFACE;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.InterfaceDeclaration, TokenType.TypeDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Interface.extra(node);
	}
}
