import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {NodePreservableCheckFunc, NodePreservation} from '../util';
import {
	PredefinedPreservation,
	PreserveCheckBasis,
	PreserveWhenParentIsTokenId,
	PreserveWhenParentIsTokenType
} from './internal';

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
