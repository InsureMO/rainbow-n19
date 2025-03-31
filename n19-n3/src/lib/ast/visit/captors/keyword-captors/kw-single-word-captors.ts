import {AstNodeConstructor} from '../../../ast-node';
import {
	AbstractKeywordNode,
	KwAbstractNode,
	KwAsNode,
	KwConstNode,
	KwDefaultNode,
	KwExtendsNode,
	KwFinalNode,
	KwGotoNode,
	KwImplementsNode,
	KwNativeNode,
	KwNonSealedNode,
	KwPermitsNode,
	KwPrivateNode,
	KwProtectedNode,
	KwPublicNode,
	KwSealedNode,
	KwStaticNode,
	KwStrictfpNode,
	KwSynchronizedNode,
	KwTransientNode,
	KwVolatileNode
} from '../../../node';
import {AstNodeCaptorWithVisitorConstructor} from '../../captor';
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

const createSingleWordCaptor = <N extends AbstractKeywordNode>(name: string, type: AstNodeConstructor<N>) => {
	const cls = class extends AbstractKeywordCaptor<N> {
		constructor(astVisitor: AstVisitor) {
			super(name, astVisitor);
		}

		protected getAstNodeConstructor(): AstNodeConstructor<N> {
			return type;
		}

		protected isContainerNode(): boolean {
			return false;
		}
	};
	Object.defineProperty(cls, 'name', {value: `Kw${name[0].toUpperCase() + name.slice(1)}Captor`});
	return cls as unknown as AstNodeCaptorWithVisitorConstructor;
};

export const KwStaticCaptor = createSingleWordCaptor(AstKeywords.Static, KwStaticNode);
export const KwAsCaptor = createSingleWordCaptor(AstKeywords.As, KwAsNode);
export const KwPublicCaptor = createSingleWordCaptor(AstKeywords.Public, KwPublicNode);
export const KwProtectedCaptor = createSingleWordCaptor(AstKeywords.Protected, KwProtectedNode);
export const KwPrivateCaptor = createSingleWordCaptor(AstKeywords.Private, KwPrivateNode);
export const KwFinalCaptor = createSingleWordCaptor(AstKeywords.Final, KwFinalNode);
export const KwAbstractCaptor = createSingleWordCaptor(AstKeywords.Abstract, KwAbstractNode);
export const KwStrictfpCaptor = createSingleWordCaptor(AstKeywords.Strictfp, KwStrictfpNode);
export const KwSealedCaptor = createSingleWordCaptor(AstKeywords.Sealed, KwSealedNode);
export const KwPermitsCaptor = createSingleWordCaptor(AstKeywords.Permits, KwPermitsNode);
export const KwNonSealedCaptor = createSingleWordCaptor(AstKeywords.NonSealed, KwNonSealedNode);
export const KwExtendsCaptor = createSingleWordCaptor(AstKeywords.Extends, KwExtendsNode);
export const KwImplementsCaptor = createSingleWordCaptor(AstKeywords.Implements, KwImplementsNode);
export const KwDefaultCaptor = createSingleWordCaptor(AstKeywords.Default, KwDefaultNode);
export const KwSynchronizedCaptor = createSingleWordCaptor(AstKeywords.Synchronized, KwSynchronizedNode);
export const KwTransientCaptor = createSingleWordCaptor(AstKeywords.Transient, KwTransientNode);
export const KwVolatileCaptor = createSingleWordCaptor(AstKeywords.Volatile, KwVolatileNode);
export const KwNativeCaptor = createSingleWordCaptor(AstKeywords.Native, KwNativeNode);

// reserved
export const KwConstCaptor = createSingleWordCaptor(AstKeywords.Const, KwConstNode);
export const KwGotoCaptor = createSingleWordCaptor(AstKeywords.Goto, KwGotoNode);