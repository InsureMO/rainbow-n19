import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';

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
	readonly EndWithToken: RecognizerExtraAttribute<TokenId>;
	readonly EndWithSemicolon: {
		readonly get: (node: GroovyAstNode) => boolean;
		readonly set: (node: GroovyAstNode) => RecognizerAttrVisitor;
		readonly clear: (node: GroovyAstNode) => RecognizerAttrVisitor;
	}
	/** close me when child with appointed token id closed */
	readonly CloseOnChildWithTokenClosed: RecognizerExtraAttribute<TokenId>;
	/** default true */
	readonly ElevateTrailingDetachableOnNodeClosed: RecognizerExtraAttribute<boolean>;
	readonly clear: (node: GroovyAstNode) => RecognizerAttrVisitor;
	// additional
	readonly SLCommentHighlightColumn: RecognizerExtraAttribute<number>;
	readonly IdentifierChildCount: RecognizerExtraNumberAccumulator;
}
