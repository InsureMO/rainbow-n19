import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwAssertRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ASSERT;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.AssertStatement, TokenType.LogicStatement];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.AssertStatement.extra(node);
	}
}
