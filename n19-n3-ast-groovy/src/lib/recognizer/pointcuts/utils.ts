import {GroovyAstNode} from '../../node';
import {GroovyAstNodeRecognizerAccumulativeAttrs, GroovyAstNodeRecognizerAttrs} from './attrs';
import {NodePointcutOperator} from './operator';
import {RecognizerExtraAttribute, RecognizerExtraNumberAccumulator} from './types';

export const createAttrVisitor = <V>(key: GroovyAstNodeRecognizerAttrs): RecognizerExtraAttribute<V> => {
	return {
		get: (node: GroovyAstNode) => node.getAttr<V>(key),
		set: (node: GroovyAstNode, value: V) => {
			node.setAttr<V>(key, value);
			return NodePointcutOperator;
		},
		clear: (node: GroovyAstNode) => {
			node.setAttr<undefined>(key, (void 0));
			return NodePointcutOperator;
		}
	};
};

export const createNumberAccumulator = (key: GroovyAstNodeRecognizerAccumulativeAttrs): RecognizerExtraNumberAccumulator => {
	return {
		get: (node: GroovyAstNode) => node.getAttr<number>(key) ?? 0,
		set: (node: GroovyAstNode, value: number) => {
			node.setAttr<number>(key, value);
			return NodePointcutOperator;
		},
		clear: (node: GroovyAstNode) => {
			node.setAttr<undefined>(key, (void 0));
			return NodePointcutOperator;
		},
		increase: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) + 1),
		decrease: (node: GroovyAstNode) => node.setAttr<number>(key, (node.getAttr<number>(key) ?? 0) - 1),
		reset: (node: GroovyAstNode) => node.setAttr<number>(key, 0)
	};
};
