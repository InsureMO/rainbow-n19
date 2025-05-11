import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {NodePointcuts, RecognizePreservation} from '../shared';
import {AbstractDeclarationCreateRecognizer} from './abstract-declaration-create-recognizer';
import {PreservableCheckFunc} from './abstract-preservable-recognizer';

/**
 * "csscmf" means: class, static block, synchronized block, constructor, method and field
 */
export abstract class AbstractCsscmfDeclarationRecognizer extends AbstractDeclarationCreateRecognizer {
	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCscmfDeclaration,
			RecognizePreservation.parentIsTypeDeclaration
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Cscmf.extra(node);
	}
}
