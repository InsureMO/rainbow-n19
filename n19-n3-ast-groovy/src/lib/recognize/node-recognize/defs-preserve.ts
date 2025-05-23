import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from './recognizer';
import {NodePreservableCheckFunc} from './types';

export type PreserveWhenParentIsTokenId = Readonly<{ parentTokenId: TokenId | ReadonlyArray<TokenId> }>;
export type PreserveWhenParentIsTokenType = Readonly<{ parentTokenType: TokenType | ReadonlyArray<TokenType> }>;

export enum PredefinedPreservation {
	ParentIsImportDeclaration = 'ParentIsImportDeclaration',
	ParentIsCsscmfDeclaration = 'ParentIsCsscmfDeclaration',
	ParentIsTypeDeclaration = 'ParentIsTypeDeclaration',
	ParentIsMethodDeclaration = 'ParentIsMethodDeclaration',
	ParentIsFieldDeclaration = 'ParentIsFieldDeclaration',
	ParentIsIfElseDeclaration = 'ParentIsIfElseDeclaration',
	ParentIsDoWhileDeclaration = 'ParentIsDoWhileDeclaration'
}

export type PreserveCheckCustomFunc = NodePreservableCheckFunc;
export type PreserveCheckBasis =
	| PreserveWhenParentIsTokenId | PreserveWhenParentIsTokenType | PredefinedPreservation
	| PreserveCheckCustomFunc;

const parentIsTokenId = (tokenId: TokenId): NodePreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenId === tokenId;
	};
};
const parentIsTokenType = (tokenType: TokenType): NodePreservableCheckFunc => {
	return (recognition: AstRecognition): boolean => {
		return recognition.astRecognizer.getCurrentParent().tokenType === tokenType;
	};
};

export const NodePreservation = {
	parentIsTokenId,
	parentIsTokenType
} as const;

const isPredefinedPreserveWhenParentIs = (p: PreserveCheckBasis): p is PredefinedPreservation => {
	return typeof p === 'string' && Object.values(PredefinedPreservation).includes(p);
};
const isPreserveWhenParentIsTokenId = (p: PreserveCheckBasis): p is PreserveWhenParentIsTokenId => {
	return (p as PreserveWhenParentIsTokenId).parentTokenId != null;
};
const isPreserveWhenParentIsTokenType = (p: PreserveCheckBasis): p is PreserveWhenParentIsTokenType => {
	return (p as PreserveWhenParentIsTokenType).parentTokenType != null;
};

const PredefinedPreservationMap: Record<PredefinedPreservation, NodePreservableCheckFunc> = {
	[PredefinedPreservation.ParentIsImportDeclaration]: NodePreservation.parentIsTokenId(TokenId.ImportDeclaration),
	[PredefinedPreservation.ParentIsCsscmfDeclaration]: NodePreservation.parentIsTokenId(TokenId.Tmp$CsscmfDeclaration),
	[PredefinedPreservation.ParentIsTypeDeclaration]: NodePreservation.parentIsTokenType(TokenType.TypeDeclaration),
	[PredefinedPreservation.ParentIsMethodDeclaration]: NodePreservation.parentIsTokenId(TokenId.MethodDeclaration),
	[PredefinedPreservation.ParentIsFieldDeclaration]: NodePreservation.parentIsTokenId(TokenId.FieldDeclaration),
	[PredefinedPreservation.ParentIsDoWhileDeclaration]: NodePreservation.parentIsTokenId(TokenId.DoWhileDeclaration),
	[PredefinedPreservation.ParentIsIfElseDeclaration]: NodePreservation.parentIsTokenId(TokenId.IfElseDeclaration)
};

export const buildPreserveFunc = (p: PreserveCheckBasis): NodePreservableCheckFunc => {
	if (isPredefinedPreserveWhenParentIs(p)) {
		return PredefinedPreservationMap[p];
	} else if (isPreserveWhenParentIsTokenId(p)) {
		return (recognition: AstRecognition): boolean => {
			const {astRecognizer} = recognition;

			if (Array.isArray(p.parentTokenId)) {
				if (p.parentTokenId.includes(astRecognizer.getCurrentParent().tokenId)) {
					return true;
				}
			} else if (astRecognizer.getCurrentParent().tokenId === p.parentTokenId) {
				return true;
			}
			return false;
		};
	} else if (isPreserveWhenParentIsTokenType(p)) {
		return (recognition: AstRecognition): boolean => {
			const {astRecognizer} = recognition;

			if (Array.isArray(p.parentTokenType)) {
				if (p.parentTokenType.includes(astRecognizer.getCurrentParent().tokenType)) {
					return true;
				}
			} else if (astRecognizer.getCurrentParent().tokenType === p.parentTokenType) {
				return true;
			}
			return false;
		};
	} else {
		return p;
	}
};
