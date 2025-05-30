import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractNodeRecognizer} from '../node-recognize-specific';
import {buildDeclareAsParentFuncs} from './build-declare-as-parent-funcs';
import {buildPreserveFuncs} from './build-preserve-check-funcs';
import {buildRehydrateFuncs} from './build-rehydrate-funcs';
import {NodeRecognizer} from './recognizer';
import {RecognizerBasis} from './recognizer-basis';
import {
	GroovyAstNodeRecognizerConstructor,
	NodeAsParentDeclareFunc,
	NodePreservableCheckFunc,
	NodeRehydrateFunc,
	RecognizeBasisDefs,
	RecognizeBasisType
} from './types';

const createRecognizerDef = (tokenId: TokenId, basis: RecognizeBasisDefs): NodeRecognizer => {
	let BaseClass: GroovyAstNodeRecognizerConstructor;
	let defs: Optional<Exclude<RecognizeBasisDefs, 'TODO' | 'NotRequired'>>;

	if (basis === 'TODO' || basis === 'NotRequired') {
		BaseClass = AbstractNodeRecognizer;
		defs = (void 0);
	} else {
		BaseClass = basis.find(item => item[0] === RecognizeBasisType.CustomClass)?.[1] ?? AbstractNodeRecognizer;
		defs = basis;
	}

	const RecognizerClass = class extends BaseClass {
		private readonly _tokenId: TokenId;
		private readonly _rehydrateFuncs: Array<NodeRehydrateFunc>;
		private readonly _preservableCheckFuncs: Array<NodePreservableCheckFunc>;
		private readonly _declareAsParentFuncs: Array<NodeAsParentDeclareFunc>;

		constructor(tokenId: TokenId,
		            rehydrateFuncs?: Array<NodeRehydrateFunc>,
		            preservableCheckFuncs?: Array<NodePreservableCheckFunc>,
		            declareAsParentFuncs?: Array<NodeAsParentDeclareFunc>) {
			super();
			this._tokenId = tokenId;
			this._rehydrateFuncs = rehydrateFuncs ?? [];
			this._preservableCheckFuncs = preservableCheckFuncs ?? [];
			this._declareAsParentFuncs = declareAsParentFuncs ?? [];
		}

		acceptTokenId(): TokenId {
			return this._tokenId;
		}

		protected getPreservableCheckFunctions(): Array<NodePreservableCheckFunc> {
			return this._preservableCheckFuncs;
		}

		protected getRehydrateFunctions(): Array<NodeRehydrateFunc> {
			return this._rehydrateFuncs;
		}

		protected getDeclareAsParentFuncs(): Array<NodeAsParentDeclareFunc> {
			return this._declareAsParentFuncs;
		}
	};
	Object.defineProperty(RecognizerClass, 'name', {value: `${TokenId[tokenId]}Recognizer`});
	return new RecognizerClass(
		tokenId,
		buildRehydrateFuncs(defs),
		buildPreserveFuncs(defs),
		buildDeclareAsParentFuncs(defs)
	);
};

export const NodeRecognizers: Readonly<{ [key in keyof typeof RecognizerBasis]: NodeRecognizer }> = (() => {
	return Object.keys(RecognizerBasis).reduce((defs, tokenId) => {
		const def = RecognizerBasis[tokenId];
		defs[tokenId] = createRecognizerDef(Number(tokenId) as TokenId, def);
		return defs;
	}, {});
})();
