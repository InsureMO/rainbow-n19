import {GroovyAstNode} from '../../node';
import {AstRecognizer} from '../ast-recognizer';
import {
	ChildAcceptableCheckFunc,
	GroovyAstNodeAccumulativeAttributeNames,
	GroovyAstNodeAttributeNames,
	OnChildAppendedFunc,
	OnChildClosedFunc,
	OneOfOnChildAppendedFunc,
	OneOfOnChildClosedFunc,
	OnNodeClosedFunc,
	RecognizerAttrVisitor,
	RecognizerExtraAttribute,
	RecognizerExtraNumberAccumulator
} from './types';

export class NodeAttributeOperatorHelper {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static createAttrVisitor<V>(key: GroovyAstNodeAttributeNames): RecognizerExtraAttribute<V> {
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
	}

	static createNumberAccumulator(key: GroovyAstNodeAccumulativeAttributeNames): RecognizerExtraNumberAccumulator {
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

	/**
	 * create an on child appended function by given functions.
	 */
	static onChildAppendedOfFirstOrNone(...funcs: Array<OneOfOnChildAppendedFunc>): OneOfOnChildAppendedFunc {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			for (let index = 0, count = funcs.length; index < count; index++) {
				if (funcs[index](lastChildNode, astRecognizer)) {
					return true;
				}
			}
			return false;
		};
	}

	/**
	 * create an on child closed function by given functions.
	 */
	static onChildClosedOfFirstOrNone(...funcs: Array<OneOfOnChildClosedFunc>): OneOfOnChildClosedFunc {
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			for (let index = 0, count = funcs.length; index < count; index++) {
				if (funcs[index](lastChildNode, astRecognizer)) {
					return true;
				}
			}
			return false;
		};
	}
}

export const NodeAttributeOperator: RecognizerAttrVisitor = {
	// standard
	ChildAcceptableCheck: NodeAttributeOperatorHelper.createAttrVisitor<ChildAcceptableCheckFunc>(GroovyAstNodeAttributeNames.CHILD_ACCEPTABLE_CHECK),
	OnChildAppended: NodeAttributeOperatorHelper.createAttrVisitor<OnChildAppendedFunc>(GroovyAstNodeAttributeNames.ON_CHILD_APPENDED),
	OnChildClosed: NodeAttributeOperatorHelper.createAttrVisitor<OnChildClosedFunc>(GroovyAstNodeAttributeNames.ON_CHILD_CLOSED),
	OnNodeClosed: NodeAttributeOperatorHelper.createAttrVisitor<OnNodeClosedFunc>(GroovyAstNodeAttributeNames.ON_NODE_CLOSED),
	clear: (node: GroovyAstNode): RecognizerAttrVisitor => {
		node.clearAttrs();
		return NodeAttributeOperator;
	},
	// additional
	SLCommentHighlightColumn: NodeAttributeOperatorHelper.createAttrVisitor<number>(GroovyAstNodeAttributeNames.SL_COMMENT_HIGHLIGHT_COLUMN),
	IdentifierChildCount: NodeAttributeOperatorHelper.createNumberAccumulator(GroovyAstNodeAttributeNames.IDENTIFIER_CHILD_COUNT)
};
