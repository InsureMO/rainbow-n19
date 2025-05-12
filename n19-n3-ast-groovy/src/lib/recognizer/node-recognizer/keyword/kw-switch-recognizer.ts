import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwSwitchRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.SWITCH;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.SwitchDeclaration, TokenType.LogicDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.SwitchDeclaration.extra(node);
	}
}
