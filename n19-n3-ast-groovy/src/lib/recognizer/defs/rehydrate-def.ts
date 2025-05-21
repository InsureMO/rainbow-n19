import {Optional} from '@rainbow-n19/n3-ast';
import {AstRecognition} from '../types';
import {NodeRehydrateFunc, NodeRehydration} from '../util';
import {
	PredefinedRehydration,
	RehydrateBasis,
	RehydrateOnChecked,
	RehydrateWhenParentIsTokenId,
	RehydrateWhenParentIsTokenType
} from './internal';

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

const PredefinedRehydrationMap: Record<PredefinedRehydration, NodeRehydrateFunc> = {
	[PredefinedRehydration.ToCharsWhenInStringLiteral]: NodeRehydration.rehydrateToCharsWhenInString,
	[PredefinedRehydration.ToIdentifierWhenAfterDotDirectly]: NodeRehydration.rehydrateToIdentifierWhenAfterDotDirectly,
	[PredefinedRehydration.ToIdentifierWhenKeywordSealedNotSupported]: NodeRehydration.rehydrateToIdentifierWhenKeywordSealedNotSupported,
	[PredefinedRehydration.ToIdentifierWhenKeywordRecordNotSupported]: NodeRehydration.rehydrateToIdentifierWhenKeywordRecordNotSupported
};

export const buildRehydrateFunc = (r: RehydrateBasis): NodeRehydrateFunc => {
	if (isPredefinedRehydrateWhenParentIs(r)) {
		return PredefinedRehydrationMap[r];
	} else if (isRehydrateWhenParentIsTokenId(r)) {
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
	} else if (isRehydrateWhenParentIsTokenType(r)) {
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
	} else if (isRehydrateOnChecked(r)) {
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
	} else {
		return r;
	}
};
