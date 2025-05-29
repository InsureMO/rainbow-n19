import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {AstRecognizer} from '../ast-recognizer';
import {ChildAcceptableCheckFunc} from '../node-attribute';
import {
	EndWithAnyOfTokenIdsAppended,
	PointcutBasisChildAcceptableCheck,
	PointcutBasisDef,
	PointcutBasisDefType,
	PointcutItemsToRecord,
	ReviseCodeBlockTo,
	ReviseTokenTo
} from './types';

type ChildAcceptableCheckPointcutDefs = PointcutItemsToRecord<
	| PointcutBasisChildAcceptableCheck
	| ReviseCodeBlockTo | ReviseTokenTo
	| EndWithAnyOfTokenIdsAppended>;

export const buildChildAcceptableCheckPointcut = (items?: PointcutBasisDef): Optional<ChildAcceptableCheckFunc> => {
	if (items == null || items.length === 0) {
		return (void 0);
	}

	const defs = items?.reduce((defs, item) => {
		if ([
			PointcutBasisDefType.ChildAcceptableCheck,
			PointcutBasisDefType.DisableBase5AsChild,
			PointcutBasisDefType.AcceptableTokenIds,
			PointcutBasisDefType.AcceptableTokenTypes,
			PointcutBasisDefType.AcceptWhen,
			PointcutBasisDefType.UnacceptableTokenIds,
			PointcutBasisDefType.UnacceptedWhen,
			PointcutBasisDefType.ReviseCodeBlockTo,
			PointcutBasisDefType.ReviseTokenTo,
			PointcutBasisDefType.EndWithAnyOfTokenIdsAppended
		].includes(item[0])) {
			defs[item[0]] = item;
		}
		return defs;
	}, {} as ChildAcceptableCheckPointcutDefs) ?? {};

	let tokenIdsAcceptedByReviseTokenTo: Optional<Array<TokenId>> = (void 0);
	const reviseTokenTo = defs.ReviseTokenTo;
	if (reviseTokenTo != null) {
		tokenIdsAcceptedByReviseTokenTo = [];
		const fromTokenIds = Object.keys(reviseTokenTo[1]).map(tokenId => Number(tokenId) as TokenId);
		tokenIdsAcceptedByReviseTokenTo.push(...fromTokenIds);
		fromTokenIds.forEach(fromTokenId => {
			const to = reviseTokenTo[1][fromTokenId];
			if (Array.isArray(to)) {
				tokenIdsAcceptedByReviseTokenTo.push(to[0]);
			} else {
				tokenIdsAcceptedByReviseTokenTo.push(to);
			}
		});
	}

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
		// revise token to, accept from/to token ids
		{
			if (tokenIdsAcceptedByReviseTokenTo?.includes(childTokenId)) {
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