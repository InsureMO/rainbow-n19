import {
	ChildAcceptableCheckFunc,
	GroovyAstNode,
	GroovyAstNodeExtraAttrs,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc
} from '../node';
import {TokenId, TokenType} from '../tokens';
import {AstRecognizer} from './ast-recognizer';

export enum GroovyAstNodeRecognizerAttrs {
	ACCEPT_5_BASE_NODES_AS_CHILD = '$$Accept5BaseNodesAsChild',
	ACCEPT_TOKEN_IDS_AS_CHILD = '$$AcceptTokenIdsAsChild',
	ACCEPT_TOKEN_TYPES_AS_CHILD = '$$AcceptTokenTypesAsChild',
	REJECT_TOKEN_IDS_AS_CHILD = '$$RejectTokenIdsAsChild',
	TAKE_LBRACE_AS = '$$TakeLBraceAs',
	END_WITH_TOKEN = '$$EndWithToken',
	CLOSE_ON_CHILD_WITH_TOKEN_CLOSED = '$$CloseOnChildWithTokenClosed',
	/** default true */
	ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED = '$$ElevateTrailingDetachableOnNodeClosed',
	/* to identify the highlight column of single line comment */
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn',
	/** to identify the identifier child node count */
	IDENTIFIER_CHILD_COUNT = '$$IdentifierChildCount',
}

/** attribute getter and setter */
export interface RecognizerExtraAttrGS<V> {
	readonly get: (node: GroovyAstNode) => V;
	readonly set: (node: GroovyAstNode, value: V) => $NeafOfRecognizer;
	readonly clear: (node: GroovyAstNode) => $NeafOfRecognizer;
}

const createGetterAndSetter = <V>(key: GroovyAstNodeExtraAttrs | GroovyAstNodeRecognizerAttrs): RecognizerExtraAttrGS<V> => {
	return {
		get: (node: GroovyAstNode) => node.getAttr<V>(key),
		set: (node: GroovyAstNode, value: V) => {
			node.setAttr<V>(key, value);
			return $Neaf;
		},
		clear: (node: GroovyAstNode) => {
			node.setAttr<undefined>(key, (void 0));
			return $Neaf;
		}
	};
};

export interface RecognizerExtraNumberAccumulator extends RecognizerExtraAttrGS<number> {
	readonly increase: (node: GroovyAstNode) => void;
	/* will not check exists number, so might introduce negative value */
	readonly decrease: (node: GroovyAstNode) => void;
	/* reset to 0 */
	readonly reset: (node: GroovyAstNode) => void;
}

const createNumberAccumulator = (key: GroovyAstNodeExtraAttrs | string): RecognizerExtraNumberAccumulator => {
	return {
		get: (node: GroovyAstNode) => node.getAttr<number>(key) ?? 0,
		set: (node: GroovyAstNode, value: number) => {
			node.setAttr<number>(key, value);
			return $Neaf;
		},
		clear: (node: GroovyAstNode) => {
			node.setAttr<undefined>(key, (void 0));
			return $Neaf;
		},
		increase: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) + 1),
		decrease: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) - 1),
		reset: (node: GroovyAstNode) => node.setAttr<number>(key, 0)
	};
};

export type TakeSpecificTokenToAnother = TokenId | [TokenId, (astRecognizer: AstRecognizer) => boolean];

class $NeafChained {
	private readonly _node: GroovyAstNode;

	constructor(node: GroovyAstNode) {
		this._node = node;
		$Neaf.clear(this._node);
	}

	ChildAcceptableCheck(func: ChildAcceptableCheckFunc): this {
		$Neaf.ChildAcceptableCheck.set(this._node, func);
		return this;
	}

	OnChildAppended(func: OnChildAppendedFunc): this {
		$Neaf.OnChildAppended.set(this._node, func);
		return this;
	}

	OnChildClosed(func: OnChildClosedFunc): this {
		$Neaf.OnChildClosed.set(this._node, func);
		return this;
	}

	OnNodeClosed(func: OnNodeClosedFunc): this {
		$Neaf.OnNodeClosed.set(this._node, func);
		return this;
	}

	DisableAcceptAll5BaseNodesAsChild(): this {
		$Neaf.Accept5BaseNodesAsChild.set(this._node, false);
		return this;
	}

	AcceptTokenIdsAsChild(tokenId: TokenId, ...tokenIds: Array<TokenId>): this {
		$Neaf.AcceptTokenIdsAsChild.set(this._node, [tokenId, ...tokenIds]);
		return this;
	}

	AcceptTokenTypesAsChild(tokenType: TokenType, ...tokenTypes: Array<TokenType>): this {
		$Neaf.AcceptTokenTypesAsChild.set(this._node, [tokenType, ...tokenTypes]);
		return this;
	}

	RejectTokenIdsAsChild(tokenId: TokenId, ...tokenIds: Array<TokenId>): this {
		$Neaf.RejectTokenIdsAsChild.set(this._node, [tokenId, ...tokenIds]);
		return this;
	}

	TakeLBraceAs(tokenId: TokenId, when?: (astRecognizer: AstRecognizer) => boolean): this {
		if (when == null) {
			$Neaf.TakeLBraceAs.set(this._node, tokenId);
		} else {
			$Neaf.TakeLBraceAs.set(this._node, [tokenId, when]);
		}
		return this;
	}

	EndWithToken(tokenId: TokenId): this {
		$Neaf.EndWithToken.set(this._node, tokenId);
		return this;
	}

