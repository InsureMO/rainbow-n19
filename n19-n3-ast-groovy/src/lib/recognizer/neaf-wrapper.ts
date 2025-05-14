import {
	$Neaf as $NeafOfNode,
	ChildAcceptableCheckFunc,
	GroovyAstNodeWithExtraAttrGS,
	GroovyAstNodeWithExtraNumberAccumulator,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc
} from '../node';

export enum GroovyAstNodeRecognizerAttrs {
	/** default false */
	COULD_ENDS_WITH_SEMICOLON = '$$CouldEndsWithSemicolon',
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
	/** true: accept semicolon, and close on semicolon appended. default false */
	readonly CouldEndsWithSemicolon: GroovyAstNodeWithExtraAttrGS<boolean>;
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
	CouldEndsWithSemicolon: $NeafOfNode.createGetterAndSetter<boolean>(GroovyAstNodeRecognizerAttrs.COULD_ENDS_WITH_SEMICOLON),
	ElevateTrailingDetachableOnNodeClosed: $NeafOfNode.createGetterAndSetter<boolean>(GroovyAstNodeRecognizerAttrs.ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED),
	// additional
	SLCommentHighlightColumn: $NeafOfNode.createGetterAndSetter<number>(GroovyAstNodeRecognizerAttrs.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: $NeafOfNode.createNumberAccumulator(GroovyAstNodeRecognizerAttrs.IDENTIFIER_CHILD_COUNT)
};
