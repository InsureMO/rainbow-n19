import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {PreservableCheckFunc} from '../abstract';

export const RecognizePreservation = {
	parentIsImportDeclaration: ((recognition: AstRecognition) => {
		return recognition.astRecognizer.getCurrentParent().tokenId === TokenId.ImportDeclaration;
	}) as PreservableCheckFunc,
	parentIsCscmfDeclaration: ((recognition: AstRecognition) => {
		return recognition.astRecognizer.getCurrentParent().tokenId === TokenId.Tmp$CscmfDeclaration;
	}) as PreservableCheckFunc,
	parentIsTypeDeclaration: ((recognition: AstRecognition) => {
		return recognition.astRecognizer.getCurrentParent().tokenType === TokenType.TypeDeclaration;
	}) as PreservableCheckFunc,
	parentIsMethodDeclaration: ((recognition: AstRecognition) => {
		return recognition.astRecognizer.getCurrentParent().tokenId === TokenId.MethodDeclaration;
	}) as PreservableCheckFunc,
	parentIsFieldDeclaration: ((recognition: AstRecognition) => {
		return recognition.astRecognizer.getCurrentParent().tokenId === TokenId.FieldDeclaration;
	}) as PreservableCheckFunc
} as const;
