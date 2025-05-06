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
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn'
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

/** Node extra attrs facade */
export const $NAF = {
	ChildAcceptableCheck: createGetterAndSetter<ChildAcceptableCheckFunc>(GroovyAstNodeExtraAttrs.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: createGetterAndSetter<OnChildAppendedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_APPENDED),
	OnChildClosed: createGetterAndSetter<OnChildClosedFunc>(GroovyAstNodeExtraAttrs.ON_CHILD_CLOSED),
	OnNodeClosed: createGetterAndSetter<OnNodeClosedFunc>(GroovyAstNodeExtraAttrs.ON_NODE_CLOSED),
	SLCommentHighlightColumn: createGetterAndSetter<number>(GroovyAstNodeExtraAttrs.SL_COMMENT_HIGHLIGHT_COLUMN)
} as const;