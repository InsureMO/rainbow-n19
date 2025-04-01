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
import {AstKeywords} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractKeywordCaptor} from './abstract-keyword-captor';

export abstract class AbstractSingleWordKeywordCaptor<N extends AbstractKeywordNode> extends AbstractKeywordCaptor<N> {
	protected constructor(keyword: string, astVisitor: AstVisitor) {
		super(keyword, astVisitor);
	}

	protected isContainerNode(): boolean {
		return false;
	}
}

export class KwStaticCaptor extends AbstractSingleWordKeywordCaptor<KwStaticNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Static, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwStaticNode> {
		return KwStaticNode;
	}
}

export class KwAsCaptor extends AbstractSingleWordKeywordCaptor<KwAsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.As, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwAsNode> {
		return KwAsNode;
	}
}

export class KwPublicCaptor extends AbstractSingleWordKeywordCaptor<KwPublicNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Public, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwPublicNode> {
		return KwPublicNode;
	}
}

export class KwProtectedCaptor extends AbstractSingleWordKeywordCaptor<KwProtectedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Protected, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwProtectedNode> {
		return KwProtectedNode;
	}
}

export class KwPrivateCaptor extends AbstractSingleWordKeywordCaptor<KwPrivateNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Private, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwPrivateNode> {
		return KwPrivateNode;
	}
}

export class KwFinalCaptor extends AbstractSingleWordKeywordCaptor<KwFinalNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Final, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwFinalNode> {
		return KwFinalNode;
	}
}

export class KwAbstractCaptor extends AbstractSingleWordKeywordCaptor<KwAbstractNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Abstract, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwAbstractNode> {
		return KwAbstractNode;
	}
}

export class KwStrictfpCaptor extends AbstractSingleWordKeywordCaptor<KwStrictfpNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Strictfp, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwStrictfpNode> {
		return KwStrictfpNode;
	}
}

export class KwSealedCaptor extends AbstractSingleWordKeywordCaptor<KwSealedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Sealed, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwSealedNode> {
		return KwSealedNode;
	}
}

export class KwPermitsCaptor extends AbstractSingleWordKeywordCaptor<KwPermitsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Permits, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwPermitsNode> {
		return KwPermitsNode;
	}
}

export class KwNonSealedCaptor extends AbstractSingleWordKeywordCaptor<KwNonSealedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.NonSealed, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwNonSealedNode> {
		return KwNonSealedNode;
	}
}

export class KwExtendsCaptor extends AbstractSingleWordKeywordCaptor<KwExtendsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Extends, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwExtendsNode> {
		return KwExtendsNode;
	}
}

export class KwImplementsCaptor extends AbstractSingleWordKeywordCaptor<KwImplementsNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Implements, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwImplementsNode> {
		return KwImplementsNode;
	}
}

export class KwDefaultCaptor extends AbstractSingleWordKeywordCaptor<KwDefaultNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Default, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwDefaultNode> {
		return KwDefaultNode;
	}
}

export class KwSynchronizedCaptor extends AbstractSingleWordKeywordCaptor<KwSynchronizedNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Synchronized, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwSynchronizedNode> {
		return KwSynchronizedNode;
	}
}

export class KwTransientCaptor extends AbstractSingleWordKeywordCaptor<KwTransientNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Transient, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwTransientNode> {
		return KwTransientNode;
	}
}

export class KwVolatileCaptor extends AbstractSingleWordKeywordCaptor<KwVolatileNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Volatile, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwVolatileNode> {
		return KwVolatileNode;
	}
}

export class KwNativeCaptor extends AbstractSingleWordKeywordCaptor<KwNativeNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Native, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwNativeNode> {
		return KwNativeNode;
	}
}

// reserved
export class KwConstCaptor extends AbstractSingleWordKeywordCaptor<KwConstNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Const, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwConstNode> {
		return KwConstNode;
	}
}

export class KwGotoCaptor extends AbstractSingleWordKeywordCaptor<KwGotoNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstKeywords.Goto, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<KwGotoNode> {
		return KwGotoNode;
	}
}