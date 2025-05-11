import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwEnumRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ENUM;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.EnumClassDeclaration, TokenType.TypeDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Enum.extra(node);
	}
}
