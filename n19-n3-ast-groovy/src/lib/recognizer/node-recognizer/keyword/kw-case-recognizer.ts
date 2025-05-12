import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwCaseRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.CASE;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.SwitchCaseDeclaration, TokenType.LogicDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.SwitchDeclaration.Case.extra(node);
	}
}
