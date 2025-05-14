import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwFinallyRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.FINALLY;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.TryFinallyDeclaration, TokenType.LogicBlockDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TryDeclaration.Finally.extra(node);
	}
}
