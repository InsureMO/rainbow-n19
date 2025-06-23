import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OnNodeClosedFunc} from '../node-attribute';
import {PointcutUtils} from './pointcut-utils';
import {PointcutBasisDef, PointcutBasisDefType} from './types';

export const buildOnNodeClosedPointcut = (tokenId: TokenId, items?: PointcutBasisDef): Optional<OnNodeClosedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	let disableElevateTrailingDetachable = false;
	let onNodeClosed: Optional<OnNodeClosedFunc> = (void 0);
	for (const item of items) {
		switch (item[0]) {
			case PointcutBasisDefType.OnNodeClosed: {
				if (onNodeClosed != null) {
					throw new Error(`Multiple OnNodeClosed on token[name=${TokenId[tokenId]}, tokenId=${tokenId}] is not supported.`);
				} else {
					onNodeClosed = item[1];
				}
				break;
			}
			case PointcutBasisDefType.DisableElevateTrailingDetachable: {
				disableElevateTrailingDetachable = true;
				break;
			}
			default: {
				// do nothing
				break;
			}
		}
	}

	if (onNodeClosed == null && disableElevateTrailingDetachable) {
		return (void 0);
	}

	return (node: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		onNodeClosed?.(node, astRecognizer);
		if (!disableElevateTrailingDetachable) {
			PointcutUtils.moveTrailingDetachableNodesToParentOnNodeClosed(node, astRecognizer);
		}
	};
};
