import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwBreakRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.BREAK;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.BreakStatement, TokenType.LogicStatement];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.BreakStatement.extra(node);
	}
}
