import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {NodePointcuts, RecognizePreservation} from '../shared';
import {AbstractDeclarationCreateRecognizer} from './abstract-declaration-create-recognizer';
import {PreservableCheckFunc} from './abstract-preservable-recognizer';

/**
 * "cscmf" means: class, static block, constructor, method and field
 */
export abstract class AbstractCscmfDeclarationRecognizer extends AbstractDeclarationCreateRecognizer {
	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCscmfDeclaration,
			RecognizePreservation.parentIsTypeDeclaration
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.Tmp$CscmfDeclaration, TokenType.TemporaryStatement];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Cscmf.extra(node);
	}
}
