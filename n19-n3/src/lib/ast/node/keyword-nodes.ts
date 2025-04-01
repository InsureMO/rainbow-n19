import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractKeywordNode extends AbstractAstNode {
}

/** "package" */
export class KwPackageNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PACKAGE;
	}
}

/** "import" */
export class KwImportNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IMPORT;
	}
}

/** "as", for class/field import and type cast */
export class KwAsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.AS;
	}
}

/** "static", for class, method, field and static import */
export class KwStaticNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.STATIC;
	}
}

/** "public", for class, constructor, method, and field */
export class KwPublicNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PUBLIC;
	}
}

/** "protected", for class, constructor, method, and field */
export class KwProtectedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PROTECTED;
	}
}

/** "private", for class, constructor, method, and field */
export class KwPrivateNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PRIVATE;
	}
}

/** "final", for class (not interface), method, field and parameter */
export class KwFinalNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FINAL;
	}
}

/** "abstract", for class, constructor, method */
export class KwAbstractNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ABSTRACT;
	}
}

/** "strictfp", for class, constructor, method, and field */
export class KwStrictfpNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.STRICTFP;
	}
}

/** "record", for class */
export class KwRecordNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.RECORD;
	}
}

/** "sealed", for class */
export class KwSealedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SEALED;
	}
}

/** "permits", for class */
export class KwPermitsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PERMITS;
	}
}

/** "non-sealed", for class */
export class KwNonSealedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NON_SEALED;
	}
}

/** "interface" */
export class KwInterfaceNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.INTERFACE;
	}
}

/** "class" */
export class KwClassNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CLASS;
	}
}

/** "@interface" */
export class KwAtInterfaceNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.AT_INTERFACE;
	}
}

/** "enum" */
export class KwEnumNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ENUM;
	}
}

/** "trait", for class */
export class KwTraitNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRAIT;
	}
}

/** "extends", for class */
export class KwExtendsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.EXTENDS;
	}
}

/** "implements", for class */
export class KwImplementsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IMPLEMENTS;
	}
}

/** "default", for interface default method, switch */
export class KwDefaultNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.DEFAULT;
	}
}

/** "synchronized", for method */
export class KwSynchronizedNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SYNCHRONIZED;
	}
}

/** "native", for method */
export class KwNativeNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NATIVE;
	}
}

/** "transient", for field */
export class KwTransientNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRANSIENT;
	}
}

/** "volatile", for field */
export class KwVolatileNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.VOLATILE;
	}
}

/** "def" */
export class KwDefNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.DEF;
	}
}

/** "var" */
export class KwVarNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.VAR;
	}
}

/** "const", reserved */
export class KwConstNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CONST;
	}
}

/** "goto", reserved */
export class KwGotoNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.GOTO;
	}
}
