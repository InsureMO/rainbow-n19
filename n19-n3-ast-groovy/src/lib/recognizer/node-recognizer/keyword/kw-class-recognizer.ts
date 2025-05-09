import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';
import {NodePointcuts} from '../shared';

export class KwClassRecognizer extends AbstractCscmfDeclarationRecognizer {
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
