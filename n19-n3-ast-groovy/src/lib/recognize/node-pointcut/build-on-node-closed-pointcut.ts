import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {AstRecognizer} from '../ast-recognizer';
import {OnNodeClosedFunc} from '../node-attribute';
import {PointcutUtils} from './pointcut-utils';
import {PointcutBasisDef, PointcutBasisDefType, PointcutBasisOnNodeClosed, PointcutItemsToRecord} from './types';

type OnNodeClosedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnNodeClosed>;

export const buildOnNodeClosedPointcut = (items?: PointcutBasisDef): Optional<OnNodeClosedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		if ([
			PointcutBasisDefType.OnNodeClosed,
			PointcutBasisDefType.DisableElevateTrailingDetachable
		].includes(item[0])) {
			defs[item[0]] = item;
		}
		return defs;
	}, {} as OnNodeClosedPointcutDefs) ?? {};

	return (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		defs.OnNodeClosed?.[1]?.(node, astRecognizer);
		if (defs.DisableElevateTrailingDetachable == null) {
			PointcutUtils.moveTrailingDetachableNodesToParentOnNodeClosed(node, astRecognizer);
		}
	};
};