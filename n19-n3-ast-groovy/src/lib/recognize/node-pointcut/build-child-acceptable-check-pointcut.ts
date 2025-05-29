import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {ChildAcceptableCheckFunc} from '../node-attribute';
import {
	AcceptableTokenIds,
	AcceptableTokenTypes,
	AcceptWhen,
	ChildAcceptableCheck,
	DisableBase5AsChild,
	EndWithAnyOfTokenIdsAppended,
	PointcutBasisChildAcceptableCheck,
	PointcutBasisDef,
	PointcutBasisDefType,
	PointcutItemsToRecord,
	ReviseCodeBlockTo,
	UnacceptableTokenIds,
	UnacceptedWhen
} from './types';

type ChildAcceptableCheckPointcutDefs = PointcutItemsToRecord<PointcutBasisChildAcceptableCheck | ReviseCodeBlockTo | EndWithAnyOfTokenIdsAppended>;

export const buildChildAcceptableCheckPointcut = (items?: PointcutBasisDef): Optional<ChildAcceptableCheckFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		switch (item[0]) {
			case PointcutBasisDefType.ChildAcceptableCheck: {
				defs.ChildAcceptableCheck = item as ChildAcceptableCheck;
				break;
			}
			case PointcutBasisDefType.DisableBase5AsChild: {
				defs.DisableBase5AsChild = item as DisableBase5AsChild;
				break;
			}
			case PointcutBasisDefType.AcceptableTokenIds: {
				defs.AcceptableTokenIds = item as AcceptableTokenIds;
				break;
			}
			case PointcutBasisDefType.AcceptableTokenTypes: {
				defs.AcceptableTokenTypes = item as AcceptableTokenTypes;
				break;
			}
			case PointcutBasisDefType.AcceptWhen: {
				defs.AcceptWhen = item as AcceptWhen;
				break;
			}
			case PointcutBasisDefType.UnacceptableTokenIds: {
				defs.UnacceptableTokenIds = item as UnacceptableTokenIds;
				break;
			}
			case PointcutBasisDefType.UnacceptedWhen: {
				defs.UnacceptedWhen = item as UnacceptedWhen;
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
			default: {
				// other types, ignored
				break;
			}
		}
		return defs;
	}, {} as ChildAcceptableCheckPointcutDefs) ?? {};

	return (mightBeChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		const {tokenId: childTokenId, tokenType: childTokenType} = mightBeChildNode;

		// base 5 token ids
		{
			if (defs.DisableBase5AsChild == null
				&& [TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine, TokenId.SingleLineComment, TokenId.MultipleLinesComment].includes(childTokenId)) {
				// base 5 token ids enabled, and given child is one of it, accepted
				return true;
			}
		}
		// revise code block to, accept code block and token which revised to
		{
			if (defs.ReviseCodeBlockTo != null
				&& (TokenId.CodeBlock === childTokenId || defs.ReviseCodeBlockTo.includes(childTokenId))) {
				return true;
			}
		}
		// end token ids
		{
			if (defs.EndWithAnyOfTokenIdsAppended?.includes(childTokenId) ?? false) {
				return true;
			}
		}
		// reject token ids
		{
			if (defs.UnacceptableTokenIds?.includes(childTokenId) ?? false) {
				return false;
			}
		}
		// reject when
		{
			if (defs.UnacceptedWhen?.[1]?.(mightBeChildNode, astRecognizer) ?? false) {
				return false;
			}
		}

		let hasRule = false;
		// accept token ids
		{
			const acceptableTokenIds = defs.AcceptableTokenIds;
			if (acceptableTokenIds != null) {
				if (acceptableTokenIds.includes(childTokenId)) {
					return true;
				}
				hasRule = true;
			}
		}
		// accept token types
		{
			const acceptableTokenTypes = defs.AcceptableTokenTypes;
			if (acceptableTokenTypes != null) {
				if (acceptableTokenTypes.includes(childTokenType)) {
					return true;
				}
				hasRule = true;
			}
		}
		// accept when
		{
			const acceptableTokenIdsWhen = defs.AcceptWhen;
			if (acceptableTokenIdsWhen != null) {
				if (acceptableTokenIdsWhen[1](mightBeChildNode, astRecognizer)) {
					return true;
				}
				hasRule = true;
			}
		}
		// pointcut function
		{
			const func = defs.ChildAcceptableCheck;
			if (func != null) {
				return func[1](mightBeChildNode, astRecognizer);
			}
		}
		// not "acceptXXX" function specified, then check if there is any rule on token ids or types
		// 1. if exists, means the given child not pass the check, return false
		// 2. no exists, means no rule, return true, accept any token
		return !hasRule;
	};
};