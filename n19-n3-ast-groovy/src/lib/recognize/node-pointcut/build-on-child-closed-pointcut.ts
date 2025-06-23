import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildClosedFunc, OneOfOnChildClosedFunc} from '../node-attribute';
import {CloseOnChildWithTokenIdClosed, PointcutBasisDef, PointcutBasisDefType} from './types';

export class OnChildClosedPointcutBuilder {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static buildCloseOnChildWithTokenIdClosed(defs: CloseOnChildWithTokenIdClosed): OneOfOnChildClosedFunc {
		const [, ...tokenIds] = defs;
		return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
			if (tokenIds.includes(lastChildNode.tokenId)) {
				astRecognizer.closeCurrentParent();
				return true;
			}
			return false;
		};
	}
}

export const buildOnChildClosedPointcut = (tokenId: TokenId, items?: PointcutBasisDef): Optional<OnChildClosedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const closeOnChildClosedFuncs: Array<OneOfOnChildClosedFunc> = [];
	let onChildClosed: Optional<OnChildClosedFunc> = (void 0);
	for (const item of items) {
		switch (item[0]) {
			case PointcutBasisDefType.CloseOnChildWithTokenIdClosed: {
				closeOnChildClosedFuncs.push(OnChildClosedPointcutBuilder.buildCloseOnChildWithTokenIdClosed(item));
				break;
			}
			case PointcutBasisDefType.OnChildClosed: {
				if (onChildClosed != null) {
					throw new Error(`Multiple OnChildClosed on token[name=${TokenId[tokenId]}, tokenId=${tokenId}] is not supported.`);
				} else {
					onChildClosed = item[1];
				}
				break;
			}
			default: {
				// do nothing
				break;
			}
		}
	}

	if (closeOnChildClosedFuncs.length === 0 && onChildClosed == null) {
		return (void 0);
	}

	return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		let closed = false;
		for (const func of closeOnChildClosedFuncs) {
			if (func(lastChildNode, astRecognizer)) {
				closed = true;
				break;
			}
		}

		if (!closed) {
			onChildClosed?.(lastChildNode, astRecognizer);
		}
	};
};