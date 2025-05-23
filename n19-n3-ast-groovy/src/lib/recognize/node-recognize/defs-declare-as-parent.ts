import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from './recognizer';
import {NodeAsParentDeclarations, NodeAsParentDeclareFunc} from './types';

export type DeclareAsParentWhenParentIsTokenId = Readonly<{
	parentTokenId: TokenId | ReadonlyArray<TokenId>;
	to: NodeAsParentDeclarations
	/** when or is declared, means it is the last shot. any other configuration after me will not be applied anymore */
	or?: NodeAsParentDeclarations;
}>;
export type DeclareAsParentWhenParentIsTokenType = Readonly<{
	parentTokenType: TokenType | ReadonlyArray<TokenType>;
	to: NodeAsParentDeclarations
	/** when or is declared, means it is the last shot. any other configuration after me will not be applied anymore */
	or?: NodeAsParentDeclarations;
}>;
export type DeclareAsParentOnChecked = Readonly<{
	check: (recognition: AstRecognition) => boolean;
	to: NodeAsParentDeclarations;
	/** when or is declared, means it is the last shot. any other configuration after me will not be applied anymore */
	or?: NodeAsParentDeclarations;
}>;
export type DeclareAsParentAlways = NodeAsParentDeclarations;
export type DeclareAsParentCustomFunc = NodeAsParentDeclareFunc;
export type DeclareAsParentBasis =
	| DeclareAsParentWhenParentIsTokenId | DeclareAsParentWhenParentIsTokenType
	| DeclareAsParentOnChecked
	| DeclareAsParentAlways
	| DeclareAsParentCustomFunc;

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
