import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwVarRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.VAR;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.VarStatement, TokenType.LogicStatement];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.VarStatement.extra(node);
	}
}
