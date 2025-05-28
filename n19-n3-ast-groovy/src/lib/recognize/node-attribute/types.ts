import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';

export enum GroovyAstNodeAttributeNames {
	/** check a node can be accepted as child or not */
	CHILD_ACCEPTABLE_CHECK = '$$ChildAcceptable',
	/** trigger after a child node appended */
	ON_CHILD_APPENDED = '$$OnChildAppended',
	ON_CHILD_CLOSED = '$$OnChildClosed',
	ON_NODE_CLOSED = '$$OnNodeClosed',
	/* to identify the lbrace will be taken as */
	TAKE_LBRACE_AS = '$$TakeLBraceAs',
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

export type OneOfChildAcceptableCheckFunc = (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OneOfOnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OneOfOnChildClosedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;

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
	readonly clear: (node: GroovyAstNode) => RecognizerAttrVisitor;
	// additional
	readonly TakeLBraceAs: RecognizerExtraAttribute<TakeSpecificTokenToAnother>;
	readonly SLCommentHighlightColumn: RecognizerExtraAttribute<number>;
	readonly IdentifierChildCount: RecognizerExtraNumberAccumulator;
}
