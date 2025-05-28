import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildClosedFunc} from '../node-attribute';
import {
	CloseOnChildWithTokenIdClosed,
	OnChildClosed,
	PointcutBasisDef,
	PointcutBasisDefType,
	PointcutBasisOnChildClosed,
	PointcutItemsToRecord,
	TakeLBraceAsEnd
} from './types';

type OnChildClosedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnChildClosed | TakeLBraceAsEnd>;

export const buildOnChildClosedPointcut = (items?: PointcutBasisDef): Optional<OnChildClosedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		switch (item[0]) {
			case PointcutBasisDefType.OnChildClosed: {
				defs.OnChildClosed = item as OnChildClosed;
				break;
			}
			case PointcutBasisDefType.CloseOnChildWithTokenIdClosed: {
				defs.CloseOnChildWithTokenIdClosed = item as CloseOnChildWithTokenIdClosed;
				break;
			}
			case PointcutBasisDefType.TakeLBraceAsEnd: {
				defs.TakeLBraceAsEnd = item as TakeLBraceAsEnd;
				break;
			}
			default: {
				// other types, ignored
				break;
			}
		}
		return defs;
	}, {} as OnChildClosedPointcutDefs) ?? {};

	return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const {tokenId: childTokenId} = lastChildNode;

		if (defs.CloseOnChildWithTokenIdClosed?.includes(childTokenId)
			?? defs.TakeLBraceAsEnd?.includes(childTokenId)
			?? false) {
			astRecognizer.closeCurrentParent();
			return;
		}

		defs.OnChildClosed?.[1]?.(lastChildNode, astRecognizer);
	};
};