import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwContinueRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.CONTINUE;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.ContinueStatement, TokenType.LogicStatement];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.ContinueStatement.extra(node);
	}
}
