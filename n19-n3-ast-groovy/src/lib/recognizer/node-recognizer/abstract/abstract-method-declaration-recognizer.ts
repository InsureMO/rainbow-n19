import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {NodePointcuts} from '../pointcuts';
import {RecognizePreservation} from '../shared';
import {AbstractDeclarationCreateRecognizer} from './abstract-declaration-create-recognizer';
import {PreservableCheckFunc} from './abstract-preservable-recognizer';

/**
 * could be identified as method
 */
export abstract class AbstractMethodDeclarationRecognizer extends AbstractDeclarationCreateRecognizer {
	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCsscmfDeclaration,
			RecognizePreservation.parentIsMethodDeclaration
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.MethodDeclaration, TokenType.MethodDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.MethodDeclaration.extra(node);
	}
}
