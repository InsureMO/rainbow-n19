import {GroovyAstNode} from '../../node';
import {NodeAttributeOperator} from '../node-attribute';
import {buildChildAcceptableCheckPointcut} from './build-child-acceptable-check-pointcut';
import {buildOnChildAppendedPointcut} from './build-on-child-appended-pointcut';
import {buildOnChildClosedPointcut} from './build-on-child-closed-pointcut';
import {buildOnNodeClosedPointcut} from './build-on-node-closed-pointcut';
import {PointcutBasisDef, PointcutBasisDefType} from './types';

export const buildNodePointcut = (def: PointcutBasisDef) => {
	return (node: GroovyAstNode): void => {
		// clear all
		NodeAttributeOperator.clear(node);

		const childAcceptableCheck = buildChildAcceptableCheckPointcut(def);
		if (childAcceptableCheck != null) {
			NodeAttributeOperator.ChildAcceptableCheck.set(node, childAcceptableCheck);
		}
		const onChildAppended = buildOnChildAppendedPointcut(def);
		if (onChildAppended != null) {
			NodeAttributeOperator.OnChildAppended.set(node, onChildAppended);
		}
		const onChildClosed = buildOnChildClosedPointcut(def);
		if (onChildClosed != null) {
			NodeAttributeOperator.OnChildClosed.set(node, onChildClosed);
		}
		const onNodeClosed = buildOnNodeClosedPointcut(def);
		if (onNodeClosed != null) {
			NodeAttributeOperator.OnNodeClosed.set(node, onNodeClosed);
		}

		def.forEach((item) => {
			const type = item[0];
			if (type === PointcutBasisDefType.TakeLBraceAs) {
				NodeAttributeOperator.TakeLBraceAs.set(node, item[1]);
			} else if (type === PointcutBasisDefType.TakeLBraceAsEnd) {
				NodeAttributeOperator.TakeLBraceAs.set(node, item[1]);
			}
		});
	};
};