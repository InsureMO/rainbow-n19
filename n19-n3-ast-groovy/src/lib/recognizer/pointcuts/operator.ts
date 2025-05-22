import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {GroovyAstNodeRecognizerAttrs} from './attrs';
import {
	ChildAcceptableCheckFunc,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc,
	RecognizerAttrVisitor,
	TakeSpecificTokenToAnother
} from './types';
import {NodePointcutUtils} from './utils';

export const NodePointcutOperator = {
	// standard
	ChildAcceptableCheck: NodePointcutUtils.createAttrVisitor<ChildAcceptableCheckFunc>(GroovyAstNodeRecognizerAttrs.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: NodePointcutUtils.createAttrVisitor<OnChildAppendedFunc>(GroovyAstNodeRecognizerAttrs.ON_CHILD_APPENDED),
	OnChildClosed: NodePointcutUtils.createAttrVisitor<OnChildClosedFunc>(GroovyAstNodeRecognizerAttrs.ON_CHILD_CLOSED),
	OnNodeClosed: NodePointcutUtils.createAttrVisitor<OnNodeClosedFunc>(GroovyAstNodeRecognizerAttrs.ON_NODE_CLOSED),
	// auxiliary
	Accept5BaseNodesAsChild: NodePointcutUtils.createAttrVisitor<boolean>(GroovyAstNodeRecognizerAttrs.ACCEPT_5_BASE_NODES_AS_CHILD),
	AcceptTokenIdsAsChild: NodePointcutUtils.createAttrVisitor<Array<TokenId>>(GroovyAstNodeRecognizerAttrs.ACCEPT_TOKEN_IDS_AS_CHILD),
	AcceptTokenTypesAsChild: NodePointcutUtils.createAttrVisitor<Array<TokenType>>(GroovyAstNodeRecognizerAttrs.ACCEPT_TOKEN_TYPES_AS_CHILD),
	RejectTokenIdsAsChild: NodePointcutUtils.createAttrVisitor<Array<TokenId>>(GroovyAstNodeRecognizerAttrs.REJECT_TOKEN_IDS_AS_CHILD),
	TakeLBraceAs: NodePointcutUtils.createAttrVisitor<TakeSpecificTokenToAnother>(GroovyAstNodeRecognizerAttrs.TAKE_LBRACE_AS),
	EndWithToken: NodePointcutUtils.createAttrVisitor<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN),
	EndWithSemicolon: {
		get: (node: GroovyAstNode): boolean => node.getAttr<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN) === TokenId.Semicolon,
		set: (node: GroovyAstNode): RecognizerAttrVisitor => {
			node.setAttr<TokenId>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN, TokenId.Semicolon);
			return NodePointcutOperator;
		},
		clear: (node: GroovyAstNode): RecognizerAttrVisitor => {
			node.setAttr<undefined>(GroovyAstNodeRecognizerAttrs.END_WITH_TOKEN, (void 0));
			return NodePointcutOperator;
		}
	},
	CloseOnChildWithTokenClosed: NodePointcutUtils.createAttrVisitor<TokenId>(GroovyAstNodeRecognizerAttrs.CLOSE_ON_CHILD_WITH_TOKEN_CLOSED),
	ElevateTrailingDetachableOnNodeClosed: NodePointcutUtils.createAttrVisitor<boolean>(GroovyAstNodeRecognizerAttrs.ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED),
	clear: (node: GroovyAstNode): RecognizerAttrVisitor => {
		node.clearAttrs();
		return NodePointcutOperator;
	},
	// additional
	SLCommentHighlightColumn: NodePointcutUtils.createAttrVisitor<number>(GroovyAstNodeRecognizerAttrs.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: NodePointcutUtils.createNumberAccumulator(GroovyAstNodeRecognizerAttrs.IDENTIFIER_CHILD_COUNT)
};
