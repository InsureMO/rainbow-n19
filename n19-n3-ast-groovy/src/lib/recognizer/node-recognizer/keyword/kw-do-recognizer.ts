import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer} from '../abstract';
import {NodePointcuts} from '../pointcuts';

export class KwDoRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DO;
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.DoWhileDeclaration, TokenType.LogicBlockDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.DoWhileDeclaration.extra(node);
	}
}
