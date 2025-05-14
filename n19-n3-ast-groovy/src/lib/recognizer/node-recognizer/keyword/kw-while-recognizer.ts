import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer, PreservableCheckFunc} from '../abstract';
import {NodePointcuts} from '../pointcuts';
import {RecognizePreservation} from '../shared';

export class KwWhileRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.WHILE;
	}

	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsDoWhileDeclaration
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.WhileDeclaration, TokenType.LogicBlockDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.WhileDeclaration.extra(node);
	}
}
