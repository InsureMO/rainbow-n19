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
	readonly get: (node: GroovyAstNode) => V;
	readonly set: (node: GroovyAstNode, value: V) => void;
	readonly clear: (node: GroovyAstNode) => void;
}

const createGetterAndSetter = <V>(key: GroovyAstNodeExtraAttrs | string): GroovyAstNodeWithExtraAttrGS<V> => {
	return {
		get: (node: GroovyAstNode) => node.attr<V>(key),
		set: (node: GroovyAstNode, value: V) => node.attrs<V>(key, value),
		clear: (node: GroovyAstNode) => node.attrs<undefined>(key, (void 0))
	};
};

export interface GroovyAstNodeWithExtraNumberAccumulator extends GroovyAstNodeWithExtraAttrGS<number> {
	readonly increase: (node: GroovyAstNode) => void;
	/* will not check exists number, so might introduce negative value */
	readonly decrease: (node: GroovyAstNode) => void;
	/* reset to 0 */
	readonly reset: (node: GroovyAstNode) => void;
}

const createNumberAccumulator = (key: GroovyAstNodeExtraAttrs | string): GroovyAstNodeWithExtraNumberAccumulator => {
	return {
		get: (node: GroovyAstNode) => node.attr<number>(key) ?? 0,
		set: (node: GroovyAstNode, value: number) => node.attrs<number>(key, value),
		clear: (node: GroovyAstNode) => node.attrs<undefined>(key, (void 0)),
		increase: (node: GroovyAstNode) => node.attrs<number>(key, (node.attr<number>(key) ?? 0) + 1),
		decrease: (node: GroovyAstNode) => node.attrs<number>(key, (node.attr<number>(key) ?? 0) - 1),
		reset: (node: GroovyAstNode) => node.attrs<number>(key, 0)
	};
};

/** Node extra attrs facade */
export const $Neaf = {
	ChildAcceptableCheck: createGetterAndSetter<ChildAcceptableCheckFunc>(GroovyAstNodeExtraAttrs.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: createGetterAndSetter<OnChildAppendedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_APPENDED),
	OnChildClosed: createGetterAndSetter<OnChildClosedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_CLOSED),
	OnNodeClosed: createGetterAndSetter<OnNodeClosedFunc>(GroovyAstNodeExtraAttrs.ON_NODE_CLOSED),
	createGetterAndSetter,
	createNumberAccumulator
} as const;
