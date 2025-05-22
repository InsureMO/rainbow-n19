import {TokenId} from '../../tokens';
import {AbstractNodeRecognizer} from '../specific-impls';
import {NodeRecognizer} from '../types';
import {RecognizerBasis} from './basis';
import {buildDeclareAsParentFunc} from './declare-as-parent-def';
import {buildPreserveFunc} from './preserve-def';
import {buildRehydrateFunc} from './rehydrate-def';
import {NodeAsParentDeclareFunc, NodePreservableCheckFunc, NodeRehydrateFunc, RecognizerBasisType} from './types';

const createRecognizerDef = (tokenId: TokenId, basis: Exclude<RecognizerBasisType, 'TODO' | 'NotRequired'>): NodeRecognizer => {
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

export const RecognizerDef: Readonly<{ [key in keyof typeof RecognizerBasis]: NodeRecognizer }> = (() => {
	return Object.keys(RecognizerBasis).reduce((defs, tokenId) => {
		const def = RecognizerBasis[tokenId];
		if (def !== 'TODO' && def !== 'NotRequired') {
			defs[tokenId] = createRecognizerDef(Number(tokenId) as TokenId, def);
		}
		return defs;
	}, {});
})();
