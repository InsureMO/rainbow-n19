import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractDeclarationCreateRecognizer, RehydrateFunc} from '../abstract';
import {NodePointcuts} from '../pointcuts';
import {RecognizeRehydration} from '../shared';

export class SpLParenRecognizer extends AbstractDeclarationCreateRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.LParen;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.ParenBlock, TokenType.LogicBlock];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.LogicBlock.Paren.extra(node);
	}
}