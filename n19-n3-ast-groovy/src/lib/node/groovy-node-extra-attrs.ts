import {GroovyAstNode} from './groovy-node';

export enum GroovyAstNodeExtraAttrs {
	CHILD_ACCEPTABLE_CHECK = '$$ChildAcceptable',
	/* to identify the highlight column of single line comment */
	SL_COMMENT_HIGHLIGHT_COLUMN = '$$SLCommentHighlightColumn'
}

export type ChildAcceptableCheckFunc = (node: GroovyAstNode) => boolean;

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
	SLCommentHighlightColumn: createGetterAndSetter<number>(GroovyAstNodeExtraAttrs.SL_COMMENT_HIGHLIGHT_COLUMN)
} as const;