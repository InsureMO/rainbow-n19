import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildClosedFunc} from '../node-attribute';
import {PointcutBasisDef, PointcutBasisDefType, PointcutBasisOnChildClosed, PointcutItemsToRecord} from './types';

type OnChildClosedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnChildClosed>;

export const buildOnChildClosedPointcut = (items?: PointcutBasisDef): Optional<OnChildClosedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		if ([
			PointcutBasisDefType.OnChildClosed,
			PointcutBasisDefType.CloseOnChildWithTokenIdClosed
		].includes(item[0])) {
			defs[item[0]] = item;
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