import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {NodePointcuts, RecognizePreservation} from '../shared';
import {AbstractDeclarationCreateRecognizer} from './abstract-declaration-create-recognizer';
import {PreservableCheckFunc} from './abstract-preservable-recognizer';

/**
 * could be identified as field
 */
export abstract class AbstractFieldDeclarationRecognizer extends AbstractDeclarationCreateRecognizer {
	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCscmfDeclaration,
			RecognizePreservation.parentIsFieldDeclaration
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.FieldDeclaration, TokenType.FieldDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.FieldDeclaration.extra(node);
	}
}
