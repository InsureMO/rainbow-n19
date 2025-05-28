import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {AstRecognizer} from '../ast-recognizer';
import {OnNodeClosedFunc} from '../node-attribute';
import {PointcutHelper} from './pointcut-helper';
import {
	DisableElevateTrailingDetachable,
	OnNodeClosed, PointcutBasisDef,
	PointcutBasisDefType,
	PointcutBasisOnNodeClosed,
	PointcutItemsToRecord
} from './types';

type OnNodeClosedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnNodeClosed>;

export const buildOnNodeClosedPointcut = (items?: PointcutBasisDef): Optional<OnNodeClosedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		switch (item[0]) {
			case PointcutBasisDefType.OnNodeClosed: {
				defs.OnNodeClosed = item as OnNodeClosed;
				break;
			}
			case PointcutBasisDefType.DisableElevateTrailingDetachable: {
				defs.DisableElevateTrailingDetachable = item as DisableElevateTrailingDetachable;
				break;
			}
			default: {
				// other types, ignored
				break;
			}
		}
		return defs;
	}, {} as OnNodeClosedPointcutDefs) ?? {};

	return (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		defs.OnNodeClosed?.[1]?.(node, astRecognizer);
		if (defs.DisableElevateTrailingDetachable == null) {
			PointcutHelper.moveTrailingDetachableNodesToParentOnNodeClosed(node, astRecognizer);
		}
	};
};