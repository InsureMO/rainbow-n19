import {TokenId} from '../../tokens';
import {AbstractNodeRecognizer} from '../node-recognize-specific';
import {buildDeclareAsParentFuncs, DeclareAsParentBasis} from './defs-declare-as-parent';
import {buildPreserveFuncs, PreserveCheckBasis} from './defs-preserve';
import {buildRehydrateFuncs, RehydrateBasis} from './defs-rehydrate';
import {NodeRecognizer} from './recognizer';
import {GroovyAstNodeRecognizerConstructor, RecognizerBasis, RecognizerBasisDefs} from './recognizer-basis';
import {NodeAsParentDeclareFunc, NodePreservableCheckFunc, NodeRehydrateFunc} from './types';

const createRecognizerDef = (tokenId: TokenId, basis: RecognizerBasisDefs): NodeRecognizer => {
	let BaseClass: GroovyAstNodeRecognizerConstructor,
		rehydrate: ReadonlyArray<RehydrateBasis>,
		preserve: ReadonlyArray<PreserveCheckBasis>,
		declareAsParent: ReadonlyArray<DeclareAsParentBasis>;

	if (basis === 'TODO' || basis === 'NotRequired') {
		BaseClass = AbstractNodeRecognizer;
		rehydrate = (void 0);
		preserve = (void 0);
		declareAsParent = (void 0);
	} else {
		BaseClass = basis.class ?? AbstractNodeRecognizer;
		rehydrate = basis.rehydrate;
		preserve = basis.preserve;
		declareAsParent = basis.declareAsParent;
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
		buildRehydrateFuncs(rehydrate),
		buildPreserveFuncs(preserve),
		buildDeclareAsParentFuncs(declareAsParent)
	);
};

export const NodeRecognizers: Readonly<{ [key in keyof typeof RecognizerBasis]: NodeRecognizer }> = (() => {
	return Object.keys(RecognizerBasis).reduce((defs, tokenId) => {
		const def = RecognizerBasis[tokenId];
		defs[tokenId] = createRecognizerDef(Number(tokenId) as TokenId, def);
		return defs;
	}, {});
})();
