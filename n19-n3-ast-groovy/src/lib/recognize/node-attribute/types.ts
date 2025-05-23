import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';

export enum GroovyAstNodeAttributeNames {
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
	END_WITH_ANY_OF_TOKEN_IDS = '$$EndWithAnyOfTokenIds',
	CLOSE_ON_CHILD_WITH_TOKEN_CLOSED = '$$CloseOnChildWithTokenClosed',
	/** default true */
	ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED = '$$ElevateTrailingDetachableOnNodeClosed',
	/* to identify the highlight column of single line comment */
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn',
	/** to identify the identifier child node count */
	IDENTIFIER_CHILD_COUNT = '$$IdentifierChildCount',
}

export type GroovyAstNodeAccumulativeAttributeNames = GroovyAstNodeAttributeNames.IDENTIFIER_CHILD_COUNT;

export type ChildAcceptableCheckFunc = (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => void;
export type OnChildClosedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => void;
export type OnNodeClosedFunc = (node: GroovyAstNode, astRecognizer: AstRecognizer) => void;

/** attribute getter and setter */
export interface RecognizerExtraAttribute<V> {
	readonly get: (node: GroovyAstNode) => V;
	readonly set: (node: GroovyAstNode, value: V) => RecognizerAttrVisitor;
	readonly clear: (node: GroovyAstNode) => RecognizerAttrVisitor;
}

export interface RecognizerExtraNumberAccumulator extends RecognizerExtraAttribute<number> {
	readonly increase: (node: GroovyAstNode) => void;
	/* will not check exists number, so might introduce negative value */
	readonly decrease: (node: GroovyAstNode) => void;
	/* reset to 0 */
	readonly reset: (node: GroovyAstNode) => void;
}

export type TakeSpecificTokenToAnother = TokenId | ((astRecognizer: AstRecognizer) => Optional<TokenId>);

export type RecognizerAttrVisitor = {
	// standard
	readonly ChildAcceptableCheck: RecognizerExtraAttribute<ChildAcceptableCheckFunc>;
	readonly OnChildAppended: RecognizerExtraAttribute<OnChildAppendedFunc>;
	readonly OnChildClosed: RecognizerExtraAttribute<OnChildClosedFunc>;
	readonly OnNodeClosed: RecognizerExtraAttribute<OnNodeClosedFunc>;
	// auxiliary
	/** accept whitespaces, tabs, newline, sl comments, ml comments. default true */
	readonly Accept5BaseNodesAsChild: RecognizerExtraAttribute<boolean>;
	readonly AcceptTokenIdsAsChild: RecognizerExtraAttribute<Array<TokenId>>;
	readonly AcceptTokenTypesAsChild: RecognizerExtraAttribute<Array<TokenType>>;
	readonly RejectTokenIdsAsChild: RecognizerExtraAttribute<Array<TokenId>>;
	readonly TakeLBraceAs: RecognizerExtraAttribute<TakeSpecificTokenToAnother>;
	/** true: accept one token id, and close on this token id appended */
	readonly EndWithAnyOfTokenIds: RecognizerExtraAttribute<Array<TokenId>>;
	/** close me when child with appointed token id closed */
	readonly CloseOnChildWithTokenClosed: RecognizerExtraAttribute<TokenId>;
	/** default true */
	readonly ElevateTrailingDetachableOnNodeClosed: RecognizerExtraAttribute<boolean>;
	readonly clear: (node: GroovyAstNode) => RecognizerAttrVisitor;
	// additional
	readonly SLCommentHighlightColumn: RecognizerExtraAttribute<number>;
	readonly IdentifierChildCount: RecognizerExtraNumberAccumulator;
}
