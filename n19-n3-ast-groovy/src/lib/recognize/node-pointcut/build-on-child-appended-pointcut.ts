import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildAppendedFunc} from '../node-attribute';
import {NodePointcuts} from './pointcut-defs';
import {
	EndWithAnyOfTokenIdsAppended,
	EndWithChecked,
	OnChildAppended,
	PointcutBasisDef,
	PointcutBasisDefType,
	PointcutBasisOnChildAppended,
	PointcutItemsToRecord,
	ReviseCodeBlockTo
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
			case PointcutBasisDefType.ReviseCodeBlockTo: {
				defs.ReviseCodeBlockTo = item as ReviseCodeBlockTo;
				break;
			}
			case PointcutBasisDefType.EndWithAnyOfTokenIdsAppended: {
				defs.EndWithAnyOfTokenIdsAppended = item as EndWithAnyOfTokenIdsAppended;
				break;
			}
			case PointcutBasisDefType.EndWithChecked: {
				defs.EndWithChecked = item as EndWithChecked;
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

		// revise code block to
		{
			if (childTokenId === TokenId.CodeBlock && defs.ReviseCodeBlockTo != null) {
				lastChildNode.replaceTokenNature(defs.ReviseCodeBlockTo[1], lastChildNode.tokenType);
				NodePointcuts.initialize(lastChildNode);
				return;
			}
		}

		if (defs.EndWithAnyOfTokenIdsAppended?.includes(childTokenId)
			?? defs.EndWithChecked?.[1]?.(lastChildNode, astRecognizer)
			?? false) {
			astRecognizer.closeCurrentParent();
			return;
		}

		defs.OnChildAppended?.[1]?.(lastChildNode, astRecognizer);
	};
};