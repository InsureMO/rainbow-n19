import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {PreservableCheckFunc} from '../abstract';

const parentIsTokenId = (tokenId: TokenId): PreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenId === tokenId;
	};
};
const parentIsTokenType = (tokenType: TokenType): PreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenType === tokenType;
	};
};

const everyPreservableCheckFuncs = (...funcs: Array<PreservableCheckFunc>): PreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return funcs.every(func => func(recognition));
	};
};

export const RecognizePreservation = {
	parentIsTokenId,
	parentIsTokenType,
	everyPreservableCheckFuncs,
	parentIsImportDeclaration: parentIsTokenId(TokenId.ImportDeclaration),
	parentIsCsscmfDeclaration: parentIsTokenId(TokenId.Tmp$CsscmfDeclaration),
	parentIsTypeDeclaration: parentIsTokenType(TokenType.TypeDeclaration),
	parentIsMethodDeclaration: parentIsTokenId(TokenId.MethodDeclaration),
	parentIsFieldDeclaration: parentIsTokenId(TokenId.FieldDeclaration)
} as const;
