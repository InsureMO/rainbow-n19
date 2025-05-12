import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwClassRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.CLASS;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.ClassDeclaration, TokenType.TypeDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Class.extra(node);
	}
}
