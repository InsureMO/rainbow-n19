import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition} from '../types';
import {
	DeclareAsParentAlways,
	DeclareAsParentBasis,
	DeclareAsParentOnChecked,
	DeclareAsParentWhenParentIsTokenId,
	DeclareAsParentWhenParentIsTokenType,
	NodeAsParentDeclaration,
	NodeAsParentDeclarations,
	NodeAsParentDeclareFunc,
	NodeAsParentsDeclaration
} from './types';

export const NodeDeclareAsParent = {
	isNodeAsParentDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentDeclaration => {
		return !Array.isArray(d[0]);
	},
	isNodeAsParentsDeclaration: (d: NodeAsParentDeclarations): d is NodeAsParentsDeclaration => {
		return Array.isArray(d[0]);
	}
} as const;

const isDeclareAsParentWhenParentIsTokenId = (d: DeclareAsParentBasis): d is DeclareAsParentWhenParentIsTokenId => {
	return (d as DeclareAsParentWhenParentIsTokenId).parentTokenId != null;
};
const isDeclareAsParentWhenParentIsTokenType = (d: DeclareAsParentBasis): d is DeclareAsParentWhenParentIsTokenType => {
	return (d as DeclareAsParentWhenParentIsTokenType).parentTokenType != null;
};
const isDeclareAsParentAlways = (d: DeclareAsParentBasis): d is DeclareAsParentAlways => {
	return Array.isArray(d);
};
const isDeclareAsParentOnChecked = (d: DeclareAsParentBasis): d is DeclareAsParentOnChecked => {
	return (d as DeclareAsParentOnChecked).check != null;
};

export const buildDeclareAsParentFunc = (d: DeclareAsParentBasis): NodeAsParentDeclareFunc => {
	if (isDeclareAsParentWhenParentIsTokenId(d)) {
		return (recognition: AstRecognition): Optional<NodeAsParentDeclarations> => {
			const {astRecognizer} = recognition;

			if (Array.isArray(d.parentTokenId)) {
				if (d.parentTokenId.includes(astRecognizer.getCurrentParent().tokenId)) {
					return d.to;
				}
			} else if (astRecognizer.getCurrentParent().tokenId === d.parentTokenId) {
				return d.to;
			}
			return (void 0);
		};
	} else if (isDeclareAsParentWhenParentIsTokenType(d)) {
		return (recognition: AstRecognition): Optional<NodeAsParentDeclarations> => {
			const {astRecognizer} = recognition;

			if (Array.isArray(d.parentTokenType)) {
				if (d.parentTokenType.includes(astRecognizer.getCurrentParent().tokenType)) {
					return d.to;
				}
			} else if (astRecognizer.getCurrentParent().tokenType === d.parentTokenType) {
				return d.to;
			}
			return (void 0);
		};
	} else if (isDeclareAsParentAlways(d)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		return (_recognition: AstRecognition): NodeAsParentDeclarations => d;
	} else if (isDeclareAsParentOnChecked(d)) {
		return (recognition: AstRecognition): NodeAsParentDeclarations => {
			if (d.check(recognition)) {
				return d.to;
			} else {
				return d.or ?? (void 0);
			}
		};
	} else {
		return d;
	}
};
