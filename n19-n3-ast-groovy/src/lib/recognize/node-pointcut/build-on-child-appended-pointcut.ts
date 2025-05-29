import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {OnChildAppendedFunc} from '../node-attribute';
import {NodePointcuts} from './pointcut-defs';
import {PointcutBasisDef, PointcutBasisDefType, PointcutBasisOnChildAppended, PointcutItemsToRecord} from './types';

type OnChildAppendedPointcutDefs = PointcutItemsToRecord<PointcutBasisOnChildAppended>;

export const buildOnChildAppendedPointcut = (items?: PointcutBasisDef): Optional<OnChildAppendedFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		if ([
			PointcutBasisDefType.OnChildAppended,
			PointcutBasisDefType.ReviseCodeBlockTo,
			PointcutBasisDefType.ReviseTokenTo,
			PointcutBasisDefType.EndWithAnyOfTokenIdsAppended,
			PointcutBasisDefType.EndWithChecked
		].includes(item[0])) {
			defs[item[0]] = item;
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
		// revise token to
		{
			const reviseTo = defs.ReviseTokenTo?.[1]?.[childTokenId];
			if (reviseTo != null) {
				if (Array.isArray(reviseTo)) {
					lastChildNode.replaceTokenNature(reviseTo[0], reviseTo[1]);
				} else {
					lastChildNode.replaceTokenNature(reviseTo, lastChildNode.tokenType);
				}
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
