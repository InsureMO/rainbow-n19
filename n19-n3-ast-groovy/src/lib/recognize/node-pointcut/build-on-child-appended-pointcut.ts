import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildAppendedFunc} from '../node-attribute';
import {
	EndsWithAnyOfTokenIdsAppended,
	EndsWithChecked,
	OnChildAppended,
	PointcutBasisDef,
	PointcutBasisDefType,
	PointcutBasisOnChildAppended,
	PointcutItemsToRecord
} from './types';

type OnChildAppendedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnChildAppended>;

export const buildOnChildAppendedPointcut = (items?: PointcutBasisDef): Optional<OnChildAppendedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		switch (item[0]) {
			case PointcutBasisDefType.OnChildAppended: {
				defs.OnChildAppended = item as OnChildAppended;
				break;
			}
			case PointcutBasisDefType.EndsWithAnyOfTokenIdsAppended: {
				defs.EndsWithAnyOfTokenIdsAppended = item as EndsWithAnyOfTokenIdsAppended;
				break;
			}
			case PointcutBasisDefType.EndsWithChecked: {
				defs.EndsWithChecked = item as EndsWithChecked;
				break;
			}
			default: {
				// other types, ignored
				break;
			}
		}
		return defs;
	}, {} as OnChildAppendedPointcutDefs) ?? {};

	return (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): void => {
		const {tokenId: childTokenId} = lastChildNode;

		if (defs.EndsWithAnyOfTokenIdsAppended?.includes(childTokenId)
			?? defs.EndsWithChecked?.[1]?.(lastChildNode, astRecognizer)
			?? false) {
			astRecognizer.closeCurrentParent();
			return;
		}

		defs.OnChildAppended?.[1]?.(lastChildNode, astRecognizer);
	};
};