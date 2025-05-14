import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwCatchRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.CATCH;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.TryCatchDeclaration, TokenType.LogicDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TryDeclaration.Catch.extra(node);
	}
}
