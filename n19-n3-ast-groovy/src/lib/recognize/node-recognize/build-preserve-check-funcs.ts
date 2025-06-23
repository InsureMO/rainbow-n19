import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from './recognizer';
import {NodePreservableCheckFunc, RecognizeBasisDef, RecognizeBasisType} from './types';

export class NodePreservation {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static buildPreserveWhenParentIsOneOfTokenIds(tokenId: TokenId, ...tokenIds: Array<TokenId>) {
		return (recognition: AstRecognition): boolean => {
			const {astRecognizer} = recognition;
			const parentTokenId = astRecognizer.getCurrentParent().tokenId;
			return tokenId === parentTokenId || tokenIds.includes(parentTokenId);
		};
	}

	static buildPreserveWhenParentIsOneOfTokenType(tokenType: TokenType) {
		return (recognition: AstRecognition): boolean => {
			const {astRecognizer} = recognition;
			const parentTokenType = astRecognizer.getCurrentParent().tokenType;
			return tokenType === parentTokenType;
		};
	}
}

export const buildPreserveFuncs = (items?: RecognizeBasisDef): Optional<Array<NodePreservableCheckFunc>> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const funcs: Array<NodePreservableCheckFunc> = [];

	for (const item of items) {
		switch (item[0]) {
			case RecognizeBasisType.PreserveWhenParentIsOneOfTokenIds: {
				const [, tokenId, ...tokenIds] = item;
				funcs.push(NodePreservation.buildPreserveWhenParentIsOneOfTokenIds(tokenId, ...tokenIds));
				break;
			}
			case RecognizeBasisType.PreserveWhenParentIsTokenType: {
				funcs.push(NodePreservation.buildPreserveWhenParentIsOneOfTokenType(item[1]));
				break;
			}
		}
	}

	return funcs;
};