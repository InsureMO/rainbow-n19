import {
	$Neaf as $NeafOfNode,
	ChildAcceptableCheckFunc,
	GroovyAstNode,
	GroovyAstNodeWithExtraAttrGS,
	GroovyAstNodeWithExtraNumberAccumulator,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc
} from '../node';
import {TokenId} from '../tokens';

export enum GroovyAstNodeRecognizerAttrs {
	/** default false */
	END_WITH_TOKEN = '$$EndWithToken',
	CLOSE_ON_CHILD_WITH_TOKEN_CLOSED = '$$CloseOnChildWithTokenClosed',
	/** default true */
	ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED = '$$ElevateTrailingDetachableOnNodeClosed',
	/* to identify the highlight column of single line comment */
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn',
	/** to identify the identifier child node count */
	IDENTIFIER_CHILD_COUNT = '$$IdentifierChildCount',
}

export type $NeafOfRecognizer = {
	// standard
	readonly ChildAcceptableCheck: GroovyAstNodeWithExtraAttrGS<ChildAcceptableCheckFunc>;
	readonly OnChildAppended: GroovyAstNodeWithExtraAttrGS<OnChildAppendedFunc>;
	readonly OnChildClosed: GroovyAstNodeWithExtraAttrGS<OnChildClosedFunc>;
	readonly OnNodeClosed: GroovyAstNodeWithExtraAttrGS<OnNodeClosedFunc>;
	// auxiliary
	/** true: accept one token id, and close on this token id appended */
	readonly EndWithToken: GroovyAstNodeWithExtraAttrGS<TokenId>;
	readonly EndWithSemicolon: {
		readonly get: (node: GroovyAstNode) => boolean;
		readonly set: (node: GroovyAstNode) => void;
		readonly clear: (node: GroovyAstNode) => void;
	}
	/** close me when child with appointed token id closed */
	readonly CloseOnChildWithTokenClosed: GroovyAstNodeWithExtraAttrGS<TokenId>;
	/** default true */
	readonly ElevateTrailingDetachableOnNodeClosed: GroovyAstNodeWithExtraAttrGS<boolean>;
	// additional
	readonly SLCommentHighlightColumn: GroovyAstNodeWithExtraAttrGS<number>;
	readonly IdentifierChildCount: GroovyAstNodeWithExtraNumberAccumulator;
}

export const $Neaf: $NeafOfRecognizer = {
	// standard
	ChildAcceptableCheck: $NeafOfNode.ChildAcceptableCheck,
	OnChildAppended: $NeafOfNode.OnChildAppended,
	OnChildClosed: $NeafOfNode.OnChildClosed,
	OnNodeClosed: $NeafOfNode.OnNodeClosed,
	// auxiliary
	EndWithToken: $NeafOfNode.createGetterAndSetter<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN),
	EndWithSemicolon: {
		get: (node: GroovyAstNode): boolean => node.attr<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN) === TokenId.Semicolon,
		set: (node: GroovyAstNode): void => node.attrs<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN, TokenId.Semicolon),
		clear: (node: GroovyAstNode): void => node.attrs<undefined>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN, (void 0))
	},
	CloseOnChildWithTokenClosed: $NeafOfNode.createGetterAndSetter<TokenId>(GroovyAstNodeRecognizerAttrs.CLOSE_ON_CHILD_WITH_TOKEN_CLOSED),
	ElevateTrailingDetachableOnNodeClosed: $NeafOfNode.createGetterAndSetter<boolean>(GroovyAstNodeRecognizerAttrs.ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED),
	// additional
	SLCommentHighlightColumn: $NeafOfNode.createGetterAndSetter<number>(GroovyAstNodeRecognizerAttrs.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: $NeafOfNode.createNumberAccumulator(GroovyAstNodeRecognizerAttrs.IDENTIFIER_CHILD_COUNT)
};
