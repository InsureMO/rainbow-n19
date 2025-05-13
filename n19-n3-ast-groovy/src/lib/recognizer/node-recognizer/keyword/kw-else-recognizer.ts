import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwElseRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ELSE;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.IfElseDeclaration, TokenType.LogicDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.IfDeclaration.Else.extra(node);
	}
}
