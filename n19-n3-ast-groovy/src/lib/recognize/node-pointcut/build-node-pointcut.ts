import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {NodeAttributeOperator} from '../node-attribute';
import {buildChildAcceptableCheckPointcut} from './build-child-acceptable-check-pointcut';
import {buildOnChildAppendedPointcut} from './build-on-child-appended-pointcut';
import {buildOnChildClosedPointcut} from './build-on-child-closed-pointcut';
import {buildOnNodeClosedPointcut} from './build-on-node-closed-pointcut';
import {PointcutBasisDef} from './types';

export const buildNodePointcut = (tokenId: TokenId, def: PointcutBasisDef) => {
	const childAcceptableCheck = buildChildAcceptableCheckPointcut(tokenId, def);
	const onChildAppended = buildOnChildAppendedPointcut(tokenId, def);
	const onChildClosed = buildOnChildClosedPointcut(tokenId, def);
	const onNodeClosed = buildOnNodeClosedPointcut(tokenId, def);

	return (node: GroovyAstNode): void => {
		// clear all
		NodeAttributeOperator.clear(node);

		if (childAcceptableCheck != null) {
			NodeAttributeOperator.ChildAcceptableCheck.set(node, childAcceptableCheck);
		}
		if (onChildAppended != null) {
			NodeAttributeOperator.OnChildAppended.set(node, onChildAppended);
		}
		if (onChildClosed != null) {
			NodeAttributeOperator.OnChildClosed.set(node, onChildClosed);
		}
		if (onNodeClosed != null) {
			NodeAttributeOperator.OnNodeClosed.set(node, onNodeClosed);
		}
	};
};