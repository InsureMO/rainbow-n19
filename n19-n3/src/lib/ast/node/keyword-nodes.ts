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

/** "in" */
export class KwInNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IN;
	}
}

/** "@Threadsafe" */
export class ThreadsafeNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THREADSAFE;
	}
}

/** "assert" */
export class AssertNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ASSERT;
	}
}

/** "break" */
export class BreakNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.BREAK;
	}
}

/** "case" */
export class CaseNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CASE;
	}
}

/** "catch" */
export class CatchNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CATCH;
	}
}

/** "continue" */
export class ContinueNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CONTINUE;
	}
}

/** "do" */
export class DoNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.DO;
	}
}

/** "else" */
export class ElseNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ELSE;
	}
}

/** "final" */
export class FinalNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FINAL;
	}
}

/** "finally" */
export class FinallyNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FINALLY;
	}
}

/** "for" */
export class ForNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FOR;
	}
}

/** "if" */
export class IfNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IF;
	}
}

/** "instanceof" */
export class InstanceofNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.INSTANCEOF;
	}
}

/** "new" */
export class NewNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NEW;
	}
}

/** "null" */
export class NullNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NULL;
	}
}

/** "return" */
export class ReturnNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.RETURN;
	}
}

/** "super" */
export class SuperNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SUPER;
	}
}

/** "switch" */
export class SwitchNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SWITCH;
	}
}

/** "this" */
export class ThisNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THIS;
	}
}

/** "throw" */
export class ThrowNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THROW;
	}
}

/** "throws" */
export class ThrowsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.THROWS;
	}
}

/** "transient" */
export class TransientNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRANSIENT;
	}
}

/** "try" */
export class TryNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.TRY;
	}
}

/** "void" */
export class VoidNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.VOID;
	}
}

/** "while" */
export class WhileNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.WHILE;
	}
}

/** "yield" */
export class YieldNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.YIELD;
	}
}

