import {AstNodeWithOptionsConstructor} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractKeywordNode extends AbstractAstNode {
}

const createKeywordNode = (name: string, tokeId: TokenId) => {
	const cls = class extends AbstractKeywordNode {
		get tokenId(): TokenId {
			return tokeId;
		}
	};
	Object.defineProperty(cls, 'name', {value: `Kw${name}Node`});
	return cls as unknown as AstNodeWithOptionsConstructor;
};

/** "package" */
export const KwPackageNode = createKeywordNode('Package', TokenId.PACKAGE);
/** "import" */
export const KwImportNode = createKeywordNode('Import', TokenId.IMPORT);
/** "as", for class/field import and type cast */
export const KwAsNode = createKeywordNode('As', TokenId.AS);
/** "static", for class, method, field and static import */
export const KwStaticNode = createKeywordNode('Static', TokenId.STATIC);
/** "public", for class, constructor, method, and field */
export const KwPublicNode = createKeywordNode('Public', TokenId.PUBLIC);
/** "protected", for class, constructor, method, and field */
export const KwProtectedNode = createKeywordNode('Protected', TokenId.PROTECTED);
/** "private", for class, constructor, method, and field */
export const KwPrivateNode = createKeywordNode('Private', TokenId.PRIVATE);
/** "final", for class (not interface), method, field and parameter */
export const KwFinalNode = createKeywordNode('Final', TokenId.FINAL);
/** "abstract", for class, constructor, method */
export const KwAbstractNode = createKeywordNode('Abstract', TokenId.ABSTRACT);
/** "strictfp", for class, constructor, method, and field */
export const KwStrictfpNode = createKeywordNode('Strictfp', TokenId.STRICTFP);
/** "record", for class */
export const KwRecordNode = createKeywordNode('Record', TokenId.RECORD);
/** "sealed", for class */
export const KwSealedNode = createKeywordNode('Sealed', TokenId.SEALED);
/** "permits", for class */
export const KwPermitsNode = createKeywordNode('Permits', TokenId.PERMITS);
/** "non-sealed", for class */
export const KwNonSealedNode = createKeywordNode('NonSealed', TokenId.NON_SEALED);
/** "interface" */
export const KwInterfaceNode = createKeywordNode('Interface', TokenId.INTERFACE);
/** "class" */
export const KwClassNode = createKeywordNode('Class', TokenId.CLASS);
/** "@interface" */
export const KwAtInterfaceNode = createKeywordNode('AtInterface', TokenId.AT_INTERFACE);
/** "enum" */
export const KwEnumNode = createKeywordNode('Enum', TokenId.ENUM);
/** "trait", for class */
export const KwTraitNode = createKeywordNode('Trait', TokenId.TRAIT);
/** "extends", for class */
export const KwExtendsNode = createKeywordNode('Extends', TokenId.EXTENDS);
/** "implements", for class */
export const KwImplementsNode = createKeywordNode('Implements', TokenId.IMPLEMENTS);
/** "default", for interface default method, switch */
export const KwDefaultNode = createKeywordNode('Default', TokenId.DEFAULT);
/** "synchronized", for method */
export const KwSynchronizedNode = createKeywordNode('Synchronized', TokenId.SYNCHRONIZED);
/** "native", for method */
export const KwNativeNode = createKeywordNode('Native', TokenId.NATIVE);
/** "transient", for field */
export const KwTransientNode = createKeywordNode('Transient', TokenId.TRANSIENT);
/** "volatile", for field */
export const KwVolatileNode = createKeywordNode('Volatile', TokenId.VOLATILE);
/** "def" */
export const KwDefNode = createKeywordNode('Def', TokenId.DEF);
/** "var" */
export const KwVarNode = createKeywordNode('Var', TokenId.VAR);
/** "const", reserved */
export const KwConstNode = createKeywordNode('Const', TokenId.CONST);
/** "goto", reserved */
export const KwGotoNode = createKeywordNode('Goto', TokenId.GOTO);
