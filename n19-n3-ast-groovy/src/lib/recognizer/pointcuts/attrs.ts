export enum GroovyAstNodeRecognizerAttrs {
	/** check a node can be accepted as child or not */
	CHILD_ACCEPTABLE_CHECK = '$$ChildAcceptable',
	/** trigger after a child node appended */
	ON_CHILD_APPENDED = '$$OnChildAppended',
	ON_CHILD_CLOSED = '$$OnChildClosed',
	ON_NODE_CLOSED = '$$OnNodeClosed',
	// shortcuts
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

export type GroovyAstNodeRecognizerAccumulativeAttrs = GroovyAstNodeRecognizerAttrs.IDENTIFIER_CHILD_COUNT;
