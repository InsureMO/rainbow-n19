import {TokenId} from '../../tokens';
import {AbstractNodeRecognizer} from '../node-recognize-specific';
import {buildDeclareAsParentFunc} from './defs-declare-as-parent';
import {buildPreserveFunc} from './defs-preserve';
import {buildRehydrateFunc} from './defs-rehydrate';
import {NodeRecognizer} from './recognizer';
import {RecognizerBasis, RecognizerBasisDefs} from './recognizer-basis';
import {NodeAsParentDeclareFunc, NodePreservableCheckFunc, NodeRehydrateFunc} from './types';

const createRecognizerDef = (tokenId: TokenId, basis: Exclude<RecognizerBasisDefs, 'TODO' | 'NotRequired'>): NodeRecognizer => {
	const {
		name: className, class: BaseClass = AbstractNodeRecognizer,
		rehydrate, preserve, declareAsParent
	} = basis;
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
	Object.defineProperty(RecognizerClass, 'name', {value: `${className}Recognizer`});
	return new RecognizerClass(
		tokenId,
		rehydrate?.map(r => buildRehydrateFunc(r)),
		preserve?.map(p => buildPreserveFunc(p)),
		declareAsParent?.map(d => buildDeclareAsParentFunc(d))
	);
};

export const NodeRecognizers: Readonly<{ [key in keyof typeof RecognizerBasis]: NodeRecognizer }> = (() => {
	return Object.keys(RecognizerBasis).reduce((defs, tokenId) => {
		const def = RecognizerBasis[tokenId];
		if (def !== 'TODO' && def !== 'NotRequired') {
			defs[tokenId] = createRecognizerDef(Number(tokenId) as TokenId, def);
		}
		return defs;
	}, {});
})();
