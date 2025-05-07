import {AstRecognizer} from '../recognizer';
import {GroovyAstNode} from './groovy-node';

export enum GroovyAstNodeExtraAttrs {
	/** check a node can be accepted as child or not */
	CHILD_ACCEPTABLE_CHECK = '$$ChildAcceptable',
	/** trigger after a child node appended */
	ON_CHILD_APPENDED = '$$OnChildAppended',
	ON_CHILD_CLOSED = '$$OnChildClosed',
	ON_NODE_CLOSED = '$$OnNodeClosed',
	/* to identify the highlight column of single line comment */
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn',
	/** to identify the identifier child node count */
	IDENTIFIER_CHILD_COUNT = '$$IdentifierChildCount',
}

export type ChildAcceptableCheckFunc = (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => boolean;
export type OnChildAppendedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => void;
export type OnChildClosedFunc = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer) => void;
export type OnNodeClosedFunc = (node: GroovyAstNode, astRecognizer: AstRecognizer) => void;

/** attribute getter and setter */
export interface GroovyAstNodeWithExtraAttrGS<V> {
	get: (node: GroovyAstNode) => V;
	set: (node: GroovyAstNode, value: V) => void;
}

const createGetterAndSetter = <V>(key: GroovyAstNodeExtraAttrs): GroovyAstNodeWithExtraAttrGS<V> => {
	return {
		get: (node: GroovyAstNode) => node.attr<V>(key),
		set: (node: GroovyAstNode, value: V) => node.attrs<V>(key, value)
	};
};

export interface GroovyAstNodeWithExtraNumberAccumulator extends GroovyAstNodeWithExtraAttrGS<number> {
	increase: (node: GroovyAstNode) => void;
	/* will not check exists number, so might introduce negative value */
	decrease: (node: GroovyAstNode) => void;
	/* reset to 0 */
	reset: (node: GroovyAstNode) => void;
}

const createNumberAccumulator = (key: GroovyAstNodeExtraAttrs): GroovyAstNodeWithExtraNumberAccumulator => {
	return {
		get: (node: GroovyAstNode) => node.attr<number>(key) ?? 0,
		set: (node: GroovyAstNode, value: number) => node.attrs<number>(key, value),
		increase: (node: GroovyAstNode) => node.attrs<number>(key, (node.attr<number>(key) ?? 0) + 1),
		decrease: (node: GroovyAstNode) => node.attrs<number>(key, (node.attr<number>(key) ?? 0) - 1),
		reset: (node: GroovyAstNode) => node.attrs<number>(key, 0)
	};
};

/** Node extra attrs facade */
export const $NAF = {
	ChildAcceptableCheck: createGetterAndSetter<ChildAcceptableCheckFunc>(GroovyAstNodeExtraAttrs.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: createGetterAndSetter<OnChildAppendedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_APPENDED),
	OnChildClosed: createGetterAndSetter<OnChildClosedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_CLOSED),
	OnNodeClosed: createGetterAndSetter<OnNodeClosedFunc>(GroovyAstNodeExtraAttrs.ON_NODE_CLOSED),
	SLCommentHighlightColumn: createGetterAndSetter<number>(GroovyAstNodeExtraAttrs.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: createNumberAccumulator(GroovyAstNodeExtraAttrs.IDENTIFIER_CHILD_COUNT)
} as const;