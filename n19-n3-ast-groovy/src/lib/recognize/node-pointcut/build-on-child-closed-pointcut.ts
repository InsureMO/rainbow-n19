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
	PointcutItemsToRecord
} from './types';

type OnChildClosedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnChildClosed>;

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
			default: {
				// other types, ignored
				break;
			}
		}
		return defs;
	}, {} as OnChildClosedPointcutDefs) ?? {};

	return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const {tokenId: childTokenId} = lastChildNode;

		if (defs.CloseOnChildWithTokenIdClosed?.includes(childTokenId) ?? false) {
			astRecognizer.closeCurrentParent();
			return;
		}

		defs.OnChildClosed?.[1]?.(lastChildNode, astRecognizer);
	};
};