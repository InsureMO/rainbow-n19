import {Optional} from '@rainbow-n19/n3-ast';
import {AstKeywords, AstOperators} from '../../captor';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {NodeRecognizeUtils} from '../util';
import {
	NodeRehydrateFunc,
	PredefinedRehydration,
	RehydrateBasis,
	RehydrateOnChecked,
	RehydrateWhenParentIsTokenId,
	RehydrateWhenParentIsTokenType
} from './types';

export const NodeRehydration = {
	/**
	 * split to 3 parts:
	 * 1. identifier: non
	 * 2. subtract: -
	 * 3. identifier: sealed.
	 *
	 * so given node consumed, and return next node index
	 */
	rehydrateNonSealedTo3Parts: ((recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, nodes, astRecognizer} = recognition;

		const {startOffset, startLine, startColumn} = node;
		node.replaceTokenNatureAndText(TokenId.Identifier, TokenType.Identifier, 'non');
		astRecognizer.appendAsLeaf(node, true);
		const node2 = new GroovyAstNode({
			tokenId: TokenId.Subtract, tokenType: TokenType.Operator,
			text: AstOperators.Subtract, startOffset: startOffset + 3,
			startLine, startColumn: startColumn + 3
		});
		const node3 = new GroovyAstNode({
			tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
			text: AstKeywords.Sealed, startOffset: startOffset + 4,
			startLine, startColumn: startColumn + 4
		});

		// push node2 and node3 after original node
		nodes.splice(nodeIndex + 1, 0, node2, node3);
		return nodeIndex + 1;
	}) as NodeRehydrateFunc
} as const;

const isPredefinedRehydrateWhenParentIs = (r: RehydrateBasis): r is PredefinedRehydration => {
	return typeof r === 'string' && Object.values(PredefinedRehydration).includes(r);
};
const isRehydrateWhenParentIsTokenId = (r: RehydrateBasis): r is RehydrateWhenParentIsTokenId => {
	return (r as RehydrateWhenParentIsTokenId).parentTokenId != null;
};
const isRehydrateWhenParentIsTokenType = (r: RehydrateBasis): r is RehydrateWhenParentIsTokenType => {
	return (r as RehydrateWhenParentIsTokenType).parentTokenType != null;
};
const isRehydrateOnChecked = (r: RehydrateBasis): r is RehydrateOnChecked => {
	return (r as RehydrateOnChecked).check != null;
};

const buildRehydrateFuncOnWhenParentIsTokenId = (r: RehydrateWhenParentIsTokenId): NodeRehydrateFunc => {
	return (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		if (Array.isArray(r.parentTokenId)) {
			if (r.parentTokenId.includes(astRecognizer.getCurrentParent().tokenId)) {
				node.replaceTokenNature(r.to[0], r.to[1]);
				return nodeIndex;
			}
		} else if (astRecognizer.getCurrentParent().tokenId === r.parentTokenId) {
			node.replaceTokenNature(r.to[0], r.to[1]);
			return nodeIndex;
		}
		return (void 0);
	};
};
const buildRehydrateFuncWhenParentIsTokenType = (r: RehydrateWhenParentIsTokenType): NodeRehydrateFunc => {
	return (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex, astRecognizer} = recognition;

		if (Array.isArray(r.parentTokenType)) {
			if (r.parentTokenType.includes(astRecognizer.getCurrentParent().tokenType)) {
				node.replaceTokenNature(r.to[0], r.to[1]);
				return nodeIndex;
			}
		} else if (astRecognizer.getCurrentParent().tokenType === r.parentTokenType) {
			node.replaceTokenNature(r.to[0], r.to[1]);
			return nodeIndex;
		}
		return (void 0);
	};
};
const buildRehydrateFuncOnChecked = (r: RehydrateOnChecked): NodeRehydrateFunc => {
	return (recognition: AstRecognition): Optional<number> => {
		const {node, nodeIndex} = recognition;

		if (r.check(recognition)) {
			if (typeof r.to === 'function') {
				return r.to(recognition);
			} else {
				node.replaceTokenNature(r.to[0], r.to[1]);
				return nodeIndex;
			}
		} else {
			return (void 0);
		}
	};
};

const PredefinedRehydrationMap: Record<PredefinedRehydration, NodeRehydrateFunc> = {
	[PredefinedRehydration.ToCharsWhenInStringLiteral]: buildRehydrateFuncOnChecked({
		check: NodeRecognizeUtils.parentTokenTypeIsStringLiteral, to: [TokenId.Identifier, TokenType.Identifier]
	}),
	[PredefinedRehydration.ToIdentifierWhenAfterDotDirectly]: buildRehydrateFuncOnChecked({
		check: NodeRecognizeUtils.isDirectAfterDot, to: [TokenId.Identifier, TokenType.Identifier]
	}),
	[PredefinedRehydration.ToIdentifierWhenKeywordSealedNotSupported]: buildRehydrateFuncOnChecked({
		check: NodeRecognizeUtils.isSealedKeywordNotSupported, to: [TokenId.Identifier, TokenType.Identifier]
	}),
	[PredefinedRehydration.ToIdentifierWhenKeywordRecordNotSupported]: buildRehydrateFuncOnChecked({
		check: NodeRecognizeUtils.isRecordKeywordNotSupported, to: [TokenId.Identifier, TokenType.Identifier]
	})
};

export const buildRehydrateFunc = (r: RehydrateBasis): NodeRehydrateFunc => {
	if (isPredefinedRehydrateWhenParentIs(r)) {
		return PredefinedRehydrationMap[r];
	} else if (isRehydrateWhenParentIsTokenId(r)) {
		return buildRehydrateFuncOnWhenParentIsTokenId(r);
	} else if (isRehydrateWhenParentIsTokenType(r)) {
		return buildRehydrateFuncWhenParentIsTokenType(r);
	} else if (isRehydrateOnChecked(r)) {
		return buildRehydrateFuncOnChecked(r);
	} else {
		return r;
	}
};
