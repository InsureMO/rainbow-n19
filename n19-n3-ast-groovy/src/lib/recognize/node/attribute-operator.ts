import {GroovyAstNode} from '../../node';
import {TokenId, TokenType} from '../../tokens';
import {
	ChildAcceptableCheckFunc,
	GroovyAstNodeAccumulativeAttributeNames,
	GroovyAstNodeAttributeNames,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OnNodeClosedFunc,
	RecognizerAttrVisitor,
	RecognizerExtraAttribute,
	RecognizerExtraNumberAccumulator,
	TakeSpecificTokenToAnother
} from './attribute';

export const NodeAttributeOperatorHelper = {
	createAttrVisitor: <V>(key: GroovyAstNodeAttributeNames): RecognizerExtraAttribute<V> => {
		return {
			get: (node: GroovyAstNode) => node.getAttr<V>(key),
			set: (node: GroovyAstNode, value: V) => {
				node.setAttr<V>(key, value);
				return NodeAttributeOperator;
			},
			clear: (node: GroovyAstNode) => {
				node.setAttr<undefined>(key, (void 0));
				return NodeAttributeOperator;
			}
		};
	},

	createNumberAccumulator: (key: GroovyAstNodeAccumulativeAttributeNames): RecognizerExtraNumberAccumulator => {
		return {
			get: (node: GroovyAstNode) => node.getAttr<number>(key) ?? 0,
			set: (node: GroovyAstNode, value: number) => {
				node.setAttr<number>(key, value);
				return NodeAttributeOperator;
			},
			clear: (node: GroovyAstNode) => {
				node.setAttr<undefined>(key, (void 0));
				return NodeAttributeOperator;
			},
			increase: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) + 1),
			decrease: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) - 1),
			reset: (node: GroovyAstNode) => node.setAttr<number>(key, 0)
		};
	}
};

export const NodeAttributeOperator = {
	// standard
	ChildAcceptableCheck: NodeAttributeOperatorHelper.createAttrVisitor<ChildAcceptableCheckFunc>(GroovyAstNodeAttributeNames.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: NodeAttributeOperatorHelper.createAttrVisitor<OnChildAppendedFunc>(GroovyAstNodeAttributeNames.ON_CHILD_APPENDED),
	OnChildClosed: NodeAttributeOperatorHelper.createAttrVisitor<OnChildClosedFunc>(GroovyAstNodeAttributeNames.ON_CHILD_CLOSED),
	OnNodeClosed: NodeAttributeOperatorHelper.createAttrVisitor<OnNodeClosedFunc>(GroovyAstNodeAttributeNames.ON_NODE_CLOSED),
	// auxiliary
	Accept5BaseNodesAsChild: NodeAttributeOperatorHelper.createAttrVisitor<boolean>(GroovyAstNodeAttributeNames.ACCEPT_5_BASE_NODES_AS_CHILD),
	AcceptTokenIdsAsChild: NodeAttributeOperatorHelper.createAttrVisitor<Array<TokenId>>(GroovyAstNodeAttributeNames.ACCEPT_TOKEN_IDS_AS_CHILD),
	AcceptTokenTypesAsChild: NodeAttributeOperatorHelper.createAttrVisitor<Array<TokenType>>(GroovyAstNodeAttributeNames.ACCEPT_TOKEN_TYPES_AS_CHILD),
	RejectTokenIdsAsChild: NodeAttributeOperatorHelper.createAttrVisitor<Array<TokenId>>(GroovyAstNodeAttributeNames.REJECT_TOKEN_IDS_AS_CHILD),
	TakeLBraceAs: NodeAttributeOperatorHelper.createAttrVisitor<TakeSpecificTokenToAnother>(GroovyAstNodeAttributeNames.TAKE_LBRACE_AS),
	EndWithToken: NodeAttributeOperatorHelper.createAttrVisitor<TokenId>(GroovyAstNodeAttributeNames.END_WITH_TOKEN),
	EndWithSemicolon: {
		get: (node: GroovyAstNode): boolean => node.getAttr<TokenId>(GroovyAstNodeAttributeNames.END_WITH_TOKEN) === TokenId.Semicolon,
		set: (node: GroovyAstNode): RecognizerAttrVisitor => {
			node.setAttr<TokenId>(GroovyAstNodeAttributeNames.END_WITH_TOKEN, TokenId.Semicolon);
			return NodeAttributeOperator;
		},
		clear: (node: GroovyAstNode): RecognizerAttrVisitor => {
			node.setAttr<undefined>(GroovyAstNodeAttributeNames.END_WITH_TOKEN, (void 0));
			return NodeAttributeOperator;
		}
	},
	CloseOnChildWithTokenClosed: NodeAttributeOperatorHelper.createAttrVisitor<TokenId>(GroovyAstNodeAttributeNames.CLOSE_ON_CHILD_WITH_TOKEN_CLOSED),
	ElevateTrailingDetachableOnNodeClosed: NodeAttributeOperatorHelper.createAttrVisitor<boolean>(GroovyAstNodeAttributeNames.ELEVATE_TRAILING_DETACHABLE_ON_NODE_CLOSED),
	clear: (node: GroovyAstNode): RecognizerAttrVisitor => {
		node.clearAttrs();
		return NodeAttributeOperator;
	},
	// additional
	SLCommentHighlightColumn: NodeAttributeOperatorHelper.createAttrVisitor<number>(GroovyAstNodeAttributeNames.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: NodeAttributeOperatorHelper.createNumberAccumulator(GroovyAstNodeAttributeNames.IDENTIFIER_CHILD_COUNT)
};
