import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwForRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.FOR;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.ForDeclaration, TokenType.LogicBlockDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.ForDeclaration.extra(node);
	}
}