	EndWithSemicolon(): this {
		$Neaf.EndWithSemicolon.set(this._node);
		return this;
	}

	CloseOnChildWithTokenClosed(tokenId: TokenId): this {
		$Neaf.CloseOnChildWithTokenClosed.set(this._node, tokenId);
		return this;
	}

	HoldTrailingDetachableOnNodeClosed(): this {
		$Neaf.ElevateTrailingDetachableOnNodeClosed.set(this._node, false);
		return this;
	}
}

export type $NeafOfRecognizer = {
	// standard
	readonly ChildAcceptableCheck: RecognizerExtraAttrGS<ChildAcceptableCheckFunc>;
	readonly OnChildAppended: RecognizerExtraAttrGS<OnChildAppendedFunc>;
	readonly OnChildClosed: RecognizerExtraAttrGS<OnChildClosedFunc>;
	readonly OnNodeClosed: RecognizerExtraAttrGS<OnNodeClosedFunc>;
	// auxiliary
	/** accept whitespaces, tabs, newline, sl comments, ml comments. default true */
	readonly Accept5BaseNodesAsChild: RecognizerExtraAttrGS<boolean>;
	readonly AcceptTokenIdsAsChild: RecognizerExtraAttrGS<Array<TokenId>>;
	readonly AcceptTokenTypesAsChild: RecognizerExtraAttrGS<Array<TokenType>>;
	readonly RejectTokenIdsAsChild: RecognizerExtraAttrGS<Array<TokenId>>;
	readonly TakeLBraceAs: RecognizerExtraAttrGS<TakeSpecificTokenToAnother>;
	/** true: accept one token id, and close on this token id appended */
	readonly EndWithToken: RecognizerExtraAttrGS<TokenId>;
	readonly EndWithSemicolon: {
		readonly get: (node: GroovyAstNode) => boolean;
		readonly set: (node: GroovyAstNode) => $NeafOfRecognizer;
		readonly clear: (node: GroovyAstNode) => $NeafOfRecognizer;
	}
	/** close me when child with appointed token id closed */
	readonly CloseOnChildWithTokenClosed: RecognizerExtraAttrGS<TokenId>;
	/** default true */
	readonly ElevateTrailingDetachableOnNodeClosed: RecognizerExtraAttrGS<boolean>;
	readonly clear: (node: GroovyAstNode) => $NeafOfRecognizer;
	// chain
	readonly of: (node: GroovyAstNode) => $NeafChained;
	// additional
	readonly SLCommentHighlightColumn: RecognizerExtraAttrGS<number>;
	readonly IdentifierChildCount: RecognizerExtraNumberAccumulator;
}

export const $Neaf: $NeafOfRecognizer = {
	// standard
	ChildAcceptableCheck: createGetterAndSetter<ChildAcceptableCheckFunc>(GroovyAstNodeExtraAttrs.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: createGetterAndSetter<OnChildAppendedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_APPENDED),
	OnChildClosed: createGetterAndSetter<OnChildClosedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_CLOSED),
	OnNodeClosed: createGetterAndSetter<OnNodeClosedFunc>(GroovyAstNodeExtraAttrs.ON_NODE_CLOSED),
	// auxiliary
	Accept5BaseNodesAsChild: createGetterAndSetter<boolean>(GroovyAstNodeRecognizerAttrs.ACCEPT_5_BASE_NODES_AS_CHILD),
	AcceptTokenIdsAsChild: createGetterAndSetter<Array<TokenId>>(GroovyAstNodeRecognizerAttrs.ACCEPT_TOKEN_IDS_AS_CHILD),
	AcceptTokenTypesAsChild: createGetterAndSetter<Array<TokenType>>(GroovyAstNodeRecognizerAttrs.ACCEPT_TOKEN_TYPES_AS_CHILD),
	RejectTokenIdsAsChild: createGetterAndSetter<Array<TokenId>>(GroovyAstNodeRecognizerAttrs.REJECT_TOKEN_IDS_AS_CHILD),
	TakeLBraceAs: createGetterAndSetter<TakeSpecificTokenToAnother>(GroovyAstNodeRecognizerAttrs.TAKE_LBRACE_AS),
	EndWithToken: createGetterAndSetter<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN),
	EndWithSemicolon: {
		get: (node: GroovyAstNode): boolean => node.getAttr<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN) === TokenId.Semicolon,
		set: (node: GroovyAstNode): $NeafOfRecognizer => {
			node.setAttr<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN, TokenId.Semicolon);
			return $Neaf;
		},
		clear: (node: GroovyAstNode): $NeafOfRecognizer => {
			node.setAttr<undefined>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN, (void 0));
			return $Neaf;
		}
	},
	CloseOnChildWithTokenClosed: createGetterAndSetter<TokenId>(GroovyAstNodeRecognizerAttrs.CLOSE_ON_CHILD_WITH_TOKEN_CLOSED),
	ElevateTrailingDetachableOnNodeClosed: createGetterAndSetter<boolean>(GroovyAstNodeRecognizerAttrs.ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED),
	clear: (node: GroovyAstNode): $NeafOfRecognizer => {
		node.clearAttrs();
		return $Neaf;
	},
	of: (node: GroovyAstNode): $NeafChained => {
		return new $NeafChained(node);
	},
	// additional
	SLCommentHighlightColumn: createGetterAndSetter<number>(GroovyAstNodeRecognizerAttrs.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: createNumberAccumulator(GroovyAstNodeRecognizerAttrs.IDENTIFIER_CHILD_COUNT)
};
